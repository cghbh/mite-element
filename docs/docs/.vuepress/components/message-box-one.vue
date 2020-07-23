<template>
	<div class="message-box-one">
		<lay-button @click="showMessageBox" type="primary">点击打开MessageBox</lay-button>
	</div>
</template>

<script>
import LayButton from '../../../../packages/components/button/index.js'
import Vue from 'vue'
import LayMessageBox from '../../../../packages/components/message-box/index.js'
Vue.use(LayMessageBox)
export default {
	components: {
		LayButton
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
.message-box-one {
	margin: 20px 0;
}
</style>
