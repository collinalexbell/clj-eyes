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
var args23925 = [];
var len__22783__auto___23931 = arguments.length;
var i__22784__auto___23932 = (0);
while(true){
if((i__22784__auto___23932 < len__22783__auto___23931)){
args23925.push((arguments[i__22784__auto___23932]));

var G__23933 = (i__22784__auto___23932 + (1));
i__22784__auto___23932 = G__23933;
continue;
} else {
}
break;
}

var G__23927 = args23925.length;
switch (G__23927) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23925.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23928 = (function (f,blockable,meta23929){
this.f = f;
this.blockable = blockable;
this.meta23929 = meta23929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23930,meta23929__$1){
var self__ = this;
var _23930__$1 = this;
return (new cljs.core.async.t_cljs$core$async23928(self__.f,self__.blockable,meta23929__$1));
});

cljs.core.async.t_cljs$core$async23928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23930){
var self__ = this;
var _23930__$1 = this;
return self__.meta23929;
});

cljs.core.async.t_cljs$core$async23928.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23928.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23929","meta23929",-900715889,null)], null);
});

cljs.core.async.t_cljs$core$async23928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23928";

cljs.core.async.t_cljs$core$async23928.cljs$lang$ctorPrWriter = (function (this__22319__auto__,writer__22320__auto__,opt__22321__auto__){
return cljs.core._write.call(null,writer__22320__auto__,"cljs.core.async/t_cljs$core$async23928");
});

cljs.core.async.__GT_t_cljs$core$async23928 = (function cljs$core$async$__GT_t_cljs$core$async23928(f__$1,blockable__$1,meta23929){
return (new cljs.core.async.t_cljs$core$async23928(f__$1,blockable__$1,meta23929));
});

}

return (new cljs.core.async.t_cljs$core$async23928(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args23937 = [];
var len__22783__auto___23940 = arguments.length;
var i__22784__auto___23941 = (0);
while(true){
if((i__22784__auto___23941 < len__22783__auto___23940)){
args23937.push((arguments[i__22784__auto___23941]));

var G__23942 = (i__22784__auto___23941 + (1));
i__22784__auto___23941 = G__23942;
continue;
} else {
}
break;
}

var G__23939 = args23937.length;
switch (G__23939) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23937.length)].join('')));

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
var args23944 = [];
var len__22783__auto___23947 = arguments.length;
var i__22784__auto___23948 = (0);
while(true){
if((i__22784__auto___23948 < len__22783__auto___23947)){
args23944.push((arguments[i__22784__auto___23948]));

var G__23949 = (i__22784__auto___23948 + (1));
i__22784__auto___23948 = G__23949;
continue;
} else {
}
break;
}

var G__23946 = args23944.length;
switch (G__23946) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23944.length)].join('')));

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
var args23951 = [];
var len__22783__auto___23954 = arguments.length;
var i__22784__auto___23955 = (0);
while(true){
if((i__22784__auto___23955 < len__22783__auto___23954)){
args23951.push((arguments[i__22784__auto___23955]));

var G__23956 = (i__22784__auto___23955 + (1));
i__22784__auto___23955 = G__23956;
continue;
} else {
}
break;
}

var G__23953 = args23951.length;
switch (G__23953) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23951.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23958 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23958);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23958,ret){
return (function (){
return fn1.call(null,val_23958);
});})(val_23958,ret))
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
var args23959 = [];
var len__22783__auto___23962 = arguments.length;
var i__22784__auto___23963 = (0);
while(true){
if((i__22784__auto___23963 < len__22783__auto___23962)){
args23959.push((arguments[i__22784__auto___23963]));

var G__23964 = (i__22784__auto___23963 + (1));
i__22784__auto___23963 = G__23964;
continue;
} else {
}
break;
}

var G__23961 = args23959.length;
switch (G__23961) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23959.length)].join('')));

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
var n__22628__auto___23966 = n;
var x_23967 = (0);
while(true){
if((x_23967 < n__22628__auto___23966)){
(a[x_23967] = (0));

var G__23968 = (x_23967 + (1));
x_23967 = G__23968;
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

var G__23969 = (i + (1));
i = G__23969;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23973 = (function (alt_flag,flag,meta23974){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23974 = meta23974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23975,meta23974__$1){
var self__ = this;
var _23975__$1 = this;
return (new cljs.core.async.t_cljs$core$async23973(self__.alt_flag,self__.flag,meta23974__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23975){
var self__ = this;
var _23975__$1 = this;
return self__.meta23974;
});})(flag))
;

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23973.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23974","meta23974",-682738661,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23973";

cljs.core.async.t_cljs$core$async23973.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22319__auto__,writer__22320__auto__,opt__22321__auto__){
return cljs.core._write.call(null,writer__22320__auto__,"cljs.core.async/t_cljs$core$async23973");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23973 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23973(alt_flag__$1,flag__$1,meta23974){
return (new cljs.core.async.t_cljs$core$async23973(alt_flag__$1,flag__$1,meta23974));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23973(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23979 = (function (alt_handler,flag,cb,meta23980){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23980 = meta23980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23981,meta23980__$1){
var self__ = this;
var _23981__$1 = this;
return (new cljs.core.async.t_cljs$core$async23979(self__.alt_handler,self__.flag,self__.cb,meta23980__$1));
});

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23981){
var self__ = this;
var _23981__$1 = this;
return self__.meta23980;
});

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23980","meta23980",2073357041,null)], null);
});

cljs.core.async.t_cljs$core$async23979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23979";

cljs.core.async.t_cljs$core$async23979.cljs$lang$ctorPrWriter = (function (this__22319__auto__,writer__22320__auto__,opt__22321__auto__){
return cljs.core._write.call(null,writer__22320__auto__,"cljs.core.async/t_cljs$core$async23979");
});

cljs.core.async.__GT_t_cljs$core$async23979 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23979(alt_handler__$1,flag__$1,cb__$1,meta23980){
return (new cljs.core.async.t_cljs$core$async23979(alt_handler__$1,flag__$1,cb__$1,meta23980));
});

}

return (new cljs.core.async.t_cljs$core$async23979(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23982_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23982_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23983_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23983_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21713__auto__ = wport;
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23984 = (i + (1));
i = G__23984;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21713__auto__ = ret;
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21701__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21701__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21701__auto__;
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
var args__22790__auto__ = [];
var len__22783__auto___23990 = arguments.length;
var i__22784__auto___23991 = (0);
while(true){
if((i__22784__auto___23991 < len__22783__auto___23990)){
args__22790__auto__.push((arguments[i__22784__auto___23991]));

var G__23992 = (i__22784__auto___23991 + (1));
i__22784__auto___23991 = G__23992;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23987){
var map__23988 = p__23987;
var map__23988__$1 = ((((!((map__23988 == null)))?((((map__23988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23988):map__23988);
var opts = map__23988__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23985){
var G__23986 = cljs.core.first.call(null,seq23985);
var seq23985__$1 = cljs.core.next.call(null,seq23985);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23986,seq23985__$1);
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
var args23993 = [];
var len__22783__auto___24043 = arguments.length;
var i__22784__auto___24044 = (0);
while(true){
if((i__22784__auto___24044 < len__22783__auto___24043)){
args23993.push((arguments[i__22784__auto___24044]));

var G__24045 = (i__22784__auto___24044 + (1));
i__22784__auto___24044 = G__24045;
continue;
} else {
}
break;
}

var G__23995 = args23993.length;
switch (G__23995) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23993.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23880__auto___24047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___24047){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___24047){
return (function (state_24019){
var state_val_24020 = (state_24019[(1)]);
if((state_val_24020 === (7))){
var inst_24015 = (state_24019[(2)]);
var state_24019__$1 = state_24019;
var statearr_24021_24048 = state_24019__$1;
(statearr_24021_24048[(2)] = inst_24015);

(statearr_24021_24048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (1))){
var state_24019__$1 = state_24019;
var statearr_24022_24049 = state_24019__$1;
(statearr_24022_24049[(2)] = null);

(statearr_24022_24049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (4))){
var inst_23998 = (state_24019[(7)]);
var inst_23998__$1 = (state_24019[(2)]);
var inst_23999 = (inst_23998__$1 == null);
var state_24019__$1 = (function (){var statearr_24023 = state_24019;
(statearr_24023[(7)] = inst_23998__$1);

return statearr_24023;
})();
if(cljs.core.truth_(inst_23999)){
var statearr_24024_24050 = state_24019__$1;
(statearr_24024_24050[(1)] = (5));

} else {
var statearr_24025_24051 = state_24019__$1;
(statearr_24025_24051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (13))){
var state_24019__$1 = state_24019;
var statearr_24026_24052 = state_24019__$1;
(statearr_24026_24052[(2)] = null);

(statearr_24026_24052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (6))){
var inst_23998 = (state_24019[(7)]);
var state_24019__$1 = state_24019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24019__$1,(11),to,inst_23998);
} else {
if((state_val_24020 === (3))){
var inst_24017 = (state_24019[(2)]);
var state_24019__$1 = state_24019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24019__$1,inst_24017);
} else {
if((state_val_24020 === (12))){
var state_24019__$1 = state_24019;
var statearr_24027_24053 = state_24019__$1;
(statearr_24027_24053[(2)] = null);

(statearr_24027_24053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (2))){
var state_24019__$1 = state_24019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24019__$1,(4),from);
} else {
if((state_val_24020 === (11))){
var inst_24008 = (state_24019[(2)]);
var state_24019__$1 = state_24019;
if(cljs.core.truth_(inst_24008)){
var statearr_24028_24054 = state_24019__$1;
(statearr_24028_24054[(1)] = (12));

} else {
var statearr_24029_24055 = state_24019__$1;
(statearr_24029_24055[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (9))){
var state_24019__$1 = state_24019;
var statearr_24030_24056 = state_24019__$1;
(statearr_24030_24056[(2)] = null);

(statearr_24030_24056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (5))){
var state_24019__$1 = state_24019;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24031_24057 = state_24019__$1;
(statearr_24031_24057[(1)] = (8));

} else {
var statearr_24032_24058 = state_24019__$1;
(statearr_24032_24058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (14))){
var inst_24013 = (state_24019[(2)]);
var state_24019__$1 = state_24019;
var statearr_24033_24059 = state_24019__$1;
(statearr_24033_24059[(2)] = inst_24013);

(statearr_24033_24059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (10))){
var inst_24005 = (state_24019[(2)]);
var state_24019__$1 = state_24019;
var statearr_24034_24060 = state_24019__$1;
(statearr_24034_24060[(2)] = inst_24005);

(statearr_24034_24060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (8))){
var inst_24002 = cljs.core.async.close_BANG_.call(null,to);
var state_24019__$1 = state_24019;
var statearr_24035_24061 = state_24019__$1;
(statearr_24035_24061[(2)] = inst_24002);

(statearr_24035_24061[(1)] = (10));


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
});})(c__23880__auto___24047))
;
return ((function (switch__23768__auto__,c__23880__auto___24047){
return (function() {
var cljs$core$async$state_machine__23769__auto__ = null;
var cljs$core$async$state_machine__23769__auto____0 = (function (){
var statearr_24039 = [null,null,null,null,null,null,null,null];
(statearr_24039[(0)] = cljs$core$async$state_machine__23769__auto__);

(statearr_24039[(1)] = (1));

return statearr_24039;
});
var cljs$core$async$state_machine__23769__auto____1 = (function (state_24019){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_24019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e24040){if((e24040 instanceof Object)){
var ex__23772__auto__ = e24040;
var statearr_24041_24062 = state_24019;
(statearr_24041_24062[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24063 = state_24019;
state_24019 = G__24063;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$state_machine__23769__auto__ = function(state_24019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23769__auto____1.call(this,state_24019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23769__auto____0;
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23769__auto____1;
return cljs$core$async$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___24047))
})();
var state__23882__auto__ = (function (){var statearr_24042 = f__23881__auto__.call(null);
(statearr_24042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___24047);

return statearr_24042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___24047))
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
return (function (p__24247){
var vec__24248 = p__24247;
var v = cljs.core.nth.call(null,vec__24248,(0),null);
var p = cljs.core.nth.call(null,vec__24248,(1),null);
var job = vec__24248;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23880__auto___24430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___24430,res,vec__24248,v,p,job,jobs,results){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___24430,res,vec__24248,v,p,job,jobs,results){
return (function (state_24253){
var state_val_24254 = (state_24253[(1)]);
if((state_val_24254 === (1))){
var state_24253__$1 = state_24253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24253__$1,(2),res,v);
} else {
if((state_val_24254 === (2))){
var inst_24250 = (state_24253[(2)]);
var inst_24251 = cljs.core.async.close_BANG_.call(null,res);
var state_24253__$1 = (function (){var statearr_24255 = state_24253;
(statearr_24255[(7)] = inst_24250);

return statearr_24255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24253__$1,inst_24251);
} else {
return null;
}
}
});})(c__23880__auto___24430,res,vec__24248,v,p,job,jobs,results))
;
return ((function (switch__23768__auto__,c__23880__auto___24430,res,vec__24248,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0 = (function (){
var statearr_24259 = [null,null,null,null,null,null,null,null];
(statearr_24259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__);

(statearr_24259[(1)] = (1));

return statearr_24259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1 = (function (state_24253){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_24253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e24260){if((e24260 instanceof Object)){
var ex__23772__auto__ = e24260;
var statearr_24261_24431 = state_24253;
(statearr_24261_24431[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24432 = state_24253;
state_24253 = G__24432;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__ = function(state_24253){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1.call(this,state_24253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___24430,res,vec__24248,v,p,job,jobs,results))
})();
var state__23882__auto__ = (function (){var statearr_24262 = f__23881__auto__.call(null);
(statearr_24262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___24430);

return statearr_24262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___24430,res,vec__24248,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24263){
var vec__24264 = p__24263;
var v = cljs.core.nth.call(null,vec__24264,(0),null);
var p = cljs.core.nth.call(null,vec__24264,(1),null);
var job = vec__24264;
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
var n__22628__auto___24433 = n;
var __24434 = (0);
while(true){
if((__24434 < n__22628__auto___24433)){
var G__24265_24435 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24265_24435) {
case "compute":
var c__23880__auto___24437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24434,c__23880__auto___24437,G__24265_24435,n__22628__auto___24433,jobs,results,process,async){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (__24434,c__23880__auto___24437,G__24265_24435,n__22628__auto___24433,jobs,results,process,async){
return (function (state_24278){
var state_val_24279 = (state_24278[(1)]);
if((state_val_24279 === (1))){
var state_24278__$1 = state_24278;
var statearr_24280_24438 = state_24278__$1;
(statearr_24280_24438[(2)] = null);

(statearr_24280_24438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24279 === (2))){
var state_24278__$1 = state_24278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24278__$1,(4),jobs);
} else {
if((state_val_24279 === (3))){
var inst_24276 = (state_24278[(2)]);
var state_24278__$1 = state_24278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24278__$1,inst_24276);
} else {
if((state_val_24279 === (4))){
var inst_24268 = (state_24278[(2)]);
var inst_24269 = process.call(null,inst_24268);
var state_24278__$1 = state_24278;
if(cljs.core.truth_(inst_24269)){
var statearr_24281_24439 = state_24278__$1;
(statearr_24281_24439[(1)] = (5));

} else {
var statearr_24282_24440 = state_24278__$1;
(statearr_24282_24440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24279 === (5))){
var state_24278__$1 = state_24278;
var statearr_24283_24441 = state_24278__$1;
(statearr_24283_24441[(2)] = null);

(statearr_24283_24441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24279 === (6))){
var state_24278__$1 = state_24278;
var statearr_24284_24442 = state_24278__$1;
(statearr_24284_24442[(2)] = null);

(statearr_24284_24442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24279 === (7))){
var inst_24274 = (state_24278[(2)]);
var state_24278__$1 = state_24278;
var statearr_24285_24443 = state_24278__$1;
(statearr_24285_24443[(2)] = inst_24274);

(statearr_24285_24443[(1)] = (3));


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
});})(__24434,c__23880__auto___24437,G__24265_24435,n__22628__auto___24433,jobs,results,process,async))
;
return ((function (__24434,switch__23768__auto__,c__23880__auto___24437,G__24265_24435,n__22628__auto___24433,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0 = (function (){
var statearr_24289 = [null,null,null,null,null,null,null];
(statearr_24289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__);

(statearr_24289[(1)] = (1));

return statearr_24289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1 = (function (state_24278){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_24278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e24290){if((e24290 instanceof Object)){
var ex__23772__auto__ = e24290;
var statearr_24291_24444 = state_24278;
(statearr_24291_24444[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24445 = state_24278;
state_24278 = G__24445;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__ = function(state_24278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1.call(this,state_24278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__;
})()
;})(__24434,switch__23768__auto__,c__23880__auto___24437,G__24265_24435,n__22628__auto___24433,jobs,results,process,async))
})();
var state__23882__auto__ = (function (){var statearr_24292 = f__23881__auto__.call(null);
(statearr_24292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___24437);

return statearr_24292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(__24434,c__23880__auto___24437,G__24265_24435,n__22628__auto___24433,jobs,results,process,async))
);


break;
case "async":
var c__23880__auto___24446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24434,c__23880__auto___24446,G__24265_24435,n__22628__auto___24433,jobs,results,process,async){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (__24434,c__23880__auto___24446,G__24265_24435,n__22628__auto___24433,jobs,results,process,async){
return (function (state_24305){
var state_val_24306 = (state_24305[(1)]);
if((state_val_24306 === (1))){
var state_24305__$1 = state_24305;
var statearr_24307_24447 = state_24305__$1;
(statearr_24307_24447[(2)] = null);

(statearr_24307_24447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24306 === (2))){
var state_24305__$1 = state_24305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24305__$1,(4),jobs);
} else {
if((state_val_24306 === (3))){
var inst_24303 = (state_24305[(2)]);
var state_24305__$1 = state_24305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24305__$1,inst_24303);
} else {
if((state_val_24306 === (4))){
var inst_24295 = (state_24305[(2)]);
var inst_24296 = async.call(null,inst_24295);
var state_24305__$1 = state_24305;
if(cljs.core.truth_(inst_24296)){
var statearr_24308_24448 = state_24305__$1;
(statearr_24308_24448[(1)] = (5));

} else {
var statearr_24309_24449 = state_24305__$1;
(statearr_24309_24449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24306 === (5))){
var state_24305__$1 = state_24305;
var statearr_24310_24450 = state_24305__$1;
(statearr_24310_24450[(2)] = null);

(statearr_24310_24450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24306 === (6))){
var state_24305__$1 = state_24305;
var statearr_24311_24451 = state_24305__$1;
(statearr_24311_24451[(2)] = null);

(statearr_24311_24451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24306 === (7))){
var inst_24301 = (state_24305[(2)]);
var state_24305__$1 = state_24305;
var statearr_24312_24452 = state_24305__$1;
(statearr_24312_24452[(2)] = inst_24301);

(statearr_24312_24452[(1)] = (3));


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
});})(__24434,c__23880__auto___24446,G__24265_24435,n__22628__auto___24433,jobs,results,process,async))
;
return ((function (__24434,switch__23768__auto__,c__23880__auto___24446,G__24265_24435,n__22628__auto___24433,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0 = (function (){
var statearr_24316 = [null,null,null,null,null,null,null];
(statearr_24316[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__);

(statearr_24316[(1)] = (1));

return statearr_24316;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1 = (function (state_24305){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_24305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e24317){if((e24317 instanceof Object)){
var ex__23772__auto__ = e24317;
var statearr_24318_24453 = state_24305;
(statearr_24318_24453[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24454 = state_24305;
state_24305 = G__24454;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__ = function(state_24305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1.call(this,state_24305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__;
})()
;})(__24434,switch__23768__auto__,c__23880__auto___24446,G__24265_24435,n__22628__auto___24433,jobs,results,process,async))
})();
var state__23882__auto__ = (function (){var statearr_24319 = f__23881__auto__.call(null);
(statearr_24319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___24446);

return statearr_24319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(__24434,c__23880__auto___24446,G__24265_24435,n__22628__auto___24433,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24455 = (__24434 + (1));
__24434 = G__24455;
continue;
} else {
}
break;
}

var c__23880__auto___24456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___24456,jobs,results,process,async){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___24456,jobs,results,process,async){
return (function (state_24341){
var state_val_24342 = (state_24341[(1)]);
if((state_val_24342 === (1))){
var state_24341__$1 = state_24341;
var statearr_24343_24457 = state_24341__$1;
(statearr_24343_24457[(2)] = null);

(statearr_24343_24457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (2))){
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24341__$1,(4),from);
} else {
if((state_val_24342 === (3))){
var inst_24339 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24341__$1,inst_24339);
} else {
if((state_val_24342 === (4))){
var inst_24322 = (state_24341[(7)]);
var inst_24322__$1 = (state_24341[(2)]);
var inst_24323 = (inst_24322__$1 == null);
var state_24341__$1 = (function (){var statearr_24344 = state_24341;
(statearr_24344[(7)] = inst_24322__$1);

return statearr_24344;
})();
if(cljs.core.truth_(inst_24323)){
var statearr_24345_24458 = state_24341__$1;
(statearr_24345_24458[(1)] = (5));

} else {
var statearr_24346_24459 = state_24341__$1;
(statearr_24346_24459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (5))){
var inst_24325 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24341__$1 = state_24341;
var statearr_24347_24460 = state_24341__$1;
(statearr_24347_24460[(2)] = inst_24325);

(statearr_24347_24460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (6))){
var inst_24327 = (state_24341[(8)]);
var inst_24322 = (state_24341[(7)]);
var inst_24327__$1 = cljs.core.async.chan.call(null,(1));
var inst_24328 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24329 = [inst_24322,inst_24327__$1];
var inst_24330 = (new cljs.core.PersistentVector(null,2,(5),inst_24328,inst_24329,null));
var state_24341__$1 = (function (){var statearr_24348 = state_24341;
(statearr_24348[(8)] = inst_24327__$1);

return statearr_24348;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24341__$1,(8),jobs,inst_24330);
} else {
if((state_val_24342 === (7))){
var inst_24337 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24349_24461 = state_24341__$1;
(statearr_24349_24461[(2)] = inst_24337);

(statearr_24349_24461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (8))){
var inst_24327 = (state_24341[(8)]);
var inst_24332 = (state_24341[(2)]);
var state_24341__$1 = (function (){var statearr_24350 = state_24341;
(statearr_24350[(9)] = inst_24332);

return statearr_24350;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24341__$1,(9),results,inst_24327);
} else {
if((state_val_24342 === (9))){
var inst_24334 = (state_24341[(2)]);
var state_24341__$1 = (function (){var statearr_24351 = state_24341;
(statearr_24351[(10)] = inst_24334);

return statearr_24351;
})();
var statearr_24352_24462 = state_24341__$1;
(statearr_24352_24462[(2)] = null);

(statearr_24352_24462[(1)] = (2));


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
});})(c__23880__auto___24456,jobs,results,process,async))
;
return ((function (switch__23768__auto__,c__23880__auto___24456,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0 = (function (){
var statearr_24356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__);

(statearr_24356[(1)] = (1));

return statearr_24356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1 = (function (state_24341){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_24341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e24357){if((e24357 instanceof Object)){
var ex__23772__auto__ = e24357;
var statearr_24358_24463 = state_24341;
(statearr_24358_24463[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24464 = state_24341;
state_24341 = G__24464;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__ = function(state_24341){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1.call(this,state_24341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___24456,jobs,results,process,async))
})();
var state__23882__auto__ = (function (){var statearr_24359 = f__23881__auto__.call(null);
(statearr_24359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___24456);

return statearr_24359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___24456,jobs,results,process,async))
);


var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__,jobs,results,process,async){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__,jobs,results,process,async){
return (function (state_24397){
var state_val_24398 = (state_24397[(1)]);
if((state_val_24398 === (7))){
var inst_24393 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24399_24465 = state_24397__$1;
(statearr_24399_24465[(2)] = inst_24393);

(statearr_24399_24465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (20))){
var state_24397__$1 = state_24397;
var statearr_24400_24466 = state_24397__$1;
(statearr_24400_24466[(2)] = null);

(statearr_24400_24466[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (1))){
var state_24397__$1 = state_24397;
var statearr_24401_24467 = state_24397__$1;
(statearr_24401_24467[(2)] = null);

(statearr_24401_24467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (4))){
var inst_24362 = (state_24397[(7)]);
var inst_24362__$1 = (state_24397[(2)]);
var inst_24363 = (inst_24362__$1 == null);
var state_24397__$1 = (function (){var statearr_24402 = state_24397;
(statearr_24402[(7)] = inst_24362__$1);

return statearr_24402;
})();
if(cljs.core.truth_(inst_24363)){
var statearr_24403_24468 = state_24397__$1;
(statearr_24403_24468[(1)] = (5));

} else {
var statearr_24404_24469 = state_24397__$1;
(statearr_24404_24469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (15))){
var inst_24375 = (state_24397[(8)]);
var state_24397__$1 = state_24397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24397__$1,(18),to,inst_24375);
} else {
if((state_val_24398 === (21))){
var inst_24388 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24405_24470 = state_24397__$1;
(statearr_24405_24470[(2)] = inst_24388);

(statearr_24405_24470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (13))){
var inst_24390 = (state_24397[(2)]);
var state_24397__$1 = (function (){var statearr_24406 = state_24397;
(statearr_24406[(9)] = inst_24390);

return statearr_24406;
})();
var statearr_24407_24471 = state_24397__$1;
(statearr_24407_24471[(2)] = null);

(statearr_24407_24471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (6))){
var inst_24362 = (state_24397[(7)]);
var state_24397__$1 = state_24397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24397__$1,(11),inst_24362);
} else {
if((state_val_24398 === (17))){
var inst_24383 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
if(cljs.core.truth_(inst_24383)){
var statearr_24408_24472 = state_24397__$1;
(statearr_24408_24472[(1)] = (19));

} else {
var statearr_24409_24473 = state_24397__$1;
(statearr_24409_24473[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (3))){
var inst_24395 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24397__$1,inst_24395);
} else {
if((state_val_24398 === (12))){
var inst_24372 = (state_24397[(10)]);
var state_24397__$1 = state_24397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24397__$1,(14),inst_24372);
} else {
if((state_val_24398 === (2))){
var state_24397__$1 = state_24397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24397__$1,(4),results);
} else {
if((state_val_24398 === (19))){
var state_24397__$1 = state_24397;
var statearr_24410_24474 = state_24397__$1;
(statearr_24410_24474[(2)] = null);

(statearr_24410_24474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (11))){
var inst_24372 = (state_24397[(2)]);
var state_24397__$1 = (function (){var statearr_24411 = state_24397;
(statearr_24411[(10)] = inst_24372);

return statearr_24411;
})();
var statearr_24412_24475 = state_24397__$1;
(statearr_24412_24475[(2)] = null);

(statearr_24412_24475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (9))){
var state_24397__$1 = state_24397;
var statearr_24413_24476 = state_24397__$1;
(statearr_24413_24476[(2)] = null);

(statearr_24413_24476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (5))){
var state_24397__$1 = state_24397;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24414_24477 = state_24397__$1;
(statearr_24414_24477[(1)] = (8));

} else {
var statearr_24415_24478 = state_24397__$1;
(statearr_24415_24478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (14))){
var inst_24375 = (state_24397[(8)]);
var inst_24377 = (state_24397[(11)]);
var inst_24375__$1 = (state_24397[(2)]);
var inst_24376 = (inst_24375__$1 == null);
var inst_24377__$1 = cljs.core.not.call(null,inst_24376);
var state_24397__$1 = (function (){var statearr_24416 = state_24397;
(statearr_24416[(8)] = inst_24375__$1);

(statearr_24416[(11)] = inst_24377__$1);

return statearr_24416;
})();
if(inst_24377__$1){
var statearr_24417_24479 = state_24397__$1;
(statearr_24417_24479[(1)] = (15));

} else {
var statearr_24418_24480 = state_24397__$1;
(statearr_24418_24480[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (16))){
var inst_24377 = (state_24397[(11)]);
var state_24397__$1 = state_24397;
var statearr_24419_24481 = state_24397__$1;
(statearr_24419_24481[(2)] = inst_24377);

(statearr_24419_24481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (10))){
var inst_24369 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24420_24482 = state_24397__$1;
(statearr_24420_24482[(2)] = inst_24369);

(statearr_24420_24482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (18))){
var inst_24380 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24421_24483 = state_24397__$1;
(statearr_24421_24483[(2)] = inst_24380);

(statearr_24421_24483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (8))){
var inst_24366 = cljs.core.async.close_BANG_.call(null,to);
var state_24397__$1 = state_24397;
var statearr_24422_24484 = state_24397__$1;
(statearr_24422_24484[(2)] = inst_24366);

(statearr_24422_24484[(1)] = (10));


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
});})(c__23880__auto__,jobs,results,process,async))
;
return ((function (switch__23768__auto__,c__23880__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0 = (function (){
var statearr_24426 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__);

(statearr_24426[(1)] = (1));

return statearr_24426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1 = (function (state_24397){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_24397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e24427){if((e24427 instanceof Object)){
var ex__23772__auto__ = e24427;
var statearr_24428_24485 = state_24397;
(statearr_24428_24485[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24486 = state_24397;
state_24397 = G__24486;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__ = function(state_24397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1.call(this,state_24397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23769__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__,jobs,results,process,async))
})();
var state__23882__auto__ = (function (){var statearr_24429 = f__23881__auto__.call(null);
(statearr_24429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_24429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__,jobs,results,process,async))
);

return c__23880__auto__;
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
var args24487 = [];
var len__22783__auto___24490 = arguments.length;
var i__22784__auto___24491 = (0);
while(true){
if((i__22784__auto___24491 < len__22783__auto___24490)){
args24487.push((arguments[i__22784__auto___24491]));

var G__24492 = (i__22784__auto___24491 + (1));
i__22784__auto___24491 = G__24492;
continue;
} else {
}
break;
}

var G__24489 = args24487.length;
switch (G__24489) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24487.length)].join('')));

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
var args24494 = [];
var len__22783__auto___24497 = arguments.length;
var i__22784__auto___24498 = (0);
while(true){
if((i__22784__auto___24498 < len__22783__auto___24497)){
args24494.push((arguments[i__22784__auto___24498]));

var G__24499 = (i__22784__auto___24498 + (1));
i__22784__auto___24498 = G__24499;
continue;
} else {
}
break;
}

var G__24496 = args24494.length;
switch (G__24496) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24494.length)].join('')));

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
var args24501 = [];
var len__22783__auto___24554 = arguments.length;
var i__22784__auto___24555 = (0);
while(true){
if((i__22784__auto___24555 < len__22783__auto___24554)){
args24501.push((arguments[i__22784__auto___24555]));

var G__24556 = (i__22784__auto___24555 + (1));
i__22784__auto___24555 = G__24556;
continue;
} else {
}
break;
}

var G__24503 = args24501.length;
switch (G__24503) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24501.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23880__auto___24558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___24558,tc,fc){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___24558,tc,fc){
return (function (state_24529){
var state_val_24530 = (state_24529[(1)]);
if((state_val_24530 === (7))){
var inst_24525 = (state_24529[(2)]);
var state_24529__$1 = state_24529;
var statearr_24531_24559 = state_24529__$1;
(statearr_24531_24559[(2)] = inst_24525);

(statearr_24531_24559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (1))){
var state_24529__$1 = state_24529;
var statearr_24532_24560 = state_24529__$1;
(statearr_24532_24560[(2)] = null);

(statearr_24532_24560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (4))){
var inst_24506 = (state_24529[(7)]);
var inst_24506__$1 = (state_24529[(2)]);
var inst_24507 = (inst_24506__$1 == null);
var state_24529__$1 = (function (){var statearr_24533 = state_24529;
(statearr_24533[(7)] = inst_24506__$1);

return statearr_24533;
})();
if(cljs.core.truth_(inst_24507)){
var statearr_24534_24561 = state_24529__$1;
(statearr_24534_24561[(1)] = (5));

} else {
var statearr_24535_24562 = state_24529__$1;
(statearr_24535_24562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (13))){
var state_24529__$1 = state_24529;
var statearr_24536_24563 = state_24529__$1;
(statearr_24536_24563[(2)] = null);

(statearr_24536_24563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (6))){
var inst_24506 = (state_24529[(7)]);
var inst_24512 = p.call(null,inst_24506);
var state_24529__$1 = state_24529;
if(cljs.core.truth_(inst_24512)){
var statearr_24537_24564 = state_24529__$1;
(statearr_24537_24564[(1)] = (9));

} else {
var statearr_24538_24565 = state_24529__$1;
(statearr_24538_24565[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (3))){
var inst_24527 = (state_24529[(2)]);
var state_24529__$1 = state_24529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24529__$1,inst_24527);
} else {
if((state_val_24530 === (12))){
var state_24529__$1 = state_24529;
var statearr_24539_24566 = state_24529__$1;
(statearr_24539_24566[(2)] = null);

(statearr_24539_24566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (2))){
var state_24529__$1 = state_24529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24529__$1,(4),ch);
} else {
if((state_val_24530 === (11))){
var inst_24506 = (state_24529[(7)]);
var inst_24516 = (state_24529[(2)]);
var state_24529__$1 = state_24529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24529__$1,(8),inst_24516,inst_24506);
} else {
if((state_val_24530 === (9))){
var state_24529__$1 = state_24529;
var statearr_24540_24567 = state_24529__$1;
(statearr_24540_24567[(2)] = tc);

(statearr_24540_24567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (5))){
var inst_24509 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24510 = cljs.core.async.close_BANG_.call(null,fc);
var state_24529__$1 = (function (){var statearr_24541 = state_24529;
(statearr_24541[(8)] = inst_24509);

return statearr_24541;
})();
var statearr_24542_24568 = state_24529__$1;
(statearr_24542_24568[(2)] = inst_24510);

(statearr_24542_24568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (14))){
var inst_24523 = (state_24529[(2)]);
var state_24529__$1 = state_24529;
var statearr_24543_24569 = state_24529__$1;
(statearr_24543_24569[(2)] = inst_24523);

(statearr_24543_24569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (10))){
var state_24529__$1 = state_24529;
var statearr_24544_24570 = state_24529__$1;
(statearr_24544_24570[(2)] = fc);

(statearr_24544_24570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (8))){
var inst_24518 = (state_24529[(2)]);
var state_24529__$1 = state_24529;
if(cljs.core.truth_(inst_24518)){
var statearr_24545_24571 = state_24529__$1;
(statearr_24545_24571[(1)] = (12));

} else {
var statearr_24546_24572 = state_24529__$1;
(statearr_24546_24572[(1)] = (13));

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
});})(c__23880__auto___24558,tc,fc))
;
return ((function (switch__23768__auto__,c__23880__auto___24558,tc,fc){
return (function() {
var cljs$core$async$state_machine__23769__auto__ = null;
var cljs$core$async$state_machine__23769__auto____0 = (function (){
var statearr_24550 = [null,null,null,null,null,null,null,null,null];
(statearr_24550[(0)] = cljs$core$async$state_machine__23769__auto__);

(statearr_24550[(1)] = (1));

return statearr_24550;
});
var cljs$core$async$state_machine__23769__auto____1 = (function (state_24529){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_24529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e24551){if((e24551 instanceof Object)){
var ex__23772__auto__ = e24551;
var statearr_24552_24573 = state_24529;
(statearr_24552_24573[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24574 = state_24529;
state_24529 = G__24574;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$state_machine__23769__auto__ = function(state_24529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23769__auto____1.call(this,state_24529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23769__auto____0;
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23769__auto____1;
return cljs$core$async$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___24558,tc,fc))
})();
var state__23882__auto__ = (function (){var statearr_24553 = f__23881__auto__.call(null);
(statearr_24553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___24558);

return statearr_24553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___24558,tc,fc))
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
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__){
return (function (state_24638){
var state_val_24639 = (state_24638[(1)]);
if((state_val_24639 === (7))){
var inst_24634 = (state_24638[(2)]);
var state_24638__$1 = state_24638;
var statearr_24640_24661 = state_24638__$1;
(statearr_24640_24661[(2)] = inst_24634);

(statearr_24640_24661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (1))){
var inst_24618 = init;
var state_24638__$1 = (function (){var statearr_24641 = state_24638;
(statearr_24641[(7)] = inst_24618);

return statearr_24641;
})();
var statearr_24642_24662 = state_24638__$1;
(statearr_24642_24662[(2)] = null);

(statearr_24642_24662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (4))){
var inst_24621 = (state_24638[(8)]);
var inst_24621__$1 = (state_24638[(2)]);
var inst_24622 = (inst_24621__$1 == null);
var state_24638__$1 = (function (){var statearr_24643 = state_24638;
(statearr_24643[(8)] = inst_24621__$1);

return statearr_24643;
})();
if(cljs.core.truth_(inst_24622)){
var statearr_24644_24663 = state_24638__$1;
(statearr_24644_24663[(1)] = (5));

} else {
var statearr_24645_24664 = state_24638__$1;
(statearr_24645_24664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (6))){
var inst_24618 = (state_24638[(7)]);
var inst_24621 = (state_24638[(8)]);
var inst_24625 = (state_24638[(9)]);
var inst_24625__$1 = f.call(null,inst_24618,inst_24621);
var inst_24626 = cljs.core.reduced_QMARK_.call(null,inst_24625__$1);
var state_24638__$1 = (function (){var statearr_24646 = state_24638;
(statearr_24646[(9)] = inst_24625__$1);

return statearr_24646;
})();
if(inst_24626){
var statearr_24647_24665 = state_24638__$1;
(statearr_24647_24665[(1)] = (8));

} else {
var statearr_24648_24666 = state_24638__$1;
(statearr_24648_24666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (3))){
var inst_24636 = (state_24638[(2)]);
var state_24638__$1 = state_24638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24638__$1,inst_24636);
} else {
if((state_val_24639 === (2))){
var state_24638__$1 = state_24638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24638__$1,(4),ch);
} else {
if((state_val_24639 === (9))){
var inst_24625 = (state_24638[(9)]);
var inst_24618 = inst_24625;
var state_24638__$1 = (function (){var statearr_24649 = state_24638;
(statearr_24649[(7)] = inst_24618);

return statearr_24649;
})();
var statearr_24650_24667 = state_24638__$1;
(statearr_24650_24667[(2)] = null);

(statearr_24650_24667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (5))){
var inst_24618 = (state_24638[(7)]);
var state_24638__$1 = state_24638;
var statearr_24651_24668 = state_24638__$1;
(statearr_24651_24668[(2)] = inst_24618);

(statearr_24651_24668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (10))){
var inst_24632 = (state_24638[(2)]);
var state_24638__$1 = state_24638;
var statearr_24652_24669 = state_24638__$1;
(statearr_24652_24669[(2)] = inst_24632);

(statearr_24652_24669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (8))){
var inst_24625 = (state_24638[(9)]);
var inst_24628 = cljs.core.deref.call(null,inst_24625);
var state_24638__$1 = state_24638;
var statearr_24653_24670 = state_24638__$1;
(statearr_24653_24670[(2)] = inst_24628);

(statearr_24653_24670[(1)] = (10));


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
});})(c__23880__auto__))
;
return ((function (switch__23768__auto__,c__23880__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23769__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23769__auto____0 = (function (){
var statearr_24657 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24657[(0)] = cljs$core$async$reduce_$_state_machine__23769__auto__);

(statearr_24657[(1)] = (1));

return statearr_24657;
});
var cljs$core$async$reduce_$_state_machine__23769__auto____1 = (function (state_24638){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_24638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e24658){if((e24658 instanceof Object)){
var ex__23772__auto__ = e24658;
var statearr_24659_24671 = state_24638;
(statearr_24659_24671[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24672 = state_24638;
state_24638 = G__24672;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23769__auto__ = function(state_24638){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23769__auto____1.call(this,state_24638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23769__auto____0;
cljs$core$async$reduce_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23769__auto____1;
return cljs$core$async$reduce_$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__))
})();
var state__23882__auto__ = (function (){var statearr_24660 = f__23881__auto__.call(null);
(statearr_24660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_24660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__))
);

return c__23880__auto__;
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
var args24673 = [];
var len__22783__auto___24725 = arguments.length;
var i__22784__auto___24726 = (0);
while(true){
if((i__22784__auto___24726 < len__22783__auto___24725)){
args24673.push((arguments[i__22784__auto___24726]));

var G__24727 = (i__22784__auto___24726 + (1));
i__22784__auto___24726 = G__24727;
continue;
} else {
}
break;
}

var G__24675 = args24673.length;
switch (G__24675) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24673.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__){
return (function (state_24700){
var state_val_24701 = (state_24700[(1)]);
if((state_val_24701 === (7))){
var inst_24682 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24702_24729 = state_24700__$1;
(statearr_24702_24729[(2)] = inst_24682);

(statearr_24702_24729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (1))){
var inst_24676 = cljs.core.seq.call(null,coll);
var inst_24677 = inst_24676;
var state_24700__$1 = (function (){var statearr_24703 = state_24700;
(statearr_24703[(7)] = inst_24677);

return statearr_24703;
})();
var statearr_24704_24730 = state_24700__$1;
(statearr_24704_24730[(2)] = null);

(statearr_24704_24730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (4))){
var inst_24677 = (state_24700[(7)]);
var inst_24680 = cljs.core.first.call(null,inst_24677);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24700__$1,(7),ch,inst_24680);
} else {
if((state_val_24701 === (13))){
var inst_24694 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24705_24731 = state_24700__$1;
(statearr_24705_24731[(2)] = inst_24694);

(statearr_24705_24731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (6))){
var inst_24685 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24685)){
var statearr_24706_24732 = state_24700__$1;
(statearr_24706_24732[(1)] = (8));

} else {
var statearr_24707_24733 = state_24700__$1;
(statearr_24707_24733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (3))){
var inst_24698 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24700__$1,inst_24698);
} else {
if((state_val_24701 === (12))){
var state_24700__$1 = state_24700;
var statearr_24708_24734 = state_24700__$1;
(statearr_24708_24734[(2)] = null);

(statearr_24708_24734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (2))){
var inst_24677 = (state_24700[(7)]);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24677)){
var statearr_24709_24735 = state_24700__$1;
(statearr_24709_24735[(1)] = (4));

} else {
var statearr_24710_24736 = state_24700__$1;
(statearr_24710_24736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (11))){
var inst_24691 = cljs.core.async.close_BANG_.call(null,ch);
var state_24700__$1 = state_24700;
var statearr_24711_24737 = state_24700__$1;
(statearr_24711_24737[(2)] = inst_24691);

(statearr_24711_24737[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (9))){
var state_24700__$1 = state_24700;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24712_24738 = state_24700__$1;
(statearr_24712_24738[(1)] = (11));

} else {
var statearr_24713_24739 = state_24700__$1;
(statearr_24713_24739[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (5))){
var inst_24677 = (state_24700[(7)]);
var state_24700__$1 = state_24700;
var statearr_24714_24740 = state_24700__$1;
(statearr_24714_24740[(2)] = inst_24677);

(statearr_24714_24740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (10))){
var inst_24696 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24715_24741 = state_24700__$1;
(statearr_24715_24741[(2)] = inst_24696);

(statearr_24715_24741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (8))){
var inst_24677 = (state_24700[(7)]);
var inst_24687 = cljs.core.next.call(null,inst_24677);
var inst_24677__$1 = inst_24687;
var state_24700__$1 = (function (){var statearr_24716 = state_24700;
(statearr_24716[(7)] = inst_24677__$1);

return statearr_24716;
})();
var statearr_24717_24742 = state_24700__$1;
(statearr_24717_24742[(2)] = null);

(statearr_24717_24742[(1)] = (2));


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
});})(c__23880__auto__))
;
return ((function (switch__23768__auto__,c__23880__auto__){
return (function() {
var cljs$core$async$state_machine__23769__auto__ = null;
var cljs$core$async$state_machine__23769__auto____0 = (function (){
var statearr_24721 = [null,null,null,null,null,null,null,null];
(statearr_24721[(0)] = cljs$core$async$state_machine__23769__auto__);

(statearr_24721[(1)] = (1));

return statearr_24721;
});
var cljs$core$async$state_machine__23769__auto____1 = (function (state_24700){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_24700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e24722){if((e24722 instanceof Object)){
var ex__23772__auto__ = e24722;
var statearr_24723_24743 = state_24700;
(statearr_24723_24743[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24744 = state_24700;
state_24700 = G__24744;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$state_machine__23769__auto__ = function(state_24700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23769__auto____1.call(this,state_24700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23769__auto____0;
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23769__auto____1;
return cljs$core$async$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__))
})();
var state__23882__auto__ = (function (){var statearr_24724 = f__23881__auto__.call(null);
(statearr_24724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_24724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__))
);

return c__23880__auto__;
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
var x__22376__auto__ = (((_ == null))?null:_);
var m__22377__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,_);
} else {
var m__22377__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,_);
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
var x__22376__auto__ = (((m == null))?null:m);
var m__22377__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22377__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__22376__auto__ = (((m == null))?null:m);
var m__22377__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,m,ch);
} else {
var m__22377__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,m,ch);
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
var x__22376__auto__ = (((m == null))?null:m);
var m__22377__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,m);
} else {
var m__22377__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async24966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24966 = (function (mult,ch,cs,meta24967){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24967 = meta24967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24968,meta24967__$1){
var self__ = this;
var _24968__$1 = this;
return (new cljs.core.async.t_cljs$core$async24966(self__.mult,self__.ch,self__.cs,meta24967__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24968){
var self__ = this;
var _24968__$1 = this;
return self__.meta24967;
});})(cs))
;

cljs.core.async.t_cljs$core$async24966.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24966.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24966.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24966.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24966.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24966.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24967","meta24967",634087567,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24966";

cljs.core.async.t_cljs$core$async24966.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22319__auto__,writer__22320__auto__,opt__22321__auto__){
return cljs.core._write.call(null,writer__22320__auto__,"cljs.core.async/t_cljs$core$async24966");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24966 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24966(mult__$1,ch__$1,cs__$1,meta24967){
return (new cljs.core.async.t_cljs$core$async24966(mult__$1,ch__$1,cs__$1,meta24967));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24966(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23880__auto___25187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___25187,cs,m,dchan,dctr,done){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___25187,cs,m,dchan,dctr,done){
return (function (state_25099){
var state_val_25100 = (state_25099[(1)]);
if((state_val_25100 === (7))){
var inst_25095 = (state_25099[(2)]);
var state_25099__$1 = state_25099;
var statearr_25101_25188 = state_25099__$1;
(statearr_25101_25188[(2)] = inst_25095);

(statearr_25101_25188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (20))){
var inst_25000 = (state_25099[(7)]);
var inst_25010 = cljs.core.first.call(null,inst_25000);
var inst_25011 = cljs.core.nth.call(null,inst_25010,(0),null);
var inst_25012 = cljs.core.nth.call(null,inst_25010,(1),null);
var state_25099__$1 = (function (){var statearr_25102 = state_25099;
(statearr_25102[(8)] = inst_25011);

return statearr_25102;
})();
if(cljs.core.truth_(inst_25012)){
var statearr_25103_25189 = state_25099__$1;
(statearr_25103_25189[(1)] = (22));

} else {
var statearr_25104_25190 = state_25099__$1;
(statearr_25104_25190[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (27))){
var inst_25047 = (state_25099[(9)]);
var inst_25040 = (state_25099[(10)]);
var inst_25042 = (state_25099[(11)]);
var inst_24971 = (state_25099[(12)]);
var inst_25047__$1 = cljs.core._nth.call(null,inst_25040,inst_25042);
var inst_25048 = cljs.core.async.put_BANG_.call(null,inst_25047__$1,inst_24971,done);
var state_25099__$1 = (function (){var statearr_25105 = state_25099;
(statearr_25105[(9)] = inst_25047__$1);

return statearr_25105;
})();
if(cljs.core.truth_(inst_25048)){
var statearr_25106_25191 = state_25099__$1;
(statearr_25106_25191[(1)] = (30));

} else {
var statearr_25107_25192 = state_25099__$1;
(statearr_25107_25192[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (1))){
var state_25099__$1 = state_25099;
var statearr_25108_25193 = state_25099__$1;
(statearr_25108_25193[(2)] = null);

(statearr_25108_25193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (24))){
var inst_25000 = (state_25099[(7)]);
var inst_25017 = (state_25099[(2)]);
var inst_25018 = cljs.core.next.call(null,inst_25000);
var inst_24980 = inst_25018;
var inst_24981 = null;
var inst_24982 = (0);
var inst_24983 = (0);
var state_25099__$1 = (function (){var statearr_25109 = state_25099;
(statearr_25109[(13)] = inst_24981);

(statearr_25109[(14)] = inst_24982);

(statearr_25109[(15)] = inst_24980);

(statearr_25109[(16)] = inst_25017);

(statearr_25109[(17)] = inst_24983);

return statearr_25109;
})();
var statearr_25110_25194 = state_25099__$1;
(statearr_25110_25194[(2)] = null);

(statearr_25110_25194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (39))){
var state_25099__$1 = state_25099;
var statearr_25114_25195 = state_25099__$1;
(statearr_25114_25195[(2)] = null);

(statearr_25114_25195[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (4))){
var inst_24971 = (state_25099[(12)]);
var inst_24971__$1 = (state_25099[(2)]);
var inst_24972 = (inst_24971__$1 == null);
var state_25099__$1 = (function (){var statearr_25115 = state_25099;
(statearr_25115[(12)] = inst_24971__$1);

return statearr_25115;
})();
if(cljs.core.truth_(inst_24972)){
var statearr_25116_25196 = state_25099__$1;
(statearr_25116_25196[(1)] = (5));

} else {
var statearr_25117_25197 = state_25099__$1;
(statearr_25117_25197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (15))){
var inst_24981 = (state_25099[(13)]);
var inst_24982 = (state_25099[(14)]);
var inst_24980 = (state_25099[(15)]);
var inst_24983 = (state_25099[(17)]);
var inst_24996 = (state_25099[(2)]);
var inst_24997 = (inst_24983 + (1));
var tmp25111 = inst_24981;
var tmp25112 = inst_24982;
var tmp25113 = inst_24980;
var inst_24980__$1 = tmp25113;
var inst_24981__$1 = tmp25111;
var inst_24982__$1 = tmp25112;
var inst_24983__$1 = inst_24997;
var state_25099__$1 = (function (){var statearr_25118 = state_25099;
(statearr_25118[(13)] = inst_24981__$1);

(statearr_25118[(14)] = inst_24982__$1);

(statearr_25118[(15)] = inst_24980__$1);

(statearr_25118[(17)] = inst_24983__$1);

(statearr_25118[(18)] = inst_24996);

return statearr_25118;
})();
var statearr_25119_25198 = state_25099__$1;
(statearr_25119_25198[(2)] = null);

(statearr_25119_25198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (21))){
var inst_25021 = (state_25099[(2)]);
var state_25099__$1 = state_25099;
var statearr_25123_25199 = state_25099__$1;
(statearr_25123_25199[(2)] = inst_25021);

(statearr_25123_25199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (31))){
var inst_25047 = (state_25099[(9)]);
var inst_25051 = done.call(null,null);
var inst_25052 = cljs.core.async.untap_STAR_.call(null,m,inst_25047);
var state_25099__$1 = (function (){var statearr_25124 = state_25099;
(statearr_25124[(19)] = inst_25051);

return statearr_25124;
})();
var statearr_25125_25200 = state_25099__$1;
(statearr_25125_25200[(2)] = inst_25052);

(statearr_25125_25200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (32))){
var inst_25040 = (state_25099[(10)]);
var inst_25042 = (state_25099[(11)]);
var inst_25041 = (state_25099[(20)]);
var inst_25039 = (state_25099[(21)]);
var inst_25054 = (state_25099[(2)]);
var inst_25055 = (inst_25042 + (1));
var tmp25120 = inst_25040;
var tmp25121 = inst_25041;
var tmp25122 = inst_25039;
var inst_25039__$1 = tmp25122;
var inst_25040__$1 = tmp25120;
var inst_25041__$1 = tmp25121;
var inst_25042__$1 = inst_25055;
var state_25099__$1 = (function (){var statearr_25126 = state_25099;
(statearr_25126[(22)] = inst_25054);

(statearr_25126[(10)] = inst_25040__$1);

(statearr_25126[(11)] = inst_25042__$1);

(statearr_25126[(20)] = inst_25041__$1);

(statearr_25126[(21)] = inst_25039__$1);

return statearr_25126;
})();
var statearr_25127_25201 = state_25099__$1;
(statearr_25127_25201[(2)] = null);

(statearr_25127_25201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (40))){
var inst_25067 = (state_25099[(23)]);
var inst_25071 = done.call(null,null);
var inst_25072 = cljs.core.async.untap_STAR_.call(null,m,inst_25067);
var state_25099__$1 = (function (){var statearr_25128 = state_25099;
(statearr_25128[(24)] = inst_25071);

return statearr_25128;
})();
var statearr_25129_25202 = state_25099__$1;
(statearr_25129_25202[(2)] = inst_25072);

(statearr_25129_25202[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (33))){
var inst_25058 = (state_25099[(25)]);
var inst_25060 = cljs.core.chunked_seq_QMARK_.call(null,inst_25058);
var state_25099__$1 = state_25099;
if(inst_25060){
var statearr_25130_25203 = state_25099__$1;
(statearr_25130_25203[(1)] = (36));

} else {
var statearr_25131_25204 = state_25099__$1;
(statearr_25131_25204[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (13))){
var inst_24990 = (state_25099[(26)]);
var inst_24993 = cljs.core.async.close_BANG_.call(null,inst_24990);
var state_25099__$1 = state_25099;
var statearr_25132_25205 = state_25099__$1;
(statearr_25132_25205[(2)] = inst_24993);

(statearr_25132_25205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (22))){
var inst_25011 = (state_25099[(8)]);
var inst_25014 = cljs.core.async.close_BANG_.call(null,inst_25011);
var state_25099__$1 = state_25099;
var statearr_25133_25206 = state_25099__$1;
(statearr_25133_25206[(2)] = inst_25014);

(statearr_25133_25206[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (36))){
var inst_25058 = (state_25099[(25)]);
var inst_25062 = cljs.core.chunk_first.call(null,inst_25058);
var inst_25063 = cljs.core.chunk_rest.call(null,inst_25058);
var inst_25064 = cljs.core.count.call(null,inst_25062);
var inst_25039 = inst_25063;
var inst_25040 = inst_25062;
var inst_25041 = inst_25064;
var inst_25042 = (0);
var state_25099__$1 = (function (){var statearr_25134 = state_25099;
(statearr_25134[(10)] = inst_25040);

(statearr_25134[(11)] = inst_25042);

(statearr_25134[(20)] = inst_25041);

(statearr_25134[(21)] = inst_25039);

return statearr_25134;
})();
var statearr_25135_25207 = state_25099__$1;
(statearr_25135_25207[(2)] = null);

(statearr_25135_25207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (41))){
var inst_25058 = (state_25099[(25)]);
var inst_25074 = (state_25099[(2)]);
var inst_25075 = cljs.core.next.call(null,inst_25058);
var inst_25039 = inst_25075;
var inst_25040 = null;
var inst_25041 = (0);
var inst_25042 = (0);
var state_25099__$1 = (function (){var statearr_25136 = state_25099;
(statearr_25136[(27)] = inst_25074);

(statearr_25136[(10)] = inst_25040);

(statearr_25136[(11)] = inst_25042);

(statearr_25136[(20)] = inst_25041);

(statearr_25136[(21)] = inst_25039);

return statearr_25136;
})();
var statearr_25137_25208 = state_25099__$1;
(statearr_25137_25208[(2)] = null);

(statearr_25137_25208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (43))){
var state_25099__$1 = state_25099;
var statearr_25138_25209 = state_25099__$1;
(statearr_25138_25209[(2)] = null);

(statearr_25138_25209[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (29))){
var inst_25083 = (state_25099[(2)]);
var state_25099__$1 = state_25099;
var statearr_25139_25210 = state_25099__$1;
(statearr_25139_25210[(2)] = inst_25083);

(statearr_25139_25210[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (44))){
var inst_25092 = (state_25099[(2)]);
var state_25099__$1 = (function (){var statearr_25140 = state_25099;
(statearr_25140[(28)] = inst_25092);

return statearr_25140;
})();
var statearr_25141_25211 = state_25099__$1;
(statearr_25141_25211[(2)] = null);

(statearr_25141_25211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (6))){
var inst_25031 = (state_25099[(29)]);
var inst_25030 = cljs.core.deref.call(null,cs);
var inst_25031__$1 = cljs.core.keys.call(null,inst_25030);
var inst_25032 = cljs.core.count.call(null,inst_25031__$1);
var inst_25033 = cljs.core.reset_BANG_.call(null,dctr,inst_25032);
var inst_25038 = cljs.core.seq.call(null,inst_25031__$1);
var inst_25039 = inst_25038;
var inst_25040 = null;
var inst_25041 = (0);
var inst_25042 = (0);
var state_25099__$1 = (function (){var statearr_25142 = state_25099;
(statearr_25142[(29)] = inst_25031__$1);

(statearr_25142[(10)] = inst_25040);

(statearr_25142[(11)] = inst_25042);

(statearr_25142[(20)] = inst_25041);

(statearr_25142[(30)] = inst_25033);

(statearr_25142[(21)] = inst_25039);

return statearr_25142;
})();
var statearr_25143_25212 = state_25099__$1;
(statearr_25143_25212[(2)] = null);

(statearr_25143_25212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (28))){
var inst_25058 = (state_25099[(25)]);
var inst_25039 = (state_25099[(21)]);
var inst_25058__$1 = cljs.core.seq.call(null,inst_25039);
var state_25099__$1 = (function (){var statearr_25144 = state_25099;
(statearr_25144[(25)] = inst_25058__$1);

return statearr_25144;
})();
if(inst_25058__$1){
var statearr_25145_25213 = state_25099__$1;
(statearr_25145_25213[(1)] = (33));

} else {
var statearr_25146_25214 = state_25099__$1;
(statearr_25146_25214[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (25))){
var inst_25042 = (state_25099[(11)]);
var inst_25041 = (state_25099[(20)]);
var inst_25044 = (inst_25042 < inst_25041);
var inst_25045 = inst_25044;
var state_25099__$1 = state_25099;
if(cljs.core.truth_(inst_25045)){
var statearr_25147_25215 = state_25099__$1;
(statearr_25147_25215[(1)] = (27));

} else {
var statearr_25148_25216 = state_25099__$1;
(statearr_25148_25216[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (34))){
var state_25099__$1 = state_25099;
var statearr_25149_25217 = state_25099__$1;
(statearr_25149_25217[(2)] = null);

(statearr_25149_25217[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (17))){
var state_25099__$1 = state_25099;
var statearr_25150_25218 = state_25099__$1;
(statearr_25150_25218[(2)] = null);

(statearr_25150_25218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (3))){
var inst_25097 = (state_25099[(2)]);
var state_25099__$1 = state_25099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25099__$1,inst_25097);
} else {
if((state_val_25100 === (12))){
var inst_25026 = (state_25099[(2)]);
var state_25099__$1 = state_25099;
var statearr_25151_25219 = state_25099__$1;
(statearr_25151_25219[(2)] = inst_25026);

(statearr_25151_25219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (2))){
var state_25099__$1 = state_25099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25099__$1,(4),ch);
} else {
if((state_val_25100 === (23))){
var state_25099__$1 = state_25099;
var statearr_25152_25220 = state_25099__$1;
(statearr_25152_25220[(2)] = null);

(statearr_25152_25220[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (35))){
var inst_25081 = (state_25099[(2)]);
var state_25099__$1 = state_25099;
var statearr_25153_25221 = state_25099__$1;
(statearr_25153_25221[(2)] = inst_25081);

(statearr_25153_25221[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (19))){
var inst_25000 = (state_25099[(7)]);
var inst_25004 = cljs.core.chunk_first.call(null,inst_25000);
var inst_25005 = cljs.core.chunk_rest.call(null,inst_25000);
var inst_25006 = cljs.core.count.call(null,inst_25004);
var inst_24980 = inst_25005;
var inst_24981 = inst_25004;
var inst_24982 = inst_25006;
var inst_24983 = (0);
var state_25099__$1 = (function (){var statearr_25154 = state_25099;
(statearr_25154[(13)] = inst_24981);

(statearr_25154[(14)] = inst_24982);

(statearr_25154[(15)] = inst_24980);

(statearr_25154[(17)] = inst_24983);

return statearr_25154;
})();
var statearr_25155_25222 = state_25099__$1;
(statearr_25155_25222[(2)] = null);

(statearr_25155_25222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (11))){
var inst_25000 = (state_25099[(7)]);
var inst_24980 = (state_25099[(15)]);
var inst_25000__$1 = cljs.core.seq.call(null,inst_24980);
var state_25099__$1 = (function (){var statearr_25156 = state_25099;
(statearr_25156[(7)] = inst_25000__$1);

return statearr_25156;
})();
if(inst_25000__$1){
var statearr_25157_25223 = state_25099__$1;
(statearr_25157_25223[(1)] = (16));

} else {
var statearr_25158_25224 = state_25099__$1;
(statearr_25158_25224[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (9))){
var inst_25028 = (state_25099[(2)]);
var state_25099__$1 = state_25099;
var statearr_25159_25225 = state_25099__$1;
(statearr_25159_25225[(2)] = inst_25028);

(statearr_25159_25225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (5))){
var inst_24978 = cljs.core.deref.call(null,cs);
var inst_24979 = cljs.core.seq.call(null,inst_24978);
var inst_24980 = inst_24979;
var inst_24981 = null;
var inst_24982 = (0);
var inst_24983 = (0);
var state_25099__$1 = (function (){var statearr_25160 = state_25099;
(statearr_25160[(13)] = inst_24981);

(statearr_25160[(14)] = inst_24982);

(statearr_25160[(15)] = inst_24980);

(statearr_25160[(17)] = inst_24983);

return statearr_25160;
})();
var statearr_25161_25226 = state_25099__$1;
(statearr_25161_25226[(2)] = null);

(statearr_25161_25226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (14))){
var state_25099__$1 = state_25099;
var statearr_25162_25227 = state_25099__$1;
(statearr_25162_25227[(2)] = null);

(statearr_25162_25227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (45))){
var inst_25089 = (state_25099[(2)]);
var state_25099__$1 = state_25099;
var statearr_25163_25228 = state_25099__$1;
(statearr_25163_25228[(2)] = inst_25089);

(statearr_25163_25228[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (26))){
var inst_25031 = (state_25099[(29)]);
var inst_25085 = (state_25099[(2)]);
var inst_25086 = cljs.core.seq.call(null,inst_25031);
var state_25099__$1 = (function (){var statearr_25164 = state_25099;
(statearr_25164[(31)] = inst_25085);

return statearr_25164;
})();
if(inst_25086){
var statearr_25165_25229 = state_25099__$1;
(statearr_25165_25229[(1)] = (42));

} else {
var statearr_25166_25230 = state_25099__$1;
(statearr_25166_25230[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (16))){
var inst_25000 = (state_25099[(7)]);
var inst_25002 = cljs.core.chunked_seq_QMARK_.call(null,inst_25000);
var state_25099__$1 = state_25099;
if(inst_25002){
var statearr_25167_25231 = state_25099__$1;
(statearr_25167_25231[(1)] = (19));

} else {
var statearr_25168_25232 = state_25099__$1;
(statearr_25168_25232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (38))){
var inst_25078 = (state_25099[(2)]);
var state_25099__$1 = state_25099;
var statearr_25169_25233 = state_25099__$1;
(statearr_25169_25233[(2)] = inst_25078);

(statearr_25169_25233[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (30))){
var state_25099__$1 = state_25099;
var statearr_25170_25234 = state_25099__$1;
(statearr_25170_25234[(2)] = null);

(statearr_25170_25234[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (10))){
var inst_24981 = (state_25099[(13)]);
var inst_24983 = (state_25099[(17)]);
var inst_24989 = cljs.core._nth.call(null,inst_24981,inst_24983);
var inst_24990 = cljs.core.nth.call(null,inst_24989,(0),null);
var inst_24991 = cljs.core.nth.call(null,inst_24989,(1),null);
var state_25099__$1 = (function (){var statearr_25171 = state_25099;
(statearr_25171[(26)] = inst_24990);

return statearr_25171;
})();
if(cljs.core.truth_(inst_24991)){
var statearr_25172_25235 = state_25099__$1;
(statearr_25172_25235[(1)] = (13));

} else {
var statearr_25173_25236 = state_25099__$1;
(statearr_25173_25236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (18))){
var inst_25024 = (state_25099[(2)]);
var state_25099__$1 = state_25099;
var statearr_25174_25237 = state_25099__$1;
(statearr_25174_25237[(2)] = inst_25024);

(statearr_25174_25237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (42))){
var state_25099__$1 = state_25099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25099__$1,(45),dchan);
} else {
if((state_val_25100 === (37))){
var inst_25067 = (state_25099[(23)]);
var inst_25058 = (state_25099[(25)]);
var inst_24971 = (state_25099[(12)]);
var inst_25067__$1 = cljs.core.first.call(null,inst_25058);
var inst_25068 = cljs.core.async.put_BANG_.call(null,inst_25067__$1,inst_24971,done);
var state_25099__$1 = (function (){var statearr_25175 = state_25099;
(statearr_25175[(23)] = inst_25067__$1);

return statearr_25175;
})();
if(cljs.core.truth_(inst_25068)){
var statearr_25176_25238 = state_25099__$1;
(statearr_25176_25238[(1)] = (39));

} else {
var statearr_25177_25239 = state_25099__$1;
(statearr_25177_25239[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (8))){
var inst_24982 = (state_25099[(14)]);
var inst_24983 = (state_25099[(17)]);
var inst_24985 = (inst_24983 < inst_24982);
var inst_24986 = inst_24985;
var state_25099__$1 = state_25099;
if(cljs.core.truth_(inst_24986)){
var statearr_25178_25240 = state_25099__$1;
(statearr_25178_25240[(1)] = (10));

} else {
var statearr_25179_25241 = state_25099__$1;
(statearr_25179_25241[(1)] = (11));

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
});})(c__23880__auto___25187,cs,m,dchan,dctr,done))
;
return ((function (switch__23768__auto__,c__23880__auto___25187,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23769__auto__ = null;
var cljs$core$async$mult_$_state_machine__23769__auto____0 = (function (){
var statearr_25183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25183[(0)] = cljs$core$async$mult_$_state_machine__23769__auto__);

(statearr_25183[(1)] = (1));

return statearr_25183;
});
var cljs$core$async$mult_$_state_machine__23769__auto____1 = (function (state_25099){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_25099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e25184){if((e25184 instanceof Object)){
var ex__23772__auto__ = e25184;
var statearr_25185_25242 = state_25099;
(statearr_25185_25242[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25243 = state_25099;
state_25099 = G__25243;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23769__auto__ = function(state_25099){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23769__auto____1.call(this,state_25099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23769__auto____0;
cljs$core$async$mult_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23769__auto____1;
return cljs$core$async$mult_$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___25187,cs,m,dchan,dctr,done))
})();
var state__23882__auto__ = (function (){var statearr_25186 = f__23881__auto__.call(null);
(statearr_25186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___25187);

return statearr_25186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___25187,cs,m,dchan,dctr,done))
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
var args25244 = [];
var len__22783__auto___25247 = arguments.length;
var i__22784__auto___25248 = (0);
while(true){
if((i__22784__auto___25248 < len__22783__auto___25247)){
args25244.push((arguments[i__22784__auto___25248]));

var G__25249 = (i__22784__auto___25248 + (1));
i__22784__auto___25248 = G__25249;
continue;
} else {
}
break;
}

var G__25246 = args25244.length;
switch (G__25246) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25244.length)].join('')));

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
var x__22376__auto__ = (((m == null))?null:m);
var m__22377__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,m,ch);
} else {
var m__22377__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,m,ch);
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
var x__22376__auto__ = (((m == null))?null:m);
var m__22377__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,m,ch);
} else {
var m__22377__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,m,ch);
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
var x__22376__auto__ = (((m == null))?null:m);
var m__22377__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,m);
} else {
var m__22377__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,m);
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
var x__22376__auto__ = (((m == null))?null:m);
var m__22377__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,m,state_map);
} else {
var m__22377__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,m,state_map);
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
var x__22376__auto__ = (((m == null))?null:m);
var m__22377__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,m,mode);
} else {
var m__22377__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22790__auto__ = [];
var len__22783__auto___25261 = arguments.length;
var i__22784__auto___25262 = (0);
while(true){
if((i__22784__auto___25262 < len__22783__auto___25261)){
args__22790__auto__.push((arguments[i__22784__auto___25262]));

var G__25263 = (i__22784__auto___25262 + (1));
i__22784__auto___25262 = G__25263;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((3) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22791__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25255){
var map__25256 = p__25255;
var map__25256__$1 = ((((!((map__25256 == null)))?((((map__25256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25256):map__25256);
var opts = map__25256__$1;
var statearr_25258_25264 = state;
(statearr_25258_25264[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25256,map__25256__$1,opts){
return (function (val){
var statearr_25259_25265 = state;
(statearr_25259_25265[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25256,map__25256__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25260_25266 = state;
(statearr_25260_25266[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25251){
var G__25252 = cljs.core.first.call(null,seq25251);
var seq25251__$1 = cljs.core.next.call(null,seq25251);
var G__25253 = cljs.core.first.call(null,seq25251__$1);
var seq25251__$2 = cljs.core.next.call(null,seq25251__$1);
var G__25254 = cljs.core.first.call(null,seq25251__$2);
var seq25251__$3 = cljs.core.next.call(null,seq25251__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25252,G__25253,G__25254,seq25251__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25431 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25432){
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
this.meta25432 = meta25432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25433,meta25432__$1){
var self__ = this;
var _25433__$1 = this;
return (new cljs.core.async.t_cljs$core$async25431(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25432__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25433){
var self__ = this;
var _25433__$1 = this;
return self__.meta25432;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25431.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25431.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25431.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25431.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25431.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25431.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25431.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25431.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25431.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25432","meta25432",-964186336,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25431";

cljs.core.async.t_cljs$core$async25431.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22319__auto__,writer__22320__auto__,opt__22321__auto__){
return cljs.core._write.call(null,writer__22320__auto__,"cljs.core.async/t_cljs$core$async25431");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25431 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25431(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25432){
return (new cljs.core.async.t_cljs$core$async25431(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25432));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25431(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23880__auto___25594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___25594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___25594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25531){
var state_val_25532 = (state_25531[(1)]);
if((state_val_25532 === (7))){
var inst_25449 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
var statearr_25533_25595 = state_25531__$1;
(statearr_25533_25595[(2)] = inst_25449);

(statearr_25533_25595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (20))){
var inst_25461 = (state_25531[(7)]);
var state_25531__$1 = state_25531;
var statearr_25534_25596 = state_25531__$1;
(statearr_25534_25596[(2)] = inst_25461);

(statearr_25534_25596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (27))){
var state_25531__$1 = state_25531;
var statearr_25535_25597 = state_25531__$1;
(statearr_25535_25597[(2)] = null);

(statearr_25535_25597[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (1))){
var inst_25437 = (state_25531[(8)]);
var inst_25437__$1 = calc_state.call(null);
var inst_25439 = (inst_25437__$1 == null);
var inst_25440 = cljs.core.not.call(null,inst_25439);
var state_25531__$1 = (function (){var statearr_25536 = state_25531;
(statearr_25536[(8)] = inst_25437__$1);

return statearr_25536;
})();
if(inst_25440){
var statearr_25537_25598 = state_25531__$1;
(statearr_25537_25598[(1)] = (2));

} else {
var statearr_25538_25599 = state_25531__$1;
(statearr_25538_25599[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (24))){
var inst_25491 = (state_25531[(9)]);
var inst_25505 = (state_25531[(10)]);
var inst_25484 = (state_25531[(11)]);
var inst_25505__$1 = inst_25484.call(null,inst_25491);
var state_25531__$1 = (function (){var statearr_25539 = state_25531;
(statearr_25539[(10)] = inst_25505__$1);

return statearr_25539;
})();
if(cljs.core.truth_(inst_25505__$1)){
var statearr_25540_25600 = state_25531__$1;
(statearr_25540_25600[(1)] = (29));

} else {
var statearr_25541_25601 = state_25531__$1;
(statearr_25541_25601[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (4))){
var inst_25452 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
if(cljs.core.truth_(inst_25452)){
var statearr_25542_25602 = state_25531__$1;
(statearr_25542_25602[(1)] = (8));

} else {
var statearr_25543_25603 = state_25531__$1;
(statearr_25543_25603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (15))){
var inst_25478 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
if(cljs.core.truth_(inst_25478)){
var statearr_25544_25604 = state_25531__$1;
(statearr_25544_25604[(1)] = (19));

} else {
var statearr_25545_25605 = state_25531__$1;
(statearr_25545_25605[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (21))){
var inst_25483 = (state_25531[(12)]);
var inst_25483__$1 = (state_25531[(2)]);
var inst_25484 = cljs.core.get.call(null,inst_25483__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25485 = cljs.core.get.call(null,inst_25483__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25486 = cljs.core.get.call(null,inst_25483__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25531__$1 = (function (){var statearr_25546 = state_25531;
(statearr_25546[(13)] = inst_25485);

(statearr_25546[(12)] = inst_25483__$1);

(statearr_25546[(11)] = inst_25484);

return statearr_25546;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25531__$1,(22),inst_25486);
} else {
if((state_val_25532 === (31))){
var inst_25513 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
if(cljs.core.truth_(inst_25513)){
var statearr_25547_25606 = state_25531__$1;
(statearr_25547_25606[(1)] = (32));

} else {
var statearr_25548_25607 = state_25531__$1;
(statearr_25548_25607[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (32))){
var inst_25490 = (state_25531[(14)]);
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25531__$1,(35),out,inst_25490);
} else {
if((state_val_25532 === (33))){
var inst_25483 = (state_25531[(12)]);
var inst_25461 = inst_25483;
var state_25531__$1 = (function (){var statearr_25549 = state_25531;
(statearr_25549[(7)] = inst_25461);

return statearr_25549;
})();
var statearr_25550_25608 = state_25531__$1;
(statearr_25550_25608[(2)] = null);

(statearr_25550_25608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (13))){
var inst_25461 = (state_25531[(7)]);
var inst_25468 = inst_25461.cljs$lang$protocol_mask$partition0$;
var inst_25469 = (inst_25468 & (64));
var inst_25470 = inst_25461.cljs$core$ISeq$;
var inst_25471 = (inst_25469) || (inst_25470);
var state_25531__$1 = state_25531;
if(cljs.core.truth_(inst_25471)){
var statearr_25551_25609 = state_25531__$1;
(statearr_25551_25609[(1)] = (16));

} else {
var statearr_25552_25610 = state_25531__$1;
(statearr_25552_25610[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (22))){
var inst_25491 = (state_25531[(9)]);
var inst_25490 = (state_25531[(14)]);
var inst_25489 = (state_25531[(2)]);
var inst_25490__$1 = cljs.core.nth.call(null,inst_25489,(0),null);
var inst_25491__$1 = cljs.core.nth.call(null,inst_25489,(1),null);
var inst_25492 = (inst_25490__$1 == null);
var inst_25493 = cljs.core._EQ_.call(null,inst_25491__$1,change);
var inst_25494 = (inst_25492) || (inst_25493);
var state_25531__$1 = (function (){var statearr_25553 = state_25531;
(statearr_25553[(9)] = inst_25491__$1);

(statearr_25553[(14)] = inst_25490__$1);

return statearr_25553;
})();
if(cljs.core.truth_(inst_25494)){
var statearr_25554_25611 = state_25531__$1;
(statearr_25554_25611[(1)] = (23));

} else {
var statearr_25555_25612 = state_25531__$1;
(statearr_25555_25612[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (36))){
var inst_25483 = (state_25531[(12)]);
var inst_25461 = inst_25483;
var state_25531__$1 = (function (){var statearr_25556 = state_25531;
(statearr_25556[(7)] = inst_25461);

return statearr_25556;
})();
var statearr_25557_25613 = state_25531__$1;
(statearr_25557_25613[(2)] = null);

(statearr_25557_25613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (29))){
var inst_25505 = (state_25531[(10)]);
var state_25531__$1 = state_25531;
var statearr_25558_25614 = state_25531__$1;
(statearr_25558_25614[(2)] = inst_25505);

(statearr_25558_25614[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (6))){
var state_25531__$1 = state_25531;
var statearr_25559_25615 = state_25531__$1;
(statearr_25559_25615[(2)] = false);

(statearr_25559_25615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (28))){
var inst_25501 = (state_25531[(2)]);
var inst_25502 = calc_state.call(null);
var inst_25461 = inst_25502;
var state_25531__$1 = (function (){var statearr_25560 = state_25531;
(statearr_25560[(7)] = inst_25461);

(statearr_25560[(15)] = inst_25501);

return statearr_25560;
})();
var statearr_25561_25616 = state_25531__$1;
(statearr_25561_25616[(2)] = null);

(statearr_25561_25616[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (25))){
var inst_25527 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
var statearr_25562_25617 = state_25531__$1;
(statearr_25562_25617[(2)] = inst_25527);

(statearr_25562_25617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (34))){
var inst_25525 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
var statearr_25563_25618 = state_25531__$1;
(statearr_25563_25618[(2)] = inst_25525);

(statearr_25563_25618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (17))){
var state_25531__$1 = state_25531;
var statearr_25564_25619 = state_25531__$1;
(statearr_25564_25619[(2)] = false);

(statearr_25564_25619[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (3))){
var state_25531__$1 = state_25531;
var statearr_25565_25620 = state_25531__$1;
(statearr_25565_25620[(2)] = false);

(statearr_25565_25620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (12))){
var inst_25529 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25531__$1,inst_25529);
} else {
if((state_val_25532 === (2))){
var inst_25437 = (state_25531[(8)]);
var inst_25442 = inst_25437.cljs$lang$protocol_mask$partition0$;
var inst_25443 = (inst_25442 & (64));
var inst_25444 = inst_25437.cljs$core$ISeq$;
var inst_25445 = (inst_25443) || (inst_25444);
var state_25531__$1 = state_25531;
if(cljs.core.truth_(inst_25445)){
var statearr_25566_25621 = state_25531__$1;
(statearr_25566_25621[(1)] = (5));

} else {
var statearr_25567_25622 = state_25531__$1;
(statearr_25567_25622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (23))){
var inst_25490 = (state_25531[(14)]);
var inst_25496 = (inst_25490 == null);
var state_25531__$1 = state_25531;
if(cljs.core.truth_(inst_25496)){
var statearr_25568_25623 = state_25531__$1;
(statearr_25568_25623[(1)] = (26));

} else {
var statearr_25569_25624 = state_25531__$1;
(statearr_25569_25624[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (35))){
var inst_25516 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
if(cljs.core.truth_(inst_25516)){
var statearr_25570_25625 = state_25531__$1;
(statearr_25570_25625[(1)] = (36));

} else {
var statearr_25571_25626 = state_25531__$1;
(statearr_25571_25626[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (19))){
var inst_25461 = (state_25531[(7)]);
var inst_25480 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25461);
var state_25531__$1 = state_25531;
var statearr_25572_25627 = state_25531__$1;
(statearr_25572_25627[(2)] = inst_25480);

(statearr_25572_25627[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (11))){
var inst_25461 = (state_25531[(7)]);
var inst_25465 = (inst_25461 == null);
var inst_25466 = cljs.core.not.call(null,inst_25465);
var state_25531__$1 = state_25531;
if(inst_25466){
var statearr_25573_25628 = state_25531__$1;
(statearr_25573_25628[(1)] = (13));

} else {
var statearr_25574_25629 = state_25531__$1;
(statearr_25574_25629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (9))){
var inst_25437 = (state_25531[(8)]);
var state_25531__$1 = state_25531;
var statearr_25575_25630 = state_25531__$1;
(statearr_25575_25630[(2)] = inst_25437);

(statearr_25575_25630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (5))){
var state_25531__$1 = state_25531;
var statearr_25576_25631 = state_25531__$1;
(statearr_25576_25631[(2)] = true);

(statearr_25576_25631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (14))){
var state_25531__$1 = state_25531;
var statearr_25577_25632 = state_25531__$1;
(statearr_25577_25632[(2)] = false);

(statearr_25577_25632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (26))){
var inst_25491 = (state_25531[(9)]);
var inst_25498 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25491);
var state_25531__$1 = state_25531;
var statearr_25578_25633 = state_25531__$1;
(statearr_25578_25633[(2)] = inst_25498);

(statearr_25578_25633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (16))){
var state_25531__$1 = state_25531;
var statearr_25579_25634 = state_25531__$1;
(statearr_25579_25634[(2)] = true);

(statearr_25579_25634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (38))){
var inst_25521 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
var statearr_25580_25635 = state_25531__$1;
(statearr_25580_25635[(2)] = inst_25521);

(statearr_25580_25635[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (30))){
var inst_25491 = (state_25531[(9)]);
var inst_25485 = (state_25531[(13)]);
var inst_25484 = (state_25531[(11)]);
var inst_25508 = cljs.core.empty_QMARK_.call(null,inst_25484);
var inst_25509 = inst_25485.call(null,inst_25491);
var inst_25510 = cljs.core.not.call(null,inst_25509);
var inst_25511 = (inst_25508) && (inst_25510);
var state_25531__$1 = state_25531;
var statearr_25581_25636 = state_25531__$1;
(statearr_25581_25636[(2)] = inst_25511);

(statearr_25581_25636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (10))){
var inst_25437 = (state_25531[(8)]);
var inst_25457 = (state_25531[(2)]);
var inst_25458 = cljs.core.get.call(null,inst_25457,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25459 = cljs.core.get.call(null,inst_25457,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25460 = cljs.core.get.call(null,inst_25457,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25461 = inst_25437;
var state_25531__$1 = (function (){var statearr_25582 = state_25531;
(statearr_25582[(7)] = inst_25461);

(statearr_25582[(16)] = inst_25458);

(statearr_25582[(17)] = inst_25459);

(statearr_25582[(18)] = inst_25460);

return statearr_25582;
})();
var statearr_25583_25637 = state_25531__$1;
(statearr_25583_25637[(2)] = null);

(statearr_25583_25637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (18))){
var inst_25475 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
var statearr_25584_25638 = state_25531__$1;
(statearr_25584_25638[(2)] = inst_25475);

(statearr_25584_25638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (37))){
var state_25531__$1 = state_25531;
var statearr_25585_25639 = state_25531__$1;
(statearr_25585_25639[(2)] = null);

(statearr_25585_25639[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (8))){
var inst_25437 = (state_25531[(8)]);
var inst_25454 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25437);
var state_25531__$1 = state_25531;
var statearr_25586_25640 = state_25531__$1;
(statearr_25586_25640[(2)] = inst_25454);

(statearr_25586_25640[(1)] = (10));


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
});})(c__23880__auto___25594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23768__auto__,c__23880__auto___25594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23769__auto__ = null;
var cljs$core$async$mix_$_state_machine__23769__auto____0 = (function (){
var statearr_25590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25590[(0)] = cljs$core$async$mix_$_state_machine__23769__auto__);

(statearr_25590[(1)] = (1));

return statearr_25590;
});
var cljs$core$async$mix_$_state_machine__23769__auto____1 = (function (state_25531){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_25531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e25591){if((e25591 instanceof Object)){
var ex__23772__auto__ = e25591;
var statearr_25592_25641 = state_25531;
(statearr_25592_25641[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25642 = state_25531;
state_25531 = G__25642;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23769__auto__ = function(state_25531){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23769__auto____1.call(this,state_25531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23769__auto____0;
cljs$core$async$mix_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23769__auto____1;
return cljs$core$async$mix_$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___25594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23882__auto__ = (function (){var statearr_25593 = f__23881__auto__.call(null);
(statearr_25593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___25594);

return statearr_25593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___25594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22376__auto__ = (((p == null))?null:p);
var m__22377__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22377__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__22376__auto__ = (((p == null))?null:p);
var m__22377__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,p,v,ch);
} else {
var m__22377__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25643 = [];
var len__22783__auto___25646 = arguments.length;
var i__22784__auto___25647 = (0);
while(true){
if((i__22784__auto___25647 < len__22783__auto___25646)){
args25643.push((arguments[i__22784__auto___25647]));

var G__25648 = (i__22784__auto___25647 + (1));
i__22784__auto___25647 = G__25648;
continue;
} else {
}
break;
}

var G__25645 = args25643.length;
switch (G__25645) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25643.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22376__auto__ = (((p == null))?null:p);
var m__22377__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,p);
} else {
var m__22377__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,p);
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
var x__22376__auto__ = (((p == null))?null:p);
var m__22377__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22376__auto__)]);
if(!((m__22377__auto__ == null))){
return m__22377__auto__.call(null,p,v);
} else {
var m__22377__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22377__auto____$1 == null))){
return m__22377__auto____$1.call(null,p,v);
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
var args25651 = [];
var len__22783__auto___25776 = arguments.length;
var i__22784__auto___25777 = (0);
while(true){
if((i__22784__auto___25777 < len__22783__auto___25776)){
args25651.push((arguments[i__22784__auto___25777]));

var G__25778 = (i__22784__auto___25777 + (1));
i__22784__auto___25777 = G__25778;
continue;
} else {
}
break;
}

var G__25653 = args25651.length;
switch (G__25653) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25651.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21713__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21713__auto__,mults){
return (function (p1__25650_SHARP_){
if(cljs.core.truth_(p1__25650_SHARP_.call(null,topic))){
return p1__25650_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25650_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21713__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25654 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25655){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25655 = meta25655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25656,meta25655__$1){
var self__ = this;
var _25656__$1 = this;
return (new cljs.core.async.t_cljs$core$async25654(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25655__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25656){
var self__ = this;
var _25656__$1 = this;
return self__.meta25655;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25654.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25655","meta25655",851520751,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25654";

cljs.core.async.t_cljs$core$async25654.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22319__auto__,writer__22320__auto__,opt__22321__auto__){
return cljs.core._write.call(null,writer__22320__auto__,"cljs.core.async/t_cljs$core$async25654");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25654 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25654(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25655){
return (new cljs.core.async.t_cljs$core$async25654(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25655));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25654(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23880__auto___25780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___25780,mults,ensure_mult,p){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___25780,mults,ensure_mult,p){
return (function (state_25728){
var state_val_25729 = (state_25728[(1)]);
if((state_val_25729 === (7))){
var inst_25724 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
var statearr_25730_25781 = state_25728__$1;
(statearr_25730_25781[(2)] = inst_25724);

(statearr_25730_25781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (20))){
var state_25728__$1 = state_25728;
var statearr_25731_25782 = state_25728__$1;
(statearr_25731_25782[(2)] = null);

(statearr_25731_25782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (1))){
var state_25728__$1 = state_25728;
var statearr_25732_25783 = state_25728__$1;
(statearr_25732_25783[(2)] = null);

(statearr_25732_25783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (24))){
var inst_25707 = (state_25728[(7)]);
var inst_25716 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25707);
var state_25728__$1 = state_25728;
var statearr_25733_25784 = state_25728__$1;
(statearr_25733_25784[(2)] = inst_25716);

(statearr_25733_25784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (4))){
var inst_25659 = (state_25728[(8)]);
var inst_25659__$1 = (state_25728[(2)]);
var inst_25660 = (inst_25659__$1 == null);
var state_25728__$1 = (function (){var statearr_25734 = state_25728;
(statearr_25734[(8)] = inst_25659__$1);

return statearr_25734;
})();
if(cljs.core.truth_(inst_25660)){
var statearr_25735_25785 = state_25728__$1;
(statearr_25735_25785[(1)] = (5));

} else {
var statearr_25736_25786 = state_25728__$1;
(statearr_25736_25786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (15))){
var inst_25701 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
var statearr_25737_25787 = state_25728__$1;
(statearr_25737_25787[(2)] = inst_25701);

(statearr_25737_25787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (21))){
var inst_25721 = (state_25728[(2)]);
var state_25728__$1 = (function (){var statearr_25738 = state_25728;
(statearr_25738[(9)] = inst_25721);

return statearr_25738;
})();
var statearr_25739_25788 = state_25728__$1;
(statearr_25739_25788[(2)] = null);

(statearr_25739_25788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (13))){
var inst_25683 = (state_25728[(10)]);
var inst_25685 = cljs.core.chunked_seq_QMARK_.call(null,inst_25683);
var state_25728__$1 = state_25728;
if(inst_25685){
var statearr_25740_25789 = state_25728__$1;
(statearr_25740_25789[(1)] = (16));

} else {
var statearr_25741_25790 = state_25728__$1;
(statearr_25741_25790[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (22))){
var inst_25713 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
if(cljs.core.truth_(inst_25713)){
var statearr_25742_25791 = state_25728__$1;
(statearr_25742_25791[(1)] = (23));

} else {
var statearr_25743_25792 = state_25728__$1;
(statearr_25743_25792[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (6))){
var inst_25709 = (state_25728[(11)]);
var inst_25659 = (state_25728[(8)]);
var inst_25707 = (state_25728[(7)]);
var inst_25707__$1 = topic_fn.call(null,inst_25659);
var inst_25708 = cljs.core.deref.call(null,mults);
var inst_25709__$1 = cljs.core.get.call(null,inst_25708,inst_25707__$1);
var state_25728__$1 = (function (){var statearr_25744 = state_25728;
(statearr_25744[(11)] = inst_25709__$1);

(statearr_25744[(7)] = inst_25707__$1);

return statearr_25744;
})();
if(cljs.core.truth_(inst_25709__$1)){
var statearr_25745_25793 = state_25728__$1;
(statearr_25745_25793[(1)] = (19));

} else {
var statearr_25746_25794 = state_25728__$1;
(statearr_25746_25794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (25))){
var inst_25718 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
var statearr_25747_25795 = state_25728__$1;
(statearr_25747_25795[(2)] = inst_25718);

(statearr_25747_25795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (17))){
var inst_25683 = (state_25728[(10)]);
var inst_25692 = cljs.core.first.call(null,inst_25683);
var inst_25693 = cljs.core.async.muxch_STAR_.call(null,inst_25692);
var inst_25694 = cljs.core.async.close_BANG_.call(null,inst_25693);
var inst_25695 = cljs.core.next.call(null,inst_25683);
var inst_25669 = inst_25695;
var inst_25670 = null;
var inst_25671 = (0);
var inst_25672 = (0);
var state_25728__$1 = (function (){var statearr_25748 = state_25728;
(statearr_25748[(12)] = inst_25694);

(statearr_25748[(13)] = inst_25669);

(statearr_25748[(14)] = inst_25671);

(statearr_25748[(15)] = inst_25672);

(statearr_25748[(16)] = inst_25670);

return statearr_25748;
})();
var statearr_25749_25796 = state_25728__$1;
(statearr_25749_25796[(2)] = null);

(statearr_25749_25796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (3))){
var inst_25726 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25728__$1,inst_25726);
} else {
if((state_val_25729 === (12))){
var inst_25703 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
var statearr_25750_25797 = state_25728__$1;
(statearr_25750_25797[(2)] = inst_25703);

(statearr_25750_25797[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (2))){
var state_25728__$1 = state_25728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25728__$1,(4),ch);
} else {
if((state_val_25729 === (23))){
var state_25728__$1 = state_25728;
var statearr_25751_25798 = state_25728__$1;
(statearr_25751_25798[(2)] = null);

(statearr_25751_25798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (19))){
var inst_25709 = (state_25728[(11)]);
var inst_25659 = (state_25728[(8)]);
var inst_25711 = cljs.core.async.muxch_STAR_.call(null,inst_25709);
var state_25728__$1 = state_25728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25728__$1,(22),inst_25711,inst_25659);
} else {
if((state_val_25729 === (11))){
var inst_25669 = (state_25728[(13)]);
var inst_25683 = (state_25728[(10)]);
var inst_25683__$1 = cljs.core.seq.call(null,inst_25669);
var state_25728__$1 = (function (){var statearr_25752 = state_25728;
(statearr_25752[(10)] = inst_25683__$1);

return statearr_25752;
})();
if(inst_25683__$1){
var statearr_25753_25799 = state_25728__$1;
(statearr_25753_25799[(1)] = (13));

} else {
var statearr_25754_25800 = state_25728__$1;
(statearr_25754_25800[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (9))){
var inst_25705 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
var statearr_25755_25801 = state_25728__$1;
(statearr_25755_25801[(2)] = inst_25705);

(statearr_25755_25801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (5))){
var inst_25666 = cljs.core.deref.call(null,mults);
var inst_25667 = cljs.core.vals.call(null,inst_25666);
var inst_25668 = cljs.core.seq.call(null,inst_25667);
var inst_25669 = inst_25668;
var inst_25670 = null;
var inst_25671 = (0);
var inst_25672 = (0);
var state_25728__$1 = (function (){var statearr_25756 = state_25728;
(statearr_25756[(13)] = inst_25669);

(statearr_25756[(14)] = inst_25671);

(statearr_25756[(15)] = inst_25672);

(statearr_25756[(16)] = inst_25670);

return statearr_25756;
})();
var statearr_25757_25802 = state_25728__$1;
(statearr_25757_25802[(2)] = null);

(statearr_25757_25802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (14))){
var state_25728__$1 = state_25728;
var statearr_25761_25803 = state_25728__$1;
(statearr_25761_25803[(2)] = null);

(statearr_25761_25803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (16))){
var inst_25683 = (state_25728[(10)]);
var inst_25687 = cljs.core.chunk_first.call(null,inst_25683);
var inst_25688 = cljs.core.chunk_rest.call(null,inst_25683);
var inst_25689 = cljs.core.count.call(null,inst_25687);
var inst_25669 = inst_25688;
var inst_25670 = inst_25687;
var inst_25671 = inst_25689;
var inst_25672 = (0);
var state_25728__$1 = (function (){var statearr_25762 = state_25728;
(statearr_25762[(13)] = inst_25669);

(statearr_25762[(14)] = inst_25671);

(statearr_25762[(15)] = inst_25672);

(statearr_25762[(16)] = inst_25670);

return statearr_25762;
})();
var statearr_25763_25804 = state_25728__$1;
(statearr_25763_25804[(2)] = null);

(statearr_25763_25804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (10))){
var inst_25669 = (state_25728[(13)]);
var inst_25671 = (state_25728[(14)]);
var inst_25672 = (state_25728[(15)]);
var inst_25670 = (state_25728[(16)]);
var inst_25677 = cljs.core._nth.call(null,inst_25670,inst_25672);
var inst_25678 = cljs.core.async.muxch_STAR_.call(null,inst_25677);
var inst_25679 = cljs.core.async.close_BANG_.call(null,inst_25678);
var inst_25680 = (inst_25672 + (1));
var tmp25758 = inst_25669;
var tmp25759 = inst_25671;
var tmp25760 = inst_25670;
var inst_25669__$1 = tmp25758;
var inst_25670__$1 = tmp25760;
var inst_25671__$1 = tmp25759;
var inst_25672__$1 = inst_25680;
var state_25728__$1 = (function (){var statearr_25764 = state_25728;
(statearr_25764[(17)] = inst_25679);

(statearr_25764[(13)] = inst_25669__$1);

(statearr_25764[(14)] = inst_25671__$1);

(statearr_25764[(15)] = inst_25672__$1);

(statearr_25764[(16)] = inst_25670__$1);

return statearr_25764;
})();
var statearr_25765_25805 = state_25728__$1;
(statearr_25765_25805[(2)] = null);

(statearr_25765_25805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (18))){
var inst_25698 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
var statearr_25766_25806 = state_25728__$1;
(statearr_25766_25806[(2)] = inst_25698);

(statearr_25766_25806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (8))){
var inst_25671 = (state_25728[(14)]);
var inst_25672 = (state_25728[(15)]);
var inst_25674 = (inst_25672 < inst_25671);
var inst_25675 = inst_25674;
var state_25728__$1 = state_25728;
if(cljs.core.truth_(inst_25675)){
var statearr_25767_25807 = state_25728__$1;
(statearr_25767_25807[(1)] = (10));

} else {
var statearr_25768_25808 = state_25728__$1;
(statearr_25768_25808[(1)] = (11));

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
});})(c__23880__auto___25780,mults,ensure_mult,p))
;
return ((function (switch__23768__auto__,c__23880__auto___25780,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23769__auto__ = null;
var cljs$core$async$state_machine__23769__auto____0 = (function (){
var statearr_25772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25772[(0)] = cljs$core$async$state_machine__23769__auto__);

(statearr_25772[(1)] = (1));

return statearr_25772;
});
var cljs$core$async$state_machine__23769__auto____1 = (function (state_25728){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_25728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e25773){if((e25773 instanceof Object)){
var ex__23772__auto__ = e25773;
var statearr_25774_25809 = state_25728;
(statearr_25774_25809[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25810 = state_25728;
state_25728 = G__25810;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$state_machine__23769__auto__ = function(state_25728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23769__auto____1.call(this,state_25728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23769__auto____0;
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23769__auto____1;
return cljs$core$async$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___25780,mults,ensure_mult,p))
})();
var state__23882__auto__ = (function (){var statearr_25775 = f__23881__auto__.call(null);
(statearr_25775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___25780);

return statearr_25775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___25780,mults,ensure_mult,p))
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
var args25811 = [];
var len__22783__auto___25814 = arguments.length;
var i__22784__auto___25815 = (0);
while(true){
if((i__22784__auto___25815 < len__22783__auto___25814)){
args25811.push((arguments[i__22784__auto___25815]));

var G__25816 = (i__22784__auto___25815 + (1));
i__22784__auto___25815 = G__25816;
continue;
} else {
}
break;
}

var G__25813 = args25811.length;
switch (G__25813) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25811.length)].join('')));

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
var args25818 = [];
var len__22783__auto___25821 = arguments.length;
var i__22784__auto___25822 = (0);
while(true){
if((i__22784__auto___25822 < len__22783__auto___25821)){
args25818.push((arguments[i__22784__auto___25822]));

var G__25823 = (i__22784__auto___25822 + (1));
i__22784__auto___25822 = G__25823;
continue;
} else {
}
break;
}

var G__25820 = args25818.length;
switch (G__25820) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25818.length)].join('')));

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
var args25825 = [];
var len__22783__auto___25896 = arguments.length;
var i__22784__auto___25897 = (0);
while(true){
if((i__22784__auto___25897 < len__22783__auto___25896)){
args25825.push((arguments[i__22784__auto___25897]));

var G__25898 = (i__22784__auto___25897 + (1));
i__22784__auto___25897 = G__25898;
continue;
} else {
}
break;
}

var G__25827 = args25825.length;
switch (G__25827) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25825.length)].join('')));

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
var c__23880__auto___25900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___25900,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___25900,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25866){
var state_val_25867 = (state_25866[(1)]);
if((state_val_25867 === (7))){
var state_25866__$1 = state_25866;
var statearr_25868_25901 = state_25866__$1;
(statearr_25868_25901[(2)] = null);

(statearr_25868_25901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (1))){
var state_25866__$1 = state_25866;
var statearr_25869_25902 = state_25866__$1;
(statearr_25869_25902[(2)] = null);

(statearr_25869_25902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (4))){
var inst_25830 = (state_25866[(7)]);
var inst_25832 = (inst_25830 < cnt);
var state_25866__$1 = state_25866;
if(cljs.core.truth_(inst_25832)){
var statearr_25870_25903 = state_25866__$1;
(statearr_25870_25903[(1)] = (6));

} else {
var statearr_25871_25904 = state_25866__$1;
(statearr_25871_25904[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (15))){
var inst_25862 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
var statearr_25872_25905 = state_25866__$1;
(statearr_25872_25905[(2)] = inst_25862);

(statearr_25872_25905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (13))){
var inst_25855 = cljs.core.async.close_BANG_.call(null,out);
var state_25866__$1 = state_25866;
var statearr_25873_25906 = state_25866__$1;
(statearr_25873_25906[(2)] = inst_25855);

(statearr_25873_25906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (6))){
var state_25866__$1 = state_25866;
var statearr_25874_25907 = state_25866__$1;
(statearr_25874_25907[(2)] = null);

(statearr_25874_25907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (3))){
var inst_25864 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25866__$1,inst_25864);
} else {
if((state_val_25867 === (12))){
var inst_25852 = (state_25866[(8)]);
var inst_25852__$1 = (state_25866[(2)]);
var inst_25853 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25852__$1);
var state_25866__$1 = (function (){var statearr_25875 = state_25866;
(statearr_25875[(8)] = inst_25852__$1);

return statearr_25875;
})();
if(cljs.core.truth_(inst_25853)){
var statearr_25876_25908 = state_25866__$1;
(statearr_25876_25908[(1)] = (13));

} else {
var statearr_25877_25909 = state_25866__$1;
(statearr_25877_25909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (2))){
var inst_25829 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25830 = (0);
var state_25866__$1 = (function (){var statearr_25878 = state_25866;
(statearr_25878[(7)] = inst_25830);

(statearr_25878[(9)] = inst_25829);

return statearr_25878;
})();
var statearr_25879_25910 = state_25866__$1;
(statearr_25879_25910[(2)] = null);

(statearr_25879_25910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (11))){
var inst_25830 = (state_25866[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25866,(10),Object,null,(9));
var inst_25839 = chs__$1.call(null,inst_25830);
var inst_25840 = done.call(null,inst_25830);
var inst_25841 = cljs.core.async.take_BANG_.call(null,inst_25839,inst_25840);
var state_25866__$1 = state_25866;
var statearr_25880_25911 = state_25866__$1;
(statearr_25880_25911[(2)] = inst_25841);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (9))){
var inst_25830 = (state_25866[(7)]);
var inst_25843 = (state_25866[(2)]);
var inst_25844 = (inst_25830 + (1));
var inst_25830__$1 = inst_25844;
var state_25866__$1 = (function (){var statearr_25881 = state_25866;
(statearr_25881[(10)] = inst_25843);

(statearr_25881[(7)] = inst_25830__$1);

return statearr_25881;
})();
var statearr_25882_25912 = state_25866__$1;
(statearr_25882_25912[(2)] = null);

(statearr_25882_25912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (5))){
var inst_25850 = (state_25866[(2)]);
var state_25866__$1 = (function (){var statearr_25883 = state_25866;
(statearr_25883[(11)] = inst_25850);

return statearr_25883;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25866__$1,(12),dchan);
} else {
if((state_val_25867 === (14))){
var inst_25852 = (state_25866[(8)]);
var inst_25857 = cljs.core.apply.call(null,f,inst_25852);
var state_25866__$1 = state_25866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25866__$1,(16),out,inst_25857);
} else {
if((state_val_25867 === (16))){
var inst_25859 = (state_25866[(2)]);
var state_25866__$1 = (function (){var statearr_25884 = state_25866;
(statearr_25884[(12)] = inst_25859);

return statearr_25884;
})();
var statearr_25885_25913 = state_25866__$1;
(statearr_25885_25913[(2)] = null);

(statearr_25885_25913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (10))){
var inst_25834 = (state_25866[(2)]);
var inst_25835 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25866__$1 = (function (){var statearr_25886 = state_25866;
(statearr_25886[(13)] = inst_25834);

return statearr_25886;
})();
var statearr_25887_25914 = state_25866__$1;
(statearr_25887_25914[(2)] = inst_25835);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (8))){
var inst_25848 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
var statearr_25888_25915 = state_25866__$1;
(statearr_25888_25915[(2)] = inst_25848);

(statearr_25888_25915[(1)] = (5));


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
});})(c__23880__auto___25900,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23768__auto__,c__23880__auto___25900,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23769__auto__ = null;
var cljs$core$async$state_machine__23769__auto____0 = (function (){
var statearr_25892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25892[(0)] = cljs$core$async$state_machine__23769__auto__);

(statearr_25892[(1)] = (1));

return statearr_25892;
});
var cljs$core$async$state_machine__23769__auto____1 = (function (state_25866){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_25866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e25893){if((e25893 instanceof Object)){
var ex__23772__auto__ = e25893;
var statearr_25894_25916 = state_25866;
(statearr_25894_25916[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25917 = state_25866;
state_25866 = G__25917;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$state_machine__23769__auto__ = function(state_25866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23769__auto____1.call(this,state_25866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23769__auto____0;
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23769__auto____1;
return cljs$core$async$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___25900,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23882__auto__ = (function (){var statearr_25895 = f__23881__auto__.call(null);
(statearr_25895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___25900);

return statearr_25895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___25900,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25919 = [];
var len__22783__auto___25975 = arguments.length;
var i__22784__auto___25976 = (0);
while(true){
if((i__22784__auto___25976 < len__22783__auto___25975)){
args25919.push((arguments[i__22784__auto___25976]));

var G__25977 = (i__22784__auto___25976 + (1));
i__22784__auto___25976 = G__25977;
continue;
} else {
}
break;
}

var G__25921 = args25919.length;
switch (G__25921) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25919.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23880__auto___25979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___25979,out){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___25979,out){
return (function (state_25951){
var state_val_25952 = (state_25951[(1)]);
if((state_val_25952 === (7))){
var inst_25930 = (state_25951[(7)]);
var inst_25931 = (state_25951[(8)]);
var inst_25930__$1 = (state_25951[(2)]);
var inst_25931__$1 = cljs.core.nth.call(null,inst_25930__$1,(0),null);
var inst_25932 = cljs.core.nth.call(null,inst_25930__$1,(1),null);
var inst_25933 = (inst_25931__$1 == null);
var state_25951__$1 = (function (){var statearr_25953 = state_25951;
(statearr_25953[(9)] = inst_25932);

(statearr_25953[(7)] = inst_25930__$1);

(statearr_25953[(8)] = inst_25931__$1);

return statearr_25953;
})();
if(cljs.core.truth_(inst_25933)){
var statearr_25954_25980 = state_25951__$1;
(statearr_25954_25980[(1)] = (8));

} else {
var statearr_25955_25981 = state_25951__$1;
(statearr_25955_25981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (1))){
var inst_25922 = cljs.core.vec.call(null,chs);
var inst_25923 = inst_25922;
var state_25951__$1 = (function (){var statearr_25956 = state_25951;
(statearr_25956[(10)] = inst_25923);

return statearr_25956;
})();
var statearr_25957_25982 = state_25951__$1;
(statearr_25957_25982[(2)] = null);

(statearr_25957_25982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (4))){
var inst_25923 = (state_25951[(10)]);
var state_25951__$1 = state_25951;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25951__$1,(7),inst_25923);
} else {
if((state_val_25952 === (6))){
var inst_25947 = (state_25951[(2)]);
var state_25951__$1 = state_25951;
var statearr_25958_25983 = state_25951__$1;
(statearr_25958_25983[(2)] = inst_25947);

(statearr_25958_25983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (3))){
var inst_25949 = (state_25951[(2)]);
var state_25951__$1 = state_25951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25951__$1,inst_25949);
} else {
if((state_val_25952 === (2))){
var inst_25923 = (state_25951[(10)]);
var inst_25925 = cljs.core.count.call(null,inst_25923);
var inst_25926 = (inst_25925 > (0));
var state_25951__$1 = state_25951;
if(cljs.core.truth_(inst_25926)){
var statearr_25960_25984 = state_25951__$1;
(statearr_25960_25984[(1)] = (4));

} else {
var statearr_25961_25985 = state_25951__$1;
(statearr_25961_25985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (11))){
var inst_25923 = (state_25951[(10)]);
var inst_25940 = (state_25951[(2)]);
var tmp25959 = inst_25923;
var inst_25923__$1 = tmp25959;
var state_25951__$1 = (function (){var statearr_25962 = state_25951;
(statearr_25962[(11)] = inst_25940);

(statearr_25962[(10)] = inst_25923__$1);

return statearr_25962;
})();
var statearr_25963_25986 = state_25951__$1;
(statearr_25963_25986[(2)] = null);

(statearr_25963_25986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (9))){
var inst_25931 = (state_25951[(8)]);
var state_25951__$1 = state_25951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25951__$1,(11),out,inst_25931);
} else {
if((state_val_25952 === (5))){
var inst_25945 = cljs.core.async.close_BANG_.call(null,out);
var state_25951__$1 = state_25951;
var statearr_25964_25987 = state_25951__$1;
(statearr_25964_25987[(2)] = inst_25945);

(statearr_25964_25987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (10))){
var inst_25943 = (state_25951[(2)]);
var state_25951__$1 = state_25951;
var statearr_25965_25988 = state_25951__$1;
(statearr_25965_25988[(2)] = inst_25943);

(statearr_25965_25988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (8))){
var inst_25932 = (state_25951[(9)]);
var inst_25930 = (state_25951[(7)]);
var inst_25931 = (state_25951[(8)]);
var inst_25923 = (state_25951[(10)]);
var inst_25935 = (function (){var cs = inst_25923;
var vec__25928 = inst_25930;
var v = inst_25931;
var c = inst_25932;
return ((function (cs,vec__25928,v,c,inst_25932,inst_25930,inst_25931,inst_25923,state_val_25952,c__23880__auto___25979,out){
return (function (p1__25918_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25918_SHARP_);
});
;})(cs,vec__25928,v,c,inst_25932,inst_25930,inst_25931,inst_25923,state_val_25952,c__23880__auto___25979,out))
})();
var inst_25936 = cljs.core.filterv.call(null,inst_25935,inst_25923);
var inst_25923__$1 = inst_25936;
var state_25951__$1 = (function (){var statearr_25966 = state_25951;
(statearr_25966[(10)] = inst_25923__$1);

return statearr_25966;
})();
var statearr_25967_25989 = state_25951__$1;
(statearr_25967_25989[(2)] = null);

(statearr_25967_25989[(1)] = (2));


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
});})(c__23880__auto___25979,out))
;
return ((function (switch__23768__auto__,c__23880__auto___25979,out){
return (function() {
var cljs$core$async$state_machine__23769__auto__ = null;
var cljs$core$async$state_machine__23769__auto____0 = (function (){
var statearr_25971 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25971[(0)] = cljs$core$async$state_machine__23769__auto__);

(statearr_25971[(1)] = (1));

return statearr_25971;
});
var cljs$core$async$state_machine__23769__auto____1 = (function (state_25951){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_25951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e25972){if((e25972 instanceof Object)){
var ex__23772__auto__ = e25972;
var statearr_25973_25990 = state_25951;
(statearr_25973_25990[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25991 = state_25951;
state_25951 = G__25991;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$state_machine__23769__auto__ = function(state_25951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23769__auto____1.call(this,state_25951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23769__auto____0;
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23769__auto____1;
return cljs$core$async$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___25979,out))
})();
var state__23882__auto__ = (function (){var statearr_25974 = f__23881__auto__.call(null);
(statearr_25974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___25979);

return statearr_25974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___25979,out))
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
var args25992 = [];
var len__22783__auto___26041 = arguments.length;
var i__22784__auto___26042 = (0);
while(true){
if((i__22784__auto___26042 < len__22783__auto___26041)){
args25992.push((arguments[i__22784__auto___26042]));

var G__26043 = (i__22784__auto___26042 + (1));
i__22784__auto___26042 = G__26043;
continue;
} else {
}
break;
}

var G__25994 = args25992.length;
switch (G__25994) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25992.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23880__auto___26045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___26045,out){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___26045,out){
return (function (state_26018){
var state_val_26019 = (state_26018[(1)]);
if((state_val_26019 === (7))){
var inst_26000 = (state_26018[(7)]);
var inst_26000__$1 = (state_26018[(2)]);
var inst_26001 = (inst_26000__$1 == null);
var inst_26002 = cljs.core.not.call(null,inst_26001);
var state_26018__$1 = (function (){var statearr_26020 = state_26018;
(statearr_26020[(7)] = inst_26000__$1);

return statearr_26020;
})();
if(inst_26002){
var statearr_26021_26046 = state_26018__$1;
(statearr_26021_26046[(1)] = (8));

} else {
var statearr_26022_26047 = state_26018__$1;
(statearr_26022_26047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26019 === (1))){
var inst_25995 = (0);
var state_26018__$1 = (function (){var statearr_26023 = state_26018;
(statearr_26023[(8)] = inst_25995);

return statearr_26023;
})();
var statearr_26024_26048 = state_26018__$1;
(statearr_26024_26048[(2)] = null);

(statearr_26024_26048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26019 === (4))){
var state_26018__$1 = state_26018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26018__$1,(7),ch);
} else {
if((state_val_26019 === (6))){
var inst_26013 = (state_26018[(2)]);
var state_26018__$1 = state_26018;
var statearr_26025_26049 = state_26018__$1;
(statearr_26025_26049[(2)] = inst_26013);

(statearr_26025_26049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26019 === (3))){
var inst_26015 = (state_26018[(2)]);
var inst_26016 = cljs.core.async.close_BANG_.call(null,out);
var state_26018__$1 = (function (){var statearr_26026 = state_26018;
(statearr_26026[(9)] = inst_26015);

return statearr_26026;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26018__$1,inst_26016);
} else {
if((state_val_26019 === (2))){
var inst_25995 = (state_26018[(8)]);
var inst_25997 = (inst_25995 < n);
var state_26018__$1 = state_26018;
if(cljs.core.truth_(inst_25997)){
var statearr_26027_26050 = state_26018__$1;
(statearr_26027_26050[(1)] = (4));

} else {
var statearr_26028_26051 = state_26018__$1;
(statearr_26028_26051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26019 === (11))){
var inst_25995 = (state_26018[(8)]);
var inst_26005 = (state_26018[(2)]);
var inst_26006 = (inst_25995 + (1));
var inst_25995__$1 = inst_26006;
var state_26018__$1 = (function (){var statearr_26029 = state_26018;
(statearr_26029[(10)] = inst_26005);

(statearr_26029[(8)] = inst_25995__$1);

return statearr_26029;
})();
var statearr_26030_26052 = state_26018__$1;
(statearr_26030_26052[(2)] = null);

(statearr_26030_26052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26019 === (9))){
var state_26018__$1 = state_26018;
var statearr_26031_26053 = state_26018__$1;
(statearr_26031_26053[(2)] = null);

(statearr_26031_26053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26019 === (5))){
var state_26018__$1 = state_26018;
var statearr_26032_26054 = state_26018__$1;
(statearr_26032_26054[(2)] = null);

(statearr_26032_26054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26019 === (10))){
var inst_26010 = (state_26018[(2)]);
var state_26018__$1 = state_26018;
var statearr_26033_26055 = state_26018__$1;
(statearr_26033_26055[(2)] = inst_26010);

(statearr_26033_26055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26019 === (8))){
var inst_26000 = (state_26018[(7)]);
var state_26018__$1 = state_26018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26018__$1,(11),out,inst_26000);
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
});})(c__23880__auto___26045,out))
;
return ((function (switch__23768__auto__,c__23880__auto___26045,out){
return (function() {
var cljs$core$async$state_machine__23769__auto__ = null;
var cljs$core$async$state_machine__23769__auto____0 = (function (){
var statearr_26037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26037[(0)] = cljs$core$async$state_machine__23769__auto__);

(statearr_26037[(1)] = (1));

return statearr_26037;
});
var cljs$core$async$state_machine__23769__auto____1 = (function (state_26018){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_26018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e26038){if((e26038 instanceof Object)){
var ex__23772__auto__ = e26038;
var statearr_26039_26056 = state_26018;
(statearr_26039_26056[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26057 = state_26018;
state_26018 = G__26057;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$state_machine__23769__auto__ = function(state_26018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23769__auto____1.call(this,state_26018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23769__auto____0;
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23769__auto____1;
return cljs$core$async$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___26045,out))
})();
var state__23882__auto__ = (function (){var statearr_26040 = f__23881__auto__.call(null);
(statearr_26040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___26045);

return statearr_26040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___26045,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26065 = (function (map_LT_,f,ch,meta26066){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26066 = meta26066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26067,meta26066__$1){
var self__ = this;
var _26067__$1 = this;
return (new cljs.core.async.t_cljs$core$async26065(self__.map_LT_,self__.f,self__.ch,meta26066__$1));
});

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26067){
var self__ = this;
var _26067__$1 = this;
return self__.meta26066;
});

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26068 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26068 = (function (map_LT_,f,ch,meta26066,_,fn1,meta26069){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26066 = meta26066;
this._ = _;
this.fn1 = fn1;
this.meta26069 = meta26069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26070,meta26069__$1){
var self__ = this;
var _26070__$1 = this;
return (new cljs.core.async.t_cljs$core$async26068(self__.map_LT_,self__.f,self__.ch,self__.meta26066,self__._,self__.fn1,meta26069__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26070){
var self__ = this;
var _26070__$1 = this;
return self__.meta26069;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26058_SHARP_){
return f1.call(null,(((p1__26058_SHARP_ == null))?null:self__.f.call(null,p1__26058_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26068.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26066","meta26066",-810905774,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26065","cljs.core.async/t_cljs$core$async26065",1609975613,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26069","meta26069",-1370832778,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26068.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26068";

cljs.core.async.t_cljs$core$async26068.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22319__auto__,writer__22320__auto__,opt__22321__auto__){
return cljs.core._write.call(null,writer__22320__auto__,"cljs.core.async/t_cljs$core$async26068");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26068 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26068(map_LT___$1,f__$1,ch__$1,meta26066__$1,___$2,fn1__$1,meta26069){
return (new cljs.core.async.t_cljs$core$async26068(map_LT___$1,f__$1,ch__$1,meta26066__$1,___$2,fn1__$1,meta26069));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26068(self__.map_LT_,self__.f,self__.ch,self__.meta26066,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21701__auto__ = ret;
if(cljs.core.truth_(and__21701__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21701__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26066","meta26066",-810905774,null)], null);
});

cljs.core.async.t_cljs$core$async26065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26065";

cljs.core.async.t_cljs$core$async26065.cljs$lang$ctorPrWriter = (function (this__22319__auto__,writer__22320__auto__,opt__22321__auto__){
return cljs.core._write.call(null,writer__22320__auto__,"cljs.core.async/t_cljs$core$async26065");
});

cljs.core.async.__GT_t_cljs$core$async26065 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26065(map_LT___$1,f__$1,ch__$1,meta26066){
return (new cljs.core.async.t_cljs$core$async26065(map_LT___$1,f__$1,ch__$1,meta26066));
});

}

return (new cljs.core.async.t_cljs$core$async26065(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26074 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26074 = (function (map_GT_,f,ch,meta26075){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26075 = meta26075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26076,meta26075__$1){
var self__ = this;
var _26076__$1 = this;
return (new cljs.core.async.t_cljs$core$async26074(self__.map_GT_,self__.f,self__.ch,meta26075__$1));
});

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26076){
var self__ = this;
var _26076__$1 = this;
return self__.meta26075;
});

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26075","meta26075",1459113427,null)], null);
});

cljs.core.async.t_cljs$core$async26074.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26074";

cljs.core.async.t_cljs$core$async26074.cljs$lang$ctorPrWriter = (function (this__22319__auto__,writer__22320__auto__,opt__22321__auto__){
return cljs.core._write.call(null,writer__22320__auto__,"cljs.core.async/t_cljs$core$async26074");
});

cljs.core.async.__GT_t_cljs$core$async26074 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26074(map_GT___$1,f__$1,ch__$1,meta26075){
return (new cljs.core.async.t_cljs$core$async26074(map_GT___$1,f__$1,ch__$1,meta26075));
});

}

return (new cljs.core.async.t_cljs$core$async26074(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26080 = (function (filter_GT_,p,ch,meta26081){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26081 = meta26081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26082,meta26081__$1){
var self__ = this;
var _26082__$1 = this;
return (new cljs.core.async.t_cljs$core$async26080(self__.filter_GT_,self__.p,self__.ch,meta26081__$1));
});

cljs.core.async.t_cljs$core$async26080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26082){
var self__ = this;
var _26082__$1 = this;
return self__.meta26081;
});

cljs.core.async.t_cljs$core$async26080.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26080.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26080.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26080.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26080.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26080.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26080.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26081","meta26081",-823852176,null)], null);
});

cljs.core.async.t_cljs$core$async26080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26080";

cljs.core.async.t_cljs$core$async26080.cljs$lang$ctorPrWriter = (function (this__22319__auto__,writer__22320__auto__,opt__22321__auto__){
return cljs.core._write.call(null,writer__22320__auto__,"cljs.core.async/t_cljs$core$async26080");
});

cljs.core.async.__GT_t_cljs$core$async26080 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26080(filter_GT___$1,p__$1,ch__$1,meta26081){
return (new cljs.core.async.t_cljs$core$async26080(filter_GT___$1,p__$1,ch__$1,meta26081));
});

}

return (new cljs.core.async.t_cljs$core$async26080(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26083 = [];
var len__22783__auto___26127 = arguments.length;
var i__22784__auto___26128 = (0);
while(true){
if((i__22784__auto___26128 < len__22783__auto___26127)){
args26083.push((arguments[i__22784__auto___26128]));

var G__26129 = (i__22784__auto___26128 + (1));
i__22784__auto___26128 = G__26129;
continue;
} else {
}
break;
}

var G__26085 = args26083.length;
switch (G__26085) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26083.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23880__auto___26131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___26131,out){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___26131,out){
return (function (state_26106){
var state_val_26107 = (state_26106[(1)]);
if((state_val_26107 === (7))){
var inst_26102 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
var statearr_26108_26132 = state_26106__$1;
(statearr_26108_26132[(2)] = inst_26102);

(statearr_26108_26132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (1))){
var state_26106__$1 = state_26106;
var statearr_26109_26133 = state_26106__$1;
(statearr_26109_26133[(2)] = null);

(statearr_26109_26133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (4))){
var inst_26088 = (state_26106[(7)]);
var inst_26088__$1 = (state_26106[(2)]);
var inst_26089 = (inst_26088__$1 == null);
var state_26106__$1 = (function (){var statearr_26110 = state_26106;
(statearr_26110[(7)] = inst_26088__$1);

return statearr_26110;
})();
if(cljs.core.truth_(inst_26089)){
var statearr_26111_26134 = state_26106__$1;
(statearr_26111_26134[(1)] = (5));

} else {
var statearr_26112_26135 = state_26106__$1;
(statearr_26112_26135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (6))){
var inst_26088 = (state_26106[(7)]);
var inst_26093 = p.call(null,inst_26088);
var state_26106__$1 = state_26106;
if(cljs.core.truth_(inst_26093)){
var statearr_26113_26136 = state_26106__$1;
(statearr_26113_26136[(1)] = (8));

} else {
var statearr_26114_26137 = state_26106__$1;
(statearr_26114_26137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (3))){
var inst_26104 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26106__$1,inst_26104);
} else {
if((state_val_26107 === (2))){
var state_26106__$1 = state_26106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26106__$1,(4),ch);
} else {
if((state_val_26107 === (11))){
var inst_26096 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
var statearr_26115_26138 = state_26106__$1;
(statearr_26115_26138[(2)] = inst_26096);

(statearr_26115_26138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (9))){
var state_26106__$1 = state_26106;
var statearr_26116_26139 = state_26106__$1;
(statearr_26116_26139[(2)] = null);

(statearr_26116_26139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (5))){
var inst_26091 = cljs.core.async.close_BANG_.call(null,out);
var state_26106__$1 = state_26106;
var statearr_26117_26140 = state_26106__$1;
(statearr_26117_26140[(2)] = inst_26091);

(statearr_26117_26140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (10))){
var inst_26099 = (state_26106[(2)]);
var state_26106__$1 = (function (){var statearr_26118 = state_26106;
(statearr_26118[(8)] = inst_26099);

return statearr_26118;
})();
var statearr_26119_26141 = state_26106__$1;
(statearr_26119_26141[(2)] = null);

(statearr_26119_26141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (8))){
var inst_26088 = (state_26106[(7)]);
var state_26106__$1 = state_26106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26106__$1,(11),out,inst_26088);
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
});})(c__23880__auto___26131,out))
;
return ((function (switch__23768__auto__,c__23880__auto___26131,out){
return (function() {
var cljs$core$async$state_machine__23769__auto__ = null;
var cljs$core$async$state_machine__23769__auto____0 = (function (){
var statearr_26123 = [null,null,null,null,null,null,null,null,null];
(statearr_26123[(0)] = cljs$core$async$state_machine__23769__auto__);

(statearr_26123[(1)] = (1));

return statearr_26123;
});
var cljs$core$async$state_machine__23769__auto____1 = (function (state_26106){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_26106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e26124){if((e26124 instanceof Object)){
var ex__23772__auto__ = e26124;
var statearr_26125_26142 = state_26106;
(statearr_26125_26142[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26143 = state_26106;
state_26106 = G__26143;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$state_machine__23769__auto__ = function(state_26106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23769__auto____1.call(this,state_26106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23769__auto____0;
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23769__auto____1;
return cljs$core$async$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___26131,out))
})();
var state__23882__auto__ = (function (){var statearr_26126 = f__23881__auto__.call(null);
(statearr_26126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___26131);

return statearr_26126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___26131,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26144 = [];
var len__22783__auto___26147 = arguments.length;
var i__22784__auto___26148 = (0);
while(true){
if((i__22784__auto___26148 < len__22783__auto___26147)){
args26144.push((arguments[i__22784__auto___26148]));

var G__26149 = (i__22784__auto___26148 + (1));
i__22784__auto___26148 = G__26149;
continue;
} else {
}
break;
}

var G__26146 = args26144.length;
switch (G__26146) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26144.length)].join('')));

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
var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__){
return (function (state_26316){
var state_val_26317 = (state_26316[(1)]);
if((state_val_26317 === (7))){
var inst_26312 = (state_26316[(2)]);
var state_26316__$1 = state_26316;
var statearr_26318_26359 = state_26316__$1;
(statearr_26318_26359[(2)] = inst_26312);

(statearr_26318_26359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (20))){
var inst_26282 = (state_26316[(7)]);
var inst_26293 = (state_26316[(2)]);
var inst_26294 = cljs.core.next.call(null,inst_26282);
var inst_26268 = inst_26294;
var inst_26269 = null;
var inst_26270 = (0);
var inst_26271 = (0);
var state_26316__$1 = (function (){var statearr_26319 = state_26316;
(statearr_26319[(8)] = inst_26270);

(statearr_26319[(9)] = inst_26268);

(statearr_26319[(10)] = inst_26293);

(statearr_26319[(11)] = inst_26269);

(statearr_26319[(12)] = inst_26271);

return statearr_26319;
})();
var statearr_26320_26360 = state_26316__$1;
(statearr_26320_26360[(2)] = null);

(statearr_26320_26360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (1))){
var state_26316__$1 = state_26316;
var statearr_26321_26361 = state_26316__$1;
(statearr_26321_26361[(2)] = null);

(statearr_26321_26361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (4))){
var inst_26257 = (state_26316[(13)]);
var inst_26257__$1 = (state_26316[(2)]);
var inst_26258 = (inst_26257__$1 == null);
var state_26316__$1 = (function (){var statearr_26322 = state_26316;
(statearr_26322[(13)] = inst_26257__$1);

return statearr_26322;
})();
if(cljs.core.truth_(inst_26258)){
var statearr_26323_26362 = state_26316__$1;
(statearr_26323_26362[(1)] = (5));

} else {
var statearr_26324_26363 = state_26316__$1;
(statearr_26324_26363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (15))){
var state_26316__$1 = state_26316;
var statearr_26328_26364 = state_26316__$1;
(statearr_26328_26364[(2)] = null);

(statearr_26328_26364[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (21))){
var state_26316__$1 = state_26316;
var statearr_26329_26365 = state_26316__$1;
(statearr_26329_26365[(2)] = null);

(statearr_26329_26365[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (13))){
var inst_26270 = (state_26316[(8)]);
var inst_26268 = (state_26316[(9)]);
var inst_26269 = (state_26316[(11)]);
var inst_26271 = (state_26316[(12)]);
var inst_26278 = (state_26316[(2)]);
var inst_26279 = (inst_26271 + (1));
var tmp26325 = inst_26270;
var tmp26326 = inst_26268;
var tmp26327 = inst_26269;
var inst_26268__$1 = tmp26326;
var inst_26269__$1 = tmp26327;
var inst_26270__$1 = tmp26325;
var inst_26271__$1 = inst_26279;
var state_26316__$1 = (function (){var statearr_26330 = state_26316;
(statearr_26330[(8)] = inst_26270__$1);

(statearr_26330[(9)] = inst_26268__$1);

(statearr_26330[(11)] = inst_26269__$1);

(statearr_26330[(14)] = inst_26278);

(statearr_26330[(12)] = inst_26271__$1);

return statearr_26330;
})();
var statearr_26331_26366 = state_26316__$1;
(statearr_26331_26366[(2)] = null);

(statearr_26331_26366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (22))){
var state_26316__$1 = state_26316;
var statearr_26332_26367 = state_26316__$1;
(statearr_26332_26367[(2)] = null);

(statearr_26332_26367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (6))){
var inst_26257 = (state_26316[(13)]);
var inst_26266 = f.call(null,inst_26257);
var inst_26267 = cljs.core.seq.call(null,inst_26266);
var inst_26268 = inst_26267;
var inst_26269 = null;
var inst_26270 = (0);
var inst_26271 = (0);
var state_26316__$1 = (function (){var statearr_26333 = state_26316;
(statearr_26333[(8)] = inst_26270);

(statearr_26333[(9)] = inst_26268);

(statearr_26333[(11)] = inst_26269);

(statearr_26333[(12)] = inst_26271);

return statearr_26333;
})();
var statearr_26334_26368 = state_26316__$1;
(statearr_26334_26368[(2)] = null);

(statearr_26334_26368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (17))){
var inst_26282 = (state_26316[(7)]);
var inst_26286 = cljs.core.chunk_first.call(null,inst_26282);
var inst_26287 = cljs.core.chunk_rest.call(null,inst_26282);
var inst_26288 = cljs.core.count.call(null,inst_26286);
var inst_26268 = inst_26287;
var inst_26269 = inst_26286;
var inst_26270 = inst_26288;
var inst_26271 = (0);
var state_26316__$1 = (function (){var statearr_26335 = state_26316;
(statearr_26335[(8)] = inst_26270);

(statearr_26335[(9)] = inst_26268);

(statearr_26335[(11)] = inst_26269);

(statearr_26335[(12)] = inst_26271);

return statearr_26335;
})();
var statearr_26336_26369 = state_26316__$1;
(statearr_26336_26369[(2)] = null);

(statearr_26336_26369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (3))){
var inst_26314 = (state_26316[(2)]);
var state_26316__$1 = state_26316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26316__$1,inst_26314);
} else {
if((state_val_26317 === (12))){
var inst_26302 = (state_26316[(2)]);
var state_26316__$1 = state_26316;
var statearr_26337_26370 = state_26316__$1;
(statearr_26337_26370[(2)] = inst_26302);

(statearr_26337_26370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (2))){
var state_26316__$1 = state_26316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26316__$1,(4),in$);
} else {
if((state_val_26317 === (23))){
var inst_26310 = (state_26316[(2)]);
var state_26316__$1 = state_26316;
var statearr_26338_26371 = state_26316__$1;
(statearr_26338_26371[(2)] = inst_26310);

(statearr_26338_26371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (19))){
var inst_26297 = (state_26316[(2)]);
var state_26316__$1 = state_26316;
var statearr_26339_26372 = state_26316__$1;
(statearr_26339_26372[(2)] = inst_26297);

(statearr_26339_26372[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (11))){
var inst_26282 = (state_26316[(7)]);
var inst_26268 = (state_26316[(9)]);
var inst_26282__$1 = cljs.core.seq.call(null,inst_26268);
var state_26316__$1 = (function (){var statearr_26340 = state_26316;
(statearr_26340[(7)] = inst_26282__$1);

return statearr_26340;
})();
if(inst_26282__$1){
var statearr_26341_26373 = state_26316__$1;
(statearr_26341_26373[(1)] = (14));

} else {
var statearr_26342_26374 = state_26316__$1;
(statearr_26342_26374[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (9))){
var inst_26304 = (state_26316[(2)]);
var inst_26305 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26316__$1 = (function (){var statearr_26343 = state_26316;
(statearr_26343[(15)] = inst_26304);

return statearr_26343;
})();
if(cljs.core.truth_(inst_26305)){
var statearr_26344_26375 = state_26316__$1;
(statearr_26344_26375[(1)] = (21));

} else {
var statearr_26345_26376 = state_26316__$1;
(statearr_26345_26376[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (5))){
var inst_26260 = cljs.core.async.close_BANG_.call(null,out);
var state_26316__$1 = state_26316;
var statearr_26346_26377 = state_26316__$1;
(statearr_26346_26377[(2)] = inst_26260);

(statearr_26346_26377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (14))){
var inst_26282 = (state_26316[(7)]);
var inst_26284 = cljs.core.chunked_seq_QMARK_.call(null,inst_26282);
var state_26316__$1 = state_26316;
if(inst_26284){
var statearr_26347_26378 = state_26316__$1;
(statearr_26347_26378[(1)] = (17));

} else {
var statearr_26348_26379 = state_26316__$1;
(statearr_26348_26379[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (16))){
var inst_26300 = (state_26316[(2)]);
var state_26316__$1 = state_26316;
var statearr_26349_26380 = state_26316__$1;
(statearr_26349_26380[(2)] = inst_26300);

(statearr_26349_26380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (10))){
var inst_26269 = (state_26316[(11)]);
var inst_26271 = (state_26316[(12)]);
var inst_26276 = cljs.core._nth.call(null,inst_26269,inst_26271);
var state_26316__$1 = state_26316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26316__$1,(13),out,inst_26276);
} else {
if((state_val_26317 === (18))){
var inst_26282 = (state_26316[(7)]);
var inst_26291 = cljs.core.first.call(null,inst_26282);
var state_26316__$1 = state_26316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26316__$1,(20),out,inst_26291);
} else {
if((state_val_26317 === (8))){
var inst_26270 = (state_26316[(8)]);
var inst_26271 = (state_26316[(12)]);
var inst_26273 = (inst_26271 < inst_26270);
var inst_26274 = inst_26273;
var state_26316__$1 = state_26316;
if(cljs.core.truth_(inst_26274)){
var statearr_26350_26381 = state_26316__$1;
(statearr_26350_26381[(1)] = (10));

} else {
var statearr_26351_26382 = state_26316__$1;
(statearr_26351_26382[(1)] = (11));

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
});})(c__23880__auto__))
;
return ((function (switch__23768__auto__,c__23880__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23769__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23769__auto____0 = (function (){
var statearr_26355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26355[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23769__auto__);

(statearr_26355[(1)] = (1));

return statearr_26355;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23769__auto____1 = (function (state_26316){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_26316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e26356){if((e26356 instanceof Object)){
var ex__23772__auto__ = e26356;
var statearr_26357_26383 = state_26316;
(statearr_26357_26383[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26384 = state_26316;
state_26316 = G__26384;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23769__auto__ = function(state_26316){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23769__auto____1.call(this,state_26316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23769__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23769__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__))
})();
var state__23882__auto__ = (function (){var statearr_26358 = f__23881__auto__.call(null);
(statearr_26358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_26358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__))
);

return c__23880__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26385 = [];
var len__22783__auto___26388 = arguments.length;
var i__22784__auto___26389 = (0);
while(true){
if((i__22784__auto___26389 < len__22783__auto___26388)){
args26385.push((arguments[i__22784__auto___26389]));

var G__26390 = (i__22784__auto___26389 + (1));
i__22784__auto___26389 = G__26390;
continue;
} else {
}
break;
}

var G__26387 = args26385.length;
switch (G__26387) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26385.length)].join('')));

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
var args26392 = [];
var len__22783__auto___26395 = arguments.length;
var i__22784__auto___26396 = (0);
while(true){
if((i__22784__auto___26396 < len__22783__auto___26395)){
args26392.push((arguments[i__22784__auto___26396]));

var G__26397 = (i__22784__auto___26396 + (1));
i__22784__auto___26396 = G__26397;
continue;
} else {
}
break;
}

var G__26394 = args26392.length;
switch (G__26394) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26392.length)].join('')));

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
var args26399 = [];
var len__22783__auto___26450 = arguments.length;
var i__22784__auto___26451 = (0);
while(true){
if((i__22784__auto___26451 < len__22783__auto___26450)){
args26399.push((arguments[i__22784__auto___26451]));

var G__26452 = (i__22784__auto___26451 + (1));
i__22784__auto___26451 = G__26452;
continue;
} else {
}
break;
}

var G__26401 = args26399.length;
switch (G__26401) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26399.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23880__auto___26454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___26454,out){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___26454,out){
return (function (state_26425){
var state_val_26426 = (state_26425[(1)]);
if((state_val_26426 === (7))){
var inst_26420 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26427_26455 = state_26425__$1;
(statearr_26427_26455[(2)] = inst_26420);

(statearr_26427_26455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (1))){
var inst_26402 = null;
var state_26425__$1 = (function (){var statearr_26428 = state_26425;
(statearr_26428[(7)] = inst_26402);

return statearr_26428;
})();
var statearr_26429_26456 = state_26425__$1;
(statearr_26429_26456[(2)] = null);

(statearr_26429_26456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (4))){
var inst_26405 = (state_26425[(8)]);
var inst_26405__$1 = (state_26425[(2)]);
var inst_26406 = (inst_26405__$1 == null);
var inst_26407 = cljs.core.not.call(null,inst_26406);
var state_26425__$1 = (function (){var statearr_26430 = state_26425;
(statearr_26430[(8)] = inst_26405__$1);

return statearr_26430;
})();
if(inst_26407){
var statearr_26431_26457 = state_26425__$1;
(statearr_26431_26457[(1)] = (5));

} else {
var statearr_26432_26458 = state_26425__$1;
(statearr_26432_26458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (6))){
var state_26425__$1 = state_26425;
var statearr_26433_26459 = state_26425__$1;
(statearr_26433_26459[(2)] = null);

(statearr_26433_26459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (3))){
var inst_26422 = (state_26425[(2)]);
var inst_26423 = cljs.core.async.close_BANG_.call(null,out);
var state_26425__$1 = (function (){var statearr_26434 = state_26425;
(statearr_26434[(9)] = inst_26422);

return statearr_26434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26425__$1,inst_26423);
} else {
if((state_val_26426 === (2))){
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(4),ch);
} else {
if((state_val_26426 === (11))){
var inst_26405 = (state_26425[(8)]);
var inst_26414 = (state_26425[(2)]);
var inst_26402 = inst_26405;
var state_26425__$1 = (function (){var statearr_26435 = state_26425;
(statearr_26435[(10)] = inst_26414);

(statearr_26435[(7)] = inst_26402);

return statearr_26435;
})();
var statearr_26436_26460 = state_26425__$1;
(statearr_26436_26460[(2)] = null);

(statearr_26436_26460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (9))){
var inst_26405 = (state_26425[(8)]);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26425__$1,(11),out,inst_26405);
} else {
if((state_val_26426 === (5))){
var inst_26405 = (state_26425[(8)]);
var inst_26402 = (state_26425[(7)]);
var inst_26409 = cljs.core._EQ_.call(null,inst_26405,inst_26402);
var state_26425__$1 = state_26425;
if(inst_26409){
var statearr_26438_26461 = state_26425__$1;
(statearr_26438_26461[(1)] = (8));

} else {
var statearr_26439_26462 = state_26425__$1;
(statearr_26439_26462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (10))){
var inst_26417 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26440_26463 = state_26425__$1;
(statearr_26440_26463[(2)] = inst_26417);

(statearr_26440_26463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (8))){
var inst_26402 = (state_26425[(7)]);
var tmp26437 = inst_26402;
var inst_26402__$1 = tmp26437;
var state_26425__$1 = (function (){var statearr_26441 = state_26425;
(statearr_26441[(7)] = inst_26402__$1);

return statearr_26441;
})();
var statearr_26442_26464 = state_26425__$1;
(statearr_26442_26464[(2)] = null);

(statearr_26442_26464[(1)] = (2));


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
});})(c__23880__auto___26454,out))
;
return ((function (switch__23768__auto__,c__23880__auto___26454,out){
return (function() {
var cljs$core$async$state_machine__23769__auto__ = null;
var cljs$core$async$state_machine__23769__auto____0 = (function (){
var statearr_26446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26446[(0)] = cljs$core$async$state_machine__23769__auto__);

(statearr_26446[(1)] = (1));

return statearr_26446;
});
var cljs$core$async$state_machine__23769__auto____1 = (function (state_26425){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_26425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e26447){if((e26447 instanceof Object)){
var ex__23772__auto__ = e26447;
var statearr_26448_26465 = state_26425;
(statearr_26448_26465[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26466 = state_26425;
state_26425 = G__26466;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$state_machine__23769__auto__ = function(state_26425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23769__auto____1.call(this,state_26425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23769__auto____0;
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23769__auto____1;
return cljs$core$async$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___26454,out))
})();
var state__23882__auto__ = (function (){var statearr_26449 = f__23881__auto__.call(null);
(statearr_26449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___26454);

return statearr_26449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___26454,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26467 = [];
var len__22783__auto___26537 = arguments.length;
var i__22784__auto___26538 = (0);
while(true){
if((i__22784__auto___26538 < len__22783__auto___26537)){
args26467.push((arguments[i__22784__auto___26538]));

var G__26539 = (i__22784__auto___26538 + (1));
i__22784__auto___26538 = G__26539;
continue;
} else {
}
break;
}

var G__26469 = args26467.length;
switch (G__26469) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26467.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23880__auto___26541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___26541,out){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___26541,out){
return (function (state_26507){
var state_val_26508 = (state_26507[(1)]);
if((state_val_26508 === (7))){
var inst_26503 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
var statearr_26509_26542 = state_26507__$1;
(statearr_26509_26542[(2)] = inst_26503);

(statearr_26509_26542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (1))){
var inst_26470 = (new Array(n));
var inst_26471 = inst_26470;
var inst_26472 = (0);
var state_26507__$1 = (function (){var statearr_26510 = state_26507;
(statearr_26510[(7)] = inst_26472);

(statearr_26510[(8)] = inst_26471);

return statearr_26510;
})();
var statearr_26511_26543 = state_26507__$1;
(statearr_26511_26543[(2)] = null);

(statearr_26511_26543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (4))){
var inst_26475 = (state_26507[(9)]);
var inst_26475__$1 = (state_26507[(2)]);
var inst_26476 = (inst_26475__$1 == null);
var inst_26477 = cljs.core.not.call(null,inst_26476);
var state_26507__$1 = (function (){var statearr_26512 = state_26507;
(statearr_26512[(9)] = inst_26475__$1);

return statearr_26512;
})();
if(inst_26477){
var statearr_26513_26544 = state_26507__$1;
(statearr_26513_26544[(1)] = (5));

} else {
var statearr_26514_26545 = state_26507__$1;
(statearr_26514_26545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (15))){
var inst_26497 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
var statearr_26515_26546 = state_26507__$1;
(statearr_26515_26546[(2)] = inst_26497);

(statearr_26515_26546[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (13))){
var state_26507__$1 = state_26507;
var statearr_26516_26547 = state_26507__$1;
(statearr_26516_26547[(2)] = null);

(statearr_26516_26547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (6))){
var inst_26472 = (state_26507[(7)]);
var inst_26493 = (inst_26472 > (0));
var state_26507__$1 = state_26507;
if(cljs.core.truth_(inst_26493)){
var statearr_26517_26548 = state_26507__$1;
(statearr_26517_26548[(1)] = (12));

} else {
var statearr_26518_26549 = state_26507__$1;
(statearr_26518_26549[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (3))){
var inst_26505 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26507__$1,inst_26505);
} else {
if((state_val_26508 === (12))){
var inst_26471 = (state_26507[(8)]);
var inst_26495 = cljs.core.vec.call(null,inst_26471);
var state_26507__$1 = state_26507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26507__$1,(15),out,inst_26495);
} else {
if((state_val_26508 === (2))){
var state_26507__$1 = state_26507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26507__$1,(4),ch);
} else {
if((state_val_26508 === (11))){
var inst_26487 = (state_26507[(2)]);
var inst_26488 = (new Array(n));
var inst_26471 = inst_26488;
var inst_26472 = (0);
var state_26507__$1 = (function (){var statearr_26519 = state_26507;
(statearr_26519[(10)] = inst_26487);

(statearr_26519[(7)] = inst_26472);

(statearr_26519[(8)] = inst_26471);

return statearr_26519;
})();
var statearr_26520_26550 = state_26507__$1;
(statearr_26520_26550[(2)] = null);

(statearr_26520_26550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (9))){
var inst_26471 = (state_26507[(8)]);
var inst_26485 = cljs.core.vec.call(null,inst_26471);
var state_26507__$1 = state_26507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26507__$1,(11),out,inst_26485);
} else {
if((state_val_26508 === (5))){
var inst_26472 = (state_26507[(7)]);
var inst_26480 = (state_26507[(11)]);
var inst_26471 = (state_26507[(8)]);
var inst_26475 = (state_26507[(9)]);
var inst_26479 = (inst_26471[inst_26472] = inst_26475);
var inst_26480__$1 = (inst_26472 + (1));
var inst_26481 = (inst_26480__$1 < n);
var state_26507__$1 = (function (){var statearr_26521 = state_26507;
(statearr_26521[(12)] = inst_26479);

(statearr_26521[(11)] = inst_26480__$1);

return statearr_26521;
})();
if(cljs.core.truth_(inst_26481)){
var statearr_26522_26551 = state_26507__$1;
(statearr_26522_26551[(1)] = (8));

} else {
var statearr_26523_26552 = state_26507__$1;
(statearr_26523_26552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (14))){
var inst_26500 = (state_26507[(2)]);
var inst_26501 = cljs.core.async.close_BANG_.call(null,out);
var state_26507__$1 = (function (){var statearr_26525 = state_26507;
(statearr_26525[(13)] = inst_26500);

return statearr_26525;
})();
var statearr_26526_26553 = state_26507__$1;
(statearr_26526_26553[(2)] = inst_26501);

(statearr_26526_26553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (10))){
var inst_26491 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
var statearr_26527_26554 = state_26507__$1;
(statearr_26527_26554[(2)] = inst_26491);

(statearr_26527_26554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (8))){
var inst_26480 = (state_26507[(11)]);
var inst_26471 = (state_26507[(8)]);
var tmp26524 = inst_26471;
var inst_26471__$1 = tmp26524;
var inst_26472 = inst_26480;
var state_26507__$1 = (function (){var statearr_26528 = state_26507;
(statearr_26528[(7)] = inst_26472);

(statearr_26528[(8)] = inst_26471__$1);

return statearr_26528;
})();
var statearr_26529_26555 = state_26507__$1;
(statearr_26529_26555[(2)] = null);

(statearr_26529_26555[(1)] = (2));


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
});})(c__23880__auto___26541,out))
;
return ((function (switch__23768__auto__,c__23880__auto___26541,out){
return (function() {
var cljs$core$async$state_machine__23769__auto__ = null;
var cljs$core$async$state_machine__23769__auto____0 = (function (){
var statearr_26533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26533[(0)] = cljs$core$async$state_machine__23769__auto__);

(statearr_26533[(1)] = (1));

return statearr_26533;
});
var cljs$core$async$state_machine__23769__auto____1 = (function (state_26507){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_26507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e26534){if((e26534 instanceof Object)){
var ex__23772__auto__ = e26534;
var statearr_26535_26556 = state_26507;
(statearr_26535_26556[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26557 = state_26507;
state_26507 = G__26557;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$state_machine__23769__auto__ = function(state_26507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23769__auto____1.call(this,state_26507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23769__auto____0;
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23769__auto____1;
return cljs$core$async$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___26541,out))
})();
var state__23882__auto__ = (function (){var statearr_26536 = f__23881__auto__.call(null);
(statearr_26536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___26541);

return statearr_26536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___26541,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26558 = [];
var len__22783__auto___26632 = arguments.length;
var i__22784__auto___26633 = (0);
while(true){
if((i__22784__auto___26633 < len__22783__auto___26632)){
args26558.push((arguments[i__22784__auto___26633]));

var G__26634 = (i__22784__auto___26633 + (1));
i__22784__auto___26633 = G__26634;
continue;
} else {
}
break;
}

var G__26560 = args26558.length;
switch (G__26560) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26558.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23880__auto___26636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___26636,out){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___26636,out){
return (function (state_26602){
var state_val_26603 = (state_26602[(1)]);
if((state_val_26603 === (7))){
var inst_26598 = (state_26602[(2)]);
var state_26602__$1 = state_26602;
var statearr_26604_26637 = state_26602__$1;
(statearr_26604_26637[(2)] = inst_26598);

(statearr_26604_26637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (1))){
var inst_26561 = [];
var inst_26562 = inst_26561;
var inst_26563 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26602__$1 = (function (){var statearr_26605 = state_26602;
(statearr_26605[(7)] = inst_26563);

(statearr_26605[(8)] = inst_26562);

return statearr_26605;
})();
var statearr_26606_26638 = state_26602__$1;
(statearr_26606_26638[(2)] = null);

(statearr_26606_26638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (4))){
var inst_26566 = (state_26602[(9)]);
var inst_26566__$1 = (state_26602[(2)]);
var inst_26567 = (inst_26566__$1 == null);
var inst_26568 = cljs.core.not.call(null,inst_26567);
var state_26602__$1 = (function (){var statearr_26607 = state_26602;
(statearr_26607[(9)] = inst_26566__$1);

return statearr_26607;
})();
if(inst_26568){
var statearr_26608_26639 = state_26602__$1;
(statearr_26608_26639[(1)] = (5));

} else {
var statearr_26609_26640 = state_26602__$1;
(statearr_26609_26640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (15))){
var inst_26592 = (state_26602[(2)]);
var state_26602__$1 = state_26602;
var statearr_26610_26641 = state_26602__$1;
(statearr_26610_26641[(2)] = inst_26592);

(statearr_26610_26641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (13))){
var state_26602__$1 = state_26602;
var statearr_26611_26642 = state_26602__$1;
(statearr_26611_26642[(2)] = null);

(statearr_26611_26642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (6))){
var inst_26562 = (state_26602[(8)]);
var inst_26587 = inst_26562.length;
var inst_26588 = (inst_26587 > (0));
var state_26602__$1 = state_26602;
if(cljs.core.truth_(inst_26588)){
var statearr_26612_26643 = state_26602__$1;
(statearr_26612_26643[(1)] = (12));

} else {
var statearr_26613_26644 = state_26602__$1;
(statearr_26613_26644[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (3))){
var inst_26600 = (state_26602[(2)]);
var state_26602__$1 = state_26602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26602__$1,inst_26600);
} else {
if((state_val_26603 === (12))){
var inst_26562 = (state_26602[(8)]);
var inst_26590 = cljs.core.vec.call(null,inst_26562);
var state_26602__$1 = state_26602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26602__$1,(15),out,inst_26590);
} else {
if((state_val_26603 === (2))){
var state_26602__$1 = state_26602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26602__$1,(4),ch);
} else {
if((state_val_26603 === (11))){
var inst_26566 = (state_26602[(9)]);
var inst_26570 = (state_26602[(10)]);
var inst_26580 = (state_26602[(2)]);
var inst_26581 = [];
var inst_26582 = inst_26581.push(inst_26566);
var inst_26562 = inst_26581;
var inst_26563 = inst_26570;
var state_26602__$1 = (function (){var statearr_26614 = state_26602;
(statearr_26614[(11)] = inst_26580);

(statearr_26614[(7)] = inst_26563);

(statearr_26614[(12)] = inst_26582);

(statearr_26614[(8)] = inst_26562);

return statearr_26614;
})();
var statearr_26615_26645 = state_26602__$1;
(statearr_26615_26645[(2)] = null);

(statearr_26615_26645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (9))){
var inst_26562 = (state_26602[(8)]);
var inst_26578 = cljs.core.vec.call(null,inst_26562);
var state_26602__$1 = state_26602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26602__$1,(11),out,inst_26578);
} else {
if((state_val_26603 === (5))){
var inst_26563 = (state_26602[(7)]);
var inst_26566 = (state_26602[(9)]);
var inst_26570 = (state_26602[(10)]);
var inst_26570__$1 = f.call(null,inst_26566);
var inst_26571 = cljs.core._EQ_.call(null,inst_26570__$1,inst_26563);
var inst_26572 = cljs.core.keyword_identical_QMARK_.call(null,inst_26563,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26573 = (inst_26571) || (inst_26572);
var state_26602__$1 = (function (){var statearr_26616 = state_26602;
(statearr_26616[(10)] = inst_26570__$1);

return statearr_26616;
})();
if(cljs.core.truth_(inst_26573)){
var statearr_26617_26646 = state_26602__$1;
(statearr_26617_26646[(1)] = (8));

} else {
var statearr_26618_26647 = state_26602__$1;
(statearr_26618_26647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (14))){
var inst_26595 = (state_26602[(2)]);
var inst_26596 = cljs.core.async.close_BANG_.call(null,out);
var state_26602__$1 = (function (){var statearr_26620 = state_26602;
(statearr_26620[(13)] = inst_26595);

return statearr_26620;
})();
var statearr_26621_26648 = state_26602__$1;
(statearr_26621_26648[(2)] = inst_26596);

(statearr_26621_26648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (10))){
var inst_26585 = (state_26602[(2)]);
var state_26602__$1 = state_26602;
var statearr_26622_26649 = state_26602__$1;
(statearr_26622_26649[(2)] = inst_26585);

(statearr_26622_26649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (8))){
var inst_26566 = (state_26602[(9)]);
var inst_26562 = (state_26602[(8)]);
var inst_26570 = (state_26602[(10)]);
var inst_26575 = inst_26562.push(inst_26566);
var tmp26619 = inst_26562;
var inst_26562__$1 = tmp26619;
var inst_26563 = inst_26570;
var state_26602__$1 = (function (){var statearr_26623 = state_26602;
(statearr_26623[(7)] = inst_26563);

(statearr_26623[(14)] = inst_26575);

(statearr_26623[(8)] = inst_26562__$1);

return statearr_26623;
})();
var statearr_26624_26650 = state_26602__$1;
(statearr_26624_26650[(2)] = null);

(statearr_26624_26650[(1)] = (2));


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
});})(c__23880__auto___26636,out))
;
return ((function (switch__23768__auto__,c__23880__auto___26636,out){
return (function() {
var cljs$core$async$state_machine__23769__auto__ = null;
var cljs$core$async$state_machine__23769__auto____0 = (function (){
var statearr_26628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26628[(0)] = cljs$core$async$state_machine__23769__auto__);

(statearr_26628[(1)] = (1));

return statearr_26628;
});
var cljs$core$async$state_machine__23769__auto____1 = (function (state_26602){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_26602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e26629){if((e26629 instanceof Object)){
var ex__23772__auto__ = e26629;
var statearr_26630_26651 = state_26602;
(statearr_26630_26651[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26652 = state_26602;
state_26602 = G__26652;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
cljs$core$async$state_machine__23769__auto__ = function(state_26602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23769__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23769__auto____1.call(this,state_26602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23769__auto____0;
cljs$core$async$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23769__auto____1;
return cljs$core$async$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___26636,out))
})();
var state__23882__auto__ = (function (){var statearr_26631 = f__23881__auto__.call(null);
(statearr_26631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___26636);

return statearr_26631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___26636,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1467258278841