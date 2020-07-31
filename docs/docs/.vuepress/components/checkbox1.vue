<template>
	<div class="checkbox">
	  <de-checkbox label="选项一" v-model="checked">选项一</de-checkbox>
	</div>
</template>

<script>
import DeCheckbox from '../../../../packages/components/checkbox/index.js'
export default {
	components: {
		DeCheckbox
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
