// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.controls');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.timbre');
goog.require('clj_eyes.img_frame');
goog.require('clj_eyes.bind_funcs');
goog.require('clj_eyes.param_handling');
goog.require('clj_eyes.handlers');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('taoensso.encore');
goog.require('clj_eyes.socket');
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
clj_eyes.controls.event_msg_handler = (function clj_eyes$controls$event_msg_handler(p__35037){
var map__35040 = p__35037;
var map__35040__$1 = ((((!((map__35040 == null)))?((((map__35040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35040):map__35040);
var ev_msg = map__35040__$1;
var id = cljs.core.get.call(null,map__35040__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__35040__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__35040__$1,new cljs.core.Keyword(null,"event","event",301435442));
return clj_eyes.controls._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__35042){
var map__35043 = p__35042;
var map__35043__$1 = ((((!((map__35043 == null)))?((((map__35043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35043):map__35043);
var ev_msg = map__35043__$1;
var _QMARK_data = cljs.core.get.call(null,map__35043__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(_QMARK_data))){
return console.log("Channel socket successfully established!: %s",_QMARK_data);
} else {
return console.log("Channel socket state change: %s",_QMARK_data);
}
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__35045){
var map__35046 = p__35045;
var map__35046__$1 = ((((!((map__35046 == null)))?((((map__35046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35046):map__35046);
var ev_msg = map__35046__$1;
var _QMARK_data = cljs.core.get.call(null,map__35046__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return console.log("Push event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("pipeline","reload-img","pipeline/reload-img",386896552),(function (p__35048){
var map__35049 = p__35048;
var map__35049__$1 = ((((!((map__35049 == null)))?((((map__35049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35049):map__35049);
var ev_msg = map__35049__$1;
var _QMARK_data = cljs.core.get.call(null,map__35049__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
console.log([cljs.core.str("Reloading img"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(_QMARK_data))].join(''));

console.log(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(_QMARK_data));

return clj_eyes.img_frame.reload_image.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(_QMARK_data)));
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("chsk","ws-error","chsk/ws-error",260168922),(function (p__35051){
var map__35052 = p__35051;
var map__35052__$1 = ((((!((map__35052 == null)))?((((map__35052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35052):map__35052);
var ev_msg = map__35052__$1;
var _QMARK_data = cljs.core.get.call(null,map__35052__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return console.log("Error event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__35054){
var map__35055 = p__35054;
var map__35055__$1 = ((((!((map__35055 == null)))?((((map__35055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35055):map__35055);
var ev_msg = map__35055__$1;
var _QMARK_data = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__35057 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__35057,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__35057,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__35057,(2),null);
return console.log("Handshake: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("pipeline","load-transformation-frame","pipeline/load-transformation-frame",1940846010),(function (p__35058){
var map__35059 = p__35058;
var map__35059__$1 = ((((!((map__35059 == null)))?((((map__35059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35059):map__35059);
var ev_msg = map__35059__$1;
var _QMARK_data = cljs.core.get.call(null,map__35059__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
clj_eyes.handlers.add_transformation.call(null,new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(_QMARK_data));

return clj_eyes.param_handling.bind_inputs_on_change.call(null,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(_QMARK_data));
}));
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
clj_eyes.controls.init = (function clj_eyes$controls$init(){
clj_eyes.controls.start_router_BANG_.call(null);

return clj_eyes.bind_funcs.run_init_binds.call(null);
});
clj_eyes.controls.init.call(null);

//# sourceMappingURL=controls.js.map?rel=1467277384130