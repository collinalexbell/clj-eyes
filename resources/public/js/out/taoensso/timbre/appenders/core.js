// Compiled by ClojureScript 1.8.51 {}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__22784__auto__ = [];
var len__22777__auto___25378 = arguments.length;
var i__22778__auto___25379 = (0);
while(true){
if((i__22778__auto___25379 < len__22777__auto___25378)){
args__22784__auto__.push((arguments[i__22778__auto___25379]));

var G__25380 = (i__22778__auto___25379 + (1));
i__22778__auto___25379 = G__25380;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((0) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__22785__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__25374){
var vec__25375 = p__25374;
var _opts = cljs.core.nth.call(null,vec__25375,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__25375,_opts){
return (function (data){
var map__25376 = data;
var map__25376__$1 = ((((!((map__25376 == null)))?((((map__25376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25376):map__25376);
var output_fn = cljs.core.get.call(null,map__25376__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
return cljs.core.println.call(null,output_fn.call(null,data));
});})(vec__25375,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq25373){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25373));
});
/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__22784__auto__ = [];
var len__22777__auto___25391 = arguments.length;
var i__22778__auto___25392 = (0);
while(true){
if((i__22778__auto___25392 < len__22777__auto___25391)){
args__22784__auto__.push((arguments[i__22778__auto___25392]));

var G__25393 = (i__22778__auto___25392 + (1));
i__22778__auto___25392 = G__25393;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((0) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__22785__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__25382){
var vec__25383 = p__25382;
var map__25384 = cljs.core.nth.call(null,vec__25383,(0),null);
var map__25384__$1 = ((((!((map__25384 == null)))?((((map__25384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25384):map__25384);
var raw_output_QMARK_ = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"raw-output?","raw-output?",1301869164));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_((function (){var and__21695__auto__ = typeof console !== 'undefined';
if(and__21695__auto__){
return console.log;
} else {
return and__21695__auto__;
}
})())?(function (){var level__GT_logger = ((function (vec__25383,map__25384,map__25384__$1,raw_output_QMARK_){
return (function (level){
var or__21707__auto__ = (function (){var G__25387 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__25387) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(level)].join('')));

}
})();
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return console.log;
}
});})(vec__25383,map__25384,map__25384__$1,raw_output_QMARK_))
;
return ((function (level__GT_logger,vec__25383,map__25384,map__25384__$1,raw_output_QMARK_){
return (function (data){
var map__25388 = data;
var map__25388__$1 = ((((!((map__25388 == null)))?((((map__25388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25388):map__25388);
var level = cljs.core.get.call(null,map__25388__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var output_fn = cljs.core.get.call(null,map__25388__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
var vargs_ = cljs.core.get.call(null,map__25388__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var vargs = cljs.core.deref.call(null,vargs_);
var vec__25389 = taoensso.encore.vsplit_first.call(null,vargs);
var v1 = cljs.core.nth.call(null,vec__25389,(0),null);
var vnext = cljs.core.nth.call(null,vec__25389,(1),null);
var logger = level__GT_logger.call(null,level);
if(cljs.core.truth_((function (){var or__21707__auto__ = raw_output_QMARK_;
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("timbre","raw","timbre/raw",-1823417723));
}
})())){
var output = output_fn.call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay(((function (map__25388,map__25388__$1,level,output_fn,vargs_,vargs,vec__25389,v1,vnext,logger,level__GT_logger,vec__25383,map__25384,map__25384__$1,raw_output_QMARK_){
return (function (){
return "";
});})(map__25388,map__25388__$1,level,output_fn,vargs_,vargs,vec__25389,v1,vnext,logger,level__GT_logger,vec__25383,map__25384,map__25384__$1,raw_output_QMARK_))
,null)),new cljs.core.Keyword(null,"?err_","?err_",789480858),(new cljs.core.Delay(((function (map__25388,map__25388__$1,level,output_fn,vargs_,vargs,vec__25389,v1,vnext,logger,level__GT_logger,vec__25383,map__25384,map__25384__$1,raw_output_QMARK_){
return (function (){
return null;
});})(map__25388,map__25388__$1,level,output_fn,vargs_,vargs,vec__25389,v1,vnext,logger,level__GT_logger,vec__25383,map__25384,map__25384__$1,raw_output_QMARK_))
,null))));
var args = cljs.core.cons.call(null,output,cljs.core.cons.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"?err_","?err_",789480858).cljs$core$IFn$_invoke$arity$1(data)),vnext));
return logger.apply(console,cljs.core.into_array.call(null,args));
} else {
return logger.call(console,output_fn.call(null,data));
}
});
;})(level__GT_logger,vec__25383,map__25384,map__25384__$1,raw_output_QMARK_))
})():((function (vec__25383,map__25384,map__25384__$1,raw_output_QMARK_){
return (function (data){
return null;
});})(vec__25383,map__25384,map__25384__$1,raw_output_QMARK_))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq25381){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25381));
});
/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

//# sourceMappingURL=core.js.map?rel=1466069030766