(ns clj-eyes.controls
  (:require [ajax.core :refer [GET POST]]
            [jayq.core :as jq]))

(.log js/console (jq/$ :#select-transform))

(defn handle-select-transform []
  (POST "/select-transformation"
       {:params
        {:transform (jq/val (jq/$ :#select-transform))}}))

(-> (jq/$ :#select-transform)
    (jq/bind :change handle-select-transform))
