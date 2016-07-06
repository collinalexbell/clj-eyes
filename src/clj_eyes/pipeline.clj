(ns clj-eyes.pipeline
  (:require [clj-eyes.pipeline-frame :as frame]))

(import '[org.opencv.core MatOfInt MatOfByte Mat CvType Size Core Scalar]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])

(defn mat-with-size-of [parent-mat]
  (Mat. (.size parent-mat) CvType/CV_8UC3))

(def default-img
  (Imgcodecs/imread "resources/public/imgs/test-pattern.png"))

(defn fetch-tree [pipeline]
  (:tree pipeline))

(defn fetch-meta-data [pipeline]
  (:meta-data pipeline))

(defn find-by-parent [id pipeline]
  (map (fn [item] (second item))
       (filter #(if (= id (:source-frame (second %1))) true false) (:tree pipeline))))

(defn fetch-parent-frame [pipeline frame]
  (get (:tree pipeline) (:source-frame frame)))

(defn get-frame-from-pipeline
  ([pipeline id] (get (:tree pipeline) id))
  ([pipeline id constr-if-nil] (get (:tree pipeline) id (constr-if-nil))))

(defn assoc-all-in-list [the-list key val]
  "Assocs a key and a value to all entries of a list of maps"
  (map #(assoc %1 key val) the-list))

(defn filter-tree-by-parent [tree parent-key parent]
  (filter
   #(= parent (parent-key (second %1)))
   tree))

(defn update-tree-recursively [tree parent-key parent-node-id node-update-fn]
   (reduce
    (fn [reduced-tree item-to-update]
      (update-tree-recursively
       (assoc
        (update-tree-recursively reduced-tree parent-key (first item-to-update) node-update-fn)
        (first item-to-update)
        (node-update-fn (second item-to-update)
                        ((parent-key (second item-to-update)) reduced-tree)))
       parent-key
       (first item-to-update)
       node-update-fn))
    tree
    (filter-tree-by-parent tree parent-key parent-node-id))) 


(defn do-transform [parent-frame transformation]
  (let [parent-mat (get parent-frame :img-matrix default-img)
        rv (mat-with-size-of parent-mat) 
        name (transformation :transformation-name) 
        params (map #(:value %) (transformation :transformation-params))
        name-symbol (symbol "clj-eyes.cv-filter" (clojure.core/name name))]
    (apply (eval  name-symbol) (cons parent-mat (cons rv params)))
    rv))


(defn transform-pipeline-frame 
  "Assocs a new :img-matrix into the frame and then sets :edited to true to singal the frame was affected"
  [frame-to-update parent-frame]
  (assoc
   frame-to-update
   :edited
   true
   :img-matrix
   (do-transform
    parent-frame
    {:transformation-name   (:function-name                 frame-to-update)
     :transformation-params (:current-transformation-params frame-to-update)})))



(defn remove-pipeline-frame 
  "Will remove a frame with id frome a pipline. It relinks & reloads the :img-matrix of all affected frames
   Returns a map with keys [:pipeline :affected-ids].
   :pipeline is the resultant pipeline. This is needed for obvious reasons
   :affected-ids contains all of the ids of frames which had their :img-matrix recomputed. This is needed for notifying the client"
  [pipeline id]
  (let [source-frame-id (:source-frame (get-frame-from-pipeline pipeline id))]
   (reduce 
    (fn [result frame]
      (assoc
       result
       :pipeline (assoc (:pipeline result) :tree
                        (assoc (:tree (:pipeline result))
                               (:id (second frame))
                               (dissoc (second frame) :edited)))
       :affected-ids (if (get (second frame) :edited false)
                       (conj (:affected-ids result) (first frame))
                       (:affected-ids result))))
    {:pipeline {:meta-data (:meta-data pipeline) :tree {}} :affected-ids []}
    (update-tree-recursively
     (dissoc 
      (reduce
       #(assoc %1 (:id %2) %2)
       (:tree pipeline)
       (assoc-all-in-list
        (find-by-parent id pipeline)
        :source-frame
        source-frame-id))
      id)
     :source-frame
     source-frame-id
     transform-pipeline-frame))))


(defn insert-frame
  "Inserts a frame with a given id into the pipeline.
   Returns the pipeline"
  [pipeline frame-id frame]
  (assoc pipeline
         :tree
         (assoc (:tree pipeline) frame-id frame)
         :meta-data
         (assoc
          (get pipeline :meta-data {})
          :frame-no
          (+ 1 (get (get pipeline :meta-data {}) :frame-no 0)))))

(defn update-frame
  "Will update the frame without incrimenting the :frame-no"
  [pipeline frame-id frame]
  (assoc pipeline
         :tree
         (assoc (:tree pipeline) frame-id frame)))

(defn cache-uploaded-src
  "Will cache the source img currently in the tree under the key src-name"
  [pipeline src-name]
  (assoc
   pipeline
   :uploaded-img-cache
   (assoc
    (get pipeline :uploaded-img-cache {})
    (keyword src-name)
    (frame/fetch-img-matrix-from
     (get-frame-from-pipeline pipeline :pipeline-source-img)))))

(defn fetch-uploaded-src-from-cache [pipeline src-name]
  (get
   (get pipeline :uploaded-img-cache {})
   (keyword src-name)
   default-img))


(defn generate-transform-id [pipeline]
  (keyword
   (str "transformation" (get (:meta-data pipeline) :frame-no 0))))


(defn update-pipeline-source-img [pipeline img-id]
  (update-frame
   pipeline
   :pipeline-source-img
   (frame/load-image-matrix-into-pipeline-frame
    (get-frame-from-pipeline pipeline  :pipeline-source-img)
    (fetch-uploaded-src-from-cache pipeline img-id))))


(defn tree-to-list [tree root-id root-key]
  (flatten (cons
            (get tree root-id)
            (map
             (fn [filter-result]
               (tree-to-list
                tree
                (first filter-result)
                root-key))
             (filter-by-parent tree root-key root-id)))))

(defn transform-frame-list
  "Returns a list of frames in decending order
  starting from pipeline-source-frame's child.
  This function does not assume a single child per frame, but rather only returns the first child per frame"
  [pipeline]
  (rest (tree-to-list
         (:tree pipeline)
         :pipeline-source-img
         :source-frame)))


(defn update-title [pipeline title]
  (assoc-in
   pipeline
   [:meta-data :title]
   title))

(defn title [pipeline]
  (get-in pipeline [:meta-data :title] "Untitled Pipeline"))
