(ns clj-eyes.event-message-handler
  (:require [clj-eyes.web-socket :as soc]
            [clj-eyes.pipeline-test :as pipeline]))


(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (println ev-msg)
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

(defmethod -event-msg-handler :opencv/transformation
  [ev-msg]
  (println "transform")
  (soc/chsk-send! 1 [:opencv/load-transformation-options {:html (get-transform-html (:transformation-selection (second (:event ev-msg))))}]))

(defmethod -event-msg-handler :opencv/load-transformation
  [ev-msg]
  (do-transform (second (:event ev-msg))))

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-fn @router_] (stop-fn)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-server-chsk-router!
      soc/ch-chsk event-msg-handler)))

(defn stop!  []  (stop-router!))
(defn start! [] (start-router!))

(start!)
