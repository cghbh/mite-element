<template>
	<div class="input-number4">
		<m-input-number :step="1" v-model="value" :max="30" :min="10"></m-input-number>
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
