import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

// import 'animate.css'
// import 'normalize.css'

import Icon from 'UI/icon/index.js'
import Button from 'UI/button/index.js'
import Radio from 'UI/radio/index.js'
import RadioGroup from 'UI/radio-group/index.js'
import Checkbox from 'UI/checkbox/index.js'
import CheckboxGroup from 'UI/checkbox-group/index.js'
Vue.use(Icon)
   .use(Button)
   .use(Radio)
   .use(RadioGroup)
   .use(Checkbox)
   .use(CheckboxGroup)

new Vue ({
  router,
  render: h => h (App),
}).$mount ('#app');
