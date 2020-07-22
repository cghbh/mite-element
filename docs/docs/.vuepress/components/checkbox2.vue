<template>
	<div class="checkbox">
	  <lay-checkbox label="选项A" v-model="checkedList">选项A</lay-checkbox>
	  <lay-checkbox label="选项B" v-model="checkedList">选项B</lay-checkbox>
	  <lay-checkbox label="选项C" v-model="checkedList">选项C</lay-checkbox>
	  <lay-checkbox label="选项D" v-model="checkedList">选项D</lay-checkbox>
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
