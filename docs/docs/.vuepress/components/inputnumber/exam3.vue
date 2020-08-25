<template>
	<div class="input-number3">
		<de-input-number v-model="value" :step="5"></de-input-number>
	</div>
</template>

<script>
import DeInputNumber from '../../../../../packages/components/input-number/index.js'
export default {
	components: {
		DeInputNumber
	},
	data() {
		return {
			value: 1
		}
	}
}
</script>

<style scoped>
.input-number3 {
  width: 200px;
}
</style>
