<template>
	<div class="message-center">
		<m-button @click="showMessage" type="primary">文字居中消息</m-button>
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
				message: `我是消息提示弹框，但是我的文字在中间！`,
				center: true
			})
		}
	}
}
</script>

<style scoped>
</style>
