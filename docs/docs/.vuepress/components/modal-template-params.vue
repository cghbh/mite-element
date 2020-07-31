<template>
	<div class="modal-params-trans">
		<de-button @click="showModal" type="primary">传递参数到template组件</de-button>
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
				// 入场动画和出场动画名称
				entername: 'bounceInDown',
				leavename: 'bounceOutDown',
				params: {
					content: '这句话是我传递给组件的，和其他人没关系的。'
				}
			})
		}
	}
}
</script>

<style scoped>
.modal-params-trans {
	margin: 20px 0;
}
</style>
