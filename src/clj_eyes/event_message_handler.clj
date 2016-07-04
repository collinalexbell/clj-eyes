(ns clj-eyes.event-message-handler
  (:require [clj-eyes.web-socket  :as soc]
            [clj-eyes.pipeline-list :as pipeline-list]
            [clj-eyes.pipeline    :as pipeline]
            [clj-eyes.cv-filter   :as filter]
            [clj-eyes.templates.pipeline-template :as pipeline-template]
            [taoensso.sente       :as sente]))


(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (println "Message handling")
  (-event-msg-handler ev-msg) ; Handle event-msgs on a single thread
  ;; (future (-event-msg-handler ev-msg)) ; Handle event-msgs on a thread pool
  )

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

(defmethod -event-msg-handler
  :pipeline/update-transform-params
  [event-msg]
  (let [data (second (:event event-msg))
        uid    (:uid event-msg)]

    (doall (map
      #(pipeline-list/update-pipeline-list
        (pipeline-list/update-transform @pipeline-list/loaded-pipelines uid %1))
      (:transform-list data)))
    (doseq [transform-data (:transform-list data)]
     (pipeline-list/notify-client-of-img-change
      (pipeline-list/->pipeline-specifier
       uid (:id transform-data))))))

(defmethod -event-msg-handler
  :pipeline/select-source
  [{:as ev-msg :keys [?data uid]}]
  (pipeline-list/update-pipeline-list
   (assoc
    @pipeline-list/loaded-pipelines
    uid
    (pipeline/update-pipeline-source-img
     (pipeline-list/get-pipeline-from-list @pipeline-list/loaded-pipelines uid)
     (keyword (clojure.string/replace (:src-name ?data) #" " "-")))))
  (pipeline-list/notify-client-of-img-change uid :pipeline-source-img))


(defn handle-transformation-result
  [transformation-result uid]
      ;first for some side effects
      (pipeline-list/update-pipeline-list (:pipelines transformation-result))
      ;now return the generated html
      {:html
       (pipeline-template/generate-new-frame-html
        (pipeline/get-frame-from-pipeline 
         (pipeline-list/get-pipeline-from-list (:pipelines transformation-result) uid)
         (:frame-id transformation-result))
        filter/filter-params)

       :frame-id
       (:frame-id transformation-result)})

(defmethod -event-msg-handler :pipeline/close-frame
  [ev-msg]
  (let [data
        (second (:event ev-msg))

        edited-pipeline-result
        (pipeline/remove-pipeline-frame
         (pipeline-list/get-pipeline-from-list @pipeline-list/loaded-pipelines (:uid ev-msg))
         (:id data))]

    (pipeline-list/update-pipeline-list
     (assoc @pipeline-list/loaded-pipelines
            (:uid ev-msg)
            (:pipeline edited-pipeline-result)))

    ;Notify the client 
    (pipeline-list/notify-client-of-frame-deletion
     (:uid ev-msg)
     (:id data)
     (:affected-ids edited-pipeline-result))))

(defmethod -event-msg-handler :pipeline/add-transformation
  [ev-msg]
                                        ;(soc/chsk-send! 1 [:opencv/load-transformation-options {:html (get-transform-html (:transformation-selection (second (:event ev-msg))))}])
  
  (let [event-data (second (:event ev-msg))]

   (soc/chsk-send! (:uid ev-msg)
     [:pipeline/load-transformation-frame

       (handle-transformation-result
        (pipeline-list/add-transformation
         @pipeline-list/loaded-pipelines
         (:transformation-selection event-data)
         (:uid ev-msg)
         (:parent-frame event-data))
        (:uid ev-msg))])))

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-fn @router_] (stop-fn)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-server-chsk-router!
      soc/ch-chsk event-msg-handler)))

(defn stop!  []  (stop-router!))
(defn start! [] (start-router!))

(stop!)
(start!)



