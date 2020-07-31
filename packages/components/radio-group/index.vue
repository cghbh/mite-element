<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'de-radio-group',
	props: {
		value: {
			type: [String, Number]
		}
	},
	provide () {
		return {
			// 将自身传递到子孙组件里面去
			radioGroup: this
		}
	}
}
</script>

<style scoped>
@import './index.css'
</style>
