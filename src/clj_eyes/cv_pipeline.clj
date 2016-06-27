(ns clj-eyes.cv-pipeline
  (:require [taoensso.sente :as sente]
            [clj-eyes.web-socket :as soc]
            [clj-eyes.cv-filter :as filter]
            [clj-eyes.templates.pipeline-template])
  (:use hiccup.core))

(import '[org.opencv.core MatOfInt MatOfByte Mat CvType Size]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])

(def loaded-pipelines (atom {}))

@loaded-pipelines

(def default-img
  (Imgcodecs/imread "resources/public/imgs/test-pattern.png"))

(defn get-pipelines []
  @loaded-pipelines)

(defn notify-client-of-img-change [uid id]
  (soc/chsk-send! uid [:pipeline/reload-img {:id id}]))

(defn pipeline-frame
  "Will generate the data structure that is neccisary for a pipeline frame in the gui"
  [source-frame id]
  {:source-frame source-frame :id id})

(defn add-transformation-params-to [transformation-name-keyword pipeline-frame]
  (assoc pipeline-frame
   :transformation-params (transformation-name-keyword filter/filter-params)
   :transformation-label  (filter/transformation-labels transformation-name-keyword)))


(defn load-image-matrix-into-pipeline-frame
  "Will create a matrix field in the pipeline frame that is takes on the value of img-matrix"
  [pipeline-frame img-matrix]
  (assoc pipeline-frame :img-matrix img-matrix))

(defn fetch-img-matrix-from [frame]
  "Will get the image matrix from frame"
  (get frame :img-matrix nil))

(defn get-pipeline-from-list [list-of-pipelines uid]
  (get list-of-pipelines uid {}))

(defn get-frame-from-pipeline
  ([pipeline id] (get pipeline id))
  ([pipeline id constr-if-nil] (get pipeline id (constr-if-nil))))

(defn generate-transform-id [pipeline-list uid]
  (keyword
   (str "transformation"
    (count (get-pipeline-from-list pipeline-list uid)))))

(defn load-new-source
  "Will open the src file and load it into memory as an opencv mat
  Must take an atom as its 3rd parameter and will return the atom after loading"
  [src-file uid pipeline-list]
  ;We want to test to make sure that there is not a frame with id: pipeline-source-img in the pipeline frames map
  (let [pipeline (get-pipeline-from-list pipeline-list uid)
        frame    (get-frame-from-pipeline
                  pipeline :pipeline-source-img
                  ;Constructor if pipeline doesn't exist
                  #(pipeline-frame nil :pipeline-source-img))]
   (assoc pipeline-list uid
          (assoc
           pipeline
           :pipeline-source-img
           (load-image-matrix-into-pipeline-frame
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
                             (MatOfInt. (into-array Integer/TYPE [Imgcodecs/CV_IMWRITE_WEBP_QUALITY 30]))))
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
        frame (get-frame-from-pipeline pipeline img-id)
        img-src (fetch-img-matrix-from frame)
        img-buf (MatOfByte.)]
    ;Fetch the matrix from the frame and test that it is not nil
    (if (not (nil? (fetch-img-matrix-from frame)))
      (do
        (Imgcodecs/imencode ".webp"
                            img-src
                            img-buf
                            ;;Settings, specifically image quality
                            (MatOfInt. (into-array Integer/TYPE [Imgcodecs/CV_IMWRITE_WEBP_QUALITY 30])))
       {:type :in-memory :value img-buf})
      nil)))


(defn mat-with-size-of [parent-mat]
  (Mat. (.size parent-mat) CvType/CV_8UC3))

(defn do-transform [parent-frame transformation]
  (let [parent-mat (get parent-frame :img-matrix default-img)
        rv (mat-with-size-of parent-mat) 
        name (transformation :transformation-name) 
        params (map #(:value %) (transformation :transformation-params))
        name-symbol (symbol "clj-eyes.cv-filter" name)]
    (apply (eval  name-symbol) (cons parent-mat (cons rv params)))
    rv))


(defn add-transformation [pipeline-list transformation-selection uid parent-frame-name-str]
  (let [pipeline (get-pipeline-from-list pipeline-list uid)
        parent-frame (get-frame-from-pipeline pipeline-list (keyword parent-frame-name-str))
        frame-id (generate-transform-id pipeline-list uid)]

    {:pipelines
     (assoc pipeline-list uid
        (assoc pipeline frame-id  
            (add-transformation-params-to
                (keyword transformation-selection)
                (load-image-matrix-into-pipeline-frame
                 (pipeline-frame (keyword parent-frame-name-str) frame-id)
                 (do-transform parent-frame
                               {:transformation-name
                                transformation-selection

                                :transformation-params
                                (filter/generate-default-params filter/filter-params (keyword transformation-selection))})))))

     :frame-id frame-id}))


