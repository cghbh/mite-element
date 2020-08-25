<template>
	<div class="radio-group">
		<div class="group group-one">
			<m-radio-group v-model="radio1">
				<m-radio label="选项1">选项1</m-radio>
				<m-radio label="选项2">选项2</m-radio>
				<m-radio label="选项3">选项3</m-radio>
			</m-radio-group>
		</div>
		<div class="group">
			<m-radio-group v-model="radio2">
				<m-radio label="选项A">选项A</m-radio>
				<m-radio label="选项B">选项B</m-radio>
				<m-radio label="选项C">选项C</m-radio>
			</m-radio-group>
		</div>
	</div>
</template>

<script>
import MRadio from '../../../../../packages/components/radio/index.js'
import MRadioGroup from '../../../../../packages/components/radio-group/index.js'
export default {
	components: {
		MRadio,
		MRadioGroup
	},
	data () {
		return {
			radio1: '选项1',
			radio2: '选项A'
		}
	}
}
</script>

<style scoped>
.group-one {
	margin-bottom: 20px;
}
</style>
