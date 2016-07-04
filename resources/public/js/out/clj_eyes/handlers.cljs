(ns clj-eyes.handlers
  (:require-macros [cljs.core.async.macros :as asyncm :refer (go go-loop)]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [clj-eyes.param-handling :as params]
            [jayq.core :as jq]
            [cljs-http.client :as http]
            [clj-eyes.socket :as soc]
            [cljs.core.async :refer [<!]]
            [hiccups.runtime :as hiccupsrt]))


(defn select-transform []
  (.log js/console "handling selection")
  (soc/chsk-send! [:pipeline/add-transformation
                   {:transformation-selection
                    (jq/val (jq/$ :#select-transform))
                    :parent-frame
                    (-> (jq/$ :.pipeline-frame)
                        .last
                        (jq/find :img)
                        .first
                        (jq/attr :id))}]))

(defn add-file-to-uploaded-imgs-list
  "Adds a file to the select list of uploaded images"
  [img-name]
  (.log js/console (html [:option {:value img-name}  img-name]))
  (if (<
       (count (-> (jq/$ :#src-select)
                  (jq/find :option)))
       2)
    (-> (jq/$ :#src-select)
        (jq/append
         (html [:option {:value "default-img"} "Default Img"]))))
  (-> (jq/$ :#src-select)
      (jq/append
       (html [:option {:value img-name}  img-name]))
      (.selectpicker "refresh")))

(defn upload-file []
  (let [postback-chan
        (http/post
         "/upload-src"
         {:multipart-params
          [[:data "data"] ["src-file" (-> (.getElementById js/document "source-file") .-files (.item 0))]]})]
    (go ((fn [response]
           (add-file-to-uploaded-imgs-list
            (-> (.getElementById js/document "source-file") .-files (.item 0) .-name))
           (-> (params/find-downstream-transforms
                (jq/$ :#pipeline-pipeline-source-img))
               ((fn [pipeline-input-list]
                  (params/send-update-transform-params
                   (map (fn [pipeline-transform-data]
                          (params/transform-data.
                           (:input-list pipeline-transform-data)
                           (:pipeline-id pipeline-transform-data))) pipeline-input-list))))))
         (<! postback-chan)))))

(defn add-transformation [html]
  (.log js/console html)
  (-> (jq/$ :.pipeline-frame)
      .last
      (jq/after html)))

(defn close-button [frame-id]
  #(soc/chsk-send!
   [:pipeline/close-frame
    {:id (keyword frame-id)}]))

(defn close-frame [id]
  (.log js/console (str "close-frame count: " (count (jq/$ (str "#pipeline-" (clojure.core/name id))))))
  (let [jq-frame
        (jq/$
         (str "#pipeline-" (clojure.core/name id)))]

    ;Delete the arrow above the jq-frame
    (-> jq-frame
        (jq/prev :.down-arrow)
        jq/remove)

    ;Delete the frame itself
    (-> jq-frame
        jq/remove)))


(defn select-source []
  (.log js/console "select changed")
  (.log js/console )
  (soc/chsk-send!
   [:pipeline/select-source
    {:src-name
     (-> (jq/$ :#src-select)
         (jq/val))}]))
