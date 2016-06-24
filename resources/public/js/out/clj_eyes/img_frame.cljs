(ns clj-eyes.img-frame)

(defn reload-image-frame []
  (set! (.-src (.getElementById js/document "image-frame")) (str "/img?" (.now js/Date))))

(defn reload-image [id]
  (.log js/console id)
  (set! (.-src (.getElementById js/document id)) (str "/img?id=" id "&time=" (.now js/Date))))
  
