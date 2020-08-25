<template>
	<div>
		<m-radio v-model="selectItem" label="选项一">选项一</m-radio>
		<m-radio v-model="selectItem" label="选项二">选项二</m-radio>
		<m-radio v-model="selectItem" label="选项三">选项三</m-radio>
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