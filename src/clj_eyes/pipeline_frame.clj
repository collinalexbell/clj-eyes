(ns clj-eyes.pipeline-frame
 (:require [clj-eyes.cv-filter :as filter]))

(defn pipeline-frame
  "Will generate the data structure that is neccisary for a pipeline frame in the gui"
  [source-frame id function-name]
  {:source-frame source-frame :id id :function-name function-name})

(defn add-transformation-params-to
  "Adds a label and params to a pipeline frame"
  [transformation-name-keyword pipeline-frame]
  (assoc pipeline-frame
   :transformation-params (transformation-name-keyword filter/filter-params)
   :transformation-label  (filter/transformation-labels transformation-name-keyword)))


(defn load-image-matrix-into-pipeline-frame
  "Will create a matrix field in the pipeline frame that is takes on the value of img-matrix"
  [pipeline-frame img-matrix]
  (assoc pipeline-frame :img-matrix img-matrix))

(defn fetch-img-matrix-from [frame]
  "Will get the image matrix from frame"
  (get frame :img-matrix nil))


