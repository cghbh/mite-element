<template>
	<div>
		<de-radio v-model="selectItem" label="选项一">选项一</de-radio>
		<de-radio v-model="selectItem" label="选项二">选项二</de-radio>
		<de-radio v-model="selectItem" label="选项三">选项三</de-radio>
	</div>
</template>

<script>
export default {
	name: 'radio',
	data () {
		return {
			selectItem: '选项一'
		}
	},
	methods: {
		handleInput (value) {
			this.selectItem = value
		}
	}
}
</script>

<style scoped>
</style>