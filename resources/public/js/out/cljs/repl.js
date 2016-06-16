// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27841_27855 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27842_27856 = null;
var count__27843_27857 = (0);
var i__27844_27858 = (0);
while(true){
if((i__27844_27858 < count__27843_27857)){
var f_27859 = cljs.core._nth.call(null,chunk__27842_27856,i__27844_27858);
cljs.core.println.call(null,"  ",f_27859);

var G__27860 = seq__27841_27855;
var G__27861 = chunk__27842_27856;
var G__27862 = count__27843_27857;
var G__27863 = (i__27844_27858 + (1));
seq__27841_27855 = G__27860;
chunk__27842_27856 = G__27861;
count__27843_27857 = G__27862;
i__27844_27858 = G__27863;
continue;
} else {
var temp__4657__auto___27864 = cljs.core.seq.call(null,seq__27841_27855);
if(temp__4657__auto___27864){
var seq__27841_27865__$1 = temp__4657__auto___27864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27841_27865__$1)){
var c__22518__auto___27866 = cljs.core.chunk_first.call(null,seq__27841_27865__$1);
var G__27867 = cljs.core.chunk_rest.call(null,seq__27841_27865__$1);
var G__27868 = c__22518__auto___27866;
var G__27869 = cljs.core.count.call(null,c__22518__auto___27866);
var G__27870 = (0);
seq__27841_27855 = G__27867;
chunk__27842_27856 = G__27868;
count__27843_27857 = G__27869;
i__27844_27858 = G__27870;
continue;
} else {
var f_27871 = cljs.core.first.call(null,seq__27841_27865__$1);
cljs.core.println.call(null,"  ",f_27871);

var G__27872 = cljs.core.next.call(null,seq__27841_27865__$1);
var G__27873 = null;
var G__27874 = (0);
var G__27875 = (0);
seq__27841_27855 = G__27872;
chunk__27842_27856 = G__27873;
count__27843_27857 = G__27874;
i__27844_27858 = G__27875;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27876 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21707__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27876);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27876)))?cljs.core.second.call(null,arglists_27876):arglists_27876));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27845 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27846 = null;
var count__27847 = (0);
var i__27848 = (0);
while(true){
if((i__27848 < count__27847)){
var vec__27849 = cljs.core._nth.call(null,chunk__27846,i__27848);
var name = cljs.core.nth.call(null,vec__27849,(0),null);
var map__27850 = cljs.core.nth.call(null,vec__27849,(1),null);
var map__27850__$1 = ((((!((map__27850 == null)))?((((map__27850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27850):map__27850);
var doc = cljs.core.get.call(null,map__27850__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27850__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27877 = seq__27845;
var G__27878 = chunk__27846;
var G__27879 = count__27847;
var G__27880 = (i__27848 + (1));
seq__27845 = G__27877;
chunk__27846 = G__27878;
count__27847 = G__27879;
i__27848 = G__27880;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27845);
if(temp__4657__auto__){
var seq__27845__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27845__$1)){
var c__22518__auto__ = cljs.core.chunk_first.call(null,seq__27845__$1);
var G__27881 = cljs.core.chunk_rest.call(null,seq__27845__$1);
var G__27882 = c__22518__auto__;
var G__27883 = cljs.core.count.call(null,c__22518__auto__);
var G__27884 = (0);
seq__27845 = G__27881;
chunk__27846 = G__27882;
count__27847 = G__27883;
i__27848 = G__27884;
continue;
} else {
var vec__27852 = cljs.core.first.call(null,seq__27845__$1);
var name = cljs.core.nth.call(null,vec__27852,(0),null);
var map__27853 = cljs.core.nth.call(null,vec__27852,(1),null);
var map__27853__$1 = ((((!((map__27853 == null)))?((((map__27853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27853):map__27853);
var doc = cljs.core.get.call(null,map__27853__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27853__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27885 = cljs.core.next.call(null,seq__27845__$1);
var G__27886 = null;
var G__27887 = (0);
var G__27888 = (0);
seq__27845 = G__27885;
chunk__27846 = G__27886;
count__27847 = G__27887;
i__27848 = G__27888;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1465974664446