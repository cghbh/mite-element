import Calendar from './index.vue'

Calendar.install = function(Vue) {
	Vue.component(Calendar.name, Calendar)
}

export default Calendar