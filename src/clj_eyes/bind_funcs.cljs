(ns clj-eyes.bind-funcs
  (:require [clj-eyes.param-handling :as params]
            [jayq.core :as jq]
            [clj-eyes.handlers :as handle]))

(defn on-file-select []
  (-> (jq/$ :#source-file)
            (jq/bind :change handle/upload-file)))


(defn submit-new-filter-option []
  (-> (jq/$ :#submit-new-filter-option)
     (jq/bind :click handle/select-transform)))


(defn upload-button []
  (-> (jq/$ :#select-source-upload)
     (jq/bind
      :click
      #(-> (jq/$ :#source-file)
           (jq/trigger :click)))))

(defn close-button [frame-id]
  (-> (jq/$ (str "#pipeline-" (name frame-id)))
      (jq/find :.close-button)
      (jq/bind
       :click
       #((handle/close-button frame-id)))))


(defn run-init-binds []
  (on-file-select)
  (submit-new-filter-option)
  (upload-button))
