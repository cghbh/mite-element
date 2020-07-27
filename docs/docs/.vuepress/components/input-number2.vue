<template>
	<div class="input-number2">
		<lay-input-number v-model="value" disabled></lay-input-number>
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
.input-number2 {
  width: 200px;
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
