// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.socket');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('taoensso.sente');
var map__30665_30667 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),false], null));
var map__30665_30668__$1 = ((((!((map__30665_30667 == null)))?((((map__30665_30667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30665_30667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30665_30667):map__30665_30667);
var chsk_30669 = cljs.core.get.call(null,map__30665_30668__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_30670 = cljs.core.get.call(null,map__30665_30668__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_30671 = cljs.core.get.call(null,map__30665_30668__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_30672 = cljs.core.get.call(null,map__30665_30668__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
clj_eyes.socket.chsk = chsk_30669;

clj_eyes.socket.ch_chsk = ch_recv_30670;

clj_eyes.socket.chsk_send_BANG_ = send_fn_30671;

clj_eyes.socket.chsk_state = state_30672;

//# sourceMappingURL=socket.js.map?rel=1467258283948