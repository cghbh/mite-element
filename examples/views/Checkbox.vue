<template>
	<div>
		<m-checkbox v-model="checked" disabled label="足球">足球</m-checkbox>
		<div>
			<m-checkbox v-model="checkedList" label="足球">足球</m-checkbox>
			<m-checkbox v-model="checkedList" label="篮球">篮球</m-checkbox>
			<m-checkbox v-model="checkedList" label="排球">排球</m-checkbox>
			<m-checkbox v-model="checkedList" label="皮球">皮球</m-checkbox>
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
