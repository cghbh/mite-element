<template>
	<div class="input-number1">
		<m-input-number :step="1" v-model="value"></m-input-number>
		<div class="display">{{ value }}</div>
	</div>
</template>

<script>
import MInputNumber from '../../../../../packages/components/input-number/index.js'
export default {
	components: {
		MInputNumber
	},
	data() {
		return {
			value: 1
		}
	}
}
</script>

<style scoped>
.input-number1 {
  width: 200px;
}
.display {
	margin-top: 15px;
	font-size: 16px;
}
</style>
