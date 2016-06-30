(ns clj-eyes.param-handling
  (:require [jayq.core :as jq]
           [clj-eyes.socket :as soc]))


(defn jq-each-elements [elements each-fn]
  (let [elements (js->clj elements)]
    (dotimes [el-num (count elements)]
      (each-fn el-num (nth elements el-num)))))

(defn manditory-or-selected [item]
  "Tests an item to make sure it has a class option-input-manditory or activated"
  (if (or
       (> (.indexOf (:class item) "option-input-manditory") -1)
       (> (.indexOf (:class item) "activated") -1))
    true
    false))

(defn send-update-transform-params
  "Will send a notification to the server that a frame or frames' inputs have changed with a list of all of the inputs"
  [transformation-data-list]
  (.log js/console (clj->js transformation-data-list))
   (soc/chsk-send!
    [:pipeline/update-transform-params
     {:transform-list
      (map
       (fn [transformation-data]
         (.log js/console (clj->js transformation-data))
         {:param-list
               (filter manditory-or-selected (:input-list transformation-data))

          :id
          (keyword (:pipeline-id transformation-data))

          :function-name
          (-> (jq/$ (keyword (str "#pipeline-" (name (:pipeline-id transformation-data)))))
              (jq/data "function-name"))})
       transformation-data-list)}]))

(defn gather-inputs-from-option-input [option-input param-list-atom]
  (jq-each-elements
   option-input
   (fn [i item]
     (let [jq-item (jq/$ item)
           value (-> jq-item
                     (jq/find :input)
                     .first
                     jq/val)]
                                        ;Append Item to list to transfer to server
       (swap! param-list-atom conj 
              {:class
               (jq/attr jq-item "class")

               :value
               value})
       (-> jq-item
           (jq/find :span)
           (jq/html value))))))


(defrecord transform-data [input-list pipeline-id])

(defn find-downstream-transforms [pipeline-frame-jq]
  "A pure function that takes a pipeline frame and a pipeline id.
   Returns a data struct that contains the lists of inputs and pipeline-ids
   coresponding to the pipeline frames that are downstream and need to be updated"
  (let [the-pipeline-list (atom [])]
   (-> pipeline-frame-jq
       (jq/next-all :.pipeline-frame)
       ((fn [item] (.log js/console (str "next-all type" (type item))) item))
       (jq-each-elements
          (fn [i item]
              (let [the-input-list (atom [])
                    pipeline-id (-> (jq/$ item) (jq/attr "id"))]
                (-> (jq/$ item)
                    (jq/find :.option-input)
                    ((fn [item]
                       (.log js/console (str ".option-input count: " (count item)))
                       (.log js/console item)
                       item))
                    ((fn [option-input]
                       (gather-inputs-from-option-input option-input the-input-list)
                       (swap! the-pipeline-list conj  (transform-data. @the-input-list (keyword (subs pipeline-id 9)))))))))))
   @the-pipeline-list))

(defn find-changing-transforms [id]
  (let [the-list (atom [])
         pipeline-frame (keyword (str "#pipeline-" (name id)))]
     (-> (jq/$ (keyword (str "#pipeline-" (name id))))
          (jq/find :.option-input)
          (gather-inputs-from-option-input the-list))
     (let [pipeline-input-list (find-downstream-transforms (jq/$ pipeline-frame))]
       [(concat [@the-list] (doall (map (fn [inputs] (:input-list  inputs)) pipeline-input-list)))
        (concat [id]        (doall (map (fn [inputs] (keyword (:pipeline-id inputs))) pipeline-input-list)))]

       (concat [(transform-data. @the-list (name id))] pipeline-input-list))))

(defn gen-param-input-change-handler[id]
  #(send-update-transform-params (find-changing-transforms id)))



(defn change-optiongroup-checkbox [option-frame option-group change-fn]
  (-> option-frame
      (jq/find :.option-input)
      (jq-each-elements
       (fn [i item]
         (-> (jq/$ item)
             (.data "option-group")
             ((fn [item-op-group]
                (if (= item-op-group option-group)
                  (change-fn (jq/$ item) "activated")))))))))

(defn gen-option-checkbox-handler
  "Handles the checking and unchecking of the optional parameters"
  [id]

  (fn [] (this-as foo
           (let
               [option-div
                (-> (jq/$ foo)
                    .parent)
                option-frame
                (-> option-div
                    .parent)
                option-group (-> (jq/$ foo)
                                 (.data "option-group"))]
               (if (< (.indexOf (jq/attr option-div "class") "activated") 0)
                 (change-optiongroup-checkbox option-frame option-group jq/add-class)
                 (change-optiongroup-checkbox option-frame option-group jq/remove-class)))
           ((gen-param-input-change-handler id)))))


(defn bind-inputs-on-change [id]
  (-> (jq/$ (keyword (str "#pipeline-" (name id))))
      (jq/find :input)
      ((fn [item] (.log js/console (count item)) item))
      (jq/bind :change (gen-param-input-change-handler id)))
  (-> (jq/$ (keyword (str "#pipeline-" (name id))))
      (jq/find :.option-checkbox)
      (jq/bind :click (gen-option-checkbox-handler id))))

