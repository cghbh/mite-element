(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{328:function(e,c,t){},339:function(e,c,t){"use strict";t(66),t(168),t(172);var a={name:"m-checkbox",inject:{checkedGroup:{type:Array,default:""}},props:{label:{type:String},value:{type:[Boolean,Array]},disabled:{type:Boolean,default:!1}},computed:{checkValue:{set:function(e){this.isGroup?this.checkedGroup.$emit("input",e):this.$emit("input",e)},get:function(){return this.isGroup?this.checkedGroup.value:this.value}},isGroup:function(){return""!==this.checkedGroup},isChecked:function(){return this.isGroup?this.checkedGroup.value.includes(this.label):"boolean"==typeof this.value?this.value:this.value.includes(this.label)}}},s=(t(340),t(43)),i=Object(s.a)(a,(function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("label",{staticClass:"m-checkbox"},[t("span",{staticClass:"m-checkbox-outer",class:{"is-checked":e.isChecked,"is-disabled":e.disabled}},[t("span",{staticClass:"m-checkbox-inner",class:{"is-checked":e.isChecked,"is-disabled":e.disabled}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkValue,expression:"checkValue"}],staticClass:"m-checkbox-native",class:{"is-disabled":e.disabled},attrs:{type:"checkbox",disabled:e.disabled},domProps:{value:e.label,checked:Array.isArray(e.checkValue)?e._i(e.checkValue,e.label)>-1:e.checkValue},on:{change:function(c){var t=e.checkValue,a=c.target,s=!!a.checked;if(Array.isArray(t)){var i=e.label,l=e._i(t,i);a.checked?l<0&&(e.checkValue=t.concat([i])):l>-1&&(e.checkValue=t.slice(0,l).concat(t.slice(l+1)))}else e.checkValue=s}}})]),e._v(" "),t("span",{staticClass:"checkbox__label",class:{"is-disabled":e.disabled}},[e._v(e._s(e.label))])])}),[],!1,null,"04a47772",null).exports;i.install=function(e){e.component(i.name,i)};c.a=i},340:function(e,c,t){"use strict";t(328)},346:function(e,c,t){},356:function(e,c,t){"use strict";t(66);var a={name:"m-checkbox-group",provide:function(){return{checkedGroup:this}},props:{value:{type:Array}}},s=(t(363),t(43)),i=Object(s.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default")],2)}),[],!1,null,"6c6e1bfe",null).exports;i.install=function(e){e.component(i.name,i)};c.a=i},363:function(e,c,t){"use strict";t(346)},411:function(e,c,t){},488:function(e,c,t){"use strict";t(411)},553:function(e,c,t){"use strict";t.r(c);var a=t(339),s=t(356),i={components:{MCheckbox:a.a,MCheckboxGroup:s.a},data:function(){return{checkedList:["选项C"]}}},l=(t(488),t(43)),n=Object(l.a)(i,(function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("m-checkbox-group",{model:{value:e.checkedList,callback:function(c){e.checkedList=c},expression:"checkedList"}},[t("m-checkbox",{attrs:{label:"选项A"}},[e._v("选项A")]),e._v(" "),t("m-checkbox",{attrs:{label:"选项B"}},[e._v("选项B")]),e._v(" "),t("m-checkbox",{attrs:{label:"选项C"}},[e._v("选项C")]),e._v(" "),t("m-checkbox",{attrs:{label:"选项D"}},[e._v("选项D")])],1)}),[],!1,null,"1d28654c",null);c.default=n.exports}}]);