<template>
	<svg class="icon-self" aria-hidden="true">
		<use :xlink:href="iconName"></use>
	</svg>
</template>

<script>
	// 导入iconfont的js文件
import '../../assets/js/iconfont.js'
export default {
	name: 'de-icon',
	props: {
		icon: {
			type: String,
			default: ''
		},
	},
	computed: {
		iconName () {
			return `#icon-${this.icon}`
		}
	}
}
</script>

<style type="text/css" scoped>
@import './index.scss';
</style>
