import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

// import 'animate.css'
// import 'normalize.css'

import Icon from 'UI/icon/index.js'
import Button from 'UI/button/index.js'
import Radio from 'UI/radio/index.js'
import RadioGroup from 'UI/radio-group/index.js'
Vue.use(Icon).use(Button).use(Radio).use(RadioGroup)

new Vue ({
  router,
  render: h => h (App),
}).$mount ('#app');
