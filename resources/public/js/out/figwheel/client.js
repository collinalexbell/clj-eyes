// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-3";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args29453 = [];
var len__22777__auto___29456 = arguments.length;
var i__22778__auto___29457 = (0);
while(true){
if((i__22778__auto___29457 < len__22777__auto___29456)){
args29453.push((arguments[i__22778__auto___29457]));

var G__29458 = (i__22778__auto___29457 + (1));
i__22778__auto___29457 = G__29458;
continue;
} else {
}
break;
}

var G__29455 = args29453.length;
switch (G__29455) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29453.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;
figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29461 = arguments.length;
var i__22778__auto___29462 = (0);
while(true){
if((i__22778__auto___29462 < len__22777__auto___29461)){
args__22784__auto__.push((arguments[i__22778__auto___29462]));

var G__29463 = (i__22778__auto___29462 + (1));
i__22778__auto___29462 = G__29463;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((0) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22785__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29460){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29460));
});
figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29465 = arguments.length;
var i__22778__auto___29466 = (0);
while(true){
if((i__22778__auto___29466 < len__22777__auto___29465)){
args__22784__auto__.push((arguments[i__22778__auto___29466]));

var G__29467 = (i__22778__auto___29466 + (1));
i__22778__auto___29466 = G__29467;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((0) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22785__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29464){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29464));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__29468 = cljs.core._EQ_;
var expr__29469 = (function (){var or__21707__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e29472){if((e29472 instanceof Error)){
var e = e29472;
return false;
} else {
throw e29472;

}
}})();
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29468.call(null,"true",expr__29469))){
return true;
} else {
if(cljs.core.truth_(pred__29468.call(null,"false",expr__29469))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29469)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e29474){if((e29474 instanceof Error)){
var e = e29474;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e29474;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29475){
var map__29478 = p__29475;
var map__29478__$1 = ((((!((map__29478 == null)))?((((map__29478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29478):map__29478);
var message = cljs.core.get.call(null,map__29478__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29478__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21707__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21695__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21695__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21695__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23874__auto___29640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___29640,ch){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___29640,ch){
return (function (state_29609){
var state_val_29610 = (state_29609[(1)]);
if((state_val_29610 === (7))){
var inst_29605 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29611_29641 = state_29609__$1;
(statearr_29611_29641[(2)] = inst_29605);

(statearr_29611_29641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (1))){
var state_29609__$1 = state_29609;
var statearr_29612_29642 = state_29609__$1;
(statearr_29612_29642[(2)] = null);

(statearr_29612_29642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (4))){
var inst_29562 = (state_29609[(7)]);
var inst_29562__$1 = (state_29609[(2)]);
var state_29609__$1 = (function (){var statearr_29613 = state_29609;
(statearr_29613[(7)] = inst_29562__$1);

return statearr_29613;
})();
if(cljs.core.truth_(inst_29562__$1)){
var statearr_29614_29643 = state_29609__$1;
(statearr_29614_29643[(1)] = (5));

} else {
var statearr_29615_29644 = state_29609__$1;
(statearr_29615_29644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (15))){
var inst_29569 = (state_29609[(8)]);
var inst_29584 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29569);
var inst_29585 = cljs.core.first.call(null,inst_29584);
var inst_29586 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29585);
var inst_29587 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29586)].join('');
var inst_29588 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29587);
var state_29609__$1 = state_29609;
var statearr_29616_29645 = state_29609__$1;
(statearr_29616_29645[(2)] = inst_29588);

(statearr_29616_29645[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (13))){
var inst_29593 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29617_29646 = state_29609__$1;
(statearr_29617_29646[(2)] = inst_29593);

(statearr_29617_29646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (6))){
var state_29609__$1 = state_29609;
var statearr_29618_29647 = state_29609__$1;
(statearr_29618_29647[(2)] = null);

(statearr_29618_29647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (17))){
var inst_29591 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29619_29648 = state_29609__$1;
(statearr_29619_29648[(2)] = inst_29591);

(statearr_29619_29648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (3))){
var inst_29607 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29609__$1,inst_29607);
} else {
if((state_val_29610 === (12))){
var inst_29568 = (state_29609[(9)]);
var inst_29582 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29568,opts);
var state_29609__$1 = state_29609;
if(cljs.core.truth_(inst_29582)){
var statearr_29620_29649 = state_29609__$1;
(statearr_29620_29649[(1)] = (15));

} else {
var statearr_29621_29650 = state_29609__$1;
(statearr_29621_29650[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (2))){
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29609__$1,(4),ch);
} else {
if((state_val_29610 === (11))){
var inst_29569 = (state_29609[(8)]);
var inst_29574 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29575 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29569);
var inst_29576 = cljs.core.async.timeout.call(null,(1000));
var inst_29577 = [inst_29575,inst_29576];
var inst_29578 = (new cljs.core.PersistentVector(null,2,(5),inst_29574,inst_29577,null));
var state_29609__$1 = state_29609;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29609__$1,(14),inst_29578);
} else {
if((state_val_29610 === (9))){
var inst_29569 = (state_29609[(8)]);
var inst_29595 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29596 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29569);
var inst_29597 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29596);
var inst_29598 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29597)].join('');
var inst_29599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29598);
var state_29609__$1 = (function (){var statearr_29622 = state_29609;
(statearr_29622[(10)] = inst_29595);

return statearr_29622;
})();
var statearr_29623_29651 = state_29609__$1;
(statearr_29623_29651[(2)] = inst_29599);

(statearr_29623_29651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (5))){
var inst_29562 = (state_29609[(7)]);
var inst_29564 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29565 = (new cljs.core.PersistentArrayMap(null,2,inst_29564,null));
var inst_29566 = (new cljs.core.PersistentHashSet(null,inst_29565,null));
var inst_29567 = figwheel.client.focus_msgs.call(null,inst_29566,inst_29562);
var inst_29568 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29567);
var inst_29569 = cljs.core.first.call(null,inst_29567);
var inst_29570 = figwheel.client.autoload_QMARK_.call(null);
var state_29609__$1 = (function (){var statearr_29624 = state_29609;
(statearr_29624[(9)] = inst_29568);

(statearr_29624[(8)] = inst_29569);

return statearr_29624;
})();
if(cljs.core.truth_(inst_29570)){
var statearr_29625_29652 = state_29609__$1;
(statearr_29625_29652[(1)] = (8));

} else {
var statearr_29626_29653 = state_29609__$1;
(statearr_29626_29653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (14))){
var inst_29580 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29627_29654 = state_29609__$1;
(statearr_29627_29654[(2)] = inst_29580);

(statearr_29627_29654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (16))){
var state_29609__$1 = state_29609;
var statearr_29628_29655 = state_29609__$1;
(statearr_29628_29655[(2)] = null);

(statearr_29628_29655[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (10))){
var inst_29601 = (state_29609[(2)]);
var state_29609__$1 = (function (){var statearr_29629 = state_29609;
(statearr_29629[(11)] = inst_29601);

return statearr_29629;
})();
var statearr_29630_29656 = state_29609__$1;
(statearr_29630_29656[(2)] = null);

(statearr_29630_29656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (8))){
var inst_29568 = (state_29609[(9)]);
var inst_29572 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29568,opts);
var state_29609__$1 = state_29609;
if(cljs.core.truth_(inst_29572)){
var statearr_29631_29657 = state_29609__$1;
(statearr_29631_29657[(1)] = (11));

} else {
var statearr_29632_29658 = state_29609__$1;
(statearr_29632_29658[(1)] = (12));

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
});})(c__23874__auto___29640,ch))
;
return ((function (switch__23762__auto__,c__23874__auto___29640,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23763__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23763__auto____0 = (function (){
var statearr_29636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29636[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23763__auto__);

(statearr_29636[(1)] = (1));

return statearr_29636;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23763__auto____1 = (function (state_29609){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_29609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e29637){if((e29637 instanceof Object)){
var ex__23766__auto__ = e29637;
var statearr_29638_29659 = state_29609;
(statearr_29638_29659[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29660 = state_29609;
state_29609 = G__29660;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23763__auto__ = function(state_29609){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23763__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23763__auto____1.call(this,state_29609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23763__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23763__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___29640,ch))
})();
var state__23876__auto__ = (function (){var statearr_29639 = f__23875__auto__.call(null);
(statearr_29639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___29640);

return statearr_29639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___29640,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29661_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29661_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29664 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29664){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e29663){if((e29663 instanceof Error)){
var e = e29663;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29664], null));
} else {
var e = e29663;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_29664))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29665){
var map__29672 = p__29665;
var map__29672__$1 = ((((!((map__29672 == null)))?((((map__29672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29672):map__29672);
var opts = map__29672__$1;
var build_id = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29672,map__29672__$1,opts,build_id){
return (function (p__29674){
var vec__29675 = p__29674;
var map__29676 = cljs.core.nth.call(null,vec__29675,(0),null);
var map__29676__$1 = ((((!((map__29676 == null)))?((((map__29676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29676):map__29676);
var msg = map__29676__$1;
var msg_name = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29675,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29675,map__29676,map__29676__$1,msg,msg_name,_,map__29672,map__29672__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29675,map__29676,map__29676__$1,msg,msg_name,_,map__29672,map__29672__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29672,map__29672__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29682){
var vec__29683 = p__29682;
var map__29684 = cljs.core.nth.call(null,vec__29683,(0),null);
var map__29684__$1 = ((((!((map__29684 == null)))?((((map__29684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29684):map__29684);
var msg = map__29684__$1;
var msg_name = cljs.core.get.call(null,map__29684__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29683,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29686){
var map__29696 = p__29686;
var map__29696__$1 = ((((!((map__29696 == null)))?((((map__29696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29696):map__29696);
var on_compile_warning = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29696,map__29696__$1,on_compile_warning,on_compile_fail){
return (function (p__29698){
var vec__29699 = p__29698;
var map__29700 = cljs.core.nth.call(null,vec__29699,(0),null);
var map__29700__$1 = ((((!((map__29700 == null)))?((((map__29700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29700):map__29700);
var msg = map__29700__$1;
var msg_name = cljs.core.get.call(null,map__29700__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29699,(1));
var pred__29702 = cljs.core._EQ_;
var expr__29703 = msg_name;
if(cljs.core.truth_(pred__29702.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29703))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29702.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29703))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29696,map__29696__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto__,msg_hist,msg_names,msg){
return (function (state_29911){
var state_val_29912 = (state_29911[(1)]);
if((state_val_29912 === (7))){
var inst_29839 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29839)){
var statearr_29913_29959 = state_29911__$1;
(statearr_29913_29959[(1)] = (8));

} else {
var statearr_29914_29960 = state_29911__$1;
(statearr_29914_29960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (20))){
var inst_29905 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29915_29961 = state_29911__$1;
(statearr_29915_29961[(2)] = inst_29905);

(statearr_29915_29961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (27))){
var inst_29901 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29916_29962 = state_29911__$1;
(statearr_29916_29962[(2)] = inst_29901);

(statearr_29916_29962[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (1))){
var inst_29832 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29832)){
var statearr_29917_29963 = state_29911__$1;
(statearr_29917_29963[(1)] = (2));

} else {
var statearr_29918_29964 = state_29911__$1;
(statearr_29918_29964[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (24))){
var inst_29903 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29919_29965 = state_29911__$1;
(statearr_29919_29965[(2)] = inst_29903);

(statearr_29919_29965[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (4))){
var inst_29909 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29911__$1,inst_29909);
} else {
if((state_val_29912 === (15))){
var inst_29907 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29920_29966 = state_29911__$1;
(statearr_29920_29966[(2)] = inst_29907);

(statearr_29920_29966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (21))){
var inst_29866 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29921_29967 = state_29911__$1;
(statearr_29921_29967[(2)] = inst_29866);

(statearr_29921_29967[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (31))){
var inst_29890 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29890)){
var statearr_29922_29968 = state_29911__$1;
(statearr_29922_29968[(1)] = (34));

} else {
var statearr_29923_29969 = state_29911__$1;
(statearr_29923_29969[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (32))){
var inst_29899 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29924_29970 = state_29911__$1;
(statearr_29924_29970[(2)] = inst_29899);

(statearr_29924_29970[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (33))){
var inst_29888 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29925_29971 = state_29911__$1;
(statearr_29925_29971[(2)] = inst_29888);

(statearr_29925_29971[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (13))){
var inst_29853 = figwheel.client.heads_up.clear.call(null);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(16),inst_29853);
} else {
if((state_val_29912 === (22))){
var inst_29870 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29871 = figwheel.client.heads_up.append_warning_message.call(null,inst_29870);
var state_29911__$1 = state_29911;
var statearr_29926_29972 = state_29911__$1;
(statearr_29926_29972[(2)] = inst_29871);

(statearr_29926_29972[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (36))){
var inst_29897 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29927_29973 = state_29911__$1;
(statearr_29927_29973[(2)] = inst_29897);

(statearr_29927_29973[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (29))){
var inst_29881 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29928_29974 = state_29911__$1;
(statearr_29928_29974[(2)] = inst_29881);

(statearr_29928_29974[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (6))){
var inst_29834 = (state_29911[(7)]);
var state_29911__$1 = state_29911;
var statearr_29929_29975 = state_29911__$1;
(statearr_29929_29975[(2)] = inst_29834);

(statearr_29929_29975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (28))){
var inst_29877 = (state_29911[(2)]);
var inst_29878 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29879 = figwheel.client.heads_up.display_warning.call(null,inst_29878);
var state_29911__$1 = (function (){var statearr_29930 = state_29911;
(statearr_29930[(8)] = inst_29877);

return statearr_29930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(29),inst_29879);
} else {
if((state_val_29912 === (25))){
var inst_29875 = figwheel.client.heads_up.clear.call(null);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(28),inst_29875);
} else {
if((state_val_29912 === (34))){
var inst_29892 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(37),inst_29892);
} else {
if((state_val_29912 === (17))){
var inst_29859 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29931_29976 = state_29911__$1;
(statearr_29931_29976[(2)] = inst_29859);

(statearr_29931_29976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (3))){
var inst_29851 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29851)){
var statearr_29932_29977 = state_29911__$1;
(statearr_29932_29977[(1)] = (13));

} else {
var statearr_29933_29978 = state_29911__$1;
(statearr_29933_29978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (12))){
var inst_29847 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29934_29979 = state_29911__$1;
(statearr_29934_29979[(2)] = inst_29847);

(statearr_29934_29979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (2))){
var inst_29834 = (state_29911[(7)]);
var inst_29834__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29911__$1 = (function (){var statearr_29935 = state_29911;
(statearr_29935[(7)] = inst_29834__$1);

return statearr_29935;
})();
if(cljs.core.truth_(inst_29834__$1)){
var statearr_29936_29980 = state_29911__$1;
(statearr_29936_29980[(1)] = (5));

} else {
var statearr_29937_29981 = state_29911__$1;
(statearr_29937_29981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (23))){
var inst_29873 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29873)){
var statearr_29938_29982 = state_29911__$1;
(statearr_29938_29982[(1)] = (25));

} else {
var statearr_29939_29983 = state_29911__$1;
(statearr_29939_29983[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (35))){
var state_29911__$1 = state_29911;
var statearr_29940_29984 = state_29911__$1;
(statearr_29940_29984[(2)] = null);

(statearr_29940_29984[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (19))){
var inst_29868 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29868)){
var statearr_29941_29985 = state_29911__$1;
(statearr_29941_29985[(1)] = (22));

} else {
var statearr_29942_29986 = state_29911__$1;
(statearr_29942_29986[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (11))){
var inst_29843 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29943_29987 = state_29911__$1;
(statearr_29943_29987[(2)] = inst_29843);

(statearr_29943_29987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (9))){
var inst_29845 = figwheel.client.heads_up.clear.call(null);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(12),inst_29845);
} else {
if((state_val_29912 === (5))){
var inst_29836 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29911__$1 = state_29911;
var statearr_29944_29988 = state_29911__$1;
(statearr_29944_29988[(2)] = inst_29836);

(statearr_29944_29988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (14))){
var inst_29861 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29861)){
var statearr_29945_29989 = state_29911__$1;
(statearr_29945_29989[(1)] = (18));

} else {
var statearr_29946_29990 = state_29911__$1;
(statearr_29946_29990[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (26))){
var inst_29883 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29883)){
var statearr_29947_29991 = state_29911__$1;
(statearr_29947_29991[(1)] = (30));

} else {
var statearr_29948_29992 = state_29911__$1;
(statearr_29948_29992[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (16))){
var inst_29855 = (state_29911[(2)]);
var inst_29856 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29857 = figwheel.client.heads_up.display_exception.call(null,inst_29856);
var state_29911__$1 = (function (){var statearr_29949 = state_29911;
(statearr_29949[(9)] = inst_29855);

return statearr_29949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(17),inst_29857);
} else {
if((state_val_29912 === (30))){
var inst_29885 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29886 = figwheel.client.heads_up.display_warning.call(null,inst_29885);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(33),inst_29886);
} else {
if((state_val_29912 === (10))){
var inst_29849 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29950_29993 = state_29911__$1;
(statearr_29950_29993[(2)] = inst_29849);

(statearr_29950_29993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (18))){
var inst_29863 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29864 = figwheel.client.heads_up.display_exception.call(null,inst_29863);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(21),inst_29864);
} else {
if((state_val_29912 === (37))){
var inst_29894 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29951_29994 = state_29911__$1;
(statearr_29951_29994[(2)] = inst_29894);

(statearr_29951_29994[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (8))){
var inst_29841 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(11),inst_29841);
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
});})(c__23874__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23762__auto__,c__23874__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23763__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23763__auto____0 = (function (){
var statearr_29955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29955[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23763__auto__);

(statearr_29955[(1)] = (1));

return statearr_29955;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23763__auto____1 = (function (state_29911){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_29911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e29956){if((e29956 instanceof Object)){
var ex__23766__auto__ = e29956;
var statearr_29957_29995 = state_29911;
(statearr_29957_29995[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29996 = state_29911;
state_29911 = G__29996;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23763__auto__ = function(state_29911){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23763__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23763__auto____1.call(this,state_29911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23763__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23763__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto__,msg_hist,msg_names,msg))
})();
var state__23876__auto__ = (function (){var statearr_29958 = f__23875__auto__.call(null);
(statearr_29958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto__);

return statearr_29958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto__,msg_hist,msg_names,msg))
);

return c__23874__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23874__auto___30059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___30059,ch){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___30059,ch){
return (function (state_30042){
var state_val_30043 = (state_30042[(1)]);
if((state_val_30043 === (1))){
var state_30042__$1 = state_30042;
var statearr_30044_30060 = state_30042__$1;
(statearr_30044_30060[(2)] = null);

(statearr_30044_30060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (2))){
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30042__$1,(4),ch);
} else {
if((state_val_30043 === (3))){
var inst_30040 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30042__$1,inst_30040);
} else {
if((state_val_30043 === (4))){
var inst_30030 = (state_30042[(7)]);
var inst_30030__$1 = (state_30042[(2)]);
var state_30042__$1 = (function (){var statearr_30045 = state_30042;
(statearr_30045[(7)] = inst_30030__$1);

return statearr_30045;
})();
if(cljs.core.truth_(inst_30030__$1)){
var statearr_30046_30061 = state_30042__$1;
(statearr_30046_30061[(1)] = (5));

} else {
var statearr_30047_30062 = state_30042__$1;
(statearr_30047_30062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (5))){
var inst_30030 = (state_30042[(7)]);
var inst_30032 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30030);
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30042__$1,(8),inst_30032);
} else {
if((state_val_30043 === (6))){
var state_30042__$1 = state_30042;
var statearr_30048_30063 = state_30042__$1;
(statearr_30048_30063[(2)] = null);

(statearr_30048_30063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (7))){
var inst_30038 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30049_30064 = state_30042__$1;
(statearr_30049_30064[(2)] = inst_30038);

(statearr_30049_30064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (8))){
var inst_30034 = (state_30042[(2)]);
var state_30042__$1 = (function (){var statearr_30050 = state_30042;
(statearr_30050[(8)] = inst_30034);

return statearr_30050;
})();
var statearr_30051_30065 = state_30042__$1;
(statearr_30051_30065[(2)] = null);

(statearr_30051_30065[(1)] = (2));


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
});})(c__23874__auto___30059,ch))
;
return ((function (switch__23762__auto__,c__23874__auto___30059,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23763__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23763__auto____0 = (function (){
var statearr_30055 = [null,null,null,null,null,null,null,null,null];
(statearr_30055[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23763__auto__);

(statearr_30055[(1)] = (1));

return statearr_30055;
});
var figwheel$client$heads_up_plugin_$_state_machine__23763__auto____1 = (function (state_30042){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_30042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e30056){if((e30056 instanceof Object)){
var ex__23766__auto__ = e30056;
var statearr_30057_30066 = state_30042;
(statearr_30057_30066[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30067 = state_30042;
state_30042 = G__30067;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23763__auto__ = function(state_30042){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23763__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23763__auto____1.call(this,state_30042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23763__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23763__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___30059,ch))
})();
var state__23876__auto__ = (function (){var statearr_30058 = f__23875__auto__.call(null);
(statearr_30058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___30059);

return statearr_30058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___30059,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto__){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto__){
return (function (state_30088){
var state_val_30089 = (state_30088[(1)]);
if((state_val_30089 === (1))){
var inst_30083 = cljs.core.async.timeout.call(null,(3000));
var state_30088__$1 = state_30088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30088__$1,(2),inst_30083);
} else {
if((state_val_30089 === (2))){
var inst_30085 = (state_30088[(2)]);
var inst_30086 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30088__$1 = (function (){var statearr_30090 = state_30088;
(statearr_30090[(7)] = inst_30085);

return statearr_30090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30088__$1,inst_30086);
} else {
return null;
}
}
});})(c__23874__auto__))
;
return ((function (switch__23762__auto__,c__23874__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23763__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23763__auto____0 = (function (){
var statearr_30094 = [null,null,null,null,null,null,null,null];
(statearr_30094[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23763__auto__);

(statearr_30094[(1)] = (1));

return statearr_30094;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23763__auto____1 = (function (state_30088){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_30088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e30095){if((e30095 instanceof Object)){
var ex__23766__auto__ = e30095;
var statearr_30096_30098 = state_30088;
(statearr_30096_30098[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30099 = state_30088;
state_30088 = G__30099;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23763__auto__ = function(state_30088){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23763__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23763__auto____1.call(this,state_30088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23763__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23763__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto__))
})();
var state__23876__auto__ = (function (){var statearr_30097 = f__23875__auto__.call(null);
(statearr_30097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto__);

return statearr_30097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto__))
);

return c__23874__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto__,figwheel_version,temp__4657__auto__){
return (function (state_30122){
var state_val_30123 = (state_30122[(1)]);
if((state_val_30123 === (1))){
var inst_30116 = cljs.core.async.timeout.call(null,(2000));
var state_30122__$1 = state_30122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30122__$1,(2),inst_30116);
} else {
if((state_val_30123 === (2))){
var inst_30118 = (state_30122[(2)]);
var inst_30119 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_30120 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30119);
var state_30122__$1 = (function (){var statearr_30124 = state_30122;
(statearr_30124[(7)] = inst_30118);

return statearr_30124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30122__$1,inst_30120);
} else {
return null;
}
}
});})(c__23874__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__23762__auto__,c__23874__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23763__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23763__auto____0 = (function (){
var statearr_30128 = [null,null,null,null,null,null,null,null];
(statearr_30128[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23763__auto__);

(statearr_30128[(1)] = (1));

return statearr_30128;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23763__auto____1 = (function (state_30122){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_30122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e30129){if((e30129 instanceof Object)){
var ex__23766__auto__ = e30129;
var statearr_30130_30132 = state_30122;
(statearr_30130_30132[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30133 = state_30122;
state_30122 = G__30133;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23763__auto__ = function(state_30122){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23763__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23763__auto____1.call(this,state_30122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23763__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23763__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto__,figwheel_version,temp__4657__auto__))
})();
var state__23876__auto__ = (function (){var statearr_30131 = f__23875__auto__.call(null);
(statearr_30131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto__);

return statearr_30131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto__,figwheel_version,temp__4657__auto__))
);

return c__23874__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30134){
var map__30138 = p__30134;
var map__30138__$1 = ((((!((map__30138 == null)))?((((map__30138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30138):map__30138);
var file = cljs.core.get.call(null,map__30138__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30138__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30138__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30140 = "";
var G__30140__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__30140),cljs.core.str("file "),cljs.core.str(file)].join(''):G__30140);
var G__30140__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__30140__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__30140__$1);
if(cljs.core.truth_((function (){var and__21695__auto__ = line;
if(cljs.core.truth_(and__21695__auto__)){
return column;
} else {
return and__21695__auto__;
}
})())){
return [cljs.core.str(G__30140__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__30140__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30141){
var map__30148 = p__30141;
var map__30148__$1 = ((((!((map__30148 == null)))?((((map__30148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30148):map__30148);
var ed = map__30148__$1;
var formatted_exception = cljs.core.get.call(null,map__30148__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30148__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30148__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30150_30154 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30151_30155 = null;
var count__30152_30156 = (0);
var i__30153_30157 = (0);
while(true){
if((i__30153_30157 < count__30152_30156)){
var msg_30158 = cljs.core._nth.call(null,chunk__30151_30155,i__30153_30157);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30158);

var G__30159 = seq__30150_30154;
var G__30160 = chunk__30151_30155;
var G__30161 = count__30152_30156;
var G__30162 = (i__30153_30157 + (1));
seq__30150_30154 = G__30159;
chunk__30151_30155 = G__30160;
count__30152_30156 = G__30161;
i__30153_30157 = G__30162;
continue;
} else {
var temp__4657__auto___30163 = cljs.core.seq.call(null,seq__30150_30154);
if(temp__4657__auto___30163){
var seq__30150_30164__$1 = temp__4657__auto___30163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30150_30164__$1)){
var c__22518__auto___30165 = cljs.core.chunk_first.call(null,seq__30150_30164__$1);
var G__30166 = cljs.core.chunk_rest.call(null,seq__30150_30164__$1);
var G__30167 = c__22518__auto___30165;
var G__30168 = cljs.core.count.call(null,c__22518__auto___30165);
var G__30169 = (0);
seq__30150_30154 = G__30166;
chunk__30151_30155 = G__30167;
count__30152_30156 = G__30168;
i__30153_30157 = G__30169;
continue;
} else {
var msg_30170 = cljs.core.first.call(null,seq__30150_30164__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30170);

var G__30171 = cljs.core.next.call(null,seq__30150_30164__$1);
var G__30172 = null;
var G__30173 = (0);
var G__30174 = (0);
seq__30150_30154 = G__30171;
chunk__30151_30155 = G__30172;
count__30152_30156 = G__30173;
i__30153_30157 = G__30174;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30175){
var map__30178 = p__30175;
var map__30178__$1 = ((((!((map__30178 == null)))?((((map__30178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30178):map__30178);
var w = map__30178__$1;
var message = cljs.core.get.call(null,map__30178__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21695__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21695__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21695__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30186 = cljs.core.seq.call(null,plugins);
var chunk__30187 = null;
var count__30188 = (0);
var i__30189 = (0);
while(true){
if((i__30189 < count__30188)){
var vec__30190 = cljs.core._nth.call(null,chunk__30187,i__30189);
var k = cljs.core.nth.call(null,vec__30190,(0),null);
var plugin = cljs.core.nth.call(null,vec__30190,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30192 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30186,chunk__30187,count__30188,i__30189,pl_30192,vec__30190,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30192.call(null,msg_hist);
});})(seq__30186,chunk__30187,count__30188,i__30189,pl_30192,vec__30190,k,plugin))
);
} else {
}

var G__30193 = seq__30186;
var G__30194 = chunk__30187;
var G__30195 = count__30188;
var G__30196 = (i__30189 + (1));
seq__30186 = G__30193;
chunk__30187 = G__30194;
count__30188 = G__30195;
i__30189 = G__30196;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30186);
if(temp__4657__auto__){
var seq__30186__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30186__$1)){
var c__22518__auto__ = cljs.core.chunk_first.call(null,seq__30186__$1);
var G__30197 = cljs.core.chunk_rest.call(null,seq__30186__$1);
var G__30198 = c__22518__auto__;
var G__30199 = cljs.core.count.call(null,c__22518__auto__);
var G__30200 = (0);
seq__30186 = G__30197;
chunk__30187 = G__30198;
count__30188 = G__30199;
i__30189 = G__30200;
continue;
} else {
var vec__30191 = cljs.core.first.call(null,seq__30186__$1);
var k = cljs.core.nth.call(null,vec__30191,(0),null);
var plugin = cljs.core.nth.call(null,vec__30191,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30201 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30186,chunk__30187,count__30188,i__30189,pl_30201,vec__30191,k,plugin,seq__30186__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30201.call(null,msg_hist);
});})(seq__30186,chunk__30187,count__30188,i__30189,pl_30201,vec__30191,k,plugin,seq__30186__$1,temp__4657__auto__))
);
} else {
}

var G__30202 = cljs.core.next.call(null,seq__30186__$1);
var G__30203 = null;
var G__30204 = (0);
var G__30205 = (0);
seq__30186 = G__30202;
chunk__30187 = G__30203;
count__30188 = G__30204;
i__30189 = G__30205;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30206 = [];
var len__22777__auto___30213 = arguments.length;
var i__22778__auto___30214 = (0);
while(true){
if((i__22778__auto___30214 < len__22777__auto___30213)){
args30206.push((arguments[i__22778__auto___30214]));

var G__30215 = (i__22778__auto___30214 + (1));
i__22778__auto___30214 = G__30215;
continue;
} else {
}
break;
}

var G__30208 = args30206.length;
switch (G__30208) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30206.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30209_30217 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30210_30218 = null;
var count__30211_30219 = (0);
var i__30212_30220 = (0);
while(true){
if((i__30212_30220 < count__30211_30219)){
var msg_30221 = cljs.core._nth.call(null,chunk__30210_30218,i__30212_30220);
figwheel.client.socket.handle_incoming_message.call(null,msg_30221);

var G__30222 = seq__30209_30217;
var G__30223 = chunk__30210_30218;
var G__30224 = count__30211_30219;
var G__30225 = (i__30212_30220 + (1));
seq__30209_30217 = G__30222;
chunk__30210_30218 = G__30223;
count__30211_30219 = G__30224;
i__30212_30220 = G__30225;
continue;
} else {
var temp__4657__auto___30226 = cljs.core.seq.call(null,seq__30209_30217);
if(temp__4657__auto___30226){
var seq__30209_30227__$1 = temp__4657__auto___30226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30209_30227__$1)){
var c__22518__auto___30228 = cljs.core.chunk_first.call(null,seq__30209_30227__$1);
var G__30229 = cljs.core.chunk_rest.call(null,seq__30209_30227__$1);
var G__30230 = c__22518__auto___30228;
var G__30231 = cljs.core.count.call(null,c__22518__auto___30228);
var G__30232 = (0);
seq__30209_30217 = G__30229;
chunk__30210_30218 = G__30230;
count__30211_30219 = G__30231;
i__30212_30220 = G__30232;
continue;
} else {
var msg_30233 = cljs.core.first.call(null,seq__30209_30227__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30233);

var G__30234 = cljs.core.next.call(null,seq__30209_30227__$1);
var G__30235 = null;
var G__30236 = (0);
var G__30237 = (0);
seq__30209_30217 = G__30234;
chunk__30210_30218 = G__30235;
count__30211_30219 = G__30236;
i__30212_30220 = G__30237;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22784__auto__ = [];
var len__22777__auto___30242 = arguments.length;
var i__22778__auto___30243 = (0);
while(true){
if((i__22778__auto___30243 < len__22777__auto___30242)){
args__22784__auto__.push((arguments[i__22778__auto___30243]));

var G__30244 = (i__22778__auto___30243 + (1));
i__22778__auto___30243 = G__30244;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((0) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22785__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30239){
var map__30240 = p__30239;
var map__30240__$1 = ((((!((map__30240 == null)))?((((map__30240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30240):map__30240);
var opts = map__30240__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30238){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30238));
});
figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30246){if((e30246 instanceof Error)){
var e = e30246;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30246;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30250){
var map__30251 = p__30250;
var map__30251__$1 = ((((!((map__30251 == null)))?((((map__30251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30251):map__30251);
var msg_name = cljs.core.get.call(null,map__30251__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1465974671034