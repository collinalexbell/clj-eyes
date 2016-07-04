(ns clj-eyes.pipeline-list-test
  (:use clojure.test)
  (:require [clj-eyes.pipeline-list :as pipeline-list]))

(import '[org.opencv.core MatOfInt MatOfByte Mat CvType Size]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])


(deftest mat-eq?
  (let [mat-1 (Imgcodecs/imread "resources/public/imgs/test-pattern.png")
        mat-2 (Imgcodecs/imread "resources/public/imgs/test-pattern.png")
        mat-3 (pipeline/mat-with-size-of mat-1)
        mat-4 (pipeline/mat-with-size-of mat-1)]
    (is (pipeline/mat-eq? mat-1 mat-2))
    ;Blur the image and test for equality
    (Imgproc/GaussianBlur mat-1 mat-3 (Size. 3 3) 0.0)
    (Imgproc/GaussianBlur mat-1 mat-4 (Size. 3 3) 0.0)
    (is (not (pipeline/mat-eq? mat-1 mat-3)))
    (is (pipeline/mat-eq? mat-3 mat-4))))

(deftest load-new-source
  ;load new sorce requires an atom representing the pipeline
  (let [pipeline-list 
        (pipeline/load-new-source "resources/imgs/tomato_plants.jpg" 1 {})]
     (is
      (contains? (get pipeline-list 1 nil) :pipeline-source-img))
     ;;Then assert that the frame contains what a frame should contain an id and a sourc frame
     (let [src-frame (:pipeline-source-img (get pipeline-list 1 nil))]
       (is (contains? src-frame :id))
       (is (contains? src-frame :source-frame)))))

(deftest fetch-webp
  (let [webp-struct (pipeline/fetch-webp (pipeline/load-new-source "resources/imgs/tomato_plants.jpg" 1 {}) 1 :pipeline-source-img)]
    (is (= (type (:value webp-struct)) org.opencv.core.MatOfByte))))

