<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'lay-checkbox-group',
	provide () {
		return {
			checkedGroup: this
		}
	},
	props: {
		value: {
			type: Array
		}
	}
}
</script>

<style scoped>
@import './style.scss'
</style>
