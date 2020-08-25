<template>
	<div class="input6">
		<m-input v-model="value" center placeholder="请输入内容"></m-input>
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
.input6 {
  width: 300px;
}
</style>
