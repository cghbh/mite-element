<template>
	<m-checkbox-group v-model="checkedList">
		<m-checkbox label="选项A">选项A</m-checkbox>
		<m-checkbox disabled label="选项B">选项B</m-checkbox>
		<m-checkbox label="选项C">选项C</m-checkbox>
		<m-checkbox disabled label="选项D">选项D</m-checkbox>
		<m-checkbox label="选项E">选项E</m-checkbox>
	</m-checkbox-group>
</template>

<script>
import MCheckbox from '../../../../../packages/components/checkbox/index.js'
import MCheckboxGroup from '../../../../../packages/components/checkbox-group/index.js'
export default {
	components: {
		MCheckbox,
		MCheckboxGroup
	},
	data () {
		return {
			checkedList: ['选项B']
		}
	}
}
</script>

<style scoped>
.radio {
	margin: 20px 0;
}
</style>
