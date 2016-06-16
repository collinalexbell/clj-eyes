(ns clj-eyes.img-frame)

(defn reload-image-frame []
  (set! (.-src (.getElementById js/document "image-frame")) (str "/img?" (.now js/Date))))
