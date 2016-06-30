// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.handlers');
goog.require('cljs.core');
goog.require('clj_eyes.param_handling');
goog.require('jayq.core');
goog.require('cljs_http.client');
goog.require('clj_eyes.socket');
goog.require('cljs.core.async');
clj_eyes.handlers.select_transform = (function clj_eyes$handlers$select_transform(){
console.log("handling selection");

return clj_eyes.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipeline","add-transformation","pipeline/add-transformation",1247270676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transformation-selection","transformation-selection",-1276645577),jayq.core.val.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#select-transform","#select-transform",1569387196))),new cljs.core.Keyword(null,"parent-frame","parent-frame",624801715),jayq.core.attr.call(null,jayq.core.find.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".pipeline-frame",".pipeline-frame",-1655973309)).last(),new cljs.core.Keyword(null,"img","img",1442687358)).first(),new cljs.core.Keyword(null,"id","id",-1388402092))], null)], null));
});
clj_eyes.handlers.upload_file = (function clj_eyes$handlers$upload_file(){
var postback_chan = cljs_http.client.post.call(null,"/upload-src",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["src-file",document.getElementById("source-file").files.item((0))], null)], null)], null));
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__,postback_chan){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__,postback_chan){
return (function (state_37963){
var state_val_37964 = (state_37963[(1)]);
if((state_val_37964 === (1))){
var inst_37958 = (function (){return ((function (state_val_37964,c__23880__auto__,postback_chan){
return (function (response){
return ((function (state_val_37964,c__23880__auto__,postback_chan){
return (function (pipeline_input_list){
return clj_eyes.param_handling.send_update_transform_params.call(null,cljs.core.map.call(null,((function (state_val_37964,c__23880__auto__,postback_chan){
return (function (pipeline_transform_data){
return (new clj_eyes.param_handling.transform_data(new cljs.core.Keyword(null,"input-list","input-list",-122103664).cljs$core$IFn$_invoke$arity$1(pipeline_transform_data),new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364).cljs$core$IFn$_invoke$arity$1(pipeline_transform_data),null,null,null));
});})(state_val_37964,c__23880__auto__,postback_chan))
,pipeline_input_list));
});})(state_val_37964,c__23880__auto__,postback_chan))
.call(null,clj_eyes.param_handling.find_downstream_transforms.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#pipeline-pipeline-source-img","#pipeline-pipeline-source-img",652466447))));
});
;})(state_val_37964,c__23880__auto__,postback_chan))
})();
var state_37963__$1 = (function (){var statearr_37965 = state_37963;
(statearr_37965[(7)] = inst_37958);

return statearr_37965;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37963__$1,(2),postback_chan);
} else {
if((state_val_37964 === (2))){
var inst_37958 = (state_37963[(7)]);
var inst_37960 = (state_37963[(2)]);
var inst_37961 = inst_37958.call(null,inst_37960);
var state_37963__$1 = state_37963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37963__$1,inst_37961);
} else {
return null;
}
}
});})(c__23880__auto__,postback_chan))
;
return ((function (switch__23768__auto__,c__23880__auto__,postback_chan){
return (function() {
var clj_eyes$handlers$upload_file_$_state_machine__23769__auto__ = null;
var clj_eyes$handlers$upload_file_$_state_machine__23769__auto____0 = (function (){
var statearr_37969 = [null,null,null,null,null,null,null,null];
(statearr_37969[(0)] = clj_eyes$handlers$upload_file_$_state_machine__23769__auto__);

(statearr_37969[(1)] = (1));

return statearr_37969;
});
var clj_eyes$handlers$upload_file_$_state_machine__23769__auto____1 = (function (state_37963){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_37963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e37970){if((e37970 instanceof Object)){
var ex__23772__auto__ = e37970;
var statearr_37971_37973 = state_37963;
(statearr_37971_37973[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37974 = state_37963;
state_37963 = G__37974;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
clj_eyes$handlers$upload_file_$_state_machine__23769__auto__ = function(state_37963){
switch(arguments.length){
case 0:
return clj_eyes$handlers$upload_file_$_state_machine__23769__auto____0.call(this);
case 1:
return clj_eyes$handlers$upload_file_$_state_machine__23769__auto____1.call(this,state_37963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clj_eyes$handlers$upload_file_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = clj_eyes$handlers$upload_file_$_state_machine__23769__auto____0;
clj_eyes$handlers$upload_file_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = clj_eyes$handlers$upload_file_$_state_machine__23769__auto____1;
return clj_eyes$handlers$upload_file_$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__,postback_chan))
})();
var state__23882__auto__ = (function (){var statearr_37972 = f__23881__auto__.call(null);
(statearr_37972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_37972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__,postback_chan))
);

return c__23880__auto__;
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

//# sourceMappingURL=handlers.js.map?rel=1467279180124