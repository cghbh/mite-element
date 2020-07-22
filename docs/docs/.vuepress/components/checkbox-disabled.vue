<template>
	<lay-checkbox-group v-model="checkedList">
		<lay-checkbox label="选项A">选项A</lay-checkbox>
		<lay-checkbox disabled label="选项B">选项B</lay-checkbox>
		<lay-checkbox label="选项C">选项C</lay-checkbox>
		<lay-checkbox disabled label="选项D">选项D</lay-checkbox>
		<lay-checkbox label="选项E">选项E</lay-checkbox>
	</lay-checkbox-group>
</template>

<script>
import LayCheckbox from '../../../../packages/components/checkbox/index.js'
import LayCheckboxGroup from '../../../../packages/components/checkbox-group/index.js'
export default {
	components: {
		LayCheckbox,
		LayCheckboxGroup
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
