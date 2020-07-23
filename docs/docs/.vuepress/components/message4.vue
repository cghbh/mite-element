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
			console.log(this.getMessageClass(), 'getMessageClass')
			this.$message({
				position: position,
				message: `我是消息提示弹框，我在${this.getPositionBy(position)}展示`,
				type: this.getMessageClass()
			})
		},
		// 通过方位单词判断不同的方向
		getPositionBy(position) {
			if(position === 'left') {
				return '左边'
			}
			if(position === 'right') {
				return '右边'
			}
			if(position === 'center') {
				return '中间'
			}
		},
		// 随机生成当前的消息提示的类型，有'','error', 'warning','success'
		getMessageClass() {
			const number = Math.floor(Math.random() * 4)
			const array = ['', 'error', 'warning', 'success']
			return array[number]
		}
	}
}
</script>

<style scoped>
.radio {
	margin: 20px 0;
}
</style>
