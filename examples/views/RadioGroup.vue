<template>
	<div>
		<de-radio-group v-model="selectItem1">
			<de-radio label="选项1">选项1</de-radio>
			<de-radio label="选项2">选项2</de-radio>
			<de-radio label="选项3">选项3</de-radio>
		</de-radio-group>
		<de-radio-group v-model="selectItem2">
			<de-radio label="选项A">选项A</de-radio>
			<de-radio label="选项B">选项B</de-radio>
			<de-radio label="选项C">选项C</de-radio>
		</de-radio-group>
	</div>
</template>

<script>
export default {
	name: 'radio-group',
	data () {
		return {
			selectItem1: '选项1',
			selectItem2: '选项A'
		}
	},
	updated () {
		console.log(this.selectItem1, 'selectItem1')
		console.log(this.selectItem2, 'selectItem2')
	}
}
</script>

<style>
</style>
