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

var G__33504 = (el_num + (1));
el_num = G__33504;
continue;
} else {
return null;
}
break;
}
});
clj_eyes.param_handling.manditory_or_selected = (function clj_eyes$param_handling$manditory_or_selected(item){

var class_items_33505 = clojure.string.split.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item),/ /);

if(((new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item).indexOf("option-input-manditory") > (-1))) || ((new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item).indexOf("activated") > (-1)))){
return true;
} else {
return false;
}
});
/**
 * Will send a notification to the server that a frame or frames' inputs have changed with a list of all of the inputs
 */
clj_eyes.param_handling.send_update_transform_params = (function clj_eyes$param_handling$send_update_transform_params(param_lists,ids){
return clj_eyes.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipeline","update-transform-params","pipeline/update-transform-params",-405237776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform-list","transform-list",1435114487),cljs.core.map.call(null,(function (param_list,id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"param-list","param-list",-1414956032),cljs.core.filter.call(null,clj_eyes.param_handling.manditory_or_selected,param_list),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"function-name","function-name",621877630),jayq.core.data.call(null,jayq.core.$.call(null,cljs.core.keyword.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,id))].join(''))),"function-name")], null);
}),param_lists,ids)], null)], null));
});
clj_eyes.param_handling.gather_inputs_from_option_input = (function clj_eyes$param_handling$gather_inputs_from_option_input(option_input,param_list_atom){
return clj_eyes.param_handling.jq_each_elements.call(null,option_input,(function (i,item){
var jq_item = jayq.core.$.call(null,item);
var value = jayq.core.val.call(null,jayq.core.find.call(null,jq_item,new cljs.core.Keyword(null,"input","input",556931961)).first());
cljs.core.swap_BANG_.call(null,param_list_atom,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),jayq.core.attr.call(null,jq_item,"class"),new cljs.core.Keyword(null,"value","value",305978217),value], null));

return jayq.core.html.call(null,jayq.core.find.call(null,jq_item,new cljs.core.Keyword(null,"span","span",1394872991)),value);
}));
});
clj_eyes.param_handling.find_and_notify_downstream_transforms = (function clj_eyes$param_handling$find_and_notify_downstream_transforms(pipeline_frame_jq,id){

var the_pipeline_list = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clj_eyes.param_handling.jq_each_elements.call(null,((function (the_pipeline_list){
return (function (item){
console.log([cljs.core.str("next-all type"),cljs.core.str(cljs.core.type.call(null,item))].join(''));

return item;
});})(the_pipeline_list))
.call(null,jayq.core.next_all.call(null,pipeline_frame_jq,new cljs.core.Keyword(null,".pipeline-frame",".pipeline-frame",-1655973309))),((function (the_pipeline_list){
return (function (i,item){
var the_input_list = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var pipeline_id = jayq.core.attr.call(null,jayq.core.$.call(null,item),"id");
return ((function (the_input_list,pipeline_id,the_pipeline_list){
return (function (option_input){
clj_eyes.param_handling.gather_inputs_from_option_input.call(null,option_input,the_input_list);

return cljs.core.swap_BANG_.call(null,the_pipeline_list,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input-list","input-list",-122103664),cljs.core.deref.call(null,the_input_list),new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364),pipeline_id], null));
});})(the_input_list,pipeline_id,the_pipeline_list))
.call(null,((function (the_input_list,pipeline_id,the_pipeline_list){
return (function (item__$1){
console.log([cljs.core.str(".option-input count: "),cljs.core.str(cljs.core.count.call(null,item__$1))].join(''));

console.log(item__$1);

return item__$1;
});})(the_input_list,pipeline_id,the_pipeline_list))
.call(null,jayq.core.find.call(null,jayq.core.$.call(null,item),new cljs.core.Keyword(null,".option-input",".option-input",1885884989))));
});})(the_pipeline_list))
);

return cljs.core.deref.call(null,the_pipeline_list);
});
clj_eyes.param_handling.gen_param_input_change_handler = (function clj_eyes$param_handling$gen_param_input_change_handler(id){
return (function (){
var the_list = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var pipeline_frame = cljs.core.keyword.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,id))].join(''));
clj_eyes.param_handling.gather_inputs_from_option_input.call(null,jayq.core.find.call(null,jayq.core.$.call(null,cljs.core.keyword.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,id))].join(''))),new cljs.core.Keyword(null,".option-input",".option-input",1885884989)),the_list);

var pipeline_input_list = clj_eyes.param_handling.find_and_notify_downstream_transforms.call(null,jayq.core.$.call(null,pipeline_frame),id);
return clj_eyes.param_handling.send_update_transform_params.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,the_list)], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (pipeline_input_list,the_list,pipeline_frame){
return (function (inputs){
return new cljs.core.Keyword(null,"input-list","input-list",-122103664).cljs$core$IFn$_invoke$arity$1(inputs);
});})(pipeline_input_list,the_list,pipeline_frame))
,pipeline_input_list))),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (pipeline_input_list,the_list,pipeline_frame){
return (function (inputs){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364).cljs$core$IFn$_invoke$arity$1(inputs),(9)));
});})(pipeline_input_list,the_list,pipeline_frame))
,pipeline_input_list))));
});
});
clj_eyes.param_handling.change_optiongroup_checkbox = (function clj_eyes$param_handling$change_optiongroup_checkbox(option_frame,option_group,change_fn){
return clj_eyes.param_handling.jq_each_elements.call(null,jayq.core.find.call(null,option_frame,new cljs.core.Keyword(null,".option-input",".option-input",1885884989)),(function (i,item){
return (function (item_op_group){
if(cljs.core._EQ_.call(null,item_op_group,option_group)){
return change_fn.call(null,jayq.core.$.call(null,item),"activated");
} else {
return null;
}
}).call(null,jayq.core.$.call(null,item).data("option-group"));
}));
});
/**
 * Handles the checking and unchecking of the optional parameters
 */
clj_eyes.param_handling.gen_option_checkbox_handler = (function clj_eyes$param_handling$gen_option_checkbox_handler(id){
return (function (){
var foo = this;
var option_div_33506 = jayq.core.$.call(null,foo).parent();
var option_frame_33507 = option_div_33506.parent();
var option_group_33508 = jayq.core.$.call(null,foo).data("option-group");
if((jayq.core.attr.call(null,option_div_33506,"class").indexOf("activated") < (0))){
clj_eyes.param_handling.change_optiongroup_checkbox.call(null,option_frame_33507,option_group_33508,jayq.core.add_class);
} else {
clj_eyes.param_handling.change_optiongroup_checkbox.call(null,option_frame_33507,option_group_33508,jayq.core.remove_class);
}

return clj_eyes.param_handling.gen_param_input_change_handler.call(null,id).call(null);
});
});
clj_eyes.param_handling.bind_inputs_on_change = (function clj_eyes$param_handling$bind_inputs_on_change(id){
jayq.core.bind.call(null,(function (item){
console.log(cljs.core.count.call(null,item));

return item;
}).call(null,jayq.core.find.call(null,jayq.core.$.call(null,cljs.core.keyword.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,id))].join(''))),new cljs.core.Keyword(null,"input","input",556931961))),new cljs.core.Keyword(null,"change","change",-1163046502),clj_eyes.param_handling.gen_param_input_change_handler.call(null,id));

return jayq.core.bind.call(null,jayq.core.find.call(null,jayq.core.$.call(null,cljs.core.keyword.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,id))].join(''))),new cljs.core.Keyword(null,".option-checkbox",".option-checkbox",1675746654)),new cljs.core.Keyword(null,"click","click",1912301393),clj_eyes.param_handling.gen_option_checkbox_handler.call(null,id));
});

//# sourceMappingURL=param_handling.js.map?rel=1467195802796