<template>
	<div>
		<lay-checkbox v-model="checked" disabled label="足球">足球</lay-checkbox>
		<div>
			<lay-checkbox v-model="checkedList" label="足球">足球</lay-checkbox>
			<lay-checkbox v-model="checkedList" label="篮球">篮球</lay-checkbox>
			<lay-checkbox v-model="checkedList" label="排球">排球</lay-checkbox>
			<lay-checkbox v-model="checkedList" label="皮球">皮球</lay-checkbox>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			checked: true,
			checkedList: []
		}
	}
}
</script>

<style>
</style>
