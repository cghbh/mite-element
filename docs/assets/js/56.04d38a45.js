(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{389:function(e,s,r){},469:function(e,s,r){"use strict";var t=r(389);r.n(t).a},512:function(e,s,r){"use strict";r.r(s);var t=r(422),a=r(423),l=r(320),o=r(324),u=r(340),m=r(352),n=r(333),c=r(339),i=r(311),b=r(0),p=r(317);b.a.use(p.a);var v={data:function(){return{users:{name:"",desc:"",number:1,hobby:[],selectOnly:"选项一"},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],desc:[{required:!0,message:"请输入活动形式",trigger:"blur"}],score:[{required:!0,message:"请输入活动评价",trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs.ruleForm.validate((function(s){s?(console.log(e.users),e.$message({message:"恭喜你，这是符合要求的表单，请继续！",type:"success"})):e.$message({message:"校验没有通过，请检查之后重试！",type:"warning"})}))},reset:function(){this.$refs.ruleForm.resetFileds()}},components:{MForm:t.a,MFormItem:a.a,MInput:l.a,MRadio:u.a,MRadioGroup:m.a,MCheckbox:n.a,MCheckboxGroup:c.a,MButton:i.a,MInputNumber:o.a}},d=(r(469),r(44)),f=Object(d.a)(v,(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"form-container"},[r("m-form",{ref:"ruleForm",attrs:{modal:e.users,rules:e.rules}},[r("m-form-item",{attrs:{label:"活动名称",prop:"name"}},[r("m-input",{attrs:{placeholder:"请输入活动名称"},model:{value:e.users.name,callback:function(s){e.$set(e.users,"name",s)},expression:"users.name"}})],1),e._v(" "),r("m-form-item",{attrs:{label:"活动形式",prop:"desc"}},[r("m-input",{attrs:{placeholder:"请输入活动形式"},model:{value:e.users.desc,callback:function(s){e.$set(e.users,"desc",s)},expression:"users.desc"}})],1),e._v(" "),r("m-form-item",{attrs:{label:"活动人数"}},[r("m-input-number",{attrs:{step:1,max:20,min:1},model:{value:e.users.number,callback:function(s){e.$set(e.users,"number",s)},expression:"users.number"}})],1),e._v(" "),r("m-form-item",{attrs:{label:"个人爱好"}},[r("m-checkbox-group",{model:{value:e.users.hobby,callback:function(s){e.$set(e.users,"hobby",s)},expression:"users.hobby"}},[r("m-checkbox",{attrs:{label:"羽毛球"}},[e._v("羽毛球")]),e._v(" "),r("m-checkbox",{attrs:{label:"游泳"}},[e._v("游泳")]),e._v(" "),r("m-checkbox",{attrs:{label:"篮球"}},[e._v("篮球")]),e._v(" "),r("m-checkbox",{attrs:{label:"足球"}},[e._v("足球")])],1)],1),e._v(" "),r("m-form-item",{attrs:{label:"你的选择"}},[r("m-radio-group",{model:{value:e.users.selectOnly,callback:function(s){e.$set(e.users,"selectOnly",s)},expression:"users.selectOnly"}},[r("m-radio",{attrs:{label:"选项一"}},[e._v("选项一")]),e._v(" "),r("m-radio",{attrs:{label:"选项二"}},[e._v("选项二")]),e._v(" "),r("m-radio",{attrs:{label:"选项三"}},[e._v("选项三")])],1)],1),e._v(" "),r("m-form-item",[r("m-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("立即创建")]),e._v(" "),r("m-button",{on:{click:e.reset}},[e._v("取消")])],1)],1)],1)}),[],!1,null,"764f530a",null);s.default=f.exports}}]);