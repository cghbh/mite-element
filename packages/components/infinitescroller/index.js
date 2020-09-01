import InfiniteScroller from './index.vue'

InfiniteScroller.install = function(Vue) {
	Vue.component(InfiniteScroller.name, InfiniteScroller)
}

export default InfiniteScroller