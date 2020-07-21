<template>
	<div class="radio-group">
		<div class="group">
			<lay-radio-group v-model="radio1">
				<lay-radio label="选项1">选项1</lay-radio>
				<lay-radio label="选项2">选项2</lay-radio>
				<lay-radio label="选项3">选项3</lay-radio>
			</lay-radio-group>
		</div>
		<div class="group">
			<lay-radio-group v-model="radio2">
				<lay-radio label="选项A">选项A</lay-radio>
				<lay-radio label="选项B">选项B</lay-radio>
				<lay-radio label="选项C">选项C</lay-radio>
			</lay-radio-group>
		</div>
	</div>
</template>

<script>
import LayRadio from '../../../../packages/components/radio/index.js'
import LayRadioGroup from '../../../../packages/components/radio-group/index.js'
export default {
	components: {
		LayRadio,
		LayRadioGroup
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
.radio-group {
	margin: 25px 0;
}
.group {
	margin-bottom: 25px;
}
</style>
