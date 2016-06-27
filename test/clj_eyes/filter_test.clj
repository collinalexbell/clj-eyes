(ns clj-eyes.pipeline-test
  (:use clojure.test)
  (:require [clj-eyes.cv-filter :as filter]))

(deftest generate-default-params
  (let [param-list
     {:canny
      [{:type :range :label "Threshold 1"   :obligation :manditory :default 0}
       {:type :range :label "Threshold 2"   :obligation :manditory :default 2.2}
       {:type :range :label "Aperture Size" :obligation :optional  :default 1}]

      :gaussian-blur
      [{:type :range :label "Kernal Size"   :obligation :manditory :default 0}
       {:type :range :label "SigmaX"        :obligation :manditory :default 0}
       {:type :range :label "SigmaY"        :obligation :optional  :default 0}]}]
   (is (=
        (filter/generate-default-params param-list :canny)
        [0 2.2 1]))))

(run-tests)
