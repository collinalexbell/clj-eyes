(ns clj-eyes.templates.pipeline-template
  (:use hiccup.core)
  (:require [garden.core :refer [css]]
            [clj-eyes.cv-filter :as filter]))

;(def background-color "rgba(219, 255, 169, .5)")
(def background-color "rgba(238, 253, 217, .7)")
(def styles 
 (css
  [:.mat-selection
   [:button
    {:border-radius    "10px"
     :margin-top       "7px"
     :height           "24px"
     :background-color "#e6e6e6"
     :border-color     "#adadad"}]
   [:button:hover]]
  [:.input-selectpicker
   [:.btn-group
    {:width            "100% !important"}]]
  [:.option-param-value
   {:float            "right"}]
  [:.pipeline-frame-title
   {:text-align       "center"}
   {:margin-bottom    "20px"}]
  [:.btn
   {:border           "2px solid transparent"}]
  [:.btn-default
   {:border-color     "#414141"
    :border-size      "2px"}]
  [:#source-options-frame
   {:border           "0px"
    :background-color background-color
    }]
  [:#select-source-upload
   {:cursor           "pointer"
    :border-radius    "7px"
    :border           "2px solid #414141"
    :text-align       "center"
    :margin-bottom    "15px"
    :background-color "FFFFFF"}]
  [:#select-source
   {:padding          "10px"
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

(defn starts-with-vowel [item]
  (not (nil? (some #{(first item)} '(\a \e \i \o \u)))))

(defn close-button []
  (html
   [:div.close-button "X"]))

(defn pipeline-frame [name img-src img-id options-frame function-name & [is-source?]]
  (let [pipeline-div-keyword
        (if is-source?
          :div.pipeline-frame
          :div.pipeline-frame.transform-frame)]
      (html
       [pipeline-div-keyword
        {:id (str "pipeline-" (clojure.core/name img-id)) :data-function-name (clojure.core/name function-name)}
        [:img {:src img-src :id img-id}]
        [:div.pipeline-right-wrapper
         [:div.options-wrapper
          [:h3.pipeline-frame-title name] 
          options-frame]
         (if (not (= :pipeline-source-img (keyword img-id)))
          (close-button))]])))

(defn generate-boolean-input [d id]
  [:div.boolean-input
   [:input {:type :radio
            :class "toggle toggle-left"
            :name (str id "-toggle")
            :value "true"
            :id (str id "-toggle-on")
            :checked "checked"
            :data-option-group (:option-group d)}] 
   [:label.btn {:for (str id "-toggle-on")} "On"]
   [:input {:type :radio
            :class "toggle toggle-right"
            :name (str id "-toggle")
            :value "false"
            :id (str id "-toggle-off")
            :data-option-group (:option-group d)}] 
   [:label.btn {:for (str id "-toggle-off")} "Off"]])

(defn generate-select-input [d id]
  [:div.input-selectpicker
   [:select.selectpicker {:title (:label d) :id (str
                                                 (clojure.string/lower-case (clojure.string/replace (:label d) #" " "-"))
                                                 (name id))}
    (map
     (fn [option]
       [:option {:value (:value option)} (:label option)])
     (:options d))]])

(defn generate-mat-select
  [d id]
  [:div.mat-selection
   [:button.btn-default {:id 
                         (str
                          (clojure.string/lower-case (clojure.string/replace (:label d) #" " "-"))
                          (name id))}
    [:span (str "Select a" (if (starts-with-vowel (:label d)) "n " " ") (:label d) " image")]]])

(defn generate-pipeline-option-input [d id]
  [(if (= :manditory (:obligation d)) :div.option-input.option-input-manditory :div.option-input.option-input-optional)
   {:data-option-group (:option-group d)}
    [:div.option-checkbox {:data-option-group (:option-group d)}]
    [:label.option-params 
     (if (not (= :mat (:type d)))
       (list [:span {:class (str "label-text-" (name (:type d)))} (:label d)]
             [:span.option-param-value  (if (not (nil? (:value d))) (:value d) (:default d))]))
     (case (:type d)
       :range
       [:input
        {:type (:type d)
         :min (:min d)
         :max (:max d)
         :step (:step d)
         :value (if (not (nil? (get d :value nil))) (:value d) (:default d))
         :class "non-boolean-input"
         :data-option-group (:option-group d)}]

       :boolean
       (generate-boolean-input d id)

       :select
       (generate-select-input d id)

       :mat
       (generate-mat-select   d id))]])

(defn pipeline-options-frame
  [option-data id]
  (html
   (let [inputs (map #(generate-pipeline-option-input % id) option-data)]
     (conj [:div.pipeline-options-frame] inputs))))


(defn generate-source-options [existing-sources]
  (map
   #(html [:option {:value (:name %1)} (:label %1)])
   existing-sources)
  )
(defn select-source [existing-sources]
  (html
   [:div#select-source
    [:div#select-source-upload "Upload new image"]
    [:input#source-file {:type "file" :style "display:none;"}]
    [:p "OR"]
     [:select.selectpicker {:title "Select from uploaded images" :id "src-select"}
      (html [:option {:value "default-img"} "Default Img"])
      (generate-source-options existing-sources)]]))



(defn source-options-frame [existing-sources]
  (html
   [:div#source-options-frame.pipeline-options-frame
     (select-source existing-sources)]))


(defn title [the-title]
  (html
   [:div#pipeline-title {:contenteditable "true"} the-title]))

(defn filter-options []
  (html
   (map
    (fn [param]
      [:option {:value (name (first param))} (filter/transformation-labels (first param))])
    filter/filter-params)))

(def arrow
  [:div.down-arrow
    [:img {:src "imgs/down-arrow.png"}]])

(defn add-filter-to-pipeline []
  (html
   [:div#add-filter-to-pipeline
    [:label "Add filter to pipeline ..."]
    [:select.selectpicker {:id "select-transform"}
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


(defn mockup-body []
  [:body
   [:div#content-frame
    [:div#menu]
    [:div#main-content
     (title)
     [:div#filter-content]
     (pipeline-frame "Source Image" "/img" "pipeline-source-img" (source-options-frame) "src")
     arrow
     (pipeline-frame "Gaussian Filter" "/imgs/blurry.png" "filter1" (pipeline-options-frame gaussian-demo-options-data "filter1") "gaussian-blur")
     arrow
     (pipeline-frame "Canny Filter" "/imgs/canny.png" "filter2" (pipeline-options-frame canny-demo-options-data "filter2") "canny")
     (add-filter-to-pipeline)
     [:div#add-filter]]]
   [:script {:src "js/jquery-2.2.4.min.js"}]
   [:script {:src "js/bootstrap.min.js"}]
   [:script {:src "js/bootstrap-select.min.js"}]
   [:script {:src "js/clj-eyes.js"}]])

(defn generate-new-frame-html [frame frame-params]
  (str
    (html arrow)
    (pipeline-frame
     (:transformation-label frame)
     (str "/img?id=" (name (:id frame)))
     (:id frame)
     (pipeline-options-frame (:transformation-params frame) (name (:id frame)))
     (:function-name frame))))


(defn generate-already-loaded-transforms
  [frames]
  (concat
   (map
    (fn [frame]
      (generate-new-frame-html
       (assoc
        frame
        :transformation-params
        (map
         #(assoc %1 :value (:value %2))
         (:transformation-params frame)

         ;Make the current params the same length as the full param list
         (conj 
          (into [] (:current-transformation-params frame))
          (take (- (count (:transformation-params frame))
                   (count (:current-transformation-params frame)))
                (repeat {:value nil})))))
       "ingore, must be refactored. Hah"))
    frames)))

(defn body [pipeline-title existing-frames existing-sources]
  [:body
   [:div#content-frame
    [:div#menu]
    [:div#main-content
     (title pipeline-title)
     [:div#filter-content]
     (pipeline-frame "Source Image" "/img?id=pipeline-source-img" "pipeline-source-img" (source-options-frame existing-sources) "src" true)
     (generate-already-loaded-transforms existing-frames)
     (add-filter-to-pipeline)
     [:div#add-filter]]]
   [:script {:src "js/jquery-2.2.4.min.js"}]
   [:script {:src "js/bootstrap.min.js"}]
   [:script {:src "js/bootstrap-select.min.js"}]
   [:script {:src "js/clj-eyes.js"}]])



(defn render [pipeline-title existing-frames existing-sources]
  (html
   (let [body (body pipeline-title existing-frames existing-sources)]
     [:html
      [:head
       [:link {:rel "stylesheet"
               :href "css/bootstrap.min.css"}]
       [:link {:rel "stylesheet"
               :href "css/bootstrap-select.min.css"}]
       [:link {:rel "stylesheet"
               :href "css/radio-btns.css"}]
       [:style styles]]
       body])))


(defn render-mockup []
    (html
       (let [body (mockup-body)]
         [:html
          [:head
           [:link {:rel "stylesheet"
                   :href "css/bootstrap.min.css"}]
           [:link {:rel "stylesheet"
                   :href "css/bootstrap-select.min.css"}]
           [:link {:rel "stylesheet"
                   :href "css/radio-btns.css"}]
           [:style styles]]
          body])))

