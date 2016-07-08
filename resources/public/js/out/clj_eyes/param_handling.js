// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.param_handling');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clj_eyes.socket');
clj_eyes.param_handling.jq_each_elements = (function clj_eyes$param_handling$jq_each_elements(elements,each_fn){
var elements__$1 = cljs.core.js__GT_clj.call(null,elements);
var n__22628__auto__ = cljs.core.count.call(null,elements__$1);
var el_num = (0);
while(true){
if((el_num < n__22628__auto__)){
each_fn.call(null,el_num,cljs.core.nth.call(null,elements__$1,el_num));

var G__35229 = (el_num + (1));
el_num = G__35229;
continue;
} else {
return null;
}
break;
}
});
clj_eyes.param_handling.manditory_or_selected = (function clj_eyes$param_handling$manditory_or_selected(item){

if(((new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item).indexOf("option-input-manditory") > (-1))) || ((new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item).indexOf("activated") > (-1)))){
return true;
} else {
return false;
}
});
/**
 * Will send a notification to the server that a frame or frames' inputs have changed with a list of all of the inputs
 */
clj_eyes.param_handling.send_update_transform_params = (function clj_eyes$param_handling$send_update_transform_params(transformation_data_list){
console.log(cljs.core.clj__GT_js.call(null,transformation_data_list));

return clj_eyes.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipeline","update-transform-params","pipeline/update-transform-params",-405237776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform-list","transform-list",1435114487),cljs.core.map.call(null,(function (transformation_data){
console.log(cljs.core.clj__GT_js.call(null,transformation_data));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"param-list","param-list",-1414956032),cljs.core.filter.call(null,clj_eyes.param_handling.manditory_or_selected,new cljs.core.Keyword(null,"input-list","input-list",-122103664).cljs$core$IFn$_invoke$arity$1(transformation_data)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364).cljs$core$IFn$_invoke$arity$1(transformation_data)),new cljs.core.Keyword(null,"function-name","function-name",621877630),jayq.core.data.call(null,jayq.core.$.call(null,cljs.core.keyword.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364).cljs$core$IFn$_invoke$arity$1(transformation_data)))].join(''))),"function-name")], null);
}),transformation_data_list)], null)], null));
});
clj_eyes.param_handling.gather_inputs_from_option_input = (function clj_eyes$param_handling$gather_inputs_from_option_input(option_input,param_list_atom){
return clj_eyes.param_handling.jq_each_elements.call(null,option_input,(function (i,item){
var jq_item = jayq.core.$.call(null,item);
var value = jayq.core.val.call(null,jayq.core.find.call(null,jq_item,"input[type='range'], input:checked, select").first());
console.log([cljs.core.str("value: "),cljs.core.str(value)].join(''));

cljs.core.swap_BANG_.call(null,param_list_atom,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),jayq.core.attr.call(null,jq_item,"class"),new cljs.core.Keyword(null,"value","value",305978217),value], null));

return jayq.core.html.call(null,jayq.core.find.call(null,jq_item,new cljs.core.Keyword(null,"span.option-param-value","span.option-param-value",-1770498217)).first(),value.capitalize());
}));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clj_eyes.param_handling.transform_data = (function (input_list,pipeline_id,__meta,__extmap,__hash){
this.input_list = input_list;
this.pipeline_id = pipeline_id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clj_eyes.param_handling.transform_data.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22335__auto__,k__22336__auto__){
var self__ = this;
var this__22335__auto____$1 = this;
return cljs.core._lookup.call(null,this__22335__auto____$1,k__22336__auto__,null);
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22337__auto__,k35231,else__22338__auto__){
var self__ = this;
var this__22337__auto____$1 = this;
var G__35233 = (((k35231 instanceof cljs.core.Keyword))?k35231.fqn:null);
switch (G__35233) {
case "input-list":
return self__.input_list;

break;
case "pipeline-id":
return self__.pipeline_id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35231,else__22338__auto__);

}
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22349__auto__,writer__22350__auto__,opts__22351__auto__){
var self__ = this;
var this__22349__auto____$1 = this;
var pr_pair__22352__auto__ = ((function (this__22349__auto____$1){
return (function (keyval__22353__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22350__auto__,cljs.core.pr_writer,""," ","",opts__22351__auto__,keyval__22353__auto__);
});})(this__22349__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22350__auto__,pr_pair__22352__auto__,"#clj-eyes.param-handling.transform-data{",", ","}",opts__22351__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-list","input-list",-122103664),self__.input_list],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364),self__.pipeline_id],null))], null),self__.__extmap));
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$IIterable$ = true;

clj_eyes.param_handling.transform_data.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35230){
var self__ = this;
var G__35230__$1 = this;
return (new cljs.core.RecordIter((0),G__35230__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-list","input-list",-122103664),new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22333__auto__){
var self__ = this;
var this__22333__auto____$1 = this;
return self__.__meta;
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22329__auto__){
var self__ = this;
var this__22329__auto____$1 = this;
return (new clj_eyes.param_handling.transform_data(self__.input_list,self__.pipeline_id,self__.__meta,self__.__extmap,self__.__hash));
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22339__auto__){
var self__ = this;
var this__22339__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22330__auto__){
var self__ = this;
var this__22330__auto____$1 = this;
var h__22148__auto__ = self__.__hash;
if(!((h__22148__auto__ == null))){
return h__22148__auto__;
} else {
var h__22148__auto____$1 = cljs.core.hash_imap.call(null,this__22330__auto____$1);
self__.__hash = h__22148__auto____$1;

return h__22148__auto____$1;
}
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22331__auto__,other__22332__auto__){
var self__ = this;
var this__22331__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21701__auto__ = other__22332__auto__;
if(cljs.core.truth_(and__21701__auto__)){
var and__21701__auto____$1 = (this__22331__auto____$1.constructor === other__22332__auto__.constructor);
if(and__21701__auto____$1){
return cljs.core.equiv_map.call(null,this__22331__auto____$1,other__22332__auto__);
} else {
return and__21701__auto____$1;
}
} else {
return and__21701__auto__;
}
})())){
return true;
} else {
return false;
}
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22344__auto__,k__22345__auto__){
var self__ = this;
var this__22344__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input-list","input-list",-122103664),null,new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364),null], null), null),k__22345__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22344__auto____$1),self__.__meta),k__22345__auto__);
} else {
return (new clj_eyes.param_handling.transform_data(self__.input_list,self__.pipeline_id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22345__auto__)),null));
}
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22342__auto__,k__22343__auto__,G__35230){
var self__ = this;
var this__22342__auto____$1 = this;
var pred__35234 = cljs.core.keyword_identical_QMARK_;
var expr__35235 = k__22343__auto__;
if(cljs.core.truth_(pred__35234.call(null,new cljs.core.Keyword(null,"input-list","input-list",-122103664),expr__35235))){
return (new clj_eyes.param_handling.transform_data(G__35230,self__.pipeline_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35234.call(null,new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364),expr__35235))){
return (new clj_eyes.param_handling.transform_data(self__.input_list,G__35230,self__.__meta,self__.__extmap,null));
} else {
return (new clj_eyes.param_handling.transform_data(self__.input_list,self__.pipeline_id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22343__auto__,G__35230),null));
}
}
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22347__auto__){
var self__ = this;
var this__22347__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-list","input-list",-122103664),self__.input_list],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364),self__.pipeline_id],null))], null),self__.__extmap));
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22334__auto__,G__35230){
var self__ = this;
var this__22334__auto____$1 = this;
return (new clj_eyes.param_handling.transform_data(self__.input_list,self__.pipeline_id,G__35230,self__.__extmap,self__.__hash));
});

clj_eyes.param_handling.transform_data.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22340__auto__,entry__22341__auto__){
var self__ = this;
var this__22340__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22341__auto__)){
return cljs.core._assoc.call(null,this__22340__auto____$1,cljs.core._nth.call(null,entry__22341__auto__,(0)),cljs.core._nth.call(null,entry__22341__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22340__auto____$1,entry__22341__auto__);
}
});

clj_eyes.param_handling.transform_data.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-list","input-list",1518427863,null),new cljs.core.Symbol(null,"pipeline-id","pipeline-id",-1646837405,null)], null);
});

clj_eyes.param_handling.transform_data.cljs$lang$type = true;

clj_eyes.param_handling.transform_data.cljs$lang$ctorPrSeq = (function (this__22369__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clj-eyes.param-handling/transform-data");
});

clj_eyes.param_handling.transform_data.cljs$lang$ctorPrWriter = (function (this__22369__auto__,writer__22370__auto__){
return cljs.core._write.call(null,writer__22370__auto__,"clj-eyes.param-handling/transform-data");
});

clj_eyes.param_handling.__GT_transform_data = (function clj_eyes$param_handling$__GT_transform_data(input_list,pipeline_id){
return (new clj_eyes.param_handling.transform_data(input_list,pipeline_id,null,null,null));
});

clj_eyes.param_handling.map__GT_transform_data = (function clj_eyes$param_handling$map__GT_transform_data(G__35232){
return (new clj_eyes.param_handling.transform_data(new cljs.core.Keyword(null,"input-list","input-list",-122103664).cljs$core$IFn$_invoke$arity$1(G__35232),new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364).cljs$core$IFn$_invoke$arity$1(G__35232),null,cljs.core.dissoc.call(null,G__35232,new cljs.core.Keyword(null,"input-list","input-list",-122103664),new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364)),null));
});

clj_eyes.param_handling.find_downstream_transforms = (function clj_eyes$param_handling$find_downstream_transforms(pipeline_frame_jq){

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

return cljs.core.swap_BANG_.call(null,the_pipeline_list,cljs.core.conj,(new clj_eyes.param_handling.transform_data(cljs.core.deref.call(null,the_input_list),cljs.core.keyword.call(null,cljs.core.subs.call(null,pipeline_id,(9))),null,null,null)));
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
clj_eyes.param_handling.find_changing_transforms = (function clj_eyes$param_handling$find_changing_transforms(id){
var the_list = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var pipeline_frame = cljs.core.keyword.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,id))].join(''));
clj_eyes.param_handling.gather_inputs_from_option_input.call(null,jayq.core.find.call(null,jayq.core.$.call(null,cljs.core.keyword.call(null,[cljs.core.str("#pipeline-"),cljs.core.str(cljs.core.name.call(null,id))].join(''))),new cljs.core.Keyword(null,".option-input",".option-input",1885884989)),the_list);

var pipeline_input_list = clj_eyes.param_handling.find_downstream_transforms.call(null,jayq.core.$.call(null,pipeline_frame));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,the_list)], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (pipeline_input_list,the_list,pipeline_frame){
return (function (inputs){
return new cljs.core.Keyword(null,"input-list","input-list",-122103664).cljs$core$IFn$_invoke$arity$1(inputs);
});})(pipeline_input_list,the_list,pipeline_frame))
,pipeline_input_list))),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (pipeline_input_list,the_list,pipeline_frame){
return (function (inputs){
return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"pipeline-id","pipeline-id",1007598364).cljs$core$IFn$_invoke$arity$1(inputs));
});})(pipeline_input_list,the_list,pipeline_frame))
,pipeline_input_list)))], null);

return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new clj_eyes.param_handling.transform_data(cljs.core.deref.call(null,the_list),cljs.core.name.call(null,id),null,null,null))], null),pipeline_input_list);
});
clj_eyes.param_handling.gen_param_input_change_handler = (function clj_eyes$param_handling$gen_param_input_change_handler(id){
return (function (){
return clj_eyes.param_handling.send_update_transform_params.call(null,clj_eyes.param_handling.find_changing_transforms.call(null,id));
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
var option_div_35238 = jayq.core.$.call(null,foo).parent();
var option_frame_35239 = option_div_35238.parent();
var option_group_35240 = jayq.core.$.call(null,foo).data("option-group");
if((jayq.core.attr.call(null,option_div_35238,"class").indexOf("activated") < (0))){
clj_eyes.param_handling.change_optiongroup_checkbox.call(null,option_frame_35239,option_group_35240,jayq.core.add_class);
} else {
clj_eyes.param_handling.change_optiongroup_checkbox.call(null,option_frame_35239,option_group_35240,jayq.core.remove_class);
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

//# sourceMappingURL=param_handling.js.map?rel=1467952891442