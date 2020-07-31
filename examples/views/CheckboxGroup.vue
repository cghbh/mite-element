<template>
	<div>
		<de-checkbox-group v-model="checkList">
			<de-checkbox disabled label="选项一"></de-checkbox>
			<de-checkbox label="选项二"></de-checkbox>
			<de-checkbox label="选项三"></de-checkbox>
			<de-checkbox label="选项四"></de-checkbox>
		</de-checkbox-group>
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
