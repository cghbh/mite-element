<template>
	<div class="radio">
	  <lay-radio v-model="selectItem" label="选项一">选项一</lay-radio>
	  <lay-radio v-model="selectItem" label="选项二">选项二</lay-radio>
	  <lay-radio v-model="selectItem" label="选项三">选项三</lay-radio>
	</div>
</template>

<script>
import LayRadio from '../../../../packages/components/radio/index.js'
export default {
	components: {
		LayRadio
	},
	data () {
		return {
			selectItem: '选项一'
		}
	}
}
</script>

<style scoped>
.radio {
	margin: 20px 0;
}
</style>
