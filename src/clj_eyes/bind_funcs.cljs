(ns clj-eyes.bind-funcs
  (:require [clj-eyes.param-handling :as params]
            [jayq.core :as jq]
            [clj-eyes.handlers :as handle]))

(defn bind-on-file-select []
  (-> (jq/$ :#source-file)
            (jq/bind :change handle/upload-file)))


(defn bind-submit-new-filter-option []
  (-> (jq/$ :#submit-new-filter-option)
     (jq/bind :click handle/select-transform)))


(defn bind-upload-button []
  (-> (jq/$ :#select-source-upload)
     (jq/bind
      :click
      #(-> (jq/$ :#source-file)
           (jq/trigger :click)))))


(defn run-init-binds []
  (bind-on-file-select)
  (bind-submit-new-filter-option)
  (bind-upload-button))
