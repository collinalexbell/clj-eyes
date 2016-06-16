// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.img_frame');
goog.require('cljs.core');
clj_eyes.img_frame.reload_image_frame = (function clj_eyes$img_frame$reload_image_frame(){
return document.getElementById("image-frame").src = [cljs.core.str("/img?"),cljs.core.str(Date.now())].join('');
});

//# sourceMappingURL=img_frame.js.map?rel=1466066918921