(ns clj-eyes.templates.home-template
  (:use hiccup.core))

(defn render []
 (html [:html
        [:head
         [:body
          [:img#image-frame {:src "/img"}]
          [:select {:id "select-transform"}
           [:option {:val 0} "None" ]
           [:option {:val "Imgproc/GuassianBlur"} "Guassian Blur" ]]
          [:p [:strong "Step 2: "] " observe std-out (for server output) and below (for client output):"]
          [:textarea#output {:style "width: 100%; height: 200px;"}]
          [:script {:src "https://code.jquery.com/jquery-3.0.0.min.js"   :integrity "sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0="   :crossorigin "anonymous"}]
          [:script {:src "js/clj-eyes.js"}]]]]))
