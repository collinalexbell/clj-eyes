(ns clj-eyes.handlers
  (:require-macros [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [clj-eyes.param-handling :as params]
            [jayq.core :as jq]
            [cljs-http.client :as http]
            [clj-eyes.socket :as soc]
            [cljs.core.async :refer [<!]]))


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


(defn upload-file []
  (let [postback-chan
        (http/post
         "/upload-src"
         {:multipart-params
          [[:data "data"] ["src-file" (-> (.getElementById js/document "source-file") .-files (.item 0))]]})]
    (go ((fn [response]
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
