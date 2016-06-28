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

(defn gen-param-input-change-handler [id]
  #(let [the-list (atom [])]
     (-> (jq/$ (keyword (str "#pipeline-" (name id))))
          (jq/find :.option-input)
          (jq-each-elements
           (fn [i item]
             (let [jq-item (jq/$ item)
                   value (-> jq-item
                           (jq/find :input)
                           .first
                           jq/val)]
               ;Append Item to list to transfer to server
               (swap! the-list conj 
                      {:class
                       (jq/attr jq-item "class")

                       :value
                       value})
               (-> jq-item
                   (jq/find :span)
                   (jq/html value))))))

    (soc/chsk-send!
     [:pipeline/update-transform-params
      {:param-list
       (filter manditory-or-selected @the-list)
       :id
       id
       :function-name
       (-> (jq/$ (keyword (str "#pipeline-" (name id))))
           (jq/data "function-name"))}])))

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

