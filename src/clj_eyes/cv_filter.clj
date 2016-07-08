(ns clj-eyes.cv-filter)


(import '[org.opencv.core MatOfInt MatOfByte Mat CvType Size]
        '[org.opencv.imgcodecs Imgcodecs]
        '[org.opencv.imgproc Imgproc])


(defn bilateral-filter
  ([src dest diameter sigma-color sigma-space]
   (Imgproc/bilateralFilter src dest
                            (read-string diameter)
                            (read-string sigma-color)
                            (read-string sigma-space)))
  ([src dest diameter sigma-color sigma-space border-type]
   (Imgproc/bilateralFilter src dest
                            (read-string diameter)
                            (read-string sigma-color)
                            (read-string sigma-space)
                            (read-string border-type))))

(defn sobel
  ([src dest dx dy]
   (Imgproc/Sobel src dest
                  -1
                  (read-string dx)
                  (read-string dy)))

  ([src dest dx dy ksize scale delta]
   (Imgproc/Sobel src dest
                  -1
                  (read-string dx)
                  (read-string dy)
                  (read-string ksize)
                  (read-string scale)
                  (read-string delta)))

  ([src dest dx dy ksize scale delta border-type]
   (Imgproc/Sobel src dest
                  -1
                  (read-string dx)
                  (read-string dy)
                  (read-string ksize)
                  (read-string scale)
                  (read-string delta)
                  (read-string border-type))))

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

(defn median-blur
  [src dest ksize]
  (Imgproc/medianBlur src dest (read-string ksize)))

(defn box-filter
  [src dest kwidth kheight]
  (Imgproc/boxFilter src dest -1
                     (Size.
                      (read-string kwidth)
                      (read-string kheight))))

(defn blur 
  [src dest kwidth kheight]
  (Imgproc/boxFilter src dest -1
                     (Size.
                      (read-string kwidth)
                      (read-string kheight))))


(defn erode
  ([src dest kernal-width kernal-height]
   (Imgproc/erode
    src dest
    (Imgproc/getStructuringElement 0 (Size.
                                      (read-string kernal-width)
                                      (read-string kernal-height))))))
(defn dilate
  ([src dest kernal-width kernal-height]
   (Imgproc/dilate
    src dest
    (Imgproc/getStructuringElement 0 (Size.
                                      (read-string kernal-width)
                                      (read-string kernal-height))))))

(defn filter2d 
  ([src dest kernal-width kernal-height]
   (Imgproc/filter2D
    src dest -1
    (Imgproc/getStructuringElement 0 (Size.
                                      (read-string kernal-width)
                                      (read-string kernal-height))))))





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

(defn border-type-param [option-group]
  (gen-filter-param :select "Border Type" "4" option-group
                    {:options [{:label "Constant"    :value 0}
                               {:label "Replicate"   :value 1}
                               {:label "Reflect"     :value 2}
                               {:label "Wrap"        :value 3}
                               {:label "Reflect 101" :value 4}
                               {:label "Isolated"    :value 16}]}))

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
  [(gen-filter-param :range "Pixel Neighborhood Diameter" "1" 0 {:step 1 :min 1 :max 10})
   (gen-filter-param :range "Sigma Color" "0" 0 {:step 0.2 :min 0 :max 400})
   (gen-filter-param :range "Sigma Space" "0" 0 {:step 0.2 :min 0 :max 400})
   (border-type-param 1)]

  :sobel
  [(gen-filter-param :range "X Derivative Order" "1" 0 {:step 1 :min 0 :max 3})
   (gen-filter-param :range "Y Derivative Order" "0" 0 {:step 1 :min 0 :max 3})
   (gen-filter-param :range "Kernal Size" "3" 1 {:step 2 :min 1 :max 7})
   (gen-filter-param :range "Scale Factor" "1" 1 {:min 1 :max 5})
   (gen-filter-param :range "Delta" "0" 1 {:min 0 :max 100})
   (border-type-param 2)]

  :median-blur
  [(gen-filter-param :range "Kernal Size" "3" 0 {:step 2 :min 3 :max 5})]

  :box-filter
  [(gen-filter-param :range "Kernal Width" "1" 0 {:min 1 :max 50})
   (gen-filter-param :range "Kernal Height" "1" 0 {:min 1 :max 50})]

  :blur
  [(gen-filter-param :range "Kernal Width" "1" 0 {:min 1 :max 100})
   (gen-filter-param :range "Kernal Height" "1" 0 {:min 1 :max 100})]

  :erode
  [(gen-filter-param :range "Kernal Width" "3" 0 {:min 1 :max 20})
   (gen-filter-param :range "Kernal Height" "3" 0 {:min 1 :max 20})]

  :dilate
  [(gen-filter-param :range "Kernal Width" "3" 0 {:min 1 :max 20})
   (gen-filter-param :range "Kernal Height" "3" 0 {:min 1 :max 20})]

  :filter2d
  [(gen-filter-param :range "Kernal Width" "3" 0 {:min 1 :max 20})
   (gen-filter-param :range "Kernal Height" "3" 0 {:min 1 :max 20})]})


filter-params


(def transformation-labels
  {:canny            "Canny Edge Finder"
   :gaussian-blur    "Gaussian Blur"
   :bilateral-filter "Bilateral Filter"
   :sobel            "Sobel"
   :median-blur      "Median Blur"
   :box-filter       "Box Filter"
   :blur             "Standard Blur"
   :erode            "Erode"
   :dilate           "Dilate"
   :filter2d         "Filter 2D"})


(defn generate-default-params [param-list selection]
  (map
   (fn [item] {:value (:default item)})
   (filter
    #(if (= 0 (:option-group %1))
       true
       false)
    (get param-list selection))))


