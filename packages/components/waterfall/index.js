import Waterfall from './index.vue'

Waterfall.install = function(Vue) {
	Vue.component(Waterfall.name, Waterfall)
}

export default Waterfall