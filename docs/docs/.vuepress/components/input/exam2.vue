<template>
	<div class="input2">
		<div class="input2-discribe">默认</div>
		<m-input v-model="value" placeholder="请输入内容"></m-input>
		<div class="input2-discribe">中型</div>
		<m-input v-model="value" placeholder="请输入内容" size="medium"></m-input>
		<div class="input2-discribe">小型</div>
		<m-input v-model="value" placeholder="请输入内容" size="small"></m-input>
	</div>
</template>

<script>
import MInput from '../../../../../packages/components/input/index.js'
export default {
	components: {
		MInput
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
}

.input2-discribe {
	margin: 10px 0 15px 0;
	font-size: 14px;
}
</style>
