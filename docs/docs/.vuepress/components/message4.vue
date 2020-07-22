<template>
	<div class="message-4">
		<lay-button @click="showMessagePosition('left')">左边</lay-button>
		<lay-button @click="showMessagePosition('center')">中间</lay-button>
		<lay-button @click="showMessagePosition('right')">右边</lay-button>
	</div>
</template>

<script>
import LayButton from '../../../../packages/components/button/index.js'
import Vue from 'vue'
import LayMessage from '../../../../packages/components/message/index.js'
Vue.use(LayMessage)
export default {
	components: {
		LayMessage,
		LayButton
	},
	data () {
		return {
			selectItem: '选项一'
		}
	},
	methods: {
		showMessagePosition(position) {
			this.$message({
				position: position,
				message: `我是消息提示组件，我在${position}边展示`
			})
		}
	}
}
</script>

<style scoped>
.radio {
	margin: 20px 0;
}
</style>
