<template>
	<div class="checkbox">
	  <m-checkbox label="选项A" v-model="checkedList">选项A</m-checkbox>
	  <m-checkbox label="选项B" v-model="checkedList">选项B</m-checkbox>
	  <m-checkbox label="选项C" v-model="checkedList">选项C</m-checkbox>
	  <m-checkbox label="选项D" v-model="checkedList">选项D</m-checkbox>
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
