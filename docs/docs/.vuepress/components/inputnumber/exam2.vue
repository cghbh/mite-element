<template>
	<div class="input-number2">
		<de-input-number :step="1" v-model="value" disabled></de-input-number>
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
.input-number2 {
  width: 200px;
}
</style>
