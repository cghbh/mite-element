<template>
	<div class="radio-group">
		<div class="group group-one">
			<de-radio-group v-model="radio1">
				<de-radio label="选项1">选项1</de-radio>
				<de-radio label="选项2">选项2</de-radio>
				<de-radio label="选项3">选项3</de-radio>
			</de-radio-group>
		</div>
		<div class="group">
			<de-radio-group v-model="radio2">
				<de-radio label="选项A">选项A</de-radio>
				<de-radio label="选项B">选项B</de-radio>
				<de-radio label="选项C">选项C</de-radio>
			</de-radio-group>
		</div>
	</div>
</template>

<script>
import DeRadio from '../../../../packages/components/radio/index.js'
import DeRadioGroup from '../../../../packages/components/radio-group/index.js'
export default {
	components: {
		DeRadio,
		DeRadioGroup
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
