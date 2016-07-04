(ns clj-eyes.pipeline-list
  (:require [taoensso.sente :as sente]
            [clj-eyes.web-socket :as soc]
            [clj-eyes.cv-filter :as filter]
            [clj-eyes.templates.pipeline-template]
            [clj-eyes.pipeline-frame :as pipeline-frame]
            [clj-eyes.pipeline :as pipeline])
  (:use hiccup.core))

(import '[org.opencv.core MatOfInt MatOfByte Mat CvType Size Core Scalar]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])


(defn mat-eq? [mat1 mat2]
  (let [mat-dif  (Mat. (.size mat1) CvType/CV_8UC1)]
   (Core/compare mat1 mat2 mat-dif Core/CMP_NE)
   (if (= (Scalar. 0 0 0 0) (Core/sumElems mat-dif))
     true
     false)))

(def loaded-pipelines (atom {}))

@loaded-pipelines

(defn get-pipelines []
  @loaded-pipelines)

(get-pipelines)

(defrecord pipeline-specifier [uid id])

(defn notify-client-of-img-change
  "Will notify the client via socket of a change ina pipeline frame
   Accepts a pipeline-specifier"
  ([uid id]
   (soc/chsk-send! uid [:pipeline/reload-img {:id id}]))

  ([the-pipeline-specifier]
   (soc/chsk-send!
    (:uid the-pipeline-specifier)
    [:pipeline/reload-img {:id (:id the-pipeline-specifier)}])))

(defn notify-client-of-frame-deletion [uid closed-id affected-ids]
  ;Notify the client that the image has now been removed.
  (soc/chsk-send! uid [:pipeline/close-frame {:id closed-id}])

  ;Notify the client of img changes
  (doall (map #(notify-client-of-img-change
                (->pipeline-specifier
                 uid
                 %1))
              affected-ids)))

(defn get-pipeline-from-list [list-of-pipelines uid]
  (get list-of-pipelines uid {}))


(defn load-new-source
  "Will open the src file and load it into memory as an opencv mat
  Must take an atom as its 3rd parameter and will return the atom after loading"
  [src-file uid pipeline-list]
  ;We want to test to make sure that there is not a frame with id: pipeline-source-img in the pipeline frames map
  (let [pipeline (get-pipeline-from-list pipeline-list uid)
        frame    (pipeline/get-frame-from-pipeline
                  pipeline :pipeline-source-img
                  ;Constructor if pipeline doesn't exist
                  #(pipeline-frame/pipeline-frame nil :pipeline-source-img :src))]
   (assoc pipeline-list uid
          (pipeline/insert-frame
           pipeline
           :pipeline-source-img
           (pipeline-frame/load-image-matrix-into-pipeline-frame
            frame 
            (Imgcodecs/imread src-file))))))  

(defn update-pipeline-list [new-list]
  (swap! loaded-pipelines (fn [ignore-me] new-list)))


(defn -fetch-src-webp [uid pipelines]
  "Will return a map with either a data field with a value of MatOfByte
   or a file-name field of type string which will allow the web-server to serve the file appropriately"
  (let [pipeline (get @pipelines uid {})
        img-buf (MatOfByte.)
        img-src (get pipeline :data nil)]
        (if (not (nil? img-src))
         ;Convert the image if it actually has data, this will have side effects
         (Imgcodecs/imencode ".webp"
                             img-src
                             img-buf
                             ;;Settings, specifically image quality
                             (MatOfInt. (into-array Integer/TYPE [Imgcodecs/CV_IMWRITE_WEBP_QUALITY 15]))))
    {:data
     (if (not (.empty img-buf))
       img-buf
       nil)
     :src-file
     (get pipeline :src-file nil)}))


(defn fetch-src-webp [uid]
  "Will return a map with either a data field with a value of MatOfByte
   or a file-name field of type string which will allow the web-server to serve the file appropriately"
  (-fetch-src-webp uid loaded-pipelines))


(defn fetch-webp [list-of-pipelines uid img-id]
    "
     A method used to fetch images from the pipeline.
     Returns: MatOfByte representation of a webp image
     Example call in real life:
     (pipeline/fetch-webp (:uid (request :session))
                              (:id (:params request)))
    "
  (let [pipeline (get-pipeline-from-list list-of-pipelines uid)
        frame (pipeline/get-frame-from-pipeline pipeline img-id)
        img-src (pipeline-frame/fetch-img-matrix-from frame)
        img-buf (MatOfByte.)]
    ;Fetch the matrix from the frame and test that it is not nil
    (if (not (nil? (pipeline-frame/fetch-img-matrix-from frame)))
      (do
        (Imgcodecs/imencode ".webp"
                            img-src
                            img-buf
                            ;;Settings, specifically image quality
                            (MatOfInt. (into-array Integer/TYPE [Imgcodecs/CV_IMWRITE_WEBP_QUALITY 30])))
       {:type :in-memory :value img-buf})
      nil)))



(defn add-transformation [pipeline-list transformation-selection uid parent-frame-name-str]
  (let [pipeline (get-pipeline-from-list pipeline-list uid)
        parent-frame (pipeline/get-frame-from-pipeline pipeline (keyword parent-frame-name-str))
        frame-id (pipeline/generate-transform-id pipeline)]

    {:pipelines
     (assoc pipeline-list uid
        (pipeline/insert-frame pipeline frame-id  
            (pipeline-frame/add-current-transformation-params-to
             (filter/generate-default-params filter/filter-params (keyword transformation-selection))
             (pipeline-frame/add-transformation-params-to
              (keyword transformation-selection)
              (pipeline-frame/load-image-matrix-into-pipeline-frame
               (pipeline-frame/pipeline-frame (keyword parent-frame-name-str) frame-id (keyword transformation-selection)) 
               (pipeline/do-transform parent-frame
                             {:transformation-name
                              transformation-selection

                              :transformation-params
                              (filter/generate-default-params filter/filter-params (keyword transformation-selection))}))))))

     :frame-id frame-id}))


(defn update-transform
  "The function that takes a pipeline-list, a uid and a data struct with an :id of the transformation as well as the new :param-list
  The function will return a pipeline-list with the new transform data associated with it"
  [pipeline-list uid data]
  (println "updating transform")
  (let [pipeline
        (get-pipeline-from-list pipeline-list uid)

        frame
        (pipeline/get-frame-from-pipeline 
            pipeline
            (:id data))]

    (assoc pipeline-list uid
     (pipeline/update-frame pipeline (:id data)
      (pipeline-frame/add-current-transformation-params-to
       (:param-list data)
       (pipeline-frame/load-image-matrix-into-pipeline-frame
        frame
        (pipeline/do-transform (pipeline/fetch-parent-frame pipeline frame)
                      {:transformation-name (:function-name data)
                       :transformation-params (:param-list data)})))))))

