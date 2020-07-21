import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入所有的组件 
import Icon from '../views/Icon.vue'
import Button from '../views/Button.vue'
import Radio from '../views/Radio.vue'
import RadioGroup from '../views/RadioGroup.vue'

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
	},
	{
		path: '/radio',
		name: 'radio',
		component: Radio
	},
	{
		path: '/radio-group',
		name: 'radio-group',
		component: RadioGroup
	}
]

export default new VueRouter({
	routes
})
