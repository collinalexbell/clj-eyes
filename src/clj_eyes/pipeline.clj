(ns clj-eyes.pipeline)

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

(defn update-tree-recursively [tree parent-key parent-node-id node-update-fn]
   (reduce
    (fn [reduced-tree item-to-update]
      (assoc (update-tree-recursively reduced-tree parent-key (first item-to-update) node-update-fn)
             (first item-to-update)
             (node-update-fn (second item-to-update)
                             ((parent-key (second item-to-update)) reduced-tree))))
    tree
    (filter #(= parent-node-id (parent-key (second %1))) tree))) 


(defn do-transform [parent-frame transformation]
  (let [parent-mat (get parent-frame :img-matrix default-img)
        rv (mat-with-size-of parent-mat) 
        name (transformation :transformation-name) 
        params (map #(:value %) (transformation :transformation-params))
        name-symbol (symbol "clj-eyes.cv-filter" (clojure.core/name name))]
    (apply (eval  name-symbol) (cons parent-mat (cons rv params)))
    rv))


(defn transform-pipeline-frame [frame-to-update parent-frame]
  "Assocs a new :img-matrix into the frame and then sets :edited to true to singal the frame was affected"
  (assoc
   frame-to-update
   :edited
   true
   :img-matrix
   (do-transform
    parent-frame
    {:transformation-name   (:function-name                 frame-to-update)
     :transformation-params (:current-transformation-params frame-to-update)})))



(defn remove-pipeline-frame [pipeline id]
  "Will remove a frame with id frome a pipline. It relinks & reloads the :img-matrix of all affected frames
   Returns a map with keys [:pipeline :affected-ids].
   :pipeline is the resultant pipeline. This is needed for obvious reasons
   :affected-ids contains all of the ids of frames which had their :img-matrix recomputed. This is needed for notifying the client"
  (let [source-frame-id (:source-frame (get-frame-from-pipeline pipeline id))]
   (reduce 
    (fn [result frame]
      (assoc
       result
       :pipeline (assoc (:pipeline result) (:id (second frame)) (dissoc (second frame) :edited))
       :affected-ids (if (get (second frame) :edited false)
                       (conj (:affected-ids result) (first frame))
                       (:affected-ids result))))
    {:pipeline {} :affected-ids []}
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


(defn insert-frame [pipeline frame-id frame]
  "Inserts a frame with a given id into the pipeline.
   Returns the pipeline"
  (assoc pipeline
         :tree
         (assoc (:tree pipeline) frame-id frame)
         :meta-data
         (assoc
          (get pipeline :meta-data {})
          :frame-no
          (+ 1 (get (get pipeline :meta-data {}) :frame-no 0)))))

(defn generate-transform-id [pipeline]
  (keyword
   (str "transformation" (get (:meta-data pipeline) :frame-no 0))))
