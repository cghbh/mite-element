<template>
	<div class="input-number4">
		<lay-input-number :step="1" v-model="value" :max="30" :min="10"></lay-input-number>
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
			value: 15
		}
	}
}
</script>

<style scoped>
.input-number4 {
  width: 200px;
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
