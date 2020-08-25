<template>
	<div class="input-number4">
		<de-input-number :step="1" v-model="value" :max="30" :min="10"></de-input-number>
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
			value: 15
		}
	}
}
</script>

<style scoped>
.input-number4 {
  width: 200px;
}
</style>
