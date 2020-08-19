<template>
	<div class="radio">
		<de-radio v-model="selectItem" label="选项一">选项一</de-radio>
		<de-radio v-model="selectItem" label="选项二">选项二</de-radio>
		<de-radio v-model="selectItem" label="选项三">选项三</de-radio>
	</div>
</template>

<script>
import DeRadio from '../../../../packages/components/radio/index.js'
export default {
	components: {
		DeRadio
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
