<template>
	<div class="message-box-one">
		<m-button @click="showMessageBox" type="primary">点击打开MessageBox</m-button>
	</div>
</template>

<script>
import MButton from '../../../../../packages/components/button/index.js'
import Vue from 'vue'
import MMessageBox from '../../../../../packages/components/message-box/index.js'
import MMessage from '../../../../../packages/components/message/index.js'
Vue.use(MMessageBox).use(MMessage)
export default {
	components: {
		MButton
	},
	methods: {
		showMessageBox() {
			this.$alert({
				title: '标题名称',
				content: '这是一段内容',
				onOk: () => {
					this.$message({
						message: '这个实现的是Alert的功能！',
						type: 'success',
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
