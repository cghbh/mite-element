<template>
	<div class="input1">
		<de-input v-model="value" placeholder="请输入内容"></de-input>
		<div class="display">{{ value }}</div>
	</div>
</template>

<script>
import DeInput from '../../../../packages/components/input/index.js'
export default {
	components: {
		DeInput
	},
	data() {
		return {
			value: ''
		}
	}
}
</script>

<style scoped>
.input1 {
  width: 300px;
}
.display {
	margin-top: 10px;
	padding-left: 15px;
}
</style>
