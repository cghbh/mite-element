<template>
	<div class="input6">
		<de-input v-model="value" center placeholder="请输入内容"></de-input>
	</div>
</template>

<script>
import DeInput from '../../../../../packages/components/input/index.js'
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
.input6 {
  width: 300px;
}
</style>
