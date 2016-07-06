(ns clj-eyes.cv-filter)


(import '[org.opencv.core MatOfInt MatOfByte Mat CvType Size]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])


(defn bilateral-filter
  ([src dest diameter sigma-color sigma-space]
   (Imgproc/bilateralFilter src dest
                            (read-string diameter)
                            (read-string sigma-color)
                            (read-string sigma-space))))

(defn gaussian-blur
  ([src dest kernal-height kernal-width standard-deviation-x]
   (Imgproc/GaussianBlur src dest (Size.
                                   (read-string kernal-height)
                                   (read-string kernal-width))
                         (read-string standard-deviation-x)))

  ([src dest kernal-height kernal-width standard-deviation-x standard-deviation-y]
   (Imgproc/GaussianBlur src dest (Size.
                                   (read-string kernal-height)
                                   (read-string kernal-width))
                         (read-string standard-deviation-x)
                         (read-string standard-deviation-y))))


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

(defn gen-filter-param
  "Generates a map that defines a filter-param"
  [type label default option-group & [additional-arg-map]]
  (merge
   {:type type
    :label label
    :default default
    :option-group option-group
    :obligation (if (< option-group 1) :manditory :optional)}
   additional-arg-map))

(def filter-params
 {:canny
  [(gen-filter-param :range "Threshold 1" "0" 0)
   (gen-filter-param :range "Threshold 2" "0" 0)
   (gen-filter-param :range "Aperture Size" "3" 1 {:min 3 :max 7 :step 2})
   (gen-filter-param :boolean "L2 Gradient" "true" 1)]

  :gaussian-blur
  [(gen-filter-param :range "Kernal Size X" "1" 0 {:step 2 :min 1})
   (gen-filter-param :range "Kernal Size Y" "1" 0 {:step 2 :min 1})
   (gen-filter-param :range "SigmaX" "0" 0 {:step 0.2 :min 0})
   (gen-filter-param :range "SigmaY" "0" 0 {:step 0.2 :min 0})]

  :bilateral-filter
  [(gen-filter-param :range "Pixel Neighborhood Diameter" "0" 0 {:step 1 :min 0 :max 10})
   (gen-filter-param :range "Sigma Color" "0" 0 {:step 0.2 :min 0 :max 400})
   (gen-filter-param :range "Sigma Space" "0" 0 {:step 0.2 :min 0 :max 400})]})


filter-params


(def transformation-labels
  {:canny          "Canny Edge Finder"
   :gaussian-blur  "Gaussian Blur"
   :bilateral-filter "Bilateral Filter"})


(defn generate-default-params [param-list selection]
  (map
   (fn [item] {:value (:default item)})
   (filter
    #(if (= 0 (:option-group %1))
       true
       false)
    (get param-list selection))))


