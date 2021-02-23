<template>
	<div>
		<de-button @click="showModal">点我出现Modal弹框</de-button>
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
				showButton: true
			})
		}
	}
}
</script>

<style>
</style>
