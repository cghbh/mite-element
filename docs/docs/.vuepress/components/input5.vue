<template>
	<div class="input5">
		<de-input v-model="value" disabled placeholder="请输入内容"></de-input>
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
.input5 {
  width: 300px;
}
</style>
