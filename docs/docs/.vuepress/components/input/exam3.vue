<template>
	<div class="input3">
		<div class="input3-discribe">input模式</div>
		<m-input v-model="value1" placeholder="请输入内容"></m-input>
		<div class="input3-discribe">textarea模式</div>
		<m-input v-model="value2" placeholder="请输入一长段内容" type="textarea"></m-input>
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
