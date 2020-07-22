<template>
	<div class="checkbox">
	  <lay-checkbox label="选项一" v-model="checked">选项一</lay-checkbox>
	</div>
</template>

<script>
import LayCheckbox from '../../../../packages/components/checkbox/index.js'
export default {
	components: {
		LayCheckbox
	},
	data () {
		return {
			checked: true
		}
	}
}
</script>

<style scoped>
.radio {
	margin: 20px 0;
}
</style>
