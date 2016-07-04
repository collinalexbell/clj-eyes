// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.handlers');
goog.require('cljs.core');
goog.require('hiccups.runtime');
goog.require('clj_eyes.param_handling');
goog.require('cljs_http.client');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('clj_eyes.socket');
clj_eyes.handlers.select_transform = (function clj_eyes$handlers$select_transform(){
console.log("handling selection");

return clj_eyes.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipeline","add-transformation","pipeline/add-transformation",1247270676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transformation-selection","transformation-selection",-1276645577),jayq.core.val.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#select-transform","#select-transform",1569387196))),new cljs.core.Keyword(null,"parent-frame","parent-frame",624801715),jayq.core.attr.call(null,jayq.core.find.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".pipeline-frame",".pipeline-frame",-1655973309)).last(),new cljs.core.Keyword(null,"img","img",1442687358)).first(),new cljs.core.Keyword(null,"id","id",-1388402092))], null)], null));
});
/**
 * Adds a file to the select list of uploaded images
 */
clj_eyes.handlers.add_file_to_uploaded_imgs_list = (function clj_eyes$handlers$add_file_to_uploaded_imgs_list(img_name){
console.log([cljs.core.str("<option"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"value","value",305978217),img_name], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,img_name)),cljs.core.str("</option>")].join(''));

if((cljs.core.count.call(null,jayq.core.find.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#src-select","#src-select",-1981143020)),new cljs.core.Keyword(null,"option","option",65132272))) < (2))){
jayq.core.append.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#src-select","#src-select",-1981143020)),[cljs.core.str("<option value=\"default-img\">Default Img</option>")].join(''));
} else {
}

return jayq.core.append.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#src-select","#src-select",-1981143020)),[cljs.core.str("<option"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"value","value",305978217),img_name], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,img_name)),cljs.core.str("</option>")].join('')).selectpicker("refresh");
});
clj_eyes.handlers.upload_file = (function clj_eyes$handlers$upload_file(){
var postback_chan = cljs_http.client.post.call(null,"/upload-src",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["src-file",document.getElementById("source-file").files.item((0))], null)], null)], null));
var c__23752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23752__auto__,postback_chan){
return (function (){
var f__23753__auto__ = (function (){var switch__23731__auto__ = ((function (c__23752__auto__,postback_chan){
return (function (state_30249){
var state_val_30250 = (state_30249[(1)]);
if((state_val_30250 === (1))){
var inst_30244 = (function (){return ((function (state_val_30250,c__23752__auto__,postback_chan){
return (function (response){
clj_eyes.handlers.add_file_to_uploaded_imgs_list.call(null,document.getElementById("source-file").files.item((0)).name);

return ((function (state_val_30250,c__23752__auto__,postback_chan){
return (function (pipeline_input_list){
return clj_eyes.param_handling.send_update_transform_params.call(null,cljs.core.map.call(null,((function (state_val_30250,c__23752__auto__,postback_chan){
return (function (pipeline_transform_data){
return (new clj_eyes.param_handling.transform_data(new cljs.core.Keyword(null,"input-list","input-list",-122103664).cljs$core$IFn$_invoke$arity$1(pipeline_transform_data),new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364).cljs$core$IFn$_invoke$arity$1(pipeline_transform_data),null,null,null));
});})(state_val_30250,c__23752__auto__,postback_chan))
,pipeline_input_list));
});})(state_val_30250,c__23752__auto__,postback_chan))
.call(null,clj_eyes.param_handling.find_downstream_transforms.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#pipeline-pipeline-source-img","#pipeline-pipeline-source-img",652466447))));
});
;})(state_val_30250,c__23752__auto__,postback_chan))
})();
var state_30249__$1 = (function (){var statearr_30251 = state_30249;
(statearr_30251[(7)] = inst_30244);

return statearr_30251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30249__$1,(2),postback_chan);
} else {
if((state_val_30250 === (2))){
var inst_30244 = (state_30249[(7)]);
var inst_30246 = (state_30249[(2)]);
var inst_30247 = inst_30244.call(null,inst_30246);
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30249__$1,inst_30247);
} else {
return null;
}
}
});})(c__23752__auto__,postback_chan))
;
return ((function (switch__23731__auto__,c__23752__auto__,postback_chan){
return (function() {
var clj_eyes$handlers$upload_file_$_state_machine__23732__auto__ = null;
var clj_eyes$handlers$upload_file_$_state_machine__23732__auto____0 = (function (){
var statearr_30255 = [null,null,null,null,null,null,null,null];
(statearr_30255[(0)] = clj_eyes$handlers$upload_file_$_state_machine__23732__auto__);

(statearr_30255[(1)] = (1));

return statearr_30255;
});
var clj_eyes$handlers$upload_file_$_state_machine__23732__auto____1 = (function (state_30249){
while(true){
var ret_value__23733__auto__ = (function (){try{while(true){
var result__23734__auto__ = switch__23731__auto__.call(null,state_30249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23734__auto__;
}
break;
}
}catch (e30256){if((e30256 instanceof Object)){
var ex__23735__auto__ = e30256;
var statearr_30257_30259 = state_30249;
(statearr_30257_30259[(5)] = ex__23735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30260 = state_30249;
state_30249 = G__30260;
continue;
} else {
return ret_value__23733__auto__;
}
break;
}
});
clj_eyes$handlers$upload_file_$_state_machine__23732__auto__ = function(state_30249){
switch(arguments.length){
case 0:
return clj_eyes$handlers$upload_file_$_state_machine__23732__auto____0.call(this);
case 1:
return clj_eyes$handlers$upload_file_$_state_machine__23732__auto____1.call(this,state_30249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clj_eyes$handlers$upload_file_$_state_machine__23732__auto__.cljs$core$IFn$_invoke$arity$0 = clj_eyes$handlers$upload_file_$_state_machine__23732__auto____0;
clj_eyes$handlers$upload_file_$_state_machine__23732__auto__.cljs$core$IFn$_invoke$arity$1 = clj_eyes$handlers$upload_file_$_state_machine__23732__auto____1;
return clj_eyes$handlers$upload_file_$_state_machine__23732__auto__;
})()
;})(switch__23731__auto__,c__23752__auto__,postback_chan))
})();
var state__23754__auto__ = (function (){var statearr_30258 = f__23753__auto__.call(null);
(statearr_30258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23752__auto__);

return statearr_30258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23754__auto__);
});})(c__23752__auto__,postback_chan))
);

return c__23752__auto__;
});
clj_eyes.handlers.add_transformation = (function clj_eyes$handlers$add_transformation(html){
console.log(html);

return jayq.core.after.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".pipeline-frame",".pipeline-frame",-1655973309)).last(),html);
});
clj_eyes.handlers.close_button = (function clj_eyes$handlers$close_button(frame_id){
return (function (){
return clj_eyes.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipeline","close-frame","pipeline/close-frame",-835789120),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,frame_id)], null)], null));
});
});
clj_eyes.handlers.close_frame = (function clj_eyes$handlers$close_frame(id){
console.log([cljs.core.str("close-frame count: "),cljs.core.str(cljs.core.count.call(null,jayq.core.$.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,id))].join(''))))].join(''));

var jq_frame = jayq.core.$.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,id))].join(''));
jayq.core.remove.call(null,jayq.core.prev.call(null,jq_frame,new cljs.core.Keyword(null,".down-arrow",".down-arrow",-1167272005)));

return jayq.core.remove.call(null,jq_frame);
});
clj_eyes.handlers.select_source = (function clj_eyes$handlers$select_source(){
console.log("select changed");

console.log();

return clj_eyes.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipeline","select-source","pipeline/select-source",-428382240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src-name","src-name",495783938),jayq.core.val.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#src-select","#src-select",-1981143020)))], null)], null));
});

//# sourceMappingURL=handlers.js.map?rel=1467619095277