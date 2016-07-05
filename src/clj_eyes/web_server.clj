(ns clj-eyes.web-server
  (:require
   weasel.repl.websocket
   [org.httpkit.server :as server]
   [clj-eyes.templates.home-template :as home-template]
   [clj-eyes.templates.pipeline-template :as pipeline-template]
   [clj-eyes.web-socket :as soc]
   [clj-eyes.session :as session]
   [clj-eyes.pipeline-list :as pipeline-list]
   [clj-eyes.pipeline :as pipeline]
   clj-eyes.event-message-handler
   [compojure.core :refer :all]
   [compojure.route :as route])
  (:use
   ring.middleware.file 
   ring.middleware.params 
   ring.middleware.keyword-params 
   ring.middleware.session
   ring.middleware.multipart-params
   [ring.util.response :only [response]]
   hiccup.core))

(defn pipeline-handler [request]
    {:status  200
     :session (session/generate-session request) 
     :headers {"Content-Type" "text/html"}
     :body (if (not (nil? (:mockup (:params request))))
             (pipeline-template/render-mockup)
             (pipeline-template/render
              (pipeline/transform-frame-list
               (pipeline-list/get-pipeline-from-list
                @pipeline-list/loaded-pipelines (get-in request [:session :uid])))))})

(defn home-handler [request]
  (println "handling request")
  {:status  200
   :session {:uid 1}
   :headers {"Content-Type" "text/html"}
   :body (home-template/render)})

(defn file-handler [request]
  (if (not (nil? (:id (:params request)))) 
      (let [webp

            (pipeline-list/fetch-webp
             @pipeline-list/loaded-pipelines
             (:uid (request :session))
             (keyword (:id (:params request))))]

       (if (= (:type webp) :in-memory)
           {:status 200
            :headers {"Content-Type" "image/webp"}
            :body (java.io.ByteArrayInputStream. (.toArray (:value webp)))}))))


(defn upload-src-request-handler [req]
  (let [session (:session req)
        uid (:uid session)]
    ;;Converting a File to a pathname only to use CV to load the file again seems a bit redundant, but CV cant imread from File obj
    (pipeline-list/update-pipeline-list
     (pipeline-list/load-new-source (:src-file (:params req)) uid @pipeline-list/loaded-pipelines))
    (pipeline-list/notify-client-of-img-change uid "pipeline-source-img")
    {:status 200}))



(defn upload-src-handler [request]
  (def multipart-request request))

(:tempfile (:src-file (:params multipart-request)))

(defroutes app
  (GET "/" req home-handler)
  (GET "/pipeline" req pipeline-handler)
  (GET  "/chsk" req (soc/ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (soc/ring-ajax-post                req))
  (POST "/upload-src" req upload-src-request-handler)
  (GET "/img" req (file-handler req)))

(def main-handler 
  (-> app 
      (wrap-file "resources/public")
      (wrap-keyword-params)
      (wrap-params)
      (wrap-multipart-params)
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

(start-server)

