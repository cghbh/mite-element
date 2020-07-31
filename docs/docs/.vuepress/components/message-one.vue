<template>
	<div class="message-one">
		<de-button @click="showMessage" type="primary">不可自动关闭</de-button>
	</div>
</template>

<script>
import DeButton from '../../../../packages/components/button/index.js'
import Vue from 'vue'
import DeMessage from '../../../../packages/components/message/index.js'
Vue.use(DeMessage)
export default {
	components: {
		DeButton
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
.message-one {
	margin: 20px 0;
}
</style>
