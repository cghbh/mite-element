<template>
	<div class="input6">
		<lay-input v-model="value" center placeholder="请输入内容"></lay-input>
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
.input6 {
  width: 300px;
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
