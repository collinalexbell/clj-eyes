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
if(cljs.core.truth_((function (){var and__21701__auto__ = v;
if(cljs.core.truth_(and__21701__auto__)){
return (v > (0));
} else {
return and__21701__auto__;
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
return cljs.core.reduce.call(null,(function (p1__30683_SHARP_,p2__30682_SHARP_){
var vec__30685 = clojure.string.split.call(null,p2__30682_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__30685,(0),null);
var v = cljs.core.nth.call(null,vec__30685,(1),null);
return cljs.core.assoc.call(null,p1__30683_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__30686_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__30686_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__30687){
var vec__30689 = p__30687;
var k = cljs.core.nth.call(null,vec__30689,(0),null);
var v = cljs.core.nth.call(null,vec__30689,(1),null);
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
return (function (p1__30690_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__30690_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__21701__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__21701__auto__){
var and__21701__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__21701__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__21701__auto____$1;
}
} else {
return and__21701__auto__;
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
return cljs.core.async.map.call(null,(function (p1__30691_SHARP_){
return cljs_http.client.decode_body.call(null,p1__30691_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__22790__auto__ = [];
var len__22783__auto___30696 = arguments.length;
var i__22784__auto___30697 = (0);
while(true){
if((i__22784__auto___30697 < len__22783__auto___30696)){
args__22790__auto__.push((arguments[i__22784__auto___30697]));

var G__30698 = (i__22784__auto___30697 + (1));
i__22784__auto___30697 = G__30698;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30694){
var vec__30695 = p__30694;
var default_headers = cljs.core.nth.call(null,vec__30695,(0),null);
return ((function (vec__30695,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__21713__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
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
;})(vec__30695,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq30692){
var G__30693 = cljs.core.first.call(null,seq30692);
var seq30692__$1 = cljs.core.next.call(null,seq30692);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__30693,seq30692__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__22790__auto__ = [];
var len__22783__auto___30703 = arguments.length;
var i__22784__auto___30704 = (0);
while(true){
if((i__22784__auto___30704 < len__22783__auto___30703)){
args__22790__auto__.push((arguments[i__22784__auto___30704]));

var G__30705 = (i__22784__auto___30704 + (1));
i__22784__auto___30704 = G__30705;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30701){
var vec__30702 = p__30701;
var accept = cljs.core.nth.call(null,vec__30702,(0),null);
return ((function (vec__30702,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__21713__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
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
;})(vec__30702,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq30699){
var G__30700 = cljs.core.first.call(null,seq30699);
var seq30699__$1 = cljs.core.next.call(null,seq30699);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__30700,seq30699__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__22790__auto__ = [];
var len__22783__auto___30710 = arguments.length;
var i__22784__auto___30711 = (0);
while(true){
if((i__22784__auto___30711 < len__22783__auto___30710)){
args__22790__auto__.push((arguments[i__22784__auto___30711]));

var G__30712 = (i__22784__auto___30711 + (1));
i__22784__auto___30711 = G__30712;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30708){
var vec__30709 = p__30708;
var content_type = cljs.core.nth.call(null,vec__30709,(0),null);
return ((function (vec__30709,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__21713__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
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
;})(vec__30709,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq30706){
var G__30707 = cljs.core.first.call(null,seq30706);
var seq30706__$1 = cljs.core.next.call(null,seq30706);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__30707,seq30706__$1);
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
var map__30715 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__30715__$1 = ((((!((map__30715 == null)))?((((map__30715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30715):map__30715);
var encoding = cljs.core.get.call(null,map__30715__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__30715__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__30721 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__30721__$1 = ((((!((map__30721 == null)))?((((map__30721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30721):map__30721);
var decoding = cljs.core.get.call(null,map__30721__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__30721__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__30721,map__30721__$1,decoding,decoding_opts){
return (function (p1__30717_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__30717_SHARP_,decoding,decoding_opts);
});})(map__30721,map__30721__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__30721,map__30721__$1,decoding,decoding_opts,transit_decode){
return (function (p1__30718_SHARP_){
return cljs_http.client.decode_body.call(null,p1__30718_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__30721,map__30721__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__30723_SHARP_){
return cljs_http.client.decode_body.call(null,p1__30723_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__30727){
var map__30728 = p__30727;
var map__30728__$1 = ((((!((map__30728 == null)))?((((map__30728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30728):map__30728);
var req = map__30728__$1;
var query_params = cljs.core.get.call(null,map__30728__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__30733){
var map__30734 = p__30733;
var map__30734__$1 = ((((!((map__30734 == null)))?((((map__30734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30734):map__30734);
var request = map__30734__$1;
var form_params = cljs.core.get.call(null,map__30734__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__30734__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__30734__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__21701__auto__ = form_params;
if(cljs.core.truth_(and__21701__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__21701__auto__;
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
var seq__30742_30748 = cljs.core.seq.call(null,params);
var chunk__30743_30749 = null;
var count__30744_30750 = (0);
var i__30745_30751 = (0);
while(true){
if((i__30745_30751 < count__30744_30750)){
var vec__30746_30752 = cljs.core._nth.call(null,chunk__30743_30749,i__30745_30751);
var k_30753 = cljs.core.nth.call(null,vec__30746_30752,(0),null);
var v_30754 = cljs.core.nth.call(null,vec__30746_30752,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_30754)){
form_data.append(cljs.core.name.call(null,k_30753),cljs.core.first.call(null,v_30754),cljs.core.second.call(null,v_30754));
} else {
form_data.append(cljs.core.name.call(null,k_30753),v_30754);
}

var G__30755 = seq__30742_30748;
var G__30756 = chunk__30743_30749;
var G__30757 = count__30744_30750;
var G__30758 = (i__30745_30751 + (1));
seq__30742_30748 = G__30755;
chunk__30743_30749 = G__30756;
count__30744_30750 = G__30757;
i__30745_30751 = G__30758;
continue;
} else {
var temp__4657__auto___30759 = cljs.core.seq.call(null,seq__30742_30748);
if(temp__4657__auto___30759){
var seq__30742_30760__$1 = temp__4657__auto___30759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30742_30760__$1)){
var c__22524__auto___30761 = cljs.core.chunk_first.call(null,seq__30742_30760__$1);
var G__30762 = cljs.core.chunk_rest.call(null,seq__30742_30760__$1);
var G__30763 = c__22524__auto___30761;
var G__30764 = cljs.core.count.call(null,c__22524__auto___30761);
var G__30765 = (0);
seq__30742_30748 = G__30762;
chunk__30743_30749 = G__30763;
count__30744_30750 = G__30764;
i__30745_30751 = G__30765;
continue;
} else {
var vec__30747_30766 = cljs.core.first.call(null,seq__30742_30760__$1);
var k_30767 = cljs.core.nth.call(null,vec__30747_30766,(0),null);
var v_30768 = cljs.core.nth.call(null,vec__30747_30766,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_30768)){
form_data.append(cljs.core.name.call(null,k_30767),cljs.core.first.call(null,v_30768),cljs.core.second.call(null,v_30768));
} else {
form_data.append(cljs.core.name.call(null,k_30767),v_30768);
}

var G__30769 = cljs.core.next.call(null,seq__30742_30760__$1);
var G__30770 = null;
var G__30771 = (0);
var G__30772 = (0);
seq__30742_30748 = G__30769;
chunk__30743_30749 = G__30770;
count__30744_30750 = G__30771;
i__30745_30751 = G__30772;
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
return (function (p__30776){
var map__30777 = p__30776;
var map__30777__$1 = ((((!((map__30777 == null)))?((((map__30777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30777):map__30777);
var request = map__30777__$1;
var multipart_params = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__21701__auto__ = multipart_params;
if(cljs.core.truth_(and__21701__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__21701__auto__;
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
return (function (p1__30779_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__30779_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__30784){
var map__30785 = p__30784;
var map__30785__$1 = ((((!((map__30785 == null)))?((((map__30785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30785):map__30785);
var req = map__30785__$1;
var query_params = cljs.core.get.call(null,map__30785__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__30785,map__30785__$1,req,query_params){
return (function (p1__30780_SHARP_){
return cljs.core.merge.call(null,p1__30780_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__30785,map__30785__$1,req,query_params))
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
var args__22790__auto__ = [];
var len__22783__auto___30791 = arguments.length;
var i__22784__auto___30792 = (0);
while(true){
if((i__22784__auto___30792 < len__22783__auto___30791)){
args__22790__auto__.push((arguments[i__22784__auto___30792]));

var G__30793 = (i__22784__auto___30792 + (1));
i__22784__auto___30792 = G__30793;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30789){
var vec__30790 = p__30789;
var credentials = cljs.core.nth.call(null,vec__30790,(0),null);
return ((function (vec__30790,credentials){
return (function (req){
var credentials__$1 = (function (){var or__21713__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__21713__auto__)){
return or__21713__auto__;
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
;})(vec__30790,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq30787){
var G__30788 = cljs.core.first.call(null,seq30787);
var seq30787__$1 = cljs.core.next.call(null,seq30787);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__30788,seq30787__$1);
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
var args__22790__auto__ = [];
var len__22783__auto___30798 = arguments.length;
var i__22784__auto___30799 = (0);
while(true){
if((i__22784__auto___30799 < len__22783__auto___30798)){
args__22790__auto__.push((arguments[i__22784__auto___30799]));

var G__30800 = (i__22784__auto___30799 + (1));
i__22784__auto___30799 = G__30800;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30796){
var vec__30797 = p__30796;
var req = cljs.core.nth.call(null,vec__30797,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq30794){
var G__30795 = cljs.core.first.call(null,seq30794);
var seq30794__$1 = cljs.core.next.call(null,seq30794);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__30795,seq30794__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__22790__auto__ = [];
var len__22783__auto___30805 = arguments.length;
var i__22784__auto___30806 = (0);
while(true){
if((i__22784__auto___30806 < len__22783__auto___30805)){
args__22790__auto__.push((arguments[i__22784__auto___30806]));

var G__30807 = (i__22784__auto___30806 + (1));
i__22784__auto___30806 = G__30807;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30803){
var vec__30804 = p__30803;
var req = cljs.core.nth.call(null,vec__30804,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq30801){
var G__30802 = cljs.core.first.call(null,seq30801);
var seq30801__$1 = cljs.core.next.call(null,seq30801);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__30802,seq30801__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__22790__auto__ = [];
var len__22783__auto___30812 = arguments.length;
var i__22784__auto___30813 = (0);
while(true){
if((i__22784__auto___30813 < len__22783__auto___30812)){
args__22790__auto__.push((arguments[i__22784__auto___30813]));

var G__30814 = (i__22784__auto___30813 + (1));
i__22784__auto___30813 = G__30814;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30810){
var vec__30811 = p__30810;
var req = cljs.core.nth.call(null,vec__30811,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq30808){
var G__30809 = cljs.core.first.call(null,seq30808);
var seq30808__$1 = cljs.core.next.call(null,seq30808);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__30809,seq30808__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__22790__auto__ = [];
var len__22783__auto___30819 = arguments.length;
var i__22784__auto___30820 = (0);
while(true){
if((i__22784__auto___30820 < len__22783__auto___30819)){
args__22790__auto__.push((arguments[i__22784__auto___30820]));

var G__30821 = (i__22784__auto___30820 + (1));
i__22784__auto___30820 = G__30821;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30817){
var vec__30818 = p__30817;
var req = cljs.core.nth.call(null,vec__30818,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq30815){
var G__30816 = cljs.core.first.call(null,seq30815);
var seq30815__$1 = cljs.core.next.call(null,seq30815);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__30816,seq30815__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__22790__auto__ = [];
var len__22783__auto___30826 = arguments.length;
var i__22784__auto___30827 = (0);
while(true){
if((i__22784__auto___30827 < len__22783__auto___30826)){
args__22790__auto__.push((arguments[i__22784__auto___30827]));

var G__30828 = (i__22784__auto___30827 + (1));
i__22784__auto___30827 = G__30828;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30824){
var vec__30825 = p__30824;
var req = cljs.core.nth.call(null,vec__30825,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq30822){
var G__30823 = cljs.core.first.call(null,seq30822);
var seq30822__$1 = cljs.core.next.call(null,seq30822);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__30823,seq30822__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__22790__auto__ = [];
var len__22783__auto___30833 = arguments.length;
var i__22784__auto___30834 = (0);
while(true){
if((i__22784__auto___30834 < len__22783__auto___30833)){
args__22790__auto__.push((arguments[i__22784__auto___30834]));

var G__30835 = (i__22784__auto___30834 + (1));
i__22784__auto___30834 = G__30835;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30831){
var vec__30832 = p__30831;
var req = cljs.core.nth.call(null,vec__30832,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq30829){
var G__30830 = cljs.core.first.call(null,seq30829);
var seq30829__$1 = cljs.core.next.call(null,seq30829);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__30830,seq30829__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__22790__auto__ = [];
var len__22783__auto___30840 = arguments.length;
var i__22784__auto___30841 = (0);
while(true){
if((i__22784__auto___30841 < len__22783__auto___30840)){
args__22790__auto__.push((arguments[i__22784__auto___30841]));

var G__30842 = (i__22784__auto___30841 + (1));
i__22784__auto___30841 = G__30842;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30838){
var vec__30839 = p__30838;
var req = cljs.core.nth.call(null,vec__30839,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq30836){
var G__30837 = cljs.core.first.call(null,seq30836);
var seq30836__$1 = cljs.core.next.call(null,seq30836);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__30837,seq30836__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__22790__auto__ = [];
var len__22783__auto___30847 = arguments.length;
var i__22784__auto___30848 = (0);
while(true){
if((i__22784__auto___30848 < len__22783__auto___30847)){
args__22790__auto__.push((arguments[i__22784__auto___30848]));

var G__30849 = (i__22784__auto___30848 + (1));
i__22784__auto___30848 = G__30849;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30845){
var vec__30846 = p__30845;
var req = cljs.core.nth.call(null,vec__30846,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq30843){
var G__30844 = cljs.core.first.call(null,seq30843);
var seq30843__$1 = cljs.core.next.call(null,seq30843);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__30844,seq30843__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__22790__auto__ = [];
var len__22783__auto___30854 = arguments.length;
var i__22784__auto___30855 = (0);
while(true){
if((i__22784__auto___30855 < len__22783__auto___30854)){
args__22790__auto__.push((arguments[i__22784__auto___30855]));

var G__30856 = (i__22784__auto___30855 + (1));
i__22784__auto___30855 = G__30856;
continue;
} else {
}
break;
}

var argseq__22791__auto__ = ((((1) < args__22790__auto__.length))?(new cljs.core.IndexedSeq(args__22790__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22791__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30852){
var vec__30853 = p__30852;
var req = cljs.core.nth.call(null,vec__30853,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq30850){
var G__30851 = cljs.core.first.call(null,seq30850);
var seq30850__$1 = cljs.core.next.call(null,seq30850);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__30851,seq30850__$1);
});

//# sourceMappingURL=client.js.map?rel=1467258284451