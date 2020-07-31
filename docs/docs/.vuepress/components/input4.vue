<template>
	<div class="input4">
		<de-input v-model="value" clearable placeholder="请输入内容"></de-input>
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
.input4 {
  width: 300px;
  margin-top: 25px;
  margin-bottom: 25px;
}

.display {
	margin-top: 10px;
	padding-left: 15px;
}
</style>
