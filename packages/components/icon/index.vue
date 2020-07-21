<template>
	<svg class="icon" aria-hidden="true">
		<use :xlink:href="iconName"></use>
	</svg>
</template>

<script>
	// 导入iconfont的js文件
import '../../assets/js/iconfont.js'
export default {
	name: 'lay-icon',
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
.icon {
	width: 18px;
	height: 18px;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>
