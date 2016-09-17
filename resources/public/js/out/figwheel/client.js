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
var args32266 = [];
var len__22783__auto___32269 = arguments.length;
var i__22784__auto___32270 = (0);
while(true){
if((i__22784__auto___32270 < len__22783__auto___32269)){
args32266.push((arguments[i__22784__auto___32270]));

var G__32271 = (i__22784__auto___32270 + (1));
i__22784__auto___32270 = G__32271;
continue;
} else {
}
break;
}

var G__32268 = args32266.length;
switch (G__32268) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32266.length)].join('')));

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
var args__22790__auto__ = [];
var len__22783__auto___32274 = arguments.length;
var i__22784__auto___32275 = (0);
while(true){
if((i__22784__auto___32275 < len__22783__auto___32274)){
args__22790__auto__.push((arguments[i__22784__auto___32275]));

var G__32276 = (i__22784__auto___32275 + (1));
i__22784__auto___32275 = G__32276;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((0) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22791__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32273){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32273));
});
figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22790__auto__ = [];
var len__22783__auto___32278 = arguments.length;
var i__22784__auto___32279 = (0);
while(true){
if((i__22784__auto___32279 < len__22783__auto___32278)){
args__22790__auto__.push((arguments[i__22784__auto___32279]));

var G__32280 = (i__22784__auto___32279 + (1));
i__22784__auto___32279 = G__32280;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((0) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22791__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32277){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32277));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__32281 = cljs.core._EQ_;
var expr__32282 = (function (){var or__21713__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e32285){if((e32285 instanceof Error)){
var e = e32285;
return false;
} else {
throw e32285;

}
}})();
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32281.call(null,"true",expr__32282))){
return true;
} else {
if(cljs.core.truth_(pred__32281.call(null,"false",expr__32282))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32282)].join('')));
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
}catch (e32287){if((e32287 instanceof Error)){
var e = e32287;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e32287;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32288){
var map__32291 = p__32288;
var map__32291__$1 = ((((!((map__32291 == null)))?((((map__32291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32291):map__32291);
var message = cljs.core.get.call(null,map__32291__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32291__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21713__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21701__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21701__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21701__auto__;
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
var c__23880__auto___32453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___32453,ch){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___32453,ch){
return (function (state_32422){
var state_val_32423 = (state_32422[(1)]);
if((state_val_32423 === (7))){
var inst_32418 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32424_32454 = state_32422__$1;
(statearr_32424_32454[(2)] = inst_32418);

(statearr_32424_32454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (1))){
var state_32422__$1 = state_32422;
var statearr_32425_32455 = state_32422__$1;
(statearr_32425_32455[(2)] = null);

(statearr_32425_32455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (4))){
var inst_32375 = (state_32422[(7)]);
var inst_32375__$1 = (state_32422[(2)]);
var state_32422__$1 = (function (){var statearr_32426 = state_32422;
(statearr_32426[(7)] = inst_32375__$1);

return statearr_32426;
})();
if(cljs.core.truth_(inst_32375__$1)){
var statearr_32427_32456 = state_32422__$1;
(statearr_32427_32456[(1)] = (5));

} else {
var statearr_32428_32457 = state_32422__$1;
(statearr_32428_32457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (15))){
var inst_32382 = (state_32422[(8)]);
var inst_32397 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32382);
var inst_32398 = cljs.core.first.call(null,inst_32397);
var inst_32399 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32398);
var inst_32400 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32399)].join('');
var inst_32401 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32400);
var state_32422__$1 = state_32422;
var statearr_32429_32458 = state_32422__$1;
(statearr_32429_32458[(2)] = inst_32401);

(statearr_32429_32458[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (13))){
var inst_32406 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32430_32459 = state_32422__$1;
(statearr_32430_32459[(2)] = inst_32406);

(statearr_32430_32459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (6))){
var state_32422__$1 = state_32422;
var statearr_32431_32460 = state_32422__$1;
(statearr_32431_32460[(2)] = null);

(statearr_32431_32460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (17))){
var inst_32404 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32432_32461 = state_32422__$1;
(statearr_32432_32461[(2)] = inst_32404);

(statearr_32432_32461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (3))){
var inst_32420 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32422__$1,inst_32420);
} else {
if((state_val_32423 === (12))){
var inst_32381 = (state_32422[(9)]);
var inst_32395 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32381,opts);
var state_32422__$1 = state_32422;
if(cljs.core.truth_(inst_32395)){
var statearr_32433_32462 = state_32422__$1;
(statearr_32433_32462[(1)] = (15));

} else {
var statearr_32434_32463 = state_32422__$1;
(statearr_32434_32463[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (2))){
var state_32422__$1 = state_32422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32422__$1,(4),ch);
} else {
if((state_val_32423 === (11))){
var inst_32382 = (state_32422[(8)]);
var inst_32387 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32388 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32382);
var inst_32389 = cljs.core.async.timeout.call(null,(1000));
var inst_32390 = [inst_32388,inst_32389];
var inst_32391 = (new cljs.core.PersistentVector(null,2,(5),inst_32387,inst_32390,null));
var state_32422__$1 = state_32422;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32422__$1,(14),inst_32391);
} else {
if((state_val_32423 === (9))){
var inst_32382 = (state_32422[(8)]);
var inst_32408 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32409 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32382);
var inst_32410 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32409);
var inst_32411 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32410)].join('');
var inst_32412 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32411);
var state_32422__$1 = (function (){var statearr_32435 = state_32422;
(statearr_32435[(10)] = inst_32408);

return statearr_32435;
})();
var statearr_32436_32464 = state_32422__$1;
(statearr_32436_32464[(2)] = inst_32412);

(statearr_32436_32464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (5))){
var inst_32375 = (state_32422[(7)]);
var inst_32377 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32378 = (new cljs.core.PersistentArrayMap(null,2,inst_32377,null));
var inst_32379 = (new cljs.core.PersistentHashSet(null,inst_32378,null));
var inst_32380 = figwheel.client.focus_msgs.call(null,inst_32379,inst_32375);
var inst_32381 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32380);
var inst_32382 = cljs.core.first.call(null,inst_32380);
var inst_32383 = figwheel.client.autoload_QMARK_.call(null);
var state_32422__$1 = (function (){var statearr_32437 = state_32422;
(statearr_32437[(8)] = inst_32382);

(statearr_32437[(9)] = inst_32381);

return statearr_32437;
})();
if(cljs.core.truth_(inst_32383)){
var statearr_32438_32465 = state_32422__$1;
(statearr_32438_32465[(1)] = (8));

} else {
var statearr_32439_32466 = state_32422__$1;
(statearr_32439_32466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (14))){
var inst_32393 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32440_32467 = state_32422__$1;
(statearr_32440_32467[(2)] = inst_32393);

(statearr_32440_32467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (16))){
var state_32422__$1 = state_32422;
var statearr_32441_32468 = state_32422__$1;
(statearr_32441_32468[(2)] = null);

(statearr_32441_32468[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (10))){
var inst_32414 = (state_32422[(2)]);
var state_32422__$1 = (function (){var statearr_32442 = state_32422;
(statearr_32442[(11)] = inst_32414);

return statearr_32442;
})();
var statearr_32443_32469 = state_32422__$1;
(statearr_32443_32469[(2)] = null);

(statearr_32443_32469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (8))){
var inst_32381 = (state_32422[(9)]);
var inst_32385 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32381,opts);
var state_32422__$1 = state_32422;
if(cljs.core.truth_(inst_32385)){
var statearr_32444_32470 = state_32422__$1;
(statearr_32444_32470[(1)] = (11));

} else {
var statearr_32445_32471 = state_32422__$1;
(statearr_32445_32471[(1)] = (12));

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
});})(c__23880__auto___32453,ch))
;
return ((function (switch__23768__auto__,c__23880__auto___32453,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23769__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23769__auto____0 = (function (){
var statearr_32449 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32449[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23769__auto__);

(statearr_32449[(1)] = (1));

return statearr_32449;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23769__auto____1 = (function (state_32422){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_32422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e32450){if((e32450 instanceof Object)){
var ex__23772__auto__ = e32450;
var statearr_32451_32472 = state_32422;
(statearr_32451_32472[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32473 = state_32422;
state_32422 = G__32473;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23769__auto__ = function(state_32422){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23769__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23769__auto____1.call(this,state_32422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23769__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23769__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___32453,ch))
})();
var state__23882__auto__ = (function (){var statearr_32452 = f__23881__auto__.call(null);
(statearr_32452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___32453);

return statearr_32452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___32453,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32474_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32474_SHARP_));
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
var base_path_32477 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32477){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e32476){if((e32476 instanceof Error)){
var e = e32476;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32477], null));
} else {
var e = e32476;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_32477))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32478){
var map__32485 = p__32478;
var map__32485__$1 = ((((!((map__32485 == null)))?((((map__32485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32485):map__32485);
var opts = map__32485__$1;
var build_id = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32485,map__32485__$1,opts,build_id){
return (function (p__32487){
var vec__32488 = p__32487;
var map__32489 = cljs.core.nth.call(null,vec__32488,(0),null);
var map__32489__$1 = ((((!((map__32489 == null)))?((((map__32489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32489):map__32489);
var msg = map__32489__$1;
var msg_name = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32488,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32488,map__32489,map__32489__$1,msg,msg_name,_,map__32485,map__32485__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32488,map__32489,map__32489__$1,msg,msg_name,_,map__32485,map__32485__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32485,map__32485__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32495){
var vec__32496 = p__32495;
var map__32497 = cljs.core.nth.call(null,vec__32496,(0),null);
var map__32497__$1 = ((((!((map__32497 == null)))?((((map__32497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32497):map__32497);
var msg = map__32497__$1;
var msg_name = cljs.core.get.call(null,map__32497__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32496,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32499){
var map__32509 = p__32499;
var map__32509__$1 = ((((!((map__32509 == null)))?((((map__32509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32509):map__32509);
var on_compile_warning = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32509,map__32509__$1,on_compile_warning,on_compile_fail){
return (function (p__32511){
var vec__32512 = p__32511;
var map__32513 = cljs.core.nth.call(null,vec__32512,(0),null);
var map__32513__$1 = ((((!((map__32513 == null)))?((((map__32513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32513):map__32513);
var msg = map__32513__$1;
var msg_name = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32512,(1));
var pred__32515 = cljs.core._EQ_;
var expr__32516 = msg_name;
if(cljs.core.truth_(pred__32515.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32516))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32515.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32516))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32509,map__32509__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__,msg_hist,msg_names,msg){
return (function (state_32724){
var state_val_32725 = (state_32724[(1)]);
if((state_val_32725 === (7))){
var inst_32652 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
if(cljs.core.truth_(inst_32652)){
var statearr_32726_32772 = state_32724__$1;
(statearr_32726_32772[(1)] = (8));

} else {
var statearr_32727_32773 = state_32724__$1;
(statearr_32727_32773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (20))){
var inst_32718 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32728_32774 = state_32724__$1;
(statearr_32728_32774[(2)] = inst_32718);

(statearr_32728_32774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (27))){
var inst_32714 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32729_32775 = state_32724__$1;
(statearr_32729_32775[(2)] = inst_32714);

(statearr_32729_32775[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (1))){
var inst_32645 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32724__$1 = state_32724;
if(cljs.core.truth_(inst_32645)){
var statearr_32730_32776 = state_32724__$1;
(statearr_32730_32776[(1)] = (2));

} else {
var statearr_32731_32777 = state_32724__$1;
(statearr_32731_32777[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (24))){
var inst_32716 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32732_32778 = state_32724__$1;
(statearr_32732_32778[(2)] = inst_32716);

(statearr_32732_32778[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (4))){
var inst_32722 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32724__$1,inst_32722);
} else {
if((state_val_32725 === (15))){
var inst_32720 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32733_32779 = state_32724__$1;
(statearr_32733_32779[(2)] = inst_32720);

(statearr_32733_32779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (21))){
var inst_32679 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32734_32780 = state_32724__$1;
(statearr_32734_32780[(2)] = inst_32679);

(statearr_32734_32780[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (31))){
var inst_32703 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32724__$1 = state_32724;
if(cljs.core.truth_(inst_32703)){
var statearr_32735_32781 = state_32724__$1;
(statearr_32735_32781[(1)] = (34));

} else {
var statearr_32736_32782 = state_32724__$1;
(statearr_32736_32782[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (32))){
var inst_32712 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32737_32783 = state_32724__$1;
(statearr_32737_32783[(2)] = inst_32712);

(statearr_32737_32783[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (33))){
var inst_32701 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32738_32784 = state_32724__$1;
(statearr_32738_32784[(2)] = inst_32701);

(statearr_32738_32784[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (13))){
var inst_32666 = figwheel.client.heads_up.clear.call(null);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32724__$1,(16),inst_32666);
} else {
if((state_val_32725 === (22))){
var inst_32683 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32684 = figwheel.client.heads_up.append_warning_message.call(null,inst_32683);
var state_32724__$1 = state_32724;
var statearr_32739_32785 = state_32724__$1;
(statearr_32739_32785[(2)] = inst_32684);

(statearr_32739_32785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (36))){
var inst_32710 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32740_32786 = state_32724__$1;
(statearr_32740_32786[(2)] = inst_32710);

(statearr_32740_32786[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (29))){
var inst_32694 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32741_32787 = state_32724__$1;
(statearr_32741_32787[(2)] = inst_32694);

(statearr_32741_32787[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (6))){
var inst_32647 = (state_32724[(7)]);
var state_32724__$1 = state_32724;
var statearr_32742_32788 = state_32724__$1;
(statearr_32742_32788[(2)] = inst_32647);

(statearr_32742_32788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (28))){
var inst_32690 = (state_32724[(2)]);
var inst_32691 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32692 = figwheel.client.heads_up.display_warning.call(null,inst_32691);
var state_32724__$1 = (function (){var statearr_32743 = state_32724;
(statearr_32743[(8)] = inst_32690);

return statearr_32743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32724__$1,(29),inst_32692);
} else {
if((state_val_32725 === (25))){
var inst_32688 = figwheel.client.heads_up.clear.call(null);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32724__$1,(28),inst_32688);
} else {
if((state_val_32725 === (34))){
var inst_32705 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32724__$1,(37),inst_32705);
} else {
if((state_val_32725 === (17))){
var inst_32672 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32744_32789 = state_32724__$1;
(statearr_32744_32789[(2)] = inst_32672);

(statearr_32744_32789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (3))){
var inst_32664 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32724__$1 = state_32724;
if(cljs.core.truth_(inst_32664)){
var statearr_32745_32790 = state_32724__$1;
(statearr_32745_32790[(1)] = (13));

} else {
var statearr_32746_32791 = state_32724__$1;
(statearr_32746_32791[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (12))){
var inst_32660 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32747_32792 = state_32724__$1;
(statearr_32747_32792[(2)] = inst_32660);

(statearr_32747_32792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (2))){
var inst_32647 = (state_32724[(7)]);
var inst_32647__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32724__$1 = (function (){var statearr_32748 = state_32724;
(statearr_32748[(7)] = inst_32647__$1);

return statearr_32748;
})();
if(cljs.core.truth_(inst_32647__$1)){
var statearr_32749_32793 = state_32724__$1;
(statearr_32749_32793[(1)] = (5));

} else {
var statearr_32750_32794 = state_32724__$1;
(statearr_32750_32794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (23))){
var inst_32686 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32724__$1 = state_32724;
if(cljs.core.truth_(inst_32686)){
var statearr_32751_32795 = state_32724__$1;
(statearr_32751_32795[(1)] = (25));

} else {
var statearr_32752_32796 = state_32724__$1;
(statearr_32752_32796[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (35))){
var state_32724__$1 = state_32724;
var statearr_32753_32797 = state_32724__$1;
(statearr_32753_32797[(2)] = null);

(statearr_32753_32797[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (19))){
var inst_32681 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32724__$1 = state_32724;
if(cljs.core.truth_(inst_32681)){
var statearr_32754_32798 = state_32724__$1;
(statearr_32754_32798[(1)] = (22));

} else {
var statearr_32755_32799 = state_32724__$1;
(statearr_32755_32799[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (11))){
var inst_32656 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32756_32800 = state_32724__$1;
(statearr_32756_32800[(2)] = inst_32656);

(statearr_32756_32800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (9))){
var inst_32658 = figwheel.client.heads_up.clear.call(null);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32724__$1,(12),inst_32658);
} else {
if((state_val_32725 === (5))){
var inst_32649 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32724__$1 = state_32724;
var statearr_32757_32801 = state_32724__$1;
(statearr_32757_32801[(2)] = inst_32649);

(statearr_32757_32801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (14))){
var inst_32674 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32724__$1 = state_32724;
if(cljs.core.truth_(inst_32674)){
var statearr_32758_32802 = state_32724__$1;
(statearr_32758_32802[(1)] = (18));

} else {
var statearr_32759_32803 = state_32724__$1;
(statearr_32759_32803[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (26))){
var inst_32696 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32724__$1 = state_32724;
if(cljs.core.truth_(inst_32696)){
var statearr_32760_32804 = state_32724__$1;
(statearr_32760_32804[(1)] = (30));

} else {
var statearr_32761_32805 = state_32724__$1;
(statearr_32761_32805[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (16))){
var inst_32668 = (state_32724[(2)]);
var inst_32669 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32670 = figwheel.client.heads_up.display_exception.call(null,inst_32669);
var state_32724__$1 = (function (){var statearr_32762 = state_32724;
(statearr_32762[(9)] = inst_32668);

return statearr_32762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32724__$1,(17),inst_32670);
} else {
if((state_val_32725 === (30))){
var inst_32698 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32699 = figwheel.client.heads_up.display_warning.call(null,inst_32698);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32724__$1,(33),inst_32699);
} else {
if((state_val_32725 === (10))){
var inst_32662 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32763_32806 = state_32724__$1;
(statearr_32763_32806[(2)] = inst_32662);

(statearr_32763_32806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (18))){
var inst_32676 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32677 = figwheel.client.heads_up.display_exception.call(null,inst_32676);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32724__$1,(21),inst_32677);
} else {
if((state_val_32725 === (37))){
var inst_32707 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32764_32807 = state_32724__$1;
(statearr_32764_32807[(2)] = inst_32707);

(statearr_32764_32807[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (8))){
var inst_32654 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32724__$1,(11),inst_32654);
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
});})(c__23880__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23768__auto__,c__23880__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23769__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23769__auto____0 = (function (){
var statearr_32768 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32768[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23769__auto__);

(statearr_32768[(1)] = (1));

return statearr_32768;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23769__auto____1 = (function (state_32724){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_32724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e32769){if((e32769 instanceof Object)){
var ex__23772__auto__ = e32769;
var statearr_32770_32808 = state_32724;
(statearr_32770_32808[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32809 = state_32724;
state_32724 = G__32809;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23769__auto__ = function(state_32724){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23769__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23769__auto____1.call(this,state_32724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23769__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23769__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__,msg_hist,msg_names,msg))
})();
var state__23882__auto__ = (function (){var statearr_32771 = f__23881__auto__.call(null);
(statearr_32771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_32771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__,msg_hist,msg_names,msg))
);

return c__23880__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23880__auto___32872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___32872,ch){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___32872,ch){
return (function (state_32855){
var state_val_32856 = (state_32855[(1)]);
if((state_val_32856 === (1))){
var state_32855__$1 = state_32855;
var statearr_32857_32873 = state_32855__$1;
(statearr_32857_32873[(2)] = null);

(statearr_32857_32873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (2))){
var state_32855__$1 = state_32855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32855__$1,(4),ch);
} else {
if((state_val_32856 === (3))){
var inst_32853 = (state_32855[(2)]);
var state_32855__$1 = state_32855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32855__$1,inst_32853);
} else {
if((state_val_32856 === (4))){
var inst_32843 = (state_32855[(7)]);
var inst_32843__$1 = (state_32855[(2)]);
var state_32855__$1 = (function (){var statearr_32858 = state_32855;
(statearr_32858[(7)] = inst_32843__$1);

return statearr_32858;
})();
if(cljs.core.truth_(inst_32843__$1)){
var statearr_32859_32874 = state_32855__$1;
(statearr_32859_32874[(1)] = (5));

} else {
var statearr_32860_32875 = state_32855__$1;
(statearr_32860_32875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (5))){
var inst_32843 = (state_32855[(7)]);
var inst_32845 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32843);
var state_32855__$1 = state_32855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32855__$1,(8),inst_32845);
} else {
if((state_val_32856 === (6))){
var state_32855__$1 = state_32855;
var statearr_32861_32876 = state_32855__$1;
(statearr_32861_32876[(2)] = null);

(statearr_32861_32876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (7))){
var inst_32851 = (state_32855[(2)]);
var state_32855__$1 = state_32855;
var statearr_32862_32877 = state_32855__$1;
(statearr_32862_32877[(2)] = inst_32851);

(statearr_32862_32877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (8))){
var inst_32847 = (state_32855[(2)]);
var state_32855__$1 = (function (){var statearr_32863 = state_32855;
(statearr_32863[(8)] = inst_32847);

return statearr_32863;
})();
var statearr_32864_32878 = state_32855__$1;
(statearr_32864_32878[(2)] = null);

(statearr_32864_32878[(1)] = (2));


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
});})(c__23880__auto___32872,ch))
;
return ((function (switch__23768__auto__,c__23880__auto___32872,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23769__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23769__auto____0 = (function (){
var statearr_32868 = [null,null,null,null,null,null,null,null,null];
(statearr_32868[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23769__auto__);

(statearr_32868[(1)] = (1));

return statearr_32868;
});
var figwheel$client$heads_up_plugin_$_state_machine__23769__auto____1 = (function (state_32855){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_32855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e32869){if((e32869 instanceof Object)){
var ex__23772__auto__ = e32869;
var statearr_32870_32879 = state_32855;
(statearr_32870_32879[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32880 = state_32855;
state_32855 = G__32880;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23769__auto__ = function(state_32855){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23769__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23769__auto____1.call(this,state_32855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23769__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23769__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___32872,ch))
})();
var state__23882__auto__ = (function (){var statearr_32871 = f__23881__auto__.call(null);
(statearr_32871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___32872);

return statearr_32871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___32872,ch))
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
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__){
return (function (state_32901){
var state_val_32902 = (state_32901[(1)]);
if((state_val_32902 === (1))){
var inst_32896 = cljs.core.async.timeout.call(null,(3000));
var state_32901__$1 = state_32901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32901__$1,(2),inst_32896);
} else {
if((state_val_32902 === (2))){
var inst_32898 = (state_32901[(2)]);
var inst_32899 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32901__$1 = (function (){var statearr_32903 = state_32901;
(statearr_32903[(7)] = inst_32898);

return statearr_32903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32901__$1,inst_32899);
} else {
return null;
}
}
});})(c__23880__auto__))
;
return ((function (switch__23768__auto__,c__23880__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23769__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23769__auto____0 = (function (){
var statearr_32907 = [null,null,null,null,null,null,null,null];
(statearr_32907[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23769__auto__);

(statearr_32907[(1)] = (1));

return statearr_32907;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23769__auto____1 = (function (state_32901){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_32901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e32908){if((e32908 instanceof Object)){
var ex__23772__auto__ = e32908;
var statearr_32909_32911 = state_32901;
(statearr_32909_32911[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32912 = state_32901;
state_32901 = G__32912;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23769__auto__ = function(state_32901){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23769__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23769__auto____1.call(this,state_32901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23769__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23769__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__))
})();
var state__23882__auto__ = (function (){var statearr_32910 = f__23881__auto__.call(null);
(statearr_32910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_32910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__))
);

return c__23880__auto__;
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
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__,figwheel_version,temp__4657__auto__){
return (function (state_32935){
var state_val_32936 = (state_32935[(1)]);
if((state_val_32936 === (1))){
var inst_32929 = cljs.core.async.timeout.call(null,(2000));
var state_32935__$1 = state_32935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32935__$1,(2),inst_32929);
} else {
if((state_val_32936 === (2))){
var inst_32931 = (state_32935[(2)]);
var inst_32932 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_32933 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32932);
var state_32935__$1 = (function (){var statearr_32937 = state_32935;
(statearr_32937[(7)] = inst_32931);

return statearr_32937;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32935__$1,inst_32933);
} else {
return null;
}
}
});})(c__23880__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__23768__auto__,c__23880__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23769__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23769__auto____0 = (function (){
var statearr_32941 = [null,null,null,null,null,null,null,null];
(statearr_32941[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23769__auto__);

(statearr_32941[(1)] = (1));

return statearr_32941;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23769__auto____1 = (function (state_32935){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_32935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e32942){if((e32942 instanceof Object)){
var ex__23772__auto__ = e32942;
var statearr_32943_32945 = state_32935;
(statearr_32943_32945[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32946 = state_32935;
state_32935 = G__32946;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23769__auto__ = function(state_32935){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23769__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23769__auto____1.call(this,state_32935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23769__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23769__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__,figwheel_version,temp__4657__auto__))
})();
var state__23882__auto__ = (function (){var statearr_32944 = f__23881__auto__.call(null);
(statearr_32944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_32944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__,figwheel_version,temp__4657__auto__))
);

return c__23880__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32947){
var map__32951 = p__32947;
var map__32951__$1 = ((((!((map__32951 == null)))?((((map__32951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32951):map__32951);
var file = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32953 = "";
var G__32953__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__32953),cljs.core.str("file "),cljs.core.str(file)].join(''):G__32953);
var G__32953__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__32953__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__32953__$1);
if(cljs.core.truth_((function (){var and__21701__auto__ = line;
if(cljs.core.truth_(and__21701__auto__)){
return column;
} else {
return and__21701__auto__;
}
})())){
return [cljs.core.str(G__32953__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__32953__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32954){
var map__32961 = p__32954;
var map__32961__$1 = ((((!((map__32961 == null)))?((((map__32961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32961):map__32961);
var ed = map__32961__$1;
var formatted_exception = cljs.core.get.call(null,map__32961__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32961__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32961__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32963_32967 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32964_32968 = null;
var count__32965_32969 = (0);
var i__32966_32970 = (0);
while(true){
if((i__32966_32970 < count__32965_32969)){
var msg_32971 = cljs.core._nth.call(null,chunk__32964_32968,i__32966_32970);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32971);

var G__32972 = seq__32963_32967;
var G__32973 = chunk__32964_32968;
var G__32974 = count__32965_32969;
var G__32975 = (i__32966_32970 + (1));
seq__32963_32967 = G__32972;
chunk__32964_32968 = G__32973;
count__32965_32969 = G__32974;
i__32966_32970 = G__32975;
continue;
} else {
var temp__4657__auto___32976 = cljs.core.seq.call(null,seq__32963_32967);
if(temp__4657__auto___32976){
var seq__32963_32977__$1 = temp__4657__auto___32976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32963_32977__$1)){
var c__22524__auto___32978 = cljs.core.chunk_first.call(null,seq__32963_32977__$1);
var G__32979 = cljs.core.chunk_rest.call(null,seq__32963_32977__$1);
var G__32980 = c__22524__auto___32978;
var G__32981 = cljs.core.count.call(null,c__22524__auto___32978);
var G__32982 = (0);
seq__32963_32967 = G__32979;
chunk__32964_32968 = G__32980;
count__32965_32969 = G__32981;
i__32966_32970 = G__32982;
continue;
} else {
var msg_32983 = cljs.core.first.call(null,seq__32963_32977__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32983);

var G__32984 = cljs.core.next.call(null,seq__32963_32977__$1);
var G__32985 = null;
var G__32986 = (0);
var G__32987 = (0);
seq__32963_32967 = G__32984;
chunk__32964_32968 = G__32985;
count__32965_32969 = G__32986;
i__32966_32970 = G__32987;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32988){
var map__32991 = p__32988;
var map__32991__$1 = ((((!((map__32991 == null)))?((((map__32991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32991):map__32991);
var w = map__32991__$1;
var message = cljs.core.get.call(null,map__32991__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__21701__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21701__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21701__auto__;
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
var seq__32999 = cljs.core.seq.call(null,plugins);
var chunk__33000 = null;
var count__33001 = (0);
var i__33002 = (0);
while(true){
if((i__33002 < count__33001)){
var vec__33003 = cljs.core._nth.call(null,chunk__33000,i__33002);
var k = cljs.core.nth.call(null,vec__33003,(0),null);
var plugin = cljs.core.nth.call(null,vec__33003,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33005 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32999,chunk__33000,count__33001,i__33002,pl_33005,vec__33003,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33005.call(null,msg_hist);
});})(seq__32999,chunk__33000,count__33001,i__33002,pl_33005,vec__33003,k,plugin))
);
} else {
}

var G__33006 = seq__32999;
var G__33007 = chunk__33000;
var G__33008 = count__33001;
var G__33009 = (i__33002 + (1));
seq__32999 = G__33006;
chunk__33000 = G__33007;
count__33001 = G__33008;
i__33002 = G__33009;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32999);
if(temp__4657__auto__){
var seq__32999__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32999__$1)){
var c__22524__auto__ = cljs.core.chunk_first.call(null,seq__32999__$1);
var G__33010 = cljs.core.chunk_rest.call(null,seq__32999__$1);
var G__33011 = c__22524__auto__;
var G__33012 = cljs.core.count.call(null,c__22524__auto__);
var G__33013 = (0);
seq__32999 = G__33010;
chunk__33000 = G__33011;
count__33001 = G__33012;
i__33002 = G__33013;
continue;
} else {
var vec__33004 = cljs.core.first.call(null,seq__32999__$1);
var k = cljs.core.nth.call(null,vec__33004,(0),null);
var plugin = cljs.core.nth.call(null,vec__33004,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33014 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32999,chunk__33000,count__33001,i__33002,pl_33014,vec__33004,k,plugin,seq__32999__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33014.call(null,msg_hist);
});})(seq__32999,chunk__33000,count__33001,i__33002,pl_33014,vec__33004,k,plugin,seq__32999__$1,temp__4657__auto__))
);
} else {
}

var G__33015 = cljs.core.next.call(null,seq__32999__$1);
var G__33016 = null;
var G__33017 = (0);
var G__33018 = (0);
seq__32999 = G__33015;
chunk__33000 = G__33016;
count__33001 = G__33017;
i__33002 = G__33018;
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
var args33019 = [];
var len__22783__auto___33026 = arguments.length;
var i__22784__auto___33027 = (0);
while(true){
if((i__22784__auto___33027 < len__22783__auto___33026)){
args33019.push((arguments[i__22784__auto___33027]));

var G__33028 = (i__22784__auto___33027 + (1));
i__22784__auto___33027 = G__33028;
continue;
} else {
}
break;
}

var G__33021 = args33019.length;
switch (G__33021) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33019.length)].join('')));

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

var seq__33022_33030 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33023_33031 = null;
var count__33024_33032 = (0);
var i__33025_33033 = (0);
while(true){
if((i__33025_33033 < count__33024_33032)){
var msg_33034 = cljs.core._nth.call(null,chunk__33023_33031,i__33025_33033);
figwheel.client.socket.handle_incoming_message.call(null,msg_33034);

var G__33035 = seq__33022_33030;
var G__33036 = chunk__33023_33031;
var G__33037 = count__33024_33032;
var G__33038 = (i__33025_33033 + (1));
seq__33022_33030 = G__33035;
chunk__33023_33031 = G__33036;
count__33024_33032 = G__33037;
i__33025_33033 = G__33038;
continue;
} else {
var temp__4657__auto___33039 = cljs.core.seq.call(null,seq__33022_33030);
if(temp__4657__auto___33039){
var seq__33022_33040__$1 = temp__4657__auto___33039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33022_33040__$1)){
var c__22524__auto___33041 = cljs.core.chunk_first.call(null,seq__33022_33040__$1);
var G__33042 = cljs.core.chunk_rest.call(null,seq__33022_33040__$1);
var G__33043 = c__22524__auto___33041;
var G__33044 = cljs.core.count.call(null,c__22524__auto___33041);
var G__33045 = (0);
seq__33022_33030 = G__33042;
chunk__33023_33031 = G__33043;
count__33024_33032 = G__33044;
i__33025_33033 = G__33045;
continue;
} else {
var msg_33046 = cljs.core.first.call(null,seq__33022_33040__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33046);

var G__33047 = cljs.core.next.call(null,seq__33022_33040__$1);
var G__33048 = null;
var G__33049 = (0);
var G__33050 = (0);
seq__33022_33030 = G__33047;
chunk__33023_33031 = G__33048;
count__33024_33032 = G__33049;
i__33025_33033 = G__33050;
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
var args__22790__auto__ = [];
var len__22783__auto___33055 = arguments.length;
var i__22784__auto___33056 = (0);
while(true){
if((i__22784__auto___33056 < len__22783__auto___33055)){
args__22790__auto__.push((arguments[i__22784__auto___33056]));

var G__33057 = (i__22784__auto___33056 + (1));
i__22784__auto___33056 = G__33057;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((0) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22791__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33052){
var map__33053 = p__33052;
var map__33053__$1 = ((((!((map__33053 == null)))?((((map__33053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33053):map__33053);
var opts = map__33053__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33051){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33051));
});
figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33059){if((e33059 instanceof Error)){
var e = e33059;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33059;

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
return (function (p__33063){
var map__33064 = p__33063;
var map__33064__$1 = ((((!((map__33064 == null)))?((((map__33064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33064):map__33064);
var msg_name = cljs.core.get.call(null,map__33064__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1467258287346