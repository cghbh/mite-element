<template>
	<div class="modal-animate">
		<de-button @click="showModal" type="primary">将组件作为参数传递</de-button>
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
				// params: {n:1},
				// 入场动画和出场动画名称
				entername: 'bounceInDown',
				leavename: 'bounceOutDown'
			})
		}
	}
}
</script>

<style scoped>
</style>
