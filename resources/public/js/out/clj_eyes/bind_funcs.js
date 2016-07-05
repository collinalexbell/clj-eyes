// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.bind_funcs');
goog.require('cljs.core');
goog.require('clj_eyes.param_handling');
goog.require('jayq.core');
goog.require('clj_eyes.handlers');
clj_eyes.bind_funcs.jq_each_elements = (function clj_eyes$bind_funcs$jq_each_elements(elements,each_fn){
var elements__$1 = cljs.core.js__GT_clj.call(null,elements);
var n__22628__auto__ = cljs.core.count.call(null,elements__$1);
var el_num = (0);
while(true){
if((el_num < n__22628__auto__)){
each_fn.call(null,el_num,cljs.core.nth.call(null,elements__$1,el_num));

var G__32287 = (el_num + (1));
el_num = G__32287;
continue;
} else {
return null;
}
break;
}
});
clj_eyes.bind_funcs.on_file_upload = (function clj_eyes$bind_funcs$on_file_upload(){
return jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#source-file","#source-file",-1314187081)),new cljs.core.Keyword(null,"change","change",-1163046502),clj_eyes.handlers.upload_file);
});
clj_eyes.bind_funcs.submit_new_filter_option = (function clj_eyes$bind_funcs$submit_new_filter_option(){
return jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#submit-new-filter-option","#submit-new-filter-option",404909333)),new cljs.core.Keyword(null,"click","click",1912301393),clj_eyes.handlers.select_transform);
});
clj_eyes.bind_funcs.upload_button = (function clj_eyes$bind_funcs$upload_button(){
return jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#select-source-upload","#select-source-upload",-1593243413)),new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return jayq.core.trigger.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#source-file","#source-file",-1314187081)),new cljs.core.Keyword(null,"click","click",1912301393));
}));
});
clj_eyes.bind_funcs.close_button = (function clj_eyes$bind_funcs$close_button(frame_id){
return jayq.core.bind.call(null,jayq.core.find.call(null,jayq.core.$.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,frame_id))].join('')),new cljs.core.Keyword(null,".close-button",".close-button",1694048710)),new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return clj_eyes.handlers.close_button.call(null,frame_id).call(null);
}));
});
clj_eyes.bind_funcs.on_file_select = (function clj_eyes$bind_funcs$on_file_select(){

return jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#src-select","#src-select",-1981143020)),new cljs.core.Keyword(null,"change","change",-1163046502),clj_eyes.handlers.select_source);
});
clj_eyes.bind_funcs.on_init_frame_load = (function clj_eyes$bind_funcs$on_init_frame_load(){
return clj_eyes.bind_funcs.jq_each_elements.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".transform-frame",".transform-frame",1947534814)),(function (i,item){
var id = clojure.string.replace.call(null,jayq.core.attr.call(null,jayq.core.$.call(null,item),"id"),/pipeline-/,"");
clj_eyes.param_handling.bind_inputs_on_change.call(null,id);

return clj_eyes.bind_funcs.close_button.call(null,id);
}));
});
clj_eyes.bind_funcs.run_init_binds = (function clj_eyes$bind_funcs$run_init_binds(){
clj_eyes.bind_funcs.on_file_select.call(null);

clj_eyes.bind_funcs.on_file_upload.call(null);

clj_eyes.bind_funcs.submit_new_filter_option.call(null);

clj_eyes.bind_funcs.upload_button.call(null);

return clj_eyes.bind_funcs.on_init_frame_load.call(null);
});

//# sourceMappingURL=bind_funcs.js.map?rel=1467704719067