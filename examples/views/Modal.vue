<template>
	<div>
		<lay-button @click="showModal">点我出现Modal弹框</lay-button>
	</div>
</template>

<script>
import ModalTest from '../components/ModelTest.vue'
export default {
	methods: {
		showModal() {
			this.$modal({
				template: ModalTest,
				message: '我来了，Modal弹框！',
				params: {
					name: '我是传递给template组件的参数'
				},
				showButton: true,
				onClose: () => {
					// alert('这是关闭的回调函数')
					this.$message({
						message: '您已经关闭了复杂弹框Modal！',
						type: 'error'
					})
				},
				buttonConfirm: () => {
					this.$message({
						message: '用户点击了确定操作！',
						type: 'success',
						position: 'center'
					})
				},
				buttonCancel: () => {
					this.$message({
						message: '用户点击了取消操作！',
						type: 'warning',
						position: 'right'
					})
				}
			})
		}
	}
}
</script>

<style>
</style>
