(ns clj-eyes.pipeline-test
  (:use clojure.test)
  (:require [clj-eyes.pipeline :as pipeline]))

(import '[org.opencv.core MatOfInt MatOfByte Mat CvType Size]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])

(deftest generate-transform-id
  (let [filter-id1 (pipeline/generate-transform-id {:tree {:src-frame {}} :meta-data {:frame-no 0}})
        filter-id2 (pipeline/generate-transform-id {:tree {:src-frame {} :transform1 {}} :meta-data {:frame-no 1}})]
    (is (= filter-id1 :transformation0))
    (is (= filter-id2 :transformation1))))

(deftest find-by-parent
  (is (= (pipeline/find-by-parent
          :transformation1
          {:tree
           {:transformation1
            {:source-frame :pipeline-source-img}
            :transformation2
            {:source-frame :transformation1
             :data :derp}}})
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

      update-fn (fn [arg1 arg2] (assoc arg1 :text :updated))]

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

