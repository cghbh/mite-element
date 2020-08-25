<template>
	<div class="input-number5">
		<de-input-number v-model="value" :precision="2" :step="0.1"></de-input-number>
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
			value: 5
		}
	}
}
</script>

<style scoped>
.input-number5 {
  width: 200px;
}
</style>
