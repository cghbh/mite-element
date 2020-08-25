<template>
	<div>
		<m-checkbox-group v-model="checkList">
			<m-checkbox disabled label="选项一"></m-checkbox>
			<m-checkbox label="选项二"></m-checkbox>
			<m-checkbox label="选项三"></m-checkbox>
			<m-checkbox label="选项四"></m-checkbox>
		</m-checkbox-group>
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
