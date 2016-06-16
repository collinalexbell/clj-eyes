// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.core');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.timbre');
goog.require('clj_eyes.img_frame');
goog.require('cljs.core.async');
goog.require('clj_eyes.controls');
goog.require('taoensso.encore');
clj_eyes.core.output_el = document.getElementById("output");
clj_eyes.core.__GT_output_BANG_ = (function clj_eyes$core$__GT_output_BANG_(var_args){
var args__22784__auto__ = [];
var len__22777__auto___33070 = arguments.length;
var i__22778__auto___33071 = (0);
while(true){
if((i__22778__auto___33071 < len__22777__auto___33070)){
args__22784__auto__.push((arguments[i__22778__auto___33071]));

var G__33072 = (i__22778__auto___33071 + (1));
i__22778__auto___33071 = G__33072;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return clj_eyes.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

clj_eyes.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"clj-eyes.core","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (msg){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
});})(msg))
,null)),null);

(clj_eyes.core.output_el["value"] = [cljs.core.str("\u2022 "),cljs.core.str(clj_eyes.core.output_el.value),cljs.core.str("\n"),cljs.core.str(msg)].join(''));

return (clj_eyes.core.output_el["scrollTop"] = clj_eyes.core.output_el.scrollHeight);
});

clj_eyes.core.__GT_output_BANG_.cljs$lang$maxFixedArity = (1);

clj_eyes.core.__GT_output_BANG_.cljs$lang$applyTo = (function (seq33068){
var G__33069 = cljs.core.first.call(null,seq33068);
var seq33068__$1 = cljs.core.next.call(null,seq33068);
return clj_eyes.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33069,seq33068__$1);
});
clj_eyes.core.__GT_output_BANG_.call(null,"ClojureScript appears to have loaded correctly.");
var map__33073_33075 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),false], null));
var map__33073_33076__$1 = ((((!((map__33073_33075 == null)))?((((map__33073_33075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33073_33075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33073_33075):map__33073_33075);
var chsk_33077 = cljs.core.get.call(null,map__33073_33076__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_33078 = cljs.core.get.call(null,map__33073_33076__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_33079 = cljs.core.get.call(null,map__33073_33076__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_33080 = cljs.core.get.call(null,map__33073_33076__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
clj_eyes.core.chsk = chsk_33077;

clj_eyes.core.ch_chsk = ch_recv_33078;

clj_eyes.core.chsk_send_BANG_ = send_fn_33079;

clj_eyes.core.chsk_state = state_33080;
if(typeof clj_eyes.core._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
clj_eyes.core._event_msg_handler = (function (){var method_table__22632__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22633__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22634__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22635__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22636__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"clj-eyes.core","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22636__auto__,method_table__22632__auto__,prefer_table__22633__auto__,method_cache__22634__auto__,cached_hierarchy__22635__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
clj_eyes.core.event_msg_handler = (function clj_eyes$core$event_msg_handler(p__33081){
var map__33084 = p__33081;
var map__33084__$1 = ((((!((map__33084 == null)))?((((map__33084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33084):map__33084);
var ev_msg = map__33084__$1;
var id = cljs.core.get.call(null,map__33084__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__33084__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__33084__$1,new cljs.core.Keyword(null,"event","event",301435442));
return clj_eyes.core._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,clj_eyes.core._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__33086){
var map__33087 = p__33086;
var map__33087__$1 = ((((!((map__33087 == null)))?((((map__33087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33087):map__33087);
var ev_msg = map__33087__$1;
var _QMARK_data = cljs.core.get.call(null,map__33087__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(_QMARK_data))){
return clj_eyes.core.__GT_output_BANG_.call(null,"Channel socket successfully established!: %s",_QMARK_data);
} else {
return clj_eyes.core.__GT_output_BANG_.call(null,"Channel socket state change: %s",_QMARK_data);
}
}));
cljs.core._add_method.call(null,clj_eyes.core._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__33089){
var map__33090 = p__33089;
var map__33090__$1 = ((((!((map__33090 == null)))?((((map__33090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33090):map__33090);
var ev_msg = map__33090__$1;
var _QMARK_data = cljs.core.get.call(null,map__33090__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return clj_eyes.core.__GT_output_BANG_.call(null,"Push event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,clj_eyes.core._event_msg_handler,new cljs.core.Keyword("opencv","reload","opencv/reload",-414791604),(function (p__33092){
var map__33093 = p__33092;
var map__33093__$1 = ((((!((map__33093 == null)))?((((map__33093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33093):map__33093);
var ev_msg = map__33093__$1;
var _QMARK_data = cljs.core.get.call(null,map__33093__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
clj_eyes.core.__GT_output_BANG_.call(null,"Server notified client of img change. Reloading");

return clj_eyes.img_frame.reload_image_frame.call(null);
}));
cljs.core._add_method.call(null,clj_eyes.core._event_msg_handler,new cljs.core.Keyword("chsk","ws-error","chsk/ws-error",260168922),(function (p__33095){
var map__33096 = p__33095;
var map__33096__$1 = ((((!((map__33096 == null)))?((((map__33096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33096):map__33096);
var ev_msg = map__33096__$1;
var _QMARK_data = cljs.core.get.call(null,map__33096__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return clj_eyes.core.__GT_output_BANG_.call(null,"Error event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,clj_eyes.core._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__33098){
var map__33099 = p__33098;
var map__33099__$1 = ((((!((map__33099 == null)))?((((map__33099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33099):map__33099);
var ev_msg = map__33099__$1;
var _QMARK_data = cljs.core.get.call(null,map__33099__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__33101 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__33101,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__33101,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__33101,(2),null);
return clj_eyes.core.__GT_output_BANG_.call(null,"Handshake: %s",_QMARK_data);
}));
if(typeof clj_eyes.core.router_ !== 'undefined'){
} else {
clj_eyes.core.router_ = cljs.core.atom.call(null,null);
}
clj_eyes.core.stop_router_BANG_ = (function clj_eyes$core$stop_router_BANG_(){
var temp__4657__auto__ = cljs.core.deref.call(null,clj_eyes.core.router_);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});
clj_eyes.core.start_router_BANG_ = (function clj_eyes$core$start_router_BANG_(){
clj_eyes.core.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,clj_eyes.core.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,clj_eyes.core.ch_chsk,clj_eyes.core.event_msg_handler));
});
clj_eyes.core.start_router_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1466072000324