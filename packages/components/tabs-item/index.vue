<template>
	<div>
		<div @click="tabClick" class="lay-tabs-nav-item">{{ label }}</div>
		<slot v-if="false"></slot>
	</div>
</template>

<script>
export default {
	name: 'lay-tabs-item',
	inject: ['tabs'],
	props: {
		label: {
			type: String,
			default: ''
		},
		item: {
			type: String
		},
		datavalue: String
	},
	methods: {
		tabClick() {
			this.tabs.$emit('testemit', this.$slots.default[0].text)
			console.log(this.$slots.default[0].text)
		}
		// tabClick(e) {
		// 	if(e.target.className.includes( 'lay-tabs-nav-item')){
		// 		if (e.target.className.includes('no-paddingleft')) {
		// 			this.tabs.$refs.border.style.left = e.target.offsetLeft + 'px'
		// 			this.tabs.$refs.border.style.width = e.target.offsetWidth - 20 + 'px'
		// 		}else if (e.target.className.includes('no-paddingright')) {
		// 			this.tabs.$refs.border.style.left = e.target.offsetLeft + 20 + 'px'
		// 			this.tabs.$refs.border.style.width = e.target.offsetWidth - 20 + 'px'
		// 		} else {
		// 			this.tabs.$refs.border.style.left = e.target.offsetLeft + 20 + 'px'
		// 			this.tabs.$refs.border.style.width = e.target.offsetWidth - 40 + 'px'
		// 		}
				
		// 	}
			
		// 	// 事件的逻辑判断
		// 	this.tabs.$data.displayValue = this.$slots.default[0].text
		// 	// this.tabs.activeKey = this.item
		// 	// console.log(this.item, 'item')
		// 	// console.log(this.tabs.activeKey, 'activeKey')
		// 	this.$emit('tab-click', '哈哈哈哈')
		// }
	},
	computed: {
		transValue() {
			return this.$slots.default[0].text
		}
	},
	mounted() {
		this.tabs.$data.displayValue = this.$slots.default[0].text
		console.log(this.$attrs, 'datavalue')
	}
}
</script>

<style>
</style>
