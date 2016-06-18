// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.socket');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('taoensso.sente');
var map__36467_36469 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),false], null));
var map__36467_36470__$1 = ((((!((map__36467_36469 == null)))?((((map__36467_36469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36467_36469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36467_36469):map__36467_36469);
var chsk_36471 = cljs.core.get.call(null,map__36467_36470__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_36472 = cljs.core.get.call(null,map__36467_36470__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_36473 = cljs.core.get.call(null,map__36467_36470__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_36474 = cljs.core.get.call(null,map__36467_36470__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
clj_eyes.socket.chsk = chsk_36471;

clj_eyes.socket.ch_chsk = ch_recv_36472;

clj_eyes.socket.chsk_send_BANG_ = send_fn_36473;

clj_eyes.socket.chsk_state = state_36474;

//# sourceMappingURL=socket.js.map?rel=1466236063526