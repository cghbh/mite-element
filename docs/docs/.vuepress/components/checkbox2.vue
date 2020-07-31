<template>
	<div class="checkbox">
	  <de-checkbox label="选项A" v-model="checkedList">选项A</de-checkbox>
	  <de-checkbox label="选项B" v-model="checkedList">选项B</de-checkbox>
	  <de-checkbox label="选项C" v-model="checkedList">选项C</de-checkbox>
	  <de-checkbox label="选项D" v-model="checkedList">选项D</de-checkbox>
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
			checkedList: ['选项A']
		}
	}
}
</script>

<style scoped>
.radio {
	margin: 20px 0;
}
</style>
