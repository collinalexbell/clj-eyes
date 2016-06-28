(ns clj-eyes.cv
  (:require [taoensso.sente :as sente]
            [clj-eyes.web-socket :as soc])
  (:use hiccup.core))

(import '[org.opencv.core MatOfInt MatOfByte Mat CvType Size]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])

(def tomato-pic (Imgcodecs/imread "resources/imgs/tomato_plants.jpg"))

(def current-img (atom nil))


(defn gaussian-blur [src dest kernal-height kernal-width standard-deviation]
  (Imgproc/GaussianBlur src dest (Size.
                                  (read-string kernal-height)
                                  (read-string kernal-width))
                        (read-string standard-deviation)))

(defn canny [src dest threshold1 threshold2]
  (Imgproc/Canny src dest
                 (read-string threshold1)
                 (read-string threshold2)))


(defn load-current-img [img]
  (swap! current-img
         (fn [throw-away]
           (let [img-buf (MatOfByte.)]
             (Imgcodecs/imencode ".webp" img img-buf (MatOfInt. (into-array Integer/TYPE [Imgcodecs/CV_IMWRITE_WEBP_QUALITY 30])))
            img-buf))))

(defn get-current-image []
  @current-img)

(defn notify-client-of-img-change []
  (soc/chsk-send! 1 [:opencv/reload {:data nil}]))

(defn do-transform [data]
  (let [rv (Mat. (.size tomato-pic) CvType/CV_8UC3)
        name  (data :transformation-name)
        params (map #(:value %) (data :transformation-params))]
    
    (println *ns*)
    (let [name-symbol (symbol name)]
     (apply (eval name-symbol) (cons tomato-pic (cons rv params))))
    (load-current-img rv))
  (notify-client-of-img-change))


(defn get-transform-html [transform-name]
  (case transform-name
    "gaussian-blur" (html
                            [:div#transform-params
                             [:label "Kernal Height"
                              [:input
                               {:type "range" :defaultValue "1" :min "1" :max "25" :step "2" :name "kernal-height" :class "transform-param"}]]
                             [:label "Kernal Width"
                              [:input
                               {:type "range" :defaultValue "1" :min "1" :max "25" :step "2" :name "kernal-width" :class "transform-param"}]]
                             [:label "Standard Deviation"
                              [:input
                               {:type "range" :defaultValue "0" :min "0" :max "20" :name "standard-deviation" :class "transform-param"}]]])
    "canny" (html
             [:div#transform-params
              [:label "Threshold 1"
                [:input
                 {:type "range" :defaultValue "1" :min "0" :max "500" :step "1" :name "threshold1" :class "transform-param"}]]
              [:label "Threshold 2"
                [:input
                 {:type "range" :defaultValue "1" :min "0" :max "500" :step "1" :name "threshold2" :class "transform-param"}]]])
    "nil" ""))

;Init the module
(load-current-img tomato-pic)


(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (println ev-msg)
  (-event-msg-handler ev-msg) ; Handle event-msgs on a single thread
  ;; (future (-event-msg-handler ev-msg)) ; Handle event-msgs on a thread pool
  )

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

(defmethod -event-msg-handler :opencv/transformation
  [ev-msg]
  (println "transform")
  (soc/chsk-send! 1 [:opencv/load-transformation-options {:html (get-transform-html (:transformation-selection (second (:event ev-msg))))}]))


(defmethod -event-msg-handler :opencv/load-transformation
  [ev-msg]
  (do-transform (second (:event ev-msg))))

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-fn @router_] (stop-fn)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/tart-server-chsk-router!
      soc/ch-chsk event-msg-handler)))

(defn stop!  []  (stop-router!))
(defn start! [] (start-router!))

(start!)
