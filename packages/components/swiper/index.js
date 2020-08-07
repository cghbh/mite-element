import Swiper from './index.vue'

Swiper.install = function(Vue) {
	Vue.component(Swiper.name, Swiper)
}

export default Swiper