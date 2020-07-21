import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

// import 'animate.css'
// import 'normalize.css'

import Icon from 'UI/icon/index.js'
import Button from 'UI/button/index.js'
Vue.use(Icon).use(Button)

new Vue ({
  router,
  render: h => h (App),
}).$mount ('#app');
