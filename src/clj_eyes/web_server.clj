(ns clj-eyes.web-server
  (:require
   weasel.repl.websocket
   [org.httpkit.server :as server]
   [clj-eyes.templates.home-template :as home-template]
   [clj-eyes.web-socket :as soc]
   [clj-eyes.cv :as cv]
   [compojure.core :refer :all]
   [compojure.route :as route]
   )
  (:use
   ring.middleware.file 
   ring.middleware.params 
   ring.middleware.keyword-params 
   ring.middleware.session
   [ring.util.response :only [response]]
   hiccup.core))


(defn home-handler [request]
  (println "handling request")
  {:status  200
   :session {:uid 1}
   :headers {"Content-Type" "text/html"}
   :body (home-template/render)})

(defn file-handler [request]
  {:status 200
   :headers {"Content-Type" "image/jpeg"}
   :body (java.io.ByteArrayInputStream. (.toArray (cv/get-current-image)))
   })


(defroutes app
  (GET "/" req home-handler)
  (GET  "/chsk" req (soc/ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (soc/ring-ajax-post                req))
  (GET "/img" req (file-handler req)))

(def main-handler 
  (-> app 
      (wrap-file "resources/public")
      (wrap-keyword-params)
      (wrap-params)
      (wrap-session)))

(def server-shutdown-fn (atom nil))

(defn start-server []
  ;Shut down previous server if it is running
  (if (not (= @server-shutdown-fn nil))
      (@server-shutdown-fn))
  (swap! server-shutdown-fn 
    (fn [throw-away]
      (server/run-server main-handler {:port 8080})))) 

;(@server-shutdown-fn)



;(start-server)





