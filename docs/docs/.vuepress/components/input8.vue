<template>
	<div class="input8">
		<lay-input v-model="value" maxlength="10" clearable placeholder="最多只能输入10个字符"></lay-input>
		</div>
	</div>
</template>

<script>
import LayInput from '../../../../packages/components/input/index.js'
export default {
	components: {
		LayInput
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
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
