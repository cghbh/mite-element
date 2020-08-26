import Pagination from './index.vue'

Pagination.install = function(Vue) {
	Vue.component(Pagination.name, Pagination)
}

export default Pagination