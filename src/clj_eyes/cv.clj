(ns clj-eyes.cv
  (:require [clj-eyes.web-socket :as soc]))

(import '[org.opencv.core MatOfByte Mat CvType Size]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])

(def tomato-pic (Imgcodecs/imread "resources/imgs/tomato_plants.jpg"))

(def current-img (atom nil))

(defn load-current-img [img]
  (swap! current-img
         (fn [throw-away]
           (let [img-buf (MatOfByte.)]
            (Imgcodecs/imencode ".jpg" img img-buf)
            img-buf))))

(defn get-current-image []
  @current-img)

(defn notify-client-of-img-change []
  (soc/chsk-send! 1 [:opencv/reload {:data nil}]))


;Init the module
(load-current-img tomato-pic)
