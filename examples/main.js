import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'animate.css'
// import './assets/animate.css'
// import 'animate.css'
// import 'normalize.css'

import Icon from 'UI/icon/index.js'
import Button from 'UI/button/index.js'
import Radio from 'UI/radio/index.js'
import RadioGroup from 'UI/radio-group/index.js'
import Checkbox from 'UI/checkbox/index.js'
import CheckboxGroup from 'UI/checkbox-group/index.js'
import Message from 'UI/message/index.js'
import MessageBox from 'UI/message-box/index.js'
import Modal from 'UI/modal/index.js'
import Input from 'UI/input/index.js'
import InputNumber from 'UI/input-number/index.js'
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

new Vue ({
  router,
  render: h => h (App),
}).$mount ('#app');
