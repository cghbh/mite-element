import SwiperItem from './index.vue'

SwiperItem.install = function(Vue) {
	Vue.component(SwiperItem.name, SwiperItem)
}

export default SwiperItem