<template>
	<div class="message-close">
		<m-button @click="showMessage" type="primary">可关闭</m-button>
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
