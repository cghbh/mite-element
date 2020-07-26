<template>
	<div class="input3">
		<div class="input3-discribe">input模式</div>
		<lay-input v-model="value1" placeholder="请输入内容"></lay-input>
		<div class="input3-discribe">textarea模式</div>
		<lay-input v-model="value2" placeholder="请输入一长段内容" type="textarea"></lay-input>
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
			value1: '',
			value2: ''
		}
	}
}
</script>

<style scoped>
.input3 {
  width: 300px;
  margin-top: 25px;
  margin-bottom: 25px;
}

.input3-discribe {
	margin: 10px 0;
	font-size: 14px;
}
</style>
