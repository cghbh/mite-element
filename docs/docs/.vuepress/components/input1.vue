<template>
	<div class="input1">
		<lay-input v-model="value" placeholder="请输入内容"></lay-input>
		<div class="display">{{ value }}</div>
	</div>
</template>

<script>
import LayInput from '../../../../packages/components/input/index.js'
export default {
	components: {
		LayInput
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
  margin-top: 25px;
  margin-bottom: 25px;
}
.display {
	margin-top: 10px;
	padding-left: 15px;
}
</style>
