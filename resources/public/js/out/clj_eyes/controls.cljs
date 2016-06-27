(ns clj-eyes.controls
  (:require-macros [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [taoensso.sente :as sente]
            [jayq.core :as jq]
            [clj-eyes.img-frame :as img]
            [clj-eyes.socket :as soc]
            [taoensso.encore :as encore :refer ()]
            [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [clj-eyes.param-handling :as params]))

(defn upload-file []
    (http/post
     "/upload-src"
     {:multipart-params
      [[:data "data"] ["src-file" (-> (.getElementById js/document "source-file") .-files (.item 0))]]}))

(defn bind-on-file-select []
  (-> (jq/$ :#source-file)
            (jq/bind :change upload-file)))

(defn init-upload-button []
  (-> (jq/$ :#select-source-upload)
     (jq/bind
      :click
      #(-> (jq/$ :#source-file)
           (jq/trigger :click)))))


(defn handle-select-transform []
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

(-> (jq/$ :#submit-new-filter-option)
    (jq/bind :click handle-select-transform))

(defn jq-each [selector each-fn]
  (let [elements (js->clj (jq/$ selector))]
    (dotimes [el-num (count elements)]
      (each-fn el-num (nth elements el-num)))))

(defn other-transform []
  (.log js/console "params changed"))

(defn handle-transform-param-change []
  (let [params (atom [])]
      (.log js/console "params changed")
   (jq-each ".transform-param"
            (fn [i item]
              (swap! params conj {:name (jq/attr (jq/$ item) "name")
                                  :value (.-value item)})))
   (soc/chsk-send! [:opencv/load-transformation  {:transformation-name (jq/val (jq/$ :#select-transform))
                                                  :transformation-params @params}])))

(defn load-transform-options [html]
  (jq/html (jq/$ :#transform-options) html)
  (-> (jq/$ :.transform-param)
    (jq/bind :change handle-transform-param-change)))


(defn add-transformation [html]
  (.log js/console html)
  (-> (jq/$ :.pipeline-frame)
      .last
      (jq/after html)))


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

(defmethod -event-msg-handler :opencv/reload
  [{:as ev-msg :keys [?data]}]
  (.log js/console "Server notified client of img change. Reloading")
  (img/reload-image-frame))

(defmethod -event-msg-handler :pipeline/reload-img
  [{:as ev-msg :keys [?data]}]
  (.log js/console "Reloading img")
  (.log js/console (:id ?data))
  (img/reload-image (name (:id ?data))))

(defmethod -event-msg-handler :chsk/ws-error
  [{:as ev-msg :keys [?data]}]
  (.log js/console "Error event from server: %s" ?data))

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (.log js/console "Handshake: %s" ?data)))

(defmethod -event-msg-handler :opencv/load-transformation-options
  [{:as ev-msg :keys [?data]}]
  (load-transform-options (:html ?data)))

(defmethod -event-msg-handler :pipeline/load-transformation-frame
  [{:as ev-msg :keys [?data]}]
  (add-transformation (:html ?data))
  (params/bind-inputs-on-change (:frame-id ?data)))


(init-upload-button)
(bind-on-file-select)


(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-client-chsk-router!
      soc/ch-chsk event-msg-handler)))

(start-router!)

