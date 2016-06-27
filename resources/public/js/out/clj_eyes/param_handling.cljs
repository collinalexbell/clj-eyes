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
             (let [jq-item (jq/$ item)]
               (swap! the-list conj 
                      {:class
                       (jq/attr jq-item "class")

                       :value
                       (-> jq-item
                           (jq/find :input)
                           .first
                           jq/val)})))))
    (soc/chsk-send!
     [:pipeline/update-transform-params
      {:param-list
       (filter manditory-or-selected @the-list)
       :id
       id}])))

(defn option-checkbox-handler
  "Handles the checking and unchecking of the optional parameters"
  []
  (this-as foo
    (let
        [option-div
         (-> (jq/$ foo)
             .parent)]
      (if (< (.indexOf (jq/attr option-div "class") "activated") 0)
        (jq/add-class option-div "activated")
        (jq/remove-class option-div "activated")))
    (.log js/console (str (jq/attr (jq/$ foo) "class")))))


(defn bind-inputs-on-change [id]
  (-> (jq/$ (keyword (str "#pipeline-" (name id))))
      (jq/find :input)
      ((fn [item] (.log js/console (count item)) item))
      (jq/bind :change (gen-param-input-change-handler id)))
  (-> (jq/$ (keyword (str "#pipeline-" (name id))))
      (jq/find :.option-checkbox)
      (jq/bind :click option-checkbox-handler)))

