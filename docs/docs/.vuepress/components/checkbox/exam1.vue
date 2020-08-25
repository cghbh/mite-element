<template>
	<div class="checkbox">
	  <m-checkbox label="选项一" v-model="checked">选项一</m-checkbox>
	</div>
</template>

<script>
import MCheckbox from '../../../../../packages/components/checkbox/index.js'
export default {
	components: {
		MCheckbox
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
