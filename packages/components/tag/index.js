import Tag from './index.vue'

Tag.install = function(Vue) {
	Vue.component(Tag.name, Tag)
}

export default Tag