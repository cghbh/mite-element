<template>
	<div class="radio">
		<m-radio v-model="selectItem" label="选项一">选项一</m-radio>
		<m-radio v-model="selectItem" label="选项二">选项二</m-radio>
		<m-radio v-model="selectItem" label="选项三">选项三</m-radio>
	</div>
</template>

<script>
import MRadio from '../../../../../packages/components/radio/index.js'
export default {
	components: {
		MRadio
	},
	data () {
		return {
			selectItem: '选项一'
		}
	}
}
</script>

<style scoped>
</style>
