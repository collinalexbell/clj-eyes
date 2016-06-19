(ns clj-eyes.templates.pipeline-template
  (:use hiccup.core))

(defn pipeline-frame [name img-src options-frame]
  (html
   [:div.pipeline-frame
    [:img {:src img-src}]
    [:h2.pipeline-frame-title name]
    [:div.pipeline-frame-options options-frame]]))

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

(defn render []
  (html
   [:html
    [:head]
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
      [:div#add-filter]]]]))


