(ns clj-eyes.templates.pipeline-template
  (:use hiccup.core)
  (:require [garden.core :refer [css]]))

(def styles 
 (css
      [:.close-button
       {:float         "right"}]
      [:.pipeline-right-wrapper
       {:float         "right"}
       {:display       "block"}]
      [:.close-button
       {:float         "right"}]
      [:.pipeline-frame
       {:width         "1000px"
        :border-radius "25px"
        :border        "2px solid #414141"
        :padding       "20px"
        :margin        "40px auto"
        :display       "block"
        :overflow      "auto"}
       [:img
        {:width         "500px"
         :height        "auto"}]]))

(defn close-button []
  (html
   [:div.close-button "X"]))

(defn pipeline-frame [name img-src options-frame]
  (html
   [:div.pipeline-frame
    [:img {:src img-src}]
    [:div.pipeline-right-wrapper
     [:div.options-wrapper
      [:h2.pipeline-frame-title name] 
      [:div.pipeline-frame-options options-frame]]
     (close-button)]]))


(defn generate-pipeline-option-input [d]
  [(if (:manditory d) :div.option-input-manditory :div.option-input-optional)
    [:label (:label d)
     [:input {:type (:type d) :min (:min d) :max (:max d)} ]]])

(defn pipeline-options-frame [option-data]
  (html
   (let [inputs (map #(generate-pipeline-option-input %) option-data)]
     (conj [:div.pipeline-options-frame] inputs))))

(defn source-options-frame []
  (html
   [:div#source-options-frame]))

(defn generate-source-options [])

(defn select-source []
  (html
   [:div#select-source
    [:label "Select a source image ..."
     [:select
      [:option {:value "upload"} "Upload new image"]
      (generate-source-options)]]]))

(defn title []
  (html
   [:div#pipeline-title 
    [:textarea#pipeline-title-textarea "Untitled Pipeline"]]))

(defn filter-options []
  (html
   [:option {:value "gaussian-blur"} "Gaussian Blur"]
   [:option {:value "canny"} "Canny"]))

(defn add-filter-to-pipeline []
  (html
   [:div#add-filter-to-pipeline
    [:label "Add filter to pipeline ..."]
    [:select (filter-options)]
    [:div#submit-new-filter-option]]))

(def canny-demo-options-data
  [{:type :range :label "Threshold 1"   :obligation :manditory}
   {:type :range :label "Threshold 2"   :obligation :manditory}
   {:type :range :label "Aperture Size" :obligation :optional}])

(def gaussian-demo-options-data
  [{:type :range :label "Kernal Size"   :obligation :manditory}
   {:type :range :label "SigmaX"        :obligation :manditory}
   {:type :range :label "SigmaY"        :obligation :optional}])


(defn body []
  [:body
   [:div#content-frame
    [:div#menu]
    (title)
    [:div#filter-content]
    (select-source)
    (pipeline-frame "Source" "/img" (source-options-frame))
    (pipeline-frame "Canny Filter" "/img" (pipeline-options-frame canny-demo-options-data))
    (pipeline-frame "Gaussian Filter" "/img" (pipeline-options-frame gaussian-demo-options-data))
    (add-filter-to-pipeline)
    [:div#add-filter]]])

(defn render []
  (html
   (let [body (body)]
     [:html
      [:head [:style styles]]
      body])))

