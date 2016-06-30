(defproject clj-eyes "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :injections [(clojure.lang.RT/loadLibrary org.opencv.core.Core/NATIVE_LIBRARY_NAME)]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [org.clojure/core.async "0.2.385"]
                 [opencv/opencv "3.1.0"] ; added line
                 [opencv/opencv-native "3.1.0"]
                 [alembic "0.3.2"]
                 [http-kit "2.1.18"] ; Add to your project.clj. 
                 [ring "1.4.0"]
                 [hiccup "1.0.5"]
                 [com.cemerick/austin "0.1.6"]
                 [weasel "0.7.0" :exclusions [org.clojure/clojurescript]]
                 [com.taoensso/sente "1.9.0-beta2"]
                 [compojure "1.5.0"]
                 [com.taoensso/timbre "4.4.0"]
                 [com.taoensso/encore "2.56.1"]
                 [jayq "2.5.4"]
                 [cljs-http "0.1.41"]
                 [ring-transit "0.1.5"]
                 [garden "1.3.2"]]
  :profiles {:production {:main clj-eyes.core}}
  :plugins [[lein-figwheel "0.5.4-3"]]
  :cljsbuild {
    :builds [{:id "clj-eyes" 
                :source-paths ["src/"]
                :figwheel true
                :compiler {  :main "clj-eyes.core"
                             :asset-path "js/out"
                             :output-to "resources/public/js/clj-eyes.js"
                             :output-dir "resources/public/js/out"}}]}) 

