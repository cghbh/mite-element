<template>
	<div class="input2">
		<div class="input2-discribe">默认</div>
		<lay-input v-model="value" placeholder="请输入内容"></lay-input>
		<div class="input2-discribe">中型</div>
		<lay-input v-model="value" placeholder="请输入内容" size="medium"></lay-input>
		<div class="input2-discribe">小型</div>
		<lay-input v-model="value" placeholder="请输入内容" size="small"></lay-input>
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
.input2 {
  width: 300px;
  margin-top: 25px;
  margin-bottom: 25px;
}

.input2-discribe {
	margin: 10px 0;
	font-size: 14px;
}
</style>
