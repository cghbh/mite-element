<template>
	<div class="input-number2">
		<m-input-number :step="1" v-model="value" disabled></m-input-number>
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
.input-number2 {
  width: 200px;
}
</style>
