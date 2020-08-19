<template>
	<div class="message-box-two">
		<de-button @click="showMessageBox" type="primary">确认消息框</de-button>
	</div>
</template>

<script>
import DeButton from '../../../../packages/components/button/index.js'
import Vue from 'vue'
import DeMessageBox from '../../../../packages/components/message-box/index.js'
Vue.use(DeMessageBox)
export default {
	components: {
		DeButton
	},
	methods: {
		showMessageBox() {
			this.$confirm({
				title: '标题名称',
				content: '这是一段内容',
				onOk: () => {
					this.$message({
						message: '用户已选择确定操作！',
						type: 'success',
						duration: 1500
					})
				},
				onCancel: () => {
					this.$message({
						message: '用户已选择取消操作！',
						type: 'error',
						duration: 1500
					})
				}
			})
		}
	}
}
</script>

<style scoped>
</style>
