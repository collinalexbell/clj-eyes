// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__21695__auto__ = v;
if(cljs.core.truth_(and__21695__auto__)){
return (v > (0));
} else {
return and__21695__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__23974_SHARP_,p2__23973_SHARP_){
var vec__23976 = clojure.string.split.call(null,p2__23973_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__23976,(0),null);
var v = cljs.core.nth.call(null,vec__23976,(1),null);
return cljs.core.assoc.call(null,p1__23974_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__23977_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__23977_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__23978){
var vec__23980 = p__23978;
var k = cljs.core.nth.call(null,vec__23980,(0),null);
var v = cljs.core.nth.call(null,vec__23980,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__23981_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__23981_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__21695__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__21695__auto__){
var and__21695__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__21695__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__21695__auto____$1;
}
} else {
return and__21695__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__23982_SHARP_){
return cljs_http.client.decode_body.call(null,p1__23982_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__22785__auto__ = [];
var len__22778__auto___23987 = arguments.length;
var i__22779__auto___23988 = (0);
while(true){
if((i__22779__auto___23988 < len__22778__auto___23987)){
args__22785__auto__.push((arguments[i__22779__auto___23988]));

var G__23989 = (i__22779__auto___23988 + (1));
i__22779__auto___23988 = G__23989;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__23985){
var vec__23986 = p__23985;
var default_headers = cljs.core.nth.call(null,vec__23986,(0),null);
return ((function (vec__23986,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__21707__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__23986,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq23983){
var G__23984 = cljs.core.first.call(null,seq23983);
var seq23983__$1 = cljs.core.next.call(null,seq23983);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__23984,seq23983__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__22785__auto__ = [];
var len__22778__auto___23994 = arguments.length;
var i__22779__auto___23995 = (0);
while(true){
if((i__22779__auto___23995 < len__22778__auto___23994)){
args__22785__auto__.push((arguments[i__22779__auto___23995]));

var G__23996 = (i__22779__auto___23995 + (1));
i__22779__auto___23995 = G__23996;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__23992){
var vec__23993 = p__23992;
var accept = cljs.core.nth.call(null,vec__23993,(0),null);
return ((function (vec__23993,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__21707__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__23993,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq23990){
var G__23991 = cljs.core.first.call(null,seq23990);
var seq23990__$1 = cljs.core.next.call(null,seq23990);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__23991,seq23990__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__22785__auto__ = [];
var len__22778__auto___24001 = arguments.length;
var i__22779__auto___24002 = (0);
while(true){
if((i__22779__auto___24002 < len__22778__auto___24001)){
args__22785__auto__.push((arguments[i__22779__auto___24002]));

var G__24003 = (i__22779__auto___24002 + (1));
i__22779__auto___24002 = G__24003;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__23999){
var vec__24000 = p__23999;
var content_type = cljs.core.nth.call(null,vec__24000,(0),null);
return ((function (vec__24000,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__21707__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__24000,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq23997){
var G__23998 = cljs.core.first.call(null,seq23997);
var seq23997__$1 = cljs.core.next.call(null,seq23997);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__23998,seq23997__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__24006 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__24006__$1 = ((((!((map__24006 == null)))?((((map__24006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24006):map__24006);
var encoding = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__24012 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__24012__$1 = ((((!((map__24012 == null)))?((((map__24012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24012):map__24012);
var decoding = cljs.core.get.call(null,map__24012__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__24012__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__24012,map__24012__$1,decoding,decoding_opts){
return (function (p1__24008_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__24008_SHARP_,decoding,decoding_opts);
});})(map__24012,map__24012__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__24012,map__24012__$1,decoding,decoding_opts,transit_decode){
return (function (p1__24009_SHARP_){
return cljs_http.client.decode_body.call(null,p1__24009_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__24012,map__24012__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__24014_SHARP_){
return cljs_http.client.decode_body.call(null,p1__24014_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__24018){
var map__24019 = p__24018;
var map__24019__$1 = ((((!((map__24019 == null)))?((((map__24019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24019):map__24019);
var req = map__24019__$1;
var query_params = cljs.core.get.call(null,map__24019__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__24024){
var map__24025 = p__24024;
var map__24025__$1 = ((((!((map__24025 == null)))?((((map__24025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24025):map__24025);
var request = map__24025__$1;
var form_params = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__21695__auto__ = form_params;
if(cljs.core.truth_(and__21695__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__21695__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__24033_24039 = cljs.core.seq.call(null,params);
var chunk__24034_24040 = null;
var count__24035_24041 = (0);
var i__24036_24042 = (0);
while(true){
if((i__24036_24042 < count__24035_24041)){
var vec__24037_24043 = cljs.core._nth.call(null,chunk__24034_24040,i__24036_24042);
var k_24044 = cljs.core.nth.call(null,vec__24037_24043,(0),null);
var v_24045 = cljs.core.nth.call(null,vec__24037_24043,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_24045)){
form_data.append(cljs.core.name.call(null,k_24044),cljs.core.first.call(null,v_24045),cljs.core.second.call(null,v_24045));
} else {
form_data.append(cljs.core.name.call(null,k_24044),v_24045);
}

var G__24046 = seq__24033_24039;
var G__24047 = chunk__24034_24040;
var G__24048 = count__24035_24041;
var G__24049 = (i__24036_24042 + (1));
seq__24033_24039 = G__24046;
chunk__24034_24040 = G__24047;
count__24035_24041 = G__24048;
i__24036_24042 = G__24049;
continue;
} else {
var temp__4657__auto___24050 = cljs.core.seq.call(null,seq__24033_24039);
if(temp__4657__auto___24050){
var seq__24033_24051__$1 = temp__4657__auto___24050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24033_24051__$1)){
var c__22519__auto___24052 = cljs.core.chunk_first.call(null,seq__24033_24051__$1);
var G__24053 = cljs.core.chunk_rest.call(null,seq__24033_24051__$1);
var G__24054 = c__22519__auto___24052;
var G__24055 = cljs.core.count.call(null,c__22519__auto___24052);
var G__24056 = (0);
seq__24033_24039 = G__24053;
chunk__24034_24040 = G__24054;
count__24035_24041 = G__24055;
i__24036_24042 = G__24056;
continue;
} else {
var vec__24038_24057 = cljs.core.first.call(null,seq__24033_24051__$1);
var k_24058 = cljs.core.nth.call(null,vec__24038_24057,(0),null);
var v_24059 = cljs.core.nth.call(null,vec__24038_24057,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_24059)){
form_data.append(cljs.core.name.call(null,k_24058),cljs.core.first.call(null,v_24059),cljs.core.second.call(null,v_24059));
} else {
form_data.append(cljs.core.name.call(null,k_24058),v_24059);
}

var G__24060 = cljs.core.next.call(null,seq__24033_24051__$1);
var G__24061 = null;
var G__24062 = (0);
var G__24063 = (0);
seq__24033_24039 = G__24060;
chunk__24034_24040 = G__24061;
count__24035_24041 = G__24062;
i__24036_24042 = G__24063;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__24067){
var map__24068 = p__24067;
var map__24068__$1 = ((((!((map__24068 == null)))?((((map__24068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24068):map__24068);
var request = map__24068__$1;
var multipart_params = cljs.core.get.call(null,map__24068__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__24068__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__21695__auto__ = multipart_params;
if(cljs.core.truth_(and__21695__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__21695__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__24070_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__24070_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__24075){
var map__24076 = p__24075;
var map__24076__$1 = ((((!((map__24076 == null)))?((((map__24076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24076):map__24076);
var req = map__24076__$1;
var query_params = cljs.core.get.call(null,map__24076__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__24076,map__24076__$1,req,query_params){
return (function (p1__24071_SHARP_){
return cljs.core.merge.call(null,p1__24071_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__24076,map__24076__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__22785__auto__ = [];
var len__22778__auto___24082 = arguments.length;
var i__22779__auto___24083 = (0);
while(true){
if((i__22779__auto___24083 < len__22778__auto___24082)){
args__22785__auto__.push((arguments[i__22779__auto___24083]));

var G__24084 = (i__22779__auto___24083 + (1));
i__22779__auto___24083 = G__24084;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__24080){
var vec__24081 = p__24080;
var credentials = cljs.core.nth.call(null,vec__24081,(0),null);
return ((function (vec__24081,credentials){
return (function (req){
var credentials__$1 = (function (){var or__21707__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__24081,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq24078){
var G__24079 = cljs.core.first.call(null,seq24078);
var seq24078__$1 = cljs.core.next.call(null,seq24078);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__24079,seq24078__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__22785__auto__ = [];
var len__22778__auto___24089 = arguments.length;
var i__22779__auto___24090 = (0);
while(true){
if((i__22779__auto___24090 < len__22778__auto___24089)){
args__22785__auto__.push((arguments[i__22779__auto___24090]));

var G__24091 = (i__22779__auto___24090 + (1));
i__22779__auto___24090 = G__24091;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24087){
var vec__24088 = p__24087;
var req = cljs.core.nth.call(null,vec__24088,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq24085){
var G__24086 = cljs.core.first.call(null,seq24085);
var seq24085__$1 = cljs.core.next.call(null,seq24085);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__24086,seq24085__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__22785__auto__ = [];
var len__22778__auto___24096 = arguments.length;
var i__22779__auto___24097 = (0);
while(true){
if((i__22779__auto___24097 < len__22778__auto___24096)){
args__22785__auto__.push((arguments[i__22779__auto___24097]));

var G__24098 = (i__22779__auto___24097 + (1));
i__22779__auto___24097 = G__24098;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24094){
var vec__24095 = p__24094;
var req = cljs.core.nth.call(null,vec__24095,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq24092){
var G__24093 = cljs.core.first.call(null,seq24092);
var seq24092__$1 = cljs.core.next.call(null,seq24092);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__24093,seq24092__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__22785__auto__ = [];
var len__22778__auto___24103 = arguments.length;
var i__22779__auto___24104 = (0);
while(true){
if((i__22779__auto___24104 < len__22778__auto___24103)){
args__22785__auto__.push((arguments[i__22779__auto___24104]));

var G__24105 = (i__22779__auto___24104 + (1));
i__22779__auto___24104 = G__24105;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24101){
var vec__24102 = p__24101;
var req = cljs.core.nth.call(null,vec__24102,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq24099){
var G__24100 = cljs.core.first.call(null,seq24099);
var seq24099__$1 = cljs.core.next.call(null,seq24099);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__24100,seq24099__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__22785__auto__ = [];
var len__22778__auto___24110 = arguments.length;
var i__22779__auto___24111 = (0);
while(true){
if((i__22779__auto___24111 < len__22778__auto___24110)){
args__22785__auto__.push((arguments[i__22779__auto___24111]));

var G__24112 = (i__22779__auto___24111 + (1));
i__22779__auto___24111 = G__24112;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24108){
var vec__24109 = p__24108;
var req = cljs.core.nth.call(null,vec__24109,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq24106){
var G__24107 = cljs.core.first.call(null,seq24106);
var seq24106__$1 = cljs.core.next.call(null,seq24106);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__24107,seq24106__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__22785__auto__ = [];
var len__22778__auto___24117 = arguments.length;
var i__22779__auto___24118 = (0);
while(true){
if((i__22779__auto___24118 < len__22778__auto___24117)){
args__22785__auto__.push((arguments[i__22779__auto___24118]));

var G__24119 = (i__22779__auto___24118 + (1));
i__22779__auto___24118 = G__24119;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24115){
var vec__24116 = p__24115;
var req = cljs.core.nth.call(null,vec__24116,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq24113){
var G__24114 = cljs.core.first.call(null,seq24113);
var seq24113__$1 = cljs.core.next.call(null,seq24113);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__24114,seq24113__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__22785__auto__ = [];
var len__22778__auto___24124 = arguments.length;
var i__22779__auto___24125 = (0);
while(true){
if((i__22779__auto___24125 < len__22778__auto___24124)){
args__22785__auto__.push((arguments[i__22779__auto___24125]));

var G__24126 = (i__22779__auto___24125 + (1));
i__22779__auto___24125 = G__24126;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24122){
var vec__24123 = p__24122;
var req = cljs.core.nth.call(null,vec__24123,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq24120){
var G__24121 = cljs.core.first.call(null,seq24120);
var seq24120__$1 = cljs.core.next.call(null,seq24120);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__24121,seq24120__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__22785__auto__ = [];
var len__22778__auto___24131 = arguments.length;
var i__22779__auto___24132 = (0);
while(true){
if((i__22779__auto___24132 < len__22778__auto___24131)){
args__22785__auto__.push((arguments[i__22779__auto___24132]));

var G__24133 = (i__22779__auto___24132 + (1));
i__22779__auto___24132 = G__24133;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24129){
var vec__24130 = p__24129;
var req = cljs.core.nth.call(null,vec__24130,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq24127){
var G__24128 = cljs.core.first.call(null,seq24127);
var seq24127__$1 = cljs.core.next.call(null,seq24127);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__24128,seq24127__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__22785__auto__ = [];
var len__22778__auto___24138 = arguments.length;
var i__22779__auto___24139 = (0);
while(true){
if((i__22779__auto___24139 < len__22778__auto___24138)){
args__22785__auto__.push((arguments[i__22779__auto___24139]));

var G__24140 = (i__22779__auto___24139 + (1));
i__22779__auto___24139 = G__24140;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24136){
var vec__24137 = p__24136;
var req = cljs.core.nth.call(null,vec__24137,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq24134){
var G__24135 = cljs.core.first.call(null,seq24134);
var seq24134__$1 = cljs.core.next.call(null,seq24134);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__24135,seq24134__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__22785__auto__ = [];
var len__22778__auto___24145 = arguments.length;
var i__22779__auto___24146 = (0);
while(true){
if((i__22779__auto___24146 < len__22778__auto___24145)){
args__22785__auto__.push((arguments[i__22779__auto___24146]));

var G__24147 = (i__22779__auto___24146 + (1));
i__22779__auto___24146 = G__24147;
continue;
} else {
}
break;
}

var argseq__22786__auto__ = ((((1) < args__22785__auto__.length))?(new cljs.core.IndexedSeq(args__22785__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22786__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24143){
var vec__24144 = p__24143;
var req = cljs.core.nth.call(null,vec__24144,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq24141){
var G__24142 = cljs.core.first.call(null,seq24141);
var seq24141__$1 = cljs.core.next.call(null,seq24141);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__24142,seq24141__$1);
});

//# sourceMappingURL=client.js.map?rel=1466581480719