<template>
	<div class="input-number5">
		<m-input-number v-model="value" :precision="2" :step="0.1"></m-input-number>
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
