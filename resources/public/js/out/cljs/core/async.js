// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23919 = [];
var len__22777__auto___23925 = arguments.length;
var i__22778__auto___23926 = (0);
while(true){
if((i__22778__auto___23926 < len__22777__auto___23925)){
args23919.push((arguments[i__22778__auto___23926]));

var G__23927 = (i__22778__auto___23926 + (1));
i__22778__auto___23926 = G__23927;
continue;
} else {
}
break;
}

var G__23921 = args23919.length;
switch (G__23921) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23919.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23922 = (function (f,blockable,meta23923){
this.f = f;
this.blockable = blockable;
this.meta23923 = meta23923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23924,meta23923__$1){
var self__ = this;
var _23924__$1 = this;
return (new cljs.core.async.t_cljs$core$async23922(self__.f,self__.blockable,meta23923__$1));
});

cljs.core.async.t_cljs$core$async23922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23924){
var self__ = this;
var _23924__$1 = this;
return self__.meta23923;
});

cljs.core.async.t_cljs$core$async23922.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23922.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23923","meta23923",-189859926,null)], null);
});

cljs.core.async.t_cljs$core$async23922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23922";

cljs.core.async.t_cljs$core$async23922.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async23922");
});

cljs.core.async.__GT_t_cljs$core$async23922 = (function cljs$core$async$__GT_t_cljs$core$async23922(f__$1,blockable__$1,meta23923){
return (new cljs.core.async.t_cljs$core$async23922(f__$1,blockable__$1,meta23923));
});

}

return (new cljs.core.async.t_cljs$core$async23922(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23931 = [];
var len__22777__auto___23934 = arguments.length;
var i__22778__auto___23935 = (0);
while(true){
if((i__22778__auto___23935 < len__22777__auto___23934)){
args23931.push((arguments[i__22778__auto___23935]));

var G__23936 = (i__22778__auto___23935 + (1));
i__22778__auto___23935 = G__23936;
continue;
} else {
}
break;
}

var G__23933 = args23931.length;
switch (G__23933) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23931.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23938 = [];
var len__22777__auto___23941 = arguments.length;
var i__22778__auto___23942 = (0);
while(true){
if((i__22778__auto___23942 < len__22777__auto___23941)){
args23938.push((arguments[i__22778__auto___23942]));

var G__23943 = (i__22778__auto___23942 + (1));
i__22778__auto___23942 = G__23943;
continue;
} else {
}
break;
}

var G__23940 = args23938.length;
switch (G__23940) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23938.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23945 = [];
var len__22777__auto___23948 = arguments.length;
var i__22778__auto___23949 = (0);
while(true){
if((i__22778__auto___23949 < len__22777__auto___23948)){
args23945.push((arguments[i__22778__auto___23949]));

var G__23950 = (i__22778__auto___23949 + (1));
i__22778__auto___23949 = G__23950;
continue;
} else {
}
break;
}

var G__23947 = args23945.length;
switch (G__23947) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23945.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23952 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23952);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23952,ret){
return (function (){
return fn1.call(null,val_23952);
});})(val_23952,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23953 = [];
var len__22777__auto___23956 = arguments.length;
var i__22778__auto___23957 = (0);
while(true){
if((i__22778__auto___23957 < len__22777__auto___23956)){
args23953.push((arguments[i__22778__auto___23957]));

var G__23958 = (i__22778__auto___23957 + (1));
i__22778__auto___23957 = G__23958;
continue;
} else {
}
break;
}

var G__23955 = args23953.length;
switch (G__23955) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23953.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22622__auto___23960 = n;
var x_23961 = (0);
while(true){
if((x_23961 < n__22622__auto___23960)){
(a[x_23961] = (0));

var G__23962 = (x_23961 + (1));
x_23961 = G__23962;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23963 = (i + (1));
i = G__23963;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23967 = (function (alt_flag,flag,meta23968){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23968 = meta23968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23969,meta23968__$1){
var self__ = this;
var _23969__$1 = this;
return (new cljs.core.async.t_cljs$core$async23967(self__.alt_flag,self__.flag,meta23968__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23969){
var self__ = this;
var _23969__$1 = this;
return self__.meta23968;
});})(flag))
;

cljs.core.async.t_cljs$core$async23967.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23967.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23967.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23968","meta23968",12419488,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23967";

cljs.core.async.t_cljs$core$async23967.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async23967");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23967 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23967(alt_flag__$1,flag__$1,meta23968){
return (new cljs.core.async.t_cljs$core$async23967(alt_flag__$1,flag__$1,meta23968));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23967(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23973 = (function (alt_handler,flag,cb,meta23974){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23974 = meta23974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23975,meta23974__$1){
var self__ = this;
var _23975__$1 = this;
return (new cljs.core.async.t_cljs$core$async23973(self__.alt_handler,self__.flag,self__.cb,meta23974__$1));
});

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23975){
var self__ = this;
var _23975__$1 = this;
return self__.meta23974;
});

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23974","meta23974",-682738661,null)], null);
});

cljs.core.async.t_cljs$core$async23973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23973";

cljs.core.async.t_cljs$core$async23973.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async23973");
});

cljs.core.async.__GT_t_cljs$core$async23973 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23973(alt_handler__$1,flag__$1,cb__$1,meta23974){
return (new cljs.core.async.t_cljs$core$async23973(alt_handler__$1,flag__$1,cb__$1,meta23974));
});

}

return (new cljs.core.async.t_cljs$core$async23973(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23976_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23976_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23977_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23977_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21707__auto__ = wport;
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23978 = (i + (1));
i = G__23978;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21707__auto__ = ret;
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21695__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21695__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21695__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22784__auto__ = [];
var len__22777__auto___23984 = arguments.length;
var i__22778__auto___23985 = (0);
while(true){
if((i__22778__auto___23985 < len__22777__auto___23984)){
args__22784__auto__.push((arguments[i__22778__auto___23985]));

var G__23986 = (i__22778__auto___23985 + (1));
i__22778__auto___23985 = G__23986;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23981){
var map__23982 = p__23981;
var map__23982__$1 = ((((!((map__23982 == null)))?((((map__23982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23982):map__23982);
var opts = map__23982__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23979){
var G__23980 = cljs.core.first.call(null,seq23979);
var seq23979__$1 = cljs.core.next.call(null,seq23979);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23980,seq23979__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23987 = [];
var len__22777__auto___24037 = arguments.length;
var i__22778__auto___24038 = (0);
while(true){
if((i__22778__auto___24038 < len__22777__auto___24037)){
args23987.push((arguments[i__22778__auto___24038]));

var G__24039 = (i__22778__auto___24038 + (1));
i__22778__auto___24038 = G__24039;
continue;
} else {
}
break;
}

var G__23989 = args23987.length;
switch (G__23989) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23987.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23874__auto___24041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___24041){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___24041){
return (function (state_24013){
var state_val_24014 = (state_24013[(1)]);
if((state_val_24014 === (7))){
var inst_24009 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24015_24042 = state_24013__$1;
(statearr_24015_24042[(2)] = inst_24009);

(statearr_24015_24042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (1))){
var state_24013__$1 = state_24013;
var statearr_24016_24043 = state_24013__$1;
(statearr_24016_24043[(2)] = null);

(statearr_24016_24043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (4))){
var inst_23992 = (state_24013[(7)]);
var inst_23992__$1 = (state_24013[(2)]);
var inst_23993 = (inst_23992__$1 == null);
var state_24013__$1 = (function (){var statearr_24017 = state_24013;
(statearr_24017[(7)] = inst_23992__$1);

return statearr_24017;
})();
if(cljs.core.truth_(inst_23993)){
var statearr_24018_24044 = state_24013__$1;
(statearr_24018_24044[(1)] = (5));

} else {
var statearr_24019_24045 = state_24013__$1;
(statearr_24019_24045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (13))){
var state_24013__$1 = state_24013;
var statearr_24020_24046 = state_24013__$1;
(statearr_24020_24046[(2)] = null);

(statearr_24020_24046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (6))){
var inst_23992 = (state_24013[(7)]);
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24013__$1,(11),to,inst_23992);
} else {
if((state_val_24014 === (3))){
var inst_24011 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24013__$1,inst_24011);
} else {
if((state_val_24014 === (12))){
var state_24013__$1 = state_24013;
var statearr_24021_24047 = state_24013__$1;
(statearr_24021_24047[(2)] = null);

(statearr_24021_24047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (2))){
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24013__$1,(4),from);
} else {
if((state_val_24014 === (11))){
var inst_24002 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
if(cljs.core.truth_(inst_24002)){
var statearr_24022_24048 = state_24013__$1;
(statearr_24022_24048[(1)] = (12));

} else {
var statearr_24023_24049 = state_24013__$1;
(statearr_24023_24049[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (9))){
var state_24013__$1 = state_24013;
var statearr_24024_24050 = state_24013__$1;
(statearr_24024_24050[(2)] = null);

(statearr_24024_24050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (5))){
var state_24013__$1 = state_24013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24025_24051 = state_24013__$1;
(statearr_24025_24051[(1)] = (8));

} else {
var statearr_24026_24052 = state_24013__$1;
(statearr_24026_24052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (14))){
var inst_24007 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24027_24053 = state_24013__$1;
(statearr_24027_24053[(2)] = inst_24007);

(statearr_24027_24053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (10))){
var inst_23999 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24028_24054 = state_24013__$1;
(statearr_24028_24054[(2)] = inst_23999);

(statearr_24028_24054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (8))){
var inst_23996 = cljs.core.async.close_BANG_.call(null,to);
var state_24013__$1 = state_24013;
var statearr_24029_24055 = state_24013__$1;
(statearr_24029_24055[(2)] = inst_23996);

(statearr_24029_24055[(1)] = (10));


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
});})(c__23874__auto___24041))
;
return ((function (switch__23762__auto__,c__23874__auto___24041){
return (function() {
var cljs$core$async$state_machine__23763__auto__ = null;
var cljs$core$async$state_machine__23763__auto____0 = (function (){
var statearr_24033 = [null,null,null,null,null,null,null,null];
(statearr_24033[(0)] = cljs$core$async$state_machine__23763__auto__);

(statearr_24033[(1)] = (1));

return statearr_24033;
});
var cljs$core$async$state_machine__23763__auto____1 = (function (state_24013){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_24013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e24034){if((e24034 instanceof Object)){
var ex__23766__auto__ = e24034;
var statearr_24035_24056 = state_24013;
(statearr_24035_24056[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24057 = state_24013;
state_24013 = G__24057;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$state_machine__23763__auto__ = function(state_24013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23763__auto____1.call(this,state_24013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23763__auto____0;
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23763__auto____1;
return cljs$core$async$state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___24041))
})();
var state__23876__auto__ = (function (){var statearr_24036 = f__23875__auto__.call(null);
(statearr_24036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___24041);

return statearr_24036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___24041))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24241){
var vec__24242 = p__24241;
var v = cljs.core.nth.call(null,vec__24242,(0),null);
var p = cljs.core.nth.call(null,vec__24242,(1),null);
var job = vec__24242;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23874__auto___24424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___24424,res,vec__24242,v,p,job,jobs,results){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___24424,res,vec__24242,v,p,job,jobs,results){
return (function (state_24247){
var state_val_24248 = (state_24247[(1)]);
if((state_val_24248 === (1))){
var state_24247__$1 = state_24247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24247__$1,(2),res,v);
} else {
if((state_val_24248 === (2))){
var inst_24244 = (state_24247[(2)]);
var inst_24245 = cljs.core.async.close_BANG_.call(null,res);
var state_24247__$1 = (function (){var statearr_24249 = state_24247;
(statearr_24249[(7)] = inst_24244);

return statearr_24249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24247__$1,inst_24245);
} else {
return null;
}
}
});})(c__23874__auto___24424,res,vec__24242,v,p,job,jobs,results))
;
return ((function (switch__23762__auto__,c__23874__auto___24424,res,vec__24242,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0 = (function (){
var statearr_24253 = [null,null,null,null,null,null,null,null];
(statearr_24253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__);

(statearr_24253[(1)] = (1));

return statearr_24253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1 = (function (state_24247){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_24247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e24254){if((e24254 instanceof Object)){
var ex__23766__auto__ = e24254;
var statearr_24255_24425 = state_24247;
(statearr_24255_24425[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24426 = state_24247;
state_24247 = G__24426;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__ = function(state_24247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1.call(this,state_24247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___24424,res,vec__24242,v,p,job,jobs,results))
})();
var state__23876__auto__ = (function (){var statearr_24256 = f__23875__auto__.call(null);
(statearr_24256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___24424);

return statearr_24256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___24424,res,vec__24242,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24257){
var vec__24258 = p__24257;
var v = cljs.core.nth.call(null,vec__24258,(0),null);
var p = cljs.core.nth.call(null,vec__24258,(1),null);
var job = vec__24258;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22622__auto___24427 = n;
var __24428 = (0);
while(true){
if((__24428 < n__22622__auto___24427)){
var G__24259_24429 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24259_24429) {
case "compute":
var c__23874__auto___24431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24428,c__23874__auto___24431,G__24259_24429,n__22622__auto___24427,jobs,results,process,async){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (__24428,c__23874__auto___24431,G__24259_24429,n__22622__auto___24427,jobs,results,process,async){
return (function (state_24272){
var state_val_24273 = (state_24272[(1)]);
if((state_val_24273 === (1))){
var state_24272__$1 = state_24272;
var statearr_24274_24432 = state_24272__$1;
(statearr_24274_24432[(2)] = null);

(statearr_24274_24432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (2))){
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24272__$1,(4),jobs);
} else {
if((state_val_24273 === (3))){
var inst_24270 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24272__$1,inst_24270);
} else {
if((state_val_24273 === (4))){
var inst_24262 = (state_24272[(2)]);
var inst_24263 = process.call(null,inst_24262);
var state_24272__$1 = state_24272;
if(cljs.core.truth_(inst_24263)){
var statearr_24275_24433 = state_24272__$1;
(statearr_24275_24433[(1)] = (5));

} else {
var statearr_24276_24434 = state_24272__$1;
(statearr_24276_24434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (5))){
var state_24272__$1 = state_24272;
var statearr_24277_24435 = state_24272__$1;
(statearr_24277_24435[(2)] = null);

(statearr_24277_24435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (6))){
var state_24272__$1 = state_24272;
var statearr_24278_24436 = state_24272__$1;
(statearr_24278_24436[(2)] = null);

(statearr_24278_24436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (7))){
var inst_24268 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
var statearr_24279_24437 = state_24272__$1;
(statearr_24279_24437[(2)] = inst_24268);

(statearr_24279_24437[(1)] = (3));


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
});})(__24428,c__23874__auto___24431,G__24259_24429,n__22622__auto___24427,jobs,results,process,async))
;
return ((function (__24428,switch__23762__auto__,c__23874__auto___24431,G__24259_24429,n__22622__auto___24427,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0 = (function (){
var statearr_24283 = [null,null,null,null,null,null,null];
(statearr_24283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__);

(statearr_24283[(1)] = (1));

return statearr_24283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1 = (function (state_24272){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_24272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e24284){if((e24284 instanceof Object)){
var ex__23766__auto__ = e24284;
var statearr_24285_24438 = state_24272;
(statearr_24285_24438[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24439 = state_24272;
state_24272 = G__24439;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__ = function(state_24272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1.call(this,state_24272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__;
})()
;})(__24428,switch__23762__auto__,c__23874__auto___24431,G__24259_24429,n__22622__auto___24427,jobs,results,process,async))
})();
var state__23876__auto__ = (function (){var statearr_24286 = f__23875__auto__.call(null);
(statearr_24286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___24431);

return statearr_24286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(__24428,c__23874__auto___24431,G__24259_24429,n__22622__auto___24427,jobs,results,process,async))
);


break;
case "async":
var c__23874__auto___24440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24428,c__23874__auto___24440,G__24259_24429,n__22622__auto___24427,jobs,results,process,async){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (__24428,c__23874__auto___24440,G__24259_24429,n__22622__auto___24427,jobs,results,process,async){
return (function (state_24299){
var state_val_24300 = (state_24299[(1)]);
if((state_val_24300 === (1))){
var state_24299__$1 = state_24299;
var statearr_24301_24441 = state_24299__$1;
(statearr_24301_24441[(2)] = null);

(statearr_24301_24441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (2))){
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24299__$1,(4),jobs);
} else {
if((state_val_24300 === (3))){
var inst_24297 = (state_24299[(2)]);
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24299__$1,inst_24297);
} else {
if((state_val_24300 === (4))){
var inst_24289 = (state_24299[(2)]);
var inst_24290 = async.call(null,inst_24289);
var state_24299__$1 = state_24299;
if(cljs.core.truth_(inst_24290)){
var statearr_24302_24442 = state_24299__$1;
(statearr_24302_24442[(1)] = (5));

} else {
var statearr_24303_24443 = state_24299__$1;
(statearr_24303_24443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (5))){
var state_24299__$1 = state_24299;
var statearr_24304_24444 = state_24299__$1;
(statearr_24304_24444[(2)] = null);

(statearr_24304_24444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (6))){
var state_24299__$1 = state_24299;
var statearr_24305_24445 = state_24299__$1;
(statearr_24305_24445[(2)] = null);

(statearr_24305_24445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (7))){
var inst_24295 = (state_24299[(2)]);
var state_24299__$1 = state_24299;
var statearr_24306_24446 = state_24299__$1;
(statearr_24306_24446[(2)] = inst_24295);

(statearr_24306_24446[(1)] = (3));


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
});})(__24428,c__23874__auto___24440,G__24259_24429,n__22622__auto___24427,jobs,results,process,async))
;
return ((function (__24428,switch__23762__auto__,c__23874__auto___24440,G__24259_24429,n__22622__auto___24427,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0 = (function (){
var statearr_24310 = [null,null,null,null,null,null,null];
(statearr_24310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__);

(statearr_24310[(1)] = (1));

return statearr_24310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1 = (function (state_24299){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_24299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e24311){if((e24311 instanceof Object)){
var ex__23766__auto__ = e24311;
var statearr_24312_24447 = state_24299;
(statearr_24312_24447[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24448 = state_24299;
state_24299 = G__24448;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__ = function(state_24299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1.call(this,state_24299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__;
})()
;})(__24428,switch__23762__auto__,c__23874__auto___24440,G__24259_24429,n__22622__auto___24427,jobs,results,process,async))
})();
var state__23876__auto__ = (function (){var statearr_24313 = f__23875__auto__.call(null);
(statearr_24313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___24440);

return statearr_24313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(__24428,c__23874__auto___24440,G__24259_24429,n__22622__auto___24427,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24449 = (__24428 + (1));
__24428 = G__24449;
continue;
} else {
}
break;
}

var c__23874__auto___24450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___24450,jobs,results,process,async){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___24450,jobs,results,process,async){
return (function (state_24335){
var state_val_24336 = (state_24335[(1)]);
if((state_val_24336 === (1))){
var state_24335__$1 = state_24335;
var statearr_24337_24451 = state_24335__$1;
(statearr_24337_24451[(2)] = null);

(statearr_24337_24451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (2))){
var state_24335__$1 = state_24335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24335__$1,(4),from);
} else {
if((state_val_24336 === (3))){
var inst_24333 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24335__$1,inst_24333);
} else {
if((state_val_24336 === (4))){
var inst_24316 = (state_24335[(7)]);
var inst_24316__$1 = (state_24335[(2)]);
var inst_24317 = (inst_24316__$1 == null);
var state_24335__$1 = (function (){var statearr_24338 = state_24335;
(statearr_24338[(7)] = inst_24316__$1);

return statearr_24338;
})();
if(cljs.core.truth_(inst_24317)){
var statearr_24339_24452 = state_24335__$1;
(statearr_24339_24452[(1)] = (5));

} else {
var statearr_24340_24453 = state_24335__$1;
(statearr_24340_24453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (5))){
var inst_24319 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24335__$1 = state_24335;
var statearr_24341_24454 = state_24335__$1;
(statearr_24341_24454[(2)] = inst_24319);

(statearr_24341_24454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (6))){
var inst_24321 = (state_24335[(8)]);
var inst_24316 = (state_24335[(7)]);
var inst_24321__$1 = cljs.core.async.chan.call(null,(1));
var inst_24322 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24323 = [inst_24316,inst_24321__$1];
var inst_24324 = (new cljs.core.PersistentVector(null,2,(5),inst_24322,inst_24323,null));
var state_24335__$1 = (function (){var statearr_24342 = state_24335;
(statearr_24342[(8)] = inst_24321__$1);

return statearr_24342;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24335__$1,(8),jobs,inst_24324);
} else {
if((state_val_24336 === (7))){
var inst_24331 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
var statearr_24343_24455 = state_24335__$1;
(statearr_24343_24455[(2)] = inst_24331);

(statearr_24343_24455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (8))){
var inst_24321 = (state_24335[(8)]);
var inst_24326 = (state_24335[(2)]);
var state_24335__$1 = (function (){var statearr_24344 = state_24335;
(statearr_24344[(9)] = inst_24326);

return statearr_24344;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24335__$1,(9),results,inst_24321);
} else {
if((state_val_24336 === (9))){
var inst_24328 = (state_24335[(2)]);
var state_24335__$1 = (function (){var statearr_24345 = state_24335;
(statearr_24345[(10)] = inst_24328);

return statearr_24345;
})();
var statearr_24346_24456 = state_24335__$1;
(statearr_24346_24456[(2)] = null);

(statearr_24346_24456[(1)] = (2));


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
});})(c__23874__auto___24450,jobs,results,process,async))
;
return ((function (switch__23762__auto__,c__23874__auto___24450,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0 = (function (){
var statearr_24350 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__);

(statearr_24350[(1)] = (1));

return statearr_24350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1 = (function (state_24335){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_24335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e24351){if((e24351 instanceof Object)){
var ex__23766__auto__ = e24351;
var statearr_24352_24457 = state_24335;
(statearr_24352_24457[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24458 = state_24335;
state_24335 = G__24458;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__ = function(state_24335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1.call(this,state_24335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___24450,jobs,results,process,async))
})();
var state__23876__auto__ = (function (){var statearr_24353 = f__23875__auto__.call(null);
(statearr_24353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___24450);

return statearr_24353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___24450,jobs,results,process,async))
);


var c__23874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto__,jobs,results,process,async){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto__,jobs,results,process,async){
return (function (state_24391){
var state_val_24392 = (state_24391[(1)]);
if((state_val_24392 === (7))){
var inst_24387 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24393_24459 = state_24391__$1;
(statearr_24393_24459[(2)] = inst_24387);

(statearr_24393_24459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (20))){
var state_24391__$1 = state_24391;
var statearr_24394_24460 = state_24391__$1;
(statearr_24394_24460[(2)] = null);

(statearr_24394_24460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (1))){
var state_24391__$1 = state_24391;
var statearr_24395_24461 = state_24391__$1;
(statearr_24395_24461[(2)] = null);

(statearr_24395_24461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (4))){
var inst_24356 = (state_24391[(7)]);
var inst_24356__$1 = (state_24391[(2)]);
var inst_24357 = (inst_24356__$1 == null);
var state_24391__$1 = (function (){var statearr_24396 = state_24391;
(statearr_24396[(7)] = inst_24356__$1);

return statearr_24396;
})();
if(cljs.core.truth_(inst_24357)){
var statearr_24397_24462 = state_24391__$1;
(statearr_24397_24462[(1)] = (5));

} else {
var statearr_24398_24463 = state_24391__$1;
(statearr_24398_24463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (15))){
var inst_24369 = (state_24391[(8)]);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24391__$1,(18),to,inst_24369);
} else {
if((state_val_24392 === (21))){
var inst_24382 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24399_24464 = state_24391__$1;
(statearr_24399_24464[(2)] = inst_24382);

(statearr_24399_24464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (13))){
var inst_24384 = (state_24391[(2)]);
var state_24391__$1 = (function (){var statearr_24400 = state_24391;
(statearr_24400[(9)] = inst_24384);

return statearr_24400;
})();
var statearr_24401_24465 = state_24391__$1;
(statearr_24401_24465[(2)] = null);

(statearr_24401_24465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (6))){
var inst_24356 = (state_24391[(7)]);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24391__$1,(11),inst_24356);
} else {
if((state_val_24392 === (17))){
var inst_24377 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
if(cljs.core.truth_(inst_24377)){
var statearr_24402_24466 = state_24391__$1;
(statearr_24402_24466[(1)] = (19));

} else {
var statearr_24403_24467 = state_24391__$1;
(statearr_24403_24467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (3))){
var inst_24389 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24391__$1,inst_24389);
} else {
if((state_val_24392 === (12))){
var inst_24366 = (state_24391[(10)]);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24391__$1,(14),inst_24366);
} else {
if((state_val_24392 === (2))){
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24391__$1,(4),results);
} else {
if((state_val_24392 === (19))){
var state_24391__$1 = state_24391;
var statearr_24404_24468 = state_24391__$1;
(statearr_24404_24468[(2)] = null);

(statearr_24404_24468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (11))){
var inst_24366 = (state_24391[(2)]);
var state_24391__$1 = (function (){var statearr_24405 = state_24391;
(statearr_24405[(10)] = inst_24366);

return statearr_24405;
})();
var statearr_24406_24469 = state_24391__$1;
(statearr_24406_24469[(2)] = null);

(statearr_24406_24469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (9))){
var state_24391__$1 = state_24391;
var statearr_24407_24470 = state_24391__$1;
(statearr_24407_24470[(2)] = null);

(statearr_24407_24470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (5))){
var state_24391__$1 = state_24391;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24408_24471 = state_24391__$1;
(statearr_24408_24471[(1)] = (8));

} else {
var statearr_24409_24472 = state_24391__$1;
(statearr_24409_24472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (14))){
var inst_24369 = (state_24391[(8)]);
var inst_24371 = (state_24391[(11)]);
var inst_24369__$1 = (state_24391[(2)]);
var inst_24370 = (inst_24369__$1 == null);
var inst_24371__$1 = cljs.core.not.call(null,inst_24370);
var state_24391__$1 = (function (){var statearr_24410 = state_24391;
(statearr_24410[(8)] = inst_24369__$1);

(statearr_24410[(11)] = inst_24371__$1);

return statearr_24410;
})();
if(inst_24371__$1){
var statearr_24411_24473 = state_24391__$1;
(statearr_24411_24473[(1)] = (15));

} else {
var statearr_24412_24474 = state_24391__$1;
(statearr_24412_24474[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (16))){
var inst_24371 = (state_24391[(11)]);
var state_24391__$1 = state_24391;
var statearr_24413_24475 = state_24391__$1;
(statearr_24413_24475[(2)] = inst_24371);

(statearr_24413_24475[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (10))){
var inst_24363 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24414_24476 = state_24391__$1;
(statearr_24414_24476[(2)] = inst_24363);

(statearr_24414_24476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (18))){
var inst_24374 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24415_24477 = state_24391__$1;
(statearr_24415_24477[(2)] = inst_24374);

(statearr_24415_24477[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (8))){
var inst_24360 = cljs.core.async.close_BANG_.call(null,to);
var state_24391__$1 = state_24391;
var statearr_24416_24478 = state_24391__$1;
(statearr_24416_24478[(2)] = inst_24360);

(statearr_24416_24478[(1)] = (10));


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
});})(c__23874__auto__,jobs,results,process,async))
;
return ((function (switch__23762__auto__,c__23874__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0 = (function (){
var statearr_24420 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__);

(statearr_24420[(1)] = (1));

return statearr_24420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1 = (function (state_24391){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_24391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e24421){if((e24421 instanceof Object)){
var ex__23766__auto__ = e24421;
var statearr_24422_24479 = state_24391;
(statearr_24422_24479[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24480 = state_24391;
state_24391 = G__24480;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__ = function(state_24391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1.call(this,state_24391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23763__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto__,jobs,results,process,async))
})();
var state__23876__auto__ = (function (){var statearr_24423 = f__23875__auto__.call(null);
(statearr_24423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto__);

return statearr_24423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto__,jobs,results,process,async))
);

return c__23874__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24481 = [];
var len__22777__auto___24484 = arguments.length;
var i__22778__auto___24485 = (0);
while(true){
if((i__22778__auto___24485 < len__22777__auto___24484)){
args24481.push((arguments[i__22778__auto___24485]));

var G__24486 = (i__22778__auto___24485 + (1));
i__22778__auto___24485 = G__24486;
continue;
} else {
}
break;
}

var G__24483 = args24481.length;
switch (G__24483) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24481.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24488 = [];
var len__22777__auto___24491 = arguments.length;
var i__22778__auto___24492 = (0);
while(true){
if((i__22778__auto___24492 < len__22777__auto___24491)){
args24488.push((arguments[i__22778__auto___24492]));

var G__24493 = (i__22778__auto___24492 + (1));
i__22778__auto___24492 = G__24493;
continue;
} else {
}
break;
}

var G__24490 = args24488.length;
switch (G__24490) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24488.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24495 = [];
var len__22777__auto___24548 = arguments.length;
var i__22778__auto___24549 = (0);
while(true){
if((i__22778__auto___24549 < len__22777__auto___24548)){
args24495.push((arguments[i__22778__auto___24549]));

var G__24550 = (i__22778__auto___24549 + (1));
i__22778__auto___24549 = G__24550;
continue;
} else {
}
break;
}

var G__24497 = args24495.length;
switch (G__24497) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24495.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23874__auto___24552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___24552,tc,fc){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___24552,tc,fc){
return (function (state_24523){
var state_val_24524 = (state_24523[(1)]);
if((state_val_24524 === (7))){
var inst_24519 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24525_24553 = state_24523__$1;
(statearr_24525_24553[(2)] = inst_24519);

(statearr_24525_24553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (1))){
var state_24523__$1 = state_24523;
var statearr_24526_24554 = state_24523__$1;
(statearr_24526_24554[(2)] = null);

(statearr_24526_24554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (4))){
var inst_24500 = (state_24523[(7)]);
var inst_24500__$1 = (state_24523[(2)]);
var inst_24501 = (inst_24500__$1 == null);
var state_24523__$1 = (function (){var statearr_24527 = state_24523;
(statearr_24527[(7)] = inst_24500__$1);

return statearr_24527;
})();
if(cljs.core.truth_(inst_24501)){
var statearr_24528_24555 = state_24523__$1;
(statearr_24528_24555[(1)] = (5));

} else {
var statearr_24529_24556 = state_24523__$1;
(statearr_24529_24556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (13))){
var state_24523__$1 = state_24523;
var statearr_24530_24557 = state_24523__$1;
(statearr_24530_24557[(2)] = null);

(statearr_24530_24557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (6))){
var inst_24500 = (state_24523[(7)]);
var inst_24506 = p.call(null,inst_24500);
var state_24523__$1 = state_24523;
if(cljs.core.truth_(inst_24506)){
var statearr_24531_24558 = state_24523__$1;
(statearr_24531_24558[(1)] = (9));

} else {
var statearr_24532_24559 = state_24523__$1;
(statearr_24532_24559[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (3))){
var inst_24521 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24523__$1,inst_24521);
} else {
if((state_val_24524 === (12))){
var state_24523__$1 = state_24523;
var statearr_24533_24560 = state_24523__$1;
(statearr_24533_24560[(2)] = null);

(statearr_24533_24560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (2))){
var state_24523__$1 = state_24523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24523__$1,(4),ch);
} else {
if((state_val_24524 === (11))){
var inst_24500 = (state_24523[(7)]);
var inst_24510 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24523__$1,(8),inst_24510,inst_24500);
} else {
if((state_val_24524 === (9))){
var state_24523__$1 = state_24523;
var statearr_24534_24561 = state_24523__$1;
(statearr_24534_24561[(2)] = tc);

(statearr_24534_24561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (5))){
var inst_24503 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24504 = cljs.core.async.close_BANG_.call(null,fc);
var state_24523__$1 = (function (){var statearr_24535 = state_24523;
(statearr_24535[(8)] = inst_24503);

return statearr_24535;
})();
var statearr_24536_24562 = state_24523__$1;
(statearr_24536_24562[(2)] = inst_24504);

(statearr_24536_24562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (14))){
var inst_24517 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24537_24563 = state_24523__$1;
(statearr_24537_24563[(2)] = inst_24517);

(statearr_24537_24563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (10))){
var state_24523__$1 = state_24523;
var statearr_24538_24564 = state_24523__$1;
(statearr_24538_24564[(2)] = fc);

(statearr_24538_24564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (8))){
var inst_24512 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
if(cljs.core.truth_(inst_24512)){
var statearr_24539_24565 = state_24523__$1;
(statearr_24539_24565[(1)] = (12));

} else {
var statearr_24540_24566 = state_24523__$1;
(statearr_24540_24566[(1)] = (13));

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
});})(c__23874__auto___24552,tc,fc))
;
return ((function (switch__23762__auto__,c__23874__auto___24552,tc,fc){
return (function() {
var cljs$core$async$state_machine__23763__auto__ = null;
var cljs$core$async$state_machine__23763__auto____0 = (function (){
var statearr_24544 = [null,null,null,null,null,null,null,null,null];
(statearr_24544[(0)] = cljs$core$async$state_machine__23763__auto__);

(statearr_24544[(1)] = (1));

return statearr_24544;
});
var cljs$core$async$state_machine__23763__auto____1 = (function (state_24523){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_24523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e24545){if((e24545 instanceof Object)){
var ex__23766__auto__ = e24545;
var statearr_24546_24567 = state_24523;
(statearr_24546_24567[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24568 = state_24523;
state_24523 = G__24568;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$state_machine__23763__auto__ = function(state_24523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23763__auto____1.call(this,state_24523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23763__auto____0;
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23763__auto____1;
return cljs$core$async$state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___24552,tc,fc))
})();
var state__23876__auto__ = (function (){var statearr_24547 = f__23875__auto__.call(null);
(statearr_24547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___24552);

return statearr_24547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___24552,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto__){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto__){
return (function (state_24632){
var state_val_24633 = (state_24632[(1)]);
if((state_val_24633 === (7))){
var inst_24628 = (state_24632[(2)]);
var state_24632__$1 = state_24632;
var statearr_24634_24655 = state_24632__$1;
(statearr_24634_24655[(2)] = inst_24628);

(statearr_24634_24655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24633 === (1))){
var inst_24612 = init;
var state_24632__$1 = (function (){var statearr_24635 = state_24632;
(statearr_24635[(7)] = inst_24612);

return statearr_24635;
})();
var statearr_24636_24656 = state_24632__$1;
(statearr_24636_24656[(2)] = null);

(statearr_24636_24656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24633 === (4))){
var inst_24615 = (state_24632[(8)]);
var inst_24615__$1 = (state_24632[(2)]);
var inst_24616 = (inst_24615__$1 == null);
var state_24632__$1 = (function (){var statearr_24637 = state_24632;
(statearr_24637[(8)] = inst_24615__$1);

return statearr_24637;
})();
if(cljs.core.truth_(inst_24616)){
var statearr_24638_24657 = state_24632__$1;
(statearr_24638_24657[(1)] = (5));

} else {
var statearr_24639_24658 = state_24632__$1;
(statearr_24639_24658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24633 === (6))){
var inst_24615 = (state_24632[(8)]);
var inst_24619 = (state_24632[(9)]);
var inst_24612 = (state_24632[(7)]);
var inst_24619__$1 = f.call(null,inst_24612,inst_24615);
var inst_24620 = cljs.core.reduced_QMARK_.call(null,inst_24619__$1);
var state_24632__$1 = (function (){var statearr_24640 = state_24632;
(statearr_24640[(9)] = inst_24619__$1);

return statearr_24640;
})();
if(inst_24620){
var statearr_24641_24659 = state_24632__$1;
(statearr_24641_24659[(1)] = (8));

} else {
var statearr_24642_24660 = state_24632__$1;
(statearr_24642_24660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24633 === (3))){
var inst_24630 = (state_24632[(2)]);
var state_24632__$1 = state_24632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24632__$1,inst_24630);
} else {
if((state_val_24633 === (2))){
var state_24632__$1 = state_24632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24632__$1,(4),ch);
} else {
if((state_val_24633 === (9))){
var inst_24619 = (state_24632[(9)]);
var inst_24612 = inst_24619;
var state_24632__$1 = (function (){var statearr_24643 = state_24632;
(statearr_24643[(7)] = inst_24612);

return statearr_24643;
})();
var statearr_24644_24661 = state_24632__$1;
(statearr_24644_24661[(2)] = null);

(statearr_24644_24661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24633 === (5))){
var inst_24612 = (state_24632[(7)]);
var state_24632__$1 = state_24632;
var statearr_24645_24662 = state_24632__$1;
(statearr_24645_24662[(2)] = inst_24612);

(statearr_24645_24662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24633 === (10))){
var inst_24626 = (state_24632[(2)]);
var state_24632__$1 = state_24632;
var statearr_24646_24663 = state_24632__$1;
(statearr_24646_24663[(2)] = inst_24626);

(statearr_24646_24663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24633 === (8))){
var inst_24619 = (state_24632[(9)]);
var inst_24622 = cljs.core.deref.call(null,inst_24619);
var state_24632__$1 = state_24632;
var statearr_24647_24664 = state_24632__$1;
(statearr_24647_24664[(2)] = inst_24622);

(statearr_24647_24664[(1)] = (10));


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
});})(c__23874__auto__))
;
return ((function (switch__23762__auto__,c__23874__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23763__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23763__auto____0 = (function (){
var statearr_24651 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24651[(0)] = cljs$core$async$reduce_$_state_machine__23763__auto__);

(statearr_24651[(1)] = (1));

return statearr_24651;
});
var cljs$core$async$reduce_$_state_machine__23763__auto____1 = (function (state_24632){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_24632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e24652){if((e24652 instanceof Object)){
var ex__23766__auto__ = e24652;
var statearr_24653_24665 = state_24632;
(statearr_24653_24665[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24666 = state_24632;
state_24632 = G__24666;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23763__auto__ = function(state_24632){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23763__auto____1.call(this,state_24632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23763__auto____0;
cljs$core$async$reduce_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23763__auto____1;
return cljs$core$async$reduce_$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto__))
})();
var state__23876__auto__ = (function (){var statearr_24654 = f__23875__auto__.call(null);
(statearr_24654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto__);

return statearr_24654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto__))
);

return c__23874__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24667 = [];
var len__22777__auto___24719 = arguments.length;
var i__22778__auto___24720 = (0);
while(true){
if((i__22778__auto___24720 < len__22777__auto___24719)){
args24667.push((arguments[i__22778__auto___24720]));

var G__24721 = (i__22778__auto___24720 + (1));
i__22778__auto___24720 = G__24721;
continue;
} else {
}
break;
}

var G__24669 = args24667.length;
switch (G__24669) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24667.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto__){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto__){
return (function (state_24694){
var state_val_24695 = (state_24694[(1)]);
if((state_val_24695 === (7))){
var inst_24676 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
var statearr_24696_24723 = state_24694__$1;
(statearr_24696_24723[(2)] = inst_24676);

(statearr_24696_24723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (1))){
var inst_24670 = cljs.core.seq.call(null,coll);
var inst_24671 = inst_24670;
var state_24694__$1 = (function (){var statearr_24697 = state_24694;
(statearr_24697[(7)] = inst_24671);

return statearr_24697;
})();
var statearr_24698_24724 = state_24694__$1;
(statearr_24698_24724[(2)] = null);

(statearr_24698_24724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (4))){
var inst_24671 = (state_24694[(7)]);
var inst_24674 = cljs.core.first.call(null,inst_24671);
var state_24694__$1 = state_24694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24694__$1,(7),ch,inst_24674);
} else {
if((state_val_24695 === (13))){
var inst_24688 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
var statearr_24699_24725 = state_24694__$1;
(statearr_24699_24725[(2)] = inst_24688);

(statearr_24699_24725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (6))){
var inst_24679 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
if(cljs.core.truth_(inst_24679)){
var statearr_24700_24726 = state_24694__$1;
(statearr_24700_24726[(1)] = (8));

} else {
var statearr_24701_24727 = state_24694__$1;
(statearr_24701_24727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (3))){
var inst_24692 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24694__$1,inst_24692);
} else {
if((state_val_24695 === (12))){
var state_24694__$1 = state_24694;
var statearr_24702_24728 = state_24694__$1;
(statearr_24702_24728[(2)] = null);

(statearr_24702_24728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (2))){
var inst_24671 = (state_24694[(7)]);
var state_24694__$1 = state_24694;
if(cljs.core.truth_(inst_24671)){
var statearr_24703_24729 = state_24694__$1;
(statearr_24703_24729[(1)] = (4));

} else {
var statearr_24704_24730 = state_24694__$1;
(statearr_24704_24730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (11))){
var inst_24685 = cljs.core.async.close_BANG_.call(null,ch);
var state_24694__$1 = state_24694;
var statearr_24705_24731 = state_24694__$1;
(statearr_24705_24731[(2)] = inst_24685);

(statearr_24705_24731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (9))){
var state_24694__$1 = state_24694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24706_24732 = state_24694__$1;
(statearr_24706_24732[(1)] = (11));

} else {
var statearr_24707_24733 = state_24694__$1;
(statearr_24707_24733[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (5))){
var inst_24671 = (state_24694[(7)]);
var state_24694__$1 = state_24694;
var statearr_24708_24734 = state_24694__$1;
(statearr_24708_24734[(2)] = inst_24671);

(statearr_24708_24734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (10))){
var inst_24690 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
var statearr_24709_24735 = state_24694__$1;
(statearr_24709_24735[(2)] = inst_24690);

(statearr_24709_24735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (8))){
var inst_24671 = (state_24694[(7)]);
var inst_24681 = cljs.core.next.call(null,inst_24671);
var inst_24671__$1 = inst_24681;
var state_24694__$1 = (function (){var statearr_24710 = state_24694;
(statearr_24710[(7)] = inst_24671__$1);

return statearr_24710;
})();
var statearr_24711_24736 = state_24694__$1;
(statearr_24711_24736[(2)] = null);

(statearr_24711_24736[(1)] = (2));


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
});})(c__23874__auto__))
;
return ((function (switch__23762__auto__,c__23874__auto__){
return (function() {
var cljs$core$async$state_machine__23763__auto__ = null;
var cljs$core$async$state_machine__23763__auto____0 = (function (){
var statearr_24715 = [null,null,null,null,null,null,null,null];
(statearr_24715[(0)] = cljs$core$async$state_machine__23763__auto__);

(statearr_24715[(1)] = (1));

return statearr_24715;
});
var cljs$core$async$state_machine__23763__auto____1 = (function (state_24694){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_24694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e24716){if((e24716 instanceof Object)){
var ex__23766__auto__ = e24716;
var statearr_24717_24737 = state_24694;
(statearr_24717_24737[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24738 = state_24694;
state_24694 = G__24738;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$state_machine__23763__auto__ = function(state_24694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23763__auto____1.call(this,state_24694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23763__auto____0;
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23763__auto____1;
return cljs$core$async$state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto__))
})();
var state__23876__auto__ = (function (){var statearr_24718 = f__23875__auto__.call(null);
(statearr_24718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto__);

return statearr_24718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto__))
);

return c__23874__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22370__auto__ = (((_ == null))?null:_);
var m__22371__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,_);
} else {
var m__22371__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22371__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m,ch);
} else {
var m__22371__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m);
} else {
var m__22371__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24960 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24960 = (function (mult,ch,cs,meta24961){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24961 = meta24961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24962,meta24961__$1){
var self__ = this;
var _24962__$1 = this;
return (new cljs.core.async.t_cljs$core$async24960(self__.mult,self__.ch,self__.cs,meta24961__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24962){
var self__ = this;
var _24962__$1 = this;
return self__.meta24961;
});})(cs))
;

cljs.core.async.t_cljs$core$async24960.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24960.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24960.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24960.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24960.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24960.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24961","meta24961",-1496979708,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24960.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24960";

cljs.core.async.t_cljs$core$async24960.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async24960");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24960 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24960(mult__$1,ch__$1,cs__$1,meta24961){
return (new cljs.core.async.t_cljs$core$async24960(mult__$1,ch__$1,cs__$1,meta24961));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24960(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23874__auto___25181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___25181,cs,m,dchan,dctr,done){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___25181,cs,m,dchan,dctr,done){
return (function (state_25093){
var state_val_25094 = (state_25093[(1)]);
if((state_val_25094 === (7))){
var inst_25089 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25095_25182 = state_25093__$1;
(statearr_25095_25182[(2)] = inst_25089);

(statearr_25095_25182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (20))){
var inst_24994 = (state_25093[(7)]);
var inst_25004 = cljs.core.first.call(null,inst_24994);
var inst_25005 = cljs.core.nth.call(null,inst_25004,(0),null);
var inst_25006 = cljs.core.nth.call(null,inst_25004,(1),null);
var state_25093__$1 = (function (){var statearr_25096 = state_25093;
(statearr_25096[(8)] = inst_25005);

return statearr_25096;
})();
if(cljs.core.truth_(inst_25006)){
var statearr_25097_25183 = state_25093__$1;
(statearr_25097_25183[(1)] = (22));

} else {
var statearr_25098_25184 = state_25093__$1;
(statearr_25098_25184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (27))){
var inst_25041 = (state_25093[(9)]);
var inst_24965 = (state_25093[(10)]);
var inst_25034 = (state_25093[(11)]);
var inst_25036 = (state_25093[(12)]);
var inst_25041__$1 = cljs.core._nth.call(null,inst_25034,inst_25036);
var inst_25042 = cljs.core.async.put_BANG_.call(null,inst_25041__$1,inst_24965,done);
var state_25093__$1 = (function (){var statearr_25099 = state_25093;
(statearr_25099[(9)] = inst_25041__$1);

return statearr_25099;
})();
if(cljs.core.truth_(inst_25042)){
var statearr_25100_25185 = state_25093__$1;
(statearr_25100_25185[(1)] = (30));

} else {
var statearr_25101_25186 = state_25093__$1;
(statearr_25101_25186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (1))){
var state_25093__$1 = state_25093;
var statearr_25102_25187 = state_25093__$1;
(statearr_25102_25187[(2)] = null);

(statearr_25102_25187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (24))){
var inst_24994 = (state_25093[(7)]);
var inst_25011 = (state_25093[(2)]);
var inst_25012 = cljs.core.next.call(null,inst_24994);
var inst_24974 = inst_25012;
var inst_24975 = null;
var inst_24976 = (0);
var inst_24977 = (0);
var state_25093__$1 = (function (){var statearr_25103 = state_25093;
(statearr_25103[(13)] = inst_24976);

(statearr_25103[(14)] = inst_24977);

(statearr_25103[(15)] = inst_24975);

(statearr_25103[(16)] = inst_25011);

(statearr_25103[(17)] = inst_24974);

return statearr_25103;
})();
var statearr_25104_25188 = state_25093__$1;
(statearr_25104_25188[(2)] = null);

(statearr_25104_25188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (39))){
var state_25093__$1 = state_25093;
var statearr_25108_25189 = state_25093__$1;
(statearr_25108_25189[(2)] = null);

(statearr_25108_25189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (4))){
var inst_24965 = (state_25093[(10)]);
var inst_24965__$1 = (state_25093[(2)]);
var inst_24966 = (inst_24965__$1 == null);
var state_25093__$1 = (function (){var statearr_25109 = state_25093;
(statearr_25109[(10)] = inst_24965__$1);

return statearr_25109;
})();
if(cljs.core.truth_(inst_24966)){
var statearr_25110_25190 = state_25093__$1;
(statearr_25110_25190[(1)] = (5));

} else {
var statearr_25111_25191 = state_25093__$1;
(statearr_25111_25191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (15))){
var inst_24976 = (state_25093[(13)]);
var inst_24977 = (state_25093[(14)]);
var inst_24975 = (state_25093[(15)]);
var inst_24974 = (state_25093[(17)]);
var inst_24990 = (state_25093[(2)]);
var inst_24991 = (inst_24977 + (1));
var tmp25105 = inst_24976;
var tmp25106 = inst_24975;
var tmp25107 = inst_24974;
var inst_24974__$1 = tmp25107;
var inst_24975__$1 = tmp25106;
var inst_24976__$1 = tmp25105;
var inst_24977__$1 = inst_24991;
var state_25093__$1 = (function (){var statearr_25112 = state_25093;
(statearr_25112[(18)] = inst_24990);

(statearr_25112[(13)] = inst_24976__$1);

(statearr_25112[(14)] = inst_24977__$1);

(statearr_25112[(15)] = inst_24975__$1);

(statearr_25112[(17)] = inst_24974__$1);

return statearr_25112;
})();
var statearr_25113_25192 = state_25093__$1;
(statearr_25113_25192[(2)] = null);

(statearr_25113_25192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (21))){
var inst_25015 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25117_25193 = state_25093__$1;
(statearr_25117_25193[(2)] = inst_25015);

(statearr_25117_25193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (31))){
var inst_25041 = (state_25093[(9)]);
var inst_25045 = done.call(null,null);
var inst_25046 = cljs.core.async.untap_STAR_.call(null,m,inst_25041);
var state_25093__$1 = (function (){var statearr_25118 = state_25093;
(statearr_25118[(19)] = inst_25045);

return statearr_25118;
})();
var statearr_25119_25194 = state_25093__$1;
(statearr_25119_25194[(2)] = inst_25046);

(statearr_25119_25194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (32))){
var inst_25035 = (state_25093[(20)]);
var inst_25034 = (state_25093[(11)]);
var inst_25036 = (state_25093[(12)]);
var inst_25033 = (state_25093[(21)]);
var inst_25048 = (state_25093[(2)]);
var inst_25049 = (inst_25036 + (1));
var tmp25114 = inst_25035;
var tmp25115 = inst_25034;
var tmp25116 = inst_25033;
var inst_25033__$1 = tmp25116;
var inst_25034__$1 = tmp25115;
var inst_25035__$1 = tmp25114;
var inst_25036__$1 = inst_25049;
var state_25093__$1 = (function (){var statearr_25120 = state_25093;
(statearr_25120[(22)] = inst_25048);

(statearr_25120[(20)] = inst_25035__$1);

(statearr_25120[(11)] = inst_25034__$1);

(statearr_25120[(12)] = inst_25036__$1);

(statearr_25120[(21)] = inst_25033__$1);

return statearr_25120;
})();
var statearr_25121_25195 = state_25093__$1;
(statearr_25121_25195[(2)] = null);

(statearr_25121_25195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (40))){
var inst_25061 = (state_25093[(23)]);
var inst_25065 = done.call(null,null);
var inst_25066 = cljs.core.async.untap_STAR_.call(null,m,inst_25061);
var state_25093__$1 = (function (){var statearr_25122 = state_25093;
(statearr_25122[(24)] = inst_25065);

return statearr_25122;
})();
var statearr_25123_25196 = state_25093__$1;
(statearr_25123_25196[(2)] = inst_25066);

(statearr_25123_25196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (33))){
var inst_25052 = (state_25093[(25)]);
var inst_25054 = cljs.core.chunked_seq_QMARK_.call(null,inst_25052);
var state_25093__$1 = state_25093;
if(inst_25054){
var statearr_25124_25197 = state_25093__$1;
(statearr_25124_25197[(1)] = (36));

} else {
var statearr_25125_25198 = state_25093__$1;
(statearr_25125_25198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (13))){
var inst_24984 = (state_25093[(26)]);
var inst_24987 = cljs.core.async.close_BANG_.call(null,inst_24984);
var state_25093__$1 = state_25093;
var statearr_25126_25199 = state_25093__$1;
(statearr_25126_25199[(2)] = inst_24987);

(statearr_25126_25199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (22))){
var inst_25005 = (state_25093[(8)]);
var inst_25008 = cljs.core.async.close_BANG_.call(null,inst_25005);
var state_25093__$1 = state_25093;
var statearr_25127_25200 = state_25093__$1;
(statearr_25127_25200[(2)] = inst_25008);

(statearr_25127_25200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (36))){
var inst_25052 = (state_25093[(25)]);
var inst_25056 = cljs.core.chunk_first.call(null,inst_25052);
var inst_25057 = cljs.core.chunk_rest.call(null,inst_25052);
var inst_25058 = cljs.core.count.call(null,inst_25056);
var inst_25033 = inst_25057;
var inst_25034 = inst_25056;
var inst_25035 = inst_25058;
var inst_25036 = (0);
var state_25093__$1 = (function (){var statearr_25128 = state_25093;
(statearr_25128[(20)] = inst_25035);

(statearr_25128[(11)] = inst_25034);

(statearr_25128[(12)] = inst_25036);

(statearr_25128[(21)] = inst_25033);

return statearr_25128;
})();
var statearr_25129_25201 = state_25093__$1;
(statearr_25129_25201[(2)] = null);

(statearr_25129_25201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (41))){
var inst_25052 = (state_25093[(25)]);
var inst_25068 = (state_25093[(2)]);
var inst_25069 = cljs.core.next.call(null,inst_25052);
var inst_25033 = inst_25069;
var inst_25034 = null;
var inst_25035 = (0);
var inst_25036 = (0);
var state_25093__$1 = (function (){var statearr_25130 = state_25093;
(statearr_25130[(27)] = inst_25068);

(statearr_25130[(20)] = inst_25035);

(statearr_25130[(11)] = inst_25034);

(statearr_25130[(12)] = inst_25036);

(statearr_25130[(21)] = inst_25033);

return statearr_25130;
})();
var statearr_25131_25202 = state_25093__$1;
(statearr_25131_25202[(2)] = null);

(statearr_25131_25202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (43))){
var state_25093__$1 = state_25093;
var statearr_25132_25203 = state_25093__$1;
(statearr_25132_25203[(2)] = null);

(statearr_25132_25203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (29))){
var inst_25077 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25133_25204 = state_25093__$1;
(statearr_25133_25204[(2)] = inst_25077);

(statearr_25133_25204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (44))){
var inst_25086 = (state_25093[(2)]);
var state_25093__$1 = (function (){var statearr_25134 = state_25093;
(statearr_25134[(28)] = inst_25086);

return statearr_25134;
})();
var statearr_25135_25205 = state_25093__$1;
(statearr_25135_25205[(2)] = null);

(statearr_25135_25205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (6))){
var inst_25025 = (state_25093[(29)]);
var inst_25024 = cljs.core.deref.call(null,cs);
var inst_25025__$1 = cljs.core.keys.call(null,inst_25024);
var inst_25026 = cljs.core.count.call(null,inst_25025__$1);
var inst_25027 = cljs.core.reset_BANG_.call(null,dctr,inst_25026);
var inst_25032 = cljs.core.seq.call(null,inst_25025__$1);
var inst_25033 = inst_25032;
var inst_25034 = null;
var inst_25035 = (0);
var inst_25036 = (0);
var state_25093__$1 = (function (){var statearr_25136 = state_25093;
(statearr_25136[(29)] = inst_25025__$1);

(statearr_25136[(20)] = inst_25035);

(statearr_25136[(30)] = inst_25027);

(statearr_25136[(11)] = inst_25034);

(statearr_25136[(12)] = inst_25036);

(statearr_25136[(21)] = inst_25033);

return statearr_25136;
})();
var statearr_25137_25206 = state_25093__$1;
(statearr_25137_25206[(2)] = null);

(statearr_25137_25206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (28))){
var inst_25052 = (state_25093[(25)]);
var inst_25033 = (state_25093[(21)]);
var inst_25052__$1 = cljs.core.seq.call(null,inst_25033);
var state_25093__$1 = (function (){var statearr_25138 = state_25093;
(statearr_25138[(25)] = inst_25052__$1);

return statearr_25138;
})();
if(inst_25052__$1){
var statearr_25139_25207 = state_25093__$1;
(statearr_25139_25207[(1)] = (33));

} else {
var statearr_25140_25208 = state_25093__$1;
(statearr_25140_25208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (25))){
var inst_25035 = (state_25093[(20)]);
var inst_25036 = (state_25093[(12)]);
var inst_25038 = (inst_25036 < inst_25035);
var inst_25039 = inst_25038;
var state_25093__$1 = state_25093;
if(cljs.core.truth_(inst_25039)){
var statearr_25141_25209 = state_25093__$1;
(statearr_25141_25209[(1)] = (27));

} else {
var statearr_25142_25210 = state_25093__$1;
(statearr_25142_25210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (34))){
var state_25093__$1 = state_25093;
var statearr_25143_25211 = state_25093__$1;
(statearr_25143_25211[(2)] = null);

(statearr_25143_25211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (17))){
var state_25093__$1 = state_25093;
var statearr_25144_25212 = state_25093__$1;
(statearr_25144_25212[(2)] = null);

(statearr_25144_25212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (3))){
var inst_25091 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25093__$1,inst_25091);
} else {
if((state_val_25094 === (12))){
var inst_25020 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25145_25213 = state_25093__$1;
(statearr_25145_25213[(2)] = inst_25020);

(statearr_25145_25213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (2))){
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25093__$1,(4),ch);
} else {
if((state_val_25094 === (23))){
var state_25093__$1 = state_25093;
var statearr_25146_25214 = state_25093__$1;
(statearr_25146_25214[(2)] = null);

(statearr_25146_25214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (35))){
var inst_25075 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25147_25215 = state_25093__$1;
(statearr_25147_25215[(2)] = inst_25075);

(statearr_25147_25215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (19))){
var inst_24994 = (state_25093[(7)]);
var inst_24998 = cljs.core.chunk_first.call(null,inst_24994);
var inst_24999 = cljs.core.chunk_rest.call(null,inst_24994);
var inst_25000 = cljs.core.count.call(null,inst_24998);
var inst_24974 = inst_24999;
var inst_24975 = inst_24998;
var inst_24976 = inst_25000;
var inst_24977 = (0);
var state_25093__$1 = (function (){var statearr_25148 = state_25093;
(statearr_25148[(13)] = inst_24976);

(statearr_25148[(14)] = inst_24977);

(statearr_25148[(15)] = inst_24975);

(statearr_25148[(17)] = inst_24974);

return statearr_25148;
})();
var statearr_25149_25216 = state_25093__$1;
(statearr_25149_25216[(2)] = null);

(statearr_25149_25216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (11))){
var inst_24994 = (state_25093[(7)]);
var inst_24974 = (state_25093[(17)]);
var inst_24994__$1 = cljs.core.seq.call(null,inst_24974);
var state_25093__$1 = (function (){var statearr_25150 = state_25093;
(statearr_25150[(7)] = inst_24994__$1);

return statearr_25150;
})();
if(inst_24994__$1){
var statearr_25151_25217 = state_25093__$1;
(statearr_25151_25217[(1)] = (16));

} else {
var statearr_25152_25218 = state_25093__$1;
(statearr_25152_25218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (9))){
var inst_25022 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25153_25219 = state_25093__$1;
(statearr_25153_25219[(2)] = inst_25022);

(statearr_25153_25219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (5))){
var inst_24972 = cljs.core.deref.call(null,cs);
var inst_24973 = cljs.core.seq.call(null,inst_24972);
var inst_24974 = inst_24973;
var inst_24975 = null;
var inst_24976 = (0);
var inst_24977 = (0);
var state_25093__$1 = (function (){var statearr_25154 = state_25093;
(statearr_25154[(13)] = inst_24976);

(statearr_25154[(14)] = inst_24977);

(statearr_25154[(15)] = inst_24975);

(statearr_25154[(17)] = inst_24974);

return statearr_25154;
})();
var statearr_25155_25220 = state_25093__$1;
(statearr_25155_25220[(2)] = null);

(statearr_25155_25220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (14))){
var state_25093__$1 = state_25093;
var statearr_25156_25221 = state_25093__$1;
(statearr_25156_25221[(2)] = null);

(statearr_25156_25221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (45))){
var inst_25083 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25157_25222 = state_25093__$1;
(statearr_25157_25222[(2)] = inst_25083);

(statearr_25157_25222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (26))){
var inst_25025 = (state_25093[(29)]);
var inst_25079 = (state_25093[(2)]);
var inst_25080 = cljs.core.seq.call(null,inst_25025);
var state_25093__$1 = (function (){var statearr_25158 = state_25093;
(statearr_25158[(31)] = inst_25079);

return statearr_25158;
})();
if(inst_25080){
var statearr_25159_25223 = state_25093__$1;
(statearr_25159_25223[(1)] = (42));

} else {
var statearr_25160_25224 = state_25093__$1;
(statearr_25160_25224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (16))){
var inst_24994 = (state_25093[(7)]);
var inst_24996 = cljs.core.chunked_seq_QMARK_.call(null,inst_24994);
var state_25093__$1 = state_25093;
if(inst_24996){
var statearr_25161_25225 = state_25093__$1;
(statearr_25161_25225[(1)] = (19));

} else {
var statearr_25162_25226 = state_25093__$1;
(statearr_25162_25226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (38))){
var inst_25072 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25163_25227 = state_25093__$1;
(statearr_25163_25227[(2)] = inst_25072);

(statearr_25163_25227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (30))){
var state_25093__$1 = state_25093;
var statearr_25164_25228 = state_25093__$1;
(statearr_25164_25228[(2)] = null);

(statearr_25164_25228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (10))){
var inst_24977 = (state_25093[(14)]);
var inst_24975 = (state_25093[(15)]);
var inst_24983 = cljs.core._nth.call(null,inst_24975,inst_24977);
var inst_24984 = cljs.core.nth.call(null,inst_24983,(0),null);
var inst_24985 = cljs.core.nth.call(null,inst_24983,(1),null);
var state_25093__$1 = (function (){var statearr_25165 = state_25093;
(statearr_25165[(26)] = inst_24984);

return statearr_25165;
})();
if(cljs.core.truth_(inst_24985)){
var statearr_25166_25229 = state_25093__$1;
(statearr_25166_25229[(1)] = (13));

} else {
var statearr_25167_25230 = state_25093__$1;
(statearr_25167_25230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (18))){
var inst_25018 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25168_25231 = state_25093__$1;
(statearr_25168_25231[(2)] = inst_25018);

(statearr_25168_25231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (42))){
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25093__$1,(45),dchan);
} else {
if((state_val_25094 === (37))){
var inst_25052 = (state_25093[(25)]);
var inst_24965 = (state_25093[(10)]);
var inst_25061 = (state_25093[(23)]);
var inst_25061__$1 = cljs.core.first.call(null,inst_25052);
var inst_25062 = cljs.core.async.put_BANG_.call(null,inst_25061__$1,inst_24965,done);
var state_25093__$1 = (function (){var statearr_25169 = state_25093;
(statearr_25169[(23)] = inst_25061__$1);

return statearr_25169;
})();
if(cljs.core.truth_(inst_25062)){
var statearr_25170_25232 = state_25093__$1;
(statearr_25170_25232[(1)] = (39));

} else {
var statearr_25171_25233 = state_25093__$1;
(statearr_25171_25233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (8))){
var inst_24976 = (state_25093[(13)]);
var inst_24977 = (state_25093[(14)]);
var inst_24979 = (inst_24977 < inst_24976);
var inst_24980 = inst_24979;
var state_25093__$1 = state_25093;
if(cljs.core.truth_(inst_24980)){
var statearr_25172_25234 = state_25093__$1;
(statearr_25172_25234[(1)] = (10));

} else {
var statearr_25173_25235 = state_25093__$1;
(statearr_25173_25235[(1)] = (11));

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
});})(c__23874__auto___25181,cs,m,dchan,dctr,done))
;
return ((function (switch__23762__auto__,c__23874__auto___25181,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23763__auto__ = null;
var cljs$core$async$mult_$_state_machine__23763__auto____0 = (function (){
var statearr_25177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25177[(0)] = cljs$core$async$mult_$_state_machine__23763__auto__);

(statearr_25177[(1)] = (1));

return statearr_25177;
});
var cljs$core$async$mult_$_state_machine__23763__auto____1 = (function (state_25093){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_25093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e25178){if((e25178 instanceof Object)){
var ex__23766__auto__ = e25178;
var statearr_25179_25236 = state_25093;
(statearr_25179_25236[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25237 = state_25093;
state_25093 = G__25237;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23763__auto__ = function(state_25093){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23763__auto____1.call(this,state_25093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23763__auto____0;
cljs$core$async$mult_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23763__auto____1;
return cljs$core$async$mult_$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___25181,cs,m,dchan,dctr,done))
})();
var state__23876__auto__ = (function (){var statearr_25180 = f__23875__auto__.call(null);
(statearr_25180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___25181);

return statearr_25180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___25181,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25238 = [];
var len__22777__auto___25241 = arguments.length;
var i__22778__auto___25242 = (0);
while(true){
if((i__22778__auto___25242 < len__22777__auto___25241)){
args25238.push((arguments[i__22778__auto___25242]));

var G__25243 = (i__22778__auto___25242 + (1));
i__22778__auto___25242 = G__25243;
continue;
} else {
}
break;
}

var G__25240 = args25238.length;
switch (G__25240) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25238.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m,ch);
} else {
var m__22371__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m,ch);
} else {
var m__22371__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m);
} else {
var m__22371__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m,state_map);
} else {
var m__22371__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m,mode);
} else {
var m__22371__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22784__auto__ = [];
var len__22777__auto___25255 = arguments.length;
var i__22778__auto___25256 = (0);
while(true){
if((i__22778__auto___25256 < len__22777__auto___25255)){
args__22784__auto__.push((arguments[i__22778__auto___25256]));

var G__25257 = (i__22778__auto___25256 + (1));
i__22778__auto___25256 = G__25257;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((3) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22785__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25249){
var map__25250 = p__25249;
var map__25250__$1 = ((((!((map__25250 == null)))?((((map__25250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25250):map__25250);
var opts = map__25250__$1;
var statearr_25252_25258 = state;
(statearr_25252_25258[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25250,map__25250__$1,opts){
return (function (val){
var statearr_25253_25259 = state;
(statearr_25253_25259[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25250,map__25250__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25254_25260 = state;
(statearr_25254_25260[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25245){
var G__25246 = cljs.core.first.call(null,seq25245);
var seq25245__$1 = cljs.core.next.call(null,seq25245);
var G__25247 = cljs.core.first.call(null,seq25245__$1);
var seq25245__$2 = cljs.core.next.call(null,seq25245__$1);
var G__25248 = cljs.core.first.call(null,seq25245__$2);
var seq25245__$3 = cljs.core.next.call(null,seq25245__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25246,G__25247,G__25248,seq25245__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25424 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25425){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25425 = meta25425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25426,meta25425__$1){
var self__ = this;
var _25426__$1 = this;
return (new cljs.core.async.t_cljs$core$async25424(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25425__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25426){
var self__ = this;
var _25426__$1 = this;
return self__.meta25425;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25424.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25424.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25424.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25424.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25424.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25424.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25424.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25424.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25425","meta25425",-1682292900,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25424";

cljs.core.async.t_cljs$core$async25424.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async25424");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25424 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25424(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25425){
return (new cljs.core.async.t_cljs$core$async25424(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25425));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25424(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23874__auto___25587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___25587,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___25587,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25524){
var state_val_25525 = (state_25524[(1)]);
if((state_val_25525 === (7))){
var inst_25442 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
var statearr_25526_25588 = state_25524__$1;
(statearr_25526_25588[(2)] = inst_25442);

(statearr_25526_25588[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (20))){
var inst_25454 = (state_25524[(7)]);
var state_25524__$1 = state_25524;
var statearr_25527_25589 = state_25524__$1;
(statearr_25527_25589[(2)] = inst_25454);

(statearr_25527_25589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (27))){
var state_25524__$1 = state_25524;
var statearr_25528_25590 = state_25524__$1;
(statearr_25528_25590[(2)] = null);

(statearr_25528_25590[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (1))){
var inst_25430 = (state_25524[(8)]);
var inst_25430__$1 = calc_state.call(null);
var inst_25432 = (inst_25430__$1 == null);
var inst_25433 = cljs.core.not.call(null,inst_25432);
var state_25524__$1 = (function (){var statearr_25529 = state_25524;
(statearr_25529[(8)] = inst_25430__$1);

return statearr_25529;
})();
if(inst_25433){
var statearr_25530_25591 = state_25524__$1;
(statearr_25530_25591[(1)] = (2));

} else {
var statearr_25531_25592 = state_25524__$1;
(statearr_25531_25592[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (24))){
var inst_25477 = (state_25524[(9)]);
var inst_25484 = (state_25524[(10)]);
var inst_25498 = (state_25524[(11)]);
var inst_25498__$1 = inst_25477.call(null,inst_25484);
var state_25524__$1 = (function (){var statearr_25532 = state_25524;
(statearr_25532[(11)] = inst_25498__$1);

return statearr_25532;
})();
if(cljs.core.truth_(inst_25498__$1)){
var statearr_25533_25593 = state_25524__$1;
(statearr_25533_25593[(1)] = (29));

} else {
var statearr_25534_25594 = state_25524__$1;
(statearr_25534_25594[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (4))){
var inst_25445 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
if(cljs.core.truth_(inst_25445)){
var statearr_25535_25595 = state_25524__$1;
(statearr_25535_25595[(1)] = (8));

} else {
var statearr_25536_25596 = state_25524__$1;
(statearr_25536_25596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (15))){
var inst_25471 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
if(cljs.core.truth_(inst_25471)){
var statearr_25537_25597 = state_25524__$1;
(statearr_25537_25597[(1)] = (19));

} else {
var statearr_25538_25598 = state_25524__$1;
(statearr_25538_25598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (21))){
var inst_25476 = (state_25524[(12)]);
var inst_25476__$1 = (state_25524[(2)]);
var inst_25477 = cljs.core.get.call(null,inst_25476__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25478 = cljs.core.get.call(null,inst_25476__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25479 = cljs.core.get.call(null,inst_25476__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25524__$1 = (function (){var statearr_25539 = state_25524;
(statearr_25539[(13)] = inst_25478);

(statearr_25539[(9)] = inst_25477);

(statearr_25539[(12)] = inst_25476__$1);

return statearr_25539;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25524__$1,(22),inst_25479);
} else {
if((state_val_25525 === (31))){
var inst_25506 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
if(cljs.core.truth_(inst_25506)){
var statearr_25540_25599 = state_25524__$1;
(statearr_25540_25599[(1)] = (32));

} else {
var statearr_25541_25600 = state_25524__$1;
(statearr_25541_25600[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (32))){
var inst_25483 = (state_25524[(14)]);
var state_25524__$1 = state_25524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25524__$1,(35),out,inst_25483);
} else {
if((state_val_25525 === (33))){
var inst_25476 = (state_25524[(12)]);
var inst_25454 = inst_25476;
var state_25524__$1 = (function (){var statearr_25542 = state_25524;
(statearr_25542[(7)] = inst_25454);

return statearr_25542;
})();
var statearr_25543_25601 = state_25524__$1;
(statearr_25543_25601[(2)] = null);

(statearr_25543_25601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (13))){
var inst_25454 = (state_25524[(7)]);
var inst_25461 = inst_25454.cljs$lang$protocol_mask$partition0$;
var inst_25462 = (inst_25461 & (64));
var inst_25463 = inst_25454.cljs$core$ISeq$;
var inst_25464 = (inst_25462) || (inst_25463);
var state_25524__$1 = state_25524;
if(cljs.core.truth_(inst_25464)){
var statearr_25544_25602 = state_25524__$1;
(statearr_25544_25602[(1)] = (16));

} else {
var statearr_25545_25603 = state_25524__$1;
(statearr_25545_25603[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (22))){
var inst_25483 = (state_25524[(14)]);
var inst_25484 = (state_25524[(10)]);
var inst_25482 = (state_25524[(2)]);
var inst_25483__$1 = cljs.core.nth.call(null,inst_25482,(0),null);
var inst_25484__$1 = cljs.core.nth.call(null,inst_25482,(1),null);
var inst_25485 = (inst_25483__$1 == null);
var inst_25486 = cljs.core._EQ_.call(null,inst_25484__$1,change);
var inst_25487 = (inst_25485) || (inst_25486);
var state_25524__$1 = (function (){var statearr_25546 = state_25524;
(statearr_25546[(14)] = inst_25483__$1);

(statearr_25546[(10)] = inst_25484__$1);

return statearr_25546;
})();
if(cljs.core.truth_(inst_25487)){
var statearr_25547_25604 = state_25524__$1;
(statearr_25547_25604[(1)] = (23));

} else {
var statearr_25548_25605 = state_25524__$1;
(statearr_25548_25605[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (36))){
var inst_25476 = (state_25524[(12)]);
var inst_25454 = inst_25476;
var state_25524__$1 = (function (){var statearr_25549 = state_25524;
(statearr_25549[(7)] = inst_25454);

return statearr_25549;
})();
var statearr_25550_25606 = state_25524__$1;
(statearr_25550_25606[(2)] = null);

(statearr_25550_25606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (29))){
var inst_25498 = (state_25524[(11)]);
var state_25524__$1 = state_25524;
var statearr_25551_25607 = state_25524__$1;
(statearr_25551_25607[(2)] = inst_25498);

(statearr_25551_25607[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (6))){
var state_25524__$1 = state_25524;
var statearr_25552_25608 = state_25524__$1;
(statearr_25552_25608[(2)] = false);

(statearr_25552_25608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (28))){
var inst_25494 = (state_25524[(2)]);
var inst_25495 = calc_state.call(null);
var inst_25454 = inst_25495;
var state_25524__$1 = (function (){var statearr_25553 = state_25524;
(statearr_25553[(15)] = inst_25494);

(statearr_25553[(7)] = inst_25454);

return statearr_25553;
})();
var statearr_25554_25609 = state_25524__$1;
(statearr_25554_25609[(2)] = null);

(statearr_25554_25609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (25))){
var inst_25520 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
var statearr_25555_25610 = state_25524__$1;
(statearr_25555_25610[(2)] = inst_25520);

(statearr_25555_25610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (34))){
var inst_25518 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
var statearr_25556_25611 = state_25524__$1;
(statearr_25556_25611[(2)] = inst_25518);

(statearr_25556_25611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (17))){
var state_25524__$1 = state_25524;
var statearr_25557_25612 = state_25524__$1;
(statearr_25557_25612[(2)] = false);

(statearr_25557_25612[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (3))){
var state_25524__$1 = state_25524;
var statearr_25558_25613 = state_25524__$1;
(statearr_25558_25613[(2)] = false);

(statearr_25558_25613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (12))){
var inst_25522 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25524__$1,inst_25522);
} else {
if((state_val_25525 === (2))){
var inst_25430 = (state_25524[(8)]);
var inst_25435 = inst_25430.cljs$lang$protocol_mask$partition0$;
var inst_25436 = (inst_25435 & (64));
var inst_25437 = inst_25430.cljs$core$ISeq$;
var inst_25438 = (inst_25436) || (inst_25437);
var state_25524__$1 = state_25524;
if(cljs.core.truth_(inst_25438)){
var statearr_25559_25614 = state_25524__$1;
(statearr_25559_25614[(1)] = (5));

} else {
var statearr_25560_25615 = state_25524__$1;
(statearr_25560_25615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (23))){
var inst_25483 = (state_25524[(14)]);
var inst_25489 = (inst_25483 == null);
var state_25524__$1 = state_25524;
if(cljs.core.truth_(inst_25489)){
var statearr_25561_25616 = state_25524__$1;
(statearr_25561_25616[(1)] = (26));

} else {
var statearr_25562_25617 = state_25524__$1;
(statearr_25562_25617[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (35))){
var inst_25509 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
if(cljs.core.truth_(inst_25509)){
var statearr_25563_25618 = state_25524__$1;
(statearr_25563_25618[(1)] = (36));

} else {
var statearr_25564_25619 = state_25524__$1;
(statearr_25564_25619[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (19))){
var inst_25454 = (state_25524[(7)]);
var inst_25473 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25454);
var state_25524__$1 = state_25524;
var statearr_25565_25620 = state_25524__$1;
(statearr_25565_25620[(2)] = inst_25473);

(statearr_25565_25620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (11))){
var inst_25454 = (state_25524[(7)]);
var inst_25458 = (inst_25454 == null);
var inst_25459 = cljs.core.not.call(null,inst_25458);
var state_25524__$1 = state_25524;
if(inst_25459){
var statearr_25566_25621 = state_25524__$1;
(statearr_25566_25621[(1)] = (13));

} else {
var statearr_25567_25622 = state_25524__$1;
(statearr_25567_25622[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (9))){
var inst_25430 = (state_25524[(8)]);
var state_25524__$1 = state_25524;
var statearr_25568_25623 = state_25524__$1;
(statearr_25568_25623[(2)] = inst_25430);

(statearr_25568_25623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (5))){
var state_25524__$1 = state_25524;
var statearr_25569_25624 = state_25524__$1;
(statearr_25569_25624[(2)] = true);

(statearr_25569_25624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (14))){
var state_25524__$1 = state_25524;
var statearr_25570_25625 = state_25524__$1;
(statearr_25570_25625[(2)] = false);

(statearr_25570_25625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (26))){
var inst_25484 = (state_25524[(10)]);
var inst_25491 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25484);
var state_25524__$1 = state_25524;
var statearr_25571_25626 = state_25524__$1;
(statearr_25571_25626[(2)] = inst_25491);

(statearr_25571_25626[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (16))){
var state_25524__$1 = state_25524;
var statearr_25572_25627 = state_25524__$1;
(statearr_25572_25627[(2)] = true);

(statearr_25572_25627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (38))){
var inst_25514 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
var statearr_25573_25628 = state_25524__$1;
(statearr_25573_25628[(2)] = inst_25514);

(statearr_25573_25628[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (30))){
var inst_25478 = (state_25524[(13)]);
var inst_25477 = (state_25524[(9)]);
var inst_25484 = (state_25524[(10)]);
var inst_25501 = cljs.core.empty_QMARK_.call(null,inst_25477);
var inst_25502 = inst_25478.call(null,inst_25484);
var inst_25503 = cljs.core.not.call(null,inst_25502);
var inst_25504 = (inst_25501) && (inst_25503);
var state_25524__$1 = state_25524;
var statearr_25574_25629 = state_25524__$1;
(statearr_25574_25629[(2)] = inst_25504);

(statearr_25574_25629[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (10))){
var inst_25430 = (state_25524[(8)]);
var inst_25450 = (state_25524[(2)]);
var inst_25451 = cljs.core.get.call(null,inst_25450,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25452 = cljs.core.get.call(null,inst_25450,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25453 = cljs.core.get.call(null,inst_25450,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25454 = inst_25430;
var state_25524__$1 = (function (){var statearr_25575 = state_25524;
(statearr_25575[(7)] = inst_25454);

(statearr_25575[(16)] = inst_25453);

(statearr_25575[(17)] = inst_25452);

(statearr_25575[(18)] = inst_25451);

return statearr_25575;
})();
var statearr_25576_25630 = state_25524__$1;
(statearr_25576_25630[(2)] = null);

(statearr_25576_25630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (18))){
var inst_25468 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
var statearr_25577_25631 = state_25524__$1;
(statearr_25577_25631[(2)] = inst_25468);

(statearr_25577_25631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (37))){
var state_25524__$1 = state_25524;
var statearr_25578_25632 = state_25524__$1;
(statearr_25578_25632[(2)] = null);

(statearr_25578_25632[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (8))){
var inst_25430 = (state_25524[(8)]);
var inst_25447 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25430);
var state_25524__$1 = state_25524;
var statearr_25579_25633 = state_25524__$1;
(statearr_25579_25633[(2)] = inst_25447);

(statearr_25579_25633[(1)] = (10));


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
});})(c__23874__auto___25587,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23762__auto__,c__23874__auto___25587,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23763__auto__ = null;
var cljs$core$async$mix_$_state_machine__23763__auto____0 = (function (){
var statearr_25583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25583[(0)] = cljs$core$async$mix_$_state_machine__23763__auto__);

(statearr_25583[(1)] = (1));

return statearr_25583;
});
var cljs$core$async$mix_$_state_machine__23763__auto____1 = (function (state_25524){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_25524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e25584){if((e25584 instanceof Object)){
var ex__23766__auto__ = e25584;
var statearr_25585_25634 = state_25524;
(statearr_25585_25634[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25635 = state_25524;
state_25524 = G__25635;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23763__auto__ = function(state_25524){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23763__auto____1.call(this,state_25524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23763__auto____0;
cljs$core$async$mix_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23763__auto____1;
return cljs$core$async$mix_$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___25587,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23876__auto__ = (function (){var statearr_25586 = f__23875__auto__.call(null);
(statearr_25586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___25587);

return statearr_25586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___25587,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22370__auto__ = (((p == null))?null:p);
var m__22371__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22371__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22370__auto__ = (((p == null))?null:p);
var m__22371__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,p,v,ch);
} else {
var m__22371__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25636 = [];
var len__22777__auto___25639 = arguments.length;
var i__22778__auto___25640 = (0);
while(true){
if((i__22778__auto___25640 < len__22777__auto___25639)){
args25636.push((arguments[i__22778__auto___25640]));

var G__25641 = (i__22778__auto___25640 + (1));
i__22778__auto___25640 = G__25641;
continue;
} else {
}
break;
}

var G__25638 = args25636.length;
switch (G__25638) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25636.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22370__auto__ = (((p == null))?null:p);
var m__22371__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,p);
} else {
var m__22371__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22370__auto__ = (((p == null))?null:p);
var m__22371__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,p,v);
} else {
var m__22371__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25644 = [];
var len__22777__auto___25769 = arguments.length;
var i__22778__auto___25770 = (0);
while(true){
if((i__22778__auto___25770 < len__22777__auto___25769)){
args25644.push((arguments[i__22778__auto___25770]));

var G__25771 = (i__22778__auto___25770 + (1));
i__22778__auto___25770 = G__25771;
continue;
} else {
}
break;
}

var G__25646 = args25644.length;
switch (G__25646) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25644.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21707__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21707__auto__,mults){
return (function (p1__25643_SHARP_){
if(cljs.core.truth_(p1__25643_SHARP_.call(null,topic))){
return p1__25643_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25643_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21707__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25647 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25648){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25648 = meta25648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25649,meta25648__$1){
var self__ = this;
var _25649__$1 = this;
return (new cljs.core.async.t_cljs$core$async25647(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25648__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25649){
var self__ = this;
var _25649__$1 = this;
return self__.meta25648;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25647.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25647.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25647.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25647.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25647.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25647.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25647.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25647.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25648","meta25648",-1576734312,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25647";

cljs.core.async.t_cljs$core$async25647.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async25647");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25647 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25647(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25648){
return (new cljs.core.async.t_cljs$core$async25647(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25648));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25647(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23874__auto___25773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___25773,mults,ensure_mult,p){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___25773,mults,ensure_mult,p){
return (function (state_25721){
var state_val_25722 = (state_25721[(1)]);
if((state_val_25722 === (7))){
var inst_25717 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25723_25774 = state_25721__$1;
(statearr_25723_25774[(2)] = inst_25717);

(statearr_25723_25774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (20))){
var state_25721__$1 = state_25721;
var statearr_25724_25775 = state_25721__$1;
(statearr_25724_25775[(2)] = null);

(statearr_25724_25775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (1))){
var state_25721__$1 = state_25721;
var statearr_25725_25776 = state_25721__$1;
(statearr_25725_25776[(2)] = null);

(statearr_25725_25776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (24))){
var inst_25700 = (state_25721[(7)]);
var inst_25709 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25700);
var state_25721__$1 = state_25721;
var statearr_25726_25777 = state_25721__$1;
(statearr_25726_25777[(2)] = inst_25709);

(statearr_25726_25777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (4))){
var inst_25652 = (state_25721[(8)]);
var inst_25652__$1 = (state_25721[(2)]);
var inst_25653 = (inst_25652__$1 == null);
var state_25721__$1 = (function (){var statearr_25727 = state_25721;
(statearr_25727[(8)] = inst_25652__$1);

return statearr_25727;
})();
if(cljs.core.truth_(inst_25653)){
var statearr_25728_25778 = state_25721__$1;
(statearr_25728_25778[(1)] = (5));

} else {
var statearr_25729_25779 = state_25721__$1;
(statearr_25729_25779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (15))){
var inst_25694 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25730_25780 = state_25721__$1;
(statearr_25730_25780[(2)] = inst_25694);

(statearr_25730_25780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (21))){
var inst_25714 = (state_25721[(2)]);
var state_25721__$1 = (function (){var statearr_25731 = state_25721;
(statearr_25731[(9)] = inst_25714);

return statearr_25731;
})();
var statearr_25732_25781 = state_25721__$1;
(statearr_25732_25781[(2)] = null);

(statearr_25732_25781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (13))){
var inst_25676 = (state_25721[(10)]);
var inst_25678 = cljs.core.chunked_seq_QMARK_.call(null,inst_25676);
var state_25721__$1 = state_25721;
if(inst_25678){
var statearr_25733_25782 = state_25721__$1;
(statearr_25733_25782[(1)] = (16));

} else {
var statearr_25734_25783 = state_25721__$1;
(statearr_25734_25783[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (22))){
var inst_25706 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
if(cljs.core.truth_(inst_25706)){
var statearr_25735_25784 = state_25721__$1;
(statearr_25735_25784[(1)] = (23));

} else {
var statearr_25736_25785 = state_25721__$1;
(statearr_25736_25785[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (6))){
var inst_25652 = (state_25721[(8)]);
var inst_25702 = (state_25721[(11)]);
var inst_25700 = (state_25721[(7)]);
var inst_25700__$1 = topic_fn.call(null,inst_25652);
var inst_25701 = cljs.core.deref.call(null,mults);
var inst_25702__$1 = cljs.core.get.call(null,inst_25701,inst_25700__$1);
var state_25721__$1 = (function (){var statearr_25737 = state_25721;
(statearr_25737[(11)] = inst_25702__$1);

(statearr_25737[(7)] = inst_25700__$1);

return statearr_25737;
})();
if(cljs.core.truth_(inst_25702__$1)){
var statearr_25738_25786 = state_25721__$1;
(statearr_25738_25786[(1)] = (19));

} else {
var statearr_25739_25787 = state_25721__$1;
(statearr_25739_25787[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (25))){
var inst_25711 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25740_25788 = state_25721__$1;
(statearr_25740_25788[(2)] = inst_25711);

(statearr_25740_25788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (17))){
var inst_25676 = (state_25721[(10)]);
var inst_25685 = cljs.core.first.call(null,inst_25676);
var inst_25686 = cljs.core.async.muxch_STAR_.call(null,inst_25685);
var inst_25687 = cljs.core.async.close_BANG_.call(null,inst_25686);
var inst_25688 = cljs.core.next.call(null,inst_25676);
var inst_25662 = inst_25688;
var inst_25663 = null;
var inst_25664 = (0);
var inst_25665 = (0);
var state_25721__$1 = (function (){var statearr_25741 = state_25721;
(statearr_25741[(12)] = inst_25662);

(statearr_25741[(13)] = inst_25663);

(statearr_25741[(14)] = inst_25665);

(statearr_25741[(15)] = inst_25664);

(statearr_25741[(16)] = inst_25687);

return statearr_25741;
})();
var statearr_25742_25789 = state_25721__$1;
(statearr_25742_25789[(2)] = null);

(statearr_25742_25789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (3))){
var inst_25719 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25721__$1,inst_25719);
} else {
if((state_val_25722 === (12))){
var inst_25696 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25743_25790 = state_25721__$1;
(statearr_25743_25790[(2)] = inst_25696);

(statearr_25743_25790[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (2))){
var state_25721__$1 = state_25721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25721__$1,(4),ch);
} else {
if((state_val_25722 === (23))){
var state_25721__$1 = state_25721;
var statearr_25744_25791 = state_25721__$1;
(statearr_25744_25791[(2)] = null);

(statearr_25744_25791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (19))){
var inst_25652 = (state_25721[(8)]);
var inst_25702 = (state_25721[(11)]);
var inst_25704 = cljs.core.async.muxch_STAR_.call(null,inst_25702);
var state_25721__$1 = state_25721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25721__$1,(22),inst_25704,inst_25652);
} else {
if((state_val_25722 === (11))){
var inst_25662 = (state_25721[(12)]);
var inst_25676 = (state_25721[(10)]);
var inst_25676__$1 = cljs.core.seq.call(null,inst_25662);
var state_25721__$1 = (function (){var statearr_25745 = state_25721;
(statearr_25745[(10)] = inst_25676__$1);

return statearr_25745;
})();
if(inst_25676__$1){
var statearr_25746_25792 = state_25721__$1;
(statearr_25746_25792[(1)] = (13));

} else {
var statearr_25747_25793 = state_25721__$1;
(statearr_25747_25793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (9))){
var inst_25698 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25748_25794 = state_25721__$1;
(statearr_25748_25794[(2)] = inst_25698);

(statearr_25748_25794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (5))){
var inst_25659 = cljs.core.deref.call(null,mults);
var inst_25660 = cljs.core.vals.call(null,inst_25659);
var inst_25661 = cljs.core.seq.call(null,inst_25660);
var inst_25662 = inst_25661;
var inst_25663 = null;
var inst_25664 = (0);
var inst_25665 = (0);
var state_25721__$1 = (function (){var statearr_25749 = state_25721;
(statearr_25749[(12)] = inst_25662);

(statearr_25749[(13)] = inst_25663);

(statearr_25749[(14)] = inst_25665);

(statearr_25749[(15)] = inst_25664);

return statearr_25749;
})();
var statearr_25750_25795 = state_25721__$1;
(statearr_25750_25795[(2)] = null);

(statearr_25750_25795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (14))){
var state_25721__$1 = state_25721;
var statearr_25754_25796 = state_25721__$1;
(statearr_25754_25796[(2)] = null);

(statearr_25754_25796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (16))){
var inst_25676 = (state_25721[(10)]);
var inst_25680 = cljs.core.chunk_first.call(null,inst_25676);
var inst_25681 = cljs.core.chunk_rest.call(null,inst_25676);
var inst_25682 = cljs.core.count.call(null,inst_25680);
var inst_25662 = inst_25681;
var inst_25663 = inst_25680;
var inst_25664 = inst_25682;
var inst_25665 = (0);
var state_25721__$1 = (function (){var statearr_25755 = state_25721;
(statearr_25755[(12)] = inst_25662);

(statearr_25755[(13)] = inst_25663);

(statearr_25755[(14)] = inst_25665);

(statearr_25755[(15)] = inst_25664);

return statearr_25755;
})();
var statearr_25756_25797 = state_25721__$1;
(statearr_25756_25797[(2)] = null);

(statearr_25756_25797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (10))){
var inst_25662 = (state_25721[(12)]);
var inst_25663 = (state_25721[(13)]);
var inst_25665 = (state_25721[(14)]);
var inst_25664 = (state_25721[(15)]);
var inst_25670 = cljs.core._nth.call(null,inst_25663,inst_25665);
var inst_25671 = cljs.core.async.muxch_STAR_.call(null,inst_25670);
var inst_25672 = cljs.core.async.close_BANG_.call(null,inst_25671);
var inst_25673 = (inst_25665 + (1));
var tmp25751 = inst_25662;
var tmp25752 = inst_25663;
var tmp25753 = inst_25664;
var inst_25662__$1 = tmp25751;
var inst_25663__$1 = tmp25752;
var inst_25664__$1 = tmp25753;
var inst_25665__$1 = inst_25673;
var state_25721__$1 = (function (){var statearr_25757 = state_25721;
(statearr_25757[(12)] = inst_25662__$1);

(statearr_25757[(13)] = inst_25663__$1);

(statearr_25757[(14)] = inst_25665__$1);

(statearr_25757[(15)] = inst_25664__$1);

(statearr_25757[(17)] = inst_25672);

return statearr_25757;
})();
var statearr_25758_25798 = state_25721__$1;
(statearr_25758_25798[(2)] = null);

(statearr_25758_25798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (18))){
var inst_25691 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25759_25799 = state_25721__$1;
(statearr_25759_25799[(2)] = inst_25691);

(statearr_25759_25799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (8))){
var inst_25665 = (state_25721[(14)]);
var inst_25664 = (state_25721[(15)]);
var inst_25667 = (inst_25665 < inst_25664);
var inst_25668 = inst_25667;
var state_25721__$1 = state_25721;
if(cljs.core.truth_(inst_25668)){
var statearr_25760_25800 = state_25721__$1;
(statearr_25760_25800[(1)] = (10));

} else {
var statearr_25761_25801 = state_25721__$1;
(statearr_25761_25801[(1)] = (11));

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
});})(c__23874__auto___25773,mults,ensure_mult,p))
;
return ((function (switch__23762__auto__,c__23874__auto___25773,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23763__auto__ = null;
var cljs$core$async$state_machine__23763__auto____0 = (function (){
var statearr_25765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25765[(0)] = cljs$core$async$state_machine__23763__auto__);

(statearr_25765[(1)] = (1));

return statearr_25765;
});
var cljs$core$async$state_machine__23763__auto____1 = (function (state_25721){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_25721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e25766){if((e25766 instanceof Object)){
var ex__23766__auto__ = e25766;
var statearr_25767_25802 = state_25721;
(statearr_25767_25802[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25803 = state_25721;
state_25721 = G__25803;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$state_machine__23763__auto__ = function(state_25721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23763__auto____1.call(this,state_25721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23763__auto____0;
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23763__auto____1;
return cljs$core$async$state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___25773,mults,ensure_mult,p))
})();
var state__23876__auto__ = (function (){var statearr_25768 = f__23875__auto__.call(null);
(statearr_25768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___25773);

return statearr_25768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___25773,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25804 = [];
var len__22777__auto___25807 = arguments.length;
var i__22778__auto___25808 = (0);
while(true){
if((i__22778__auto___25808 < len__22777__auto___25807)){
args25804.push((arguments[i__22778__auto___25808]));

var G__25809 = (i__22778__auto___25808 + (1));
i__22778__auto___25808 = G__25809;
continue;
} else {
}
break;
}

var G__25806 = args25804.length;
switch (G__25806) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25804.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25811 = [];
var len__22777__auto___25814 = arguments.length;
var i__22778__auto___25815 = (0);
while(true){
if((i__22778__auto___25815 < len__22777__auto___25814)){
args25811.push((arguments[i__22778__auto___25815]));

var G__25816 = (i__22778__auto___25815 + (1));
i__22778__auto___25815 = G__25816;
continue;
} else {
}
break;
}

var G__25813 = args25811.length;
switch (G__25813) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25811.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25818 = [];
var len__22777__auto___25889 = arguments.length;
var i__22778__auto___25890 = (0);
while(true){
if((i__22778__auto___25890 < len__22777__auto___25889)){
args25818.push((arguments[i__22778__auto___25890]));

var G__25891 = (i__22778__auto___25890 + (1));
i__22778__auto___25890 = G__25891;
continue;
} else {
}
break;
}

var G__25820 = args25818.length;
switch (G__25820) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25818.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23874__auto___25893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___25893,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___25893,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25859){
var state_val_25860 = (state_25859[(1)]);
if((state_val_25860 === (7))){
var state_25859__$1 = state_25859;
var statearr_25861_25894 = state_25859__$1;
(statearr_25861_25894[(2)] = null);

(statearr_25861_25894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25860 === (1))){
var state_25859__$1 = state_25859;
var statearr_25862_25895 = state_25859__$1;
(statearr_25862_25895[(2)] = null);

(statearr_25862_25895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25860 === (4))){
var inst_25823 = (state_25859[(7)]);
var inst_25825 = (inst_25823 < cnt);
var state_25859__$1 = state_25859;
if(cljs.core.truth_(inst_25825)){
var statearr_25863_25896 = state_25859__$1;
(statearr_25863_25896[(1)] = (6));

} else {
var statearr_25864_25897 = state_25859__$1;
(statearr_25864_25897[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25860 === (15))){
var inst_25855 = (state_25859[(2)]);
var state_25859__$1 = state_25859;
var statearr_25865_25898 = state_25859__$1;
(statearr_25865_25898[(2)] = inst_25855);

(statearr_25865_25898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25860 === (13))){
var inst_25848 = cljs.core.async.close_BANG_.call(null,out);
var state_25859__$1 = state_25859;
var statearr_25866_25899 = state_25859__$1;
(statearr_25866_25899[(2)] = inst_25848);

(statearr_25866_25899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25860 === (6))){
var state_25859__$1 = state_25859;
var statearr_25867_25900 = state_25859__$1;
(statearr_25867_25900[(2)] = null);

(statearr_25867_25900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25860 === (3))){
var inst_25857 = (state_25859[(2)]);
var state_25859__$1 = state_25859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25859__$1,inst_25857);
} else {
if((state_val_25860 === (12))){
var inst_25845 = (state_25859[(8)]);
var inst_25845__$1 = (state_25859[(2)]);
var inst_25846 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25845__$1);
var state_25859__$1 = (function (){var statearr_25868 = state_25859;
(statearr_25868[(8)] = inst_25845__$1);

return statearr_25868;
})();
if(cljs.core.truth_(inst_25846)){
var statearr_25869_25901 = state_25859__$1;
(statearr_25869_25901[(1)] = (13));

} else {
var statearr_25870_25902 = state_25859__$1;
(statearr_25870_25902[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25860 === (2))){
var inst_25822 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25823 = (0);
var state_25859__$1 = (function (){var statearr_25871 = state_25859;
(statearr_25871[(7)] = inst_25823);

(statearr_25871[(9)] = inst_25822);

return statearr_25871;
})();
var statearr_25872_25903 = state_25859__$1;
(statearr_25872_25903[(2)] = null);

(statearr_25872_25903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25860 === (11))){
var inst_25823 = (state_25859[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25859,(10),Object,null,(9));
var inst_25832 = chs__$1.call(null,inst_25823);
var inst_25833 = done.call(null,inst_25823);
var inst_25834 = cljs.core.async.take_BANG_.call(null,inst_25832,inst_25833);
var state_25859__$1 = state_25859;
var statearr_25873_25904 = state_25859__$1;
(statearr_25873_25904[(2)] = inst_25834);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25859__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25860 === (9))){
var inst_25823 = (state_25859[(7)]);
var inst_25836 = (state_25859[(2)]);
var inst_25837 = (inst_25823 + (1));
var inst_25823__$1 = inst_25837;
var state_25859__$1 = (function (){var statearr_25874 = state_25859;
(statearr_25874[(7)] = inst_25823__$1);

(statearr_25874[(10)] = inst_25836);

return statearr_25874;
})();
var statearr_25875_25905 = state_25859__$1;
(statearr_25875_25905[(2)] = null);

(statearr_25875_25905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25860 === (5))){
var inst_25843 = (state_25859[(2)]);
var state_25859__$1 = (function (){var statearr_25876 = state_25859;
(statearr_25876[(11)] = inst_25843);

return statearr_25876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25859__$1,(12),dchan);
} else {
if((state_val_25860 === (14))){
var inst_25845 = (state_25859[(8)]);
var inst_25850 = cljs.core.apply.call(null,f,inst_25845);
var state_25859__$1 = state_25859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25859__$1,(16),out,inst_25850);
} else {
if((state_val_25860 === (16))){
var inst_25852 = (state_25859[(2)]);
var state_25859__$1 = (function (){var statearr_25877 = state_25859;
(statearr_25877[(12)] = inst_25852);

return statearr_25877;
})();
var statearr_25878_25906 = state_25859__$1;
(statearr_25878_25906[(2)] = null);

(statearr_25878_25906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25860 === (10))){
var inst_25827 = (state_25859[(2)]);
var inst_25828 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25859__$1 = (function (){var statearr_25879 = state_25859;
(statearr_25879[(13)] = inst_25827);

return statearr_25879;
})();
var statearr_25880_25907 = state_25859__$1;
(statearr_25880_25907[(2)] = inst_25828);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25859__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25860 === (8))){
var inst_25841 = (state_25859[(2)]);
var state_25859__$1 = state_25859;
var statearr_25881_25908 = state_25859__$1;
(statearr_25881_25908[(2)] = inst_25841);

(statearr_25881_25908[(1)] = (5));


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
});})(c__23874__auto___25893,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23762__auto__,c__23874__auto___25893,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23763__auto__ = null;
var cljs$core$async$state_machine__23763__auto____0 = (function (){
var statearr_25885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25885[(0)] = cljs$core$async$state_machine__23763__auto__);

(statearr_25885[(1)] = (1));

return statearr_25885;
});
var cljs$core$async$state_machine__23763__auto____1 = (function (state_25859){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_25859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e25886){if((e25886 instanceof Object)){
var ex__23766__auto__ = e25886;
var statearr_25887_25909 = state_25859;
(statearr_25887_25909[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25910 = state_25859;
state_25859 = G__25910;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$state_machine__23763__auto__ = function(state_25859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23763__auto____1.call(this,state_25859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23763__auto____0;
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23763__auto____1;
return cljs$core$async$state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___25893,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23876__auto__ = (function (){var statearr_25888 = f__23875__auto__.call(null);
(statearr_25888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___25893);

return statearr_25888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___25893,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25912 = [];
var len__22777__auto___25968 = arguments.length;
var i__22778__auto___25969 = (0);
while(true){
if((i__22778__auto___25969 < len__22777__auto___25968)){
args25912.push((arguments[i__22778__auto___25969]));

var G__25970 = (i__22778__auto___25969 + (1));
i__22778__auto___25969 = G__25970;
continue;
} else {
}
break;
}

var G__25914 = args25912.length;
switch (G__25914) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25912.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23874__auto___25972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___25972,out){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___25972,out){
return (function (state_25944){
var state_val_25945 = (state_25944[(1)]);
if((state_val_25945 === (7))){
var inst_25924 = (state_25944[(7)]);
var inst_25923 = (state_25944[(8)]);
var inst_25923__$1 = (state_25944[(2)]);
var inst_25924__$1 = cljs.core.nth.call(null,inst_25923__$1,(0),null);
var inst_25925 = cljs.core.nth.call(null,inst_25923__$1,(1),null);
var inst_25926 = (inst_25924__$1 == null);
var state_25944__$1 = (function (){var statearr_25946 = state_25944;
(statearr_25946[(7)] = inst_25924__$1);

(statearr_25946[(9)] = inst_25925);

(statearr_25946[(8)] = inst_25923__$1);

return statearr_25946;
})();
if(cljs.core.truth_(inst_25926)){
var statearr_25947_25973 = state_25944__$1;
(statearr_25947_25973[(1)] = (8));

} else {
var statearr_25948_25974 = state_25944__$1;
(statearr_25948_25974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (1))){
var inst_25915 = cljs.core.vec.call(null,chs);
var inst_25916 = inst_25915;
var state_25944__$1 = (function (){var statearr_25949 = state_25944;
(statearr_25949[(10)] = inst_25916);

return statearr_25949;
})();
var statearr_25950_25975 = state_25944__$1;
(statearr_25950_25975[(2)] = null);

(statearr_25950_25975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (4))){
var inst_25916 = (state_25944[(10)]);
var state_25944__$1 = state_25944;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25944__$1,(7),inst_25916);
} else {
if((state_val_25945 === (6))){
var inst_25940 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_25951_25976 = state_25944__$1;
(statearr_25951_25976[(2)] = inst_25940);

(statearr_25951_25976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (3))){
var inst_25942 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25944__$1,inst_25942);
} else {
if((state_val_25945 === (2))){
var inst_25916 = (state_25944[(10)]);
var inst_25918 = cljs.core.count.call(null,inst_25916);
var inst_25919 = (inst_25918 > (0));
var state_25944__$1 = state_25944;
if(cljs.core.truth_(inst_25919)){
var statearr_25953_25977 = state_25944__$1;
(statearr_25953_25977[(1)] = (4));

} else {
var statearr_25954_25978 = state_25944__$1;
(statearr_25954_25978[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (11))){
var inst_25916 = (state_25944[(10)]);
var inst_25933 = (state_25944[(2)]);
var tmp25952 = inst_25916;
var inst_25916__$1 = tmp25952;
var state_25944__$1 = (function (){var statearr_25955 = state_25944;
(statearr_25955[(11)] = inst_25933);

(statearr_25955[(10)] = inst_25916__$1);

return statearr_25955;
})();
var statearr_25956_25979 = state_25944__$1;
(statearr_25956_25979[(2)] = null);

(statearr_25956_25979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (9))){
var inst_25924 = (state_25944[(7)]);
var state_25944__$1 = state_25944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25944__$1,(11),out,inst_25924);
} else {
if((state_val_25945 === (5))){
var inst_25938 = cljs.core.async.close_BANG_.call(null,out);
var state_25944__$1 = state_25944;
var statearr_25957_25980 = state_25944__$1;
(statearr_25957_25980[(2)] = inst_25938);

(statearr_25957_25980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (10))){
var inst_25936 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_25958_25981 = state_25944__$1;
(statearr_25958_25981[(2)] = inst_25936);

(statearr_25958_25981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (8))){
var inst_25924 = (state_25944[(7)]);
var inst_25925 = (state_25944[(9)]);
var inst_25923 = (state_25944[(8)]);
var inst_25916 = (state_25944[(10)]);
var inst_25928 = (function (){var cs = inst_25916;
var vec__25921 = inst_25923;
var v = inst_25924;
var c = inst_25925;
return ((function (cs,vec__25921,v,c,inst_25924,inst_25925,inst_25923,inst_25916,state_val_25945,c__23874__auto___25972,out){
return (function (p1__25911_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25911_SHARP_);
});
;})(cs,vec__25921,v,c,inst_25924,inst_25925,inst_25923,inst_25916,state_val_25945,c__23874__auto___25972,out))
})();
var inst_25929 = cljs.core.filterv.call(null,inst_25928,inst_25916);
var inst_25916__$1 = inst_25929;
var state_25944__$1 = (function (){var statearr_25959 = state_25944;
(statearr_25959[(10)] = inst_25916__$1);

return statearr_25959;
})();
var statearr_25960_25982 = state_25944__$1;
(statearr_25960_25982[(2)] = null);

(statearr_25960_25982[(1)] = (2));


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
});})(c__23874__auto___25972,out))
;
return ((function (switch__23762__auto__,c__23874__auto___25972,out){
return (function() {
var cljs$core$async$state_machine__23763__auto__ = null;
var cljs$core$async$state_machine__23763__auto____0 = (function (){
var statearr_25964 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25964[(0)] = cljs$core$async$state_machine__23763__auto__);

(statearr_25964[(1)] = (1));

return statearr_25964;
});
var cljs$core$async$state_machine__23763__auto____1 = (function (state_25944){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_25944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e25965){if((e25965 instanceof Object)){
var ex__23766__auto__ = e25965;
var statearr_25966_25983 = state_25944;
(statearr_25966_25983[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25984 = state_25944;
state_25944 = G__25984;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$state_machine__23763__auto__ = function(state_25944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23763__auto____1.call(this,state_25944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23763__auto____0;
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23763__auto____1;
return cljs$core$async$state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___25972,out))
})();
var state__23876__auto__ = (function (){var statearr_25967 = f__23875__auto__.call(null);
(statearr_25967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___25972);

return statearr_25967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___25972,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25985 = [];
var len__22777__auto___26034 = arguments.length;
var i__22778__auto___26035 = (0);
while(true){
if((i__22778__auto___26035 < len__22777__auto___26034)){
args25985.push((arguments[i__22778__auto___26035]));

var G__26036 = (i__22778__auto___26035 + (1));
i__22778__auto___26035 = G__26036;
continue;
} else {
}
break;
}

var G__25987 = args25985.length;
switch (G__25987) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25985.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23874__auto___26038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___26038,out){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___26038,out){
return (function (state_26011){
var state_val_26012 = (state_26011[(1)]);
if((state_val_26012 === (7))){
var inst_25993 = (state_26011[(7)]);
var inst_25993__$1 = (state_26011[(2)]);
var inst_25994 = (inst_25993__$1 == null);
var inst_25995 = cljs.core.not.call(null,inst_25994);
var state_26011__$1 = (function (){var statearr_26013 = state_26011;
(statearr_26013[(7)] = inst_25993__$1);

return statearr_26013;
})();
if(inst_25995){
var statearr_26014_26039 = state_26011__$1;
(statearr_26014_26039[(1)] = (8));

} else {
var statearr_26015_26040 = state_26011__$1;
(statearr_26015_26040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26012 === (1))){
var inst_25988 = (0);
var state_26011__$1 = (function (){var statearr_26016 = state_26011;
(statearr_26016[(8)] = inst_25988);

return statearr_26016;
})();
var statearr_26017_26041 = state_26011__$1;
(statearr_26017_26041[(2)] = null);

(statearr_26017_26041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26012 === (4))){
var state_26011__$1 = state_26011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26011__$1,(7),ch);
} else {
if((state_val_26012 === (6))){
var inst_26006 = (state_26011[(2)]);
var state_26011__$1 = state_26011;
var statearr_26018_26042 = state_26011__$1;
(statearr_26018_26042[(2)] = inst_26006);

(statearr_26018_26042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26012 === (3))){
var inst_26008 = (state_26011[(2)]);
var inst_26009 = cljs.core.async.close_BANG_.call(null,out);
var state_26011__$1 = (function (){var statearr_26019 = state_26011;
(statearr_26019[(9)] = inst_26008);

return statearr_26019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26011__$1,inst_26009);
} else {
if((state_val_26012 === (2))){
var inst_25988 = (state_26011[(8)]);
var inst_25990 = (inst_25988 < n);
var state_26011__$1 = state_26011;
if(cljs.core.truth_(inst_25990)){
var statearr_26020_26043 = state_26011__$1;
(statearr_26020_26043[(1)] = (4));

} else {
var statearr_26021_26044 = state_26011__$1;
(statearr_26021_26044[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26012 === (11))){
var inst_25988 = (state_26011[(8)]);
var inst_25998 = (state_26011[(2)]);
var inst_25999 = (inst_25988 + (1));
var inst_25988__$1 = inst_25999;
var state_26011__$1 = (function (){var statearr_26022 = state_26011;
(statearr_26022[(8)] = inst_25988__$1);

(statearr_26022[(10)] = inst_25998);

return statearr_26022;
})();
var statearr_26023_26045 = state_26011__$1;
(statearr_26023_26045[(2)] = null);

(statearr_26023_26045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26012 === (9))){
var state_26011__$1 = state_26011;
var statearr_26024_26046 = state_26011__$1;
(statearr_26024_26046[(2)] = null);

(statearr_26024_26046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26012 === (5))){
var state_26011__$1 = state_26011;
var statearr_26025_26047 = state_26011__$1;
(statearr_26025_26047[(2)] = null);

(statearr_26025_26047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26012 === (10))){
var inst_26003 = (state_26011[(2)]);
var state_26011__$1 = state_26011;
var statearr_26026_26048 = state_26011__$1;
(statearr_26026_26048[(2)] = inst_26003);

(statearr_26026_26048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26012 === (8))){
var inst_25993 = (state_26011[(7)]);
var state_26011__$1 = state_26011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26011__$1,(11),out,inst_25993);
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
});})(c__23874__auto___26038,out))
;
return ((function (switch__23762__auto__,c__23874__auto___26038,out){
return (function() {
var cljs$core$async$state_machine__23763__auto__ = null;
var cljs$core$async$state_machine__23763__auto____0 = (function (){
var statearr_26030 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26030[(0)] = cljs$core$async$state_machine__23763__auto__);

(statearr_26030[(1)] = (1));

return statearr_26030;
});
var cljs$core$async$state_machine__23763__auto____1 = (function (state_26011){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_26011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e26031){if((e26031 instanceof Object)){
var ex__23766__auto__ = e26031;
var statearr_26032_26049 = state_26011;
(statearr_26032_26049[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26050 = state_26011;
state_26011 = G__26050;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$state_machine__23763__auto__ = function(state_26011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23763__auto____1.call(this,state_26011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23763__auto____0;
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23763__auto____1;
return cljs$core$async$state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___26038,out))
})();
var state__23876__auto__ = (function (){var statearr_26033 = f__23875__auto__.call(null);
(statearr_26033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___26038);

return statearr_26033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___26038,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26058 = (function (map_LT_,f,ch,meta26059){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26059 = meta26059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26060,meta26059__$1){
var self__ = this;
var _26060__$1 = this;
return (new cljs.core.async.t_cljs$core$async26058(self__.map_LT_,self__.f,self__.ch,meta26059__$1));
});

cljs.core.async.t_cljs$core$async26058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26060){
var self__ = this;
var _26060__$1 = this;
return self__.meta26059;
});

cljs.core.async.t_cljs$core$async26058.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26058.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26058.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26058.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26058.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26061 = (function (map_LT_,f,ch,meta26059,_,fn1,meta26062){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26059 = meta26059;
this._ = _;
this.fn1 = fn1;
this.meta26062 = meta26062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26063,meta26062__$1){
var self__ = this;
var _26063__$1 = this;
return (new cljs.core.async.t_cljs$core$async26061(self__.map_LT_,self__.f,self__.ch,self__.meta26059,self__._,self__.fn1,meta26062__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26063){
var self__ = this;
var _26063__$1 = this;
return self__.meta26062;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26051_SHARP_){
return f1.call(null,(((p1__26051_SHARP_ == null))?null:self__.f.call(null,p1__26051_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26061.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26059","meta26059",378699199,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26058","cljs.core.async/t_cljs$core$async26058",-531831666,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26062","meta26062",880750298,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26061";

cljs.core.async.t_cljs$core$async26061.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async26061");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26061 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26061(map_LT___$1,f__$1,ch__$1,meta26059__$1,___$2,fn1__$1,meta26062){
return (new cljs.core.async.t_cljs$core$async26061(map_LT___$1,f__$1,ch__$1,meta26059__$1,___$2,fn1__$1,meta26062));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26061(self__.map_LT_,self__.f,self__.ch,self__.meta26059,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21695__auto__ = ret;
if(cljs.core.truth_(and__21695__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21695__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26058.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26058.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26059","meta26059",378699199,null)], null);
});

cljs.core.async.t_cljs$core$async26058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26058";

cljs.core.async.t_cljs$core$async26058.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async26058");
});

cljs.core.async.__GT_t_cljs$core$async26058 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26058(map_LT___$1,f__$1,ch__$1,meta26059){
return (new cljs.core.async.t_cljs$core$async26058(map_LT___$1,f__$1,ch__$1,meta26059));
});

}

return (new cljs.core.async.t_cljs$core$async26058(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26067 = (function (map_GT_,f,ch,meta26068){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26068 = meta26068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26069,meta26068__$1){
var self__ = this;
var _26069__$1 = this;
return (new cljs.core.async.t_cljs$core$async26067(self__.map_GT_,self__.f,self__.ch,meta26068__$1));
});

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26069){
var self__ = this;
var _26069__$1 = this;
return self__.meta26068;
});

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26068","meta26068",1348264285,null)], null);
});

cljs.core.async.t_cljs$core$async26067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26067";

cljs.core.async.t_cljs$core$async26067.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async26067");
});

cljs.core.async.__GT_t_cljs$core$async26067 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26067(map_GT___$1,f__$1,ch__$1,meta26068){
return (new cljs.core.async.t_cljs$core$async26067(map_GT___$1,f__$1,ch__$1,meta26068));
});

}

return (new cljs.core.async.t_cljs$core$async26067(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26073 = (function (filter_GT_,p,ch,meta26074){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26074 = meta26074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26075,meta26074__$1){
var self__ = this;
var _26075__$1 = this;
return (new cljs.core.async.t_cljs$core$async26073(self__.filter_GT_,self__.p,self__.ch,meta26074__$1));
});

cljs.core.async.t_cljs$core$async26073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26075){
var self__ = this;
var _26075__$1 = this;
return self__.meta26074;
});

cljs.core.async.t_cljs$core$async26073.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26073.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26073.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26073.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26074","meta26074",-777717364,null)], null);
});

cljs.core.async.t_cljs$core$async26073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26073";

cljs.core.async.t_cljs$core$async26073.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async26073");
});

cljs.core.async.__GT_t_cljs$core$async26073 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26073(filter_GT___$1,p__$1,ch__$1,meta26074){
return (new cljs.core.async.t_cljs$core$async26073(filter_GT___$1,p__$1,ch__$1,meta26074));
});

}

return (new cljs.core.async.t_cljs$core$async26073(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26076 = [];
var len__22777__auto___26120 = arguments.length;
var i__22778__auto___26121 = (0);
while(true){
if((i__22778__auto___26121 < len__22777__auto___26120)){
args26076.push((arguments[i__22778__auto___26121]));

var G__26122 = (i__22778__auto___26121 + (1));
i__22778__auto___26121 = G__26122;
continue;
} else {
}
break;
}

var G__26078 = args26076.length;
switch (G__26078) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26076.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23874__auto___26124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___26124,out){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___26124,out){
return (function (state_26099){
var state_val_26100 = (state_26099[(1)]);
if((state_val_26100 === (7))){
var inst_26095 = (state_26099[(2)]);
var state_26099__$1 = state_26099;
var statearr_26101_26125 = state_26099__$1;
(statearr_26101_26125[(2)] = inst_26095);

(statearr_26101_26125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26100 === (1))){
var state_26099__$1 = state_26099;
var statearr_26102_26126 = state_26099__$1;
(statearr_26102_26126[(2)] = null);

(statearr_26102_26126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26100 === (4))){
var inst_26081 = (state_26099[(7)]);
var inst_26081__$1 = (state_26099[(2)]);
var inst_26082 = (inst_26081__$1 == null);
var state_26099__$1 = (function (){var statearr_26103 = state_26099;
(statearr_26103[(7)] = inst_26081__$1);

return statearr_26103;
})();
if(cljs.core.truth_(inst_26082)){
var statearr_26104_26127 = state_26099__$1;
(statearr_26104_26127[(1)] = (5));

} else {
var statearr_26105_26128 = state_26099__$1;
(statearr_26105_26128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26100 === (6))){
var inst_26081 = (state_26099[(7)]);
var inst_26086 = p.call(null,inst_26081);
var state_26099__$1 = state_26099;
if(cljs.core.truth_(inst_26086)){
var statearr_26106_26129 = state_26099__$1;
(statearr_26106_26129[(1)] = (8));

} else {
var statearr_26107_26130 = state_26099__$1;
(statearr_26107_26130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26100 === (3))){
var inst_26097 = (state_26099[(2)]);
var state_26099__$1 = state_26099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26099__$1,inst_26097);
} else {
if((state_val_26100 === (2))){
var state_26099__$1 = state_26099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26099__$1,(4),ch);
} else {
if((state_val_26100 === (11))){
var inst_26089 = (state_26099[(2)]);
var state_26099__$1 = state_26099;
var statearr_26108_26131 = state_26099__$1;
(statearr_26108_26131[(2)] = inst_26089);

(statearr_26108_26131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26100 === (9))){
var state_26099__$1 = state_26099;
var statearr_26109_26132 = state_26099__$1;
(statearr_26109_26132[(2)] = null);

(statearr_26109_26132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26100 === (5))){
var inst_26084 = cljs.core.async.close_BANG_.call(null,out);
var state_26099__$1 = state_26099;
var statearr_26110_26133 = state_26099__$1;
(statearr_26110_26133[(2)] = inst_26084);

(statearr_26110_26133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26100 === (10))){
var inst_26092 = (state_26099[(2)]);
var state_26099__$1 = (function (){var statearr_26111 = state_26099;
(statearr_26111[(8)] = inst_26092);

return statearr_26111;
})();
var statearr_26112_26134 = state_26099__$1;
(statearr_26112_26134[(2)] = null);

(statearr_26112_26134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26100 === (8))){
var inst_26081 = (state_26099[(7)]);
var state_26099__$1 = state_26099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26099__$1,(11),out,inst_26081);
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
});})(c__23874__auto___26124,out))
;
return ((function (switch__23762__auto__,c__23874__auto___26124,out){
return (function() {
var cljs$core$async$state_machine__23763__auto__ = null;
var cljs$core$async$state_machine__23763__auto____0 = (function (){
var statearr_26116 = [null,null,null,null,null,null,null,null,null];
(statearr_26116[(0)] = cljs$core$async$state_machine__23763__auto__);

(statearr_26116[(1)] = (1));

return statearr_26116;
});
var cljs$core$async$state_machine__23763__auto____1 = (function (state_26099){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_26099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e26117){if((e26117 instanceof Object)){
var ex__23766__auto__ = e26117;
var statearr_26118_26135 = state_26099;
(statearr_26118_26135[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26136 = state_26099;
state_26099 = G__26136;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$state_machine__23763__auto__ = function(state_26099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23763__auto____1.call(this,state_26099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23763__auto____0;
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23763__auto____1;
return cljs$core$async$state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___26124,out))
})();
var state__23876__auto__ = (function (){var statearr_26119 = f__23875__auto__.call(null);
(statearr_26119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___26124);

return statearr_26119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___26124,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26137 = [];
var len__22777__auto___26140 = arguments.length;
var i__22778__auto___26141 = (0);
while(true){
if((i__22778__auto___26141 < len__22777__auto___26140)){
args26137.push((arguments[i__22778__auto___26141]));

var G__26142 = (i__22778__auto___26141 + (1));
i__22778__auto___26141 = G__26142;
continue;
} else {
}
break;
}

var G__26139 = args26137.length;
switch (G__26139) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26137.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto__){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto__){
return (function (state_26309){
var state_val_26310 = (state_26309[(1)]);
if((state_val_26310 === (7))){
var inst_26305 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26311_26352 = state_26309__$1;
(statearr_26311_26352[(2)] = inst_26305);

(statearr_26311_26352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (20))){
var inst_26275 = (state_26309[(7)]);
var inst_26286 = (state_26309[(2)]);
var inst_26287 = cljs.core.next.call(null,inst_26275);
var inst_26261 = inst_26287;
var inst_26262 = null;
var inst_26263 = (0);
var inst_26264 = (0);
var state_26309__$1 = (function (){var statearr_26312 = state_26309;
(statearr_26312[(8)] = inst_26262);

(statearr_26312[(9)] = inst_26286);

(statearr_26312[(10)] = inst_26261);

(statearr_26312[(11)] = inst_26263);

(statearr_26312[(12)] = inst_26264);

return statearr_26312;
})();
var statearr_26313_26353 = state_26309__$1;
(statearr_26313_26353[(2)] = null);

(statearr_26313_26353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (1))){
var state_26309__$1 = state_26309;
var statearr_26314_26354 = state_26309__$1;
(statearr_26314_26354[(2)] = null);

(statearr_26314_26354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (4))){
var inst_26250 = (state_26309[(13)]);
var inst_26250__$1 = (state_26309[(2)]);
var inst_26251 = (inst_26250__$1 == null);
var state_26309__$1 = (function (){var statearr_26315 = state_26309;
(statearr_26315[(13)] = inst_26250__$1);

return statearr_26315;
})();
if(cljs.core.truth_(inst_26251)){
var statearr_26316_26355 = state_26309__$1;
(statearr_26316_26355[(1)] = (5));

} else {
var statearr_26317_26356 = state_26309__$1;
(statearr_26317_26356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (15))){
var state_26309__$1 = state_26309;
var statearr_26321_26357 = state_26309__$1;
(statearr_26321_26357[(2)] = null);

(statearr_26321_26357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (21))){
var state_26309__$1 = state_26309;
var statearr_26322_26358 = state_26309__$1;
(statearr_26322_26358[(2)] = null);

(statearr_26322_26358[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (13))){
var inst_26262 = (state_26309[(8)]);
var inst_26261 = (state_26309[(10)]);
var inst_26263 = (state_26309[(11)]);
var inst_26264 = (state_26309[(12)]);
var inst_26271 = (state_26309[(2)]);
var inst_26272 = (inst_26264 + (1));
var tmp26318 = inst_26262;
var tmp26319 = inst_26261;
var tmp26320 = inst_26263;
var inst_26261__$1 = tmp26319;
var inst_26262__$1 = tmp26318;
var inst_26263__$1 = tmp26320;
var inst_26264__$1 = inst_26272;
var state_26309__$1 = (function (){var statearr_26323 = state_26309;
(statearr_26323[(8)] = inst_26262__$1);

(statearr_26323[(10)] = inst_26261__$1);

(statearr_26323[(11)] = inst_26263__$1);

(statearr_26323[(12)] = inst_26264__$1);

(statearr_26323[(14)] = inst_26271);

return statearr_26323;
})();
var statearr_26324_26359 = state_26309__$1;
(statearr_26324_26359[(2)] = null);

(statearr_26324_26359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (22))){
var state_26309__$1 = state_26309;
var statearr_26325_26360 = state_26309__$1;
(statearr_26325_26360[(2)] = null);

(statearr_26325_26360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (6))){
var inst_26250 = (state_26309[(13)]);
var inst_26259 = f.call(null,inst_26250);
var inst_26260 = cljs.core.seq.call(null,inst_26259);
var inst_26261 = inst_26260;
var inst_26262 = null;
var inst_26263 = (0);
var inst_26264 = (0);
var state_26309__$1 = (function (){var statearr_26326 = state_26309;
(statearr_26326[(8)] = inst_26262);

(statearr_26326[(10)] = inst_26261);

(statearr_26326[(11)] = inst_26263);

(statearr_26326[(12)] = inst_26264);

return statearr_26326;
})();
var statearr_26327_26361 = state_26309__$1;
(statearr_26327_26361[(2)] = null);

(statearr_26327_26361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (17))){
var inst_26275 = (state_26309[(7)]);
var inst_26279 = cljs.core.chunk_first.call(null,inst_26275);
var inst_26280 = cljs.core.chunk_rest.call(null,inst_26275);
var inst_26281 = cljs.core.count.call(null,inst_26279);
var inst_26261 = inst_26280;
var inst_26262 = inst_26279;
var inst_26263 = inst_26281;
var inst_26264 = (0);
var state_26309__$1 = (function (){var statearr_26328 = state_26309;
(statearr_26328[(8)] = inst_26262);

(statearr_26328[(10)] = inst_26261);

(statearr_26328[(11)] = inst_26263);

(statearr_26328[(12)] = inst_26264);

return statearr_26328;
})();
var statearr_26329_26362 = state_26309__$1;
(statearr_26329_26362[(2)] = null);

(statearr_26329_26362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (3))){
var inst_26307 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26309__$1,inst_26307);
} else {
if((state_val_26310 === (12))){
var inst_26295 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26330_26363 = state_26309__$1;
(statearr_26330_26363[(2)] = inst_26295);

(statearr_26330_26363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (2))){
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26309__$1,(4),in$);
} else {
if((state_val_26310 === (23))){
var inst_26303 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26331_26364 = state_26309__$1;
(statearr_26331_26364[(2)] = inst_26303);

(statearr_26331_26364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (19))){
var inst_26290 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26332_26365 = state_26309__$1;
(statearr_26332_26365[(2)] = inst_26290);

(statearr_26332_26365[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (11))){
var inst_26275 = (state_26309[(7)]);
var inst_26261 = (state_26309[(10)]);
var inst_26275__$1 = cljs.core.seq.call(null,inst_26261);
var state_26309__$1 = (function (){var statearr_26333 = state_26309;
(statearr_26333[(7)] = inst_26275__$1);

return statearr_26333;
})();
if(inst_26275__$1){
var statearr_26334_26366 = state_26309__$1;
(statearr_26334_26366[(1)] = (14));

} else {
var statearr_26335_26367 = state_26309__$1;
(statearr_26335_26367[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (9))){
var inst_26297 = (state_26309[(2)]);
var inst_26298 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26309__$1 = (function (){var statearr_26336 = state_26309;
(statearr_26336[(15)] = inst_26297);

return statearr_26336;
})();
if(cljs.core.truth_(inst_26298)){
var statearr_26337_26368 = state_26309__$1;
(statearr_26337_26368[(1)] = (21));

} else {
var statearr_26338_26369 = state_26309__$1;
(statearr_26338_26369[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (5))){
var inst_26253 = cljs.core.async.close_BANG_.call(null,out);
var state_26309__$1 = state_26309;
var statearr_26339_26370 = state_26309__$1;
(statearr_26339_26370[(2)] = inst_26253);

(statearr_26339_26370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (14))){
var inst_26275 = (state_26309[(7)]);
var inst_26277 = cljs.core.chunked_seq_QMARK_.call(null,inst_26275);
var state_26309__$1 = state_26309;
if(inst_26277){
var statearr_26340_26371 = state_26309__$1;
(statearr_26340_26371[(1)] = (17));

} else {
var statearr_26341_26372 = state_26309__$1;
(statearr_26341_26372[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (16))){
var inst_26293 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26342_26373 = state_26309__$1;
(statearr_26342_26373[(2)] = inst_26293);

(statearr_26342_26373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (10))){
var inst_26262 = (state_26309[(8)]);
var inst_26264 = (state_26309[(12)]);
var inst_26269 = cljs.core._nth.call(null,inst_26262,inst_26264);
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26309__$1,(13),out,inst_26269);
} else {
if((state_val_26310 === (18))){
var inst_26275 = (state_26309[(7)]);
var inst_26284 = cljs.core.first.call(null,inst_26275);
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26309__$1,(20),out,inst_26284);
} else {
if((state_val_26310 === (8))){
var inst_26263 = (state_26309[(11)]);
var inst_26264 = (state_26309[(12)]);
var inst_26266 = (inst_26264 < inst_26263);
var inst_26267 = inst_26266;
var state_26309__$1 = state_26309;
if(cljs.core.truth_(inst_26267)){
var statearr_26343_26374 = state_26309__$1;
(statearr_26343_26374[(1)] = (10));

} else {
var statearr_26344_26375 = state_26309__$1;
(statearr_26344_26375[(1)] = (11));

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
});})(c__23874__auto__))
;
return ((function (switch__23762__auto__,c__23874__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23763__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23763__auto____0 = (function (){
var statearr_26348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26348[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23763__auto__);

(statearr_26348[(1)] = (1));

return statearr_26348;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23763__auto____1 = (function (state_26309){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_26309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e26349){if((e26349 instanceof Object)){
var ex__23766__auto__ = e26349;
var statearr_26350_26376 = state_26309;
(statearr_26350_26376[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26377 = state_26309;
state_26309 = G__26377;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23763__auto__ = function(state_26309){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23763__auto____1.call(this,state_26309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23763__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23763__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto__))
})();
var state__23876__auto__ = (function (){var statearr_26351 = f__23875__auto__.call(null);
(statearr_26351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto__);

return statearr_26351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto__))
);

return c__23874__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26378 = [];
var len__22777__auto___26381 = arguments.length;
var i__22778__auto___26382 = (0);
while(true){
if((i__22778__auto___26382 < len__22777__auto___26381)){
args26378.push((arguments[i__22778__auto___26382]));

var G__26383 = (i__22778__auto___26382 + (1));
i__22778__auto___26382 = G__26383;
continue;
} else {
}
break;
}

var G__26380 = args26378.length;
switch (G__26380) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26378.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26385 = [];
var len__22777__auto___26388 = arguments.length;
var i__22778__auto___26389 = (0);
while(true){
if((i__22778__auto___26389 < len__22777__auto___26388)){
args26385.push((arguments[i__22778__auto___26389]));

var G__26390 = (i__22778__auto___26389 + (1));
i__22778__auto___26389 = G__26390;
continue;
} else {
}
break;
}

var G__26387 = args26385.length;
switch (G__26387) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26385.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26392 = [];
var len__22777__auto___26443 = arguments.length;
var i__22778__auto___26444 = (0);
while(true){
if((i__22778__auto___26444 < len__22777__auto___26443)){
args26392.push((arguments[i__22778__auto___26444]));

var G__26445 = (i__22778__auto___26444 + (1));
i__22778__auto___26444 = G__26445;
continue;
} else {
}
break;
}

var G__26394 = args26392.length;
switch (G__26394) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26392.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23874__auto___26447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___26447,out){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___26447,out){
return (function (state_26418){
var state_val_26419 = (state_26418[(1)]);
if((state_val_26419 === (7))){
var inst_26413 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26420_26448 = state_26418__$1;
(statearr_26420_26448[(2)] = inst_26413);

(statearr_26420_26448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (1))){
var inst_26395 = null;
var state_26418__$1 = (function (){var statearr_26421 = state_26418;
(statearr_26421[(7)] = inst_26395);

return statearr_26421;
})();
var statearr_26422_26449 = state_26418__$1;
(statearr_26422_26449[(2)] = null);

(statearr_26422_26449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (4))){
var inst_26398 = (state_26418[(8)]);
var inst_26398__$1 = (state_26418[(2)]);
var inst_26399 = (inst_26398__$1 == null);
var inst_26400 = cljs.core.not.call(null,inst_26399);
var state_26418__$1 = (function (){var statearr_26423 = state_26418;
(statearr_26423[(8)] = inst_26398__$1);

return statearr_26423;
})();
if(inst_26400){
var statearr_26424_26450 = state_26418__$1;
(statearr_26424_26450[(1)] = (5));

} else {
var statearr_26425_26451 = state_26418__$1;
(statearr_26425_26451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (6))){
var state_26418__$1 = state_26418;
var statearr_26426_26452 = state_26418__$1;
(statearr_26426_26452[(2)] = null);

(statearr_26426_26452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (3))){
var inst_26415 = (state_26418[(2)]);
var inst_26416 = cljs.core.async.close_BANG_.call(null,out);
var state_26418__$1 = (function (){var statearr_26427 = state_26418;
(statearr_26427[(9)] = inst_26415);

return statearr_26427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26418__$1,inst_26416);
} else {
if((state_val_26419 === (2))){
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26418__$1,(4),ch);
} else {
if((state_val_26419 === (11))){
var inst_26398 = (state_26418[(8)]);
var inst_26407 = (state_26418[(2)]);
var inst_26395 = inst_26398;
var state_26418__$1 = (function (){var statearr_26428 = state_26418;
(statearr_26428[(10)] = inst_26407);

(statearr_26428[(7)] = inst_26395);

return statearr_26428;
})();
var statearr_26429_26453 = state_26418__$1;
(statearr_26429_26453[(2)] = null);

(statearr_26429_26453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (9))){
var inst_26398 = (state_26418[(8)]);
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26418__$1,(11),out,inst_26398);
} else {
if((state_val_26419 === (5))){
var inst_26398 = (state_26418[(8)]);
var inst_26395 = (state_26418[(7)]);
var inst_26402 = cljs.core._EQ_.call(null,inst_26398,inst_26395);
var state_26418__$1 = state_26418;
if(inst_26402){
var statearr_26431_26454 = state_26418__$1;
(statearr_26431_26454[(1)] = (8));

} else {
var statearr_26432_26455 = state_26418__$1;
(statearr_26432_26455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (10))){
var inst_26410 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26433_26456 = state_26418__$1;
(statearr_26433_26456[(2)] = inst_26410);

(statearr_26433_26456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (8))){
var inst_26395 = (state_26418[(7)]);
var tmp26430 = inst_26395;
var inst_26395__$1 = tmp26430;
var state_26418__$1 = (function (){var statearr_26434 = state_26418;
(statearr_26434[(7)] = inst_26395__$1);

return statearr_26434;
})();
var statearr_26435_26457 = state_26418__$1;
(statearr_26435_26457[(2)] = null);

(statearr_26435_26457[(1)] = (2));


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
});})(c__23874__auto___26447,out))
;
return ((function (switch__23762__auto__,c__23874__auto___26447,out){
return (function() {
var cljs$core$async$state_machine__23763__auto__ = null;
var cljs$core$async$state_machine__23763__auto____0 = (function (){
var statearr_26439 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26439[(0)] = cljs$core$async$state_machine__23763__auto__);

(statearr_26439[(1)] = (1));

return statearr_26439;
});
var cljs$core$async$state_machine__23763__auto____1 = (function (state_26418){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_26418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e26440){if((e26440 instanceof Object)){
var ex__23766__auto__ = e26440;
var statearr_26441_26458 = state_26418;
(statearr_26441_26458[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26459 = state_26418;
state_26418 = G__26459;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$state_machine__23763__auto__ = function(state_26418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23763__auto____1.call(this,state_26418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23763__auto____0;
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23763__auto____1;
return cljs$core$async$state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___26447,out))
})();
var state__23876__auto__ = (function (){var statearr_26442 = f__23875__auto__.call(null);
(statearr_26442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___26447);

return statearr_26442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___26447,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26460 = [];
var len__22777__auto___26530 = arguments.length;
var i__22778__auto___26531 = (0);
while(true){
if((i__22778__auto___26531 < len__22777__auto___26530)){
args26460.push((arguments[i__22778__auto___26531]));

var G__26532 = (i__22778__auto___26531 + (1));
i__22778__auto___26531 = G__26532;
continue;
} else {
}
break;
}

var G__26462 = args26460.length;
switch (G__26462) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26460.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23874__auto___26534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___26534,out){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___26534,out){
return (function (state_26500){
var state_val_26501 = (state_26500[(1)]);
if((state_val_26501 === (7))){
var inst_26496 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
var statearr_26502_26535 = state_26500__$1;
(statearr_26502_26535[(2)] = inst_26496);

(statearr_26502_26535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (1))){
var inst_26463 = (new Array(n));
var inst_26464 = inst_26463;
var inst_26465 = (0);
var state_26500__$1 = (function (){var statearr_26503 = state_26500;
(statearr_26503[(7)] = inst_26464);

(statearr_26503[(8)] = inst_26465);

return statearr_26503;
})();
var statearr_26504_26536 = state_26500__$1;
(statearr_26504_26536[(2)] = null);

(statearr_26504_26536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (4))){
var inst_26468 = (state_26500[(9)]);
var inst_26468__$1 = (state_26500[(2)]);
var inst_26469 = (inst_26468__$1 == null);
var inst_26470 = cljs.core.not.call(null,inst_26469);
var state_26500__$1 = (function (){var statearr_26505 = state_26500;
(statearr_26505[(9)] = inst_26468__$1);

return statearr_26505;
})();
if(inst_26470){
var statearr_26506_26537 = state_26500__$1;
(statearr_26506_26537[(1)] = (5));

} else {
var statearr_26507_26538 = state_26500__$1;
(statearr_26507_26538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (15))){
var inst_26490 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
var statearr_26508_26539 = state_26500__$1;
(statearr_26508_26539[(2)] = inst_26490);

(statearr_26508_26539[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (13))){
var state_26500__$1 = state_26500;
var statearr_26509_26540 = state_26500__$1;
(statearr_26509_26540[(2)] = null);

(statearr_26509_26540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (6))){
var inst_26465 = (state_26500[(8)]);
var inst_26486 = (inst_26465 > (0));
var state_26500__$1 = state_26500;
if(cljs.core.truth_(inst_26486)){
var statearr_26510_26541 = state_26500__$1;
(statearr_26510_26541[(1)] = (12));

} else {
var statearr_26511_26542 = state_26500__$1;
(statearr_26511_26542[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (3))){
var inst_26498 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26500__$1,inst_26498);
} else {
if((state_val_26501 === (12))){
var inst_26464 = (state_26500[(7)]);
var inst_26488 = cljs.core.vec.call(null,inst_26464);
var state_26500__$1 = state_26500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26500__$1,(15),out,inst_26488);
} else {
if((state_val_26501 === (2))){
var state_26500__$1 = state_26500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26500__$1,(4),ch);
} else {
if((state_val_26501 === (11))){
var inst_26480 = (state_26500[(2)]);
var inst_26481 = (new Array(n));
var inst_26464 = inst_26481;
var inst_26465 = (0);
var state_26500__$1 = (function (){var statearr_26512 = state_26500;
(statearr_26512[(7)] = inst_26464);

(statearr_26512[(10)] = inst_26480);

(statearr_26512[(8)] = inst_26465);

return statearr_26512;
})();
var statearr_26513_26543 = state_26500__$1;
(statearr_26513_26543[(2)] = null);

(statearr_26513_26543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (9))){
var inst_26464 = (state_26500[(7)]);
var inst_26478 = cljs.core.vec.call(null,inst_26464);
var state_26500__$1 = state_26500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26500__$1,(11),out,inst_26478);
} else {
if((state_val_26501 === (5))){
var inst_26464 = (state_26500[(7)]);
var inst_26473 = (state_26500[(11)]);
var inst_26468 = (state_26500[(9)]);
var inst_26465 = (state_26500[(8)]);
var inst_26472 = (inst_26464[inst_26465] = inst_26468);
var inst_26473__$1 = (inst_26465 + (1));
var inst_26474 = (inst_26473__$1 < n);
var state_26500__$1 = (function (){var statearr_26514 = state_26500;
(statearr_26514[(11)] = inst_26473__$1);

(statearr_26514[(12)] = inst_26472);

return statearr_26514;
})();
if(cljs.core.truth_(inst_26474)){
var statearr_26515_26544 = state_26500__$1;
(statearr_26515_26544[(1)] = (8));

} else {
var statearr_26516_26545 = state_26500__$1;
(statearr_26516_26545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (14))){
var inst_26493 = (state_26500[(2)]);
var inst_26494 = cljs.core.async.close_BANG_.call(null,out);
var state_26500__$1 = (function (){var statearr_26518 = state_26500;
(statearr_26518[(13)] = inst_26493);

return statearr_26518;
})();
var statearr_26519_26546 = state_26500__$1;
(statearr_26519_26546[(2)] = inst_26494);

(statearr_26519_26546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (10))){
var inst_26484 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
var statearr_26520_26547 = state_26500__$1;
(statearr_26520_26547[(2)] = inst_26484);

(statearr_26520_26547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (8))){
var inst_26464 = (state_26500[(7)]);
var inst_26473 = (state_26500[(11)]);
var tmp26517 = inst_26464;
var inst_26464__$1 = tmp26517;
var inst_26465 = inst_26473;
var state_26500__$1 = (function (){var statearr_26521 = state_26500;
(statearr_26521[(7)] = inst_26464__$1);

(statearr_26521[(8)] = inst_26465);

return statearr_26521;
})();
var statearr_26522_26548 = state_26500__$1;
(statearr_26522_26548[(2)] = null);

(statearr_26522_26548[(1)] = (2));


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
});})(c__23874__auto___26534,out))
;
return ((function (switch__23762__auto__,c__23874__auto___26534,out){
return (function() {
var cljs$core$async$state_machine__23763__auto__ = null;
var cljs$core$async$state_machine__23763__auto____0 = (function (){
var statearr_26526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26526[(0)] = cljs$core$async$state_machine__23763__auto__);

(statearr_26526[(1)] = (1));

return statearr_26526;
});
var cljs$core$async$state_machine__23763__auto____1 = (function (state_26500){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_26500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e26527){if((e26527 instanceof Object)){
var ex__23766__auto__ = e26527;
var statearr_26528_26549 = state_26500;
(statearr_26528_26549[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26550 = state_26500;
state_26500 = G__26550;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$state_machine__23763__auto__ = function(state_26500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23763__auto____1.call(this,state_26500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23763__auto____0;
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23763__auto____1;
return cljs$core$async$state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___26534,out))
})();
var state__23876__auto__ = (function (){var statearr_26529 = f__23875__auto__.call(null);
(statearr_26529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___26534);

return statearr_26529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___26534,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26551 = [];
var len__22777__auto___26625 = arguments.length;
var i__22778__auto___26626 = (0);
while(true){
if((i__22778__auto___26626 < len__22777__auto___26625)){
args26551.push((arguments[i__22778__auto___26626]));

var G__26627 = (i__22778__auto___26626 + (1));
i__22778__auto___26626 = G__26627;
continue;
} else {
}
break;
}

var G__26553 = args26551.length;
switch (G__26553) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26551.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23874__auto___26629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___26629,out){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___26629,out){
return (function (state_26595){
var state_val_26596 = (state_26595[(1)]);
if((state_val_26596 === (7))){
var inst_26591 = (state_26595[(2)]);
var state_26595__$1 = state_26595;
var statearr_26597_26630 = state_26595__$1;
(statearr_26597_26630[(2)] = inst_26591);

(statearr_26597_26630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (1))){
var inst_26554 = [];
var inst_26555 = inst_26554;
var inst_26556 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26595__$1 = (function (){var statearr_26598 = state_26595;
(statearr_26598[(7)] = inst_26556);

(statearr_26598[(8)] = inst_26555);

return statearr_26598;
})();
var statearr_26599_26631 = state_26595__$1;
(statearr_26599_26631[(2)] = null);

(statearr_26599_26631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (4))){
var inst_26559 = (state_26595[(9)]);
var inst_26559__$1 = (state_26595[(2)]);
var inst_26560 = (inst_26559__$1 == null);
var inst_26561 = cljs.core.not.call(null,inst_26560);
var state_26595__$1 = (function (){var statearr_26600 = state_26595;
(statearr_26600[(9)] = inst_26559__$1);

return statearr_26600;
})();
if(inst_26561){
var statearr_26601_26632 = state_26595__$1;
(statearr_26601_26632[(1)] = (5));

} else {
var statearr_26602_26633 = state_26595__$1;
(statearr_26602_26633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (15))){
var inst_26585 = (state_26595[(2)]);
var state_26595__$1 = state_26595;
var statearr_26603_26634 = state_26595__$1;
(statearr_26603_26634[(2)] = inst_26585);

(statearr_26603_26634[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (13))){
var state_26595__$1 = state_26595;
var statearr_26604_26635 = state_26595__$1;
(statearr_26604_26635[(2)] = null);

(statearr_26604_26635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (6))){
var inst_26555 = (state_26595[(8)]);
var inst_26580 = inst_26555.length;
var inst_26581 = (inst_26580 > (0));
var state_26595__$1 = state_26595;
if(cljs.core.truth_(inst_26581)){
var statearr_26605_26636 = state_26595__$1;
(statearr_26605_26636[(1)] = (12));

} else {
var statearr_26606_26637 = state_26595__$1;
(statearr_26606_26637[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (3))){
var inst_26593 = (state_26595[(2)]);
var state_26595__$1 = state_26595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26595__$1,inst_26593);
} else {
if((state_val_26596 === (12))){
var inst_26555 = (state_26595[(8)]);
var inst_26583 = cljs.core.vec.call(null,inst_26555);
var state_26595__$1 = state_26595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26595__$1,(15),out,inst_26583);
} else {
if((state_val_26596 === (2))){
var state_26595__$1 = state_26595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26595__$1,(4),ch);
} else {
if((state_val_26596 === (11))){
var inst_26563 = (state_26595[(10)]);
var inst_26559 = (state_26595[(9)]);
var inst_26573 = (state_26595[(2)]);
var inst_26574 = [];
var inst_26575 = inst_26574.push(inst_26559);
var inst_26555 = inst_26574;
var inst_26556 = inst_26563;
var state_26595__$1 = (function (){var statearr_26607 = state_26595;
(statearr_26607[(7)] = inst_26556);

(statearr_26607[(11)] = inst_26573);

(statearr_26607[(12)] = inst_26575);

(statearr_26607[(8)] = inst_26555);

return statearr_26607;
})();
var statearr_26608_26638 = state_26595__$1;
(statearr_26608_26638[(2)] = null);

(statearr_26608_26638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (9))){
var inst_26555 = (state_26595[(8)]);
var inst_26571 = cljs.core.vec.call(null,inst_26555);
var state_26595__$1 = state_26595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26595__$1,(11),out,inst_26571);
} else {
if((state_val_26596 === (5))){
var inst_26556 = (state_26595[(7)]);
var inst_26563 = (state_26595[(10)]);
var inst_26559 = (state_26595[(9)]);
var inst_26563__$1 = f.call(null,inst_26559);
var inst_26564 = cljs.core._EQ_.call(null,inst_26563__$1,inst_26556);
var inst_26565 = cljs.core.keyword_identical_QMARK_.call(null,inst_26556,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26566 = (inst_26564) || (inst_26565);
var state_26595__$1 = (function (){var statearr_26609 = state_26595;
(statearr_26609[(10)] = inst_26563__$1);

return statearr_26609;
})();
if(cljs.core.truth_(inst_26566)){
var statearr_26610_26639 = state_26595__$1;
(statearr_26610_26639[(1)] = (8));

} else {
var statearr_26611_26640 = state_26595__$1;
(statearr_26611_26640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (14))){
var inst_26588 = (state_26595[(2)]);
var inst_26589 = cljs.core.async.close_BANG_.call(null,out);
var state_26595__$1 = (function (){var statearr_26613 = state_26595;
(statearr_26613[(13)] = inst_26588);

return statearr_26613;
})();
var statearr_26614_26641 = state_26595__$1;
(statearr_26614_26641[(2)] = inst_26589);

(statearr_26614_26641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (10))){
var inst_26578 = (state_26595[(2)]);
var state_26595__$1 = state_26595;
var statearr_26615_26642 = state_26595__$1;
(statearr_26615_26642[(2)] = inst_26578);

(statearr_26615_26642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (8))){
var inst_26563 = (state_26595[(10)]);
var inst_26559 = (state_26595[(9)]);
var inst_26555 = (state_26595[(8)]);
var inst_26568 = inst_26555.push(inst_26559);
var tmp26612 = inst_26555;
var inst_26555__$1 = tmp26612;
var inst_26556 = inst_26563;
var state_26595__$1 = (function (){var statearr_26616 = state_26595;
(statearr_26616[(7)] = inst_26556);

(statearr_26616[(8)] = inst_26555__$1);

(statearr_26616[(14)] = inst_26568);

return statearr_26616;
})();
var statearr_26617_26643 = state_26595__$1;
(statearr_26617_26643[(2)] = null);

(statearr_26617_26643[(1)] = (2));


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
});})(c__23874__auto___26629,out))
;
return ((function (switch__23762__auto__,c__23874__auto___26629,out){
return (function() {
var cljs$core$async$state_machine__23763__auto__ = null;
var cljs$core$async$state_machine__23763__auto____0 = (function (){
var statearr_26621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26621[(0)] = cljs$core$async$state_machine__23763__auto__);

(statearr_26621[(1)] = (1));

return statearr_26621;
});
var cljs$core$async$state_machine__23763__auto____1 = (function (state_26595){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_26595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e26622){if((e26622 instanceof Object)){
var ex__23766__auto__ = e26622;
var statearr_26623_26644 = state_26595;
(statearr_26623_26644[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26645 = state_26595;
state_26595 = G__26645;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
cljs$core$async$state_machine__23763__auto__ = function(state_26595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23763__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23763__auto____1.call(this,state_26595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23763__auto____0;
cljs$core$async$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23763__auto____1;
return cljs$core$async$state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___26629,out))
})();
var state__23876__auto__ = (function (){var statearr_26624 = f__23875__auto__.call(null);
(statearr_26624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___26629);

return statearr_26624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___26629,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1465974662439