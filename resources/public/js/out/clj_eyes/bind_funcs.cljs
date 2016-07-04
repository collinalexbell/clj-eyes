(ns clj-eyes.bind-funcs
  (:require [clj-eyes.param-handling :as params]
            [jayq.core :as jq]
            [clj-eyes.handlers :as handle]))

(defn on-file-upload []
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

(defn on-file-select []
  "Initally binds the select-source select box to handle any changes"
  (-> (jq/$ :#src-select)
      (jq/bind
       :change
       handle/select-source)))

(defn run-init-binds []
  (on-file-select)
  (on-file-upload)
  (submit-new-filter-option)
  (upload-button))
