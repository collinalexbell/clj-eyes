// Compiled by ClojureScript 1.8.51 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__28795_28799 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__28796_28800 = null;
var count__28797_28801 = (0);
var i__28798_28802 = (0);
while(true){
if((i__28798_28802 < count__28797_28801)){
var k_28803 = cljs.core._nth.call(null,chunk__28796_28800,i__28798_28802);
var v_28804 = (b[k_28803]);
(a[k_28803] = v_28804);

var G__28805 = seq__28795_28799;
var G__28806 = chunk__28796_28800;
var G__28807 = count__28797_28801;
var G__28808 = (i__28798_28802 + (1));
seq__28795_28799 = G__28805;
chunk__28796_28800 = G__28806;
count__28797_28801 = G__28807;
i__28798_28802 = G__28808;
continue;
} else {
var temp__4657__auto___28809 = cljs.core.seq.call(null,seq__28795_28799);
if(temp__4657__auto___28809){
var seq__28795_28810__$1 = temp__4657__auto___28809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28795_28810__$1)){
var c__22518__auto___28811 = cljs.core.chunk_first.call(null,seq__28795_28810__$1);
var G__28812 = cljs.core.chunk_rest.call(null,seq__28795_28810__$1);
var G__28813 = c__22518__auto___28811;
var G__28814 = cljs.core.count.call(null,c__22518__auto___28811);
var G__28815 = (0);
seq__28795_28799 = G__28812;
chunk__28796_28800 = G__28813;
count__28797_28801 = G__28814;
i__28798_28802 = G__28815;
continue;
} else {
var k_28816 = cljs.core.first.call(null,seq__28795_28810__$1);
var v_28817 = (b[k_28816]);
(a[k_28816] = v_28817);

var G__28818 = cljs.core.next.call(null,seq__28795_28810__$1);
var G__28819 = null;
var G__28820 = (0);
var G__28821 = (0);
seq__28795_28799 = G__28818;
chunk__28796_28800 = G__28819;
count__28797_28801 = G__28820;
i__28798_28802 = G__28821;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args28822 = [];
var len__22777__auto___28825 = arguments.length;
var i__22778__auto___28826 = (0);
while(true){
if((i__22778__auto___28826 < len__22777__auto___28825)){
args28822.push((arguments[i__22778__auto___28826]));

var G__28827 = (i__22778__auto___28826 + (1));
i__22778__auto___28826 = G__28827;
continue;
} else {
}
break;
}

var G__28824 = args28822.length;
switch (G__28824) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28822.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__28829 = (i + (2));
var G__28830 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__28829;
ret = G__28830;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28831_28835 = cljs.core.seq.call(null,v);
var chunk__28832_28836 = null;
var count__28833_28837 = (0);
var i__28834_28838 = (0);
while(true){
if((i__28834_28838 < count__28833_28837)){
var x_28839 = cljs.core._nth.call(null,chunk__28832_28836,i__28834_28838);
ret.push(x_28839);

var G__28840 = seq__28831_28835;
var G__28841 = chunk__28832_28836;
var G__28842 = count__28833_28837;
var G__28843 = (i__28834_28838 + (1));
seq__28831_28835 = G__28840;
chunk__28832_28836 = G__28841;
count__28833_28837 = G__28842;
i__28834_28838 = G__28843;
continue;
} else {
var temp__4657__auto___28844 = cljs.core.seq.call(null,seq__28831_28835);
if(temp__4657__auto___28844){
var seq__28831_28845__$1 = temp__4657__auto___28844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28831_28845__$1)){
var c__22518__auto___28846 = cljs.core.chunk_first.call(null,seq__28831_28845__$1);
var G__28847 = cljs.core.chunk_rest.call(null,seq__28831_28845__$1);
var G__28848 = c__22518__auto___28846;
var G__28849 = cljs.core.count.call(null,c__22518__auto___28846);
var G__28850 = (0);
seq__28831_28835 = G__28847;
chunk__28832_28836 = G__28848;
count__28833_28837 = G__28849;
i__28834_28838 = G__28850;
continue;
} else {
var x_28851 = cljs.core.first.call(null,seq__28831_28845__$1);
ret.push(x_28851);

var G__28852 = cljs.core.next.call(null,seq__28831_28845__$1);
var G__28853 = null;
var G__28854 = (0);
var G__28855 = (0);
seq__28831_28835 = G__28852;
chunk__28832_28836 = G__28853;
count__28833_28837 = G__28854;
i__28834_28838 = G__28855;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28856_28860 = cljs.core.seq.call(null,v);
var chunk__28857_28861 = null;
var count__28858_28862 = (0);
var i__28859_28863 = (0);
while(true){
if((i__28859_28863 < count__28858_28862)){
var x_28864 = cljs.core._nth.call(null,chunk__28857_28861,i__28859_28863);
ret.push(x_28864);

var G__28865 = seq__28856_28860;
var G__28866 = chunk__28857_28861;
var G__28867 = count__28858_28862;
var G__28868 = (i__28859_28863 + (1));
seq__28856_28860 = G__28865;
chunk__28857_28861 = G__28866;
count__28858_28862 = G__28867;
i__28859_28863 = G__28868;
continue;
} else {
var temp__4657__auto___28869 = cljs.core.seq.call(null,seq__28856_28860);
if(temp__4657__auto___28869){
var seq__28856_28870__$1 = temp__4657__auto___28869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28856_28870__$1)){
var c__22518__auto___28871 = cljs.core.chunk_first.call(null,seq__28856_28870__$1);
var G__28872 = cljs.core.chunk_rest.call(null,seq__28856_28870__$1);
var G__28873 = c__22518__auto___28871;
var G__28874 = cljs.core.count.call(null,c__22518__auto___28871);
var G__28875 = (0);
seq__28856_28860 = G__28872;
chunk__28857_28861 = G__28873;
count__28858_28862 = G__28874;
i__28859_28863 = G__28875;
continue;
} else {
var x_28876 = cljs.core.first.call(null,seq__28856_28870__$1);
ret.push(x_28876);

var G__28877 = cljs.core.next.call(null,seq__28856_28870__$1);
var G__28878 = null;
var G__28879 = (0);
var G__28880 = (0);
seq__28856_28860 = G__28877;
chunk__28857_28861 = G__28878;
count__28858_28862 = G__28879;
i__28859_28863 = G__28880;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28881_28885 = cljs.core.seq.call(null,v);
var chunk__28882_28886 = null;
var count__28883_28887 = (0);
var i__28884_28888 = (0);
while(true){
if((i__28884_28888 < count__28883_28887)){
var x_28889 = cljs.core._nth.call(null,chunk__28882_28886,i__28884_28888);
ret.push(x_28889);

var G__28890 = seq__28881_28885;
var G__28891 = chunk__28882_28886;
var G__28892 = count__28883_28887;
var G__28893 = (i__28884_28888 + (1));
seq__28881_28885 = G__28890;
chunk__28882_28886 = G__28891;
count__28883_28887 = G__28892;
i__28884_28888 = G__28893;
continue;
} else {
var temp__4657__auto___28894 = cljs.core.seq.call(null,seq__28881_28885);
if(temp__4657__auto___28894){
var seq__28881_28895__$1 = temp__4657__auto___28894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28881_28895__$1)){
var c__22518__auto___28896 = cljs.core.chunk_first.call(null,seq__28881_28895__$1);
var G__28897 = cljs.core.chunk_rest.call(null,seq__28881_28895__$1);
var G__28898 = c__22518__auto___28896;
var G__28899 = cljs.core.count.call(null,c__22518__auto___28896);
var G__28900 = (0);
seq__28881_28885 = G__28897;
chunk__28882_28886 = G__28898;
count__28883_28887 = G__28899;
i__28884_28888 = G__28900;
continue;
} else {
var x_28901 = cljs.core.first.call(null,seq__28881_28895__$1);
ret.push(x_28901);

var G__28902 = cljs.core.next.call(null,seq__28881_28895__$1);
var G__28903 = null;
var G__28904 = (0);
var G__28905 = (0);
seq__28881_28885 = G__28902;
chunk__28882_28886 = G__28903;
count__28883_28887 = G__28904;
i__28884_28888 = G__28905;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args28906 = [];
var len__22777__auto___28917 = arguments.length;
var i__22778__auto___28918 = (0);
while(true){
if((i__22778__auto___28918 < len__22777__auto___28917)){
args28906.push((arguments[i__22778__auto___28918]));

var G__28919 = (i__22778__auto___28918 + (1));
i__22778__auto___28918 = G__28919;
continue;
} else {
}
break;
}

var G__28908 = args28906.length;
switch (G__28908) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28906.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__28909 = obj;
G__28909.push(kfn.call(null,k),vfn.call(null,v));

return G__28909;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x28910 = cljs.core.clone.call(null,handlers);
x28910.forEach = ((function (x28910,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__28911 = cljs.core.seq.call(null,coll);
var chunk__28912 = null;
var count__28913 = (0);
var i__28914 = (0);
while(true){
if((i__28914 < count__28913)){
var vec__28915 = cljs.core._nth.call(null,chunk__28912,i__28914);
var k = cljs.core.nth.call(null,vec__28915,(0),null);
var v = cljs.core.nth.call(null,vec__28915,(1),null);
f.call(null,v,k);

var G__28921 = seq__28911;
var G__28922 = chunk__28912;
var G__28923 = count__28913;
var G__28924 = (i__28914 + (1));
seq__28911 = G__28921;
chunk__28912 = G__28922;
count__28913 = G__28923;
i__28914 = G__28924;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28911);
if(temp__4657__auto__){
var seq__28911__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28911__$1)){
var c__22518__auto__ = cljs.core.chunk_first.call(null,seq__28911__$1);
var G__28925 = cljs.core.chunk_rest.call(null,seq__28911__$1);
var G__28926 = c__22518__auto__;
var G__28927 = cljs.core.count.call(null,c__22518__auto__);
var G__28928 = (0);
seq__28911 = G__28925;
chunk__28912 = G__28926;
count__28913 = G__28927;
i__28914 = G__28928;
continue;
} else {
var vec__28916 = cljs.core.first.call(null,seq__28911__$1);
var k = cljs.core.nth.call(null,vec__28916,(0),null);
var v = cljs.core.nth.call(null,vec__28916,(1),null);
f.call(null,v,k);

var G__28929 = cljs.core.next.call(null,seq__28911__$1);
var G__28930 = null;
var G__28931 = (0);
var G__28932 = (0);
seq__28911 = G__28929;
chunk__28912 = G__28930;
count__28913 = G__28931;
i__28914 = G__28932;
continue;
}
} else {
return null;
}
}
break;
}
});})(x28910,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x28910;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args28933 = [];
var len__22777__auto___28939 = arguments.length;
var i__22778__auto___28940 = (0);
while(true){
if((i__22778__auto___28940 < len__22777__auto___28939)){
args28933.push((arguments[i__22778__auto___28940]));

var G__28941 = (i__22778__auto___28940 + (1));
i__22778__auto___28940 = G__28941;
continue;
} else {
}
break;
}

var G__28935 = args28933.length;
switch (G__28935) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28933.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit28936 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit28936 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta28937){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta28937 = meta28937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit28936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28938,meta28937__$1){
var self__ = this;
var _28938__$1 = this;
return (new cognitect.transit.t_cognitect$transit28936(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta28937__$1));
});

cognitect.transit.t_cognitect$transit28936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28938){
var self__ = this;
var _28938__$1 = this;
return self__.meta28937;
});

cognitect.transit.t_cognitect$transit28936.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28936.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28936.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28936.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta28937","meta28937",-1187991790,null)], null);
});

cognitect.transit.t_cognitect$transit28936.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit28936.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit28936";

cognitect.transit.t_cognitect$transit28936.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cognitect.transit/t_cognitect$transit28936");
});

cognitect.transit.__GT_t_cognitect$transit28936 = (function cognitect$transit$__GT_t_cognitect$transit28936(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28937){
return (new cognitect.transit.t_cognitect$transit28936(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28937));
});

}

return (new cognitect.transit.t_cognitect$transit28936(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__21707__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1466069804896