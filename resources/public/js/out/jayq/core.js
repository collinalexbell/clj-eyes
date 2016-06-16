// Compiled by ClojureScript 1.8.51 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4655__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4655__auto__)){
var cm = temp__4655__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args29468 = [];
var len__22777__auto___29471 = arguments.length;
var i__22778__auto___29472 = (0);
while(true){
if((i__22778__auto___29472 < len__22777__auto___29471)){
args29468.push((arguments[i__22778__auto___29472]));

var G__29473 = (i__22778__auto___29472 + (1));
i__22778__auto___29472 = G__29473;
continue;
} else {
}
break;
}

var G__29470 = args29468.length;
switch (G__29470) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29468.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__21707__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__29476 = null;
var G__29476__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__29476__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__29476 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29476__2.call(this,self__,k);
case 3:
return G__29476__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29476.cljs$core$IFn$_invoke$arity$2 = G__29476__2;
G__29476.cljs$core$IFn$_invoke$arity$3 = G__29476__3;
return G__29476;
})()
;

jQuery.prototype.apply = (function (self__,args29475){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29475)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29482 = arguments.length;
var i__22778__auto___29483 = (0);
while(true){
if((i__22778__auto___29483 < len__22777__auto___29482)){
args__22784__auto__.push((arguments[i__22778__auto___29483]));

var G__29484 = (i__22778__auto___29483 + (1));
i__22778__auto___29483 = G__29484;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((2) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22785__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__29480){
var vec__29481 = p__29480;
var speed = cljs.core.nth.call(null,vec__29481,(0),null);
var on_finish = cljs.core.nth.call(null,vec__29481,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq29477){
var G__29478 = cljs.core.first.call(null,seq29477);
var seq29477__$1 = cljs.core.next.call(null,seq29477);
var G__29479 = cljs.core.first.call(null,seq29477__$1);
var seq29477__$2 = cljs.core.next.call(null,seq29477__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__29478,G__29479,seq29477__$2);
});
jayq.core.text = (function jayq$core$text(var_args){
var args29485 = [];
var len__22777__auto___29488 = arguments.length;
var i__22778__auto___29489 = (0);
while(true){
if((i__22778__auto___29489 < len__22777__auto___29488)){
args29485.push((arguments[i__22778__auto___29489]));

var G__29490 = (i__22778__auto___29489 + (1));
i__22778__auto___29489 = G__29490;
continue;
} else {
}
break;
}

var G__29487 = args29485.length;
switch (G__29487) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29485.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;
jayq.core.css = (function jayq$core$css(var_args){
var args29492 = [];
var len__22777__auto___29495 = arguments.length;
var i__22778__auto___29496 = (0);
while(true){
if((i__22778__auto___29496 < len__22777__auto___29495)){
args29492.push((arguments[i__22778__auto___29496]));

var G__29497 = (i__22778__auto___29496 + (1));
i__22778__auto___29496 = G__29497;
continue;
} else {
}
break;
}

var G__29494 = args29492.length;
switch (G__29494) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29492.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;
jayq.core.attr = (function jayq$core$attr(var_args){
var args29499 = [];
var len__22777__auto___29502 = arguments.length;
var i__22778__auto___29503 = (0);
while(true){
if((i__22778__auto___29503 < len__22777__auto___29502)){
args29499.push((arguments[i__22778__auto___29503]));

var G__29504 = (i__22778__auto___29503 + (1));
i__22778__auto___29503 = G__29504;
continue;
} else {
}
break;
}

var G__29501 = args29499.length;
switch (G__29501) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29499.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;
jayq.core.prop = (function jayq$core$prop(var_args){
var args29506 = [];
var len__22777__auto___29509 = arguments.length;
var i__22778__auto___29510 = (0);
while(true){
if((i__22778__auto___29510 < len__22777__auto___29509)){
args29506.push((arguments[i__22778__auto___29510]));

var G__29511 = (i__22778__auto___29510 + (1));
i__22778__auto___29510 = G__29511;
continue;
} else {
}
break;
}

var G__29508 = args29506.length;
switch (G__29508) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29506.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;
jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args29513 = [];
var len__22777__auto___29516 = arguments.length;
var i__22778__auto___29517 = (0);
while(true){
if((i__22778__auto___29517 < len__22777__auto___29516)){
args29513.push((arguments[i__22778__auto___29517]));

var G__29518 = (i__22778__auto___29517 + (1));
i__22778__auto___29517 = G__29518;
continue;
} else {
}
break;
}

var G__29515 = args29513.length;
switch (G__29515) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29513.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args29520 = [];
var len__22777__auto___29523 = arguments.length;
var i__22778__auto___29524 = (0);
while(true){
if((i__22778__auto___29524 < len__22777__auto___29523)){
args29520.push((arguments[i__22778__auto___29524]));

var G__29525 = (i__22778__auto___29524 + (1));
i__22778__auto___29524 = G__29525;
continue;
} else {
}
break;
}

var G__29522 = args29520.length;
switch (G__29522) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29520.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;
jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args29527 = [];
var len__22777__auto___29530 = arguments.length;
var i__22778__auto___29531 = (0);
while(true){
if((i__22778__auto___29531 < len__22777__auto___29530)){
args29527.push((arguments[i__22778__auto___29531]));

var G__29532 = (i__22778__auto___29531 + (1));
i__22778__auto___29531 = G__29532;
continue;
} else {
}
break;
}

var G__29529 = args29527.length;
switch (G__29529) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29527.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;
jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29538 = arguments.length;
var i__22778__auto___29539 = (0);
while(true){
if((i__22778__auto___29539 < len__22777__auto___29538)){
args__22784__auto__.push((arguments[i__22778__auto___29539]));

var G__29540 = (i__22778__auto___29539 + (1));
i__22778__auto___29539 = G__29540;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__29536){
var vec__29537 = p__29536;
var speed = cljs.core.nth.call(null,vec__29537,(0),null);
var on_finish = cljs.core.nth.call(null,vec__29537,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq29534){
var G__29535 = cljs.core.first.call(null,seq29534);
var seq29534__$1 = cljs.core.next.call(null,seq29534);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__29535,seq29534__$1);
});
jayq.core.show = (function jayq$core$show(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29545 = arguments.length;
var i__22778__auto___29546 = (0);
while(true){
if((i__22778__auto___29546 < len__22777__auto___29545)){
args__22784__auto__.push((arguments[i__22778__auto___29546]));

var G__29547 = (i__22778__auto___29546 + (1));
i__22778__auto___29546 = G__29547;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__29543){
var vec__29544 = p__29543;
var speed = cljs.core.nth.call(null,vec__29544,(0),null);
var on_finish = cljs.core.nth.call(null,vec__29544,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq29541){
var G__29542 = cljs.core.first.call(null,seq29541);
var seq29541__$1 = cljs.core.next.call(null,seq29541);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__29542,seq29541__$1);
});
jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29552 = arguments.length;
var i__22778__auto___29553 = (0);
while(true){
if((i__22778__auto___29553 < len__22777__auto___29552)){
args__22784__auto__.push((arguments[i__22778__auto___29553]));

var G__29554 = (i__22778__auto___29553 + (1));
i__22778__auto___29553 = G__29554;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__29550){
var vec__29551 = p__29550;
var speed = cljs.core.nth.call(null,vec__29551,(0),null);
var on_finish = cljs.core.nth.call(null,vec__29551,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq29548){
var G__29549 = cljs.core.first.call(null,seq29548);
var seq29548__$1 = cljs.core.next.call(null,seq29548);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__29549,seq29548__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29559 = arguments.length;
var i__22778__auto___29560 = (0);
while(true){
if((i__22778__auto___29560 < len__22777__auto___29559)){
args__22784__auto__.push((arguments[i__22778__auto___29560]));

var G__29561 = (i__22778__auto___29560 + (1));
i__22778__auto___29560 = G__29561;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__29557){
var vec__29558 = p__29557;
var speed = cljs.core.nth.call(null,vec__29558,(0),null);
var on_finish = cljs.core.nth.call(null,vec__29558,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq29555){
var G__29556 = cljs.core.first.call(null,seq29555);
var seq29555__$1 = cljs.core.next.call(null,seq29555);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__29556,seq29555__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29566 = arguments.length;
var i__22778__auto___29567 = (0);
while(true){
if((i__22778__auto___29567 < len__22777__auto___29566)){
args__22784__auto__.push((arguments[i__22778__auto___29567]));

var G__29568 = (i__22778__auto___29567 + (1));
i__22778__auto___29567 = G__29568;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__29564){
var vec__29565 = p__29564;
var speed = cljs.core.nth.call(null,vec__29565,(0),null);
var on_finish = cljs.core.nth.call(null,vec__29565,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq29562){
var G__29563 = cljs.core.first.call(null,seq29562);
var seq29562__$1 = cljs.core.next.call(null,seq29562);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__29563,seq29562__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29573 = arguments.length;
var i__22778__auto___29574 = (0);
while(true){
if((i__22778__auto___29574 < len__22777__auto___29573)){
args__22784__auto__.push((arguments[i__22778__auto___29574]));

var G__29575 = (i__22778__auto___29574 + (1));
i__22778__auto___29574 = G__29575;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__29571){
var vec__29572 = p__29571;
var speed = cljs.core.nth.call(null,vec__29572,(0),null);
var on_finish = cljs.core.nth.call(null,vec__29572,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq29569){
var G__29570 = cljs.core.first.call(null,seq29569);
var seq29569__$1 = cljs.core.next.call(null,seq29569);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__29570,seq29569__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29580 = arguments.length;
var i__22778__auto___29581 = (0);
while(true){
if((i__22778__auto___29581 < len__22777__auto___29580)){
args__22784__auto__.push((arguments[i__22778__auto___29581]));

var G__29582 = (i__22778__auto___29581 + (1));
i__22778__auto___29581 = G__29582;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__29578){
var vec__29579 = p__29578;
var speed = cljs.core.nth.call(null,vec__29579,(0),null);
var on_finish = cljs.core.nth.call(null,vec__29579,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq29576){
var G__29577 = cljs.core.first.call(null,seq29576);
var seq29576__$1 = cljs.core.next.call(null,seq29576);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__29577,seq29576__$1);
});
jayq.core.siblings = (function jayq$core$siblings(var_args){
var args29583 = [];
var len__22777__auto___29586 = arguments.length;
var i__22778__auto___29587 = (0);
while(true){
if((i__22778__auto___29587 < len__22777__auto___29586)){
args29583.push((arguments[i__22778__auto___29587]));

var G__29588 = (i__22778__auto___29587 + (1));
i__22778__auto___29587 = G__29588;
continue;
} else {
}
break;
}

var G__29585 = args29583.length;
switch (G__29585) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29583.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;
jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args29590 = [];
var len__22777__auto___29593 = arguments.length;
var i__22778__auto___29594 = (0);
while(true){
if((i__22778__auto___29594 < len__22777__auto___29593)){
args29590.push((arguments[i__22778__auto___29594]));

var G__29595 = (i__22778__auto___29594 + (1));
i__22778__auto___29594 = G__29595;
continue;
} else {
}
break;
}

var G__29592 = args29590.length;
switch (G__29592) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29590.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;
jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args29597 = [];
var len__22777__auto___29600 = arguments.length;
var i__22778__auto___29601 = (0);
while(true){
if((i__22778__auto___29601 < len__22777__auto___29600)){
args29597.push((arguments[i__22778__auto___29601]));

var G__29602 = (i__22778__auto___29601 + (1));
i__22778__auto___29601 = G__29602;
continue;
} else {
}
break;
}

var G__29599 = args29597.length;
switch (G__29599) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29597.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;
jayq.core.children = (function jayq$core$children(var_args){
var args29604 = [];
var len__22777__auto___29607 = arguments.length;
var i__22778__auto___29608 = (0);
while(true){
if((i__22778__auto___29608 < len__22777__auto___29607)){
args29604.push((arguments[i__22778__auto___29608]));

var G__29609 = (i__22778__auto___29608 + (1));
i__22778__auto___29608 = G__29609;
continue;
} else {
}
break;
}

var G__29606 = args29604.length;
switch (G__29606) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29604.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;
jayq.core.next = (function jayq$core$next(var_args){
var args29611 = [];
var len__22777__auto___29614 = arguments.length;
var i__22778__auto___29615 = (0);
while(true){
if((i__22778__auto___29615 < len__22777__auto___29614)){
args29611.push((arguments[i__22778__auto___29615]));

var G__29616 = (i__22778__auto___29615 + (1));
i__22778__auto___29615 = G__29616;
continue;
} else {
}
break;
}

var G__29613 = args29611.length;
switch (G__29613) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29611.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;
jayq.core.prev = (function jayq$core$prev(var_args){
var args29618 = [];
var len__22777__auto___29621 = arguments.length;
var i__22778__auto___29622 = (0);
while(true){
if((i__22778__auto___29622 < len__22777__auto___29621)){
args29618.push((arguments[i__22778__auto___29622]));

var G__29623 = (i__22778__auto___29622 + (1));
i__22778__auto___29622 = G__29623;
continue;
} else {
}
break;
}

var G__29620 = args29618.length;
switch (G__29620) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29618.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;
jayq.core.next_all = (function jayq$core$next_all(var_args){
var args29625 = [];
var len__22777__auto___29628 = arguments.length;
var i__22778__auto___29629 = (0);
while(true){
if((i__22778__auto___29629 < len__22777__auto___29628)){
args29625.push((arguments[i__22778__auto___29629]));

var G__29630 = (i__22778__auto___29629 + (1));
i__22778__auto___29629 = G__29630;
continue;
} else {
}
break;
}

var G__29627 = args29625.length;
switch (G__29627) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29625.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;
jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args29632 = [];
var len__22777__auto___29635 = arguments.length;
var i__22778__auto___29636 = (0);
while(true){
if((i__22778__auto___29636 < len__22777__auto___29635)){
args29632.push((arguments[i__22778__auto___29636]));

var G__29637 = (i__22778__auto___29636 + (1));
i__22778__auto___29636 = G__29637;
continue;
} else {
}
break;
}

var G__29634 = args29632.length;
switch (G__29634) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29632.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;
jayq.core.next_until = (function jayq$core$next_until(var_args){
var args29639 = [];
var len__22777__auto___29642 = arguments.length;
var i__22778__auto___29643 = (0);
while(true){
if((i__22778__auto___29643 < len__22777__auto___29642)){
args29639.push((arguments[i__22778__auto___29643]));

var G__29644 = (i__22778__auto___29643 + (1));
i__22778__auto___29643 = G__29644;
continue;
} else {
}
break;
}

var G__29641 = args29639.length;
switch (G__29641) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29639.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;
jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args29646 = [];
var len__22777__auto___29649 = arguments.length;
var i__22778__auto___29650 = (0);
while(true){
if((i__22778__auto___29650 < len__22777__auto___29649)){
args29646.push((arguments[i__22778__auto___29650]));

var G__29651 = (i__22778__auto___29650 + (1));
i__22778__auto___29650 = G__29651;
continue;
} else {
}
break;
}

var G__29648 = args29646.length;
switch (G__29648) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29646.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29658 = arguments.length;
var i__22778__auto___29659 = (0);
while(true){
if((i__22778__auto___29659 < len__22777__auto___29658)){
args__22784__auto__.push((arguments[i__22778__auto___29659]));

var G__29660 = (i__22778__auto___29659 + (1));
i__22778__auto___29659 = G__29660;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((2) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22785__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__29656){
var vec__29657 = p__29656;
var context = cljs.core.nth.call(null,vec__29657,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq29653){
var G__29654 = cljs.core.first.call(null,seq29653);
var seq29653__$1 = cljs.core.next.call(null,seq29653);
var G__29655 = cljs.core.first.call(null,seq29653__$1);
var seq29653__$2 = cljs.core.next.call(null,seq29653__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__29654,G__29655,seq29653__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args29661 = [];
var len__22777__auto___29664 = arguments.length;
var i__22778__auto___29665 = (0);
while(true){
if((i__22778__auto___29665 < len__22777__auto___29664)){
args29661.push((arguments[i__22778__auto___29665]));

var G__29666 = (i__22778__auto___29665 + (1));
i__22778__auto___29665 = G__29666;
continue;
} else {
}
break;
}

var G__29663 = args29661.length;
switch (G__29663) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29661.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args29668 = [];
var len__22777__auto___29671 = arguments.length;
var i__22778__auto___29672 = (0);
while(true){
if((i__22778__auto___29672 < len__22777__auto___29671)){
args29668.push((arguments[i__22778__auto___29672]));

var G__29673 = (i__22778__auto___29672 + (1));
i__22778__auto___29672 = G__29673;
continue;
} else {
}
break;
}

var G__29670 = args29668.length;
switch (G__29670) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29668.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;
jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args29675 = [];
var len__22777__auto___29678 = arguments.length;
var i__22778__auto___29679 = (0);
while(true){
if((i__22778__auto___29679 < len__22777__auto___29678)){
args29675.push((arguments[i__22778__auto___29679]));

var G__29680 = (i__22778__auto___29679 + (1));
i__22778__auto___29679 = G__29680;
continue;
} else {
}
break;
}

var G__29677 = args29675.length;
switch (G__29677) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29675.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;
jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args29682 = [];
var len__22777__auto___29685 = arguments.length;
var i__22778__auto___29686 = (0);
while(true){
if((i__22778__auto___29686 < len__22777__auto___29685)){
args29682.push((arguments[i__22778__auto___29686]));

var G__29687 = (i__22778__auto___29686 + (1));
i__22778__auto___29686 = G__29687;
continue;
} else {
}
break;
}

var G__29684 = args29682.length;
switch (G__29684) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29682.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;
jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__29691){
var map__29694 = p__29691;
var map__29694__$1 = ((((!((map__29694 == null)))?((((map__29694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29694):map__29694);
var request = map__29694__$1;
var data = cljs.core.get.call(null,map__29694__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__29694__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__29694,map__29694__$1,request,data,contentType){
return (function (p1__29690_SHARP_){
if(cljs.core.truth_((function (){var and__21695__auto__ = ct;
if(cljs.core.truth_(and__21695__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__21695__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__29690_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__29690_SHARP_;
}
});})(ct,map__29694,map__29694__$1,request,data,contentType))
.call(null,((function (ct,map__29694,map__29694__$1,request,data,contentType){
return (function (p1__29689_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__29689_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__29689_SHARP_;
}
});})(ct,map__29694,map__29694__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args29696 = [];
var len__22777__auto___29699 = arguments.length;
var i__22778__auto___29700 = (0);
while(true){
if((i__22778__auto___29700 < len__22777__auto___29699)){
args29696.push((arguments[i__22778__auto___29700]));

var G__29701 = (i__22778__auto___29700 + (1));
i__22778__auto___29700 = G__29701;
continue;
} else {
}
break;
}

var G__29698 = args29696.length;
switch (G__29698) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29696.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__29703,content,callback){
var vec__29705 = p__29703;
var method = cljs.core.nth.call(null,vec__29705,(0),null);
var uri = cljs.core.nth.call(null,vec__29705,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29711 = arguments.length;
var i__22778__auto___29712 = (0);
while(true){
if((i__22778__auto___29712 < len__22777__auto___29711)){
args__22784__auto__.push((arguments[i__22778__auto___29712]));

var G__29713 = (i__22778__auto___29712 + (1));
i__22778__auto___29712 = G__29713;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((2) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22785__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__29709){
var vec__29710 = p__29709;
var func = cljs.core.nth.call(null,vec__29710,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq29706){
var G__29707 = cljs.core.first.call(null,seq29706);
var seq29706__$1 = cljs.core.next.call(null,seq29706);
var G__29708 = cljs.core.first.call(null,seq29706__$1);
var seq29706__$2 = cljs.core.next.call(null,seq29706__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__29707,G__29708,seq29706__$2);
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29719 = arguments.length;
var i__22778__auto___29720 = (0);
while(true){
if((i__22778__auto___29720 < len__22777__auto___29719)){
args__22784__auto__.push((arguments[i__22778__auto___29720]));

var G__29721 = (i__22778__auto___29720 + (1));
i__22778__auto___29720 = G__29721;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((2) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22785__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__29717){
var vec__29718 = p__29717;
var sel = cljs.core.nth.call(null,vec__29718,(0),null);
var data = cljs.core.nth.call(null,vec__29718,(1),null);
var handler = cljs.core.nth.call(null,vec__29718,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq29714){
var G__29715 = cljs.core.first.call(null,seq29714);
var seq29714__$1 = cljs.core.next.call(null,seq29714);
var G__29716 = cljs.core.first.call(null,seq29714__$1);
var seq29714__$2 = cljs.core.next.call(null,seq29714__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__29715,G__29716,seq29714__$2);
});
jayq.core.one = (function jayq$core$one(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29727 = arguments.length;
var i__22778__auto___29728 = (0);
while(true){
if((i__22778__auto___29728 < len__22777__auto___29727)){
args__22784__auto__.push((arguments[i__22778__auto___29728]));

var G__29729 = (i__22778__auto___29728 + (1));
i__22778__auto___29728 = G__29729;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((2) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22785__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__29725){
var vec__29726 = p__29725;
var sel = cljs.core.nth.call(null,vec__29726,(0),null);
var data = cljs.core.nth.call(null,vec__29726,(1),null);
var handler = cljs.core.nth.call(null,vec__29726,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq29722){
var G__29723 = cljs.core.first.call(null,seq29722);
var seq29722__$1 = cljs.core.next.call(null,seq29722);
var G__29724 = cljs.core.first.call(null,seq29722__$1);
var seq29722__$2 = cljs.core.next.call(null,seq29722__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__29723,G__29724,seq29722__$2);
});
jayq.core.off = (function jayq$core$off(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29735 = arguments.length;
var i__22778__auto___29736 = (0);
while(true){
if((i__22778__auto___29736 < len__22777__auto___29735)){
args__22784__auto__.push((arguments[i__22778__auto___29736]));

var G__29737 = (i__22778__auto___29736 + (1));
i__22778__auto___29736 = G__29737;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((2) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22785__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__29733){
var vec__29734 = p__29733;
var sel = cljs.core.nth.call(null,vec__29734,(0),null);
var handler = cljs.core.nth.call(null,vec__29734,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq29730){
var G__29731 = cljs.core.first.call(null,seq29730);
var seq29730__$1 = cljs.core.next.call(null,seq29730);
var G__29732 = cljs.core.first.call(null,seq29730__$1);
var seq29730__$2 = cljs.core.next.call(null,seq29730__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__29731,G__29732,seq29730__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args29738 = [];
var len__22777__auto___29741 = arguments.length;
var i__22778__auto___29742 = (0);
while(true){
if((i__22778__auto___29742 < len__22777__auto___29741)){
args29738.push((arguments[i__22778__auto___29742]));

var G__29743 = (i__22778__auto___29742 + (1));
i__22778__auto___29742 = G__29743;
continue;
} else {
}
break;
}

var G__29740 = args29738.length;
switch (G__29740) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29738.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;
jayq.core.width = (function jayq$core$width(var_args){
var args29745 = [];
var len__22777__auto___29748 = arguments.length;
var i__22778__auto___29749 = (0);
while(true){
if((i__22778__auto___29749 < len__22777__auto___29748)){
args29745.push((arguments[i__22778__auto___29749]));

var G__29750 = (i__22778__auto___29749 + (1));
i__22778__auto___29749 = G__29750;
continue;
} else {
}
break;
}

var G__29747 = args29745.length;
switch (G__29747) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29745.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;
jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args29752 = [];
var len__22777__auto___29755 = arguments.length;
var i__22778__auto___29756 = (0);
while(true){
if((i__22778__auto___29756 < len__22777__auto___29755)){
args29752.push((arguments[i__22778__auto___29756]));

var G__29757 = (i__22778__auto___29756 + (1));
i__22778__auto___29756 = G__29757;
continue;
} else {
}
break;
}

var G__29754 = args29752.length;
switch (G__29754) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29752.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;
jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args29759 = [];
var len__22777__auto___29762 = arguments.length;
var i__22778__auto___29763 = (0);
while(true){
if((i__22778__auto___29763 < len__22777__auto___29762)){
args29759.push((arguments[i__22778__auto___29763]));

var G__29764 = (i__22778__auto___29763 + (1));
i__22778__auto___29763 = G__29764;
continue;
} else {
}
break;
}

var G__29761 = args29759.length;
switch (G__29761) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29759.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;
jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args29766 = [];
var len__22777__auto___29769 = arguments.length;
var i__22778__auto___29770 = (0);
while(true){
if((i__22778__auto___29770 < len__22777__auto___29769)){
args29766.push((arguments[i__22778__auto___29770]));

var G__29771 = (i__22778__auto___29770 + (1));
i__22778__auto___29770 = G__29771;
continue;
} else {
}
break;
}

var G__29768 = args29766.length;
switch (G__29768) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29766.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args29773 = [];
var len__22777__auto___29776 = arguments.length;
var i__22778__auto___29777 = (0);
while(true){
if((i__22778__auto___29777 < len__22777__auto___29776)){
args29773.push((arguments[i__22778__auto___29777]));

var G__29778 = (i__22778__auto___29777 + (1));
i__22778__auto___29777 = G__29778;
continue;
} else {
}
break;
}

var G__29775 = args29773.length;
switch (G__29775) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29773.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;
jayq.core.done = (function jayq$core$done(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29782 = arguments.length;
var i__22778__auto___29783 = (0);
while(true){
if((i__22778__auto___29783 < len__22777__auto___29782)){
args__22784__auto__.push((arguments[i__22778__auto___29783]));

var G__29784 = (i__22778__auto___29783 + (1));
i__22778__auto___29783 = G__29784;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq29780){
var G__29781 = cljs.core.first.call(null,seq29780);
var seq29780__$1 = cljs.core.next.call(null,seq29780);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__29781,seq29780__$1);
});
jayq.core.fail = (function jayq$core$fail(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29787 = arguments.length;
var i__22778__auto___29788 = (0);
while(true){
if((i__22778__auto___29788 < len__22777__auto___29787)){
args__22784__auto__.push((arguments[i__22778__auto___29788]));

var G__29789 = (i__22778__auto___29788 + (1));
i__22778__auto___29788 = G__29789;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq29785){
var G__29786 = cljs.core.first.call(null,seq29785);
var seq29785__$1 = cljs.core.next.call(null,seq29785);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__29786,seq29785__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args29790 = [];
var len__22777__auto___29793 = arguments.length;
var i__22778__auto___29794 = (0);
while(true){
if((i__22778__auto___29794 < len__22777__auto___29793)){
args29790.push((arguments[i__22778__auto___29794]));

var G__29795 = (i__22778__auto___29794 + (1));
i__22778__auto___29794 = G__29795;
continue;
} else {
}
break;
}

var G__29792 = args29790.length;
switch (G__29792) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29790.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;
jayq.core.always = (function jayq$core$always(var_args){
var args__22784__auto__ = [];
var len__22777__auto___29799 = arguments.length;
var i__22778__auto___29800 = (0);
while(true){
if((i__22778__auto___29800 < len__22777__auto___29799)){
args__22784__auto__.push((arguments[i__22778__auto___29800]));

var G__29801 = (i__22778__auto___29800 + (1));
i__22778__auto___29800 = G__29801;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq29797){
var G__29798 = cljs.core.first.call(null,seq29797);
var seq29797__$1 = cljs.core.next.call(null,seq29797);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__29798,seq29797__$1);
});
jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args29802 = [];
var len__22777__auto___29805 = arguments.length;
var i__22778__auto___29806 = (0);
while(true){
if((i__22778__auto___29806 < len__22777__auto___29805)){
args29802.push((arguments[i__22778__auto___29806]));

var G__29807 = (i__22778__auto___29806 + (1));
i__22778__auto___29806 = G__29807;
continue;
} else {
}
break;
}

var G__29804 = args29802.length;
switch (G__29804) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29802.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;
jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map?rel=1466069918262