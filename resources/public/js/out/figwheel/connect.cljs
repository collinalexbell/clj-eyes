(ns figwheel.connect (:require [clj-eyes.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "clj-eyes", :websocket-url "ws://localhost:3449/figwheel-ws"})

