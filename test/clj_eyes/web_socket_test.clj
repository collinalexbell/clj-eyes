(ns clj-eyes.web-socket-test
  (:use clojure.test)
  (:require [clj-eyes.web-socket :as socket]))

(deftest generate-unique-uid
  ;;test sessions already loaded case
  (is (= (socket/-generate-unique-uid {:any #{1 2 4}}) 5))
  ;;test the empty uid case
  (is (= (socket/-generate-unique-uid {:any #{}}))))

(run-tests)
