<template>
	<div class="message-based">
		<lay-button @click="showMessage" type="primary">打开消息提示</lay-button>
	</div>
</template>

<script>
import LayButton from '../../../../packages/components/button/index.js'
import Vue from 'vue'
import LayMessage from '../../../../packages/components/message/index.js'
Vue.use(LayMessage)
export default {
	components: {
		LayButton
	},
	methods: {
		showMessage() {
			this.$message({
				position: 'center',
				message: `我是消息提示弹框！`
			})
		}
	}
}
</script>

<style scoped>
.message-based {
	margin: 20px 0;
}
</style>
