<template>
	<div class="input5">
		<m-input v-model="value" disabled placeholder="请输入内容"></m-input>
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
.input5 {
  width: 300px;
}
</style>
