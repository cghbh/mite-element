<template>
	<div>
		<de-checkbox v-model="checked" disabled label="足球">足球</de-checkbox>
		<div>
			<de-checkbox v-model="checkedList" label="足球">足球</de-checkbox>
			<de-checkbox v-model="checkedList" label="篮球">篮球</de-checkbox>
			<de-checkbox v-model="checkedList" label="排球">排球</de-checkbox>
			<de-checkbox v-model="checkedList" label="皮球">皮球</de-checkbox>
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
