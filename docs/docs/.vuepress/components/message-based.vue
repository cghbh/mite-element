<template>
	<div class="message-based">
		<de-button @click="showMessage" type="primary">打开消息提示</de-button>
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
				position: 'center',
				message: `我是消息提示弹框！`
			})
		}
	}
}
</script>

<style scoped>
</style>
