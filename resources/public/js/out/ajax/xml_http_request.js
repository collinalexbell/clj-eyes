// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__28753,handler){
var map__28754 = p__28753;
var map__28754__$1 = ((((!((map__28754 == null)))?((((map__28754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28754):map__28754);
var uri = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__28754,map__28754__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__28752_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__28752_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__28754,map__28754__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___28762 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___28762)){
var response_type_28763 = temp__4657__auto___28762;
this$__$1.responseType = cljs.core.name.call(null,response_type_28763);
} else {
}

var seq__28756_28764 = cljs.core.seq.call(null,headers);
var chunk__28757_28765 = null;
var count__28758_28766 = (0);
var i__28759_28767 = (0);
while(true){
if((i__28759_28767 < count__28758_28766)){
var vec__28760_28768 = cljs.core._nth.call(null,chunk__28757_28765,i__28759_28767);
var k_28769 = cljs.core.nth.call(null,vec__28760_28768,(0),null);
var v_28770 = cljs.core.nth.call(null,vec__28760_28768,(1),null);
this$__$1.setRequestHeader(k_28769,v_28770);

var G__28771 = seq__28756_28764;
var G__28772 = chunk__28757_28765;
var G__28773 = count__28758_28766;
var G__28774 = (i__28759_28767 + (1));
seq__28756_28764 = G__28771;
chunk__28757_28765 = G__28772;
count__28758_28766 = G__28773;
i__28759_28767 = G__28774;
continue;
} else {
var temp__4657__auto___28775 = cljs.core.seq.call(null,seq__28756_28764);
if(temp__4657__auto___28775){
var seq__28756_28776__$1 = temp__4657__auto___28775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28756_28776__$1)){
var c__22518__auto___28777 = cljs.core.chunk_first.call(null,seq__28756_28776__$1);
var G__28778 = cljs.core.chunk_rest.call(null,seq__28756_28776__$1);
var G__28779 = c__22518__auto___28777;
var G__28780 = cljs.core.count.call(null,c__22518__auto___28777);
var G__28781 = (0);
seq__28756_28764 = G__28778;
chunk__28757_28765 = G__28779;
count__28758_28766 = G__28780;
i__28759_28767 = G__28781;
continue;
} else {
var vec__28761_28782 = cljs.core.first.call(null,seq__28756_28776__$1);
var k_28783 = cljs.core.nth.call(null,vec__28761_28782,(0),null);
var v_28784 = cljs.core.nth.call(null,vec__28761_28782,(1),null);
this$__$1.setRequestHeader(k_28783,v_28784);

var G__28785 = cljs.core.next.call(null,seq__28756_28776__$1);
var G__28786 = null;
var G__28787 = (0);
var G__28788 = (0);
seq__28756_28764 = G__28785;
chunk__28757_28765 = G__28786;
count__28758_28766 = G__28787;
i__28759_28767 = G__28788;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__21707__auto__ = body;
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1466069804221