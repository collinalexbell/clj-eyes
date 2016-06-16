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
var or__21707__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21707__auto__){
return or__21707__auto__;
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
var or__21707__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26817_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26817_SHARP_));
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
var seq__26822 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26823 = null;
var count__26824 = (0);
var i__26825 = (0);
while(true){
if((i__26825 < count__26824)){
var n = cljs.core._nth.call(null,chunk__26823,i__26825);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26826 = seq__26822;
var G__26827 = chunk__26823;
var G__26828 = count__26824;
var G__26829 = (i__26825 + (1));
seq__26822 = G__26826;
chunk__26823 = G__26827;
count__26824 = G__26828;
i__26825 = G__26829;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26822);
if(temp__4657__auto__){
var seq__26822__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26822__$1)){
var c__22518__auto__ = cljs.core.chunk_first.call(null,seq__26822__$1);
var G__26830 = cljs.core.chunk_rest.call(null,seq__26822__$1);
var G__26831 = c__22518__auto__;
var G__26832 = cljs.core.count.call(null,c__22518__auto__);
var G__26833 = (0);
seq__26822 = G__26830;
chunk__26823 = G__26831;
count__26824 = G__26832;
i__26825 = G__26833;
continue;
} else {
var n = cljs.core.first.call(null,seq__26822__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26834 = cljs.core.next.call(null,seq__26822__$1);
var G__26835 = null;
var G__26836 = (0);
var G__26837 = (0);
seq__26822 = G__26834;
chunk__26823 = G__26835;
count__26824 = G__26836;
i__26825 = G__26837;
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

var seq__26876_26883 = cljs.core.seq.call(null,deps);
var chunk__26877_26884 = null;
var count__26878_26885 = (0);
var i__26879_26886 = (0);
while(true){
if((i__26879_26886 < count__26878_26885)){
var dep_26887 = cljs.core._nth.call(null,chunk__26877_26884,i__26879_26886);
topo_sort_helper_STAR_.call(null,dep_26887,(depth + (1)),state);

var G__26888 = seq__26876_26883;
var G__26889 = chunk__26877_26884;
var G__26890 = count__26878_26885;
var G__26891 = (i__26879_26886 + (1));
seq__26876_26883 = G__26888;
chunk__26877_26884 = G__26889;
count__26878_26885 = G__26890;
i__26879_26886 = G__26891;
continue;
} else {
var temp__4657__auto___26892 = cljs.core.seq.call(null,seq__26876_26883);
if(temp__4657__auto___26892){
var seq__26876_26893__$1 = temp__4657__auto___26892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26876_26893__$1)){
var c__22518__auto___26894 = cljs.core.chunk_first.call(null,seq__26876_26893__$1);
var G__26895 = cljs.core.chunk_rest.call(null,seq__26876_26893__$1);
var G__26896 = c__22518__auto___26894;
var G__26897 = cljs.core.count.call(null,c__22518__auto___26894);
var G__26898 = (0);
seq__26876_26883 = G__26895;
chunk__26877_26884 = G__26896;
count__26878_26885 = G__26897;
i__26879_26886 = G__26898;
continue;
} else {
var dep_26899 = cljs.core.first.call(null,seq__26876_26893__$1);
topo_sort_helper_STAR_.call(null,dep_26899,(depth + (1)),state);

var G__26900 = cljs.core.next.call(null,seq__26876_26893__$1);
var G__26901 = null;
var G__26902 = (0);
var G__26903 = (0);
seq__26876_26883 = G__26900;
chunk__26877_26884 = G__26901;
count__26878_26885 = G__26902;
i__26879_26886 = G__26903;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26880){
var vec__26882 = p__26880;
var x = cljs.core.nth.call(null,vec__26882,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26882,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26882,x,xs,get_deps__$1){
return (function (p1__26838_SHARP_){
return clojure.set.difference.call(null,p1__26838_SHARP_,x);
});})(vec__26882,x,xs,get_deps__$1))
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
var seq__26916 = cljs.core.seq.call(null,provides);
var chunk__26917 = null;
var count__26918 = (0);
var i__26919 = (0);
while(true){
if((i__26919 < count__26918)){
var prov = cljs.core._nth.call(null,chunk__26917,i__26919);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26920_26928 = cljs.core.seq.call(null,requires);
var chunk__26921_26929 = null;
var count__26922_26930 = (0);
var i__26923_26931 = (0);
while(true){
if((i__26923_26931 < count__26922_26930)){
var req_26932 = cljs.core._nth.call(null,chunk__26921_26929,i__26923_26931);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26932,prov);

var G__26933 = seq__26920_26928;
var G__26934 = chunk__26921_26929;
var G__26935 = count__26922_26930;
var G__26936 = (i__26923_26931 + (1));
seq__26920_26928 = G__26933;
chunk__26921_26929 = G__26934;
count__26922_26930 = G__26935;
i__26923_26931 = G__26936;
continue;
} else {
var temp__4657__auto___26937 = cljs.core.seq.call(null,seq__26920_26928);
if(temp__4657__auto___26937){
var seq__26920_26938__$1 = temp__4657__auto___26937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26920_26938__$1)){
var c__22518__auto___26939 = cljs.core.chunk_first.call(null,seq__26920_26938__$1);
var G__26940 = cljs.core.chunk_rest.call(null,seq__26920_26938__$1);
var G__26941 = c__22518__auto___26939;
var G__26942 = cljs.core.count.call(null,c__22518__auto___26939);
var G__26943 = (0);
seq__26920_26928 = G__26940;
chunk__26921_26929 = G__26941;
count__26922_26930 = G__26942;
i__26923_26931 = G__26943;
continue;
} else {
var req_26944 = cljs.core.first.call(null,seq__26920_26938__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26944,prov);

var G__26945 = cljs.core.next.call(null,seq__26920_26938__$1);
var G__26946 = null;
var G__26947 = (0);
var G__26948 = (0);
seq__26920_26928 = G__26945;
chunk__26921_26929 = G__26946;
count__26922_26930 = G__26947;
i__26923_26931 = G__26948;
continue;
}
} else {
}
}
break;
}

var G__26949 = seq__26916;
var G__26950 = chunk__26917;
var G__26951 = count__26918;
var G__26952 = (i__26919 + (1));
seq__26916 = G__26949;
chunk__26917 = G__26950;
count__26918 = G__26951;
i__26919 = G__26952;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26916);
if(temp__4657__auto__){
var seq__26916__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26916__$1)){
var c__22518__auto__ = cljs.core.chunk_first.call(null,seq__26916__$1);
var G__26953 = cljs.core.chunk_rest.call(null,seq__26916__$1);
var G__26954 = c__22518__auto__;
var G__26955 = cljs.core.count.call(null,c__22518__auto__);
var G__26956 = (0);
seq__26916 = G__26953;
chunk__26917 = G__26954;
count__26918 = G__26955;
i__26919 = G__26956;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26916__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26924_26957 = cljs.core.seq.call(null,requires);
var chunk__26925_26958 = null;
var count__26926_26959 = (0);
var i__26927_26960 = (0);
while(true){
if((i__26927_26960 < count__26926_26959)){
var req_26961 = cljs.core._nth.call(null,chunk__26925_26958,i__26927_26960);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26961,prov);

var G__26962 = seq__26924_26957;
var G__26963 = chunk__26925_26958;
var G__26964 = count__26926_26959;
var G__26965 = (i__26927_26960 + (1));
seq__26924_26957 = G__26962;
chunk__26925_26958 = G__26963;
count__26926_26959 = G__26964;
i__26927_26960 = G__26965;
continue;
} else {
var temp__4657__auto___26966__$1 = cljs.core.seq.call(null,seq__26924_26957);
if(temp__4657__auto___26966__$1){
var seq__26924_26967__$1 = temp__4657__auto___26966__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26924_26967__$1)){
var c__22518__auto___26968 = cljs.core.chunk_first.call(null,seq__26924_26967__$1);
var G__26969 = cljs.core.chunk_rest.call(null,seq__26924_26967__$1);
var G__26970 = c__22518__auto___26968;
var G__26971 = cljs.core.count.call(null,c__22518__auto___26968);
var G__26972 = (0);
seq__26924_26957 = G__26969;
chunk__26925_26958 = G__26970;
count__26926_26959 = G__26971;
i__26927_26960 = G__26972;
continue;
} else {
var req_26973 = cljs.core.first.call(null,seq__26924_26967__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26973,prov);

var G__26974 = cljs.core.next.call(null,seq__26924_26967__$1);
var G__26975 = null;
var G__26976 = (0);
var G__26977 = (0);
seq__26924_26957 = G__26974;
chunk__26925_26958 = G__26975;
count__26926_26959 = G__26976;
i__26927_26960 = G__26977;
continue;
}
} else {
}
}
break;
}

var G__26978 = cljs.core.next.call(null,seq__26916__$1);
var G__26979 = null;
var G__26980 = (0);
var G__26981 = (0);
seq__26916 = G__26978;
chunk__26917 = G__26979;
count__26918 = G__26980;
i__26919 = G__26981;
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
var seq__26986_26990 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26987_26991 = null;
var count__26988_26992 = (0);
var i__26989_26993 = (0);
while(true){
if((i__26989_26993 < count__26988_26992)){
var ns_26994 = cljs.core._nth.call(null,chunk__26987_26991,i__26989_26993);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26994);

var G__26995 = seq__26986_26990;
var G__26996 = chunk__26987_26991;
var G__26997 = count__26988_26992;
var G__26998 = (i__26989_26993 + (1));
seq__26986_26990 = G__26995;
chunk__26987_26991 = G__26996;
count__26988_26992 = G__26997;
i__26989_26993 = G__26998;
continue;
} else {
var temp__4657__auto___26999 = cljs.core.seq.call(null,seq__26986_26990);
if(temp__4657__auto___26999){
var seq__26986_27000__$1 = temp__4657__auto___26999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26986_27000__$1)){
var c__22518__auto___27001 = cljs.core.chunk_first.call(null,seq__26986_27000__$1);
var G__27002 = cljs.core.chunk_rest.call(null,seq__26986_27000__$1);
var G__27003 = c__22518__auto___27001;
var G__27004 = cljs.core.count.call(null,c__22518__auto___27001);
var G__27005 = (0);
seq__26986_26990 = G__27002;
chunk__26987_26991 = G__27003;
count__26988_26992 = G__27004;
i__26989_26993 = G__27005;
continue;
} else {
var ns_27006 = cljs.core.first.call(null,seq__26986_27000__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27006);

var G__27007 = cljs.core.next.call(null,seq__26986_27000__$1);
var G__27008 = null;
var G__27009 = (0);
var G__27010 = (0);
seq__26986_26990 = G__27007;
chunk__26987_26991 = G__27008;
count__26988_26992 = G__27009;
i__26989_26993 = G__27010;
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
goog.require_figwheel_backup_ = (function (){var or__21707__auto__ = goog.require__;
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
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
var G__27011__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27012__i = 0, G__27012__a = new Array(arguments.length -  0);
while (G__27012__i < G__27012__a.length) {G__27012__a[G__27012__i] = arguments[G__27012__i + 0]; ++G__27012__i;}
  args = new cljs.core.IndexedSeq(G__27012__a,0);
} 
return G__27011__delegate.call(this,args);};
G__27011.cljs$lang$maxFixedArity = 0;
G__27011.cljs$lang$applyTo = (function (arglist__27013){
var args = cljs.core.seq(arglist__27013);
return G__27011__delegate(args);
});
G__27011.cljs$core$IFn$_invoke$arity$variadic = G__27011__delegate;
return G__27011;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27015 = cljs.core._EQ_;
var expr__27016 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27015.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27016))){
var path_parts = ((function (pred__27015,expr__27016){
return (function (p1__27014_SHARP_){
return clojure.string.split.call(null,p1__27014_SHARP_,/[\/\\]/);
});})(pred__27015,expr__27016))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27015,expr__27016){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27018){if((e27018 instanceof Error)){
var e = e27018;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27018;

}
}})());
});
;})(path_parts,sep,root,pred__27015,expr__27016))
} else {
if(cljs.core.truth_(pred__27015.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27016))){
return ((function (pred__27015,expr__27016){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27015,expr__27016){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27015,expr__27016))
);

return deferred.addErrback(((function (deferred,pred__27015,expr__27016){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27015,expr__27016))
);
});
;})(pred__27015,expr__27016))
} else {
return ((function (pred__27015,expr__27016){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27015,expr__27016))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27019,callback){
var map__27022 = p__27019;
var map__27022__$1 = ((((!((map__27022 == null)))?((((map__27022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27022):map__27022);
var file_msg = map__27022__$1;
var request_url = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27022,map__27022__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27022,map__27022__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto__){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto__){
return (function (state_27046){
var state_val_27047 = (state_27046[(1)]);
if((state_val_27047 === (7))){
var inst_27042 = (state_27046[(2)]);
var state_27046__$1 = state_27046;
var statearr_27048_27068 = state_27046__$1;
(statearr_27048_27068[(2)] = inst_27042);

(statearr_27048_27068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (1))){
var state_27046__$1 = state_27046;
var statearr_27049_27069 = state_27046__$1;
(statearr_27049_27069[(2)] = null);

(statearr_27049_27069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (4))){
var inst_27026 = (state_27046[(7)]);
var inst_27026__$1 = (state_27046[(2)]);
var state_27046__$1 = (function (){var statearr_27050 = state_27046;
(statearr_27050[(7)] = inst_27026__$1);

return statearr_27050;
})();
if(cljs.core.truth_(inst_27026__$1)){
var statearr_27051_27070 = state_27046__$1;
(statearr_27051_27070[(1)] = (5));

} else {
var statearr_27052_27071 = state_27046__$1;
(statearr_27052_27071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (6))){
var state_27046__$1 = state_27046;
var statearr_27053_27072 = state_27046__$1;
(statearr_27053_27072[(2)] = null);

(statearr_27053_27072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (3))){
var inst_27044 = (state_27046[(2)]);
var state_27046__$1 = state_27046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27046__$1,inst_27044);
} else {
if((state_val_27047 === (2))){
var state_27046__$1 = state_27046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27046__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27047 === (11))){
var inst_27038 = (state_27046[(2)]);
var state_27046__$1 = (function (){var statearr_27054 = state_27046;
(statearr_27054[(8)] = inst_27038);

return statearr_27054;
})();
var statearr_27055_27073 = state_27046__$1;
(statearr_27055_27073[(2)] = null);

(statearr_27055_27073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (9))){
var inst_27032 = (state_27046[(9)]);
var inst_27030 = (state_27046[(10)]);
var inst_27034 = inst_27032.call(null,inst_27030);
var state_27046__$1 = state_27046;
var statearr_27056_27074 = state_27046__$1;
(statearr_27056_27074[(2)] = inst_27034);

(statearr_27056_27074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (5))){
var inst_27026 = (state_27046[(7)]);
var inst_27028 = figwheel.client.file_reloading.blocking_load.call(null,inst_27026);
var state_27046__$1 = state_27046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27046__$1,(8),inst_27028);
} else {
if((state_val_27047 === (10))){
var inst_27030 = (state_27046[(10)]);
var inst_27036 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27030);
var state_27046__$1 = state_27046;
var statearr_27057_27075 = state_27046__$1;
(statearr_27057_27075[(2)] = inst_27036);

(statearr_27057_27075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (8))){
var inst_27026 = (state_27046[(7)]);
var inst_27032 = (state_27046[(9)]);
var inst_27030 = (state_27046[(2)]);
var inst_27031 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27032__$1 = cljs.core.get.call(null,inst_27031,inst_27026);
var state_27046__$1 = (function (){var statearr_27058 = state_27046;
(statearr_27058[(9)] = inst_27032__$1);

(statearr_27058[(10)] = inst_27030);

return statearr_27058;
})();
if(cljs.core.truth_(inst_27032__$1)){
var statearr_27059_27076 = state_27046__$1;
(statearr_27059_27076[(1)] = (9));

} else {
var statearr_27060_27077 = state_27046__$1;
(statearr_27060_27077[(1)] = (10));

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
});})(c__23874__auto__))
;
return ((function (switch__23762__auto__,c__23874__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23763__auto__ = null;
var figwheel$client$file_reloading$state_machine__23763__auto____0 = (function (){
var statearr_27064 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27064[(0)] = figwheel$client$file_reloading$state_machine__23763__auto__);

(statearr_27064[(1)] = (1));

return statearr_27064;
});
var figwheel$client$file_reloading$state_machine__23763__auto____1 = (function (state_27046){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_27046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e27065){if((e27065 instanceof Object)){
var ex__23766__auto__ = e27065;
var statearr_27066_27078 = state_27046;
(statearr_27066_27078[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27079 = state_27046;
state_27046 = G__27079;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23763__auto__ = function(state_27046){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23763__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23763__auto____1.call(this,state_27046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23763__auto____0;
figwheel$client$file_reloading$state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23763__auto____1;
return figwheel$client$file_reloading$state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto__))
})();
var state__23876__auto__ = (function (){var statearr_27067 = f__23875__auto__.call(null);
(statearr_27067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto__);

return statearr_27067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto__))
);

return c__23874__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27080,callback){
var map__27083 = p__27080;
var map__27083__$1 = ((((!((map__27083 == null)))?((((map__27083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27083):map__27083);
var file_msg = map__27083__$1;
var namespace = cljs.core.get.call(null,map__27083__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27083,map__27083__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27083,map__27083__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27085){
var map__27088 = p__27085;
var map__27088__$1 = ((((!((map__27088 == null)))?((((map__27088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27088):map__27088);
var file_msg = map__27088__$1;
var namespace = cljs.core.get.call(null,map__27088__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21695__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21695__auto__){
var or__21707__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
var or__21707__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21707__auto____$1)){
return or__21707__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21695__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27090,callback){
var map__27093 = p__27090;
var map__27093__$1 = ((((!((map__27093 == null)))?((((map__27093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27093):map__27093);
var file_msg = map__27093__$1;
var request_url = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23874__auto___27181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto___27181,out){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto___27181,out){
return (function (state_27163){
var state_val_27164 = (state_27163[(1)]);
if((state_val_27164 === (1))){
var inst_27141 = cljs.core.nth.call(null,files,(0),null);
var inst_27142 = cljs.core.nthnext.call(null,files,(1));
var inst_27143 = files;
var state_27163__$1 = (function (){var statearr_27165 = state_27163;
(statearr_27165[(7)] = inst_27142);

(statearr_27165[(8)] = inst_27143);

(statearr_27165[(9)] = inst_27141);

return statearr_27165;
})();
var statearr_27166_27182 = state_27163__$1;
(statearr_27166_27182[(2)] = null);

(statearr_27166_27182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27164 === (2))){
var inst_27146 = (state_27163[(10)]);
var inst_27143 = (state_27163[(8)]);
var inst_27146__$1 = cljs.core.nth.call(null,inst_27143,(0),null);
var inst_27147 = cljs.core.nthnext.call(null,inst_27143,(1));
var inst_27148 = (inst_27146__$1 == null);
var inst_27149 = cljs.core.not.call(null,inst_27148);
var state_27163__$1 = (function (){var statearr_27167 = state_27163;
(statearr_27167[(10)] = inst_27146__$1);

(statearr_27167[(11)] = inst_27147);

return statearr_27167;
})();
if(inst_27149){
var statearr_27168_27183 = state_27163__$1;
(statearr_27168_27183[(1)] = (4));

} else {
var statearr_27169_27184 = state_27163__$1;
(statearr_27169_27184[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27164 === (3))){
var inst_27161 = (state_27163[(2)]);
var state_27163__$1 = state_27163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27163__$1,inst_27161);
} else {
if((state_val_27164 === (4))){
var inst_27146 = (state_27163[(10)]);
var inst_27151 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27146);
var state_27163__$1 = state_27163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27163__$1,(7),inst_27151);
} else {
if((state_val_27164 === (5))){
var inst_27157 = cljs.core.async.close_BANG_.call(null,out);
var state_27163__$1 = state_27163;
var statearr_27170_27185 = state_27163__$1;
(statearr_27170_27185[(2)] = inst_27157);

(statearr_27170_27185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27164 === (6))){
var inst_27159 = (state_27163[(2)]);
var state_27163__$1 = state_27163;
var statearr_27171_27186 = state_27163__$1;
(statearr_27171_27186[(2)] = inst_27159);

(statearr_27171_27186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27164 === (7))){
var inst_27147 = (state_27163[(11)]);
var inst_27153 = (state_27163[(2)]);
var inst_27154 = cljs.core.async.put_BANG_.call(null,out,inst_27153);
var inst_27143 = inst_27147;
var state_27163__$1 = (function (){var statearr_27172 = state_27163;
(statearr_27172[(8)] = inst_27143);

(statearr_27172[(12)] = inst_27154);

return statearr_27172;
})();
var statearr_27173_27187 = state_27163__$1;
(statearr_27173_27187[(2)] = null);

(statearr_27173_27187[(1)] = (2));


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
});})(c__23874__auto___27181,out))
;
return ((function (switch__23762__auto__,c__23874__auto___27181,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23763__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23763__auto____0 = (function (){
var statearr_27177 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27177[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23763__auto__);

(statearr_27177[(1)] = (1));

return statearr_27177;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23763__auto____1 = (function (state_27163){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_27163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e27178){if((e27178 instanceof Object)){
var ex__23766__auto__ = e27178;
var statearr_27179_27188 = state_27163;
(statearr_27179_27188[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27189 = state_27163;
state_27163 = G__27189;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23763__auto__ = function(state_27163){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23763__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23763__auto____1.call(this,state_27163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23763__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23763__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto___27181,out))
})();
var state__23876__auto__ = (function (){var statearr_27180 = f__23875__auto__.call(null);
(statearr_27180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto___27181);

return statearr_27180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto___27181,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27190,opts){
var map__27194 = p__27190;
var map__27194__$1 = ((((!((map__27194 == null)))?((((map__27194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27194):map__27194);
var eval_body__$1 = cljs.core.get.call(null,map__27194__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27194__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21695__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21695__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21695__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27196){var e = e27196;
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
return (function (p1__27197_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27197_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27202){
var vec__27203 = p__27202;
var k = cljs.core.nth.call(null,vec__27203,(0),null);
var v = cljs.core.nth.call(null,vec__27203,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27204){
var vec__27205 = p__27204;
var k = cljs.core.nth.call(null,vec__27205,(0),null);
var v = cljs.core.nth.call(null,vec__27205,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27209,p__27210){
var map__27457 = p__27209;
var map__27457__$1 = ((((!((map__27457 == null)))?((((map__27457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27457):map__27457);
var opts = map__27457__$1;
var before_jsload = cljs.core.get.call(null,map__27457__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27457__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27457__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27458 = p__27210;
var map__27458__$1 = ((((!((map__27458 == null)))?((((map__27458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27458):map__27458);
var msg = map__27458__$1;
var files = cljs.core.get.call(null,map__27458__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27458__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27458__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23875__auto__ = (function (){var switch__23762__auto__ = ((function (c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27611){
var state_val_27612 = (state_27611[(1)]);
if((state_val_27612 === (7))){
var inst_27474 = (state_27611[(7)]);
var inst_27475 = (state_27611[(8)]);
var inst_27473 = (state_27611[(9)]);
var inst_27472 = (state_27611[(10)]);
var inst_27480 = cljs.core._nth.call(null,inst_27473,inst_27475);
var inst_27481 = figwheel.client.file_reloading.eval_body.call(null,inst_27480,opts);
var inst_27482 = (inst_27475 + (1));
var tmp27613 = inst_27474;
var tmp27614 = inst_27473;
var tmp27615 = inst_27472;
var inst_27472__$1 = tmp27615;
var inst_27473__$1 = tmp27614;
var inst_27474__$1 = tmp27613;
var inst_27475__$1 = inst_27482;
var state_27611__$1 = (function (){var statearr_27616 = state_27611;
(statearr_27616[(7)] = inst_27474__$1);

(statearr_27616[(8)] = inst_27475__$1);

(statearr_27616[(11)] = inst_27481);

(statearr_27616[(9)] = inst_27473__$1);

(statearr_27616[(10)] = inst_27472__$1);

return statearr_27616;
})();
var statearr_27617_27703 = state_27611__$1;
(statearr_27617_27703[(2)] = null);

(statearr_27617_27703[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (20))){
var inst_27515 = (state_27611[(12)]);
var inst_27523 = figwheel.client.file_reloading.sort_files.call(null,inst_27515);
var state_27611__$1 = state_27611;
var statearr_27618_27704 = state_27611__$1;
(statearr_27618_27704[(2)] = inst_27523);

(statearr_27618_27704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (27))){
var state_27611__$1 = state_27611;
var statearr_27619_27705 = state_27611__$1;
(statearr_27619_27705[(2)] = null);

(statearr_27619_27705[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (1))){
var inst_27464 = (state_27611[(13)]);
var inst_27461 = before_jsload.call(null,files);
var inst_27462 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27463 = (function (){return ((function (inst_27464,inst_27461,inst_27462,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27206_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27206_SHARP_);
});
;})(inst_27464,inst_27461,inst_27462,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27464__$1 = cljs.core.filter.call(null,inst_27463,files);
var inst_27465 = cljs.core.not_empty.call(null,inst_27464__$1);
var state_27611__$1 = (function (){var statearr_27620 = state_27611;
(statearr_27620[(14)] = inst_27462);

(statearr_27620[(13)] = inst_27464__$1);

(statearr_27620[(15)] = inst_27461);

return statearr_27620;
})();
if(cljs.core.truth_(inst_27465)){
var statearr_27621_27706 = state_27611__$1;
(statearr_27621_27706[(1)] = (2));

} else {
var statearr_27622_27707 = state_27611__$1;
(statearr_27622_27707[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (24))){
var state_27611__$1 = state_27611;
var statearr_27623_27708 = state_27611__$1;
(statearr_27623_27708[(2)] = null);

(statearr_27623_27708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (39))){
var inst_27565 = (state_27611[(16)]);
var state_27611__$1 = state_27611;
var statearr_27624_27709 = state_27611__$1;
(statearr_27624_27709[(2)] = inst_27565);

(statearr_27624_27709[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (46))){
var inst_27606 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27625_27710 = state_27611__$1;
(statearr_27625_27710[(2)] = inst_27606);

(statearr_27625_27710[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (4))){
var inst_27509 = (state_27611[(2)]);
var inst_27510 = cljs.core.List.EMPTY;
var inst_27511 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27510);
var inst_27512 = (function (){return ((function (inst_27509,inst_27510,inst_27511,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27207_SHARP_){
var and__21695__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27207_SHARP_);
if(cljs.core.truth_(and__21695__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27207_SHARP_));
} else {
return and__21695__auto__;
}
});
;})(inst_27509,inst_27510,inst_27511,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27513 = cljs.core.filter.call(null,inst_27512,files);
var inst_27514 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27515 = cljs.core.concat.call(null,inst_27513,inst_27514);
var state_27611__$1 = (function (){var statearr_27626 = state_27611;
(statearr_27626[(12)] = inst_27515);

(statearr_27626[(17)] = inst_27511);

(statearr_27626[(18)] = inst_27509);

return statearr_27626;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27627_27711 = state_27611__$1;
(statearr_27627_27711[(1)] = (16));

} else {
var statearr_27628_27712 = state_27611__$1;
(statearr_27628_27712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (15))){
var inst_27499 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27629_27713 = state_27611__$1;
(statearr_27629_27713[(2)] = inst_27499);

(statearr_27629_27713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (21))){
var inst_27525 = (state_27611[(19)]);
var inst_27525__$1 = (state_27611[(2)]);
var inst_27526 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27525__$1);
var state_27611__$1 = (function (){var statearr_27630 = state_27611;
(statearr_27630[(19)] = inst_27525__$1);

return statearr_27630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27611__$1,(22),inst_27526);
} else {
if((state_val_27612 === (31))){
var inst_27609 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27611__$1,inst_27609);
} else {
if((state_val_27612 === (32))){
var inst_27565 = (state_27611[(16)]);
var inst_27570 = inst_27565.cljs$lang$protocol_mask$partition0$;
var inst_27571 = (inst_27570 & (64));
var inst_27572 = inst_27565.cljs$core$ISeq$;
var inst_27573 = (inst_27571) || (inst_27572);
var state_27611__$1 = state_27611;
if(cljs.core.truth_(inst_27573)){
var statearr_27631_27714 = state_27611__$1;
(statearr_27631_27714[(1)] = (35));

} else {
var statearr_27632_27715 = state_27611__$1;
(statearr_27632_27715[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (40))){
var inst_27586 = (state_27611[(20)]);
var inst_27585 = (state_27611[(2)]);
var inst_27586__$1 = cljs.core.get.call(null,inst_27585,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27587 = cljs.core.get.call(null,inst_27585,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27588 = cljs.core.not_empty.call(null,inst_27586__$1);
var state_27611__$1 = (function (){var statearr_27633 = state_27611;
(statearr_27633[(21)] = inst_27587);

(statearr_27633[(20)] = inst_27586__$1);

return statearr_27633;
})();
if(cljs.core.truth_(inst_27588)){
var statearr_27634_27716 = state_27611__$1;
(statearr_27634_27716[(1)] = (41));

} else {
var statearr_27635_27717 = state_27611__$1;
(statearr_27635_27717[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (33))){
var state_27611__$1 = state_27611;
var statearr_27636_27718 = state_27611__$1;
(statearr_27636_27718[(2)] = false);

(statearr_27636_27718[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (13))){
var inst_27485 = (state_27611[(22)]);
var inst_27489 = cljs.core.chunk_first.call(null,inst_27485);
var inst_27490 = cljs.core.chunk_rest.call(null,inst_27485);
var inst_27491 = cljs.core.count.call(null,inst_27489);
var inst_27472 = inst_27490;
var inst_27473 = inst_27489;
var inst_27474 = inst_27491;
var inst_27475 = (0);
var state_27611__$1 = (function (){var statearr_27637 = state_27611;
(statearr_27637[(7)] = inst_27474);

(statearr_27637[(8)] = inst_27475);

(statearr_27637[(9)] = inst_27473);

(statearr_27637[(10)] = inst_27472);

return statearr_27637;
})();
var statearr_27638_27719 = state_27611__$1;
(statearr_27638_27719[(2)] = null);

(statearr_27638_27719[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (22))){
var inst_27529 = (state_27611[(23)]);
var inst_27525 = (state_27611[(19)]);
var inst_27533 = (state_27611[(24)]);
var inst_27528 = (state_27611[(25)]);
var inst_27528__$1 = (state_27611[(2)]);
var inst_27529__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27528__$1);
var inst_27530 = (function (){var all_files = inst_27525;
var res_SINGLEQUOTE_ = inst_27528__$1;
var res = inst_27529__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27529,inst_27525,inst_27533,inst_27528,inst_27528__$1,inst_27529__$1,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27208_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27208_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27529,inst_27525,inst_27533,inst_27528,inst_27528__$1,inst_27529__$1,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27531 = cljs.core.filter.call(null,inst_27530,inst_27528__$1);
var inst_27532 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27533__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27532);
var inst_27534 = cljs.core.not_empty.call(null,inst_27533__$1);
var state_27611__$1 = (function (){var statearr_27639 = state_27611;
(statearr_27639[(23)] = inst_27529__$1);

(statearr_27639[(26)] = inst_27531);

(statearr_27639[(24)] = inst_27533__$1);

(statearr_27639[(25)] = inst_27528__$1);

return statearr_27639;
})();
if(cljs.core.truth_(inst_27534)){
var statearr_27640_27720 = state_27611__$1;
(statearr_27640_27720[(1)] = (23));

} else {
var statearr_27641_27721 = state_27611__$1;
(statearr_27641_27721[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (36))){
var state_27611__$1 = state_27611;
var statearr_27642_27722 = state_27611__$1;
(statearr_27642_27722[(2)] = false);

(statearr_27642_27722[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (41))){
var inst_27586 = (state_27611[(20)]);
var inst_27590 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27591 = cljs.core.map.call(null,inst_27590,inst_27586);
var inst_27592 = cljs.core.pr_str.call(null,inst_27591);
var inst_27593 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27592)].join('');
var inst_27594 = figwheel.client.utils.log.call(null,inst_27593);
var state_27611__$1 = state_27611;
var statearr_27643_27723 = state_27611__$1;
(statearr_27643_27723[(2)] = inst_27594);

(statearr_27643_27723[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (43))){
var inst_27587 = (state_27611[(21)]);
var inst_27597 = (state_27611[(2)]);
var inst_27598 = cljs.core.not_empty.call(null,inst_27587);
var state_27611__$1 = (function (){var statearr_27644 = state_27611;
(statearr_27644[(27)] = inst_27597);

return statearr_27644;
})();
if(cljs.core.truth_(inst_27598)){
var statearr_27645_27724 = state_27611__$1;
(statearr_27645_27724[(1)] = (44));

} else {
var statearr_27646_27725 = state_27611__$1;
(statearr_27646_27725[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (29))){
var inst_27529 = (state_27611[(23)]);
var inst_27525 = (state_27611[(19)]);
var inst_27531 = (state_27611[(26)]);
var inst_27565 = (state_27611[(16)]);
var inst_27533 = (state_27611[(24)]);
var inst_27528 = (state_27611[(25)]);
var inst_27561 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27564 = (function (){var all_files = inst_27525;
var res_SINGLEQUOTE_ = inst_27528;
var res = inst_27529;
var files_not_loaded = inst_27531;
var dependencies_that_loaded = inst_27533;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27529,inst_27525,inst_27531,inst_27565,inst_27533,inst_27528,inst_27561,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27563){
var map__27647 = p__27563;
var map__27647__$1 = ((((!((map__27647 == null)))?((((map__27647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27647):map__27647);
var namespace = cljs.core.get.call(null,map__27647__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27529,inst_27525,inst_27531,inst_27565,inst_27533,inst_27528,inst_27561,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27565__$1 = cljs.core.group_by.call(null,inst_27564,inst_27531);
var inst_27567 = (inst_27565__$1 == null);
var inst_27568 = cljs.core.not.call(null,inst_27567);
var state_27611__$1 = (function (){var statearr_27649 = state_27611;
(statearr_27649[(28)] = inst_27561);

(statearr_27649[(16)] = inst_27565__$1);

return statearr_27649;
})();
if(inst_27568){
var statearr_27650_27726 = state_27611__$1;
(statearr_27650_27726[(1)] = (32));

} else {
var statearr_27651_27727 = state_27611__$1;
(statearr_27651_27727[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (44))){
var inst_27587 = (state_27611[(21)]);
var inst_27600 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27587);
var inst_27601 = cljs.core.pr_str.call(null,inst_27600);
var inst_27602 = [cljs.core.str("not required: "),cljs.core.str(inst_27601)].join('');
var inst_27603 = figwheel.client.utils.log.call(null,inst_27602);
var state_27611__$1 = state_27611;
var statearr_27652_27728 = state_27611__$1;
(statearr_27652_27728[(2)] = inst_27603);

(statearr_27652_27728[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (6))){
var inst_27506 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27653_27729 = state_27611__$1;
(statearr_27653_27729[(2)] = inst_27506);

(statearr_27653_27729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (28))){
var inst_27531 = (state_27611[(26)]);
var inst_27558 = (state_27611[(2)]);
var inst_27559 = cljs.core.not_empty.call(null,inst_27531);
var state_27611__$1 = (function (){var statearr_27654 = state_27611;
(statearr_27654[(29)] = inst_27558);

return statearr_27654;
})();
if(cljs.core.truth_(inst_27559)){
var statearr_27655_27730 = state_27611__$1;
(statearr_27655_27730[(1)] = (29));

} else {
var statearr_27656_27731 = state_27611__$1;
(statearr_27656_27731[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (25))){
var inst_27529 = (state_27611[(23)]);
var inst_27545 = (state_27611[(2)]);
var inst_27546 = cljs.core.not_empty.call(null,inst_27529);
var state_27611__$1 = (function (){var statearr_27657 = state_27611;
(statearr_27657[(30)] = inst_27545);

return statearr_27657;
})();
if(cljs.core.truth_(inst_27546)){
var statearr_27658_27732 = state_27611__$1;
(statearr_27658_27732[(1)] = (26));

} else {
var statearr_27659_27733 = state_27611__$1;
(statearr_27659_27733[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (34))){
var inst_27580 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
if(cljs.core.truth_(inst_27580)){
var statearr_27660_27734 = state_27611__$1;
(statearr_27660_27734[(1)] = (38));

} else {
var statearr_27661_27735 = state_27611__$1;
(statearr_27661_27735[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (17))){
var state_27611__$1 = state_27611;
var statearr_27662_27736 = state_27611__$1;
(statearr_27662_27736[(2)] = recompile_dependents);

(statearr_27662_27736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (3))){
var state_27611__$1 = state_27611;
var statearr_27663_27737 = state_27611__$1;
(statearr_27663_27737[(2)] = null);

(statearr_27663_27737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (12))){
var inst_27502 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27664_27738 = state_27611__$1;
(statearr_27664_27738[(2)] = inst_27502);

(statearr_27664_27738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (2))){
var inst_27464 = (state_27611[(13)]);
var inst_27471 = cljs.core.seq.call(null,inst_27464);
var inst_27472 = inst_27471;
var inst_27473 = null;
var inst_27474 = (0);
var inst_27475 = (0);
var state_27611__$1 = (function (){var statearr_27665 = state_27611;
(statearr_27665[(7)] = inst_27474);

(statearr_27665[(8)] = inst_27475);

(statearr_27665[(9)] = inst_27473);

(statearr_27665[(10)] = inst_27472);

return statearr_27665;
})();
var statearr_27666_27739 = state_27611__$1;
(statearr_27666_27739[(2)] = null);

(statearr_27666_27739[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (23))){
var inst_27529 = (state_27611[(23)]);
var inst_27525 = (state_27611[(19)]);
var inst_27531 = (state_27611[(26)]);
var inst_27533 = (state_27611[(24)]);
var inst_27528 = (state_27611[(25)]);
var inst_27536 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27538 = (function (){var all_files = inst_27525;
var res_SINGLEQUOTE_ = inst_27528;
var res = inst_27529;
var files_not_loaded = inst_27531;
var dependencies_that_loaded = inst_27533;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27529,inst_27525,inst_27531,inst_27533,inst_27528,inst_27536,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27537){
var map__27667 = p__27537;
var map__27667__$1 = ((((!((map__27667 == null)))?((((map__27667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27667):map__27667);
var request_url = cljs.core.get.call(null,map__27667__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27529,inst_27525,inst_27531,inst_27533,inst_27528,inst_27536,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27539 = cljs.core.reverse.call(null,inst_27533);
var inst_27540 = cljs.core.map.call(null,inst_27538,inst_27539);
var inst_27541 = cljs.core.pr_str.call(null,inst_27540);
var inst_27542 = figwheel.client.utils.log.call(null,inst_27541);
var state_27611__$1 = (function (){var statearr_27669 = state_27611;
(statearr_27669[(31)] = inst_27536);

return statearr_27669;
})();
var statearr_27670_27740 = state_27611__$1;
(statearr_27670_27740[(2)] = inst_27542);

(statearr_27670_27740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (35))){
var state_27611__$1 = state_27611;
var statearr_27671_27741 = state_27611__$1;
(statearr_27671_27741[(2)] = true);

(statearr_27671_27741[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (19))){
var inst_27515 = (state_27611[(12)]);
var inst_27521 = figwheel.client.file_reloading.expand_files.call(null,inst_27515);
var state_27611__$1 = state_27611;
var statearr_27672_27742 = state_27611__$1;
(statearr_27672_27742[(2)] = inst_27521);

(statearr_27672_27742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (11))){
var state_27611__$1 = state_27611;
var statearr_27673_27743 = state_27611__$1;
(statearr_27673_27743[(2)] = null);

(statearr_27673_27743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (9))){
var inst_27504 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27674_27744 = state_27611__$1;
(statearr_27674_27744[(2)] = inst_27504);

(statearr_27674_27744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (5))){
var inst_27474 = (state_27611[(7)]);
var inst_27475 = (state_27611[(8)]);
var inst_27477 = (inst_27475 < inst_27474);
var inst_27478 = inst_27477;
var state_27611__$1 = state_27611;
if(cljs.core.truth_(inst_27478)){
var statearr_27675_27745 = state_27611__$1;
(statearr_27675_27745[(1)] = (7));

} else {
var statearr_27676_27746 = state_27611__$1;
(statearr_27676_27746[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (14))){
var inst_27485 = (state_27611[(22)]);
var inst_27494 = cljs.core.first.call(null,inst_27485);
var inst_27495 = figwheel.client.file_reloading.eval_body.call(null,inst_27494,opts);
var inst_27496 = cljs.core.next.call(null,inst_27485);
var inst_27472 = inst_27496;
var inst_27473 = null;
var inst_27474 = (0);
var inst_27475 = (0);
var state_27611__$1 = (function (){var statearr_27677 = state_27611;
(statearr_27677[(7)] = inst_27474);

(statearr_27677[(8)] = inst_27475);

(statearr_27677[(9)] = inst_27473);

(statearr_27677[(10)] = inst_27472);

(statearr_27677[(32)] = inst_27495);

return statearr_27677;
})();
var statearr_27678_27747 = state_27611__$1;
(statearr_27678_27747[(2)] = null);

(statearr_27678_27747[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (45))){
var state_27611__$1 = state_27611;
var statearr_27679_27748 = state_27611__$1;
(statearr_27679_27748[(2)] = null);

(statearr_27679_27748[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (26))){
var inst_27529 = (state_27611[(23)]);
var inst_27525 = (state_27611[(19)]);
var inst_27531 = (state_27611[(26)]);
var inst_27533 = (state_27611[(24)]);
var inst_27528 = (state_27611[(25)]);
var inst_27548 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27550 = (function (){var all_files = inst_27525;
var res_SINGLEQUOTE_ = inst_27528;
var res = inst_27529;
var files_not_loaded = inst_27531;
var dependencies_that_loaded = inst_27533;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27529,inst_27525,inst_27531,inst_27533,inst_27528,inst_27548,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27549){
var map__27680 = p__27549;
var map__27680__$1 = ((((!((map__27680 == null)))?((((map__27680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27680):map__27680);
var namespace = cljs.core.get.call(null,map__27680__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27680__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27529,inst_27525,inst_27531,inst_27533,inst_27528,inst_27548,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27551 = cljs.core.map.call(null,inst_27550,inst_27529);
var inst_27552 = cljs.core.pr_str.call(null,inst_27551);
var inst_27553 = figwheel.client.utils.log.call(null,inst_27552);
var inst_27554 = (function (){var all_files = inst_27525;
var res_SINGLEQUOTE_ = inst_27528;
var res = inst_27529;
var files_not_loaded = inst_27531;
var dependencies_that_loaded = inst_27533;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27529,inst_27525,inst_27531,inst_27533,inst_27528,inst_27548,inst_27550,inst_27551,inst_27552,inst_27553,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27529,inst_27525,inst_27531,inst_27533,inst_27528,inst_27548,inst_27550,inst_27551,inst_27552,inst_27553,state_val_27612,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27555 = setTimeout(inst_27554,(10));
var state_27611__$1 = (function (){var statearr_27682 = state_27611;
(statearr_27682[(33)] = inst_27548);

(statearr_27682[(34)] = inst_27553);

return statearr_27682;
})();
var statearr_27683_27749 = state_27611__$1;
(statearr_27683_27749[(2)] = inst_27555);

(statearr_27683_27749[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (16))){
var state_27611__$1 = state_27611;
var statearr_27684_27750 = state_27611__$1;
(statearr_27684_27750[(2)] = reload_dependents);

(statearr_27684_27750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (38))){
var inst_27565 = (state_27611[(16)]);
var inst_27582 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27565);
var state_27611__$1 = state_27611;
var statearr_27685_27751 = state_27611__$1;
(statearr_27685_27751[(2)] = inst_27582);

(statearr_27685_27751[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (30))){
var state_27611__$1 = state_27611;
var statearr_27686_27752 = state_27611__$1;
(statearr_27686_27752[(2)] = null);

(statearr_27686_27752[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (10))){
var inst_27485 = (state_27611[(22)]);
var inst_27487 = cljs.core.chunked_seq_QMARK_.call(null,inst_27485);
var state_27611__$1 = state_27611;
if(inst_27487){
var statearr_27687_27753 = state_27611__$1;
(statearr_27687_27753[(1)] = (13));

} else {
var statearr_27688_27754 = state_27611__$1;
(statearr_27688_27754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (18))){
var inst_27519 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
if(cljs.core.truth_(inst_27519)){
var statearr_27689_27755 = state_27611__$1;
(statearr_27689_27755[(1)] = (19));

} else {
var statearr_27690_27756 = state_27611__$1;
(statearr_27690_27756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (42))){
var state_27611__$1 = state_27611;
var statearr_27691_27757 = state_27611__$1;
(statearr_27691_27757[(2)] = null);

(statearr_27691_27757[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (37))){
var inst_27577 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27692_27758 = state_27611__$1;
(statearr_27692_27758[(2)] = inst_27577);

(statearr_27692_27758[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (8))){
var inst_27485 = (state_27611[(22)]);
var inst_27472 = (state_27611[(10)]);
var inst_27485__$1 = cljs.core.seq.call(null,inst_27472);
var state_27611__$1 = (function (){var statearr_27693 = state_27611;
(statearr_27693[(22)] = inst_27485__$1);

return statearr_27693;
})();
if(inst_27485__$1){
var statearr_27694_27759 = state_27611__$1;
(statearr_27694_27759[(1)] = (10));

} else {
var statearr_27695_27760 = state_27611__$1;
(statearr_27695_27760[(1)] = (11));

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
});})(c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23762__auto__,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23763__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23763__auto____0 = (function (){
var statearr_27699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27699[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23763__auto__);

(statearr_27699[(1)] = (1));

return statearr_27699;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23763__auto____1 = (function (state_27611){
while(true){
var ret_value__23764__auto__ = (function (){try{while(true){
var result__23765__auto__ = switch__23762__auto__.call(null,state_27611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23765__auto__;
}
break;
}
}catch (e27700){if((e27700 instanceof Object)){
var ex__23766__auto__ = e27700;
var statearr_27701_27761 = state_27611;
(statearr_27701_27761[(5)] = ex__23766__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27762 = state_27611;
state_27611 = G__27762;
continue;
} else {
return ret_value__23764__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23763__auto__ = function(state_27611){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23763__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23763__auto____1.call(this,state_27611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23763__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23763__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23763__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23763__auto__;
})()
;})(switch__23762__auto__,c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23876__auto__ = (function (){var statearr_27702 = f__23875__auto__.call(null);
(statearr_27702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23874__auto__);

return statearr_27702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23876__auto__);
});})(c__23874__auto__,map__27457,map__27457__$1,opts,before_jsload,on_jsload,reload_dependents,map__27458,map__27458__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23874__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27765,link){
var map__27768 = p__27765;
var map__27768__$1 = ((((!((map__27768 == null)))?((((map__27768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27768):map__27768);
var file = cljs.core.get.call(null,map__27768__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27768,map__27768__$1,file){
return (function (p1__27763_SHARP_,p2__27764_SHARP_){
if(cljs.core._EQ_.call(null,p1__27763_SHARP_,p2__27764_SHARP_)){
return p1__27763_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27768,map__27768__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27774){
var map__27775 = p__27774;
var map__27775__$1 = ((((!((map__27775 == null)))?((((map__27775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27775):map__27775);
var match_length = cljs.core.get.call(null,map__27775__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27775__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27770_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27770_SHARP_);
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
var args27777 = [];
var len__22777__auto___27780 = arguments.length;
var i__22778__auto___27781 = (0);
while(true){
if((i__22778__auto___27781 < len__22777__auto___27780)){
args27777.push((arguments[i__22778__auto___27781]));

var G__27782 = (i__22778__auto___27781 + (1));
i__22778__auto___27781 = G__27782;
continue;
} else {
}
break;
}

var G__27779 = args27777.length;
switch (G__27779) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27777.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27784_SHARP_,p2__27785_SHARP_){
return cljs.core.assoc.call(null,p1__27784_SHARP_,cljs.core.get.call(null,p2__27785_SHARP_,key),p2__27785_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27786){
var map__27789 = p__27786;
var map__27789__$1 = ((((!((map__27789 == null)))?((((map__27789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27789):map__27789);
var f_data = map__27789__$1;
var file = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27791,files_msg){
var map__27798 = p__27791;
var map__27798__$1 = ((((!((map__27798 == null)))?((((map__27798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27798):map__27798);
var opts = map__27798__$1;
var on_cssload = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27800_27804 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27801_27805 = null;
var count__27802_27806 = (0);
var i__27803_27807 = (0);
while(true){
if((i__27803_27807 < count__27802_27806)){
var f_27808 = cljs.core._nth.call(null,chunk__27801_27805,i__27803_27807);
figwheel.client.file_reloading.reload_css_file.call(null,f_27808);

var G__27809 = seq__27800_27804;
var G__27810 = chunk__27801_27805;
var G__27811 = count__27802_27806;
var G__27812 = (i__27803_27807 + (1));
seq__27800_27804 = G__27809;
chunk__27801_27805 = G__27810;
count__27802_27806 = G__27811;
i__27803_27807 = G__27812;
continue;
} else {
var temp__4657__auto___27813 = cljs.core.seq.call(null,seq__27800_27804);
if(temp__4657__auto___27813){
var seq__27800_27814__$1 = temp__4657__auto___27813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27800_27814__$1)){
var c__22518__auto___27815 = cljs.core.chunk_first.call(null,seq__27800_27814__$1);
var G__27816 = cljs.core.chunk_rest.call(null,seq__27800_27814__$1);
var G__27817 = c__22518__auto___27815;
var G__27818 = cljs.core.count.call(null,c__22518__auto___27815);
var G__27819 = (0);
seq__27800_27804 = G__27816;
chunk__27801_27805 = G__27817;
count__27802_27806 = G__27818;
i__27803_27807 = G__27819;
continue;
} else {
var f_27820 = cljs.core.first.call(null,seq__27800_27814__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27820);

var G__27821 = cljs.core.next.call(null,seq__27800_27814__$1);
var G__27822 = null;
var G__27823 = (0);
var G__27824 = (0);
seq__27800_27804 = G__27821;
chunk__27801_27805 = G__27822;
count__27802_27806 = G__27823;
i__27803_27807 = G__27824;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27798,map__27798__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27798,map__27798__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1465974664194