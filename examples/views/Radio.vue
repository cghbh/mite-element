<template>
	<div>
		<lay-radio v-model="selectItem" label="选项一">选项一</lay-radio>
		<lay-radio v-model="selectItem" label="选项二">选项二</lay-radio>
		<lay-radio v-model="selectItem" label="选项三">选项三</lay-radio>
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