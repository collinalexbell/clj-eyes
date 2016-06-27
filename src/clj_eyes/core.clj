(ns clj-eyes.core
  (:require [clj-eyes.web-socket :as soc]
            [clj-eyes.web-server :as server]
            clj-eyes.event-message-handler))


(defn -main []
  ;(def blurred (Mat. 512 512 CvType/CV_8UC3))
  ;(Imgproc/GaussianBlur tomato-pic blurred (Size. 5 5) 3 3)
  (server/start-server))

