(ns clj-eyes.templates.home-template
  (:use hiccup.core))

(defn render []
 (html [:html
        [:head]
        [:body
         [:h1 "OpenCV Explorer V1.0"]
         [:img#image-frame {:src "/img"}]
         [:label "Select OpenCV function" [:select {:id "select-transform"}
           [:option {:value "nil"} "None" ]
           [:option {:value "gaussian-blur"} "Guassian Blur" ]
           [:option {:value "canny"} "Canny" ]]]
           
         [:div#transform-options]
         [:script {:src "https://code.jquery.com/jquery-3.0.0.min.js"   :integrity "sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0="   :crossorigin "anonymous"}]
         [:script {:src "js/clj-eyes.js"}]]]))
