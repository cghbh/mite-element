(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{301:function(t,n,e){},302:function(t,n,e){"use strict";var i=e(301);e.n(i).a},303:function(t,n,e){"use strict";e(65),e(165);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var s={name:"lay-button",props:{type:{type:String,default:"default"},disabled:{type:Boolean,default:!1},size:{type:String,default:"default"},icon:{type:String,default:""},round:{type:Boolean,default:!1}},computed:{styleClass:function(){var t;return i(t={},"lay-button--".concat(this.type),!0),i(t,"is-disabled",this.disabled),i(t,"lay-button-".concat(this.size),!0),i(t,"is-round",this.round),t},iconName:function(){return"#icon-".concat(this.icon)},showIcon:function(){return this.icon}},methods:{handleClick:function(t){this.$emit("click",t)}}},a=(e(302),e(43)),o=Object(a.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("button",{staticClass:"lay-button",class:this.styleClass,on:{click:this.handleClick}},[this.showIcon?n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":this.iconName}})]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,"0eb422fc",null).exports;o.install=function(t){t.component(o.name,o)};n.a=o},323:function(t,n,e){},364:function(t,n,e){"use strict";var i=e(323);e.n(i).a},378:function(t,n,e){"use strict";e.r(n);var i={name:"my-button",methods:{handleClick:function(t){console.log(t.target)}},components:{LayButton:e(303).a}},s=(e(364),e(43)),a=Object(s.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"button-exam5"},[n("lay-button",{attrs:{type:"primary",round:""}},[this._v("默认按钮")]),this._v(" "),n("lay-button",{attrs:{type:"primary",size:"medium",round:""}},[this._v("中型按钮")]),this._v(" "),n("lay-button",{attrs:{type:"primary",size:"small"}},[this._v("小型按钮")]),this._v(" "),n("lay-button",{attrs:{type:"primary",size:"mini"}},[this._v("超小按钮")])],1)}),[],!1,null,"7b0ad9f1",null);n.default=a.exports}}]);