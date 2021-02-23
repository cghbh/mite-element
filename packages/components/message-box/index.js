import MessageBox from './index.vue'

export default {
	install(Vue) {
		function gerateInstance(options) {
			const Ctor = Vue.extend(MessageBox)
			console.log(options, 'options')
			const instance = new Ctor({
				propsData: options
			}).$mount(document.createElement('div'))
			console.log(instance, 'instance')
			// return instance
		}
		
		// 挂载到全局的对象上面去
		Vue.prototype.$confirm = function(options) {
			// const instance = gerateInstance(options)
			gerateInstance(options)
		}
		
		Vue.prototype.$alert = function(options) {
			// gerateInstance(Object.assign(options, {
			// 	type: 'alert'
			// }))
			gerateInstance({...options, ...{ type: 'alert' } })
		}
	}
}