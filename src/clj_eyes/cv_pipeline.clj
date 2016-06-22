(ns clj-eyes.cv-pipeline
  (:require [taoensso.sente :as sente]
            [clj-eyes.web-socket :as soc])
  (:use hiccup.core))

(import '[org.opencv.core MatOfInt MatOfByte Mat CvType Size]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])

(def loaded-pipelines (atom {}))

(defn load-new-source
  "Will open the src file and load it into memory as an opencv mat
  Must take an atom as its 3rd parameter and will return the atom after loading"
  [src-file uid map-atom]
  (swap! map-atom assoc uid
         (assoc
          ;fetch the entire old pipeline if it exists
          (get @map-atom uid {})     
          :data
          ;assoc into it the new src Mat
          (Imgcodecs/imread src-file)))
  map-atom)  


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
  (-fetch-src-webp uid loaded-pipelines))


;Only handlers should be touching state
(defn upload-src-request-handler [req]
  (let [session (:session req)
        uid (:uid session)]
    ;;Converting a File to a pathname only to use CV to load the file again seems a bit redundant, but CV cant imread from File obj
    (load-new-source (.toString (:tempfile (:src-file (:params req)))) uid loaded-pipelines)))


(defn load-current-img [img]
  (swap! current-img
         (fn [throw-away]
           (let [img-buf (MatOfByte.)]
             (Imgcodecs/imencode ".webp" img img-buf (MatOfInt. (into-array Integer/TYPE [Imgcodecs/CV_IMWRITE_WEBP_QUALITY 30])))
            img-buf))))

(java.io.ByteArrayInputStream. (.toArray (cv/get-current-image))

