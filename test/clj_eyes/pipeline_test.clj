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

(deftest find-by-parent
  (is (= (pipeline/find-by-parent
          :transformation1
          {:transformation1
           {:source-frame :pipeline-source-img}
           :transformation2
           {:source-frame :transformation1
            :data :derp}})
         [{:source-frame :transformation1 :data :derp}])))

(deftest assoc-all-in-list
  (is (= [{:source-frame :new-frame :data :derp-data}]
         (pipeline/assoc-all-in-list
          [{:source-frame :derp-frame :data :derp-data}]
          :source-frame
          :new-frame))))

(deftest update-tree-recursively
 (let
     [source-tree
      {:item1 {:parent nil}
       :item2 {:parent :item1 :text nil}
       :item3 {:parent :item1 :text nil}
       :item4 {:parent :item2 :text nil}}

      tree-updated-from-item2
      {:item1 {:parent nil}
       :item2 {:parent :item1 :text nil}
       :item3 {:parent :item1 :text nil}
       :item4 {:parent :item2 :text :updated}}

      tree-updated-from-item1
      {:item1 {:parent nil}
       :item2 {:parent :item1 :text :updated}
       :item3 {:parent :item1 :text :updated}
       :item4 {:parent :item2 :text :updated}}

      update-fn #(assoc %1 :text :updated)]

   (is (= tree-updated-from-item2 (pipeline/update-tree-recursively
                                   source-tree
                                   :parent
                                   :item2
                                   update-fn)))

   (is (= tree-updated-from-item1 (pipeline/update-tree-recursively
                                   source-tree
                                   :parent
                                   :item1
                                   update-fn)))))

(run-tests)

;(clojure.test/test-vars [#'clj-eyes.pipeline-test/fetch-webp])

