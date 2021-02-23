<template>
	<div class="message-box-two">
		<m-button @click="showMessageBox" type="primary">确认消息框</m-button>
	</div>
</template>

<script>
import MButton from '../../../../../packages/components/button/index.js'
import Vue from 'vue'
import MMessageBox from '../../../../../packages/components/message-box/index.js'
Vue.use(MMessageBox)
export default {
	components: {
		MButton
	},
	methods: {
		showMessageBox() {
			this.$confirm({
				title: '标题名称',
				content: '<p style="font-size: 18px">这是一段内容</p>',
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
