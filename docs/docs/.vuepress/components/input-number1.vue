<template>
	<div class="input-number1">
		<lay-input-number :step="1" v-model="value"></lay-input-number>
		<div class="display">{{ value }}</div>
	</div>
</template>

<script>
import LayInputNumber from '../../../../packages/components/input-number/index.js'
export default {
	components: {
		LayInputNumber
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
  margin-top: 25px;
  margin-bottom: 25px;
}
.display {
	margin: 15px 0;
	font-size: 16px;
}
</style>
