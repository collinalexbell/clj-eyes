// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.param_handling');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clj_eyes.socket');
clj_eyes.param_handling.jq_each_elements = (function clj_eyes$param_handling$jq_each_elements(elements,each_fn){
var elements__$1 = cljs.core.js__GT_clj.call(null,elements);
var n__22622__auto__ = cljs.core.count.call(null,elements__$1);
var el_num = (0);
while(true){
if((el_num < n__22622__auto__)){
each_fn.call(null,el_num,cljs.core.nth.call(null,elements__$1,el_num));

var G__29561 = (el_num + (1));
el_num = G__29561;
continue;
} else {
return null;
}
break;
}
});
clj_eyes.param_handling.manditory_or_selected = (function clj_eyes$param_handling$manditory_or_selected(item){

var class_items_29562 = clojure.string.split.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item),/ /);

if(((new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item).indexOf("option-input-manditory") > (-1))) || ((new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item).indexOf("activated") > (-1)))){
return true;
} else {
return false;
}
});
clj_eyes.param_handling.gen_param_input_change_handler = (function clj_eyes$param_handling$gen_param_input_change_handler(id){
return (function (){
var the_list = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clj_eyes.param_handling.jq_each_elements.call(null,jayq.core.find.call(null,jayq.core.$.call(null,cljs.core.keyword.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,id))].join(''))),new cljs.core.Keyword(null,".option-input",".option-input",1885884989)),((function (the_list){
return (function (i,item){
var jq_item = jayq.core.$.call(null,item);
return cljs.core.swap_BANG_.call(null,the_list,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),jayq.core.attr.call(null,jq_item,"class"),new cljs.core.Keyword(null,"value","value",305978217),jayq.core.val.call(null,jayq.core.find.call(null,jq_item,new cljs.core.Keyword(null,"input","input",556931961)).first())], null));
});})(the_list))
);

return clj_eyes.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipeline","update-transform-params","pipeline/update-transform-params",-405237776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"param-list","param-list",-1414956032),cljs.core.filter.call(null,clj_eyes.param_handling.manditory_or_selected,cljs.core.deref.call(null,the_list)),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));
});
});
/**
 * Handles the checking and unchecking of the optional parameters
 */
clj_eyes.param_handling.option_checkbox_handler = (function clj_eyes$param_handling$option_checkbox_handler(){
var foo = this;
var option_div_29563 = jayq.core.$.call(null,foo).parent();
if((jayq.core.attr.call(null,option_div_29563,"class").indexOf("activated") < (0))){
jayq.core.add_class.call(null,option_div_29563,"activated");
} else {
jayq.core.remove_class.call(null,option_div_29563,"activated");
}

return console.log([cljs.core.str(jayq.core.attr.call(null,jayq.core.$.call(null,foo),"class"))].join(''));
});
clj_eyes.param_handling.bind_inputs_on_change = (function clj_eyes$param_handling$bind_inputs_on_change(id){
jayq.core.bind.call(null,(function (item){
console.log(cljs.core.count.call(null,item));

return item;
}).call(null,jayq.core.find.call(null,jayq.core.$.call(null,cljs.core.keyword.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,id))].join(''))),new cljs.core.Keyword(null,"input","input",556931961))),new cljs.core.Keyword(null,"change","change",-1163046502),clj_eyes.param_handling.gen_param_input_change_handler.call(null,id));

return jayq.core.bind.call(null,jayq.core.find.call(null,jayq.core.$.call(null,cljs.core.keyword.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,id))].join(''))),new cljs.core.Keyword(null,".option-checkbox",".option-checkbox",1675746654)),new cljs.core.Keyword(null,"click","click",1912301393),clj_eyes.param_handling.option_checkbox_handler);
});

//# sourceMappingURL=param_handling.js.map?rel=1467009813733