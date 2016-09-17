// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21713__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21713__auto__){
return or__21713__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21713__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30893_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30893_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30898 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30899 = null;
var count__30900 = (0);
var i__30901 = (0);
while(true){
if((i__30901 < count__30900)){
var n = cljs.core._nth.call(null,chunk__30899,i__30901);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30902 = seq__30898;
var G__30903 = chunk__30899;
var G__30904 = count__30900;
var G__30905 = (i__30901 + (1));
seq__30898 = G__30902;
chunk__30899 = G__30903;
count__30900 = G__30904;
i__30901 = G__30905;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30898);
if(temp__4657__auto__){
var seq__30898__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30898__$1)){
var c__22524__auto__ = cljs.core.chunk_first.call(null,seq__30898__$1);
var G__30906 = cljs.core.chunk_rest.call(null,seq__30898__$1);
var G__30907 = c__22524__auto__;
var G__30908 = cljs.core.count.call(null,c__22524__auto__);
var G__30909 = (0);
seq__30898 = G__30906;
chunk__30899 = G__30907;
count__30900 = G__30908;
i__30901 = G__30909;
continue;
} else {
var n = cljs.core.first.call(null,seq__30898__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30910 = cljs.core.next.call(null,seq__30898__$1);
var G__30911 = null;
var G__30912 = (0);
var G__30913 = (0);
seq__30898 = G__30910;
chunk__30899 = G__30911;
count__30900 = G__30912;
i__30901 = G__30913;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30952_30959 = cljs.core.seq.call(null,deps);
var chunk__30953_30960 = null;
var count__30954_30961 = (0);
var i__30955_30962 = (0);
while(true){
if((i__30955_30962 < count__30954_30961)){
var dep_30963 = cljs.core._nth.call(null,chunk__30953_30960,i__30955_30962);
topo_sort_helper_STAR_.call(null,dep_30963,(depth + (1)),state);

var G__30964 = seq__30952_30959;
var G__30965 = chunk__30953_30960;
var G__30966 = count__30954_30961;
var G__30967 = (i__30955_30962 + (1));
seq__30952_30959 = G__30964;
chunk__30953_30960 = G__30965;
count__30954_30961 = G__30966;
i__30955_30962 = G__30967;
continue;
} else {
var temp__4657__auto___30968 = cljs.core.seq.call(null,seq__30952_30959);
if(temp__4657__auto___30968){
var seq__30952_30969__$1 = temp__4657__auto___30968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30952_30969__$1)){
var c__22524__auto___30970 = cljs.core.chunk_first.call(null,seq__30952_30969__$1);
var G__30971 = cljs.core.chunk_rest.call(null,seq__30952_30969__$1);
var G__30972 = c__22524__auto___30970;
var G__30973 = cljs.core.count.call(null,c__22524__auto___30970);
var G__30974 = (0);
seq__30952_30959 = G__30971;
chunk__30953_30960 = G__30972;
count__30954_30961 = G__30973;
i__30955_30962 = G__30974;
continue;
} else {
var dep_30975 = cljs.core.first.call(null,seq__30952_30969__$1);
topo_sort_helper_STAR_.call(null,dep_30975,(depth + (1)),state);

var G__30976 = cljs.core.next.call(null,seq__30952_30969__$1);
var G__30977 = null;
var G__30978 = (0);
var G__30979 = (0);
seq__30952_30959 = G__30976;
chunk__30953_30960 = G__30977;
count__30954_30961 = G__30978;
i__30955_30962 = G__30979;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30956){
var vec__30958 = p__30956;
var x = cljs.core.nth.call(null,vec__30958,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30958,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30958,x,xs,get_deps__$1){
return (function (p1__30914_SHARP_){
return clojure.set.difference.call(null,p1__30914_SHARP_,x);
});})(vec__30958,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30992 = cljs.core.seq.call(null,provides);
var chunk__30993 = null;
var count__30994 = (0);
var i__30995 = (0);
while(true){
if((i__30995 < count__30994)){
var prov = cljs.core._nth.call(null,chunk__30993,i__30995);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30996_31004 = cljs.core.seq.call(null,requires);
var chunk__30997_31005 = null;
var count__30998_31006 = (0);
var i__30999_31007 = (0);
while(true){
if((i__30999_31007 < count__30998_31006)){
var req_31008 = cljs.core._nth.call(null,chunk__30997_31005,i__30999_31007);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31008,prov);

var G__31009 = seq__30996_31004;
var G__31010 = chunk__30997_31005;
var G__31011 = count__30998_31006;
var G__31012 = (i__30999_31007 + (1));
seq__30996_31004 = G__31009;
chunk__30997_31005 = G__31010;
count__30998_31006 = G__31011;
i__30999_31007 = G__31012;
continue;
} else {
var temp__4657__auto___31013 = cljs.core.seq.call(null,seq__30996_31004);
if(temp__4657__auto___31013){
var seq__30996_31014__$1 = temp__4657__auto___31013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30996_31014__$1)){
var c__22524__auto___31015 = cljs.core.chunk_first.call(null,seq__30996_31014__$1);
var G__31016 = cljs.core.chunk_rest.call(null,seq__30996_31014__$1);
var G__31017 = c__22524__auto___31015;
var G__31018 = cljs.core.count.call(null,c__22524__auto___31015);
var G__31019 = (0);
seq__30996_31004 = G__31016;
chunk__30997_31005 = G__31017;
count__30998_31006 = G__31018;
i__30999_31007 = G__31019;
continue;
} else {
var req_31020 = cljs.core.first.call(null,seq__30996_31014__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31020,prov);

var G__31021 = cljs.core.next.call(null,seq__30996_31014__$1);
var G__31022 = null;
var G__31023 = (0);
var G__31024 = (0);
seq__30996_31004 = G__31021;
chunk__30997_31005 = G__31022;
count__30998_31006 = G__31023;
i__30999_31007 = G__31024;
continue;
}
} else {
}
}
break;
}

var G__31025 = seq__30992;
var G__31026 = chunk__30993;
var G__31027 = count__30994;
var G__31028 = (i__30995 + (1));
seq__30992 = G__31025;
chunk__30993 = G__31026;
count__30994 = G__31027;
i__30995 = G__31028;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30992);
if(temp__4657__auto__){
var seq__30992__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30992__$1)){
var c__22524__auto__ = cljs.core.chunk_first.call(null,seq__30992__$1);
var G__31029 = cljs.core.chunk_rest.call(null,seq__30992__$1);
var G__31030 = c__22524__auto__;
var G__31031 = cljs.core.count.call(null,c__22524__auto__);
var G__31032 = (0);
seq__30992 = G__31029;
chunk__30993 = G__31030;
count__30994 = G__31031;
i__30995 = G__31032;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30992__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31000_31033 = cljs.core.seq.call(null,requires);
var chunk__31001_31034 = null;
var count__31002_31035 = (0);
var i__31003_31036 = (0);
while(true){
if((i__31003_31036 < count__31002_31035)){
var req_31037 = cljs.core._nth.call(null,chunk__31001_31034,i__31003_31036);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31037,prov);

var G__31038 = seq__31000_31033;
var G__31039 = chunk__31001_31034;
var G__31040 = count__31002_31035;
var G__31041 = (i__31003_31036 + (1));
seq__31000_31033 = G__31038;
chunk__31001_31034 = G__31039;
count__31002_31035 = G__31040;
i__31003_31036 = G__31041;
continue;
} else {
var temp__4657__auto___31042__$1 = cljs.core.seq.call(null,seq__31000_31033);
if(temp__4657__auto___31042__$1){
var seq__31000_31043__$1 = temp__4657__auto___31042__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31000_31043__$1)){
var c__22524__auto___31044 = cljs.core.chunk_first.call(null,seq__31000_31043__$1);
var G__31045 = cljs.core.chunk_rest.call(null,seq__31000_31043__$1);
var G__31046 = c__22524__auto___31044;
var G__31047 = cljs.core.count.call(null,c__22524__auto___31044);
var G__31048 = (0);
seq__31000_31033 = G__31045;
chunk__31001_31034 = G__31046;
count__31002_31035 = G__31047;
i__31003_31036 = G__31048;
continue;
} else {
var req_31049 = cljs.core.first.call(null,seq__31000_31043__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31049,prov);

var G__31050 = cljs.core.next.call(null,seq__31000_31043__$1);
var G__31051 = null;
var G__31052 = (0);
var G__31053 = (0);
seq__31000_31033 = G__31050;
chunk__31001_31034 = G__31051;
count__31002_31035 = G__31052;
i__31003_31036 = G__31053;
continue;
}
} else {
}
}
break;
}

var G__31054 = cljs.core.next.call(null,seq__30992__$1);
var G__31055 = null;
var G__31056 = (0);
var G__31057 = (0);
seq__30992 = G__31054;
chunk__30993 = G__31055;
count__30994 = G__31056;
i__30995 = G__31057;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31062_31066 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31063_31067 = null;
var count__31064_31068 = (0);
var i__31065_31069 = (0);
while(true){
if((i__31065_31069 < count__31064_31068)){
var ns_31070 = cljs.core._nth.call(null,chunk__31063_31067,i__31065_31069);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31070);

var G__31071 = seq__31062_31066;
var G__31072 = chunk__31063_31067;
var G__31073 = count__31064_31068;
var G__31074 = (i__31065_31069 + (1));
seq__31062_31066 = G__31071;
chunk__31063_31067 = G__31072;
count__31064_31068 = G__31073;
i__31065_31069 = G__31074;
continue;
} else {
var temp__4657__auto___31075 = cljs.core.seq.call(null,seq__31062_31066);
if(temp__4657__auto___31075){
var seq__31062_31076__$1 = temp__4657__auto___31075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31062_31076__$1)){
var c__22524__auto___31077 = cljs.core.chunk_first.call(null,seq__31062_31076__$1);
var G__31078 = cljs.core.chunk_rest.call(null,seq__31062_31076__$1);
var G__31079 = c__22524__auto___31077;
var G__31080 = cljs.core.count.call(null,c__22524__auto___31077);
var G__31081 = (0);
seq__31062_31066 = G__31078;
chunk__31063_31067 = G__31079;
count__31064_31068 = G__31080;
i__31065_31069 = G__31081;
continue;
} else {
var ns_31082 = cljs.core.first.call(null,seq__31062_31076__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31082);

var G__31083 = cljs.core.next.call(null,seq__31062_31076__$1);
var G__31084 = null;
var G__31085 = (0);
var G__31086 = (0);
seq__31062_31066 = G__31083;
chunk__31063_31067 = G__31084;
count__31064_31068 = G__31085;
i__31065_31069 = G__31086;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21713__auto__ = goog.require__;
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31087__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31088__i = 0, G__31088__a = new Array(arguments.length -  0);
while (G__31088__i < G__31088__a.length) {G__31088__a[G__31088__i] = arguments[G__31088__i + 0]; ++G__31088__i;}
  args = new cljs.core.IndexedSeq(G__31088__a,0);
} 
return G__31087__delegate.call(this,args);};
G__31087.cljs$lang$maxFixedArity = 0;
G__31087.cljs$lang$applyTo = (function (arglist__31089){
var args = cljs.core.seq(arglist__31089);
return G__31087__delegate(args);
});
G__31087.cljs$core$IFn$_invoke$arity$variadic = G__31087__delegate;
return G__31087;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31091 = cljs.core._EQ_;
var expr__31092 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31091.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31092))){
var path_parts = ((function (pred__31091,expr__31092){
return (function (p1__31090_SHARP_){
return clojure.string.split.call(null,p1__31090_SHARP_,/[\/\\]/);
});})(pred__31091,expr__31092))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31091,expr__31092){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31094){if((e31094 instanceof Error)){
var e = e31094;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31094;

}
}})());
});
;})(path_parts,sep,root,pred__31091,expr__31092))
} else {
if(cljs.core.truth_(pred__31091.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31092))){
return ((function (pred__31091,expr__31092){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__31091,expr__31092){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31091,expr__31092))
);

return deferred.addErrback(((function (deferred,pred__31091,expr__31092){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31091,expr__31092))
);
});
;})(pred__31091,expr__31092))
} else {
return ((function (pred__31091,expr__31092){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31091,expr__31092))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31095,callback){
var map__31098 = p__31095;
var map__31098__$1 = ((((!((map__31098 == null)))?((((map__31098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31098):map__31098);
var file_msg = map__31098__$1;
var request_url = cljs.core.get.call(null,map__31098__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31098,map__31098__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31098,map__31098__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__){
return (function (state_31122){
var state_val_31123 = (state_31122[(1)]);
if((state_val_31123 === (7))){
var inst_31118 = (state_31122[(2)]);
var state_31122__$1 = state_31122;
var statearr_31124_31144 = state_31122__$1;
(statearr_31124_31144[(2)] = inst_31118);

(statearr_31124_31144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (1))){
var state_31122__$1 = state_31122;
var statearr_31125_31145 = state_31122__$1;
(statearr_31125_31145[(2)] = null);

(statearr_31125_31145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (4))){
var inst_31102 = (state_31122[(7)]);
var inst_31102__$1 = (state_31122[(2)]);
var state_31122__$1 = (function (){var statearr_31126 = state_31122;
(statearr_31126[(7)] = inst_31102__$1);

return statearr_31126;
})();
if(cljs.core.truth_(inst_31102__$1)){
var statearr_31127_31146 = state_31122__$1;
(statearr_31127_31146[(1)] = (5));

} else {
var statearr_31128_31147 = state_31122__$1;
(statearr_31128_31147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (6))){
var state_31122__$1 = state_31122;
var statearr_31129_31148 = state_31122__$1;
(statearr_31129_31148[(2)] = null);

(statearr_31129_31148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (3))){
var inst_31120 = (state_31122[(2)]);
var state_31122__$1 = state_31122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31122__$1,inst_31120);
} else {
if((state_val_31123 === (2))){
var state_31122__$1 = state_31122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31122__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31123 === (11))){
var inst_31114 = (state_31122[(2)]);
var state_31122__$1 = (function (){var statearr_31130 = state_31122;
(statearr_31130[(8)] = inst_31114);

return statearr_31130;
})();
var statearr_31131_31149 = state_31122__$1;
(statearr_31131_31149[(2)] = null);

(statearr_31131_31149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (9))){
var inst_31106 = (state_31122[(9)]);
var inst_31108 = (state_31122[(10)]);
var inst_31110 = inst_31108.call(null,inst_31106);
var state_31122__$1 = state_31122;
var statearr_31132_31150 = state_31122__$1;
(statearr_31132_31150[(2)] = inst_31110);

(statearr_31132_31150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (5))){
var inst_31102 = (state_31122[(7)]);
var inst_31104 = figwheel.client.file_reloading.blocking_load.call(null,inst_31102);
var state_31122__$1 = state_31122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31122__$1,(8),inst_31104);
} else {
if((state_val_31123 === (10))){
var inst_31106 = (state_31122[(9)]);
var inst_31112 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31106);
var state_31122__$1 = state_31122;
var statearr_31133_31151 = state_31122__$1;
(statearr_31133_31151[(2)] = inst_31112);

(statearr_31133_31151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (8))){
var inst_31102 = (state_31122[(7)]);
var inst_31108 = (state_31122[(10)]);
var inst_31106 = (state_31122[(2)]);
var inst_31107 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31108__$1 = cljs.core.get.call(null,inst_31107,inst_31102);
var state_31122__$1 = (function (){var statearr_31134 = state_31122;
(statearr_31134[(9)] = inst_31106);

(statearr_31134[(10)] = inst_31108__$1);

return statearr_31134;
})();
if(cljs.core.truth_(inst_31108__$1)){
var statearr_31135_31152 = state_31122__$1;
(statearr_31135_31152[(1)] = (9));

} else {
var statearr_31136_31153 = state_31122__$1;
(statearr_31136_31153[(1)] = (10));

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
});})(c__23880__auto__))
;
return ((function (switch__23768__auto__,c__23880__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23769__auto__ = null;
var figwheel$client$file_reloading$state_machine__23769__auto____0 = (function (){
var statearr_31140 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31140[(0)] = figwheel$client$file_reloading$state_machine__23769__auto__);

(statearr_31140[(1)] = (1));

return statearr_31140;
});
var figwheel$client$file_reloading$state_machine__23769__auto____1 = (function (state_31122){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_31122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e31141){if((e31141 instanceof Object)){
var ex__23772__auto__ = e31141;
var statearr_31142_31154 = state_31122;
(statearr_31142_31154[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31155 = state_31122;
state_31122 = G__31155;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23769__auto__ = function(state_31122){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23769__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23769__auto____1.call(this,state_31122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23769__auto____0;
figwheel$client$file_reloading$state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23769__auto____1;
return figwheel$client$file_reloading$state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__))
})();
var state__23882__auto__ = (function (){var statearr_31143 = f__23881__auto__.call(null);
(statearr_31143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_31143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__))
);

return c__23880__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31156,callback){
var map__31159 = p__31156;
var map__31159__$1 = ((((!((map__31159 == null)))?((((map__31159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31159):map__31159);
var file_msg = map__31159__$1;
var namespace = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31159,map__31159__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31159,map__31159__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31161){
var map__31164 = p__31161;
var map__31164__$1 = ((((!((map__31164 == null)))?((((map__31164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31164):map__31164);
var file_msg = map__31164__$1;
var namespace = cljs.core.get.call(null,map__31164__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21701__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21701__auto__){
var or__21713__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
} else {
var or__21713__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21713__auto____$1)){
return or__21713__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21701__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31166,callback){
var map__31169 = p__31166;
var map__31169__$1 = ((((!((map__31169 == null)))?((((map__31169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31169):map__31169);
var file_msg = map__31169__$1;
var request_url = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23880__auto___31257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto___31257,out){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto___31257,out){
return (function (state_31239){
var state_val_31240 = (state_31239[(1)]);
if((state_val_31240 === (1))){
var inst_31217 = cljs.core.nth.call(null,files,(0),null);
var inst_31218 = cljs.core.nthnext.call(null,files,(1));
var inst_31219 = files;
var state_31239__$1 = (function (){var statearr_31241 = state_31239;
(statearr_31241[(7)] = inst_31219);

(statearr_31241[(8)] = inst_31218);

(statearr_31241[(9)] = inst_31217);

return statearr_31241;
})();
var statearr_31242_31258 = state_31239__$1;
(statearr_31242_31258[(2)] = null);

(statearr_31242_31258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (2))){
var inst_31219 = (state_31239[(7)]);
var inst_31222 = (state_31239[(10)]);
var inst_31222__$1 = cljs.core.nth.call(null,inst_31219,(0),null);
var inst_31223 = cljs.core.nthnext.call(null,inst_31219,(1));
var inst_31224 = (inst_31222__$1 == null);
var inst_31225 = cljs.core.not.call(null,inst_31224);
var state_31239__$1 = (function (){var statearr_31243 = state_31239;
(statearr_31243[(11)] = inst_31223);

(statearr_31243[(10)] = inst_31222__$1);

return statearr_31243;
})();
if(inst_31225){
var statearr_31244_31259 = state_31239__$1;
(statearr_31244_31259[(1)] = (4));

} else {
var statearr_31245_31260 = state_31239__$1;
(statearr_31245_31260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (3))){
var inst_31237 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31239__$1,inst_31237);
} else {
if((state_val_31240 === (4))){
var inst_31222 = (state_31239[(10)]);
var inst_31227 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31222);
var state_31239__$1 = state_31239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31239__$1,(7),inst_31227);
} else {
if((state_val_31240 === (5))){
var inst_31233 = cljs.core.async.close_BANG_.call(null,out);
var state_31239__$1 = state_31239;
var statearr_31246_31261 = state_31239__$1;
(statearr_31246_31261[(2)] = inst_31233);

(statearr_31246_31261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (6))){
var inst_31235 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31247_31262 = state_31239__$1;
(statearr_31247_31262[(2)] = inst_31235);

(statearr_31247_31262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (7))){
var inst_31223 = (state_31239[(11)]);
var inst_31229 = (state_31239[(2)]);
var inst_31230 = cljs.core.async.put_BANG_.call(null,out,inst_31229);
var inst_31219 = inst_31223;
var state_31239__$1 = (function (){var statearr_31248 = state_31239;
(statearr_31248[(12)] = inst_31230);

(statearr_31248[(7)] = inst_31219);

return statearr_31248;
})();
var statearr_31249_31263 = state_31239__$1;
(statearr_31249_31263[(2)] = null);

(statearr_31249_31263[(1)] = (2));


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
});})(c__23880__auto___31257,out))
;
return ((function (switch__23768__auto__,c__23880__auto___31257,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23769__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23769__auto____0 = (function (){
var statearr_31253 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31253[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23769__auto__);

(statearr_31253[(1)] = (1));

return statearr_31253;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23769__auto____1 = (function (state_31239){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_31239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e31254){if((e31254 instanceof Object)){
var ex__23772__auto__ = e31254;
var statearr_31255_31264 = state_31239;
(statearr_31255_31264[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31265 = state_31239;
state_31239 = G__31265;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23769__auto__ = function(state_31239){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23769__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23769__auto____1.call(this,state_31239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23769__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23769__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto___31257,out))
})();
var state__23882__auto__ = (function (){var statearr_31256 = f__23881__auto__.call(null);
(statearr_31256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto___31257);

return statearr_31256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto___31257,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31266,opts){
var map__31270 = p__31266;
var map__31270__$1 = ((((!((map__31270 == null)))?((((map__31270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31270):map__31270);
var eval_body__$1 = cljs.core.get.call(null,map__31270__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31270__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21701__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21701__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21701__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31272){var e = e31272;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31273_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31273_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31278){
var vec__31279 = p__31278;
var k = cljs.core.nth.call(null,vec__31279,(0),null);
var v = cljs.core.nth.call(null,vec__31279,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31280){
var vec__31281 = p__31280;
var k = cljs.core.nth.call(null,vec__31281,(0),null);
var v = cljs.core.nth.call(null,vec__31281,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31285,p__31286){
var map__31533 = p__31285;
var map__31533__$1 = ((((!((map__31533 == null)))?((((map__31533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31533):map__31533);
var opts = map__31533__$1;
var before_jsload = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31534 = p__31286;
var map__31534__$1 = ((((!((map__31534 == null)))?((((map__31534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31534):map__31534);
var msg = map__31534__$1;
var files = cljs.core.get.call(null,map__31534__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31534__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31534__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23880__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23881__auto__ = (function (){var switch__23768__auto__ = ((function (c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31687){
var state_val_31688 = (state_31687[(1)]);
if((state_val_31688 === (7))){
var inst_31551 = (state_31687[(7)]);
var inst_31549 = (state_31687[(8)]);
var inst_31548 = (state_31687[(9)]);
var inst_31550 = (state_31687[(10)]);
var inst_31556 = cljs.core._nth.call(null,inst_31549,inst_31551);
var inst_31557 = figwheel.client.file_reloading.eval_body.call(null,inst_31556,opts);
var inst_31558 = (inst_31551 + (1));
var tmp31689 = inst_31549;
var tmp31690 = inst_31548;
var tmp31691 = inst_31550;
var inst_31548__$1 = tmp31690;
var inst_31549__$1 = tmp31689;
var inst_31550__$1 = tmp31691;
var inst_31551__$1 = inst_31558;
var state_31687__$1 = (function (){var statearr_31692 = state_31687;
(statearr_31692[(11)] = inst_31557);

(statearr_31692[(7)] = inst_31551__$1);

(statearr_31692[(8)] = inst_31549__$1);

(statearr_31692[(9)] = inst_31548__$1);

(statearr_31692[(10)] = inst_31550__$1);

return statearr_31692;
})();
var statearr_31693_31779 = state_31687__$1;
(statearr_31693_31779[(2)] = null);

(statearr_31693_31779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (20))){
var inst_31591 = (state_31687[(12)]);
var inst_31599 = figwheel.client.file_reloading.sort_files.call(null,inst_31591);
var state_31687__$1 = state_31687;
var statearr_31694_31780 = state_31687__$1;
(statearr_31694_31780[(2)] = inst_31599);

(statearr_31694_31780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (27))){
var state_31687__$1 = state_31687;
var statearr_31695_31781 = state_31687__$1;
(statearr_31695_31781[(2)] = null);

(statearr_31695_31781[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (1))){
var inst_31540 = (state_31687[(13)]);
var inst_31537 = before_jsload.call(null,files);
var inst_31538 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31539 = (function (){return ((function (inst_31540,inst_31537,inst_31538,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31282_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31282_SHARP_);
});
;})(inst_31540,inst_31537,inst_31538,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31540__$1 = cljs.core.filter.call(null,inst_31539,files);
var inst_31541 = cljs.core.not_empty.call(null,inst_31540__$1);
var state_31687__$1 = (function (){var statearr_31696 = state_31687;
(statearr_31696[(13)] = inst_31540__$1);

(statearr_31696[(14)] = inst_31537);

(statearr_31696[(15)] = inst_31538);

return statearr_31696;
})();
if(cljs.core.truth_(inst_31541)){
var statearr_31697_31782 = state_31687__$1;
(statearr_31697_31782[(1)] = (2));

} else {
var statearr_31698_31783 = state_31687__$1;
(statearr_31698_31783[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (24))){
var state_31687__$1 = state_31687;
var statearr_31699_31784 = state_31687__$1;
(statearr_31699_31784[(2)] = null);

(statearr_31699_31784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (39))){
var inst_31641 = (state_31687[(16)]);
var state_31687__$1 = state_31687;
var statearr_31700_31785 = state_31687__$1;
(statearr_31700_31785[(2)] = inst_31641);

(statearr_31700_31785[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (46))){
var inst_31682 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31701_31786 = state_31687__$1;
(statearr_31701_31786[(2)] = inst_31682);

(statearr_31701_31786[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (4))){
var inst_31585 = (state_31687[(2)]);
var inst_31586 = cljs.core.List.EMPTY;
var inst_31587 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31586);
var inst_31588 = (function (){return ((function (inst_31585,inst_31586,inst_31587,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31283_SHARP_){
var and__21701__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31283_SHARP_);
if(cljs.core.truth_(and__21701__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31283_SHARP_));
} else {
return and__21701__auto__;
}
});
;})(inst_31585,inst_31586,inst_31587,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31589 = cljs.core.filter.call(null,inst_31588,files);
var inst_31590 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31591 = cljs.core.concat.call(null,inst_31589,inst_31590);
var state_31687__$1 = (function (){var statearr_31702 = state_31687;
(statearr_31702[(12)] = inst_31591);

(statearr_31702[(17)] = inst_31587);

(statearr_31702[(18)] = inst_31585);

return statearr_31702;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31703_31787 = state_31687__$1;
(statearr_31703_31787[(1)] = (16));

} else {
var statearr_31704_31788 = state_31687__$1;
(statearr_31704_31788[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (15))){
var inst_31575 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31705_31789 = state_31687__$1;
(statearr_31705_31789[(2)] = inst_31575);

(statearr_31705_31789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (21))){
var inst_31601 = (state_31687[(19)]);
var inst_31601__$1 = (state_31687[(2)]);
var inst_31602 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31601__$1);
var state_31687__$1 = (function (){var statearr_31706 = state_31687;
(statearr_31706[(19)] = inst_31601__$1);

return statearr_31706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31687__$1,(22),inst_31602);
} else {
if((state_val_31688 === (31))){
var inst_31685 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31687__$1,inst_31685);
} else {
if((state_val_31688 === (32))){
var inst_31641 = (state_31687[(16)]);
var inst_31646 = inst_31641.cljs$lang$protocol_mask$partition0$;
var inst_31647 = (inst_31646 & (64));
var inst_31648 = inst_31641.cljs$core$ISeq$;
var inst_31649 = (inst_31647) || (inst_31648);
var state_31687__$1 = state_31687;
if(cljs.core.truth_(inst_31649)){
var statearr_31707_31790 = state_31687__$1;
(statearr_31707_31790[(1)] = (35));

} else {
var statearr_31708_31791 = state_31687__$1;
(statearr_31708_31791[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (40))){
var inst_31662 = (state_31687[(20)]);
var inst_31661 = (state_31687[(2)]);
var inst_31662__$1 = cljs.core.get.call(null,inst_31661,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31663 = cljs.core.get.call(null,inst_31661,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31664 = cljs.core.not_empty.call(null,inst_31662__$1);
var state_31687__$1 = (function (){var statearr_31709 = state_31687;
(statearr_31709[(21)] = inst_31663);

(statearr_31709[(20)] = inst_31662__$1);

return statearr_31709;
})();
if(cljs.core.truth_(inst_31664)){
var statearr_31710_31792 = state_31687__$1;
(statearr_31710_31792[(1)] = (41));

} else {
var statearr_31711_31793 = state_31687__$1;
(statearr_31711_31793[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (33))){
var state_31687__$1 = state_31687;
var statearr_31712_31794 = state_31687__$1;
(statearr_31712_31794[(2)] = false);

(statearr_31712_31794[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (13))){
var inst_31561 = (state_31687[(22)]);
var inst_31565 = cljs.core.chunk_first.call(null,inst_31561);
var inst_31566 = cljs.core.chunk_rest.call(null,inst_31561);
var inst_31567 = cljs.core.count.call(null,inst_31565);
var inst_31548 = inst_31566;
var inst_31549 = inst_31565;
var inst_31550 = inst_31567;
var inst_31551 = (0);
var state_31687__$1 = (function (){var statearr_31713 = state_31687;
(statearr_31713[(7)] = inst_31551);

(statearr_31713[(8)] = inst_31549);

(statearr_31713[(9)] = inst_31548);

(statearr_31713[(10)] = inst_31550);

return statearr_31713;
})();
var statearr_31714_31795 = state_31687__$1;
(statearr_31714_31795[(2)] = null);

(statearr_31714_31795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (22))){
var inst_31601 = (state_31687[(19)]);
var inst_31605 = (state_31687[(23)]);
var inst_31609 = (state_31687[(24)]);
var inst_31604 = (state_31687[(25)]);
var inst_31604__$1 = (state_31687[(2)]);
var inst_31605__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31604__$1);
var inst_31606 = (function (){var all_files = inst_31601;
var res_SINGLEQUOTE_ = inst_31604__$1;
var res = inst_31605__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31601,inst_31605,inst_31609,inst_31604,inst_31604__$1,inst_31605__$1,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31284_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31284_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31601,inst_31605,inst_31609,inst_31604,inst_31604__$1,inst_31605__$1,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31607 = cljs.core.filter.call(null,inst_31606,inst_31604__$1);
var inst_31608 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31609__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31608);
var inst_31610 = cljs.core.not_empty.call(null,inst_31609__$1);
var state_31687__$1 = (function (){var statearr_31715 = state_31687;
(statearr_31715[(23)] = inst_31605__$1);

(statearr_31715[(26)] = inst_31607);

(statearr_31715[(24)] = inst_31609__$1);

(statearr_31715[(25)] = inst_31604__$1);

return statearr_31715;
})();
if(cljs.core.truth_(inst_31610)){
var statearr_31716_31796 = state_31687__$1;
(statearr_31716_31796[(1)] = (23));

} else {
var statearr_31717_31797 = state_31687__$1;
(statearr_31717_31797[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (36))){
var state_31687__$1 = state_31687;
var statearr_31718_31798 = state_31687__$1;
(statearr_31718_31798[(2)] = false);

(statearr_31718_31798[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (41))){
var inst_31662 = (state_31687[(20)]);
var inst_31666 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31667 = cljs.core.map.call(null,inst_31666,inst_31662);
var inst_31668 = cljs.core.pr_str.call(null,inst_31667);
var inst_31669 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31668)].join('');
var inst_31670 = figwheel.client.utils.log.call(null,inst_31669);
var state_31687__$1 = state_31687;
var statearr_31719_31799 = state_31687__$1;
(statearr_31719_31799[(2)] = inst_31670);

(statearr_31719_31799[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (43))){
var inst_31663 = (state_31687[(21)]);
var inst_31673 = (state_31687[(2)]);
var inst_31674 = cljs.core.not_empty.call(null,inst_31663);
var state_31687__$1 = (function (){var statearr_31720 = state_31687;
(statearr_31720[(27)] = inst_31673);

return statearr_31720;
})();
if(cljs.core.truth_(inst_31674)){
var statearr_31721_31800 = state_31687__$1;
(statearr_31721_31800[(1)] = (44));

} else {
var statearr_31722_31801 = state_31687__$1;
(statearr_31722_31801[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (29))){
var inst_31601 = (state_31687[(19)]);
var inst_31605 = (state_31687[(23)]);
var inst_31607 = (state_31687[(26)]);
var inst_31641 = (state_31687[(16)]);
var inst_31609 = (state_31687[(24)]);
var inst_31604 = (state_31687[(25)]);
var inst_31637 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31640 = (function (){var all_files = inst_31601;
var res_SINGLEQUOTE_ = inst_31604;
var res = inst_31605;
var files_not_loaded = inst_31607;
var dependencies_that_loaded = inst_31609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31601,inst_31605,inst_31607,inst_31641,inst_31609,inst_31604,inst_31637,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31639){
var map__31723 = p__31639;
var map__31723__$1 = ((((!((map__31723 == null)))?((((map__31723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31723):map__31723);
var namespace = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31601,inst_31605,inst_31607,inst_31641,inst_31609,inst_31604,inst_31637,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31641__$1 = cljs.core.group_by.call(null,inst_31640,inst_31607);
var inst_31643 = (inst_31641__$1 == null);
var inst_31644 = cljs.core.not.call(null,inst_31643);
var state_31687__$1 = (function (){var statearr_31725 = state_31687;
(statearr_31725[(16)] = inst_31641__$1);

(statearr_31725[(28)] = inst_31637);

return statearr_31725;
})();
if(inst_31644){
var statearr_31726_31802 = state_31687__$1;
(statearr_31726_31802[(1)] = (32));

} else {
var statearr_31727_31803 = state_31687__$1;
(statearr_31727_31803[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (44))){
var inst_31663 = (state_31687[(21)]);
var inst_31676 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31663);
var inst_31677 = cljs.core.pr_str.call(null,inst_31676);
var inst_31678 = [cljs.core.str("not required: "),cljs.core.str(inst_31677)].join('');
var inst_31679 = figwheel.client.utils.log.call(null,inst_31678);
var state_31687__$1 = state_31687;
var statearr_31728_31804 = state_31687__$1;
(statearr_31728_31804[(2)] = inst_31679);

(statearr_31728_31804[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (6))){
var inst_31582 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31729_31805 = state_31687__$1;
(statearr_31729_31805[(2)] = inst_31582);

(statearr_31729_31805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (28))){
var inst_31607 = (state_31687[(26)]);
var inst_31634 = (state_31687[(2)]);
var inst_31635 = cljs.core.not_empty.call(null,inst_31607);
var state_31687__$1 = (function (){var statearr_31730 = state_31687;
(statearr_31730[(29)] = inst_31634);

return statearr_31730;
})();
if(cljs.core.truth_(inst_31635)){
var statearr_31731_31806 = state_31687__$1;
(statearr_31731_31806[(1)] = (29));

} else {
var statearr_31732_31807 = state_31687__$1;
(statearr_31732_31807[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (25))){
var inst_31605 = (state_31687[(23)]);
var inst_31621 = (state_31687[(2)]);
var inst_31622 = cljs.core.not_empty.call(null,inst_31605);
var state_31687__$1 = (function (){var statearr_31733 = state_31687;
(statearr_31733[(30)] = inst_31621);

return statearr_31733;
})();
if(cljs.core.truth_(inst_31622)){
var statearr_31734_31808 = state_31687__$1;
(statearr_31734_31808[(1)] = (26));

} else {
var statearr_31735_31809 = state_31687__$1;
(statearr_31735_31809[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (34))){
var inst_31656 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
if(cljs.core.truth_(inst_31656)){
var statearr_31736_31810 = state_31687__$1;
(statearr_31736_31810[(1)] = (38));

} else {
var statearr_31737_31811 = state_31687__$1;
(statearr_31737_31811[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (17))){
var state_31687__$1 = state_31687;
var statearr_31738_31812 = state_31687__$1;
(statearr_31738_31812[(2)] = recompile_dependents);

(statearr_31738_31812[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (3))){
var state_31687__$1 = state_31687;
var statearr_31739_31813 = state_31687__$1;
(statearr_31739_31813[(2)] = null);

(statearr_31739_31813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (12))){
var inst_31578 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31740_31814 = state_31687__$1;
(statearr_31740_31814[(2)] = inst_31578);

(statearr_31740_31814[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (2))){
var inst_31540 = (state_31687[(13)]);
var inst_31547 = cljs.core.seq.call(null,inst_31540);
var inst_31548 = inst_31547;
var inst_31549 = null;
var inst_31550 = (0);
var inst_31551 = (0);
var state_31687__$1 = (function (){var statearr_31741 = state_31687;
(statearr_31741[(7)] = inst_31551);

(statearr_31741[(8)] = inst_31549);

(statearr_31741[(9)] = inst_31548);

(statearr_31741[(10)] = inst_31550);

return statearr_31741;
})();
var statearr_31742_31815 = state_31687__$1;
(statearr_31742_31815[(2)] = null);

(statearr_31742_31815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (23))){
var inst_31601 = (state_31687[(19)]);
var inst_31605 = (state_31687[(23)]);
var inst_31607 = (state_31687[(26)]);
var inst_31609 = (state_31687[(24)]);
var inst_31604 = (state_31687[(25)]);
var inst_31612 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31614 = (function (){var all_files = inst_31601;
var res_SINGLEQUOTE_ = inst_31604;
var res = inst_31605;
var files_not_loaded = inst_31607;
var dependencies_that_loaded = inst_31609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31601,inst_31605,inst_31607,inst_31609,inst_31604,inst_31612,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31613){
var map__31743 = p__31613;
var map__31743__$1 = ((((!((map__31743 == null)))?((((map__31743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31743):map__31743);
var request_url = cljs.core.get.call(null,map__31743__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31601,inst_31605,inst_31607,inst_31609,inst_31604,inst_31612,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31615 = cljs.core.reverse.call(null,inst_31609);
var inst_31616 = cljs.core.map.call(null,inst_31614,inst_31615);
var inst_31617 = cljs.core.pr_str.call(null,inst_31616);
var inst_31618 = figwheel.client.utils.log.call(null,inst_31617);
var state_31687__$1 = (function (){var statearr_31745 = state_31687;
(statearr_31745[(31)] = inst_31612);

return statearr_31745;
})();
var statearr_31746_31816 = state_31687__$1;
(statearr_31746_31816[(2)] = inst_31618);

(statearr_31746_31816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (35))){
var state_31687__$1 = state_31687;
var statearr_31747_31817 = state_31687__$1;
(statearr_31747_31817[(2)] = true);

(statearr_31747_31817[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (19))){
var inst_31591 = (state_31687[(12)]);
var inst_31597 = figwheel.client.file_reloading.expand_files.call(null,inst_31591);
var state_31687__$1 = state_31687;
var statearr_31748_31818 = state_31687__$1;
(statearr_31748_31818[(2)] = inst_31597);

(statearr_31748_31818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (11))){
var state_31687__$1 = state_31687;
var statearr_31749_31819 = state_31687__$1;
(statearr_31749_31819[(2)] = null);

(statearr_31749_31819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (9))){
var inst_31580 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31750_31820 = state_31687__$1;
(statearr_31750_31820[(2)] = inst_31580);

(statearr_31750_31820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (5))){
var inst_31551 = (state_31687[(7)]);
var inst_31550 = (state_31687[(10)]);
var inst_31553 = (inst_31551 < inst_31550);
var inst_31554 = inst_31553;
var state_31687__$1 = state_31687;
if(cljs.core.truth_(inst_31554)){
var statearr_31751_31821 = state_31687__$1;
(statearr_31751_31821[(1)] = (7));

} else {
var statearr_31752_31822 = state_31687__$1;
(statearr_31752_31822[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (14))){
var inst_31561 = (state_31687[(22)]);
var inst_31570 = cljs.core.first.call(null,inst_31561);
var inst_31571 = figwheel.client.file_reloading.eval_body.call(null,inst_31570,opts);
var inst_31572 = cljs.core.next.call(null,inst_31561);
var inst_31548 = inst_31572;
var inst_31549 = null;
var inst_31550 = (0);
var inst_31551 = (0);
var state_31687__$1 = (function (){var statearr_31753 = state_31687;
(statearr_31753[(7)] = inst_31551);

(statearr_31753[(8)] = inst_31549);

(statearr_31753[(9)] = inst_31548);

(statearr_31753[(10)] = inst_31550);

(statearr_31753[(32)] = inst_31571);

return statearr_31753;
})();
var statearr_31754_31823 = state_31687__$1;
(statearr_31754_31823[(2)] = null);

(statearr_31754_31823[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (45))){
var state_31687__$1 = state_31687;
var statearr_31755_31824 = state_31687__$1;
(statearr_31755_31824[(2)] = null);

(statearr_31755_31824[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (26))){
var inst_31601 = (state_31687[(19)]);
var inst_31605 = (state_31687[(23)]);
var inst_31607 = (state_31687[(26)]);
var inst_31609 = (state_31687[(24)]);
var inst_31604 = (state_31687[(25)]);
var inst_31624 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31626 = (function (){var all_files = inst_31601;
var res_SINGLEQUOTE_ = inst_31604;
var res = inst_31605;
var files_not_loaded = inst_31607;
var dependencies_that_loaded = inst_31609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31601,inst_31605,inst_31607,inst_31609,inst_31604,inst_31624,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31625){
var map__31756 = p__31625;
var map__31756__$1 = ((((!((map__31756 == null)))?((((map__31756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31756):map__31756);
var namespace = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31601,inst_31605,inst_31607,inst_31609,inst_31604,inst_31624,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31627 = cljs.core.map.call(null,inst_31626,inst_31605);
var inst_31628 = cljs.core.pr_str.call(null,inst_31627);
var inst_31629 = figwheel.client.utils.log.call(null,inst_31628);
var inst_31630 = (function (){var all_files = inst_31601;
var res_SINGLEQUOTE_ = inst_31604;
var res = inst_31605;
var files_not_loaded = inst_31607;
var dependencies_that_loaded = inst_31609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31601,inst_31605,inst_31607,inst_31609,inst_31604,inst_31624,inst_31626,inst_31627,inst_31628,inst_31629,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31601,inst_31605,inst_31607,inst_31609,inst_31604,inst_31624,inst_31626,inst_31627,inst_31628,inst_31629,state_val_31688,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31631 = setTimeout(inst_31630,(10));
var state_31687__$1 = (function (){var statearr_31758 = state_31687;
(statearr_31758[(33)] = inst_31624);

(statearr_31758[(34)] = inst_31629);

return statearr_31758;
})();
var statearr_31759_31825 = state_31687__$1;
(statearr_31759_31825[(2)] = inst_31631);

(statearr_31759_31825[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (16))){
var state_31687__$1 = state_31687;
var statearr_31760_31826 = state_31687__$1;
(statearr_31760_31826[(2)] = reload_dependents);

(statearr_31760_31826[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (38))){
var inst_31641 = (state_31687[(16)]);
var inst_31658 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31641);
var state_31687__$1 = state_31687;
var statearr_31761_31827 = state_31687__$1;
(statearr_31761_31827[(2)] = inst_31658);

(statearr_31761_31827[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (30))){
var state_31687__$1 = state_31687;
var statearr_31762_31828 = state_31687__$1;
(statearr_31762_31828[(2)] = null);

(statearr_31762_31828[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (10))){
var inst_31561 = (state_31687[(22)]);
var inst_31563 = cljs.core.chunked_seq_QMARK_.call(null,inst_31561);
var state_31687__$1 = state_31687;
if(inst_31563){
var statearr_31763_31829 = state_31687__$1;
(statearr_31763_31829[(1)] = (13));

} else {
var statearr_31764_31830 = state_31687__$1;
(statearr_31764_31830[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (18))){
var inst_31595 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
if(cljs.core.truth_(inst_31595)){
var statearr_31765_31831 = state_31687__$1;
(statearr_31765_31831[(1)] = (19));

} else {
var statearr_31766_31832 = state_31687__$1;
(statearr_31766_31832[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (42))){
var state_31687__$1 = state_31687;
var statearr_31767_31833 = state_31687__$1;
(statearr_31767_31833[(2)] = null);

(statearr_31767_31833[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (37))){
var inst_31653 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31768_31834 = state_31687__$1;
(statearr_31768_31834[(2)] = inst_31653);

(statearr_31768_31834[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (8))){
var inst_31561 = (state_31687[(22)]);
var inst_31548 = (state_31687[(9)]);
var inst_31561__$1 = cljs.core.seq.call(null,inst_31548);
var state_31687__$1 = (function (){var statearr_31769 = state_31687;
(statearr_31769[(22)] = inst_31561__$1);

return statearr_31769;
})();
if(inst_31561__$1){
var statearr_31770_31835 = state_31687__$1;
(statearr_31770_31835[(1)] = (10));

} else {
var statearr_31771_31836 = state_31687__$1;
(statearr_31771_31836[(1)] = (11));

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
}
});})(c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23768__auto__,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23769__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23769__auto____0 = (function (){
var statearr_31775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31775[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23769__auto__);

(statearr_31775[(1)] = (1));

return statearr_31775;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23769__auto____1 = (function (state_31687){
while(true){
var ret_value__23770__auto__ = (function (){try{while(true){
var result__23771__auto__ = switch__23768__auto__.call(null,state_31687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23771__auto__;
}
break;
}
}catch (e31776){if((e31776 instanceof Object)){
var ex__23772__auto__ = e31776;
var statearr_31777_31837 = state_31687;
(statearr_31777_31837[(5)] = ex__23772__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31838 = state_31687;
state_31687 = G__31838;
continue;
} else {
return ret_value__23770__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23769__auto__ = function(state_31687){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23769__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23769__auto____1.call(this,state_31687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23769__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23769__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23769__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23769__auto__;
})()
;})(switch__23768__auto__,c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23882__auto__ = (function (){var statearr_31778 = f__23881__auto__.call(null);
(statearr_31778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23880__auto__);

return statearr_31778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23882__auto__);
});})(c__23880__auto__,map__31533,map__31533__$1,opts,before_jsload,on_jsload,reload_dependents,map__31534,map__31534__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23880__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31841,link){
var map__31844 = p__31841;
var map__31844__$1 = ((((!((map__31844 == null)))?((((map__31844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31844):map__31844);
var file = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31844,map__31844__$1,file){
return (function (p1__31839_SHARP_,p2__31840_SHARP_){
if(cljs.core._EQ_.call(null,p1__31839_SHARP_,p2__31840_SHARP_)){
return p1__31839_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31844,map__31844__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31850){
var map__31851 = p__31850;
var map__31851__$1 = ((((!((map__31851 == null)))?((((map__31851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31851):map__31851);
var match_length = cljs.core.get.call(null,map__31851__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31851__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31846_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31846_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31853 = [];
var len__22783__auto___31856 = arguments.length;
var i__22784__auto___31857 = (0);
while(true){
if((i__22784__auto___31857 < len__22783__auto___31856)){
args31853.push((arguments[i__22784__auto___31857]));

var G__31858 = (i__22784__auto___31857 + (1));
i__22784__auto___31857 = G__31858;
continue;
} else {
}
break;
}

var G__31855 = args31853.length;
switch (G__31855) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31853.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31860_SHARP_,p2__31861_SHARP_){
return cljs.core.assoc.call(null,p1__31860_SHARP_,cljs.core.get.call(null,p2__31861_SHARP_,key),p2__31861_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31862){
var map__31865 = p__31862;
var map__31865__$1 = ((((!((map__31865 == null)))?((((map__31865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31865):map__31865);
var f_data = map__31865__$1;
var file = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31867,files_msg){
var map__31874 = p__31867;
var map__31874__$1 = ((((!((map__31874 == null)))?((((map__31874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31874):map__31874);
var opts = map__31874__$1;
var on_cssload = cljs.core.get.call(null,map__31874__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31876_31880 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31877_31881 = null;
var count__31878_31882 = (0);
var i__31879_31883 = (0);
while(true){
if((i__31879_31883 < count__31878_31882)){
var f_31884 = cljs.core._nth.call(null,chunk__31877_31881,i__31879_31883);
figwheel.client.file_reloading.reload_css_file.call(null,f_31884);

var G__31885 = seq__31876_31880;
var G__31886 = chunk__31877_31881;
var G__31887 = count__31878_31882;
var G__31888 = (i__31879_31883 + (1));
seq__31876_31880 = G__31885;
chunk__31877_31881 = G__31886;
count__31878_31882 = G__31887;
i__31879_31883 = G__31888;
continue;
} else {
var temp__4657__auto___31889 = cljs.core.seq.call(null,seq__31876_31880);
if(temp__4657__auto___31889){
var seq__31876_31890__$1 = temp__4657__auto___31889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31876_31890__$1)){
var c__22524__auto___31891 = cljs.core.chunk_first.call(null,seq__31876_31890__$1);
var G__31892 = cljs.core.chunk_rest.call(null,seq__31876_31890__$1);
var G__31893 = c__22524__auto___31891;
var G__31894 = cljs.core.count.call(null,c__22524__auto___31891);
var G__31895 = (0);
seq__31876_31880 = G__31892;
chunk__31877_31881 = G__31893;
count__31878_31882 = G__31894;
i__31879_31883 = G__31895;
continue;
} else {
var f_31896 = cljs.core.first.call(null,seq__31876_31890__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31896);

var G__31897 = cljs.core.next.call(null,seq__31876_31890__$1);
var G__31898 = null;
var G__31899 = (0);
var G__31900 = (0);
seq__31876_31880 = G__31897;
chunk__31877_31881 = G__31898;
count__31878_31882 = G__31899;
i__31879_31883 = G__31900;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31874,map__31874__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31874,map__31874__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1467258285459