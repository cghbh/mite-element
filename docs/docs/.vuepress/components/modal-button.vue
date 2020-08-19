<template>
	<div class="modal-button">
		<de-button @click="showModal" type="success">有按钮的Modal弹框</de-button>
		<link rel="stylesheet" type="text/css" href="https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css"/>
	</div>
</template>

<script>
import DeButton from '../../../../packages/components/button/index.js'
import Vue from 'vue'
import DeMessage from '../../../../packages/components/message/index.js'
import DeModal from '../../../../packages/components/modal/index.js'
import ModalTest from './modaltest.vue'
Vue.use(DeMessage).use(DeModal)
export default {
	components: {
		DeButton
	},
	methods: {
		showModal() {
			this.$modal({
				title: '温馨提示',
				template: ModalTest,
				showButton: true,
				// 入场动画和出场动画名称
				entername: 'bounceInDown',
				leavename: 'bounceOutDown',
				// 在有button的情况下，取消和确定的回调函数
				onCancel: () => {
					this.$message({
						message: '您点击的是取消！',
						type: 'warning',
						duration: 1500
					})
				},
				onConfirm: () => {
					this.$message({
						message: '您点击的是确定！',
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
