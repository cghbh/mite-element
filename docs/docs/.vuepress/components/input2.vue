<template>
	<div class="input2">
		<div class="input2-discribe">默认</div>
		<de-input v-model="value" placeholder="请输入内容"></de-input>
		<div class="input2-discribe">中型</div>
		<de-input v-model="value" placeholder="请输入内容" size="medium"></de-input>
		<div class="input2-discribe">小型</div>
		<de-input v-model="value" placeholder="请输入内容" size="small"></de-input>
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
