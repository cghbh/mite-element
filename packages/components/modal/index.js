import Modal from './index.vue'

export default {
	install(Vue) {
		// 生成一个实例
		function generateInstance(options) {
			Modal.components.TemplateCom = options.template
			const Ctor = Vue.extend(Modal)
			const instance = new Ctor({
				propsData: options
			}).$mount(document.createElement('div'))
			instance.$once('close', () => {
				console.log('我已经被关闭了')
			})
			return instance
		}
		
		// 挂载
		Vue.prototype.$modal = function(options) {
			// 执行函数中的代码，生成一个Vue的实例，并且在mounted钩子里面挂载
			generateInstance(options)
		}
	}
}