import NavMenu from './index.vue'

NavMenu.install = function(Vue) {
	Vue.component(NavMenu.name, NavMenu)
}

export default NavMenu