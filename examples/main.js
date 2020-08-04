import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'animate.css'

import Icon from 'UI/icon/index'
import Button from 'UI/button/index'
import Radio from 'UI/radio/index'
import RadioGroup from 'UI/radio-group/index'
import Checkbox from 'UI/checkbox/index'
import CheckboxGroup from 'UI/checkbox-group/index'
import Message from 'UI/message/index'
import MessageBox from 'UI/message-box/index'
import Modal from 'UI/modal/index'
import Input from 'UI/input/index'
import InputNumber from 'UI/input-number/index'
import Form from 'UI/form/index'
import FormItem from 'UI/form-item/index'
import Tabs from 'UI/tabs/index'
import TabsItem from 'UI/tabs-item/index'
import Collapse from 'UI/collapse/index'
import CollapseItem from 'UI/collapse-item/index'

// import '../lib/main.css'
// import Ele from 'v-design-cg/lib/vdesign.js'
// Vue.use(Ele)
// import VDesign from 'v-design-cg'
// Vue.use(VDesign)
// import { Button,
//          Icon,
//          Radio,
//          RadioGroup,
//          Checkbox,
//          CheckboxGroup,
//          Message,
//          MessageBox,
//          Modal,
//          Input,
//          InputNumber,
//          Form,
//          FormItem
//        } from 'v-design-cg'

Vue.use(Icon)
   .use(Button)
   .use(Radio)
   .use(RadioGroup)
   .use(Checkbox)
   .use(CheckboxGroup)
   .use(Message)
   .use(MessageBox)
   .use(Modal)
   .use(Input)
   .use(InputNumber)
   .use(Form)
   .use(FormItem)
   .use(Tabs)
   .use(TabsItem)
   .use(Collapse)
   .use(CollapseItem)

new Vue ({
  router,
  render: h => h (App),
}).$mount ('#app');
