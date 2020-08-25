<template>
	<div class="input9">
		<m-input v-model="value" type="password" placeholder="请输入密码"></m-input>
		</div>
	</div>
</template>

<script>
import MInput from '../../../../../packages/components/input/index.js'
export default {
	components: {
		MInput
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
}
</style>
