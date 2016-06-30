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
var vec__29261 = x;
var ev_id = cljs.core.nth.call(null,vec__29261,(0),null);
var _ = cljs.core.nth.call(null,vec__29261,(1),null);
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
var err_msg = [cljs.core.str((function (){var G__29263 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__29263) {
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
var and__21701__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__21701__auto__){
var and__21701__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__21701__auto____$1)){
var map__29267 = x;
var map__29267__$1 = ((((!((map__29267 == null)))?((((map__29267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29267):map__29267);
var ch_recv = cljs.core.get.call(null,map__29267__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__29267__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__29267__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__29267__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__21701__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__21701__auto____$2){
var and__21701__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__21701__auto____$3){
var and__21701__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__21701__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__21701__auto____$4;
}
} else {
return and__21701__auto____$3;
}
} else {
return and__21701__auto____$2;
}
} else {
return and__21701__auto____$1;
}
} else {
return and__21701__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__21701__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__21701__auto__){
var and__21701__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__21701__auto____$1)){
var map__29271 = x;
var map__29271__$1 = ((((!((map__29271 == null)))?((((map__29271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29271):map__29271);
var ch_recv = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__21701__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__21701__auto____$2){
var and__21701__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__21701__auto____$3){
var and__21701__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__21701__auto____$4){
var and__21701__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__21701__auto____$5){
var and__21701__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__21701__auto____$6){
var and__21701__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__21701__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__21701__auto____$7;
}
} else {
return and__21701__auto____$6;
}
} else {
return and__21701__auto____$5;
}
} else {
return and__21701__auto____$4;
}
} else {
return and__21701__auto____$3;
}
} else {
return and__21701__auto____$2;
}
} else {
return and__21701__auto____$1;
}
} else {
return and__21701__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__29273){
var map__29277 = p__29273;
var map__29277__$1 = ((((!((map__29277 == null)))?((((map__29277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29277):map__29277);
var ev_msg = map__29277__$1;
var event = cljs.core.get.call(null,map__29277__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__29277__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__29279 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__29279,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__29279,(1),null);
var valid_event = vec__29279;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",161,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29279,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__29277,map__29277__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__29279,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__29277,map__29277__$1,ev_msg,event,_QMARK_reply_fn))
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
var e_29286 = (function (){try{if(typeof prefixed_pstr === 'string'){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29283){if((e29283 instanceof Error)){
var e = e29283;
return e;
} else {
throw e29283;

}
}})();
if((e_29286 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",prefixed_pstr,e_29286,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e29285){var t = e29285;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",182,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__29284 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__29284,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__29284,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",188,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__29284,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__29284,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
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
var args29287 = [];
var len__22783__auto___29290 = arguments.length;
var i__22784__auto___29291 = (0);
while(true){
if((i__22784__auto___29291 < len__22783__auto___29290)){
args29287.push((arguments[i__22784__auto___29291]));

var G__29292 = (i__22784__auto___29291 + (1));
i__22784__auto___29291 = G__29292;
continue;
} else {
}
break;
}

var G__29289 = args29287.length;
switch (G__29289) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29287.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",198,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
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

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__22319__auto__,writer__22320__auto__,opt__22321__auto__){
return cljs.core._write.call(null,writer__22320__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__29294_SHARP_){
if(!((p1__29294_SHARP_ == null))){
if((false) || (p1__29294_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__29294_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__29294_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__29294_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29297){if((e29297 instanceof Error)){
var e = e29297;
return e;
} else {
throw e29297;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__29294#] (satisfies? interfaces/IPacker p1__29294#)) x)",x,e,null);
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
var args__22790__auto__ = [];
var len__22783__auto___29573 = arguments.length;
var i__22784__auto___29574 = (0);
while(true){
if((i__22784__auto___29574 < len__22783__auto___29573)){
args__22790__auto__.push((arguments[i__22784__auto___29574]));

var G__29575 = (i__22784__auto___29574 + (1));
i__22784__auto___29574 = G__29575;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__29302){
var vec__29303 = p__29302;
var map__29304 = cljs.core.nth.call(null,vec__29303,(0),null);
var map__29304__$1 = ((((!((map__29304 == null)))?((((map__29304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29304):map__29304);
var recv_buf_or_n = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__21713__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
var or__21713__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__21713__auto____$1)){
return or__21713__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29306){if((e29306 instanceof Error)){
var e = e29306;
return e;
} else {
throw e29306;

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
}catch (e29307){if((e29307 instanceof Error)){
var e = e29307;
return e;
} else {
throw e29307;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_29576 = (function (){try{if(((function (vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__29299_SHARP_){
if(!((p1__29299_SHARP_ == null))){
if((false) || (p1__29299_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__29299_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__29299_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__29299_SHARP_);
}
});})(vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29308){if((e29308 instanceof Error)){
var e = e29308;
return e;
} else {
throw e29308;

}
}})();
if((e_29576 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__29299#] (satisfies? interfaces/IServerChanAdapter p1__29299#)) web-server-ch-adapter)",web_server_ch_adapter,e_29576,null);
}

var max_ms_29577 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_29577)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_29577)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_29577], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__21713__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__29578 = null;
var G__29578__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__29310 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__29310,(0),null);
var _udt = cljs.core.nth.call(null,vec__29310,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__29578__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__29578 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__29578__3.call(this,conn_type,uid,client_id);
case 4:
return G__29578__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29578.cljs$core$IFn$_invoke$arity$3 = G__29578__3;
G__29578.cljs$core$IFn$_invoke$arity$4 = G__29578__4;
return G__29578;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,uid))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29311){if((e29311 instanceof Error)){
var e = e29311;
return e;
} else {
throw e29311;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__29312){
var map__29313 = p__29312;
var map__29313__$1 = ((((!((map__29313 == null)))?((((map__29313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29313):map__29313);
var old_m = map__29313__$1;
var ws = cljs.core.get.call(null,map__29313__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__29313__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__29313__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__29315 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__29315) {
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,uid))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29316){if((e29316 instanceof Error)){
var e = e29316;
return e;
} else {
throw e29316;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__29317){
var map__29318 = p__29317;
var map__29318__$1 = ((((!((map__29318 == null)))?((((map__29318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29318):map__29318);
var old_m = map__29318__$1;
var ws = cljs.core.get.call(null,map__29318__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__29318__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__29318__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__29580__delegate = function (user_id,ev,p__29320){
var vec__29321 = p__29320;
var map__29322 = cljs.core.nth.call(null,vec__29321,(0),null);
var map__29322__$1 = ((((!((map__29322 == null)))?((((map__29322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29322):map__29322);
var opts = map__29322__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__29322__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_29581 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __29582 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",377,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_29581,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_29581,ev], null);
});})(uid_29581,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __29583__$1 = (cljs.core.truth_(uid_29581)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __29584__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_29585 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__29586 = ((function (uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__29324 = cljs.core.get.call(null,m,uid_29581);
var ___$3 = cljs.core.nth.call(null,vec__29324,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__29324,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_29585)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_29581),cljs.core.get.call(null,m,uid_29581));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__29325 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__29325,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__29325,(1),null);
var e_29587 = (function (){try{if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29326){if((e29326 instanceof Error)){
var e = e29326;
return e;
} else {
throw e29326;

}
}})();
if((e_29587 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",buffered_evs,e_29587,null);
}

var e_29588 = (function (){try{if(cljs.core.set_QMARK_.call(null,ev_uuids)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29327){if((e29327 instanceof Error)){
var e = e29327;
return e;
} else {
throw e29327;

}
}})();
if((e_29588 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",ev_uuids,e_29588,null);
}

var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",413,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__29325,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__29325,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__29328 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__29328) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_29581,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_29581,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_29581], null);
});})(uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__29586.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__29586.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__29329_29590 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_29581], null))));
var chunk__29330_29591 = null;
var count__29331_29592 = (0);
var i__29332_29593 = (0);
while(true){
if((i__29332_29593 < count__29331_29592)){
var vec__29333_29594 = cljs.core._nth.call(null,chunk__29330_29591,i__29332_29593);
var _QMARK_sch_29595 = cljs.core.nth.call(null,vec__29333_29594,(0),null);
var _udt_29596 = cljs.core.nth.call(null,vec__29333_29594,(1),null);
var temp__4657__auto___29597 = _QMARK_sch_29595;
if(cljs.core.truth_(temp__4657__auto___29597)){
var sch_29598 = temp__4657__auto___29597;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_29598);
} else {
}

var G__29599 = seq__29329_29590;
var G__29600 = chunk__29330_29591;
var G__29601 = count__29331_29592;
var G__29602 = (i__29332_29593 + (1));
seq__29329_29590 = G__29599;
chunk__29330_29591 = G__29600;
count__29331_29592 = G__29601;
i__29332_29593 = G__29602;
continue;
} else {
var temp__4657__auto___29603 = cljs.core.seq.call(null,seq__29329_29590);
if(temp__4657__auto___29603){
var seq__29329_29604__$1 = temp__4657__auto___29603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29329_29604__$1)){
var c__22524__auto___29605 = cljs.core.chunk_first.call(null,seq__29329_29604__$1);
var G__29606 = cljs.core.chunk_rest.call(null,seq__29329_29604__$1);
var G__29607 = c__22524__auto___29605;
var G__29608 = cljs.core.count.call(null,c__22524__auto___29605);
var G__29609 = (0);
seq__29329_29590 = G__29606;
chunk__29330_29591 = G__29607;
count__29331_29592 = G__29608;
i__29332_29593 = G__29609;
continue;
} else {
var vec__29334_29610 = cljs.core.first.call(null,seq__29329_29604__$1);
var _QMARK_sch_29611 = cljs.core.nth.call(null,vec__29334_29610,(0),null);
var _udt_29612 = cljs.core.nth.call(null,vec__29334_29610,(1),null);
var temp__4657__auto___29613__$1 = _QMARK_sch_29611;
if(cljs.core.truth_(temp__4657__auto___29613__$1)){
var sch_29614 = temp__4657__auto___29613__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_29614);
} else {
}

var G__29615 = cljs.core.next.call(null,seq__29329_29604__$1);
var G__29616 = null;
var G__29617 = (0);
var G__29618 = (0);
seq__29329_29590 = G__29615;
chunk__29330_29591 = G__29616;
count__29331_29592 = G__29617;
i__29332_29593 = G__29618;
continue;
}
} else {
}
}
break;
}

var seq__29335_29619 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_29581], null))));
var chunk__29336_29620 = null;
var count__29337_29621 = (0);
var i__29338_29622 = (0);
while(true){
if((i__29338_29622 < count__29337_29621)){
var vec__29339_29623 = cljs.core._nth.call(null,chunk__29336_29620,i__29338_29622);
var _QMARK_sch_29624 = cljs.core.nth.call(null,vec__29339_29623,(0),null);
var _udt_29625 = cljs.core.nth.call(null,vec__29339_29623,(1),null);
var temp__4657__auto___29626 = _QMARK_sch_29624;
if(cljs.core.truth_(temp__4657__auto___29626)){
var sch_29627 = temp__4657__auto___29626;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_29627);
} else {
}

var G__29628 = seq__29335_29619;
var G__29629 = chunk__29336_29620;
var G__29630 = count__29337_29621;
var G__29631 = (i__29338_29622 + (1));
seq__29335_29619 = G__29628;
chunk__29336_29620 = G__29629;
count__29337_29621 = G__29630;
i__29338_29622 = G__29631;
continue;
} else {
var temp__4657__auto___29632 = cljs.core.seq.call(null,seq__29335_29619);
if(temp__4657__auto___29632){
var seq__29335_29633__$1 = temp__4657__auto___29632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29335_29633__$1)){
var c__22524__auto___29634 = cljs.core.chunk_first.call(null,seq__29335_29633__$1);
var G__29635 = cljs.core.chunk_rest.call(null,seq__29335_29633__$1);
var G__29636 = c__22524__auto___29634;
var G__29637 = cljs.core.count.call(null,c__22524__auto___29634);
var G__29638 = (0);
seq__29335_29619 = G__29635;
chunk__29336_29620 = G__29636;
count__29337_29621 = G__29637;
i__29338_29622 = G__29638;
continue;
} else {
var vec__29340_29639 = cljs.core.first.call(null,seq__29335_29633__$1);
var _QMARK_sch_29640 = cljs.core.nth.call(null,vec__29340_29639,(0),null);
var _udt_29641 = cljs.core.nth.call(null,vec__29340_29639,(1),null);
var temp__4657__auto___29642__$1 = _QMARK_sch_29640;
if(cljs.core.truth_(temp__4657__auto___29642__$1)){
var sch_29643 = temp__4657__auto___29642__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_29643);
} else {
}

var G__29644 = cljs.core.next.call(null,seq__29335_29633__$1);
var G__29645 = null;
var G__29646 = (0);
var G__29647 = (0);
seq__29335_29619 = G__29644;
chunk__29336_29620 = G__29645;
count__29337_29621 = G__29646;
i__29338_29622 = G__29647;
continue;
}
} else {
}
}
break;
}
} else {
var seq__29341_29648 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__29342_29649 = null;
var count__29343_29650 = (0);
var i__29344_29651 = (0);
while(true){
if((i__29344_29651 < count__29343_29650)){
var conn_type_29652 = cljs.core._nth.call(null,chunk__29342_29649,i__29344_29651);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_29652,uid_29581], null),((function (seq__29341_29648,chunk__29342_29649,count__29343_29650,i__29344_29651,conn_type_29652,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_29585], true)], null);
} else {
var vec__29345 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__29345,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__29345,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_29585)], null);
}
});})(seq__29341_29648,chunk__29342_29649,count__29343_29650,i__29344_29651,conn_type_29652,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__29653 = seq__29341_29648;
var G__29654 = chunk__29342_29649;
var G__29655 = count__29343_29650;
var G__29656 = (i__29344_29651 + (1));
seq__29341_29648 = G__29653;
chunk__29342_29649 = G__29654;
count__29343_29650 = G__29655;
i__29344_29651 = G__29656;
continue;
} else {
var temp__4657__auto___29657 = cljs.core.seq.call(null,seq__29341_29648);
if(temp__4657__auto___29657){
var seq__29341_29658__$1 = temp__4657__auto___29657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29341_29658__$1)){
var c__22524__auto___29659 = cljs.core.chunk_first.call(null,seq__29341_29658__$1);
var G__29660 = cljs.core.chunk_rest.call(null,seq__29341_29658__$1);
var G__29661 = c__22524__auto___29659;
var G__29662 = cljs.core.count.call(null,c__22524__auto___29659);
var G__29663 = (0);
seq__29341_29648 = G__29660;
chunk__29342_29649 = G__29661;
count__29343_29650 = G__29662;
i__29344_29651 = G__29663;
continue;
} else {
var conn_type_29664 = cljs.core.first.call(null,seq__29341_29658__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_29664,uid_29581], null),((function (seq__29341_29648,chunk__29342_29649,count__29343_29650,i__29344_29651,conn_type_29664,seq__29341_29658__$1,temp__4657__auto___29657,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_29585], true)], null);
} else {
var vec__29346 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__29346,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__29346,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_29585)], null);
}
});})(seq__29341_29648,chunk__29342_29649,count__29343_29650,i__29344_29651,conn_type_29664,seq__29341_29658__$1,temp__4657__auto___29657,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__29665 = cljs.core.next.call(null,seq__29341_29658__$1);
var G__29666 = null;
var G__29667 = (0);
var G__29668 = (0);
seq__29341_29648 = G__29665;
chunk__29342_29649 = G__29666;
count__29343_29650 = G__29667;
i__29344_29651 = G__29668;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__29586.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__29586.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_29669 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_29670 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__23880__auto___29671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___29671,ws_timeout_29669,ajax_timeout_29670,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___29671,ws_timeout_29669,ajax_timeout_29670,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29351){
var state_val_29352 = (state_29351[(1)]);
if((state_val_29352 === (1))){
var state_29351__$1 = state_29351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29351__$1,(2),ws_timeout_29669);
} else {
if((state_val_29352 === (2))){
var inst_29348 = (state_29351[(2)]);
var inst_29349 = flush_buffer_BANG__29586.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_29351__$1 = (function (){var statearr_29353 = state_29351;
(statearr_29353[(7)] = inst_29348);

return statearr_29353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29351__$1,inst_29349);
} else {
return null;
}
}
});})(c__23880__auto___29671,ws_timeout_29669,ajax_timeout_29670,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__23768__auto__,c__23880__auto___29671,ws_timeout_29669,ajax_timeout_29670,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__23769__auto__ = null;
var taoensso$sente$state_machine__23769__auto____0 = (function (){
var statearr_29357 = [null,null,null,null,null,null,null,null];
(statearr_29357[(0)] = taoensso$sente$state_machine__23769__auto__);

(statearr_29357[(1)] = (1));

return statearr_29357;
});
var taoensso$sente$state_machine__23769__auto____1 = (function (state_29351){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_29351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e29358){if((e29358 instanceof Object)){
var ex__23772__auto__ = e29358;
var statearr_29359_29672 = state_29351;
(statearr_29359_29672[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29673 = state_29351;
state_29351 = G__29673;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
taoensso$sente$state_machine__23769__auto__ = function(state_29351){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23769__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23769__auto____1.call(this,state_29351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23769__auto____0;
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23769__auto____1;
return taoensso$sente$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___29671,ws_timeout_29669,ajax_timeout_29670,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__23882__auto__ = (function (){var statearr_29360 = f__23881__auto__.call(null);
(statearr_29360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___29671);

return statearr_29360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___29671,ws_timeout_29669,ajax_timeout_29670,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__23880__auto___29674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___29674,ws_timeout_29669,ajax_timeout_29670,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___29674,ws_timeout_29669,ajax_timeout_29670,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29365){
var state_val_29366 = (state_29365[(1)]);
if((state_val_29366 === (1))){
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29365__$1,(2),ajax_timeout_29670);
} else {
if((state_val_29366 === (2))){
var inst_29362 = (state_29365[(2)]);
var inst_29363 = flush_buffer_BANG__29586.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_29365__$1 = (function (){var statearr_29367 = state_29365;
(statearr_29367[(7)] = inst_29362);

return statearr_29367;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29365__$1,inst_29363);
} else {
return null;
}
}
});})(c__23880__auto___29674,ws_timeout_29669,ajax_timeout_29670,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__23768__auto__,c__23880__auto___29674,ws_timeout_29669,ajax_timeout_29670,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__23769__auto__ = null;
var taoensso$sente$state_machine__23769__auto____0 = (function (){
var statearr_29371 = [null,null,null,null,null,null,null,null];
(statearr_29371[(0)] = taoensso$sente$state_machine__23769__auto__);

(statearr_29371[(1)] = (1));

return statearr_29371;
});
var taoensso$sente$state_machine__23769__auto____1 = (function (state_29365){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_29365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e29372){if((e29372 instanceof Object)){
var ex__23772__auto__ = e29372;
var statearr_29373_29675 = state_29365;
(statearr_29373_29675[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29676 = state_29365;
state_29365 = G__29676;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
taoensso$sente$state_machine__23769__auto__ = function(state_29365){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23769__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23769__auto____1.call(this,state_29365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23769__auto____0;
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23769__auto____1;
return taoensso$sente$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___29674,ws_timeout_29669,ajax_timeout_29670,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__23882__auto__ = (function (){var statearr_29374 = f__23881__auto__.call(null);
(statearr_29374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___29674);

return statearr_29374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___29674,ws_timeout_29669,ajax_timeout_29670,uid_29581,__29582,__29583__$1,__29584__$2,ev_uuid_29585,flush_buffer_BANG__29586,vec__29321,map__29322,map__29322__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__29580 = function (user_id,ev,var_args){
var p__29320 = null;
if (arguments.length > 2) {
var G__29677__i = 0, G__29677__a = new Array(arguments.length -  2);
while (G__29677__i < G__29677__a.length) {G__29677__a[G__29677__i] = arguments[G__29677__i + 2]; ++G__29677__i;}
  p__29320 = new cljs.core.IndexedSeq(G__29677__a,0);
} 
return G__29580__delegate.call(this,user_id,ev,p__29320);};
G__29580.cljs$lang$maxFixedArity = 2;
G__29580.cljs$lang$applyTo = (function (arglist__29678){
var user_id = cljs.core.first(arglist__29678);
arglist__29678 = cljs.core.next(arglist__29678);
var ev = cljs.core.first(arglist__29678);
var p__29320 = cljs.core.rest(arglist__29678);
return G__29580__delegate(user_id,ev,p__29320);
});
G__29580.cljs$core$IFn$_invoke$arity$variadic = G__29580__delegate;
return G__29580;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__29375 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__29375,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__29375,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__29375,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",493,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__29375,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__29375,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__29375,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__29375,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__29375,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29381){
var state_val_29382 = (state_29381[(1)]);
if((state_val_29382 === (1))){
var inst_29376 = cljs.core.async.timeout.call(null,ms);
var state_29381__$1 = state_29381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29381__$1,(2),inst_29376);
} else {
if((state_val_29382 === (2))){
var inst_29378 = (state_29381[(2)]);
var inst_29379 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_29381__$1 = (function (){var statearr_29383 = state_29381;
(statearr_29383[(7)] = inst_29378);

return statearr_29383;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29381__$1,inst_29379);
} else {
return null;
}
}
});})(c__23880__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__29375,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__23768__auto__,c__23880__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__29375,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__23769__auto__ = null;
var taoensso$sente$state_machine__23769__auto____0 = (function (){
var statearr_29387 = [null,null,null,null,null,null,null,null];
(statearr_29387[(0)] = taoensso$sente$state_machine__23769__auto__);

(statearr_29387[(1)] = (1));

return statearr_29387;
});
var taoensso$sente$state_machine__23769__auto____1 = (function (state_29381){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_29381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e29388){if((e29388 instanceof Object)){
var ex__23772__auto__ = e29388;
var statearr_29389_29679 = state_29381;
(statearr_29389_29679[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29680 = state_29381;
state_29381 = G__29680;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
taoensso$sente$state_machine__23769__auto__ = function(state_29381){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23769__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23769__auto____1.call(this,state_29381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23769__auto____0;
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23769__auto____1;
return taoensso$sente$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__29375,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__23882__auto__ = (function (){var statearr_29390 = f__23881__auto__.call(null);
(statearr_29390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_29390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__29375,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__23880__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",538,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",558,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
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
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29424){
var state_val_29425 = (state_29424[(1)]);
if((state_val_29425 === (7))){
var inst_29420 = (state_29424[(2)]);
var state_29424__$1 = state_29424;
var statearr_29426_29681 = state_29424__$1;
(statearr_29426_29681[(2)] = inst_29420);

(statearr_29426_29681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (1))){
var inst_29391 = udt_open;
var state_29424__$1 = (function (){var statearr_29427 = state_29424;
(statearr_29427[(7)] = inst_29391);

return statearr_29427;
})();
var statearr_29428_29682 = state_29424__$1;
(statearr_29428_29682[(2)] = null);

(statearr_29428_29682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (4))){
var inst_29400 = (state_29424[(8)]);
var inst_29395 = (state_29424[(2)]);
var inst_29396 = cljs.core.deref.call(null,conns_);
var inst_29397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29398 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_29399 = (new cljs.core.PersistentVector(null,3,(5),inst_29397,inst_29398,null));
var inst_29400__$1 = cljs.core.get_in.call(null,inst_29396,inst_29399);
var state_29424__$1 = (function (){var statearr_29429 = state_29424;
(statearr_29429[(9)] = inst_29395);

(statearr_29429[(8)] = inst_29400__$1);

return statearr_29429;
})();
if(cljs.core.truth_(inst_29400__$1)){
var statearr_29430_29683 = state_29424__$1;
(statearr_29430_29683[(1)] = (5));

} else {
var statearr_29431_29684 = state_29424__$1;
(statearr_29431_29684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (13))){
var inst_29404 = (state_29424[(10)]);
var inst_29413 = (state_29424[(2)]);
var inst_29391 = inst_29404;
var state_29424__$1 = (function (){var statearr_29432 = state_29424;
(statearr_29432[(11)] = inst_29413);

(statearr_29432[(7)] = inst_29391);

return statearr_29432;
})();
var statearr_29433_29685 = state_29424__$1;
(statearr_29433_29685[(2)] = null);

(statearr_29433_29685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (6))){
var state_29424__$1 = state_29424;
var statearr_29434_29686 = state_29424__$1;
(statearr_29434_29686[(2)] = null);

(statearr_29434_29686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (3))){
var inst_29422 = (state_29424[(2)]);
var state_29424__$1 = state_29424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29424__$1,inst_29422);
} else {
if((state_val_29425 === (12))){
var state_29424__$1 = state_29424;
var statearr_29435_29687 = state_29424__$1;
(statearr_29435_29687[(2)] = null);

(statearr_29435_29687[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (2))){
var inst_29393 = cljs.core.async.timeout.call(null,ms);
var state_29424__$1 = state_29424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29424__$1,(4),inst_29393);
} else {
if((state_val_29425 === (11))){
var inst_29409 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_29410 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_29409);
var state_29424__$1 = state_29424;
var statearr_29436_29688 = state_29424__$1;
(statearr_29436_29688[(2)] = inst_29410);

(statearr_29436_29688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (9))){
var state_29424__$1 = state_29424;
var statearr_29437_29689 = state_29424__$1;
(statearr_29437_29689[(2)] = null);

(statearr_29437_29689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (5))){
var inst_29400 = (state_29424[(8)]);
var inst_29403 = cljs.core.nth.call(null,inst_29400,(0),null);
var inst_29404 = cljs.core.nth.call(null,inst_29400,(1),null);
var inst_29405 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_29424__$1 = (function (){var statearr_29438 = state_29424;
(statearr_29438[(10)] = inst_29404);

(statearr_29438[(12)] = inst_29403);

return statearr_29438;
})();
if(cljs.core.truth_(inst_29405)){
var statearr_29439_29690 = state_29424__$1;
(statearr_29439_29690[(1)] = (8));

} else {
var statearr_29440_29691 = state_29424__$1;
(statearr_29440_29691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (10))){
var inst_29417 = (state_29424[(2)]);
var state_29424__$1 = state_29424;
var statearr_29441_29692 = state_29424__$1;
(statearr_29441_29692[(2)] = inst_29417);

(statearr_29441_29692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (8))){
var inst_29404 = (state_29424[(10)]);
var inst_29391 = (state_29424[(7)]);
var inst_29407 = cljs.core._EQ_.call(null,inst_29404,inst_29391);
var state_29424__$1 = state_29424;
if(inst_29407){
var statearr_29442_29693 = state_29424__$1;
(statearr_29442_29693[(1)] = (11));

} else {
var statearr_29443_29694 = state_29424__$1;
(statearr_29443_29694[(1)] = (12));

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
});})(c__23880__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__23768__auto__,c__23880__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__23769__auto__ = null;
var taoensso$sente$state_machine__23769__auto____0 = (function (){
var statearr_29447 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29447[(0)] = taoensso$sente$state_machine__23769__auto__);

(statearr_29447[(1)] = (1));

return statearr_29447;
});
var taoensso$sente$state_machine__23769__auto____1 = (function (state_29424){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_29424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e29448){if((e29448 instanceof Object)){
var ex__23772__auto__ = e29448;
var statearr_29449_29695 = state_29424;
(statearr_29449_29695[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29696 = state_29424;
state_29424 = G__29696;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
taoensso$sente$state_machine__23769__auto__ = function(state_29424){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23769__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23769__auto____1.call(this,state_29424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23769__auto____0;
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23769__auto____1;
return taoensso$sente$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__23882__auto__ = (function (){var statearr_29450 = f__23881__auto__.call(null);
(statearr_29450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_29450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__23880__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__21713__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
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
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29474){
var state_val_29475 = (state_29474[(1)]);
if((state_val_29475 === (1))){
var inst_29451 = cljs.core.async.timeout.call(null,ms);
var state_29474__$1 = state_29474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29474__$1,(2),inst_29451);
} else {
if((state_val_29475 === (2))){
var inst_29458 = (state_29474[(7)]);
var inst_29453 = (state_29474[(2)]);
var inst_29454 = cljs.core.deref.call(null,conns_);
var inst_29455 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29456 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_29457 = (new cljs.core.PersistentVector(null,3,(5),inst_29455,inst_29456,null));
var inst_29458__$1 = cljs.core.get_in.call(null,inst_29454,inst_29457);
var state_29474__$1 = (function (){var statearr_29476 = state_29474;
(statearr_29476[(8)] = inst_29453);

(statearr_29476[(7)] = inst_29458__$1);

return statearr_29476;
})();
if(cljs.core.truth_(inst_29458__$1)){
var statearr_29477_29697 = state_29474__$1;
(statearr_29477_29697[(1)] = (3));

} else {
var statearr_29478_29698 = state_29474__$1;
(statearr_29478_29698[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (3))){
var inst_29458 = (state_29474[(7)]);
var inst_29461 = cljs.core.nth.call(null,inst_29458,(0),null);
var inst_29462 = cljs.core.nth.call(null,inst_29458,(1),null);
var inst_29463 = cljs.core._EQ_.call(null,inst_29462,udt_open);
var state_29474__$1 = (function (){var statearr_29479 = state_29474;
(statearr_29479[(9)] = inst_29461);

return statearr_29479;
})();
if(inst_29463){
var statearr_29480_29699 = state_29474__$1;
(statearr_29480_29699[(1)] = (6));

} else {
var statearr_29481_29700 = state_29474__$1;
(statearr_29481_29700[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (4))){
var state_29474__$1 = state_29474;
var statearr_29482_29701 = state_29474__$1;
(statearr_29482_29701[(2)] = null);

(statearr_29482_29701[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (5))){
var inst_29472 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29474__$1,inst_29472);
} else {
if((state_val_29475 === (6))){
var inst_29465 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_29466 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_29465);
var state_29474__$1 = state_29474;
var statearr_29483_29702 = state_29474__$1;
(statearr_29483_29702[(2)] = inst_29466);

(statearr_29483_29702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (7))){
var state_29474__$1 = state_29474;
var statearr_29484_29703 = state_29474__$1;
(statearr_29484_29703[(2)] = null);

(statearr_29484_29703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (8))){
var inst_29469 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
var statearr_29485_29704 = state_29474__$1;
(statearr_29485_29704[(2)] = inst_29469);

(statearr_29485_29704[(1)] = (5));


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
});})(c__23880__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__23768__auto__,c__23880__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__23769__auto__ = null;
var taoensso$sente$state_machine__23769__auto____0 = (function (){
var statearr_29489 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29489[(0)] = taoensso$sente$state_machine__23769__auto__);

(statearr_29489[(1)] = (1));

return statearr_29489;
});
var taoensso$sente$state_machine__23769__auto____1 = (function (state_29474){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_29474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e29490){if((e29490 instanceof Object)){
var ex__23772__auto__ = e29490;
var statearr_29491_29705 = state_29474;
(statearr_29491_29705[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29706 = state_29474;
state_29474 = G__29706;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
taoensso$sente$state_machine__23769__auto__ = function(state_29474){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23769__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23769__auto____1.call(this,state_29474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23769__auto____0;
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23769__auto____1;
return taoensso$sente$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__23882__auto__ = (function (){var statearr_29492 = f__23881__auto__.call(null);
(statearr_29492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_29492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__23880__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__29493 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__29493,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__29493,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__29493,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",616,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29493,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__29493,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__29493,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",625,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29543){
var state_val_29544 = (state_29543[(1)]);
if((state_val_29544 === (7))){
var state_29543__$1 = state_29543;
var statearr_29545_29707 = state_29543__$1;
(statearr_29545_29707[(2)] = null);

(statearr_29545_29707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (1))){
var inst_29494 = cljs.core.async.timeout.call(null,(5000));
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29543__$1,(2),inst_29494);
} else {
if((state_val_29544 === (4))){
var state_29543__$1 = state_29543;
var statearr_29546_29708 = state_29543__$1;
(statearr_29546_29708[(2)] = null);

(statearr_29546_29708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (13))){
var state_29543__$1 = state_29543;
var statearr_29547_29709 = state_29543__$1;
(statearr_29547_29709[(2)] = null);

(statearr_29547_29709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (6))){
var inst_29503 = (state_29543[(7)]);
var inst_29502 = (state_29543[(8)]);
var inst_29504 = (state_29543[(9)]);
var inst_29520 = (state_29543[(10)]);
var inst_29515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29516 = [conn_type,uid,client_id];
var inst_29517 = (new cljs.core.PersistentVector(null,3,(5),inst_29515,inst_29516,null));
var inst_29519 = (function (){var vec__29497 = inst_29502;
var __QMARK_sch = inst_29503;
var udt_t1 = inst_29504;
return ((function (vec__29497,__QMARK_sch,udt_t1,inst_29503,inst_29502,inst_29504,inst_29520,inst_29515,inst_29516,inst_29517,state_val_29544,c__23880__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__29518){
var vec__29548 = p__29518;
var _sch = cljs.core.nth.call(null,vec__29548,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__29548,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__29497,__QMARK_sch,udt_t1,inst_29503,inst_29502,inst_29504,inst_29520,inst_29515,inst_29516,inst_29517,state_val_29544,c__23880__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_29520__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_29517,inst_29519);
var state_29543__$1 = (function (){var statearr_29549 = state_29543;
(statearr_29549[(10)] = inst_29520__$1);

return statearr_29549;
})();
if(cljs.core.truth_(inst_29520__$1)){
var statearr_29550_29710 = state_29543__$1;
(statearr_29550_29710[(1)] = (9));

} else {
var statearr_29551_29711 = state_29543__$1;
(statearr_29551_29711[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (3))){
var inst_29503 = (state_29543[(7)]);
var inst_29502 = (state_29543[(8)]);
var inst_29504 = (state_29543[(9)]);
var inst_29507 = (function (){var vec__29497 = inst_29502;
var __QMARK_sch = inst_29503;
var udt_t1 = inst_29504;
return ((function (vec__29497,__QMARK_sch,udt_t1,inst_29503,inst_29502,inst_29504,state_val_29544,c__23880__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__29497,__QMARK_sch,udt_t1,inst_29503,inst_29502,inst_29504,state_val_29544,c__23880__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_29508 = (new cljs.core.Delay(inst_29507,null));
var inst_29509 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",639,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_29508,null);
var state_29543__$1 = state_29543;
var statearr_29552_29712 = state_29543__$1;
(statearr_29552_29712[(2)] = inst_29509);

(statearr_29552_29712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (12))){
var inst_29529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29530 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_29531 = (new cljs.core.PersistentVector(null,2,(5),inst_29529,inst_29530,null));
var inst_29532 = receive_event_msg_BANG_.call(null,inst_29531);
var state_29543__$1 = state_29543;
var statearr_29553_29713 = state_29543__$1;
(statearr_29553_29713[(2)] = inst_29532);

(statearr_29553_29713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (2))){
var inst_29502 = (state_29543[(8)]);
var inst_29496 = (state_29543[(2)]);
var inst_29498 = cljs.core.deref.call(null,conns_);
var inst_29499 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29500 = [conn_type,uid,client_id];
var inst_29501 = (new cljs.core.PersistentVector(null,3,(5),inst_29499,inst_29500,null));
var inst_29502__$1 = cljs.core.get_in.call(null,inst_29498,inst_29501);
var inst_29503 = cljs.core.nth.call(null,inst_29502__$1,(0),null);
var inst_29504 = cljs.core.nth.call(null,inst_29502__$1,(1),null);
var inst_29505 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_29543__$1 = (function (){var statearr_29554 = state_29543;
(statearr_29554[(7)] = inst_29503);

(statearr_29554[(8)] = inst_29502__$1);

(statearr_29554[(9)] = inst_29504);

(statearr_29554[(11)] = inst_29496);

return statearr_29554;
})();
if(cljs.core.truth_(inst_29505)){
var statearr_29555_29714 = state_29543__$1;
(statearr_29555_29714[(1)] = (3));

} else {
var statearr_29556_29715 = state_29543__$1;
(statearr_29556_29715[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (11))){
var inst_29538 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29557_29716 = state_29543__$1;
(statearr_29557_29716[(2)] = inst_29538);

(statearr_29557_29716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (9))){
var inst_29503 = (state_29543[(7)]);
var inst_29502 = (state_29543[(8)]);
var inst_29504 = (state_29543[(9)]);
var inst_29520 = (state_29543[(10)]);
var inst_29522 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29523 = [conn_type,uid];
var inst_29524 = (new cljs.core.PersistentVector(null,2,(5),inst_29522,inst_29523,null));
var inst_29525 = (function (){var vec__29497 = inst_29502;
var __QMARK_sch = inst_29503;
var udt_t1 = inst_29504;
var disconnect_QMARK_ = inst_29520;
return ((function (vec__29497,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_29503,inst_29502,inst_29504,inst_29520,inst_29522,inst_29523,inst_29524,state_val_29544,c__23880__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__29497,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_29503,inst_29502,inst_29504,inst_29520,inst_29522,inst_29523,inst_29524,state_val_29544,c__23880__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_29526 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_29524,inst_29525);
var inst_29527 = upd_connected_uid_BANG_.call(null,uid);
var state_29543__$1 = (function (){var statearr_29558 = state_29543;
(statearr_29558[(12)] = inst_29526);

return statearr_29558;
})();
if(cljs.core.truth_(inst_29527)){
var statearr_29559_29717 = state_29543__$1;
(statearr_29559_29717[(1)] = (12));

} else {
var statearr_29560_29718 = state_29543__$1;
(statearr_29560_29718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (5))){
var inst_29504 = (state_29543[(9)]);
var inst_29512 = (state_29543[(2)]);
var inst_29513 = cljs.core._EQ_.call(null,inst_29504,udt_close);
var state_29543__$1 = (function (){var statearr_29561 = state_29543;
(statearr_29561[(13)] = inst_29512);

return statearr_29561;
})();
if(inst_29513){
var statearr_29562_29719 = state_29543__$1;
(statearr_29562_29719[(1)] = (6));

} else {
var statearr_29563_29720 = state_29543__$1;
(statearr_29563_29720[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (14))){
var inst_29535 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29564_29721 = state_29543__$1;
(statearr_29564_29721[(2)] = inst_29535);

(statearr_29564_29721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (10))){
var state_29543__$1 = state_29543;
var statearr_29565_29722 = state_29543__$1;
(statearr_29565_29722[(2)] = null);

(statearr_29565_29722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (8))){
var inst_29541 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29543__$1,inst_29541);
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
});})(c__23880__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__23768__auto__,c__23880__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__23769__auto__ = null;
var taoensso$sente$state_machine__23769__auto____0 = (function (){
var statearr_29569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29569[(0)] = taoensso$sente$state_machine__23769__auto__);

(statearr_29569[(1)] = (1));

return statearr_29569;
});
var taoensso$sente$state_machine__23769__auto____1 = (function (state_29543){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_29543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e29570){if((e29570 instanceof Object)){
var ex__23772__auto__ = e29570;
var statearr_29571_29723 = state_29543;
(statearr_29571_29723[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29724 = state_29543;
state_29543 = G__29724;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
taoensso$sente$state_machine__23769__auto__ = function(state_29543){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23769__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23769__auto____1.call(this,state_29543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23769__auto____0;
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23769__auto____1;
return taoensso$sente$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__23882__auto__ = (function (){var statearr_29572 = f__23881__auto__.call(null);
(statearr_29572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_29572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__23880__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",661,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29303,map__29304,map__29304__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq29300){
var G__29301 = cljs.core.first.call(null,seq29300);
var seq29300__$1 = cljs.core.next.call(null,seq29300);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29301,seq29300__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",667,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__29733 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__29734 = null;
var count__29735 = (0);
var i__29736 = (0);
while(true){
if((i__29736 < count__29735)){
var vec__29737 = cljs.core._nth.call(null,chunk__29734,i__29736);
var client_id = cljs.core.nth.call(null,vec__29737,(0),null);
var vec__29738 = cljs.core.nth.call(null,vec__29737,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__29738,(0),null);
var _udt = cljs.core.nth.call(null,vec__29738,(1),null);
var temp__4657__auto___29741 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___29741)){
var sch_29742 = temp__4657__auto___29741;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_29742,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__29743 = seq__29733;
var G__29744 = chunk__29734;
var G__29745 = count__29735;
var G__29746 = (i__29736 + (1));
seq__29733 = G__29743;
chunk__29734 = G__29744;
count__29735 = G__29745;
i__29736 = G__29746;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29733);
if(temp__4657__auto__){
var seq__29733__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29733__$1)){
var c__22524__auto__ = cljs.core.chunk_first.call(null,seq__29733__$1);
var G__29747 = cljs.core.chunk_rest.call(null,seq__29733__$1);
var G__29748 = c__22524__auto__;
var G__29749 = cljs.core.count.call(null,c__22524__auto__);
var G__29750 = (0);
seq__29733 = G__29747;
chunk__29734 = G__29748;
count__29735 = G__29749;
i__29736 = G__29750;
continue;
} else {
var vec__29739 = cljs.core.first.call(null,seq__29733__$1);
var client_id = cljs.core.nth.call(null,vec__29739,(0),null);
var vec__29740 = cljs.core.nth.call(null,vec__29739,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__29740,(0),null);
var _udt = cljs.core.nth.call(null,vec__29740,(1),null);
var temp__4657__auto___29751__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___29751__$1)){
var sch_29752 = temp__4657__auto___29751__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_29752,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__29753 = cljs.core.next.call(null,seq__29733__$1);
var G__29754 = null;
var G__29755 = (0);
var G__29756 = (0);
seq__29733 = G__29753;
chunk__29734 = G__29754;
count__29735 = G__29755;
i__29736 = G__29756;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",677,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var nmax_attempts = (7);
var ms_base = (90);
var ms_rand = (90);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (state_29883){
var state_val_29884 = (state_29883[(1)]);
if((state_val_29884 === (7))){
var inst_29838 = (state_29883[(7)]);
var inst_29839 = (state_29883[(8)]);
var inst_29845 = (state_29883[(9)]);
var inst_29855 = (function (){var n = inst_29838;
var client_ids_satisfied = inst_29839;
var _QMARK_pulled = inst_29845;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_29838,inst_29839,inst_29845,state_val_29884,c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (s,client_id,p__29854){
var vec__29885 = p__29854;
var _QMARK_sch = cljs.core.nth.call(null,vec__29885,(0),null);
var _udt = cljs.core.nth.call(null,vec__29885,(1),null);
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
;})(n,client_ids_satisfied,_QMARK_pulled,inst_29838,inst_29839,inst_29845,state_val_29884,c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var inst_29856 = cljs.core.PersistentHashSet.EMPTY;
var inst_29857 = cljs.core.reduce_kv.call(null,inst_29855,inst_29856,inst_29845);
var state_29883__$1 = state_29883;
var statearr_29886_29917 = state_29883__$1;
(statearr_29886_29917[(2)] = inst_29857);

(statearr_29886_29917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (1))){
var inst_29837 = cljs.core.PersistentHashSet.EMPTY;
var inst_29838 = (0);
var inst_29839 = inst_29837;
var state_29883__$1 = (function (){var statearr_29887 = state_29883;
(statearr_29887[(7)] = inst_29838);

(statearr_29887[(8)] = inst_29839);

return statearr_29887;
})();
var statearr_29888_29918 = state_29883__$1;
(statearr_29888_29918[(2)] = null);

(statearr_29888_29918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (4))){
var state_29883__$1 = state_29883;
var statearr_29889_29919 = state_29883__$1;
(statearr_29889_29919[(2)] = true);

(statearr_29889_29919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (15))){
var inst_29879 = (state_29883[(2)]);
var state_29883__$1 = state_29883;
var statearr_29890_29920 = state_29883__$1;
(statearr_29890_29920[(2)] = inst_29879);

(statearr_29890_29920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (13))){
var inst_29870 = cljs.core.rand_int.call(null,ms_rand);
var inst_29871 = (ms_base + inst_29870);
var inst_29872 = cljs.core.async.timeout.call(null,inst_29871);
var state_29883__$1 = state_29883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29883__$1,(16),inst_29872);
} else {
if((state_val_29884 === (6))){
var inst_29845 = (state_29883[(9)]);
var inst_29852 = (state_29883[(2)]);
var state_29883__$1 = (function (){var statearr_29891 = state_29883;
(statearr_29891[(10)] = inst_29852);

return statearr_29891;
})();
if(cljs.core.truth_(inst_29845)){
var statearr_29892_29921 = state_29883__$1;
(statearr_29892_29921[(1)] = (7));

} else {
var statearr_29893_29922 = state_29883__$1;
(statearr_29893_29922[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (3))){
var inst_29881 = (state_29883[(2)]);
var state_29883__$1 = state_29883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29883__$1,inst_29881);
} else {
if((state_val_29884 === (12))){
var inst_29868 = (state_29883[(2)]);
var state_29883__$1 = state_29883;
if(cljs.core.truth_(inst_29868)){
var statearr_29894_29923 = state_29883__$1;
(statearr_29894_29923[(1)] = (13));

} else {
var statearr_29895_29924 = state_29883__$1;
(statearr_29895_29924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (2))){
var inst_29838 = (state_29883[(7)]);
var inst_29839 = (state_29883[(8)]);
var inst_29845 = (state_29883[(9)]);
var inst_29841 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29842 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_29843 = (new cljs.core.PersistentVector(null,2,(5),inst_29841,inst_29842,null));
var inst_29844 = (function (){var n = inst_29838;
var client_ids_satisfied = inst_29839;
return ((function (n,client_ids_satisfied,inst_29838,inst_29839,inst_29845,inst_29841,inst_29842,inst_29843,state_val_29884,c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_29838,inst_29839,inst_29845,inst_29841,inst_29842,inst_29843,state_val_29884,c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__29896 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__29896,(0),null);
var udt = cljs.core.nth.call(null,vec__29896,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_29838,inst_29839,inst_29845,inst_29841,inst_29842,inst_29843,state_val_29884,c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_29838,inst_29839,inst_29845,inst_29841,inst_29842,inst_29843,state_val_29884,c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var inst_29845__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_29843,inst_29844);
var inst_29846 = (function (){var n = inst_29838;
var client_ids_satisfied = inst_29839;
var _QMARK_pulled = inst_29845__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_29838,inst_29839,inst_29845,inst_29841,inst_29842,inst_29843,inst_29844,inst_29845__$1,state_val_29884,c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (x){
var or__21713__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,x);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_29838,inst_29839,inst_29845,inst_29841,inst_29842,inst_29843,inst_29844,inst_29845__$1,state_val_29884,c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var inst_29847 = inst_29846.call(null,inst_29845__$1);
var state_29883__$1 = (function (){var statearr_29897 = state_29883;
(statearr_29897[(9)] = inst_29845__$1);

return statearr_29897;
})();
if(cljs.core.truth_(inst_29847)){
var statearr_29898_29925 = state_29883__$1;
(statearr_29898_29925[(1)] = (4));

} else {
var statearr_29899_29926 = state_29883__$1;
(statearr_29899_29926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (11))){
var inst_29862 = (state_29883[(11)]);
var state_29883__$1 = state_29883;
var statearr_29900_29927 = state_29883__$1;
(statearr_29900_29927[(2)] = inst_29862);

(statearr_29900_29927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (9))){
var inst_29838 = (state_29883[(7)]);
var inst_29862 = (state_29883[(11)]);
var inst_29839 = (state_29883[(8)]);
var inst_29860 = (state_29883[(2)]);
var inst_29861 = cljs.core.into.call(null,inst_29839,inst_29860);
var inst_29862__$1 = (inst_29838 < nmax_attempts);
var state_29883__$1 = (function (){var statearr_29901 = state_29883;
(statearr_29901[(12)] = inst_29861);

(statearr_29901[(11)] = inst_29862__$1);

return statearr_29901;
})();
if(cljs.core.truth_(inst_29862__$1)){
var statearr_29902_29928 = state_29883__$1;
(statearr_29902_29928[(1)] = (10));

} else {
var statearr_29903_29929 = state_29883__$1;
(statearr_29903_29929[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (5))){
var inst_29845 = (state_29883[(9)]);
var inst_29850 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_29845,null,null);
var state_29883__$1 = state_29883;
var statearr_29904_29930 = state_29883__$1;
(statearr_29904_29930[(2)] = inst_29850);

(statearr_29904_29930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (14))){
var state_29883__$1 = state_29883;
var statearr_29905_29931 = state_29883__$1;
(statearr_29905_29931[(2)] = null);

(statearr_29905_29931[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (16))){
var inst_29861 = (state_29883[(12)]);
var inst_29838 = (state_29883[(7)]);
var inst_29874 = (state_29883[(2)]);
var inst_29875 = (inst_29838 + (1));
var inst_29838__$1 = inst_29875;
var inst_29839 = inst_29861;
var state_29883__$1 = (function (){var statearr_29906 = state_29883;
(statearr_29906[(7)] = inst_29838__$1);

(statearr_29906[(13)] = inst_29874);

(statearr_29906[(8)] = inst_29839);

return statearr_29906;
})();
var statearr_29907_29932 = state_29883__$1;
(statearr_29907_29932[(2)] = null);

(statearr_29907_29932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (10))){
var inst_29861 = (state_29883[(12)]);
var inst_29864 = cljs.core.complement.call(null,inst_29861);
var inst_29865 = cljs.core.some.call(null,inst_29864,client_ids_unsatisfied);
var state_29883__$1 = state_29883;
var statearr_29908_29933 = state_29883__$1;
(statearr_29908_29933[(2)] = inst_29865);

(statearr_29908_29933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (8))){
var state_29883__$1 = state_29883;
var statearr_29909_29934 = state_29883__$1;
(statearr_29909_29934[(2)] = null);

(statearr_29909_29934[(1)] = (9));


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
});})(c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
;
return ((function (switch__23768__auto__,c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__23769__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__23769__auto____0 = (function (){
var statearr_29913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29913[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__23769__auto__);

(statearr_29913[(1)] = (1));

return statearr_29913;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__23769__auto____1 = (function (state_29883){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_29883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e29914){if((e29914 instanceof Object)){
var ex__23772__auto__ = e29914;
var statearr_29915_29935 = state_29883;
(statearr_29915_29935[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29936 = state_29883;
state_29883 = G__29936;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__23769__auto__ = function(state_29883){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__23769__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__23769__auto____1.call(this,state_29883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__23769__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__23769__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var state__23882__auto__ = (function (){var statearr_29916 = f__23881__auto__.call(null);
(statearr_29916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_29916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
);

return c__23880__auto__;
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
var x__22376__auto__ = (((chsk == null))?null:chsk);
var m__22377__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,chsk);
} else {
var m__22377__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,chsk);
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
var x__22376__auto__ = (((chsk == null))?null:chsk);
var m__22377__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,chsk,reconn_QMARK_);
} else {
var m__22377__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,chsk,reconn_QMARK_);
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
var x__22376__auto__ = (((chsk == null))?null:chsk);
var m__22377__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,chsk);
} else {
var m__22377__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,chsk);
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
var x__22376__auto__ = (((chsk == null))?null:chsk);
var m__22377__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,chsk,ev,opts);
} else {
var m__22377__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,chsk,ev,opts);
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
var args29937 = [];
var len__22783__auto___29940 = arguments.length;
var i__22784__auto___29941 = (0);
while(true){
if((i__22784__auto___29941 < len__22783__auto___29940)){
args29937.push((arguments[i__22784__auto___29941]));

var G__29942 = (i__22784__auto___29941 + (1));
i__22784__auto___29941 = G__29942;
continue;
} else {
}
break;
}

var G__29939 = args29937.length;
switch (G__29939) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29937.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",756,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",761,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
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

if(cljs.core.truth_((function (){var or__21713__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__21713__auto__){
return or__21713__auto__;
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
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__29944,merge_state){
var map__29948 = p__29944;
var map__29948__$1 = ((((!((map__29948 == null)))?((((map__29948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29948):map__29948);
var chsk = map__29948__$1;
var chs = cljs.core.get.call(null,map__29948__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__29948__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__29950 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__29948,map__29948__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var requested_reconnect_QMARK_ = (function (){var and__21701__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__21701__auto__)){
var and__21701__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__21701__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__21701__auto____$1;
}
} else {
return and__21701__auto__;
}
})();
var new_state__$1 = (cljs.core.truth_(requested_reconnect_QMARK_)?cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true):cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666)));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__29948,map__29948__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__29950,(0),null);
var new_state = cljs.core.nth.call(null,vec__29950,(1),null);
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
var e_29955 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29953){if((e29953 instanceof Error)){
var e = e29953;
return e;
} else {
throw e29953;

}
}})();
if((e_29955 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_29955,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__29954 = ev;
var ev_id = cljs.core.nth.call(null,vec__29954,(0),null);
var _ = cljs.core.nth.call(null,vec__29954,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__29954,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__29954,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",829,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29963){if((e29963 instanceof Error)){
var e = e29963;
return e;
} else {
throw e29963;

}
}})();
if((e == null)){
return clj;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,e,null);
}
})();
var seq__29964 = cljs.core.seq.call(null,buffered_evs);
var chunk__29965 = null;
var count__29966 = (0);
var i__29967 = (0);
while(true){
if((i__29967 < count__29966)){
var ev = cljs.core._nth.call(null,chunk__29965,i__29967);
taoensso.sente.assert_event.call(null,ev);

var vec__29968_29970 = ev;
var id_29971 = cljs.core.nth.call(null,vec__29968_29970,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_29971),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__29972 = seq__29964;
var G__29973 = chunk__29965;
var G__29974 = count__29966;
var G__29975 = (i__29967 + (1));
seq__29964 = G__29972;
chunk__29965 = G__29973;
count__29966 = G__29974;
i__29967 = G__29975;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29964);
if(temp__4657__auto__){
var seq__29964__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29964__$1)){
var c__22524__auto__ = cljs.core.chunk_first.call(null,seq__29964__$1);
var G__29976 = cljs.core.chunk_rest.call(null,seq__29964__$1);
var G__29977 = c__22524__auto__;
var G__29978 = cljs.core.count.call(null,c__22524__auto__);
var G__29979 = (0);
seq__29964 = G__29976;
chunk__29965 = G__29977;
count__29966 = G__29978;
i__29967 = G__29979;
continue;
} else {
var ev = cljs.core.first.call(null,seq__29964__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__29969_29980 = ev;
var id_29981 = cljs.core.nth.call(null,vec__29969_29980,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_29981),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__29982 = cljs.core.next.call(null,seq__29964__$1);
var G__29983 = null;
var G__29984 = (0);
var G__29985 = (0);
seq__29964 = G__29982;
chunk__29965 = G__29983;
count__29966 = G__29984;
i__29967 = G__29985;
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
var and__21701__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__21701__auto__){
var vec__29989 = x;
var x1 = cljs.core.nth.call(null,vec__29989,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__21701__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_30002 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29996){if((e29996 instanceof Error)){
var e = e29996;
return e;
} else {
throw e29996;

}
}})();
if((e_30002 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_30002,null);
}

var e_30003 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29997){if((e29997 instanceof Error)){
var e = e29997;
return e;
} else {
throw e29997;

}
}})();
if((e_30003 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_30003,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",846,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null);

var vec__29998 = clj;
var _ = cljs.core.nth.call(null,vec__29998,(0),null);
var vec__29999 = cljs.core.nth.call(null,vec__29998,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__29999,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__29999,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__29999,(2),null);
var map__30000 = chsk;
var map__30000__$1 = ((((!((map__30000 == null)))?((((map__30000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30000):map__30000);
var chs = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",865,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29998,_,vec__29999,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__30000,map__30000__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__29998,_,vec__29999,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__30000,map__30000__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22335__auto__,k__22336__auto__){
var self__ = this;
var this__22335__auto____$1 = this;
return cljs.core._lookup.call(null,this__22335__auto____$1,k__22336__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22337__auto__,k30005,else__22338__auto__){
var self__ = this;
var this__22337__auto____$1 = this;
var G__30007 = (((k30005 instanceof cljs.core.Keyword))?k30005.fqn:null);
switch (G__30007) {
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
return cljs.core.get.call(null,self__.__extmap,k30005,else__22338__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22349__auto__,writer__22350__auto__,opts__22351__auto__){
var self__ = this;
var this__22349__auto____$1 = this;
var pr_pair__22352__auto__ = ((function (this__22349__auto____$1){
return (function (keyval__22353__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22350__auto__,cljs.core.pr_writer,""," ","",opts__22351__auto__,keyval__22353__auto__);
});})(this__22349__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22350__auto__,pr_pair__22352__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__22351__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"err-fn","err-fn",-861159760),self__.err_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30004){
var self__ = this;
var G__30004__$1 = this;
return (new cljs.core.RecordIter((0),G__30004__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"err-fn","err-fn",-861159760)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22333__auto__){
var self__ = this;
var this__22333__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22329__auto__){
var self__ = this;
var this__22329__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22339__auto__){
var self__ = this;
var this__22339__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22330__auto__){
var self__ = this;
var this__22330__auto____$1 = this;
var h__22148__auto__ = self__.__hash;
if(!((h__22148__auto__ == null))){
return h__22148__auto__;
} else {
var h__22148__auto____$1 = cljs.core.hash_imap.call(null,this__22330__auto____$1);
self__.__hash = h__22148__auto____$1;

return h__22148__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22331__auto__,other__22332__auto__){
var self__ = this;
var this__22331__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21701__auto__ = other__22332__auto__;
if(cljs.core.truth_(and__21701__auto__)){
var and__21701__auto____$1 = (this__22331__auto____$1.constructor === other__22332__auto__.constructor);
if(and__21701__auto____$1){
return cljs.core.equiv_map.call(null,this__22331__auto____$1,other__22332__auto__);
} else {
return and__21701__auto____$1;
}
} else {
return and__21701__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22344__auto__,k__22345__auto__){
var self__ = this;
var this__22344__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"err-fn","err-fn",-861159760),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__22345__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22344__auto____$1),self__.__meta),k__22345__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22345__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22342__auto__,k__22343__auto__,G__30004){
var self__ = this;
var this__22342__auto____$1 = this;
var pred__30008 = cljs.core.keyword_identical_QMARK_;
var expr__30009 = k__22343__auto__;
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__30009))){
return (new taoensso.sente.ChWebSocket(G__30004,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__30009))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__30004,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__30009))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__30004,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__30009))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__30004,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__30009))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__30004,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__30009))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__30004,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__30009))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__30004,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__30009))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,G__30004,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__30009))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,G__30004,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__30009))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,G__30004,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__30009))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__30004,self__.socket_,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__30009))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__30004,self__.err_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30008.call(null,new cljs.core.Keyword(null,"err-fn","err-fn",-861159760),expr__30009))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__30004,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22343__auto__,G__30004),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22347__auto__){
var self__ = this;
var this__22347__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"err-fn","err-fn",-861159760),self__.err_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22334__auto__,G__30004){
var self__ = this;
var this__22334__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.err_fn,G__30004,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22340__auto__,entry__22341__auto__){
var self__ = this;
var this__22340__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22341__auto__)){
return cljs.core._assoc.call(null,this__22340__auto____$1,cljs.core._nth.call(null,entry__22341__auto__,(0)),cljs.core._nth.call(null,entry__22341__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22340__auto____$1,entry__22341__auto__);
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
var map__30011 = opts;
var map__30011__$1 = ((((!((map__30011 == null)))?((((map__30011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30011):map__30011);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___30047 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___30047)){
var cb_uuid_30048 = temp__4657__auto___30047;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_30048], null),(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,_QMARK_cb_fn))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e30013){if((e30013 instanceof Error)){
var e = e30013;
return e;
} else {
throw e30013;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___30049__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___30049__$1)){
var timeout_ms_30050 = temp__4657__auto___30049__$1;
var c__23880__auto___30051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___30051,timeout_ms_30050,temp__4657__auto___30049__$1,cb_uuid_30048,temp__4657__auto___30047,_QMARK_cb_uuid,ppstr,map__30011,map__30011__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___30051,timeout_ms_30050,temp__4657__auto___30049__$1,cb_uuid_30048,temp__4657__auto___30047,_QMARK_cb_uuid,ppstr,map__30011,map__30011__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_30024){
var state_val_30025 = (state_30024[(1)]);
if((state_val_30025 === (1))){
var inst_30014 = cljs.core.async.timeout.call(null,timeout_ms_30050);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(2),inst_30014);
} else {
if((state_val_30025 === (2))){
var inst_30017 = (state_30024[(7)]);
var inst_30016 = (state_30024[(2)]);
var inst_30017__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_30024__$1 = (function (){var statearr_30026 = state_30024;
(statearr_30026[(8)] = inst_30016);

(statearr_30026[(7)] = inst_30017__$1);

return statearr_30026;
})();
if(cljs.core.truth_(inst_30017__$1)){
var statearr_30027_30052 = state_30024__$1;
(statearr_30027_30052[(1)] = (3));

} else {
var statearr_30028_30053 = state_30024__$1;
(statearr_30028_30053[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (3))){
var inst_30017 = (state_30024[(7)]);
var inst_30019 = inst_30017.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_30024__$1 = state_30024;
var statearr_30029_30054 = state_30024__$1;
(statearr_30029_30054[(2)] = inst_30019);

(statearr_30029_30054[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (4))){
var state_30024__$1 = state_30024;
var statearr_30030_30055 = state_30024__$1;
(statearr_30030_30055[(2)] = null);

(statearr_30030_30055[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (5))){
var inst_30022 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30024__$1,inst_30022);
} else {
return null;
}
}
}
}
}
});})(c__23880__auto___30051,timeout_ms_30050,temp__4657__auto___30049__$1,cb_uuid_30048,temp__4657__auto___30047,_QMARK_cb_uuid,ppstr,map__30011,map__30011__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__23768__auto__,c__23880__auto___30051,timeout_ms_30050,temp__4657__auto___30049__$1,cb_uuid_30048,temp__4657__auto___30047,_QMARK_cb_uuid,ppstr,map__30011,map__30011__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__23769__auto__ = null;
var taoensso$sente$state_machine__23769__auto____0 = (function (){
var statearr_30034 = [null,null,null,null,null,null,null,null,null];
(statearr_30034[(0)] = taoensso$sente$state_machine__23769__auto__);

(statearr_30034[(1)] = (1));

return statearr_30034;
});
var taoensso$sente$state_machine__23769__auto____1 = (function (state_30024){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_30024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e30035){if((e30035 instanceof Object)){
var ex__23772__auto__ = e30035;
var statearr_30036_30056 = state_30024;
(statearr_30036_30056[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30057 = state_30024;
state_30024 = G__30057;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
taoensso$sente$state_machine__23769__auto__ = function(state_30024){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23769__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23769__auto____1.call(this,state_30024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23769__auto____0;
taoensso$sente$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23769__auto____1;
return taoensso$sente$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___30051,timeout_ms_30050,temp__4657__auto___30049__$1,cb_uuid_30048,temp__4657__auto___30047,_QMARK_cb_uuid,ppstr,map__30011,map__30011__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__23882__auto__ = (function (){var statearr_30037 = f__23881__auto__.call(null);
(statearr_30037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___30051);

return statearr_30037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___30051,timeout_ms_30050,temp__4657__auto___30049__$1,cb_uuid_30048,temp__4657__auto___30047,_QMARK_cb_uuid,ppstr,map__30011,map__30011__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e30038){if((e30038 instanceof Error)){
var e = e30038;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",918,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__30011,map__30011__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__30011,map__30011__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null);

var temp__4657__auto___30058 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___30058)){
var cb_uuid_30059 = temp__4657__auto___30058;
var cb_fn_STAR__30060 = (function (){var or__21713__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_30059);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
var e__$1 = (function (){try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,_QMARK_cb_fn))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e30039){if((e30039 instanceof Error)){
var e__$1 = e30039;
return e__$1;
} else {
throw e30039;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__30060.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e30038;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__21713__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",936,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
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
}catch (e30043){if((e30043 instanceof Error)){
var e = e30043;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e30043;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__30044 = _QMARK_socket;
(G__30044["onerror"] = ((function (G__30044,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",956,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__30044,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__30044,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-error","chsk/ws-error",260168922),ws_ev], null));

var temp__4657__auto___30061__$1 = self__.err_fn;
if(cljs.core.truth_(temp__4657__auto___30061__$1)){
var ef_30062 = temp__4657__auto___30061__$1;
ef_30062.call(null,chsk__$1);
} else {
}

return null;
});})(G__30044,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__30044["onmessage"] = ((function (G__30044,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__30045 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__30045,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__30045,(1),null);
var or__21713__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
})()
:null);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
var or__21713__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","ws-ping","debug/ws-ping",-168903566)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__21713__auto____$1)){
return or__21713__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__21713__auto____$1,or__21713__auto__,ppstr,vec__30045,clj,_QMARK_cb_uuid,G__30044,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__21713__auto____$1,or__21713__auto__,ppstr,vec__30045,clj,_QMARK_cb_uuid,G__30044,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__30044,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__30044["onclose"] = ((function (G__30044,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
if(cljs.core.truth_(clean_QMARK_)){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",1007,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (code,reason,clean_QMARK_,G__30044,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(code,reason,clean_QMARK_,G__30044,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
}
});})(G__30044,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__30044;
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__22369__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__22369__auto__,writer__22370__auto__){
return cljs.core._write.call(null,writer__22370__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,active_retry_id_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,err_fn){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,active_retry_id_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,err_fn,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__30006){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__30006),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__30006),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__30006),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__30006),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__30006),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__30006),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__30006),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__30006),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__30006),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__30006),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__30006),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__30006),new cljs.core.Keyword(null,"err-fn","err-fn",-861159760).cljs$core$IFn$_invoke$arity$1(G__30006),null,cljs.core.dissoc.call(null,G__30006,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"err-fn","err-fn",-861159760)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22335__auto__,k__22336__auto__){
var self__ = this;
var this__22335__auto____$1 = this;
return cljs.core._lookup.call(null,this__22335__auto____$1,k__22336__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22337__auto__,k30064,else__22338__auto__){
var self__ = this;
var this__22337__auto____$1 = this;
var G__30066 = (((k30064 instanceof cljs.core.Keyword))?k30064.fqn:null);
switch (G__30066) {
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
return cljs.core.get.call(null,self__.__extmap,k30064,else__22338__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22349__auto__,writer__22350__auto__,opts__22351__auto__){
var self__ = this;
var this__22349__auto____$1 = this;
var pr_pair__22352__auto__ = ((function (this__22349__auto____$1){
return (function (keyval__22353__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22350__auto__,cljs.core.pr_writer,""," ","",opts__22351__auto__,keyval__22353__auto__);
});})(this__22349__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22350__auto__,pr_pair__22352__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__22351__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30063){
var self__ = this;
var G__30063__$1 = this;
return (new cljs.core.RecordIter((0),G__30063__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22333__auto__){
var self__ = this;
var this__22333__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22329__auto__){
var self__ = this;
var this__22329__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22339__auto__){
var self__ = this;
var this__22339__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22330__auto__){
var self__ = this;
var this__22330__auto____$1 = this;
var h__22148__auto__ = self__.__hash;
if(!((h__22148__auto__ == null))){
return h__22148__auto__;
} else {
var h__22148__auto____$1 = cljs.core.hash_imap.call(null,this__22330__auto____$1);
self__.__hash = h__22148__auto____$1;

return h__22148__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22331__auto__,other__22332__auto__){
var self__ = this;
var this__22331__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21701__auto__ = other__22332__auto__;
if(cljs.core.truth_(and__21701__auto__)){
var and__21701__auto____$1 = (this__22331__auto____$1.constructor === other__22332__auto__.constructor);
if(and__21701__auto____$1){
return cljs.core.equiv_map.call(null,this__22331__auto____$1,other__22332__auto__);
} else {
return and__21701__auto____$1;
}
} else {
return and__21701__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22344__auto__,k__22345__auto__){
var self__ = this;
var this__22344__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__22345__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22344__auto____$1),self__.__meta),k__22345__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22345__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22342__auto__,k__22343__auto__,G__30063){
var self__ = this;
var this__22342__auto____$1 = this;
var pred__30067 = cljs.core.keyword_identical_QMARK_;
var expr__30068 = k__22343__auto__;
if(cljs.core.truth_(pred__30067.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__30068))){
return (new taoensso.sente.ChAjaxSocket(G__30063,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30067.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__30068))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__30063,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30067.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__30068))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__30063,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30067.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__30068))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__30063,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30067.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__30068))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__30063,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30067.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__30068))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__30063,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30067.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__30068))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__30063,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30067.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__30068))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,G__30063,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30067.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__30068))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,G__30063,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30067.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__30068))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__30063,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30067.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__30068))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__30063,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22343__auto__,G__30063),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22347__auto__){
var self__ = this;
var this__22347__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22334__auto__,G__30063){
var self__ = this;
var this__22334__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__30063,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22340__auto__,entry__22341__auto__){
var self__ = this;
var this__22340__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22341__auto__)){
return cljs.core._assoc.call(null,this__22340__auto____$1,cljs.core._nth.call(null,entry__22341__auto__,(0)),cljs.core._nth.call(null,entry__22341__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22340__auto____$1,entry__22341__auto__);
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
var map__30070 = opts;
var map__30070__$1 = ((((!((map__30070 == null)))?((((map__30070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30070):map__30070);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__21713__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
var or__21713__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__21713__auto____$1)){
return or__21713__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__30070,map__30070__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__30072){
var map__30076 = p__30072;
var map__30076__$1 = ((((!((map__30076 == null)))?((((map__30076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30076):map__30076);
var _QMARK_error = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__30078 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__30078,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__30078,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",1104,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__30078,resp_clj,___$1,map__30076,map__30076__$1,_QMARK_error,_QMARK_content,csrf_token,map__30070,map__30070__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__30078,resp_clj,___$1,map__30076,map__30076__$1,_QMARK_error,_QMARK_content,csrf_token,map__30070,map__30070__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,map__30070,map__30070__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",1113,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",1119,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
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
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__21713__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,retry_id,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__30086){
var map__30090 = p__30086;
var map__30090__$1 = ((((!((map__30090 == null)))?((((map__30090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30090):map__30090);
var _QMARK_error = cljs.core.get.call(null,map__30090__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__30090__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__30092 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__30092,(0),null);
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
var or__21713__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__22369__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__22369__auto__,writer__22370__auto__){
return cljs.core._write.call(null,writer__22370__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,active_retry_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,active_retry_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__30065){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__30065),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__30065),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__30065),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__30065),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__30065),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__30065),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__30065),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__30065),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__30065),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__30065),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__30065),null,cljs.core.dissoc.call(null,G__30065,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
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
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22335__auto__,k__22336__auto__){
var self__ = this;
var this__22335__auto____$1 = this;
return cljs.core._lookup.call(null,this__22335__auto____$1,k__22336__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22337__auto__,k30095,else__22338__auto__){
var self__ = this;
var this__22337__auto____$1 = this;
var G__30097 = (((k30095 instanceof cljs.core.Keyword))?k30095.fqn:null);
switch (G__30097) {
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
return cljs.core.get.call(null,self__.__extmap,k30095,else__22338__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22349__auto__,writer__22350__auto__,opts__22351__auto__){
var self__ = this;
var this__22349__auto____$1 = this;
var pr_pair__22352__auto__ = ((function (this__22349__auto____$1){
return (function (keyval__22353__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22350__auto__,cljs.core.pr_writer,""," ","",opts__22351__auto__,keyval__22353__auto__);
});})(this__22349__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22350__auto__,pr_pair__22352__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__22351__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30094){
var self__ = this;
var G__30094__$1 = this;
return (new cljs.core.RecordIter((0),G__30094__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22333__auto__){
var self__ = this;
var this__22333__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22329__auto__){
var self__ = this;
var this__22329__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22339__auto__){
var self__ = this;
var this__22339__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22330__auto__){
var self__ = this;
var this__22330__auto____$1 = this;
var h__22148__auto__ = self__.__hash;
if(!((h__22148__auto__ == null))){
return h__22148__auto__;
} else {
var h__22148__auto____$1 = cljs.core.hash_imap.call(null,this__22330__auto____$1);
self__.__hash = h__22148__auto____$1;

return h__22148__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22331__auto__,other__22332__auto__){
var self__ = this;
var this__22331__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21701__auto__ = other__22332__auto__;
if(cljs.core.truth_(and__21701__auto__)){
var and__21701__auto____$1 = (this__22331__auto____$1.constructor === other__22332__auto__.constructor);
if(and__21701__auto____$1){
return cljs.core.equiv_map.call(null,this__22331__auto____$1,other__22332__auto__);
} else {
return and__21701__auto____$1;
}
} else {
return and__21701__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22344__auto__,k__22345__auto__){
var self__ = this;
var this__22344__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__22345__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22344__auto____$1),self__.__meta),k__22345__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22345__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22342__auto__,k__22343__auto__,G__30094){
var self__ = this;
var this__22342__auto____$1 = this;
var pred__30098 = cljs.core.keyword_identical_QMARK_;
var expr__30099 = k__22343__auto__;
if(cljs.core.truth_(pred__30098.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__30099))){
return (new taoensso.sente.ChAutoSocket(G__30094,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30098.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__30099))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__30094,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30098.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__30099))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__30094,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30098.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__30099))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__30094,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22343__auto__,G__30094),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22347__auto__){
var self__ = this;
var this__22347__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22334__auto__,G__30094){
var self__ = this;
var this__22334__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__30094,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22340__auto__,entry__22341__auto__){
var self__ = this;
var this__22340__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22341__auto__)){
return cljs.core._assoc.call(null,this__22340__auto____$1,cljs.core._nth.call(null,entry__22341__auto__,(0)),cljs.core._nth.call(null,entry__22341__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22340__auto____$1,entry__22341__auto__);
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
var map__30101 = opts;
var map__30101__$1 = ((((!((map__30101 == null)))?((((map__30101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30101):map__30101);
var _QMARK_cb = cljs.core.get.call(null,map__30101__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",1230,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto__,ajax_chsk_opts__$1,ajax_conn_BANG_,downgraded_QMARK__,chsk__$1){
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
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__21713__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
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

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__22369__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__22369__auto__,writer__22370__auto__){
return cljs.core._write.call(null,writer__22370__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__30096){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__30096),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__30096),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__30096),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__30096),null,cljs.core.dissoc.call(null,G__30096,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__30105 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30105) {
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
var args__22790__auto__ = [];
var len__22783__auto___30119 = arguments.length;
var i__22784__auto___30120 = (0);
while(true){
if((i__22784__auto___30120 < len__22783__auto___30119)){
args__22790__auto__.push((arguments[i__22784__auto___30120]));

var G__30121 = (i__22784__auto___30120 + (1));
i__22784__auto___30120 = G__30121;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__30109){
var vec__30110 = p__30109;
var map__30111 = cljs.core.nth.call(null,vec__30110,(0),null);
var map__30111__$1 = ((((!((map__30111 == null)))?((((map__30111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30111):map__30111);
var opts = map__30111__$1;
var type = cljs.core.get.call(null,map__30111__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__30111__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var params = cljs.core.get.call(null,map__30111__$1,new cljs.core.Keyword(null,"params","params",710516235));
var recv_buf_or_n = cljs.core.get.call(null,map__30111__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var packer = cljs.core.get.call(null,map__30111__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var client_id = cljs.core.get.call(null,map__30111__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__21713__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var ajax_opts = cljs.core.get.call(null,map__30111__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__30111__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var backoff_ms_fn = cljs.core.get.call(null,map__30111__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__30110,(1),null);
var e_30122 = (function (){try{if(((function (vec__30110,map__30111,map__30111__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__30110,map__30111,map__30111__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e30113){if((e30113 instanceof Error)){
var e = e30113;
return e;
} else {
throw e30113;

}
}})();
if((e_30122 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_30122,null);
}

var e_30123 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e30114){if((e30114 instanceof Error)){
var e = e30114;
return e;
} else {
throw e30114;

}
}})();
if((e_30123 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_30123,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",1294,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__30110,map__30111,map__30111__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__30110,map__30111,map__30111__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",1295,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__30110,map__30111,map__30111__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__30110,map__30111,map__30111__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var win_loc = taoensso.encore.get_win_loc.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
var host__$1 = (function (){var or__21713__auto__ = host;
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var path__$1 = (function (){var or__21713__auto__ = path;
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var vec__30115 = (function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__30115,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__30115,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(512)))], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__30116 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30116) {
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
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,send_fn,chsk,temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__30115,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__30110,map__30111,map__30111__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,send_fn,chsk,temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__30115,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__30110,map__30111,map__30111__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,_LT_server_ch);
} else {
return _LT_server_ch;
}
})()], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.map_LT_.call(null,((function (send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__30115,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__30110,map__30111,map__30111__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__30118 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__30118,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__30118,(1),null);
var ev__$1 = vec__30118;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__30115,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__30110,map__30111,map__30111__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,ev_ch);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",1378,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__30115,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__30110,map__30111,map__30111__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__30115,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__30110,map__30111,map__30111__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,null)),null);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq30107){
var G__30108 = cljs.core.first.call(null,seq30107);
var seq30107__$1 = cljs.core.next.call(null,seq30107);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30108,seq30107__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__30347 = opts;
var map__30347__$1 = ((((!((map__30347 == null)))?((((map__30347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30347):map__30347);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__30347__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__30347__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__23880__auto___30569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___30569,map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___30569,map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_30484){
var state_val_30485 = (state_30484[(1)]);
if((state_val_30485 === (7))){
var inst_30480 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30486_30570 = state_30484__$1;
(statearr_30486_30570[(2)] = inst_30480);

(statearr_30486_30570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (20))){
var inst_30356 = (state_30484[(7)]);
var inst_30382 = (state_30484[(8)]);
var inst_30357 = (state_30484[(9)]);
var inst_30383 = (state_30484[(10)]);
var inst_30355 = (state_30484[(11)]);
var inst_30358 = (state_30484[(12)]);
var inst_30393 = (function (){var vec__30350 = inst_30355;
var v = inst_30356;
var p = inst_30357;
var stop_QMARK_ = inst_30358;
var map__30361 = inst_30382;
var event_msg = inst_30382;
var event = inst_30383;
return ((function (vec__30350,v,p,stop_QMARK_,map__30361,event_msg,event,inst_30356,inst_30382,inst_30357,inst_30383,inst_30355,inst_30358,state_val_30485,c__23880__auto___30569,map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__30350,v,p,stop_QMARK_,map__30361,event_msg,event,inst_30356,inst_30382,inst_30357,inst_30383,inst_30355,inst_30358,state_val_30485,c__23880__auto___30569,map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_30394 = (new cljs.core.Delay(inst_30393,null));
var inst_30395 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",1395,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_30394,null);
var state_30484__$1 = state_30484;
var statearr_30487_30571 = state_30484__$1;
(statearr_30487_30571[(2)] = inst_30395);

(statearr_30487_30571[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (27))){
var inst_30400 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30488_30572 = state_30484__$1;
(statearr_30488_30572[(2)] = inst_30400);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30484__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (1))){
var state_30484__$1 = state_30484;
var statearr_30489_30573 = state_30484__$1;
(statearr_30489_30573[(2)] = null);

(statearr_30489_30573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (24))){
var state_30484__$1 = state_30484;
var statearr_30490_30574 = state_30484__$1;
(statearr_30490_30574[(2)] = null);

(statearr_30490_30574[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (55))){
var inst_30474 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30491_30575 = state_30484__$1;
(statearr_30491_30575[(2)] = inst_30474);

(statearr_30491_30575[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (39))){
var state_30484__$1 = state_30484;
var statearr_30492_30576 = state_30484__$1;
(statearr_30492_30576[(2)] = taoensso.truss.impl._dummy_error);

(statearr_30492_30576[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (46))){
var inst_30477 = (state_30484[(2)]);
var state_30484__$1 = (function (){var statearr_30493 = state_30484;
(statearr_30493[(13)] = inst_30477);

return statearr_30493;
})();
var statearr_30494_30577 = state_30484__$1;
(statearr_30494_30577[(2)] = null);

(statearr_30494_30577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (4))){
var inst_30357 = (state_30484[(9)]);
var inst_30355 = (state_30484[(11)]);
var inst_30358 = (state_30484[(12)]);
var inst_30355__$1 = (state_30484[(2)]);
var inst_30356 = cljs.core.nth.call(null,inst_30355__$1,(0),null);
var inst_30357__$1 = cljs.core.nth.call(null,inst_30355__$1,(1),null);
var inst_30358__$1 = cljs.core._EQ_.call(null,inst_30357__$1,ch_ctrl);
var state_30484__$1 = (function (){var statearr_30495 = state_30484;
(statearr_30495[(7)] = inst_30356);

(statearr_30495[(9)] = inst_30357__$1);

(statearr_30495[(11)] = inst_30355__$1);

(statearr_30495[(12)] = inst_30358__$1);

return statearr_30495;
})();
if(inst_30358__$1){
var statearr_30496_30578 = state_30484__$1;
(statearr_30496_30578[(1)] = (5));

} else {
var statearr_30497_30579 = state_30484__$1;
(statearr_30497_30579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (54))){
var state_30484__$1 = state_30484;
var statearr_30498_30580 = state_30484__$1;
(statearr_30498_30580[(2)] = null);

(statearr_30498_30580[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (15))){
var inst_30356 = (state_30484[(7)]);
var state_30484__$1 = state_30484;
var statearr_30499_30581 = state_30484__$1;
(statearr_30499_30581[(2)] = inst_30356);

(statearr_30499_30581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (48))){
var inst_30446 = (state_30484[(2)]);
var inst_30447 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30448 = [null,inst_30446];
var inst_30449 = (new cljs.core.PersistentVector(null,2,(5),inst_30447,inst_30448,null));
var state_30484__$1 = state_30484;
var statearr_30500_30582 = state_30484__$1;
(statearr_30500_30582[(2)] = inst_30449);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30484__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (50))){
var inst_30382 = (state_30484[(8)]);
var inst_30443 = (state_30484[(14)]);
var inst_30455 = error_handler.call(null,inst_30443,inst_30382);
var state_30484__$1 = state_30484;
var statearr_30501_30583 = state_30484__$1;
(statearr_30501_30583[(2)] = inst_30455);

(statearr_30501_30583[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (21))){
var state_30484__$1 = state_30484;
var statearr_30502_30584 = state_30484__$1;
(statearr_30502_30584[(2)] = null);

(statearr_30502_30584[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (31))){
var inst_30408 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30503_30585 = state_30484__$1;
(statearr_30503_30585[(2)] = inst_30408);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30484__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (32))){
var inst_30382 = (state_30484[(8)]);
var state_30484__$1 = state_30484;
var statearr_30504_30586 = state_30484__$1;
(statearr_30504_30586[(2)] = inst_30382);

(statearr_30504_30586[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (40))){
var inst_30426 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30505_30587 = state_30484__$1;
(statearr_30505_30587[(2)] = inst_30426);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30484__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (33))){
var inst_30382 = (state_30484[(8)]);
var inst_30410 = (state_30484[(15)]);
var inst_30414 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(server-event-msg? event-msg)",inst_30382,inst_30410,null);
var state_30484__$1 = state_30484;
var statearr_30506_30588 = state_30484__$1;
(statearr_30506_30588[(2)] = inst_30414);

(statearr_30506_30588[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (13))){
var inst_30374 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30507_30589 = state_30484__$1;
(statearr_30507_30589[(2)] = inst_30374);

(statearr_30507_30589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (22))){
var inst_30398 = (state_30484[(2)]);
var state_30484__$1 = (function (){var statearr_30508 = state_30484;
(statearr_30508[(16)] = inst_30398);

return statearr_30508;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_30509_30590 = state_30484__$1;
(statearr_30509_30590[(1)] = (23));

} else {
var statearr_30510_30591 = state_30484__$1;
(statearr_30510_30591[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (36))){
var inst_30418 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30511_30592 = state_30484__$1;
(statearr_30511_30592[(2)] = inst_30418);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30484__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (41))){
var inst_30382 = (state_30484[(8)]);
var state_30484__$1 = state_30484;
var statearr_30512_30593 = state_30484__$1;
(statearr_30512_30593[(2)] = inst_30382);

(statearr_30512_30593[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (43))){
var inst_30434 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30513_30594 = state_30484__$1;
(statearr_30513_30594[(2)] = inst_30434);

(statearr_30513_30594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (29))){
var state_30484__$1 = state_30484;
var statearr_30514_30595 = state_30484__$1;
(statearr_30514_30595[(2)] = null);

(statearr_30514_30595[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (44))){
var state_30484__$1 = state_30484;
var statearr_30515_30596 = state_30484__$1;
(statearr_30515_30596[(2)] = null);

(statearr_30515_30596[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (6))){
var inst_30356 = (state_30484[(7)]);
var inst_30364 = (inst_30356 == null);
var inst_30365 = cljs.core.not.call(null,inst_30364);
var state_30484__$1 = state_30484;
if(inst_30365){
var statearr_30516_30597 = state_30484__$1;
(statearr_30516_30597[(1)] = (8));

} else {
var statearr_30517_30598 = state_30484__$1;
(statearr_30517_30598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (28))){
var inst_30382 = (state_30484[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30484,(27),Error,null,(26));
var inst_30404 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_30382);
var state_30484__$1 = state_30484;
if(cljs.core.truth_(inst_30404)){
var statearr_30518_30599 = state_30484__$1;
(statearr_30518_30599[(1)] = (29));

} else {
var statearr_30519_30600 = state_30484__$1;
(statearr_30519_30600[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (51))){
var inst_30356 = (state_30484[(7)]);
var inst_30382 = (state_30484[(8)]);
var inst_30357 = (state_30484[(9)]);
var inst_30441 = (state_30484[(17)]);
var inst_30383 = (state_30484[(10)]);
var inst_30355 = (state_30484[(11)]);
var inst_30443 = (state_30484[(14)]);
var inst_30358 = (state_30484[(12)]);
var inst_30442 = (state_30484[(18)]);
var inst_30457 = (function (){var p = inst_30357;
var _QMARK_error = inst_30443;
var v = inst_30356;
var temp__4655__auto__ = error_handler;
var vec__30362 = inst_30441;
var _ = inst_30442;
var event_msg = inst_30382;
var e = inst_30443;
var map__30361 = inst_30382;
var temp__4657__auto__ = inst_30443;
var vec__30350 = inst_30355;
var event = inst_30383;
var stop_QMARK_ = inst_30358;
return ((function (p,_QMARK_error,v,temp__4655__auto__,vec__30362,_,event_msg,e,map__30361,temp__4657__auto__,vec__30350,event,stop_QMARK_,inst_30356,inst_30382,inst_30357,inst_30441,inst_30383,inst_30355,inst_30443,inst_30358,inst_30442,state_val_30485,c__23880__auto___30569,map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(p,_QMARK_error,v,temp__4655__auto__,vec__30362,_,event_msg,e,map__30361,temp__4657__auto__,vec__30350,event,stop_QMARK_,inst_30356,inst_30382,inst_30357,inst_30441,inst_30383,inst_30355,inst_30443,inst_30358,inst_30442,state_val_30485,c__23880__auto___30569,map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_30458 = (new cljs.core.Delay(inst_30457,null));
var inst_30459 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",1406,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_30458,null);
var state_30484__$1 = state_30484;
var statearr_30520_30601 = state_30484__$1;
(statearr_30520_30601[(2)] = inst_30459);

(statearr_30520_30601[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (25))){
var inst_30391 = (state_30484[(19)]);
var inst_30436 = (state_30484[(2)]);
var inst_30437 = event_msg_handler.call(null,inst_30436);
var inst_30438 = [inst_30437,null];
var inst_30439 = (new cljs.core.PersistentVector(null,2,(5),inst_30391,inst_30438,null));
var state_30484__$1 = state_30484;
var statearr_30521_30602 = state_30484__$1;
(statearr_30521_30602[(2)] = inst_30439);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30484__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (34))){
var inst_30416 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30522_30603 = state_30484__$1;
(statearr_30522_30603[(2)] = inst_30416);

(statearr_30522_30603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (17))){
var inst_30441 = (state_30484[(17)]);
var inst_30443 = (state_30484[(14)]);
var inst_30441__$1 = (state_30484[(2)]);
var inst_30442 = cljs.core.nth.call(null,inst_30441__$1,(0),null);
var inst_30443__$1 = cljs.core.nth.call(null,inst_30441__$1,(1),null);
var state_30484__$1 = (function (){var statearr_30523 = state_30484;
(statearr_30523[(17)] = inst_30441__$1);

(statearr_30523[(14)] = inst_30443__$1);

(statearr_30523[(18)] = inst_30442);

return statearr_30523;
})();
if(cljs.core.truth_(inst_30443__$1)){
var statearr_30524_30604 = state_30484__$1;
(statearr_30524_30604[(1)] = (44));

} else {
var statearr_30525_30605 = state_30484__$1;
(statearr_30525_30605[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (3))){
var inst_30482 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30484__$1,inst_30482);
} else {
if((state_val_30485 === (12))){
var state_30484__$1 = state_30484;
var statearr_30526_30606 = state_30484__$1;
(statearr_30526_30606[(2)] = false);

(statearr_30526_30606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (2))){
var inst_30351 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30352 = [ch_recv,ch_ctrl];
var inst_30353 = (new cljs.core.PersistentVector(null,2,(5),inst_30351,inst_30352,null));
var state_30484__$1 = state_30484;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30484__$1,(4),inst_30353);
} else {
if((state_val_30485 === (23))){
var state_30484__$1 = state_30484;
var statearr_30527_30607 = state_30484__$1;
(statearr_30527_30607[(2)] = null);

(statearr_30527_30607[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (47))){
var inst_30467 = (state_30484[(20)]);
var inst_30465 = (state_30484[(21)]);
var inst_30465__$1 = (state_30484[(2)]);
var inst_30466 = cljs.core.nth.call(null,inst_30465__$1,(0),null);
var inst_30467__$1 = cljs.core.nth.call(null,inst_30465__$1,(1),null);
var state_30484__$1 = (function (){var statearr_30528 = state_30484;
(statearr_30528[(20)] = inst_30467__$1);

(statearr_30528[(21)] = inst_30465__$1);

(statearr_30528[(22)] = inst_30466);

return statearr_30528;
})();
if(cljs.core.truth_(inst_30467__$1)){
var statearr_30529_30608 = state_30484__$1;
(statearr_30529_30608[(1)] = (53));

} else {
var statearr_30530_30609 = state_30484__$1;
(statearr_30530_30609[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (35))){
var inst_30428 = (state_30484[(23)]);
var inst_30428__$1 = (state_30484[(2)]);
var inst_30429 = (inst_30428__$1 == null);
var state_30484__$1 = (function (){var statearr_30531 = state_30484;
(statearr_30531[(23)] = inst_30428__$1);

return statearr_30531;
})();
if(cljs.core.truth_(inst_30429)){
var statearr_30532_30610 = state_30484__$1;
(statearr_30532_30610[(1)] = (41));

} else {
var statearr_30533_30611 = state_30484__$1;
(statearr_30533_30611[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30484,(18),Error,null,(17));
var inst_30391 = cljs.core.PersistentVector.EMPTY_NODE;
var state_30484__$1 = (function (){var statearr_30534 = state_30484;
(statearr_30534[(19)] = inst_30391);

return statearr_30534;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_30535_30612 = state_30484__$1;
(statearr_30535_30612[(1)] = (20));

} else {
var statearr_30536_30613 = state_30484__$1;
(statearr_30536_30613[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (11))){
var state_30484__$1 = state_30484;
var statearr_30537_30614 = state_30484__$1;
(statearr_30537_30614[(2)] = true);

(statearr_30537_30614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (9))){
var state_30484__$1 = state_30484;
var statearr_30538_30615 = state_30484__$1;
(statearr_30538_30615[(2)] = false);

(statearr_30538_30615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (5))){
var state_30484__$1 = state_30484;
var statearr_30539_30616 = state_30484__$1;
(statearr_30539_30616[(2)] = null);

(statearr_30539_30616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (14))){
var inst_30356 = (state_30484[(7)]);
var inst_30379 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30356);
var state_30484__$1 = state_30484;
var statearr_30540_30617 = state_30484__$1;
(statearr_30540_30617[(2)] = inst_30379);

(statearr_30540_30617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (45))){
var state_30484__$1 = state_30484;
var statearr_30541_30618 = state_30484__$1;
(statearr_30541_30618[(2)] = null);

(statearr_30541_30618[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (53))){
var inst_30467 = (state_30484[(20)]);
var inst_30356 = (state_30484[(7)]);
var inst_30382 = (state_30484[(8)]);
var inst_30357 = (state_30484[(9)]);
var inst_30441 = (state_30484[(17)]);
var inst_30465 = (state_30484[(21)]);
var inst_30383 = (state_30484[(10)]);
var inst_30355 = (state_30484[(11)]);
var inst_30443 = (state_30484[(14)]);
var inst_30466 = (state_30484[(22)]);
var inst_30358 = (state_30484[(12)]);
var inst_30469 = (function (){var p = inst_30357;
var _QMARK_error = inst_30443;
var v = inst_30356;
var vec__30362 = inst_30441;
var _ = inst_30466;
var e2 = inst_30467;
var _QMARK_error2 = inst_30467;
var event_msg = inst_30382;
var vec__30445 = inst_30465;
var e = inst_30443;
var map__30361 = inst_30382;
var temp__4657__auto__ = inst_30467;
var vec__30350 = inst_30355;
var event = inst_30383;
var stop_QMARK_ = inst_30358;
return ((function (p,_QMARK_error,v,vec__30362,_,e2,_QMARK_error2,event_msg,vec__30445,e,map__30361,temp__4657__auto__,vec__30350,event,stop_QMARK_,inst_30467,inst_30356,inst_30382,inst_30357,inst_30441,inst_30465,inst_30383,inst_30355,inst_30443,inst_30466,inst_30358,state_val_30485,c__23880__auto___30569,map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(p,_QMARK_error,v,vec__30362,_,e2,_QMARK_error2,event_msg,vec__30445,e,map__30361,temp__4657__auto__,vec__30350,event,stop_QMARK_,inst_30467,inst_30356,inst_30382,inst_30357,inst_30441,inst_30465,inst_30383,inst_30355,inst_30443,inst_30466,inst_30358,state_val_30485,c__23880__auto___30569,map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_30470 = (new cljs.core.Delay(inst_30469,null));
var inst_30471 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/13/czsnc__d5qbd25p97svzgmwm0000gn/T/form-init7050783597561977391.clj",1408,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_30470,null);
var state_30484__$1 = state_30484;
var statearr_30542_30619 = state_30484__$1;
(statearr_30542_30619[(2)] = inst_30471);

(statearr_30542_30619[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (26))){
var inst_30410 = (state_30484[(15)]);
var inst_30410__$1 = (state_30484[(2)]);
var inst_30411 = (inst_30410__$1 == null);
var state_30484__$1 = (function (){var statearr_30543 = state_30484;
(statearr_30543[(15)] = inst_30410__$1);

return statearr_30543;
})();
if(cljs.core.truth_(inst_30411)){
var statearr_30544_30620 = state_30484__$1;
(statearr_30544_30620[(1)] = (32));

} else {
var statearr_30545_30621 = state_30484__$1;
(statearr_30545_30621[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (16))){
var inst_30382 = (state_30484[(8)]);
var inst_30382__$1 = (state_30484[(2)]);
var inst_30383 = cljs.core.get.call(null,inst_30382__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_30484__$1 = (function (){var statearr_30546 = state_30484;
(statearr_30546[(8)] = inst_30382__$1);

(statearr_30546[(10)] = inst_30383);

return statearr_30546;
})();
var statearr_30547_30622 = state_30484__$1;
(statearr_30547_30622[(2)] = null);

(statearr_30547_30622[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (38))){
var state_30484__$1 = state_30484;
var statearr_30548_30623 = state_30484__$1;
(statearr_30548_30623[(2)] = null);

(statearr_30548_30623[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (30))){
var state_30484__$1 = state_30484;
var statearr_30549_30624 = state_30484__$1;
(statearr_30549_30624[(2)] = taoensso.truss.impl._dummy_error);

(statearr_30549_30624[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (10))){
var inst_30377 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
if(cljs.core.truth_(inst_30377)){
var statearr_30550_30625 = state_30484__$1;
(statearr_30550_30625[(1)] = (14));

} else {
var statearr_30551_30626 = state_30484__$1;
(statearr_30551_30626[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (18))){
var inst_30384 = (state_30484[(2)]);
var inst_30385 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30386 = [null,inst_30384];
var inst_30387 = (new cljs.core.PersistentVector(null,2,(5),inst_30385,inst_30386,null));
var state_30484__$1 = state_30484;
var statearr_30552_30627 = state_30484__$1;
(statearr_30552_30627[(2)] = inst_30387);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30484__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (52))){
var inst_30453 = (state_30484[(24)]);
var inst_30461 = (state_30484[(2)]);
var inst_30462 = [inst_30461,null];
var inst_30463 = (new cljs.core.PersistentVector(null,2,(5),inst_30453,inst_30462,null));
var state_30484__$1 = state_30484;
var statearr_30553_30628 = state_30484__$1;
(statearr_30553_30628[(2)] = inst_30463);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30484__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (42))){
var inst_30428 = (state_30484[(23)]);
var inst_30382 = (state_30484[(8)]);
var inst_30432 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",inst_30382,inst_30428,null);
var state_30484__$1 = state_30484;
var statearr_30554_30629 = state_30484__$1;
(statearr_30554_30629[(2)] = inst_30432);

(statearr_30554_30629[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (37))){
var inst_30382 = (state_30484[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30484,(36),Error,null,(35));
var inst_30422 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_30382);
var state_30484__$1 = state_30484;
if(cljs.core.truth_(inst_30422)){
var statearr_30555_30630 = state_30484__$1;
(statearr_30555_30630[(1)] = (38));

} else {
var statearr_30556_30631 = state_30484__$1;
(statearr_30556_30631[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (8))){
var inst_30356 = (state_30484[(7)]);
var inst_30367 = inst_30356.cljs$lang$protocol_mask$partition0$;
var inst_30368 = (inst_30367 & (64));
var inst_30369 = inst_30356.cljs$core$ISeq$;
var inst_30370 = (inst_30368) || (inst_30369);
var state_30484__$1 = state_30484;
if(cljs.core.truth_(inst_30370)){
var statearr_30557_30632 = state_30484__$1;
(statearr_30557_30632[(1)] = (11));

} else {
var statearr_30558_30633 = state_30484__$1;
(statearr_30558_30633[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (49))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30484,(48),Error,null,(47));
var inst_30453 = cljs.core.PersistentVector.EMPTY_NODE;
var state_30484__$1 = (function (){var statearr_30559 = state_30484;
(statearr_30559[(24)] = inst_30453);

return statearr_30559;
})();
if(cljs.core.truth_(error_handler)){
var statearr_30560_30634 = state_30484__$1;
(statearr_30560_30634[(1)] = (50));

} else {
var statearr_30561_30635 = state_30484__$1;
(statearr_30561_30635[(1)] = (51));

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
});})(c__23880__auto___30569,map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__23768__auto__,c__23880__auto___30569,map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__23769__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__23769__auto____0 = (function (){
var statearr_30565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30565[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__23769__auto__);

(statearr_30565[(1)] = (1));

return statearr_30565;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__23769__auto____1 = (function (state_30484){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_30484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e30566){if((e30566 instanceof Object)){
var ex__23772__auto__ = e30566;
var statearr_30567_30636 = state_30484;
(statearr_30567_30636[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30637 = state_30484;
state_30484 = G__30637;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__23769__auto__ = function(state_30484){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__23769__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__23769__auto____1.call(this,state_30484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__23769__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__23769__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___30569,map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__23882__auto__ = (function (){var statearr_30568 = f__23881__auto__.call(null);
(statearr_30568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___30569);

return statearr_30568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___30569,map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__30347,map__30347__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
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
var args__22790__auto__ = [];
var len__22783__auto___30645 = arguments.length;
var i__22784__auto___30646 = (0);
while(true){
if((i__22784__auto___30646 < len__22783__auto___30645)){
args__22790__auto__.push((arguments[i__22784__auto___30646]));

var G__30647 = (i__22784__auto___30646 + (1));
i__22784__auto___30646 = G__30647;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((2) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22791__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__30641){
var vec__30642 = p__30641;
var map__30643 = cljs.core.nth.call(null,vec__30642,(0),null);
var map__30643__$1 = ((((!((map__30643 == null)))?((((map__30643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30643):map__30643);
var opts = map__30643__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__30643__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__30643__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq30638){
var G__30639 = cljs.core.first.call(null,seq30638);
var seq30638__$1 = cljs.core.next.call(null,seq30638);
var G__30640 = cljs.core.first.call(null,seq30638__$1);
var seq30638__$2 = cljs.core.next.call(null,seq30638__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30639,G__30640,seq30638__$2);
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
var args__22790__auto__ = [];
var len__22783__auto___30655 = arguments.length;
var i__22784__auto___30656 = (0);
while(true){
if((i__22784__auto___30656 < len__22783__auto___30655)){
args__22790__auto__.push((arguments[i__22784__auto___30656]));

var G__30657 = (i__22784__auto___30656 + (1));
i__22784__auto___30656 = G__30657;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((2) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22791__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__30651){
var vec__30652 = p__30651;
var map__30653 = cljs.core.nth.call(null,vec__30652,(0),null);
var map__30653__$1 = ((((!((map__30653 == null)))?((((map__30653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30653):map__30653);
var opts = map__30653__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq30648){
var G__30649 = cljs.core.first.call(null,seq30648);
var seq30648__$1 = cljs.core.next.call(null,seq30648);
var G__30650 = cljs.core.first.call(null,seq30648__$1);
var seq30648__$2 = cljs.core.next.call(null,seq30648__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30649,G__30650,seq30648__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__30658,websocket_QMARK_){
var map__30661 = p__30658;
var map__30661__$1 = ((((!((map__30661 == null)))?((((map__30661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30661):map__30661);
var location = map__30661__$1;
var protocol = cljs.core.get.call(null,map__30661__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__30661__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__30661__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__21713__auto__ = path;
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1467258283716