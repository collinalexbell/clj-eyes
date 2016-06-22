(ns clj-eyes.session
  (:require [clj-eyes.web-socket :as socket]))

(defn generate-session [request]
  "Will generate a session if one does not exist. Returns the session otherwise
   NOTE: Is not a pure function because socket/generate-unique-uid uses an atom"
  (if (nil? (:uid (:session request)))
      (assoc (get request :session {}) :uid (socket/generate-unique-uid))
      (request :session)))
