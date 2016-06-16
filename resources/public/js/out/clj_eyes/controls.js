// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.controls');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('jayq.core');
console.log(jayq.core.$.call(null,new cljs.core.Keyword(null,"#select-transform","#select-transform",1569387196)));
clj_eyes.controls.handle_select_transform = (function clj_eyes$controls$handle_select_transform(){
return ajax.core.POST.call(null,"/select-transformation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),jayq.core.val.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#select-transform","#select-transform",1569387196)))], null)], null));
});
jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#select-transform","#select-transform",1569387196)),new cljs.core.Keyword(null,"change","change",-1163046502),clj_eyes.controls.handle_select_transform);

//# sourceMappingURL=controls.js.map?rel=1466071999997