<template>
	<div class="message-based">
		<m-button @click="showMessage" type="primary">打开消息提示</m-button>
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
				position: 'center',
				message: `我是消息提示弹框！`
			})
		}
	}
}
</script>

<style scoped>
</style>
