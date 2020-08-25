<template>
	<div class="message-one">
		<m-button @click="showMessage" type="primary">不可自动关闭</m-button>
	</div>
</template>

<script>
import MButton from '../../../../../packages/components/button/index.js'
import Vue from 'vue'
import MMessage from '../../../../../packages/components/message/index.js'
Vue.use(MMessage)
export default {
	components: {
		MButton
	},
	methods: {
		showMessage() {
			this.$message({
				position: 'right',
				message: `我是消息提示弹框，但是我不能自动关闭！`,
				autoClose: false
			})
		}
	}
}
</script>

<style scoped>
</style>
