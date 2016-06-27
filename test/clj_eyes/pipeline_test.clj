(ns clj-eyes.pipeline-test
  (:use clojure.test)
  (:require [clj-eyes.cv-pipeline :as pipeline]))

(import '[org.opencv.core MatOfInt MatOfByte Mat CvType Size]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])

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

(deftest generate-transform-id
  (let [filter-id1 (pipeline/generate-transform-id {1 {:src-frame {}}} 1)
        filter-id2 (pipeline/generate-transform-id {1 {:src-frame {} :transform1 {}}} 1)]
    (is (= filter-id1 :transformation1))
    (is (= filter-id2 :transformation2))))

(run-tests)

;(clojure.test/test-vars [#'clj-eyes.pipeline-test/fetch-webp])

