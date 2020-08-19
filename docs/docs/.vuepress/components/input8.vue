<template>
	<div class="input8">
		<de-input v-model="value" :maxlength="10" placeholder="最多只能输入10个字符"></de-input>
		</div>
	</div>
</template>

<script>
import DeInput from '../../../../packages/components/input/index.js'
export default {
	components: {
		DeInput
	},
	data() {
		return {
			value: ''
		}
	}
}
</script>

<style scoped>
.input8 {
  width: 300px;
  /* margin-top: 25px; */
  /* margin-bottom: 25px; */
}
</style>
