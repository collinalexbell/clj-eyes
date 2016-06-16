(ns clj-eyes.core
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

(soc/init)
(require '[clj-eyes.web-server :as server]) 
(defn init []
  (load-current-img tomato-pic)

  ;This is ugly as F, I should use a state manager for this.
  (server/start-server))

;(def blurred (Mat. 512 512 CvType/CV_8UC3))
;(Imgproc/GaussianBlur tomato-pic blurred (Size. 5 5) 3 3)

(init)

