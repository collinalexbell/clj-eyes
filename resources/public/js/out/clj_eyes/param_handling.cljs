(ns clj-eyes.param-handling
  (:require [jayq.core :as jq]
           [clj-eyes.socket :as soc]))


(defn jq-each-elements [elements each-fn]
  (let [elements (js->clj elements)]
    (dotimes [el-num (count elements)]
      (each-fn el-num (nth elements el-num)))))

(defn manditory-or-selected [item]
  "Tests an item to make sure it has a class option-input-manditory or activated"
  (let [class-items (clojure.string/split (:class item) #" ")])
  (if (or
       (> (.indexOf (:class item) "option-input-manditory") -1)
       (> (.indexOf (:class item) "activated") -1))
    true
    false))

(defn send-update-transform-params
  "Will send a notification to the server that a frame or frames' inputs have changed with a list of all of the inputs"
  [param-lists ids]
   (soc/chsk-send!
    [:pipeline/update-transform-params
     {:transform-list
      (map
       (fn [param-list id] {:param-list
               (filter manditory-or-selected param-list)
               :id
               id
               :function-name
               (-> (jq/$ (keyword (str "#pipeline-" (name id))))
                   (jq/data "function-name"))})
       param-lists ids)}]))

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

(defn find-and-notify-downstream-transforms [pipeline-frame-jq id]
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
                       (swap! the-pipeline-list conj {:input-list @the-input-list :pipeline-id pipeline-id}))))))))
   @the-pipeline-list))

(defn gen-param-input-change-handler [id]
  #(let [the-list (atom [])
         pipeline-frame (keyword (str "#pipeline-" (name id)))]
     (-> (jq/$ (keyword (str "#pipeline-" (name id))))
          (jq/find :.option-input)
          (gather-inputs-from-option-input the-list))
     (let [pipeline-input-list (find-and-notify-downstream-transforms (jq/$ pipeline-frame) id)]
      (send-update-transform-params
       (concat [@the-list] (doall (map (fn [inputs] (:input-list  inputs)) pipeline-input-list)))
       (concat [id]        (doall (map (fn [inputs] (keyword (subs (:pipeline-id inputs) 9))) pipeline-input-list)))))))


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

