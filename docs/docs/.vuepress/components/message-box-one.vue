<template>
	<div class="message-box-one">
		<de-button @click="showMessageBox" type="primary">点击打开MessageBox</de-button>
	</div>
</template>

<script>
import DeButton from '../../../../packages/components/button/index.js'
import Vue from 'vue'
import DeMessageBox from '../../../../packages/components/message-box/index.js'
import DeMessage from '../../../../packages/components/message/index.js'
Vue.use(DeMessageBox).use(DeMessage)
export default {
	components: {
		DeButton
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
