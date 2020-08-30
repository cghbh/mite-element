import Upload from './index.vue'

Upload.install = function(Vue) {
	Vue.component(Upload.name, Upload)
}

export default Upload