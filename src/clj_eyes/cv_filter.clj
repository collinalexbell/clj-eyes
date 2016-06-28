(ns clj-eyes.cv-filter)


(import '[org.opencv.core MatOfInt MatOfByte Mat CvType Size]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])


(defn gaussian-blur [src dest kernal-height kernal-width standard-deviation]
  (Imgproc/GaussianBlur src dest (Size.
                                  (read-string kernal-height)
                                  (read-string kernal-width))
                        (read-string standard-deviation)))

(defmulti canny (fn []))

(defn canny
  ([src dest threshold1 threshold2]
    (Imgproc/Canny src dest
                   (read-string threshold1)
                   (read-string threshold2)))

  ([src dest threshold1 threshold2 aperture-size l2-gradient]
   (Imgproc/Canny src dest
                  (read-string threshold1)
                  (read-string threshold2)
                  (read-string aperture-size)
                  (read-string l2-gradient))))


(def filter-params
 {:canny
  [{:type :range :label "Threshold 1"   :obligation :manditory :default "0" :option-group 0}
   {:type :range :label "Threshold 2"   :obligation :manditory :default "0" :option-group 0}
   {:type :range :label "Aperture Size" :obligation :optional  :default "3" :min 3 :max 7 :step 2 :option-group 1}
   {:type :boolean :label "L2 Gradient" :obligation :optional :default "true" :option-group 1}]

  :gaussian-blur
  [{:type :range :label "Kernal Size X"   :obligation :manditory :default "1" :option-group 0 :step 2 :min 1}
   {:type :range :label "Kernal Size Y"   :obligation :manditory :default "1" :option-group 0 :step 2 :min 1}
   {:type :range :label "SigmaX"        :obligation :manditory :default "0" :option-group 0 :step 0.2 :min 0}
   {:type :range :label "SigmaY"        :obligation :optional  :default "0" :option-group 1 :step 0.2 :min 0}]})


(def transformation-labels
  {:canny          "Canny Edge Finder"
   :gaussian-blur  "Gaussian Blur"})


(defn generate-default-params [param-list selection]
  (map
   (fn [item] {:value (:default item)})
   (filter
    #(if (= 0 (:option-group %1))
       true
       false)
    (get param-list selection))))


