(ns clj-eyes.pipeline-test
  (:use clojure.test)
  (:require [clj-eyes.cv-pipeline :as pipeline]))

(import '[org.opencv.core MatOfInt MatOfByte Mat CvType Size]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])

(deftest load-new-source
 (let [test-atom (atom {})] 
  (is (=
       (type (:data (get @(pipeline/load-new-source "resources/imgs/tomato_plants.jpg" 1 test-atom) 1)))
       org.opencv.core.Mat))))

(deftest fetch-src-webp
  (let [test-atom (atom {})]
    ;;Load the test-atom
    (pipeline/load-new-source "resources/imgs/tomato_plants.jpg" 1 test-atom)
    ;;Now try to fetch the the src
    (is (not (nil? (:data (pipeline/-fetch-src-webp 1 test-atom)))))
    (is (nil? (:src=file (pipeline/-fetch-src-webp 1 test-atom))))
    (is (= org.opencv.core.MatOfByte
           (type (:data (pipeline/-fetch-src-webp 1 test-atom)))))))

(run-tests)
