// Compiled by ClojureScript 0.0-2665 {}
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');

clojure.browser.event.IEventType = (function (){var obj49343 = {};
return obj49343;
})();

clojure.browser.event.event_types = cljs.core.with_meta((function event_types(this$){
if((function (){var and__17869__auto__ = this$;
if(and__17869__auto__){
return this$.clojure$browser$event$IEventType$event_types$arity$1;
} else {
return and__17869__auto__;
}
})()){
return this$.clojure$browser$event$IEventType$event_types$arity$1(this$);
} else {
var x__18525__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17881__auto__ = (clojure.browser.event.event_types[goog.typeOf(x__18525__auto__)]);
if(or__17881__auto__){
return or__17881__auto__;
} else {
var or__17881__auto____$1 = (clojure.browser.event.event_types["_"]);
if(or__17881__auto____$1){
return or__17881__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEventType.event-types",this$);
}
}
})().call(null,this$);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$ = true;

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__49344){
var vec__49345 = p__49344;
var k = cljs.core.nth.call(null,vec__49345,(0),null);
var v = cljs.core.nth.call(null,vec__49345,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = true;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__49346){
var vec__49347 = p__49346;
var k = cljs.core.nth.call(null,vec__49347,(0),null);
var v = cljs.core.nth.call(null,vec__49347,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
} else {
}
clojure.browser.event.listen = cljs.core.with_meta((function() {
var listen = null;
var listen__3 = (function (src,type,fn){
return listen.call(null,src,type,fn,false);
});
var listen__4 = (function (src,type,fn,capture_QMARK_){
return goog.events.listen(src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
listen = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return listen__3.call(this,src,type,fn);
case 4:
return listen__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen.cljs$core$IFn$_invoke$arity$3 = listen__3;
listen.cljs$core$IFn$_invoke$arity$4 = listen__4;
return listen;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
clojure.browser.event.listen_once = cljs.core.with_meta((function() {
var listen_once = null;
var listen_once__3 = (function (src,type,fn){
return listen_once.call(null,src,type,fn,false);
});
var listen_once__4 = (function (src,type,fn,capture_QMARK_){
return goog.events.listenOnce(src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
listen_once = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return listen_once__3.call(this,src,type,fn);
case 4:
return listen_once__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once.cljs$core$IFn$_invoke$arity$3 = listen_once__3;
listen_once.cljs$core$IFn$_invoke$arity$4 = listen_once__4;
return listen_once;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
clojure.browser.event.unlisten = cljs.core.with_meta((function() {
var unlisten = null;
var unlisten__3 = (function (src,type,fn){
return unlisten.call(null,src,type,fn,false);
});
var unlisten__4 = (function (src,type,fn,capture_QMARK_){
return goog.events.unlisten(src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
unlisten = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return unlisten__3.call(this,src,type,fn);
case 4:
return unlisten__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten.cljs$core$IFn$_invoke$arity$3 = unlisten__3;
unlisten.cljs$core$IFn$_invoke$arity$4 = unlisten__4;
return unlisten;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
clojure.browser.event.unlisten_by_key = cljs.core.with_meta((function unlisten_by_key(key){
return goog.events.unlistenByKey(key);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
clojure.browser.event.dispatch_event = cljs.core.with_meta((function dispatch_event(src,event){
return goog.events.dispatchEvent(src,event);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
clojure.browser.event.expose = cljs.core.with_meta((function expose(e){
return goog.events.expose(e);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
clojure.browser.event.fire_listeners = cljs.core.with_meta((function fire_listeners(obj,type,capture,event){
return null;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
clojure.browser.event.total_listener_count = cljs.core.with_meta((function total_listener_count(){
return goog.events.getTotalListenerCount();
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
clojure.browser.event.get_listener = cljs.core.with_meta((function get_listener(src,type,listener,opt_capt,opt_handler){
return null;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
clojure.browser.event.all_listeners = cljs.core.with_meta((function all_listeners(obj,type,capture){
return null;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
clojure.browser.event.unique_event_id = cljs.core.with_meta((function unique_event_id(event_type){
return null;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
clojure.browser.event.has_listener = cljs.core.with_meta((function has_listener(obj,opt_type,opt_capture){
return null;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
clojure.browser.event.remove_all = cljs.core.with_meta((function remove_all(opt_obj,opt_type,opt_capt){
return null;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
