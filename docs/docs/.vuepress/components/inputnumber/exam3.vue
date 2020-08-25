<template>
	<div class="input-number3">
		<m-input-number v-model="value" :step="5"></m-input-number>
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
.input-number3 {
  width: 200px;
}
</style>
