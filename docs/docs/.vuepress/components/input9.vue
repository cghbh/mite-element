<template>
	<div class="input9">
		<de-input v-model="value" type="password" placeholder="请输入密码"></de-input>
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
.input9 {
  width: 300px;
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
