<template>
	<de-checkbox-group v-model="checkedList">
		<de-checkbox label="选项A">选项A</de-checkbox>
		<de-checkbox label="选项B">选项B</de-checkbox>
		<de-checkbox label="选项C">选项C</de-checkbox>
		<de-checkbox label="选项D">选项D</de-checkbox>
	</de-checkbox-group>
</template>

<script>
import DeCheckbox from '../../../../../packages/components/checkbox/index.js'
import DeCheckboxGroup from '../../../../../packages/components/checkbox-group/index.js'
export default {
	components: {
		DeCheckbox,
		DeCheckboxGroup
	},
	data () {
		return {
			checkedList: ['选项C']
		}
	}
}
</script>

<style scoped>
.radio {
	margin: 20px 0;
}
</style>
