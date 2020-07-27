<template>
	<div class="input-number5">
		<lay-input-number v-model="value" :precision="2" :step="0.1"></lay-input-number>
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
			value: 5
		}
	}
}
</script>

<style scoped>
.input-number5 {
  width: 200px;
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
