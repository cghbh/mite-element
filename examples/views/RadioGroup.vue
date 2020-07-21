<template>
	<div>
		<lay-radio-group v-model="selectItem1">
			<lay-radio label="选项1">选项1</lay-radio>
			<lay-radio label="选项2">选项2</lay-radio>
			<lay-radio label="选项3">选项3</lay-radio>
		</lay-radio-group>
		<lay-radio-group v-model="selectItem2">
			<lay-radio label="选项A">选项A</lay-radio>
			<lay-radio label="选项B">选项B</lay-radio>
			<lay-radio label="选项C">选项C</lay-radio>
		</lay-radio-group>
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
