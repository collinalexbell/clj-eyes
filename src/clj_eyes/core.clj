(ns clj-eyes.core
  (:require [clj-eyes.web-socket :as soc]))

(soc/init)
(require '[clj-eyes.web-server :as server]) 
(defn init []

  ;This is ugly as F, I should use a state manager for this.
  (server/start-server))

;(def blurred (Mat. 512 512 CvType/CV_8UC3))
;(Imgproc/GaussianBlur tomato-pic blurred (Size. 5 5) 3 3)

(init)

