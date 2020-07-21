import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入所有的组件 
import Icon from '../views/Icon.vue'
import Button from '../views/Button.vue'

const routes = [
	{
		path: '/icon',
		name: 'icon',
		component: Icon
	},
	{
		path: '/button',
		name: 'button',
		component: Button
	}
]

export default new VueRouter({
	routes
})
