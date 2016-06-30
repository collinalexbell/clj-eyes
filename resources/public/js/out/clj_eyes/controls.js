// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.controls');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.timbre');
goog.require('clj_eyes.img_frame');
goog.require('clj_eyes.param_handling');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('jayq.core');
goog.require('taoensso.encore');
goog.require('clj_eyes.socket');
clj_eyes.controls.upload_file = (function clj_eyes$controls$upload_file(){
var postback_chan = cljs_http.client.post.call(null,"/upload-src",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["src-file",document.getElementById("source-file").files.item((0))], null)], null)], null));
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__,postback_chan){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__,postback_chan){
return (function (state_33423){
var state_val_33424 = (state_33423[(1)]);
if((state_val_33424 === (1))){
var inst_33418 = (function (){return ((function (state_val_33424,c__23880__auto__,postback_chan){
return (function (response){
return ((function (state_val_33424,c__23880__auto__,postback_chan){
return (function (pipeline_input_list){
return clj_eyes.param_handling.send_update_transform_params.call(null,cljs.core.map.call(null,((function (state_val_33424,c__23880__auto__,postback_chan){
return (function (pipeline_transform_data){
return (new clj_eyes.param_handling.transform_data(new cljs.core.Keyword(null,"input-list","input-list",-122103664).cljs$core$IFn$_invoke$arity$1(pipeline_transform_data),new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364).cljs$core$IFn$_invoke$arity$1(pipeline_transform_data),null,null,null));
});})(state_val_33424,c__23880__auto__,postback_chan))
,pipeline_input_list));
});})(state_val_33424,c__23880__auto__,postback_chan))
.call(null,clj_eyes.param_handling.find_downstream_transforms.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#pipeline-pipeline-source-img","#pipeline-pipeline-source-img",652466447))));
});
;})(state_val_33424,c__23880__auto__,postback_chan))
})();
var state_33423__$1 = (function (){var statearr_33425 = state_33423;
(statearr_33425[(7)] = inst_33418);

return statearr_33425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33423__$1,(2),postback_chan);
} else {
if((state_val_33424 === (2))){
var inst_33418 = (state_33423[(7)]);
var inst_33420 = (state_33423[(2)]);
var inst_33421 = inst_33418.call(null,inst_33420);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33423__$1,inst_33421);
} else {
return null;
}
}
});})(c__23880__auto__,postback_chan))
;
return ((function (switch__23768__auto__,c__23880__auto__,postback_chan){
return (function() {
var clj_eyes$controls$upload_file_$_state_machine__23769__auto__ = null;
var clj_eyes$controls$upload_file_$_state_machine__23769__auto____0 = (function (){
var statearr_33429 = [null,null,null,null,null,null,null,null];
(statearr_33429[(0)] = clj_eyes$controls$upload_file_$_state_machine__23769__auto__);

(statearr_33429[(1)] = (1));

return statearr_33429;
});
var clj_eyes$controls$upload_file_$_state_machine__23769__auto____1 = (function (state_33423){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_33423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e33430){if((e33430 instanceof Object)){
var ex__23772__auto__ = e33430;
var statearr_33431_33433 = state_33423;
(statearr_33431_33433[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33434 = state_33423;
state_33423 = G__33434;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
clj_eyes$controls$upload_file_$_state_machine__23769__auto__ = function(state_33423){
switch(arguments.length){
case 0:
return clj_eyes$controls$upload_file_$_state_machine__23769__auto____0.call(this);
case 1:
return clj_eyes$controls$upload_file_$_state_machine__23769__auto____1.call(this,state_33423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clj_eyes$controls$upload_file_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = clj_eyes$controls$upload_file_$_state_machine__23769__auto____0;
clj_eyes$controls$upload_file_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = clj_eyes$controls$upload_file_$_state_machine__23769__auto____1;
return clj_eyes$controls$upload_file_$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__,postback_chan))
})();
var state__23882__auto__ = (function (){var statearr_33432 = f__23881__auto__.call(null);
(statearr_33432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_33432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__,postback_chan))
);

return c__23880__auto__;
});
clj_eyes.controls.bind_on_file_select = (function clj_eyes$controls$bind_on_file_select(){
return jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#source-file","#source-file",-1314187081)),new cljs.core.Keyword(null,"change","change",-1163046502),clj_eyes.controls.upload_file);
});
clj_eyes.controls.init_upload_button = (function clj_eyes$controls$init_upload_button(){
return jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#select-source-upload","#select-source-upload",-1593243413)),new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return jayq.core.trigger.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#source-file","#source-file",-1314187081)),new cljs.core.Keyword(null,"click","click",1912301393));
}));
});
clj_eyes.controls.handle_select_transform = (function clj_eyes$controls$handle_select_transform(){
console.log("handling selection");

return clj_eyes.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipeline","add-transformation","pipeline/add-transformation",1247270676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transformation-selection","transformation-selection",-1276645577),jayq.core.val.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#select-transform","#select-transform",1569387196))),new cljs.core.Keyword(null,"parent-frame","parent-frame",624801715),jayq.core.attr.call(null,jayq.core.find.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".pipeline-frame",".pipeline-frame",-1655973309)).last(),new cljs.core.Keyword(null,"img","img",1442687358)).first(),new cljs.core.Keyword(null,"id","id",-1388402092))], null)], null));
});
jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#submit-new-filter-option","#submit-new-filter-option",404909333)),new cljs.core.Keyword(null,"click","click",1912301393),clj_eyes.controls.handle_select_transform);
clj_eyes.controls.jq_each = (function clj_eyes$controls$jq_each(selector,each_fn){
var elements = cljs.core.js__GT_clj.call(null,jayq.core.$.call(null,selector));
var n__22628__auto__ = cljs.core.count.call(null,elements);
var el_num = (0);
while(true){
if((el_num < n__22628__auto__)){
each_fn.call(null,el_num,cljs.core.nth.call(null,elements,el_num));

var G__33435 = (el_num + (1));
el_num = G__33435;
continue;
} else {
return null;
}
break;
}
});
clj_eyes.controls.handle_transform_param_change = (function clj_eyes$controls$handle_transform_param_change(){

var params = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
console.log("params changed");

clj_eyes.controls.jq_each.call(null,".transform-param",((function (params){
return (function (i,item){
return cljs.core.swap_BANG_.call(null,params,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),jayq.core.attr.call(null,jayq.core.$.call(null,item),"name"),new cljs.core.Keyword(null,"value","value",305978217),item.value], null));
});})(params))
);

return clj_eyes.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opencv","load-transformation","opencv/load-transformation",1699533857),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transformation-name","transformation-name",-1059066008),jayq.core.val.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#select-transform","#select-transform",1569387196))),new cljs.core.Keyword(null,"transformation-params","transformation-params",-1372640963),cljs.core.deref.call(null,params)], null)], null));
});
clj_eyes.controls.other_transform = (function clj_eyes$controls$other_transform(){
return console.log("params changed");
});
clj_eyes.controls.load_transform_options = (function clj_eyes$controls$load_transform_options(html){
jayq.core.html.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#transform-options","#transform-options",-1212368927)),html);

return jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".transform-param",".transform-param",-1311235543)),new cljs.core.Keyword(null,"change","change",-1163046502),clj_eyes.controls.handle_transform_param_change);
});
clj_eyes.controls.add_transformation = (function clj_eyes$controls$add_transformation(html){
console.log(html);

return jayq.core.after.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".pipeline-frame",".pipeline-frame",-1655973309)).last(),html);
});
if(typeof clj_eyes.controls._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
clj_eyes.controls._event_msg_handler = (function (){var method_table__22638__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22642__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"clj-eyes.controls","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22642__auto__,method_table__22638__auto__,prefer_table__22639__auto__,method_cache__22640__auto__,cached_hierarchy__22641__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
clj_eyes.controls.event_msg_handler = (function clj_eyes$controls$event_msg_handler(p__33436){
var map__33439 = p__33436;
var map__33439__$1 = ((((!((map__33439 == null)))?((((map__33439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33439):map__33439);
var ev_msg = map__33439__$1;
var id = cljs.core.get.call(null,map__33439__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__33439__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__33439__$1,new cljs.core.Keyword(null,"event","event",301435442));
return clj_eyes.controls._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__33441){
var map__33442 = p__33441;
var map__33442__$1 = ((((!((map__33442 == null)))?((((map__33442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33442):map__33442);
var ev_msg = map__33442__$1;
var _QMARK_data = cljs.core.get.call(null,map__33442__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(_QMARK_data))){
return console.log("Channel socket successfully established!: %s",_QMARK_data);
} else {
return console.log("Channel socket state change: %s",_QMARK_data);
}
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__33444){
var map__33445 = p__33444;
var map__33445__$1 = ((((!((map__33445 == null)))?((((map__33445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33445):map__33445);
var ev_msg = map__33445__$1;
var _QMARK_data = cljs.core.get.call(null,map__33445__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return console.log("Push event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("opencv","reload","opencv/reload",-414791604),(function (p__33447){
var map__33448 = p__33447;
var map__33448__$1 = ((((!((map__33448 == null)))?((((map__33448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33448):map__33448);
var ev_msg = map__33448__$1;
var _QMARK_data = cljs.core.get.call(null,map__33448__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
console.log("Server notified client of img change. Reloading");

return clj_eyes.img_frame.reload_image_frame.call(null);
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("pipeline","reload-img","pipeline/reload-img",386896552),(function (p__33450){
var map__33451 = p__33450;
var map__33451__$1 = ((((!((map__33451 == null)))?((((map__33451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33451):map__33451);
var ev_msg = map__33451__$1;
var _QMARK_data = cljs.core.get.call(null,map__33451__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
console.log([cljs.core.str("Reloading img"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(_QMARK_data))].join(''));

console.log(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(_QMARK_data));

return clj_eyes.img_frame.reload_image.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(_QMARK_data)));
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("chsk","ws-error","chsk/ws-error",260168922),(function (p__33453){
var map__33454 = p__33453;
var map__33454__$1 = ((((!((map__33454 == null)))?((((map__33454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33454):map__33454);
var ev_msg = map__33454__$1;
var _QMARK_data = cljs.core.get.call(null,map__33454__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return console.log("Error event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__33456){
var map__33457 = p__33456;
var map__33457__$1 = ((((!((map__33457 == null)))?((((map__33457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33457):map__33457);
var ev_msg = map__33457__$1;
var _QMARK_data = cljs.core.get.call(null,map__33457__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__33459 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__33459,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__33459,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__33459,(2),null);
return console.log("Handshake: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("opencv","load-transformation-options","opencv/load-transformation-options",-51269651),(function (p__33460){
var map__33461 = p__33460;
var map__33461__$1 = ((((!((map__33461 == null)))?((((map__33461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33461):map__33461);
var ev_msg = map__33461__$1;
var _QMARK_data = cljs.core.get.call(null,map__33461__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return clj_eyes.controls.load_transform_options.call(null,new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(_QMARK_data));
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("pipeline","load-transformation-frame","pipeline/load-transformation-frame",1940846010),(function (p__33463){
var map__33464 = p__33463;
var map__33464__$1 = ((((!((map__33464 == null)))?((((map__33464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33464):map__33464);
var ev_msg = map__33464__$1;
var _QMARK_data = cljs.core.get.call(null,map__33464__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
clj_eyes.controls.add_transformation.call(null,new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(_QMARK_data));

return clj_eyes.param_handling.bind_inputs_on_change.call(null,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(_QMARK_data));
}));
clj_eyes.controls.init_upload_button.call(null);
clj_eyes.controls.bind_on_file_select.call(null);
if(typeof clj_eyes.controls.router_ !== 'undefined'){
} else {
clj_eyes.controls.router_ = cljs.core.atom.call(null,null);
}
clj_eyes.controls.stop_router_BANG_ = (function clj_eyes$controls$stop_router_BANG_(){
var temp__4657__auto__ = cljs.core.deref.call(null,clj_eyes.controls.router_);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});
clj_eyes.controls.start_router_BANG_ = (function clj_eyes$controls$start_router_BANG_(){
clj_eyes.controls.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,clj_eyes.controls.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,clj_eyes.socket.ch_chsk,clj_eyes.controls.event_msg_handler));
});
clj_eyes.controls.start_router_BANG_.call(null);

//# sourceMappingURL=controls.js.map?rel=1467275456300