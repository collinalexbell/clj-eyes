(ns clj-eyes.templates.pipeline-template
  (:use hiccup.core)
  (:require [garden.core :refer [css]]))

(def styles 
 (css

      [:#content-frame
      {:display      "block"
       :width        "1000px"
       :margin       "0px auto"
       :overflow     "auto"}] 
      [:.close-button
       {:float         "right"}]
      [:.pipeline-right-wrapper
       {:float         "right"}
       {:display       "block"}
       {:width         "400px"}]
      [:.options-wrapper
       {:float         "left"}]
      [:.pipeline-options-frame
       {:margin        "auto"
        :width         "80%"}]
      [:.close-button
       {:height        "20px"
        :font-size     "75%"
        :float         "right"
        :padding       "3px"
        :border-radius "5px"
        :border        "2px solid #414141"}]
      [:.pipeline-frame
       {:border-radius "25px"
        :border        "2px solid #414141"
        :padding       "20px"
        :display       "block"
        :margin        "40px 0px"
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
       options-frame]
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
    [:div#main-content
     (title)
     [:div#filter-content]
     (select-source)
     (pipeline-frame "Source" "/img" (source-options-frame))
     (pipeline-frame "Canny Filter" "/img" (pipeline-options-frame canny-demo-options-data))
     (pipeline-frame "Gaussian Filter" "/img" (pipeline-options-frame gaussian-demo-options-data))
     (add-filter-to-pipeline)
     [:div#add-filter]]]])

(defn render []
  (html
   (let [body (body)]
     [:html
      [:head
       [:link {:rel "stylesheet"
               :href "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
               :integrity "sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
               :crossorigin "anonymous"}]
       [:style styles]]
      body])))

