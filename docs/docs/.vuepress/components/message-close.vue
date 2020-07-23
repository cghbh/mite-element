<template>
	<div class="message-close">
		<lay-button @click="showMessage" type="primary">可关闭</lay-button>
	</div>
</template>

<script>
import LayButton from '../../../../packages/components/button/index.js'
import Vue from 'vue'
import LayMessage from '../../../../packages/components/message/index.js'
Vue.use(LayMessage)
export default {
	components: {
		LayButton
	},
	methods: {
		showMessage() {
			this.$message({
				position: 'right',
				message: '我是既可以手动关闭，也可以自动关闭！',
				center: false,
				// 如果你嫌自动关闭太慢了的话
				showClose: true
			})
		}
	}
}
</script>

<style scoped>
.message-close {
	margin: 20px 0;
}
</style>
