<template>
	<div class="input3">
		<div class="input3-discribe">input模式</div>
		<de-input v-model="value1" placeholder="请输入内容"></de-input>
		<div class="input3-discribe">textarea模式</div>
		<de-input v-model="value2" placeholder="请输入一长段内容" type="textarea"></de-input>
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
			value1: '',
			value2: ''
		}
	}
}
</script>

<style scoped>
.input3 {
  width: 300px;
}

.input3-discribe {
	margin: 10px 0;
	font-size: 14px;
}
</style>
