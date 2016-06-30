(ns clj-eyes.controls
  (:require-macros [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [taoensso.sente :as sente]
            [jayq.core :as jq]
            [clj-eyes.img-frame :as img]
            [clj-eyes.socket :as soc]
            [taoensso.encore :as encore :refer ()]
            [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [cljs.core.async :refer [<!]]
            [clj-eyes.param-handling :as params]
            [clj-eyes.bind-funcs :as bind]
            [clj-eyes.handlers :as handle]))




(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )


(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (:first-open? ?data)
    (.log js/console "Channel socket successfully established!: %s" ?data)
    (.log js/console "Channel socket state change: %s" ?data)))

(defmethod -event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (.log js/console "Push event from server: %s" ?data))

(defmethod -event-msg-handler :pipeline/reload-img
  [{:as ev-msg :keys [?data]}]
  (.log js/console (str "Reloading img" (:id ?data)))
  (.log js/console (:id ?data))
  (img/reload-image (name (:id ?data))))

(defmethod -event-msg-handler :chsk/ws-error
  [{:as ev-msg :keys [?data]}]
  (.log js/console "Error event from server: %s" ?data))

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (.log js/console "Handshake: %s" ?data)))

(defmethod -event-msg-handler :pipeline/load-transformation-frame
  [{:as ev-msg :keys [?data]}]
  (handle/add-transformation (:html ?data))
  (params/bind-inputs-on-change (:frame-id ?data)))


(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-client-chsk-router!
      soc/ch-chsk event-msg-handler)))

(defn init []
  (start-router!)
  (bind/run-init-binds))

(init)
