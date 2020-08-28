<template>
	<div class="modal-based">
		<de-button @click="showModal" type="primary">打开弹框</de-button>
		<link rel="stylesheet" type="text/css" href="https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css"/>
	</div>
</template>

<script>
import DeButton from '../../../../../packages/components/button/index.js'
import Vue from 'vue'
import DeMessage from '../../../../../packages/components/message/index.js'
import DeModal from '../../../../../packages/components/modal/index.js'
Vue.use(DeMessage).use(DeModal)
export default {
	components: {
		DeButton
	},
	methods: {
		showModal() {
			this.$modal({
				title: '温馨提示',
				message: '我来了，Modal弹框！我只是单行文字哟。。。。',
				showButton: false,
				onClose: () => {
					// alert('这是关闭的回调函数')
					this.$message({
						message: '您已经关闭了复杂弹框Modal！',
						type: 'warning'
					})
				},
			})
		}
	}
}
</script>

<style scoped>
</style>
