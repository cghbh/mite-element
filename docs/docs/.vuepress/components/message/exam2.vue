<template>
	<div class="message-status">
		<m-button @click="showDefaultMessage" icon="info-circle">消息</m-button>
		<m-button @click="showSuccessMessage" type="success" icon="success">成功</m-button>
		<m-button @click="showWarningMessage" type="warning" icon="error1">警告</m-button>
		<m-button @click="showErrorMessage" type="danger" icon="error1">错误</m-button>
	</div>
</template>

<script>
import MButton from '../../../../../packages/components/button/index.js'
import Vue from 'vue'
import MMessage from '../../../../../packages/components/message/index.js'
Vue.use(MMessage)
export default {
	components: {
		MButton
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
</style>
