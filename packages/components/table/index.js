import Table from './index.vue'

Table.install = function(Vue) {
	Vue.component(Table.name, Table)
}

export default Table