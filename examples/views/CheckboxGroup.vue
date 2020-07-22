<template>
	<div>
		<lay-checkbox-group v-model="checkList">
			<lay-checkbox disabled label="选项一"></lay-checkbox>
			<lay-checkbox label="选项二"></lay-checkbox>
			<lay-checkbox label="选项三"></lay-checkbox>
			<lay-checkbox label="选项四"></lay-checkbox>
		</lay-checkbox-group>
		{{ checkList }}
	</div>
</template>

<script>
export default {
	data () {
		return {
			checkList: ['选项一']
		}
	}
}
</script>

<style>
</style>
