import Grid from './index.vue'

Grid.install = function(Vue) {
	Vue.component(Grid.name, Grid)
}

export default Grid