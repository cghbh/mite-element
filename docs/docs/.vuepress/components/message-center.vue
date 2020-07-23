<template>
	<div class="message-center">
		<lay-button @click="showMessage" type="primary">文字居中消息</lay-button>
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
				position: 'right',
				message: `我是消息提示弹框，但是我的文字在中间！`,
				center: true
			})
		}
	}
}
</script>

<style scoped>
.message-center {
	margin: 20px 0;
}
</style>
