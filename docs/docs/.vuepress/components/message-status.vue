<template>
	<div class="message-status">
		<de-button @click="showDefaultMessage" icon="info">消息</de-button>
		<de-button @click="showSuccessMessage" type="success" icon="success">成功</de-button>
		<de-button @click="showWarningMessage" type="warning" icon="warning">警告</de-button>
		<de-button @click="showErrorMessage" type="danger" icon="error">错误</de-button>
	</div>
</template>

<script>
import DeButton from '../../../../packages/components/button/index.js'
import Vue from 'vue'
import DeMessage from '../../../../packages/components/message/index.js'
Vue.use(DeMessage)
export default {
	components: {
		DeButton
	},
	methods: {
		showDefaultMessage() {
			this.$message({
				position: 'right',
				message: '这是一条消息提示！'
			})
		},
		showSuccessMessage() {
			this.$message({
				position: 'right',
				message: `恭喜你，这是一条成功的消息！`,
				type: 'success'
			})
		},
		showWarningMessage() {
			this.$message({
				position: 'right',
				message: `警告呀，这是一条警告的消息！`,
				type: 'warning'
			})
		},
		showErrorMessage() {
			this.$message({
				position: 'right',
				message: `错了唉，这是一条错误的消息！`,
				type: 'error'
			})
		}
	}
}
</script>

<style scoped>
.message-status {
	margin: 20px 0;
}
</style>
