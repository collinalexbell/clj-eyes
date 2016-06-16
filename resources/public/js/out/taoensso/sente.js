// Compiled by ClojureScript 1.8.51 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(53),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.53);
}
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__27216 = x;
var ev_id = cljs.core.nth.call(null,vec__27216,(0),null);
var _ = cljs.core.nth.call(null,vec__27216,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var _QMARK_err = temp__4657__auto__;
var err_msg = [cljs.core.str((function (){var G__27218 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__27218) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: "),cljs.core.str(x)].join('');
throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__21695__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__21695__auto__){
var and__21695__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__21695__auto____$1)){
var map__27222 = x;
var map__27222__$1 = ((((!((map__27222 == null)))?((((map__27222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27222):map__27222);
var ch_recv = cljs.core.get.call(null,map__27222__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__27222__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__27222__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__27222__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__21695__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__21695__auto____$2){
var and__21695__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__21695__auto____$3){
var and__21695__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__21695__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__21695__auto____$4;
}
} else {
return and__21695__auto____$3;
}
} else {
return and__21695__auto____$2;
}
} else {
return and__21695__auto____$1;
}
} else {
return and__21695__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__21695__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__21695__auto__){
var and__21695__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__21695__auto____$1)){
var map__27226 = x;
var map__27226__$1 = ((((!((map__27226 == null)))?((((map__27226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27226):map__27226);
var ch_recv = cljs.core.get.call(null,map__27226__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__27226__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__27226__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__27226__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__27226__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__27226__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__27226__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__21695__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__21695__auto____$2){
var and__21695__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__21695__auto____$3){
var and__21695__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__21695__auto____$4){
var and__21695__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__21695__auto____$5){
var and__21695__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__21695__auto____$6){
var and__21695__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__21695__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__21695__auto____$7;
}
} else {
return and__21695__auto____$6;
}
} else {
return and__21695__auto____$5;
}
} else {
return and__21695__auto____$4;
}
} else {
return and__21695__auto____$3;
}
} else {
return and__21695__auto____$2;
}
} else {
return and__21695__auto____$1;
}
} else {
return and__21695__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__27228){
var map__27232 = p__27228;
var map__27232__$1 = ((((!((map__27232 == null)))?((((map__27232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27232):map__27232);
var ev_msg = map__27232__$1;
var event = cljs.core.get.call(null,map__27232__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__27232__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__27234 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__27234,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__27234,(1),null);
var valid_event = vec__27234;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",161,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__27234,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__27232,map__27232__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__27234,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__27232,map__27232__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var e_27241 = (function (){try{if(typeof prefixed_pstr === 'string'){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27238){if((e27238 instanceof Error)){
var e = e27238;
return e;
} else {
throw e27238;

}
}})();
if((e_27241 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",prefixed_pstr,e_27241,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e27240){var t = e27240;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",182,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__27239 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__27239,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__27239,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",188,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__27239,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__27239,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args27242 = [];
var len__22777__auto___27245 = arguments.length;
var i__22778__auto___27246 = (0);
while(true){
if((i__22778__auto___27246 < len__22777__auto___27245)){
args27242.push((arguments[i__22778__auto___27246]));

var G__27247 = (i__22778__auto___27246 + (1));
i__22778__auto___27246 = G__27247;
continue;
} else {
}
break;
}

var G__27244 = args27242.length;
switch (G__27244) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27242.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",198,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 4;

/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
})
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__27249_SHARP_){
if(!((p1__27249_SHARP_ == null))){
if((false) || (p1__27249_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__27249_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__27249_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__27249_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27252){if((e27252 instanceof Error)){
var e = e27252;
return e;
} else {
throw e27252;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__27249#] (satisfies? interfaces/IPacker p1__27249#)) x)",x,e,null);
}
}
});


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__22784__auto__ = [];
var len__22777__auto___27528 = arguments.length;
var i__22778__auto___27529 = (0);
while(true){
if((i__22778__auto___27529 < len__22777__auto___27528)){
args__22784__auto__.push((arguments[i__22778__auto___27529]));

var G__27530 = (i__22778__auto___27529 + (1));
i__22778__auto___27529 = G__27530;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__27257){
var vec__27258 = p__27257;
var map__27259 = cljs.core.nth.call(null,vec__27258,(0),null);
var map__27259__$1 = ((((!((map__27259 == null)))?((((map__27259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27259):map__27259);
var recv_buf_or_n = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__21707__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
var or__21707__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__21707__auto____$1)){
return or__21707__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27261){if((e27261 instanceof Error)){
var e = e27261;
return e;
} else {
throw e27261;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27262){if((e27262 instanceof Error)){
var e = e27262;
return e;
} else {
throw e27262;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_27531 = (function (){try{if(((function (vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__27254_SHARP_){
if(!((p1__27254_SHARP_ == null))){
if((false) || (p1__27254_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__27254_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__27254_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__27254_SHARP_);
}
});})(vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27263){if((e27263 instanceof Error)){
var e = e27263;
return e;
} else {
throw e27263;

}
}})();
if((e_27531 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__27254#] (satisfies? interfaces/IServerChanAdapter p1__27254#)) web-server-ch-adapter)",web_server_ch_adapter,e_27531,null);
}

var max_ms_27532 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_27532)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_27532)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_27532], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__21707__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__27533 = null;
var G__27533__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__27265 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__27265,(0),null);
var _udt = cljs.core.nth.call(null,vec__27265,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__27533__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__27533 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__27533__3.call(this,conn_type,uid,client_id);
case 4:
return G__27533__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27533.cljs$core$IFn$_invoke$arity$3 = G__27533__3;
G__27533.cljs$core$IFn$_invoke$arity$4 = G__27533__4;
return G__27533;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,uid))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27266){if((e27266 instanceof Error)){
var e = e27266;
return e;
} else {
throw e27266;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__27267){
var map__27268 = p__27267;
var map__27268__$1 = ((((!((map__27268 == null)))?((((map__27268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27268):map__27268);
var old_m = map__27268__$1;
var ws = cljs.core.get.call(null,map__27268__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__27268__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__27268__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__27270 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__27270) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,uid))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27271){if((e27271 instanceof Error)){
var e = e27271;
return e;
} else {
throw e27271;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__27272){
var map__27273 = p__27272;
var map__27273__$1 = ((((!((map__27273 == null)))?((((map__27273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27273):map__27273);
var old_m = map__27273__$1;
var ws = cljs.core.get.call(null,map__27273__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__27273__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__27273__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__27535__delegate = function (user_id,ev,p__27275){
var vec__27276 = p__27275;
var map__27277 = cljs.core.nth.call(null,vec__27276,(0),null);
var map__27277__$1 = ((((!((map__27277 == null)))?((((map__27277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27277):map__27277);
var opts = map__27277__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__27277__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_27536 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __27537 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",377,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_27536,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_27536,ev], null);
});})(uid_27536,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __27538__$1 = (cljs.core.truth_(uid_27536)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __27539__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_27540 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__27541 = ((function (uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__27279 = cljs.core.get.call(null,m,uid_27536);
var ___$3 = cljs.core.nth.call(null,vec__27279,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__27279,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_27540)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_27536),cljs.core.get.call(null,m,uid_27536));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__27280 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__27280,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__27280,(1),null);
var e_27542 = (function (){try{if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27281){if((e27281 instanceof Error)){
var e = e27281;
return e;
} else {
throw e27281;

}
}})();
if((e_27542 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",buffered_evs,e_27542,null);
}

var e_27543 = (function (){try{if(cljs.core.set_QMARK_.call(null,ev_uuids)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27282){if((e27282 instanceof Error)){
var e = e27282;
return e;
} else {
throw e27282;

}
}})();
if((e_27543 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",ev_uuids,e_27543,null);
}

var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",413,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__27280,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__27280,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__27283 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__27283) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_27536,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_27536,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_27536], null);
});})(uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__27541.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__27541.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__27284_27545 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_27536], null))));
var chunk__27285_27546 = null;
var count__27286_27547 = (0);
var i__27287_27548 = (0);
while(true){
if((i__27287_27548 < count__27286_27547)){
var vec__27288_27549 = cljs.core._nth.call(null,chunk__27285_27546,i__27287_27548);
var _QMARK_sch_27550 = cljs.core.nth.call(null,vec__27288_27549,(0),null);
var _udt_27551 = cljs.core.nth.call(null,vec__27288_27549,(1),null);
var temp__4657__auto___27552 = _QMARK_sch_27550;
if(cljs.core.truth_(temp__4657__auto___27552)){
var sch_27553 = temp__4657__auto___27552;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_27553);
} else {
}

var G__27554 = seq__27284_27545;
var G__27555 = chunk__27285_27546;
var G__27556 = count__27286_27547;
var G__27557 = (i__27287_27548 + (1));
seq__27284_27545 = G__27554;
chunk__27285_27546 = G__27555;
count__27286_27547 = G__27556;
i__27287_27548 = G__27557;
continue;
} else {
var temp__4657__auto___27558 = cljs.core.seq.call(null,seq__27284_27545);
if(temp__4657__auto___27558){
var seq__27284_27559__$1 = temp__4657__auto___27558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27284_27559__$1)){
var c__22518__auto___27560 = cljs.core.chunk_first.call(null,seq__27284_27559__$1);
var G__27561 = cljs.core.chunk_rest.call(null,seq__27284_27559__$1);
var G__27562 = c__22518__auto___27560;
var G__27563 = cljs.core.count.call(null,c__22518__auto___27560);
var G__27564 = (0);
seq__27284_27545 = G__27561;
chunk__27285_27546 = G__27562;
count__27286_27547 = G__27563;
i__27287_27548 = G__27564;
continue;
} else {
var vec__27289_27565 = cljs.core.first.call(null,seq__27284_27559__$1);
var _QMARK_sch_27566 = cljs.core.nth.call(null,vec__27289_27565,(0),null);
var _udt_27567 = cljs.core.nth.call(null,vec__27289_27565,(1),null);
var temp__4657__auto___27568__$1 = _QMARK_sch_27566;
if(cljs.core.truth_(temp__4657__auto___27568__$1)){
var sch_27569 = temp__4657__auto___27568__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_27569);
} else {
}

var G__27570 = cljs.core.next.call(null,seq__27284_27559__$1);
var G__27571 = null;
var G__27572 = (0);
var G__27573 = (0);
seq__27284_27545 = G__27570;
chunk__27285_27546 = G__27571;
count__27286_27547 = G__27572;
i__27287_27548 = G__27573;
continue;
}
} else {
}
}
break;
}

var seq__27290_27574 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_27536], null))));
var chunk__27291_27575 = null;
var count__27292_27576 = (0);
var i__27293_27577 = (0);
while(true){
if((i__27293_27577 < count__27292_27576)){
var vec__27294_27578 = cljs.core._nth.call(null,chunk__27291_27575,i__27293_27577);
var _QMARK_sch_27579 = cljs.core.nth.call(null,vec__27294_27578,(0),null);
var _udt_27580 = cljs.core.nth.call(null,vec__27294_27578,(1),null);
var temp__4657__auto___27581 = _QMARK_sch_27579;
if(cljs.core.truth_(temp__4657__auto___27581)){
var sch_27582 = temp__4657__auto___27581;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_27582);
} else {
}

var G__27583 = seq__27290_27574;
var G__27584 = chunk__27291_27575;
var G__27585 = count__27292_27576;
var G__27586 = (i__27293_27577 + (1));
seq__27290_27574 = G__27583;
chunk__27291_27575 = G__27584;
count__27292_27576 = G__27585;
i__27293_27577 = G__27586;
continue;
} else {
var temp__4657__auto___27587 = cljs.core.seq.call(null,seq__27290_27574);
if(temp__4657__auto___27587){
var seq__27290_27588__$1 = temp__4657__auto___27587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27290_27588__$1)){
var c__22518__auto___27589 = cljs.core.chunk_first.call(null,seq__27290_27588__$1);
var G__27590 = cljs.core.chunk_rest.call(null,seq__27290_27588__$1);
var G__27591 = c__22518__auto___27589;
var G__27592 = cljs.core.count.call(null,c__22518__auto___27589);
var G__27593 = (0);
seq__27290_27574 = G__27590;
chunk__27291_27575 = G__27591;
count__27292_27576 = G__27592;
i__27293_27577 = G__27593;
continue;
} else {
var vec__27295_27594 = cljs.core.first.call(null,seq__27290_27588__$1);
var _QMARK_sch_27595 = cljs.core.nth.call(null,vec__27295_27594,(0),null);
var _udt_27596 = cljs.core.nth.call(null,vec__27295_27594,(1),null);
var temp__4657__auto___27597__$1 = _QMARK_sch_27595;
if(cljs.core.truth_(temp__4657__auto___27597__$1)){
var sch_27598 = temp__4657__auto___27597__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_27598);
} else {
}

var G__27599 = cljs.core.next.call(null,seq__27290_27588__$1);
var G__27600 = null;
var G__27601 = (0);
var G__27602 = (0);
seq__27290_27574 = G__27599;
chunk__27291_27575 = G__27600;
count__27292_27576 = G__27601;
i__27293_27577 = G__27602;
continue;
}
} else {
}
}
break;
}
} else {
var seq__27296_27603 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__27297_27604 = null;
var count__27298_27605 = (0);
var i__27299_27606 = (0);
while(true){
if((i__27299_27606 < count__27298_27605)){
var conn_type_27607 = cljs.core._nth.call(null,chunk__27297_27604,i__27299_27606);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_27607,uid_27536], null),((function (seq__27296_27603,chunk__27297_27604,count__27298_27605,i__27299_27606,conn_type_27607,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_27540], true)], null);
} else {
var vec__27300 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__27300,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__27300,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_27540)], null);
}
});})(seq__27296_27603,chunk__27297_27604,count__27298_27605,i__27299_27606,conn_type_27607,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__27608 = seq__27296_27603;
var G__27609 = chunk__27297_27604;
var G__27610 = count__27298_27605;
var G__27611 = (i__27299_27606 + (1));
seq__27296_27603 = G__27608;
chunk__27297_27604 = G__27609;
count__27298_27605 = G__27610;
i__27299_27606 = G__27611;
continue;
} else {
var temp__4657__auto___27612 = cljs.core.seq.call(null,seq__27296_27603);
if(temp__4657__auto___27612){
var seq__27296_27613__$1 = temp__4657__auto___27612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27296_27613__$1)){
var c__22518__auto___27614 = cljs.core.chunk_first.call(null,seq__27296_27613__$1);
var G__27615 = cljs.core.chunk_rest.call(null,seq__27296_27613__$1);
var G__27616 = c__22518__auto___27614;
var G__27617 = cljs.core.count.call(null,c__22518__auto___27614);
var G__27618 = (0);
seq__27296_27603 = G__27615;
chunk__27297_27604 = G__27616;
count__27298_27605 = G__27617;
i__27299_27606 = G__27618;
continue;
} else {
var conn_type_27619 = cljs.core.first.call(null,seq__27296_27613__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_27619,uid_27536], null),((function (seq__27296_27603,chunk__27297_27604,count__27298_27605,i__27299_27606,conn_type_27619,seq__27296_27613__$1,temp__4657__auto___27612,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_27540], true)], null);
} else {
var vec__27301 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__27301,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__27301,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_27540)], null);
}
});})(seq__27296_27603,chunk__27297_27604,count__27298_27605,i__27299_27606,conn_type_27619,seq__27296_27613__$1,temp__4657__auto___27612,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__27620 = cljs.core.next.call(null,seq__27296_27613__$1);
var G__27621 = null;
var G__27622 = (0);
var G__27623 = (0);
seq__27296_27603 = G__27620;
chunk__27297_27604 = G__27621;
count__27298_27605 = G__27622;
i__27299_27606 = G__27623;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__27541.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__27541.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_27624 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_27625 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__27170__auto___27626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___27626,ws_timeout_27624,ajax_timeout_27625,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__27171__auto__ = (function (){var switch__27149__auto__ = ((function (c__27170__auto___27626,ws_timeout_27624,ajax_timeout_27625,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_27306){
var state_val_27307 = (state_27306[(1)]);
if((state_val_27307 === (1))){
var state_27306__$1 = state_27306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27306__$1,(2),ws_timeout_27624);
} else {
if((state_val_27307 === (2))){
var inst_27303 = (state_27306[(2)]);
var inst_27304 = flush_buffer_BANG__27541.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_27306__$1 = (function (){var statearr_27308 = state_27306;
(statearr_27308[(7)] = inst_27303);

return statearr_27308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27306__$1,inst_27304);
} else {
return null;
}
}
});})(c__27170__auto___27626,ws_timeout_27624,ajax_timeout_27625,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__27149__auto__,c__27170__auto___27626,ws_timeout_27624,ajax_timeout_27625,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__27150__auto__ = null;
var taoensso$sente$state_machine__27150__auto____0 = (function (){
var statearr_27312 = [null,null,null,null,null,null,null,null];
(statearr_27312[(0)] = taoensso$sente$state_machine__27150__auto__);

(statearr_27312[(1)] = (1));

return statearr_27312;
});
var taoensso$sente$state_machine__27150__auto____1 = (function (state_27306){
while(true){
var ret_value__27151__auto__ = (function (){try{while(true){
var result__27152__auto__ = switch__27149__auto__.call(null,state_27306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27152__auto__;
}
break;
}
}catch (e27313){if((e27313 instanceof Object)){
var ex__27153__auto__ = e27313;
var statearr_27314_27627 = state_27306;
(statearr_27314_27627[(5)] = ex__27153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27628 = state_27306;
state_27306 = G__27628;
continue;
} else {
return ret_value__27151__auto__;
}
break;
}
});
taoensso$sente$state_machine__27150__auto__ = function(state_27306){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__27150__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__27150__auto____1.call(this,state_27306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__27150__auto____0;
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__27150__auto____1;
return taoensso$sente$state_machine__27150__auto__;
})()
;})(switch__27149__auto__,c__27170__auto___27626,ws_timeout_27624,ajax_timeout_27625,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__27172__auto__ = (function (){var statearr_27315 = f__27171__auto__.call(null);
(statearr_27315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___27626);

return statearr_27315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___27626,ws_timeout_27624,ajax_timeout_27625,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__27170__auto___27629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___27629,ws_timeout_27624,ajax_timeout_27625,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__27171__auto__ = (function (){var switch__27149__auto__ = ((function (c__27170__auto___27629,ws_timeout_27624,ajax_timeout_27625,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_27320){
var state_val_27321 = (state_27320[(1)]);
if((state_val_27321 === (1))){
var state_27320__$1 = state_27320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27320__$1,(2),ajax_timeout_27625);
} else {
if((state_val_27321 === (2))){
var inst_27317 = (state_27320[(2)]);
var inst_27318 = flush_buffer_BANG__27541.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_27320__$1 = (function (){var statearr_27322 = state_27320;
(statearr_27322[(7)] = inst_27317);

return statearr_27322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27320__$1,inst_27318);
} else {
return null;
}
}
});})(c__27170__auto___27629,ws_timeout_27624,ajax_timeout_27625,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__27149__auto__,c__27170__auto___27629,ws_timeout_27624,ajax_timeout_27625,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__27150__auto__ = null;
var taoensso$sente$state_machine__27150__auto____0 = (function (){
var statearr_27326 = [null,null,null,null,null,null,null,null];
(statearr_27326[(0)] = taoensso$sente$state_machine__27150__auto__);

(statearr_27326[(1)] = (1));

return statearr_27326;
});
var taoensso$sente$state_machine__27150__auto____1 = (function (state_27320){
while(true){
var ret_value__27151__auto__ = (function (){try{while(true){
var result__27152__auto__ = switch__27149__auto__.call(null,state_27320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27152__auto__;
}
break;
}
}catch (e27327){if((e27327 instanceof Object)){
var ex__27153__auto__ = e27327;
var statearr_27328_27630 = state_27320;
(statearr_27328_27630[(5)] = ex__27153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27631 = state_27320;
state_27320 = G__27631;
continue;
} else {
return ret_value__27151__auto__;
}
break;
}
});
taoensso$sente$state_machine__27150__auto__ = function(state_27320){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__27150__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__27150__auto____1.call(this,state_27320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__27150__auto____0;
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__27150__auto____1;
return taoensso$sente$state_machine__27150__auto__;
})()
;})(switch__27149__auto__,c__27170__auto___27629,ws_timeout_27624,ajax_timeout_27625,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__27172__auto__ = (function (){var statearr_27329 = f__27171__auto__.call(null);
(statearr_27329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___27629);

return statearr_27329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___27629,ws_timeout_27624,ajax_timeout_27625,uid_27536,__27537,__27538__$1,__27539__$2,ev_uuid_27540,flush_buffer_BANG__27541,vec__27276,map__27277,map__27277__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__27535 = function (user_id,ev,var_args){
var p__27275 = null;
if (arguments.length > 2) {
var G__27632__i = 0, G__27632__a = new Array(arguments.length -  2);
while (G__27632__i < G__27632__a.length) {G__27632__a[G__27632__i] = arguments[G__27632__i + 2]; ++G__27632__i;}
  p__27275 = new cljs.core.IndexedSeq(G__27632__a,0);
} 
return G__27535__delegate.call(this,user_id,ev,p__27275);};
G__27535.cljs$lang$maxFixedArity = 2;
G__27535.cljs$lang$applyTo = (function (arglist__27633){
var user_id = cljs.core.first(arglist__27633);
arglist__27633 = cljs.core.next(arglist__27633);
var ev = cljs.core.first(arglist__27633);
var p__27275 = cljs.core.rest(arglist__27633);
return G__27535__delegate(user_id,ev,p__27275);
});
G__27535.cljs$core$IFn$_invoke$arity$variadic = G__27535__delegate;
return G__27535;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__27330 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__27330,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__27330,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__27330,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",493,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__27330,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__27330,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__27330,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__27170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__27330,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__27171__auto__ = (function (){var switch__27149__auto__ = ((function (c__27170__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__27330,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_27336){
var state_val_27337 = (state_27336[(1)]);
if((state_val_27337 === (1))){
var inst_27331 = cljs.core.async.timeout.call(null,ms);
var state_27336__$1 = state_27336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27336__$1,(2),inst_27331);
} else {
if((state_val_27337 === (2))){
var inst_27333 = (state_27336[(2)]);
var inst_27334 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_27336__$1 = (function (){var statearr_27338 = state_27336;
(statearr_27338[(7)] = inst_27333);

return statearr_27338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27336__$1,inst_27334);
} else {
return null;
}
}
});})(c__27170__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__27330,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__27149__auto__,c__27170__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__27330,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__27150__auto__ = null;
var taoensso$sente$state_machine__27150__auto____0 = (function (){
var statearr_27342 = [null,null,null,null,null,null,null,null];
(statearr_27342[(0)] = taoensso$sente$state_machine__27150__auto__);

(statearr_27342[(1)] = (1));

return statearr_27342;
});
var taoensso$sente$state_machine__27150__auto____1 = (function (state_27336){
while(true){
var ret_value__27151__auto__ = (function (){try{while(true){
var result__27152__auto__ = switch__27149__auto__.call(null,state_27336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27152__auto__;
}
break;
}
}catch (e27343){if((e27343 instanceof Object)){
var ex__27153__auto__ = e27343;
var statearr_27344_27634 = state_27336;
(statearr_27344_27634[(5)] = ex__27153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27635 = state_27336;
state_27336 = G__27635;
continue;
} else {
return ret_value__27151__auto__;
}
break;
}
});
taoensso$sente$state_machine__27150__auto__ = function(state_27336){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__27150__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__27150__auto____1.call(this,state_27336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__27150__auto____0;
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__27150__auto____1;
return taoensso$sente$state_machine__27150__auto__;
})()
;})(switch__27149__auto__,c__27170__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__27330,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__27172__auto__ = (function (){var statearr_27345 = f__27171__auto__.call(null);
(statearr_27345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto__);

return statearr_27345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__27330,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__27170__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",538,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",558,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__4657__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__27170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__27171__auto__ = (function (){var switch__27149__auto__ = ((function (c__27170__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_27379){
var state_val_27380 = (state_27379[(1)]);
if((state_val_27380 === (7))){
var inst_27375 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27381_27636 = state_27379__$1;
(statearr_27381_27636[(2)] = inst_27375);

(statearr_27381_27636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (1))){
var inst_27346 = udt_open;
var state_27379__$1 = (function (){var statearr_27382 = state_27379;
(statearr_27382[(7)] = inst_27346);

return statearr_27382;
})();
var statearr_27383_27637 = state_27379__$1;
(statearr_27383_27637[(2)] = null);

(statearr_27383_27637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (4))){
var inst_27355 = (state_27379[(8)]);
var inst_27350 = (state_27379[(2)]);
var inst_27351 = cljs.core.deref.call(null,conns_);
var inst_27352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27353 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_27354 = (new cljs.core.PersistentVector(null,3,(5),inst_27352,inst_27353,null));
var inst_27355__$1 = cljs.core.get_in.call(null,inst_27351,inst_27354);
var state_27379__$1 = (function (){var statearr_27384 = state_27379;
(statearr_27384[(9)] = inst_27350);

(statearr_27384[(8)] = inst_27355__$1);

return statearr_27384;
})();
if(cljs.core.truth_(inst_27355__$1)){
var statearr_27385_27638 = state_27379__$1;
(statearr_27385_27638[(1)] = (5));

} else {
var statearr_27386_27639 = state_27379__$1;
(statearr_27386_27639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (13))){
var inst_27359 = (state_27379[(10)]);
var inst_27368 = (state_27379[(2)]);
var inst_27346 = inst_27359;
var state_27379__$1 = (function (){var statearr_27387 = state_27379;
(statearr_27387[(7)] = inst_27346);

(statearr_27387[(11)] = inst_27368);

return statearr_27387;
})();
var statearr_27388_27640 = state_27379__$1;
(statearr_27388_27640[(2)] = null);

(statearr_27388_27640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (6))){
var state_27379__$1 = state_27379;
var statearr_27389_27641 = state_27379__$1;
(statearr_27389_27641[(2)] = null);

(statearr_27389_27641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (3))){
var inst_27377 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27379__$1,inst_27377);
} else {
if((state_val_27380 === (12))){
var state_27379__$1 = state_27379;
var statearr_27390_27642 = state_27379__$1;
(statearr_27390_27642[(2)] = null);

(statearr_27390_27642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (2))){
var inst_27348 = cljs.core.async.timeout.call(null,ms);
var state_27379__$1 = state_27379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27379__$1,(4),inst_27348);
} else {
if((state_val_27380 === (11))){
var inst_27364 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_27365 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_27364);
var state_27379__$1 = state_27379;
var statearr_27391_27643 = state_27379__$1;
(statearr_27391_27643[(2)] = inst_27365);

(statearr_27391_27643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (9))){
var state_27379__$1 = state_27379;
var statearr_27392_27644 = state_27379__$1;
(statearr_27392_27644[(2)] = null);

(statearr_27392_27644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (5))){
var inst_27355 = (state_27379[(8)]);
var inst_27358 = cljs.core.nth.call(null,inst_27355,(0),null);
var inst_27359 = cljs.core.nth.call(null,inst_27355,(1),null);
var inst_27360 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_27379__$1 = (function (){var statearr_27393 = state_27379;
(statearr_27393[(12)] = inst_27358);

(statearr_27393[(10)] = inst_27359);

return statearr_27393;
})();
if(cljs.core.truth_(inst_27360)){
var statearr_27394_27645 = state_27379__$1;
(statearr_27394_27645[(1)] = (8));

} else {
var statearr_27395_27646 = state_27379__$1;
(statearr_27395_27646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (10))){
var inst_27372 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27396_27647 = state_27379__$1;
(statearr_27396_27647[(2)] = inst_27372);

(statearr_27396_27647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (8))){
var inst_27346 = (state_27379[(7)]);
var inst_27359 = (state_27379[(10)]);
var inst_27362 = cljs.core._EQ_.call(null,inst_27359,inst_27346);
var state_27379__$1 = state_27379;
if(inst_27362){
var statearr_27397_27648 = state_27379__$1;
(statearr_27397_27648[(1)] = (11));

} else {
var statearr_27398_27649 = state_27379__$1;
(statearr_27398_27649[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27170__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__27149__auto__,c__27170__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__27150__auto__ = null;
var taoensso$sente$state_machine__27150__auto____0 = (function (){
var statearr_27402 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27402[(0)] = taoensso$sente$state_machine__27150__auto__);

(statearr_27402[(1)] = (1));

return statearr_27402;
});
var taoensso$sente$state_machine__27150__auto____1 = (function (state_27379){
while(true){
var ret_value__27151__auto__ = (function (){try{while(true){
var result__27152__auto__ = switch__27149__auto__.call(null,state_27379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27152__auto__;
}
break;
}
}catch (e27403){if((e27403 instanceof Object)){
var ex__27153__auto__ = e27403;
var statearr_27404_27650 = state_27379;
(statearr_27404_27650[(5)] = ex__27153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27651 = state_27379;
state_27379 = G__27651;
continue;
} else {
return ret_value__27151__auto__;
}
break;
}
});
taoensso$sente$state_machine__27150__auto__ = function(state_27379){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__27150__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__27150__auto____1.call(this,state_27379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__27150__auto____0;
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__27150__auto____1;
return taoensso$sente$state_machine__27150__auto__;
})()
;})(switch__27149__auto__,c__27170__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__27172__auto__ = (function (){var statearr_27405 = f__27171__auto__.call(null);
(statearr_27405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto__);

return statearr_27405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__27170__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__21707__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__27170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__27171__auto__ = (function (){var switch__27149__auto__ = ((function (c__27170__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_27429){
var state_val_27430 = (state_27429[(1)]);
if((state_val_27430 === (1))){
var inst_27406 = cljs.core.async.timeout.call(null,ms);
var state_27429__$1 = state_27429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27429__$1,(2),inst_27406);
} else {
if((state_val_27430 === (2))){
var inst_27413 = (state_27429[(7)]);
var inst_27408 = (state_27429[(2)]);
var inst_27409 = cljs.core.deref.call(null,conns_);
var inst_27410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27411 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_27412 = (new cljs.core.PersistentVector(null,3,(5),inst_27410,inst_27411,null));
var inst_27413__$1 = cljs.core.get_in.call(null,inst_27409,inst_27412);
var state_27429__$1 = (function (){var statearr_27431 = state_27429;
(statearr_27431[(8)] = inst_27408);

(statearr_27431[(7)] = inst_27413__$1);

return statearr_27431;
})();
if(cljs.core.truth_(inst_27413__$1)){
var statearr_27432_27652 = state_27429__$1;
(statearr_27432_27652[(1)] = (3));

} else {
var statearr_27433_27653 = state_27429__$1;
(statearr_27433_27653[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (3))){
var inst_27413 = (state_27429[(7)]);
var inst_27416 = cljs.core.nth.call(null,inst_27413,(0),null);
var inst_27417 = cljs.core.nth.call(null,inst_27413,(1),null);
var inst_27418 = cljs.core._EQ_.call(null,inst_27417,udt_open);
var state_27429__$1 = (function (){var statearr_27434 = state_27429;
(statearr_27434[(9)] = inst_27416);

return statearr_27434;
})();
if(inst_27418){
var statearr_27435_27654 = state_27429__$1;
(statearr_27435_27654[(1)] = (6));

} else {
var statearr_27436_27655 = state_27429__$1;
(statearr_27436_27655[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (4))){
var state_27429__$1 = state_27429;
var statearr_27437_27656 = state_27429__$1;
(statearr_27437_27656[(2)] = null);

(statearr_27437_27656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (5))){
var inst_27427 = (state_27429[(2)]);
var state_27429__$1 = state_27429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27429__$1,inst_27427);
} else {
if((state_val_27430 === (6))){
var inst_27420 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_27421 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_27420);
var state_27429__$1 = state_27429;
var statearr_27438_27657 = state_27429__$1;
(statearr_27438_27657[(2)] = inst_27421);

(statearr_27438_27657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (7))){
var state_27429__$1 = state_27429;
var statearr_27439_27658 = state_27429__$1;
(statearr_27439_27658[(2)] = null);

(statearr_27439_27658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (8))){
var inst_27424 = (state_27429[(2)]);
var state_27429__$1 = state_27429;
var statearr_27440_27659 = state_27429__$1;
(statearr_27440_27659[(2)] = inst_27424);

(statearr_27440_27659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27170__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__27149__auto__,c__27170__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__27150__auto__ = null;
var taoensso$sente$state_machine__27150__auto____0 = (function (){
var statearr_27444 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27444[(0)] = taoensso$sente$state_machine__27150__auto__);

(statearr_27444[(1)] = (1));

return statearr_27444;
});
var taoensso$sente$state_machine__27150__auto____1 = (function (state_27429){
while(true){
var ret_value__27151__auto__ = (function (){try{while(true){
var result__27152__auto__ = switch__27149__auto__.call(null,state_27429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27152__auto__;
}
break;
}
}catch (e27445){if((e27445 instanceof Object)){
var ex__27153__auto__ = e27445;
var statearr_27446_27660 = state_27429;
(statearr_27446_27660[(5)] = ex__27153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27661 = state_27429;
state_27429 = G__27661;
continue;
} else {
return ret_value__27151__auto__;
}
break;
}
});
taoensso$sente$state_machine__27150__auto__ = function(state_27429){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__27150__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__27150__auto____1.call(this,state_27429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__27150__auto____0;
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__27150__auto____1;
return taoensso$sente$state_machine__27150__auto__;
})()
;})(switch__27149__auto__,c__27170__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__27172__auto__ = (function (){var statearr_27447 = f__27171__auto__.call(null);
(statearr_27447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto__);

return statearr_27447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__27170__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__27448 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__27448,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__27448,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__27448,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",616,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__27448,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__27448,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__27448,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",625,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__27170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__27171__auto__ = (function (){var switch__27149__auto__ = ((function (c__27170__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_27498){
var state_val_27499 = (state_27498[(1)]);
if((state_val_27499 === (7))){
var state_27498__$1 = state_27498;
var statearr_27500_27662 = state_27498__$1;
(statearr_27500_27662[(2)] = null);

(statearr_27500_27662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (1))){
var inst_27449 = cljs.core.async.timeout.call(null,(5000));
var state_27498__$1 = state_27498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27498__$1,(2),inst_27449);
} else {
if((state_val_27499 === (4))){
var state_27498__$1 = state_27498;
var statearr_27501_27663 = state_27498__$1;
(statearr_27501_27663[(2)] = null);

(statearr_27501_27663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (13))){
var state_27498__$1 = state_27498;
var statearr_27502_27664 = state_27498__$1;
(statearr_27502_27664[(2)] = null);

(statearr_27502_27664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (6))){
var inst_27457 = (state_27498[(7)]);
var inst_27459 = (state_27498[(8)]);
var inst_27475 = (state_27498[(9)]);
var inst_27458 = (state_27498[(10)]);
var inst_27470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27471 = [conn_type,uid,client_id];
var inst_27472 = (new cljs.core.PersistentVector(null,3,(5),inst_27470,inst_27471,null));
var inst_27474 = (function (){var vec__27452 = inst_27457;
var __QMARK_sch = inst_27458;
var udt_t1 = inst_27459;
return ((function (vec__27452,__QMARK_sch,udt_t1,inst_27457,inst_27459,inst_27475,inst_27458,inst_27470,inst_27471,inst_27472,state_val_27499,c__27170__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__27473){
var vec__27503 = p__27473;
var _sch = cljs.core.nth.call(null,vec__27503,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__27503,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__27452,__QMARK_sch,udt_t1,inst_27457,inst_27459,inst_27475,inst_27458,inst_27470,inst_27471,inst_27472,state_val_27499,c__27170__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_27475__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_27472,inst_27474);
var state_27498__$1 = (function (){var statearr_27504 = state_27498;
(statearr_27504[(9)] = inst_27475__$1);

return statearr_27504;
})();
if(cljs.core.truth_(inst_27475__$1)){
var statearr_27505_27665 = state_27498__$1;
(statearr_27505_27665[(1)] = (9));

} else {
var statearr_27506_27666 = state_27498__$1;
(statearr_27506_27666[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (3))){
var inst_27457 = (state_27498[(7)]);
var inst_27459 = (state_27498[(8)]);
var inst_27458 = (state_27498[(10)]);
var inst_27462 = (function (){var vec__27452 = inst_27457;
var __QMARK_sch = inst_27458;
var udt_t1 = inst_27459;
return ((function (vec__27452,__QMARK_sch,udt_t1,inst_27457,inst_27459,inst_27458,state_val_27499,c__27170__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__27452,__QMARK_sch,udt_t1,inst_27457,inst_27459,inst_27458,state_val_27499,c__27170__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_27463 = (new cljs.core.Delay(inst_27462,null));
var inst_27464 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",639,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_27463,null);
var state_27498__$1 = state_27498;
var statearr_27507_27667 = state_27498__$1;
(statearr_27507_27667[(2)] = inst_27464);

(statearr_27507_27667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (12))){
var inst_27484 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27485 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_27486 = (new cljs.core.PersistentVector(null,2,(5),inst_27484,inst_27485,null));
var inst_27487 = receive_event_msg_BANG_.call(null,inst_27486);
var state_27498__$1 = state_27498;
var statearr_27508_27668 = state_27498__$1;
(statearr_27508_27668[(2)] = inst_27487);

(statearr_27508_27668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (2))){
var inst_27457 = (state_27498[(7)]);
var inst_27451 = (state_27498[(2)]);
var inst_27453 = cljs.core.deref.call(null,conns_);
var inst_27454 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27455 = [conn_type,uid,client_id];
var inst_27456 = (new cljs.core.PersistentVector(null,3,(5),inst_27454,inst_27455,null));
var inst_27457__$1 = cljs.core.get_in.call(null,inst_27453,inst_27456);
var inst_27458 = cljs.core.nth.call(null,inst_27457__$1,(0),null);
var inst_27459 = cljs.core.nth.call(null,inst_27457__$1,(1),null);
var inst_27460 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_27498__$1 = (function (){var statearr_27509 = state_27498;
(statearr_27509[(7)] = inst_27457__$1);

(statearr_27509[(8)] = inst_27459);

(statearr_27509[(10)] = inst_27458);

(statearr_27509[(11)] = inst_27451);

return statearr_27509;
})();
if(cljs.core.truth_(inst_27460)){
var statearr_27510_27669 = state_27498__$1;
(statearr_27510_27669[(1)] = (3));

} else {
var statearr_27511_27670 = state_27498__$1;
(statearr_27511_27670[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (11))){
var inst_27493 = (state_27498[(2)]);
var state_27498__$1 = state_27498;
var statearr_27512_27671 = state_27498__$1;
(statearr_27512_27671[(2)] = inst_27493);

(statearr_27512_27671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (9))){
var inst_27457 = (state_27498[(7)]);
var inst_27459 = (state_27498[(8)]);
var inst_27475 = (state_27498[(9)]);
var inst_27458 = (state_27498[(10)]);
var inst_27477 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27478 = [conn_type,uid];
var inst_27479 = (new cljs.core.PersistentVector(null,2,(5),inst_27477,inst_27478,null));
var inst_27480 = (function (){var vec__27452 = inst_27457;
var __QMARK_sch = inst_27458;
var udt_t1 = inst_27459;
var disconnect_QMARK_ = inst_27475;
return ((function (vec__27452,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_27457,inst_27459,inst_27475,inst_27458,inst_27477,inst_27478,inst_27479,state_val_27499,c__27170__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__27452,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_27457,inst_27459,inst_27475,inst_27458,inst_27477,inst_27478,inst_27479,state_val_27499,c__27170__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_27481 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_27479,inst_27480);
var inst_27482 = upd_connected_uid_BANG_.call(null,uid);
var state_27498__$1 = (function (){var statearr_27513 = state_27498;
(statearr_27513[(12)] = inst_27481);

return statearr_27513;
})();
if(cljs.core.truth_(inst_27482)){
var statearr_27514_27672 = state_27498__$1;
(statearr_27514_27672[(1)] = (12));

} else {
var statearr_27515_27673 = state_27498__$1;
(statearr_27515_27673[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (5))){
var inst_27459 = (state_27498[(8)]);
var inst_27467 = (state_27498[(2)]);
var inst_27468 = cljs.core._EQ_.call(null,inst_27459,udt_close);
var state_27498__$1 = (function (){var statearr_27516 = state_27498;
(statearr_27516[(13)] = inst_27467);

return statearr_27516;
})();
if(inst_27468){
var statearr_27517_27674 = state_27498__$1;
(statearr_27517_27674[(1)] = (6));

} else {
var statearr_27518_27675 = state_27498__$1;
(statearr_27518_27675[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (14))){
var inst_27490 = (state_27498[(2)]);
var state_27498__$1 = state_27498;
var statearr_27519_27676 = state_27498__$1;
(statearr_27519_27676[(2)] = inst_27490);

(statearr_27519_27676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (10))){
var state_27498__$1 = state_27498;
var statearr_27520_27677 = state_27498__$1;
(statearr_27520_27677[(2)] = null);

(statearr_27520_27677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (8))){
var inst_27496 = (state_27498[(2)]);
var state_27498__$1 = state_27498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27498__$1,inst_27496);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27170__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__27149__auto__,c__27170__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__27150__auto__ = null;
var taoensso$sente$state_machine__27150__auto____0 = (function (){
var statearr_27524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27524[(0)] = taoensso$sente$state_machine__27150__auto__);

(statearr_27524[(1)] = (1));

return statearr_27524;
});
var taoensso$sente$state_machine__27150__auto____1 = (function (state_27498){
while(true){
var ret_value__27151__auto__ = (function (){try{while(true){
var result__27152__auto__ = switch__27149__auto__.call(null,state_27498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27152__auto__;
}
break;
}
}catch (e27525){if((e27525 instanceof Object)){
var ex__27153__auto__ = e27525;
var statearr_27526_27678 = state_27498;
(statearr_27526_27678[(5)] = ex__27153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27679 = state_27498;
state_27498 = G__27679;
continue;
} else {
return ret_value__27151__auto__;
}
break;
}
});
taoensso$sente$state_machine__27150__auto__ = function(state_27498){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__27150__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__27150__auto____1.call(this,state_27498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__27150__auto____0;
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__27150__auto____1;
return taoensso$sente$state_machine__27150__auto__;
})()
;})(switch__27149__auto__,c__27170__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__27172__auto__ = (function (){var statearr_27527 = f__27171__auto__.call(null);
(statearr_27527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto__);

return statearr_27527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__27170__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",661,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__27258,map__27259,map__27259__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq27255){
var G__27256 = cljs.core.first.call(null,seq27255);
var seq27255__$1 = cljs.core.next.call(null,seq27255);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27256,seq27255__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",667,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__27688 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__27689 = null;
var count__27690 = (0);
var i__27691 = (0);
while(true){
if((i__27691 < count__27690)){
var vec__27692 = cljs.core._nth.call(null,chunk__27689,i__27691);
var client_id = cljs.core.nth.call(null,vec__27692,(0),null);
var vec__27693 = cljs.core.nth.call(null,vec__27692,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__27693,(0),null);
var _udt = cljs.core.nth.call(null,vec__27693,(1),null);
var temp__4657__auto___27696 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___27696)){
var sch_27697 = temp__4657__auto___27696;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_27697,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__27698 = seq__27688;
var G__27699 = chunk__27689;
var G__27700 = count__27690;
var G__27701 = (i__27691 + (1));
seq__27688 = G__27698;
chunk__27689 = G__27699;
count__27690 = G__27700;
i__27691 = G__27701;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27688);
if(temp__4657__auto__){
var seq__27688__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27688__$1)){
var c__22518__auto__ = cljs.core.chunk_first.call(null,seq__27688__$1);
var G__27702 = cljs.core.chunk_rest.call(null,seq__27688__$1);
var G__27703 = c__22518__auto__;
var G__27704 = cljs.core.count.call(null,c__22518__auto__);
var G__27705 = (0);
seq__27688 = G__27702;
chunk__27689 = G__27703;
count__27690 = G__27704;
i__27691 = G__27705;
continue;
} else {
var vec__27694 = cljs.core.first.call(null,seq__27688__$1);
var client_id = cljs.core.nth.call(null,vec__27694,(0),null);
var vec__27695 = cljs.core.nth.call(null,vec__27694,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__27695,(0),null);
var _udt = cljs.core.nth.call(null,vec__27695,(1),null);
var temp__4657__auto___27706__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___27706__$1)){
var sch_27707 = temp__4657__auto___27706__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_27707,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__27708 = cljs.core.next.call(null,seq__27688__$1);
var G__27709 = null;
var G__27710 = (0);
var G__27711 = (0);
seq__27688 = G__27708;
chunk__27689 = G__27709;
count__27690 = G__27710;
i__27691 = G__27711;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",677,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var nmax_attempts = (7);
var ms_base = (90);
var ms_rand = (90);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__27170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (){
var f__27171__auto__ = (function (){var switch__27149__auto__ = ((function (c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (state_27838){
var state_val_27839 = (state_27838[(1)]);
if((state_val_27839 === (7))){
var inst_27800 = (state_27838[(7)]);
var inst_27793 = (state_27838[(8)]);
var inst_27794 = (state_27838[(9)]);
var inst_27810 = (function (){var n = inst_27793;
var client_ids_satisfied = inst_27794;
var _QMARK_pulled = inst_27800;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_27800,inst_27793,inst_27794,state_val_27839,c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (s,client_id,p__27809){
var vec__27840 = p__27809;
var _QMARK_sch = cljs.core.nth.call(null,vec__27840,(0),null);
var _udt = cljs.core.nth.call(null,vec__27840,(1),null);
var sent_QMARK_ = (function (){var temp__4657__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto__)){
var sch = temp__4657__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_27800,inst_27793,inst_27794,state_val_27839,c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var inst_27811 = cljs.core.PersistentHashSet.EMPTY;
var inst_27812 = cljs.core.reduce_kv.call(null,inst_27810,inst_27811,inst_27800);
var state_27838__$1 = state_27838;
var statearr_27841_27872 = state_27838__$1;
(statearr_27841_27872[(2)] = inst_27812);

(statearr_27841_27872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (1))){
var inst_27792 = cljs.core.PersistentHashSet.EMPTY;
var inst_27793 = (0);
var inst_27794 = inst_27792;
var state_27838__$1 = (function (){var statearr_27842 = state_27838;
(statearr_27842[(8)] = inst_27793);

(statearr_27842[(9)] = inst_27794);

return statearr_27842;
})();
var statearr_27843_27873 = state_27838__$1;
(statearr_27843_27873[(2)] = null);

(statearr_27843_27873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (4))){
var state_27838__$1 = state_27838;
var statearr_27844_27874 = state_27838__$1;
(statearr_27844_27874[(2)] = true);

(statearr_27844_27874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (15))){
var inst_27834 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27845_27875 = state_27838__$1;
(statearr_27845_27875[(2)] = inst_27834);

(statearr_27845_27875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (13))){
var inst_27825 = cljs.core.rand_int.call(null,ms_rand);
var inst_27826 = (ms_base + inst_27825);
var inst_27827 = cljs.core.async.timeout.call(null,inst_27826);
var state_27838__$1 = state_27838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27838__$1,(16),inst_27827);
} else {
if((state_val_27839 === (6))){
var inst_27800 = (state_27838[(7)]);
var inst_27807 = (state_27838[(2)]);
var state_27838__$1 = (function (){var statearr_27846 = state_27838;
(statearr_27846[(10)] = inst_27807);

return statearr_27846;
})();
if(cljs.core.truth_(inst_27800)){
var statearr_27847_27876 = state_27838__$1;
(statearr_27847_27876[(1)] = (7));

} else {
var statearr_27848_27877 = state_27838__$1;
(statearr_27848_27877[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (3))){
var inst_27836 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27838__$1,inst_27836);
} else {
if((state_val_27839 === (12))){
var inst_27823 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
if(cljs.core.truth_(inst_27823)){
var statearr_27849_27878 = state_27838__$1;
(statearr_27849_27878[(1)] = (13));

} else {
var statearr_27850_27879 = state_27838__$1;
(statearr_27850_27879[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (2))){
var inst_27800 = (state_27838[(7)]);
var inst_27793 = (state_27838[(8)]);
var inst_27794 = (state_27838[(9)]);
var inst_27796 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27797 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_27798 = (new cljs.core.PersistentVector(null,2,(5),inst_27796,inst_27797,null));
var inst_27799 = (function (){var n = inst_27793;
var client_ids_satisfied = inst_27794;
return ((function (n,client_ids_satisfied,inst_27800,inst_27793,inst_27794,inst_27796,inst_27797,inst_27798,state_val_27839,c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_27800,inst_27793,inst_27794,inst_27796,inst_27797,inst_27798,state_val_27839,c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__27851 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__27851,(0),null);
var udt = cljs.core.nth.call(null,vec__27851,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_27800,inst_27793,inst_27794,inst_27796,inst_27797,inst_27798,state_val_27839,c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_27800,inst_27793,inst_27794,inst_27796,inst_27797,inst_27798,state_val_27839,c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var inst_27800__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_27798,inst_27799);
var inst_27801 = (function (){var n = inst_27793;
var client_ids_satisfied = inst_27794;
var _QMARK_pulled = inst_27800__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_27800,inst_27793,inst_27794,inst_27796,inst_27797,inst_27798,inst_27799,inst_27800__$1,state_val_27839,c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (x){
var or__21707__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,x);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_27800,inst_27793,inst_27794,inst_27796,inst_27797,inst_27798,inst_27799,inst_27800__$1,state_val_27839,c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var inst_27802 = inst_27801.call(null,inst_27800__$1);
var state_27838__$1 = (function (){var statearr_27852 = state_27838;
(statearr_27852[(7)] = inst_27800__$1);

return statearr_27852;
})();
if(cljs.core.truth_(inst_27802)){
var statearr_27853_27880 = state_27838__$1;
(statearr_27853_27880[(1)] = (4));

} else {
var statearr_27854_27881 = state_27838__$1;
(statearr_27854_27881[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (11))){
var inst_27817 = (state_27838[(11)]);
var state_27838__$1 = state_27838;
var statearr_27855_27882 = state_27838__$1;
(statearr_27855_27882[(2)] = inst_27817);

(statearr_27855_27882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (9))){
var inst_27817 = (state_27838[(11)]);
var inst_27793 = (state_27838[(8)]);
var inst_27794 = (state_27838[(9)]);
var inst_27815 = (state_27838[(2)]);
var inst_27816 = cljs.core.into.call(null,inst_27794,inst_27815);
var inst_27817__$1 = (inst_27793 < nmax_attempts);
var state_27838__$1 = (function (){var statearr_27856 = state_27838;
(statearr_27856[(11)] = inst_27817__$1);

(statearr_27856[(12)] = inst_27816);

return statearr_27856;
})();
if(cljs.core.truth_(inst_27817__$1)){
var statearr_27857_27883 = state_27838__$1;
(statearr_27857_27883[(1)] = (10));

} else {
var statearr_27858_27884 = state_27838__$1;
(statearr_27858_27884[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (5))){
var inst_27800 = (state_27838[(7)]);
var inst_27805 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_27800,null,null);
var state_27838__$1 = state_27838;
var statearr_27859_27885 = state_27838__$1;
(statearr_27859_27885[(2)] = inst_27805);

(statearr_27859_27885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (14))){
var state_27838__$1 = state_27838;
var statearr_27860_27886 = state_27838__$1;
(statearr_27860_27886[(2)] = null);

(statearr_27860_27886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (16))){
var inst_27793 = (state_27838[(8)]);
var inst_27816 = (state_27838[(12)]);
var inst_27829 = (state_27838[(2)]);
var inst_27830 = (inst_27793 + (1));
var inst_27793__$1 = inst_27830;
var inst_27794 = inst_27816;
var state_27838__$1 = (function (){var statearr_27861 = state_27838;
(statearr_27861[(8)] = inst_27793__$1);

(statearr_27861[(9)] = inst_27794);

(statearr_27861[(13)] = inst_27829);

return statearr_27861;
})();
var statearr_27862_27887 = state_27838__$1;
(statearr_27862_27887[(2)] = null);

(statearr_27862_27887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (10))){
var inst_27816 = (state_27838[(12)]);
var inst_27819 = cljs.core.complement.call(null,inst_27816);
var inst_27820 = cljs.core.some.call(null,inst_27819,client_ids_unsatisfied);
var state_27838__$1 = state_27838;
var statearr_27863_27888 = state_27838__$1;
(statearr_27863_27888[(2)] = inst_27820);

(statearr_27863_27888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (8))){
var state_27838__$1 = state_27838;
var statearr_27864_27889 = state_27838__$1;
(statearr_27864_27889[(2)] = null);

(statearr_27864_27889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
;
return ((function (switch__27149__auto__,c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__27150__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__27150__auto____0 = (function (){
var statearr_27868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27868[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__27150__auto__);

(statearr_27868[(1)] = (1));

return statearr_27868;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__27150__auto____1 = (function (state_27838){
while(true){
var ret_value__27151__auto__ = (function (){try{while(true){
var result__27152__auto__ = switch__27149__auto__.call(null,state_27838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27152__auto__;
}
break;
}
}catch (e27869){if((e27869 instanceof Object)){
var ex__27153__auto__ = e27869;
var statearr_27870_27890 = state_27838;
(statearr_27870_27890[(5)] = ex__27153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27891 = state_27838;
state_27838 = G__27891;
continue;
} else {
return ret_value__27151__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__27150__auto__ = function(state_27838){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__27150__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__27150__auto____1.call(this,state_27838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__27150__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__27150__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__27150__auto__;
})()
;})(switch__27149__auto__,c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var state__27172__auto__ = (function (){var statearr_27871 = f__27171__auto__.call(null);
(statearr_27871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto__);

return statearr_27871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
);

return c__27170__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__22370__auto__ = (((chsk == null))?null:chsk);
var m__22371__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,chsk);
} else {
var m__22371__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reconn_QMARK_){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reconn_QMARK_);
} else {
var x__22370__auto__ = (((chsk == null))?null:chsk);
var m__22371__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,chsk,reconn_QMARK_);
} else {
var m__22371__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,chsk,reconn_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__22370__auto__ = (((chsk == null))?null:chsk);
var m__22371__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,chsk);
} else {
var m__22371__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__22370__auto__ = (((chsk == null))?null:chsk);
var m__22371__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,chsk,ev,opts);
} else {
var m__22371__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});
/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,false);
});
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,false);
});
/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args27892 = [];
var len__22777__auto___27895 = arguments.length;
var i__22778__auto___27896 = (0);
while(true){
if((i__22778__auto___27896 < len__22777__auto___27895)){
args27892.push((arguments[i__22778__auto___27896]));

var G__27897 = (i__22778__auto___27896 + (1));
i__22778__auto___27896 = G__27897;
continue;
} else {
}
break;
}

var G__27894 = args27892.length;
switch (G__27894) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27892.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",756,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",761,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__21707__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__21707__auto__){
return or__21707__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb requires a timeout; timeout-ms should be a +ive integer: "),cljs.core.str(_QMARK_timeout_ms)].join('')),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb should be nil, an ifn, or a channel: "),cljs.core.str(cljs.core.type.call(null,_QMARK_cb))].join('')),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__27899,merge_state){
var map__27903 = p__27899;
var map__27903__$1 = ((((!((map__27903 == null)))?((((map__27903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27903):map__27903);
var chsk = map__27903__$1;
var chs = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__27905 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__27903,map__27903__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var requested_reconnect_QMARK_ = (function (){var and__21695__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__21695__auto__)){
var and__21695__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__21695__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__21695__auto____$1;
}
} else {
return and__21695__auto__;
}
})();
var new_state__$1 = (cljs.core.truth_(requested_reconnect_QMARK_)?cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true):cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666)));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__27903,map__27903__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__27905,(0),null);
var new_state = cljs.core.nth.call(null,vec__27905,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),new_state], null));

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_27910 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27908){if((e27908 instanceof Error)){
var e = e27908;
return e;
} else {
throw e27908;

}
}})();
if((e_27910 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_27910,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__27909 = ev;
var ev_id = cljs.core.nth.call(null,vec__27909,(0),null);
var _ = cljs.core.nth.call(null,vec__27909,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__27909,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__27909,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",829,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27918){if((e27918 instanceof Error)){
var e = e27918;
return e;
} else {
throw e27918;

}
}})();
if((e == null)){
return clj;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,e,null);
}
})();
var seq__27919 = cljs.core.seq.call(null,buffered_evs);
var chunk__27920 = null;
var count__27921 = (0);
var i__27922 = (0);
while(true){
if((i__27922 < count__27921)){
var ev = cljs.core._nth.call(null,chunk__27920,i__27922);
taoensso.sente.assert_event.call(null,ev);

var vec__27923_27925 = ev;
var id_27926 = cljs.core.nth.call(null,vec__27923_27925,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_27926),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__27927 = seq__27919;
var G__27928 = chunk__27920;
var G__27929 = count__27921;
var G__27930 = (i__27922 + (1));
seq__27919 = G__27927;
chunk__27920 = G__27928;
count__27921 = G__27929;
i__27922 = G__27930;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27919);
if(temp__4657__auto__){
var seq__27919__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27919__$1)){
var c__22518__auto__ = cljs.core.chunk_first.call(null,seq__27919__$1);
var G__27931 = cljs.core.chunk_rest.call(null,seq__27919__$1);
var G__27932 = c__22518__auto__;
var G__27933 = cljs.core.count.call(null,c__22518__auto__);
var G__27934 = (0);
seq__27919 = G__27931;
chunk__27920 = G__27932;
count__27921 = G__27933;
i__27922 = G__27934;
continue;
} else {
var ev = cljs.core.first.call(null,seq__27919__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__27924_27935 = ev;
var id_27936 = cljs.core.nth.call(null,vec__27924_27935,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_27936),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__27937 = cljs.core.next.call(null,seq__27919__$1);
var G__27938 = null;
var G__27939 = (0);
var G__27940 = (0);
seq__27919 = G__27937;
chunk__27920 = G__27938;
count__27921 = G__27939;
i__27922 = G__27940;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__21695__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__21695__auto__){
var vec__27944 = x;
var x1 = cljs.core.nth.call(null,vec__27944,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__21695__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_27957 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27951){if((e27951 instanceof Error)){
var e = e27951;
return e;
} else {
throw e27951;

}
}})();
if((e_27957 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_27957,null);
}

var e_27958 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27952){if((e27952 instanceof Error)){
var e = e27952;
return e;
} else {
throw e27952;

}
}})();
if((e_27958 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_27958,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",846,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null);

var vec__27953 = clj;
var _ = cljs.core.nth.call(null,vec__27953,(0),null);
var vec__27954 = cljs.core.nth.call(null,vec__27953,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__27954,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__27954,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__27954,(2),null);
var map__27955 = chsk;
var map__27955__$1 = ((((!((map__27955 == null)))?((((map__27955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27955):map__27955);
var chs = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",865,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__27953,_,vec__27954,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__27955,map__27955__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__27953,_,vec__27954,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__27955,map__27955__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new_state);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,state_,active_retry_id_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,err_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.active_retry_id_ = active_retry_id_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.err_fn = err_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22329__auto__,k__22330__auto__){
var self__ = this;
var this__22329__auto____$1 = this;
return cljs.core._lookup.call(null,this__22329__auto____$1,k__22330__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22331__auto__,k27960,else__22332__auto__){
var self__ = this;
var this__22331__auto____$1 = this;
var G__27962 = (((k27960 instanceof cljs.core.Keyword))?k27960.fqn:null);
switch (G__27962) {
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "err-fn":
return self__.err_fn;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27960,else__22332__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22343__auto__,writer__22344__auto__,opts__22345__auto__){
var self__ = this;
var this__22343__auto____$1 = this;
var pr_pair__22346__auto__ = ((function (this__22343__auto____$1){
return (function (keyval__22347__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22344__auto__,cljs.core.pr_writer,""," ","",opts__22345__auto__,keyval__22347__auto__);
});})(this__22343__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22344__auto__,pr_pair__22346__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__22345__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"err-fn","err-fn",-861159760),self__.err_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27959){
var self__ = this;
var G__27959__$1 = this;
return (new cljs.core.RecordIter((0),G__27959__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"err-fn","err-fn",-861159760)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22327__auto__){
var self__ = this;
var this__22327__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22323__auto__){
var self__ = this;
var this__22323__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22333__auto__){
var self__ = this;
var this__22333__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22324__auto__){
var self__ = this;
var this__22324__auto____$1 = this;
var h__22142__auto__ = self__.__hash;
if(!((h__22142__auto__ == null))){
return h__22142__auto__;
} else {
var h__22142__auto____$1 = cljs.core.hash_imap.call(null,this__22324__auto____$1);
self__.__hash = h__22142__auto____$1;

return h__22142__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22325__auto__,other__22326__auto__){
var self__ = this;
var this__22325__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21695__auto__ = other__22326__auto__;
if(cljs.core.truth_(and__21695__auto__)){
var and__21695__auto____$1 = (this__22325__auto____$1.constructor === other__22326__auto__.constructor);
if(and__21695__auto____$1){
return cljs.core.equiv_map.call(null,this__22325__auto____$1,other__22326__auto__);
} else {
return and__21695__auto____$1;
}
} else {
return and__21695__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22338__auto__,k__22339__auto__){
var self__ = this;
var this__22338__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"err-fn","err-fn",-861159760),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__22339__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22338__auto____$1),self__.__meta),k__22339__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22339__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22336__auto__,k__22337__auto__,G__27959){
var self__ = this;
var this__22336__auto____$1 = this;
var pred__27963 = cljs.core.keyword_identical_QMARK_;
var expr__27964 = k__22337__auto__;
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__27964))){
return (new taoensso.sente.ChWebSocket(G__27959,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__27964))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__27959,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__27964))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__27959,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__27964))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__27959,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__27964))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__27959,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__27964))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__27959,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__27964))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__27959,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__27964))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,G__27959,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__27964))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,G__27959,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__27964))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,G__27959,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__27964))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__27959,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__27964))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__27959,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27963.call(null,new cljs.core.Keyword(null,"err-fn","err-fn",-861159760),expr__27964))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__27959,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22337__auto__,G__27959),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22341__auto__){
var self__ = this;
var this__22341__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"err-fn","err-fn",-861159760),self__.err_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22328__auto__,G__27959){
var self__ = this;
var this__22328__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,G__27959,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22334__auto__,entry__22335__auto__){
var self__ = this;
var this__22334__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22335__auto__)){
return cljs.core._assoc.call(null,this__22334__auto____$1,cljs.core._nth.call(null,entry__22335__auto__,(0)),cljs.core._nth.call(null,entry__22335__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22334__auto____$1,entry__22335__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reconn_QMARK_){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"_disable-auto-retry");

if(cljs.core.truth_(reconn_QMARK_)){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
}

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"reconn","reconn",-807347633));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__27966 = opts;
var map__27966__$1 = ((((!((map__27966 == null)))?((((map__27966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27966):map__27966);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__27966__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__27966__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__27966__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___28002 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___28002)){
var cb_uuid_28003 = temp__4657__auto___28002;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_28003], null),(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,_QMARK_cb_fn))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27968){if((e27968 instanceof Error)){
var e = e27968;
return e;
} else {
throw e27968;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___28004__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___28004__$1)){
var timeout_ms_28005 = temp__4657__auto___28004__$1;
var c__27170__auto___28006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___28006,timeout_ms_28005,temp__4657__auto___28004__$1,cb_uuid_28003,temp__4657__auto___28002,_QMARK_cb_uuid,ppstr,map__27966,map__27966__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__27171__auto__ = (function (){var switch__27149__auto__ = ((function (c__27170__auto___28006,timeout_ms_28005,temp__4657__auto___28004__$1,cb_uuid_28003,temp__4657__auto___28002,_QMARK_cb_uuid,ppstr,map__27966,map__27966__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_27979){
var state_val_27980 = (state_27979[(1)]);
if((state_val_27980 === (1))){
var inst_27969 = cljs.core.async.timeout.call(null,timeout_ms_28005);
var state_27979__$1 = state_27979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27979__$1,(2),inst_27969);
} else {
if((state_val_27980 === (2))){
var inst_27972 = (state_27979[(7)]);
var inst_27971 = (state_27979[(2)]);
var inst_27972__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_27979__$1 = (function (){var statearr_27981 = state_27979;
(statearr_27981[(8)] = inst_27971);

(statearr_27981[(7)] = inst_27972__$1);

return statearr_27981;
})();
if(cljs.core.truth_(inst_27972__$1)){
var statearr_27982_28007 = state_27979__$1;
(statearr_27982_28007[(1)] = (3));

} else {
var statearr_27983_28008 = state_27979__$1;
(statearr_27983_28008[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (3))){
var inst_27972 = (state_27979[(7)]);
var inst_27974 = inst_27972.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_27979__$1 = state_27979;
var statearr_27984_28009 = state_27979__$1;
(statearr_27984_28009[(2)] = inst_27974);

(statearr_27984_28009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (4))){
var state_27979__$1 = state_27979;
var statearr_27985_28010 = state_27979__$1;
(statearr_27985_28010[(2)] = null);

(statearr_27985_28010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (5))){
var inst_27977 = (state_27979[(2)]);
var state_27979__$1 = state_27979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27979__$1,inst_27977);
} else {
return null;
}
}
}
}
}
});})(c__27170__auto___28006,timeout_ms_28005,temp__4657__auto___28004__$1,cb_uuid_28003,temp__4657__auto___28002,_QMARK_cb_uuid,ppstr,map__27966,map__27966__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__27149__auto__,c__27170__auto___28006,timeout_ms_28005,temp__4657__auto___28004__$1,cb_uuid_28003,temp__4657__auto___28002,_QMARK_cb_uuid,ppstr,map__27966,map__27966__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__27150__auto__ = null;
var taoensso$sente$state_machine__27150__auto____0 = (function (){
var statearr_27989 = [null,null,null,null,null,null,null,null,null];
(statearr_27989[(0)] = taoensso$sente$state_machine__27150__auto__);

(statearr_27989[(1)] = (1));

return statearr_27989;
});
var taoensso$sente$state_machine__27150__auto____1 = (function (state_27979){
while(true){
var ret_value__27151__auto__ = (function (){try{while(true){
var result__27152__auto__ = switch__27149__auto__.call(null,state_27979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27152__auto__;
}
break;
}
}catch (e27990){if((e27990 instanceof Object)){
var ex__27153__auto__ = e27990;
var statearr_27991_28011 = state_27979;
(statearr_27991_28011[(5)] = ex__27153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28012 = state_27979;
state_27979 = G__28012;
continue;
} else {
return ret_value__27151__auto__;
}
break;
}
});
taoensso$sente$state_machine__27150__auto__ = function(state_27979){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__27150__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__27150__auto____1.call(this,state_27979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__27150__auto____0;
taoensso$sente$state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__27150__auto____1;
return taoensso$sente$state_machine__27150__auto__;
})()
;})(switch__27149__auto__,c__27170__auto___28006,timeout_ms_28005,temp__4657__auto___28004__$1,cb_uuid_28003,temp__4657__auto___28002,_QMARK_cb_uuid,ppstr,map__27966,map__27966__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__27172__auto__ = (function (){var statearr_27992 = f__27171__auto__.call(null);
(statearr_27992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___28006);

return statearr_27992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___28006,timeout_ms_28005,temp__4657__auto___28004__$1,cb_uuid_28003,temp__4657__auto___28002,_QMARK_cb_uuid,ppstr,map__27966,map__27966__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e27993){if((e27993 instanceof Error)){
var e = e27993;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",918,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__27966,map__27966__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__27966,map__27966__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null);

var temp__4657__auto___28013 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___28013)){
var cb_uuid_28014 = temp__4657__auto___28013;
var cb_fn_STAR__28015 = (function (){var or__21707__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_28014);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
var e__$1 = (function (){try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,_QMARK_cb_fn))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27994){if((e27994 instanceof Error)){
var e__$1 = e27994;
return e__$1;
} else {
throw e27994;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__28015.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e27993;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__21707__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return taoensso.encore.oget.call(null,window,"MozWebSocket");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var retry_id = taoensso.encore.uuid_str.call(null);
var connect_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
var retry_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",936,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return window.setTimeout(taoensso$sente$connect_fn,backoff_ms);
} else {
return null;
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e27998){if((e27998 instanceof Error)){
var e = e27998;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e27998;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__27999 = _QMARK_socket;
(G__27999["onerror"] = ((function (G__27999,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",956,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__27999,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__27999,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-error","chsk/ws-error",260168922),ws_ev], null));

var temp__4657__auto___28016__$1 = self__.err_fn;
if(cljs.core.truth_(temp__4657__auto___28016__$1)){
var ef_28017 = temp__4657__auto___28016__$1;
ef_28017.call(null,chsk__$1);
} else {
}

return null;
});})(G__27999,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__27999["onmessage"] = ((function (G__27999,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__28000 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__28000,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__28000,(1),null);
var or__21707__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
})()
:null);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
var or__21707__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","ws-ping","debug/ws-ping",-168903566)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__21707__auto____$1)){
return or__21707__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__21707__auto____$1,or__21707__auto__,ppstr,vec__28000,clj,_QMARK_cb_uuid,G__27999,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__21707__auto____$1,or__21707__auto__,ppstr,vec__28000,clj,_QMARK_cb_uuid,G__27999,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__27999,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__27999["onclose"] = ((function (G__27999,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
if(cljs.core.truth_(clean_QMARK_)){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",1007,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (code,reason,clean_QMARK_,G__27999,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(code,reason,clean_QMARK_,G__27999,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
}
});})(G__27999,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__27999;
})());
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"err-fn","err-fn",779371767,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__22363__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__22363__auto__,writer__22364__auto__){
return cljs.core._write.call(null,writer__22364__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,active_retry_id_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,err_fn){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,active_retry_id_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,err_fn,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__27961){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__27961),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__27961),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__27961),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__27961),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__27961),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__27961),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__27961),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__27961),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__27961),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__27961),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__27961),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__27961),new cljs.core.Keyword(null,"err-fn","err-fn",-861159760).cljs$core$IFn$_invoke$arity$1(G__27961),null,cljs.core.dissoc.call(null,G__27961,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"err-fn","err-fn",-861159760)),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),cljs.core.atom.call(null,"_pending"),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,active_retry_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.active_retry_id_ = active_retry_id_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22329__auto__,k__22330__auto__){
var self__ = this;
var this__22329__auto____$1 = this;
return cljs.core._lookup.call(null,this__22329__auto____$1,k__22330__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22331__auto__,k28019,else__22332__auto__){
var self__ = this;
var this__22331__auto____$1 = this;
var G__28021 = (((k28019 instanceof cljs.core.Keyword))?k28019.fqn:null);
switch (G__28021) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28019,else__22332__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22343__auto__,writer__22344__auto__,opts__22345__auto__){
var self__ = this;
var this__22343__auto____$1 = this;
var pr_pair__22346__auto__ = ((function (this__22343__auto____$1){
return (function (keyval__22347__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22344__auto__,cljs.core.pr_writer,""," ","",opts__22345__auto__,keyval__22347__auto__);
});})(this__22343__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22344__auto__,pr_pair__22346__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__22345__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28018){
var self__ = this;
var G__28018__$1 = this;
return (new cljs.core.RecordIter((0),G__28018__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22327__auto__){
var self__ = this;
var this__22327__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22323__auto__){
var self__ = this;
var this__22323__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22333__auto__){
var self__ = this;
var this__22333__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22324__auto__){
var self__ = this;
var this__22324__auto____$1 = this;
var h__22142__auto__ = self__.__hash;
if(!((h__22142__auto__ == null))){
return h__22142__auto__;
} else {
var h__22142__auto____$1 = cljs.core.hash_imap.call(null,this__22324__auto____$1);
self__.__hash = h__22142__auto____$1;

return h__22142__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22325__auto__,other__22326__auto__){
var self__ = this;
var this__22325__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21695__auto__ = other__22326__auto__;
if(cljs.core.truth_(and__21695__auto__)){
var and__21695__auto____$1 = (this__22325__auto____$1.constructor === other__22326__auto__.constructor);
if(and__21695__auto____$1){
return cljs.core.equiv_map.call(null,this__22325__auto____$1,other__22326__auto__);
} else {
return and__21695__auto____$1;
}
} else {
return and__21695__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22338__auto__,k__22339__auto__){
var self__ = this;
var this__22338__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__22339__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22338__auto____$1),self__.__meta),k__22339__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22339__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22336__auto__,k__22337__auto__,G__28018){
var self__ = this;
var this__22336__auto____$1 = this;
var pred__28022 = cljs.core.keyword_identical_QMARK_;
var expr__28023 = k__22337__auto__;
if(cljs.core.truth_(pred__28022.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__28023))){
return (new taoensso.sente.ChAjaxSocket(G__28018,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28022.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__28023))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__28018,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28022.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__28023))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__28018,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28022.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__28023))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__28018,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28022.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__28023))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__28018,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28022.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__28023))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__28018,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28022.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__28023))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__28018,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28022.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__28023))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,G__28018,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28022.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__28023))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,G__28018,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28022.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__28023))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__28018,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28022.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__28023))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__28018,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22337__auto__,G__28018),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22341__auto__){
var self__ = this;
var this__22341__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22328__auto__,G__28018){
var self__ = this;
var this__22328__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__28018,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22334__auto__,entry__22335__auto__){
var self__ = this;
var this__22334__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22335__auto__)){
return cljs.core._assoc.call(null,this__22334__auto____$1,cljs.core._nth.call(null,entry__22335__auto__,(0)),cljs.core._nth.call(null,entry__22335__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22334__auto____$1,entry__22335__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reconn_QMARK_){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"_disable-auto-retry");

if(cljs.core.truth_(reconn_QMARK_)){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
}

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"reconn","reconn",-807347633));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__28025 = opts;
var map__28025__$1 = ((((!((map__28025 == null)))?((((map__28025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28025):map__28025);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__28025__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__28025__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__28025__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__21707__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
var or__21707__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__21707__auto____$1)){
return or__21707__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__28025,map__28025__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__28027){
var map__28031 = p__28027;
var map__28031__$1 = ((((!((map__28031 == null)))?((((map__28031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28031):map__28031);
var _QMARK_error = cljs.core.get.call(null,map__28031__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__28031__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__28033 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__28033,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28033,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",1104,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__28033,resp_clj,___$1,map__28031,map__28031__$1,_QMARK_error,_QMARK_content,csrf_token,map__28025,map__28025__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__28033,resp_clj,___$1,map__28031,map__28031__$1,_QMARK_error,_QMARK_content,csrf_token,map__28025,map__28025__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,map__28025,map__28025__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var retry_id = taoensso.encore.uuid_str.call(null);
var poll_fn = ((function (retry_id,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",1113,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",1119,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,null)),null);

return window.setTimeout(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,backoff_ms);
} else {
return null;
}
});})(retry_id,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__21707__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,retry_id,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__28041){
var map__28045 = p__28041;
var map__28045__$1 = ((((!((map__28045 == null)))?((((map__28045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28045):map__28045);
var _QMARK_error = cljs.core.get.call(null,map__28045__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__28045__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__28047 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__28047,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__21707__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,retry_id,chsk__$1))
));
});})(retry_id,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__22363__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__22363__auto__,writer__22364__auto__){
return cljs.core._write.call(null,writer__22364__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,active_retry_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,active_retry_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__28020){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__28020),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__28020),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__28020),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__28020),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__28020),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__28020),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__28020),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__28020),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__28020),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__28020),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__28020),null,cljs.core.dissoc.call(null,G__28020,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),cljs.core.atom.call(null,"_pending"),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22329__auto__,k__22330__auto__){
var self__ = this;
var this__22329__auto____$1 = this;
return cljs.core._lookup.call(null,this__22329__auto____$1,k__22330__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22331__auto__,k28050,else__22332__auto__){
var self__ = this;
var this__22331__auto____$1 = this;
var G__28052 = (((k28050 instanceof cljs.core.Keyword))?k28050.fqn:null);
switch (G__28052) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28050,else__22332__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22343__auto__,writer__22344__auto__,opts__22345__auto__){
var self__ = this;
var this__22343__auto____$1 = this;
var pr_pair__22346__auto__ = ((function (this__22343__auto____$1){
return (function (keyval__22347__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22344__auto__,cljs.core.pr_writer,""," ","",opts__22345__auto__,keyval__22347__auto__);
});})(this__22343__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22344__auto__,pr_pair__22346__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__22345__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28049){
var self__ = this;
var G__28049__$1 = this;
return (new cljs.core.RecordIter((0),G__28049__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22327__auto__){
var self__ = this;
var this__22327__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22323__auto__){
var self__ = this;
var this__22323__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22333__auto__){
var self__ = this;
var this__22333__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22324__auto__){
var self__ = this;
var this__22324__auto____$1 = this;
var h__22142__auto__ = self__.__hash;
if(!((h__22142__auto__ == null))){
return h__22142__auto__;
} else {
var h__22142__auto____$1 = cljs.core.hash_imap.call(null,this__22324__auto____$1);
self__.__hash = h__22142__auto____$1;

return h__22142__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22325__auto__,other__22326__auto__){
var self__ = this;
var this__22325__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21695__auto__ = other__22326__auto__;
if(cljs.core.truth_(and__21695__auto__)){
var and__21695__auto____$1 = (this__22325__auto____$1.constructor === other__22326__auto__.constructor);
if(and__21695__auto____$1){
return cljs.core.equiv_map.call(null,this__22325__auto____$1,other__22326__auto__);
} else {
return and__21695__auto____$1;
}
} else {
return and__21695__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22338__auto__,k__22339__auto__){
var self__ = this;
var this__22338__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__22339__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22338__auto____$1),self__.__meta),k__22339__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22339__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22336__auto__,k__22337__auto__,G__28049){
var self__ = this;
var this__22336__auto____$1 = this;
var pred__28053 = cljs.core.keyword_identical_QMARK_;
var expr__28054 = k__22337__auto__;
if(cljs.core.truth_(pred__28053.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__28054))){
return (new taoensso.sente.ChAutoSocket(G__28049,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28053.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__28054))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__28049,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28053.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__28054))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__28049,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28053.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__28054))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__28049,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22337__auto__,G__28049),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22341__auto__){
var self__ = this;
var this__22341__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22328__auto__,G__28049){
var self__ = this;
var this__22328__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__28049,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22334__auto__,entry__22335__auto__){
var self__ = this;
var this__22334__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22335__auto__)){
return cljs.core._assoc.call(null,this__22334__auto____$1,cljs.core._nth.call(null,entry__22335__auto__,(0)),cljs.core._nth.call(null,entry__22335__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22334__auto____$1,entry__22335__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reconn_QMARK_){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reconn_QMARK_);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"reconn","reconn",-807347633));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__4655__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4655__auto__)){
var impl = temp__4655__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__28056 = opts;
var map__28056__$1 = ((((!((map__28056 == null)))?((((map__28056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28056):map__28056);
var _QMARK_cb = cljs.core.get.call(null,map__28056__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,chsk__$1){
return (function (){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,chsk__$1))
;
var downgraded_QMARK__ = cljs.core.atom.call(null,false);
var ws_err_fn = ((function (ajax_chsk_opts__$1,ajax_conn_BANG_,downgraded_QMARK__,chsk__$1){
return (function (impl){
var temp__4657__auto__ = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__4657__auto__)){
var ever_opened_QMARK__ = temp__4657__auto__;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",1230,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto__,ajax_chsk_opts__$1,ajax_conn_BANG_,downgraded_QMARK__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto__,ajax_chsk_opts__$1,ajax_conn_BANG_,downgraded_QMARK__,chsk__$1))
,null)),null);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,false);

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
}
} else {
return null;
}
});})(ajax_chsk_opts__$1,ajax_conn_BANG_,downgraded_QMARK__,chsk__$1))
;
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,new cljs.core.Keyword(null,"err-fn","err-fn",-861159760),ws_err_fn);
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ajax_conn_BANG_,downgraded_QMARK__,ws_err_fn,ws_chsk_opts__$1,chsk__$1){
return (function (){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ajax_conn_BANG_,downgraded_QMARK__,ws_err_fn,ws_chsk_opts__$1,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__21707__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__22363__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__22363__auto__,writer__22364__auto__){
return cljs.core._write.call(null,writer__22364__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__28051){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__28051),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__28051),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__28051),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__28051),null,cljs.core.dissoc.call(null,G__28051,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__28060 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28060) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,host,path))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *           ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *  :host           ; Server host (defaults to current page's host).
 *  :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                  ; for application-level auth, etc.).
 *  :packer         ; :edn (default), or an IPacker implementation.
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__22784__auto__ = [];
var len__22777__auto___28074 = arguments.length;
var i__22778__auto___28075 = (0);
while(true){
if((i__22778__auto___28075 < len__22777__auto___28074)){
args__22784__auto__.push((arguments[i__22778__auto___28075]));

var G__28076 = (i__22778__auto___28075 + (1));
i__22778__auto___28075 = G__28076;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__28064){
var vec__28065 = p__28064;
var map__28066 = cljs.core.nth.call(null,vec__28065,(0),null);
var map__28066__$1 = ((((!((map__28066 == null)))?((((map__28066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28066):map__28066);
var opts = map__28066__$1;
var type = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var params = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword(null,"params","params",710516235));
var recv_buf_or_n = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var packer = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var client_id = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__21707__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var ajax_opts = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var backoff_ms_fn = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__28065,(1),null);
var e_28077 = (function (){try{if(((function (vec__28065,map__28066,map__28066__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__28065,map__28066,map__28066__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28068){if((e28068 instanceof Error)){
var e = e28068;
return e;
} else {
throw e28068;

}
}})();
if((e_28077 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_28077,null);
}

var e_28078 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28069){if((e28069 instanceof Error)){
var e = e28069;
return e;
} else {
throw e28069;

}
}})();
if((e_28078 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_28078,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",1294,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__28065,map__28066,map__28066__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__28065,map__28066,map__28066__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",1295,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__28065,map__28066,map__28066__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__28065,map__28066,map__28066__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var win_loc = taoensso.encore.get_win_loc.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
var host__$1 = (function (){var or__21707__auto__ = host;
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var path__$1 = (function (){var or__21707__auto__ = path;
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var vec__28070 = (function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__28070,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__28070,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(512)))], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__28071 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28071) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})());
var temp__4655__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__4655__auto__)){
var chsk = temp__4655__auto__;
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,send_fn,chsk,temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__28070,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__28065,map__28066,map__28066__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,send_fn,chsk,temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__28070,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__28065,map__28066,map__28066__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,_LT_server_ch);
} else {
return _LT_server_ch;
}
})()], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.map_LT_.call(null,((function (send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__28070,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__28065,map__28066,map__28066__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__28073 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__28073,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__28073,(1),null);
var ev__$1 = vec__28073;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__28070,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__28065,map__28066,map__28066__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,ev_ch);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",1378,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__28070,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__28065,map__28066,map__28066__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__28070,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__28065,map__28066,map__28066__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,null)),null);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq28062){
var G__28063 = cljs.core.first.call(null,seq28062);
var seq28062__$1 = cljs.core.next.call(null,seq28062);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28063,seq28062__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__28302 = opts;
var map__28302__$1 = ((((!((map__28302 == null)))?((((map__28302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28302):map__28302);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__27170__auto___28524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___28524,map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__27171__auto__ = (function (){var switch__27149__auto__ = ((function (c__27170__auto___28524,map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_28439){
var state_val_28440 = (state_28439[(1)]);
if((state_val_28440 === (7))){
var inst_28435 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28441_28525 = state_28439__$1;
(statearr_28441_28525[(2)] = inst_28435);

(statearr_28441_28525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (20))){
var inst_28312 = (state_28439[(7)]);
var inst_28338 = (state_28439[(8)]);
var inst_28337 = (state_28439[(9)]);
var inst_28311 = (state_28439[(10)]);
var inst_28310 = (state_28439[(11)]);
var inst_28313 = (state_28439[(12)]);
var inst_28348 = (function (){var vec__28305 = inst_28310;
var v = inst_28311;
var p = inst_28312;
var stop_QMARK_ = inst_28313;
var map__28316 = inst_28337;
var event_msg = inst_28337;
var event = inst_28338;
return ((function (vec__28305,v,p,stop_QMARK_,map__28316,event_msg,event,inst_28312,inst_28338,inst_28337,inst_28311,inst_28310,inst_28313,state_val_28440,c__27170__auto___28524,map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__28305,v,p,stop_QMARK_,map__28316,event_msg,event,inst_28312,inst_28338,inst_28337,inst_28311,inst_28310,inst_28313,state_val_28440,c__27170__auto___28524,map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_28349 = (new cljs.core.Delay(inst_28348,null));
var inst_28350 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",1395,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_28349,null);
var state_28439__$1 = state_28439;
var statearr_28442_28526 = state_28439__$1;
(statearr_28442_28526[(2)] = inst_28350);

(statearr_28442_28526[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (27))){
var inst_28355 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28443_28527 = state_28439__$1;
(statearr_28443_28527[(2)] = inst_28355);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (1))){
var state_28439__$1 = state_28439;
var statearr_28444_28528 = state_28439__$1;
(statearr_28444_28528[(2)] = null);

(statearr_28444_28528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (24))){
var state_28439__$1 = state_28439;
var statearr_28445_28529 = state_28439__$1;
(statearr_28445_28529[(2)] = null);

(statearr_28445_28529[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (55))){
var inst_28429 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28446_28530 = state_28439__$1;
(statearr_28446_28530[(2)] = inst_28429);

(statearr_28446_28530[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (39))){
var state_28439__$1 = state_28439;
var statearr_28447_28531 = state_28439__$1;
(statearr_28447_28531[(2)] = taoensso.truss.impl._dummy_error);

(statearr_28447_28531[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (46))){
var inst_28432 = (state_28439[(2)]);
var state_28439__$1 = (function (){var statearr_28448 = state_28439;
(statearr_28448[(13)] = inst_28432);

return statearr_28448;
})();
var statearr_28449_28532 = state_28439__$1;
(statearr_28449_28532[(2)] = null);

(statearr_28449_28532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (4))){
var inst_28312 = (state_28439[(7)]);
var inst_28310 = (state_28439[(11)]);
var inst_28313 = (state_28439[(12)]);
var inst_28310__$1 = (state_28439[(2)]);
var inst_28311 = cljs.core.nth.call(null,inst_28310__$1,(0),null);
var inst_28312__$1 = cljs.core.nth.call(null,inst_28310__$1,(1),null);
var inst_28313__$1 = cljs.core._EQ_.call(null,inst_28312__$1,ch_ctrl);
var state_28439__$1 = (function (){var statearr_28450 = state_28439;
(statearr_28450[(7)] = inst_28312__$1);

(statearr_28450[(10)] = inst_28311);

(statearr_28450[(11)] = inst_28310__$1);

(statearr_28450[(12)] = inst_28313__$1);

return statearr_28450;
})();
if(inst_28313__$1){
var statearr_28451_28533 = state_28439__$1;
(statearr_28451_28533[(1)] = (5));

} else {
var statearr_28452_28534 = state_28439__$1;
(statearr_28452_28534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (54))){
var state_28439__$1 = state_28439;
var statearr_28453_28535 = state_28439__$1;
(statearr_28453_28535[(2)] = null);

(statearr_28453_28535[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (15))){
var inst_28311 = (state_28439[(10)]);
var state_28439__$1 = state_28439;
var statearr_28454_28536 = state_28439__$1;
(statearr_28454_28536[(2)] = inst_28311);

(statearr_28454_28536[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (48))){
var inst_28401 = (state_28439[(2)]);
var inst_28402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28403 = [null,inst_28401];
var inst_28404 = (new cljs.core.PersistentVector(null,2,(5),inst_28402,inst_28403,null));
var state_28439__$1 = state_28439;
var statearr_28455_28537 = state_28439__$1;
(statearr_28455_28537[(2)] = inst_28404);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (50))){
var inst_28398 = (state_28439[(14)]);
var inst_28337 = (state_28439[(9)]);
var inst_28410 = error_handler.call(null,inst_28398,inst_28337);
var state_28439__$1 = state_28439;
var statearr_28456_28538 = state_28439__$1;
(statearr_28456_28538[(2)] = inst_28410);

(statearr_28456_28538[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (21))){
var state_28439__$1 = state_28439;
var statearr_28457_28539 = state_28439__$1;
(statearr_28457_28539[(2)] = null);

(statearr_28457_28539[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (31))){
var inst_28363 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28458_28540 = state_28439__$1;
(statearr_28458_28540[(2)] = inst_28363);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (32))){
var inst_28337 = (state_28439[(9)]);
var state_28439__$1 = state_28439;
var statearr_28459_28541 = state_28439__$1;
(statearr_28459_28541[(2)] = inst_28337);

(statearr_28459_28541[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (40))){
var inst_28381 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28460_28542 = state_28439__$1;
(statearr_28460_28542[(2)] = inst_28381);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (33))){
var inst_28337 = (state_28439[(9)]);
var inst_28365 = (state_28439[(15)]);
var inst_28369 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(server-event-msg? event-msg)",inst_28337,inst_28365,null);
var state_28439__$1 = state_28439;
var statearr_28461_28543 = state_28439__$1;
(statearr_28461_28543[(2)] = inst_28369);

(statearr_28461_28543[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (13))){
var inst_28329 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28462_28544 = state_28439__$1;
(statearr_28462_28544[(2)] = inst_28329);

(statearr_28462_28544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (22))){
var inst_28353 = (state_28439[(2)]);
var state_28439__$1 = (function (){var statearr_28463 = state_28439;
(statearr_28463[(16)] = inst_28353);

return statearr_28463;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_28464_28545 = state_28439__$1;
(statearr_28464_28545[(1)] = (23));

} else {
var statearr_28465_28546 = state_28439__$1;
(statearr_28465_28546[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (36))){
var inst_28373 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28466_28547 = state_28439__$1;
(statearr_28466_28547[(2)] = inst_28373);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (41))){
var inst_28337 = (state_28439[(9)]);
var state_28439__$1 = state_28439;
var statearr_28467_28548 = state_28439__$1;
(statearr_28467_28548[(2)] = inst_28337);

(statearr_28467_28548[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (43))){
var inst_28389 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28468_28549 = state_28439__$1;
(statearr_28468_28549[(2)] = inst_28389);

(statearr_28468_28549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (29))){
var state_28439__$1 = state_28439;
var statearr_28469_28550 = state_28439__$1;
(statearr_28469_28550[(2)] = null);

(statearr_28469_28550[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (44))){
var state_28439__$1 = state_28439;
var statearr_28470_28551 = state_28439__$1;
(statearr_28470_28551[(2)] = null);

(statearr_28470_28551[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (6))){
var inst_28311 = (state_28439[(10)]);
var inst_28319 = (inst_28311 == null);
var inst_28320 = cljs.core.not.call(null,inst_28319);
var state_28439__$1 = state_28439;
if(inst_28320){
var statearr_28471_28552 = state_28439__$1;
(statearr_28471_28552[(1)] = (8));

} else {
var statearr_28472_28553 = state_28439__$1;
(statearr_28472_28553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (28))){
var inst_28337 = (state_28439[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28439,(27),Error,null,(26));
var inst_28359 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_28337);
var state_28439__$1 = state_28439;
if(cljs.core.truth_(inst_28359)){
var statearr_28473_28554 = state_28439__$1;
(statearr_28473_28554[(1)] = (29));

} else {
var statearr_28474_28555 = state_28439__$1;
(statearr_28474_28555[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (51))){
var inst_28398 = (state_28439[(14)]);
var inst_28396 = (state_28439[(17)]);
var inst_28397 = (state_28439[(18)]);
var inst_28312 = (state_28439[(7)]);
var inst_28338 = (state_28439[(8)]);
var inst_28337 = (state_28439[(9)]);
var inst_28311 = (state_28439[(10)]);
var inst_28310 = (state_28439[(11)]);
var inst_28313 = (state_28439[(12)]);
var inst_28412 = (function (){var p = inst_28312;
var _QMARK_error = inst_28398;
var v = inst_28311;
var temp__4655__auto__ = error_handler;
var vec__28305 = inst_28310;
var _ = inst_28397;
var event_msg = inst_28337;
var map__28316 = inst_28337;
var e = inst_28398;
var temp__4657__auto__ = inst_28398;
var vec__28317 = inst_28396;
var event = inst_28338;
var stop_QMARK_ = inst_28313;
return ((function (p,_QMARK_error,v,temp__4655__auto__,vec__28305,_,event_msg,map__28316,e,temp__4657__auto__,vec__28317,event,stop_QMARK_,inst_28398,inst_28396,inst_28397,inst_28312,inst_28338,inst_28337,inst_28311,inst_28310,inst_28313,state_val_28440,c__27170__auto___28524,map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(p,_QMARK_error,v,temp__4655__auto__,vec__28305,_,event_msg,map__28316,e,temp__4657__auto__,vec__28317,event,stop_QMARK_,inst_28398,inst_28396,inst_28397,inst_28312,inst_28338,inst_28337,inst_28311,inst_28310,inst_28313,state_val_28440,c__27170__auto___28524,map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_28413 = (new cljs.core.Delay(inst_28412,null));
var inst_28414 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",1406,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_28413,null);
var state_28439__$1 = state_28439;
var statearr_28475_28556 = state_28439__$1;
(statearr_28475_28556[(2)] = inst_28414);

(statearr_28475_28556[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (25))){
var inst_28346 = (state_28439[(19)]);
var inst_28391 = (state_28439[(2)]);
var inst_28392 = event_msg_handler.call(null,inst_28391);
var inst_28393 = [inst_28392,null];
var inst_28394 = (new cljs.core.PersistentVector(null,2,(5),inst_28346,inst_28393,null));
var state_28439__$1 = state_28439;
var statearr_28476_28557 = state_28439__$1;
(statearr_28476_28557[(2)] = inst_28394);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (34))){
var inst_28371 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28477_28558 = state_28439__$1;
(statearr_28477_28558[(2)] = inst_28371);

(statearr_28477_28558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (17))){
var inst_28398 = (state_28439[(14)]);
var inst_28396 = (state_28439[(17)]);
var inst_28396__$1 = (state_28439[(2)]);
var inst_28397 = cljs.core.nth.call(null,inst_28396__$1,(0),null);
var inst_28398__$1 = cljs.core.nth.call(null,inst_28396__$1,(1),null);
var state_28439__$1 = (function (){var statearr_28478 = state_28439;
(statearr_28478[(14)] = inst_28398__$1);

(statearr_28478[(17)] = inst_28396__$1);

(statearr_28478[(18)] = inst_28397);

return statearr_28478;
})();
if(cljs.core.truth_(inst_28398__$1)){
var statearr_28479_28559 = state_28439__$1;
(statearr_28479_28559[(1)] = (44));

} else {
var statearr_28480_28560 = state_28439__$1;
(statearr_28480_28560[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (3))){
var inst_28437 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28439__$1,inst_28437);
} else {
if((state_val_28440 === (12))){
var state_28439__$1 = state_28439;
var statearr_28481_28561 = state_28439__$1;
(statearr_28481_28561[(2)] = false);

(statearr_28481_28561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (2))){
var inst_28306 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28307 = [ch_recv,ch_ctrl];
var inst_28308 = (new cljs.core.PersistentVector(null,2,(5),inst_28306,inst_28307,null));
var state_28439__$1 = state_28439;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28439__$1,(4),inst_28308);
} else {
if((state_val_28440 === (23))){
var state_28439__$1 = state_28439;
var statearr_28482_28562 = state_28439__$1;
(statearr_28482_28562[(2)] = null);

(statearr_28482_28562[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (47))){
var inst_28420 = (state_28439[(20)]);
var inst_28422 = (state_28439[(21)]);
var inst_28420__$1 = (state_28439[(2)]);
var inst_28421 = cljs.core.nth.call(null,inst_28420__$1,(0),null);
var inst_28422__$1 = cljs.core.nth.call(null,inst_28420__$1,(1),null);
var state_28439__$1 = (function (){var statearr_28483 = state_28439;
(statearr_28483[(20)] = inst_28420__$1);

(statearr_28483[(21)] = inst_28422__$1);

(statearr_28483[(22)] = inst_28421);

return statearr_28483;
})();
if(cljs.core.truth_(inst_28422__$1)){
var statearr_28484_28563 = state_28439__$1;
(statearr_28484_28563[(1)] = (53));

} else {
var statearr_28485_28564 = state_28439__$1;
(statearr_28485_28564[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (35))){
var inst_28383 = (state_28439[(23)]);
var inst_28383__$1 = (state_28439[(2)]);
var inst_28384 = (inst_28383__$1 == null);
var state_28439__$1 = (function (){var statearr_28486 = state_28439;
(statearr_28486[(23)] = inst_28383__$1);

return statearr_28486;
})();
if(cljs.core.truth_(inst_28384)){
var statearr_28487_28565 = state_28439__$1;
(statearr_28487_28565[(1)] = (41));

} else {
var statearr_28488_28566 = state_28439__$1;
(statearr_28488_28566[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28439,(18),Error,null,(17));
var inst_28346 = cljs.core.PersistentVector.EMPTY_NODE;
var state_28439__$1 = (function (){var statearr_28489 = state_28439;
(statearr_28489[(19)] = inst_28346);

return statearr_28489;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_28490_28567 = state_28439__$1;
(statearr_28490_28567[(1)] = (20));

} else {
var statearr_28491_28568 = state_28439__$1;
(statearr_28491_28568[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (11))){
var state_28439__$1 = state_28439;
var statearr_28492_28569 = state_28439__$1;
(statearr_28492_28569[(2)] = true);

(statearr_28492_28569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (9))){
var state_28439__$1 = state_28439;
var statearr_28493_28570 = state_28439__$1;
(statearr_28493_28570[(2)] = false);

(statearr_28493_28570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (5))){
var state_28439__$1 = state_28439;
var statearr_28494_28571 = state_28439__$1;
(statearr_28494_28571[(2)] = null);

(statearr_28494_28571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (14))){
var inst_28311 = (state_28439[(10)]);
var inst_28334 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28311);
var state_28439__$1 = state_28439;
var statearr_28495_28572 = state_28439__$1;
(statearr_28495_28572[(2)] = inst_28334);

(statearr_28495_28572[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (45))){
var state_28439__$1 = state_28439;
var statearr_28496_28573 = state_28439__$1;
(statearr_28496_28573[(2)] = null);

(statearr_28496_28573[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (53))){
var inst_28420 = (state_28439[(20)]);
var inst_28398 = (state_28439[(14)]);
var inst_28396 = (state_28439[(17)]);
var inst_28312 = (state_28439[(7)]);
var inst_28422 = (state_28439[(21)]);
var inst_28338 = (state_28439[(8)]);
var inst_28337 = (state_28439[(9)]);
var inst_28311 = (state_28439[(10)]);
var inst_28310 = (state_28439[(11)]);
var inst_28313 = (state_28439[(12)]);
var inst_28421 = (state_28439[(22)]);
var inst_28424 = (function (){var p = inst_28312;
var _QMARK_error = inst_28398;
var v = inst_28311;
var vec__28305 = inst_28310;
var _ = inst_28421;
var vec__28400 = inst_28420;
var e2 = inst_28422;
var _QMARK_error2 = inst_28422;
var event_msg = inst_28337;
var map__28316 = inst_28337;
var e = inst_28398;
var temp__4657__auto__ = inst_28422;
var vec__28317 = inst_28396;
var event = inst_28338;
var stop_QMARK_ = inst_28313;
return ((function (p,_QMARK_error,v,vec__28305,_,vec__28400,e2,_QMARK_error2,event_msg,map__28316,e,temp__4657__auto__,vec__28317,event,stop_QMARK_,inst_28420,inst_28398,inst_28396,inst_28312,inst_28422,inst_28338,inst_28337,inst_28311,inst_28310,inst_28313,inst_28421,state_val_28440,c__27170__auto___28524,map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(p,_QMARK_error,v,vec__28305,_,vec__28400,e2,_QMARK_error2,event_msg,map__28316,e,temp__4657__auto__,vec__28317,event,stop_QMARK_,inst_28420,inst_28398,inst_28396,inst_28312,inst_28422,inst_28338,inst_28337,inst_28311,inst_28310,inst_28313,inst_28421,state_val_28440,c__27170__auto___28524,map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_28425 = (new cljs.core.Delay(inst_28424,null));
var inst_28426 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init3553130493762484784.clj",1408,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_28425,null);
var state_28439__$1 = state_28439;
var statearr_28497_28574 = state_28439__$1;
(statearr_28497_28574[(2)] = inst_28426);

(statearr_28497_28574[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (26))){
var inst_28365 = (state_28439[(15)]);
var inst_28365__$1 = (state_28439[(2)]);
var inst_28366 = (inst_28365__$1 == null);
var state_28439__$1 = (function (){var statearr_28498 = state_28439;
(statearr_28498[(15)] = inst_28365__$1);

return statearr_28498;
})();
if(cljs.core.truth_(inst_28366)){
var statearr_28499_28575 = state_28439__$1;
(statearr_28499_28575[(1)] = (32));

} else {
var statearr_28500_28576 = state_28439__$1;
(statearr_28500_28576[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (16))){
var inst_28337 = (state_28439[(9)]);
var inst_28337__$1 = (state_28439[(2)]);
var inst_28338 = cljs.core.get.call(null,inst_28337__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_28439__$1 = (function (){var statearr_28501 = state_28439;
(statearr_28501[(8)] = inst_28338);

(statearr_28501[(9)] = inst_28337__$1);

return statearr_28501;
})();
var statearr_28502_28577 = state_28439__$1;
(statearr_28502_28577[(2)] = null);

(statearr_28502_28577[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (38))){
var state_28439__$1 = state_28439;
var statearr_28503_28578 = state_28439__$1;
(statearr_28503_28578[(2)] = null);

(statearr_28503_28578[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (30))){
var state_28439__$1 = state_28439;
var statearr_28504_28579 = state_28439__$1;
(statearr_28504_28579[(2)] = taoensso.truss.impl._dummy_error);

(statearr_28504_28579[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (10))){
var inst_28332 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
if(cljs.core.truth_(inst_28332)){
var statearr_28505_28580 = state_28439__$1;
(statearr_28505_28580[(1)] = (14));

} else {
var statearr_28506_28581 = state_28439__$1;
(statearr_28506_28581[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (18))){
var inst_28339 = (state_28439[(2)]);
var inst_28340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28341 = [null,inst_28339];
var inst_28342 = (new cljs.core.PersistentVector(null,2,(5),inst_28340,inst_28341,null));
var state_28439__$1 = state_28439;
var statearr_28507_28582 = state_28439__$1;
(statearr_28507_28582[(2)] = inst_28342);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (52))){
var inst_28408 = (state_28439[(24)]);
var inst_28416 = (state_28439[(2)]);
var inst_28417 = [inst_28416,null];
var inst_28418 = (new cljs.core.PersistentVector(null,2,(5),inst_28408,inst_28417,null));
var state_28439__$1 = state_28439;
var statearr_28508_28583 = state_28439__$1;
(statearr_28508_28583[(2)] = inst_28418);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (42))){
var inst_28337 = (state_28439[(9)]);
var inst_28383 = (state_28439[(23)]);
var inst_28387 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",inst_28337,inst_28383,null);
var state_28439__$1 = state_28439;
var statearr_28509_28584 = state_28439__$1;
(statearr_28509_28584[(2)] = inst_28387);

(statearr_28509_28584[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (37))){
var inst_28337 = (state_28439[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28439,(36),Error,null,(35));
var inst_28377 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_28337);
var state_28439__$1 = state_28439;
if(cljs.core.truth_(inst_28377)){
var statearr_28510_28585 = state_28439__$1;
(statearr_28510_28585[(1)] = (38));

} else {
var statearr_28511_28586 = state_28439__$1;
(statearr_28511_28586[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (8))){
var inst_28311 = (state_28439[(10)]);
var inst_28322 = inst_28311.cljs$lang$protocol_mask$partition0$;
var inst_28323 = (inst_28322 & (64));
var inst_28324 = inst_28311.cljs$core$ISeq$;
var inst_28325 = (inst_28323) || (inst_28324);
var state_28439__$1 = state_28439;
if(cljs.core.truth_(inst_28325)){
var statearr_28512_28587 = state_28439__$1;
(statearr_28512_28587[(1)] = (11));

} else {
var statearr_28513_28588 = state_28439__$1;
(statearr_28513_28588[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (49))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28439,(48),Error,null,(47));
var inst_28408 = cljs.core.PersistentVector.EMPTY_NODE;
var state_28439__$1 = (function (){var statearr_28514 = state_28439;
(statearr_28514[(24)] = inst_28408);

return statearr_28514;
})();
if(cljs.core.truth_(error_handler)){
var statearr_28515_28589 = state_28439__$1;
(statearr_28515_28589[(1)] = (50));

} else {
var statearr_28516_28590 = state_28439__$1;
(statearr_28516_28590[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27170__auto___28524,map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__27149__auto__,c__27170__auto___28524,map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__27150__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__27150__auto____0 = (function (){
var statearr_28520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28520[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__27150__auto__);

(statearr_28520[(1)] = (1));

return statearr_28520;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__27150__auto____1 = (function (state_28439){
while(true){
var ret_value__27151__auto__ = (function (){try{while(true){
var result__27152__auto__ = switch__27149__auto__.call(null,state_28439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27152__auto__;
}
break;
}
}catch (e28521){if((e28521 instanceof Object)){
var ex__27153__auto__ = e28521;
var statearr_28522_28591 = state_28439;
(statearr_28522_28591[(5)] = ex__27153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28592 = state_28439;
state_28439 = G__28592;
continue;
} else {
return ret_value__27151__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__27150__auto__ = function(state_28439){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__27150__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__27150__auto____1.call(this,state_28439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__27150__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__27150__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__27150__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__27150__auto__;
})()
;})(switch__27149__auto__,c__27170__auto___28524,map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__27172__auto__ = (function (){var statearr_28523 = f__27171__auto__.call(null);
(statearr_28523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___28524);

return statearr_28523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___28524,map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__28302,map__28302__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   log any errors. Returns a `(fn stop! [])`.
 * 
 *   For performance, you'll likely want your `event-msg-handler` fn to be
 *   non-blocking (at least for slow handling operations). Clojure offers
 *   a rich variety of tools here including futures, agents, core.async,
 *   etc.
 * 
 *   Advanced users may also prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__22784__auto__ = [];
var len__22777__auto___28600 = arguments.length;
var i__22778__auto___28601 = (0);
while(true){
if((i__22778__auto___28601 < len__22777__auto___28600)){
args__22784__auto__.push((arguments[i__22778__auto___28601]));

var G__28602 = (i__22778__auto___28601 + (1));
i__22778__auto___28601 = G__28602;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((2) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22785__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__28596){
var vec__28597 = p__28596;
var map__28598 = cljs.core.nth.call(null,vec__28597,(0),null);
var map__28598__$1 = ((((!((map__28598 == null)))?((((map__28598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28598):map__28598);
var opts = map__28598__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__28598__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__28598__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq28593){
var G__28594 = cljs.core.first.call(null,seq28593);
var seq28593__$1 = cljs.core.next.call(null,seq28593);
var G__28595 = cljs.core.first.call(null,seq28593__$1);
var seq28593__$2 = cljs.core.next.call(null,seq28593__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28594,G__28595,seq28593__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   log any errors. Returns a `(fn stop! [])`.
 * 
 *   For performance, you'll likely want your `event-msg-handler` fn to be
 *   non-blocking (at least for slow handling operations). Clojure offers
 *   a rich variety of tools here including futures, agents, core.async,
 *   etc.
 * 
 *   Advanced users may also prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__22784__auto__ = [];
var len__22777__auto___28610 = arguments.length;
var i__22778__auto___28611 = (0);
while(true){
if((i__22778__auto___28611 < len__22777__auto___28610)){
args__22784__auto__.push((arguments[i__22778__auto___28611]));

var G__28612 = (i__22778__auto___28611 + (1));
i__22778__auto___28611 = G__28612;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((2) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22785__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__28606){
var vec__28607 = p__28606;
var map__28608 = cljs.core.nth.call(null,vec__28607,(0),null);
var map__28608__$1 = ((((!((map__28608 == null)))?((((map__28608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28608):map__28608);
var opts = map__28608__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq28603){
var G__28604 = cljs.core.first.call(null,seq28603);
var seq28603__$1 = cljs.core.next.call(null,seq28603);
var G__28605 = cljs.core.first.call(null,seq28603__$1);
var seq28603__$2 = cljs.core.next.call(null,seq28603__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28604,G__28605,seq28603__$2);
});
taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;
/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__28613,websocket_QMARK_){
var map__28616 = p__28613;
var map__28616__$1 = ((((!((map__28616 == null)))?((((map__28616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28616):map__28616);
var location = map__28616__$1;
var protocol = cljs.core.get.call(null,map__28616__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__28616__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__28616__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__21707__auto__ = path;
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1466069035563