(ns clj-eyes.templates.pipeline-template
  (:use hiccup.core)
  (:require [garden.core :refer [css]]))

;(def background-color "rgba(219, 255, 169, .5)")
(def background-color "rgba(238, 253, 217, .7)")
(def styles 
 (css
      [:.pipeline-frame-title
       {:text-align "center"}
       {:margin-bottom "20px"}]
      [:.btn
       {:border "2px solid transparent"}]
      [:.btn-default
       {:border-color "#414141"
        :border-size "2px"}]
      [:#source-options-frame
       {:border "0px"
        :background-color background-color
        }]
      [:#select-source-upload
       {:border-radius    "7px"
        :border           "2px solid #414141"
        :text-align       "center"
        :margin-bottom    "15px"
        :background-color "FFFFFF"}]
      [:#select-source
       {:padding "10px"
        :text-align       "center"}
       [:.bootstrap-select
        {:width           "100%"
         :margin          "2px 0px"}]]
      [:#submit-new-filter-option
       {:float            "right"
        :border-radius    "10px"
        :border           "2px solid #414141"
        :width            "50px"
        :height           "30px"
        :background-color "rgba(127, 191, 212, .7)"}]
      [:#add-filter-to-pipeline
       {:float         "right"
        :border-radius "10px"
        :border        "2px solid #414141"
        :padding       "10px"
        :font-size     "1.5em"
        :margin        "25px auto"
        :width         "60%"
        :background-color background-color}
       [:.bootstrap-select
        {:margin       "0 0 0 40px"}]]
      [:.down-arrow
       {:width          "58%"
        :margin         "auto"}
       [:img
        {:width         "80px"
         :height        "80px"}]]
      [:.option-input-manditory
       [:.option-checkbox
        {:background-color "rgb(255, 99, 71)"}]]
      [:.option-input-optional
       {:color "#AAAAAA"}]
      [:.option-input-optional.activated
       {:color "#333333"}
       [:.option-checkbox
        {:background-color "#777777"}]]
      [:.option-input
       {:height        "auto"
        :margin        "10px"}]
      [:.option-params
       {:width         "60%"}]
      [:.option-checkbox
       {:border-radius "15px"
        :border        "2px solid #414141"
        :margin        "10px 10px 0 0"
        :float         "left"
        :width         "30px"
        :height        "20px"}]
      [:#pipeline-title
       {:width         "500px"
        :border-radius "15px"
        :border        "2px solid #414141"
        :margin        "20px auto"
        :padding       "5px"
        :font-size     "x-large"
        :text-align    "center"
        :font-weight   "bold"}]
      [:#content-frame
      {:display        "block"
       :width          "1000px"
       :margin         "0px auto"
       :overflow       "auto"}] 
      [:.close-button
       {;:color         "ff6347"
        ;:color          "rgba(127, 191, 212, .7)"
        :color         "rgb(11, 94, 122)"
        ;:background-color "rgba(127, 191, 212, .7)"
        :background-color "FFFFFF"
        :float         "right"}]
      [:.pipeline-right-wrapper
       {:float         "right"}
       {:display       "block"}
       {:width         "400px"}]
      [:.options-wrapper
       {:float         "left"
        :width         "90%"}]
      [:.pipeline-options-frame
       {:background-color "FFFFFF"
        :border-radius "15px"
        :border        "2px solid #414141"
        :margin        "auto"
        :width         "90%"
        :padding       "10px"}]
      [:.close-button
       {:background-color "rgba(127, 191, 212, .7)"
        :color         "000000"
        :font-weight    "bold"
        :padding-top       "2px"
        :height        "20px"
        :font-size     "75%"
        :float         "right"
        :padding       "3px"
        :border-radius "5px"
        :border        "2px solid #414141"}]
      [:.pipeline-frame
       {:background-color background-color 
        :border-radius "15px"
        :border        "2px solid #414141"
        :padding       "20px"
        :display       "block"
        :margin        "0px 0px"
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
      [:h3.pipeline-frame-title name] 
       options-frame]
     (close-button)]]))


(defn generate-pipeline-option-input [d]
  [(if (= :manditory (:obligation d)) :div.option-input.option-input-manditory :div.option-input.option-input-optional)
    [:div.option-checkbox]
    [:label.option-params (:label d)
     [:input {:type (:type d) :min (:min d) :max (:max d)} ]]])

(defn pipeline-options-frame [option-data]
  (html
   (let [inputs (map #(generate-pipeline-option-input %) option-data)]
     (conj [:div.pipeline-options-frame] inputs))))


(defn generate-source-options [])
(defn select-source []
  (html
   [:div#select-source
    [:div#select-source-upload "Upload new image"]
    [:p "OR"]
     [:select.selectpicker {:multiple true :title "Select from uploaded images"}
      (generate-source-options)]]))



(defn source-options-frame []
  (html
   [:div#source-options-frame.pipeline-options-frame
     (select-source)]))


(defn title []
  (html
   [:div#pipeline-title {:contenteditable "true"} "Untitled Pipeline"]))

(defn filter-options []
  (html
   [:option {:value "gaussian-blur"} "Gaussian Blur"]
   [:option {:value "canny"} "Canny"]))

(def arrow
  [:div.down-arrow
    [:img {:src "imgs/down-arrow.png"}]])

(defn add-filter-to-pipeline []
  (html
   [:div#add-filter-to-pipeline
    [:label "Add filter to pipeline ..."]
    [:select.selectpicker
(filter-options)]
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
     (pipeline-frame "Source Image" "/img" (source-options-frame))
     arrow
     (pipeline-frame "Gaussian Filter" "/imgs/blurry.png" (pipeline-options-frame gaussian-demo-options-data))
     arrow
     (pipeline-frame "Canny Filter" "/imgs/canny.png" (pipeline-options-frame canny-demo-options-data))
     (add-filter-to-pipeline)
     [:div#add-filter]]]
     [:script {:src "https://code.jquery.com/jquery-2.2.4.min.js"  :integrity "sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   :crossorigin "anonymous"}]
     [:script {:src "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" :integrity "sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" :crossorigin "anonymous"}]
     [:script {:src "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/js/bootstrap-select.min.js"}]])

(defn render []
  (html
   (let [body (body)]
     [:html
      [:head
       [:link {:rel "stylesheet"
               :href "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
               :integrity "sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
               :crossorigin "anonymous"}]
       [:link {:rel "stylesheet" :href "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/css/bootstrap-select.min.css"}]
       [:style styles]]
      body])))

