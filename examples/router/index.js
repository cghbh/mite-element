import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入所有的组件 
import Icon from '../views/Icon.vue'
import Button from '../views/Button.vue'
import Radio from '../views/Radio.vue'
import RadioGroup from '../views/RadioGroup.vue'
import Checkbox from '../views/Checkbox.vue'
import CheckboxGroup from '../views/CheckboxGroup.vue'
import Message from '../views/Message.vue'
import MessageBox from '../views/MessageBox.vue'
import Modal from '../views/Modal.vue'
import Input from '../views/Input.vue'
import InputNumber from '../views/InputNumber.vue'
import Form from '../views/Form.vue'
import Tabs from '../views/Tabs.vue'
import Collapse from '../views/Collapse.vue'

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
	},
	{
		path: '/checkbox',
		name: 'checkbox',
		component: Checkbox
	},
	{
		path: '/checkbox-group',
		name: 'checkbox-group',
		component: CheckboxGroup
	},
	{
		path: '/message',
		name: 'message',
		component: Message
	},
	{
		path: '/message-box',
		name: 'message-box',
		component: MessageBox
	},
	{
		path: '/modal',
		component: Modal,
		name: 'modal'
	},
	{
		path: '/input',
		component: Input,
		name: 'input'
	},
	{
		path: '/input-number',
		component: InputNumber,
		name: 'input-number'
	},
	{
		path: '/form',
		component: Form,
		name: 'form'
	},
	{
		path: '/tabs',
		component: Tabs,
		name: 'tabs'
	},
	{
		path: '/collapse',
		component: Collapse,
		name: 'collapse'
	}
]

export default new VueRouter({
	routes
})
