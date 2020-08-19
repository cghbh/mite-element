<template>
	<div class="message-close">
		<de-button @click="showMessage" type="primary">可关闭</de-button>
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
</style>
