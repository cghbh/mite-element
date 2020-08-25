<template>
	<div class="message-4">
		<m-button @click="showMessagePosition('left')">左边</m-button>
		<m-button @click="showMessagePosition('center')">中间</m-button>
		<m-button @click="showMessagePosition('right')">右边</m-button>
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
	data () {
		return {
			selectItem: '选项一'
		}
	},
	methods: {
		showMessagePosition(position) {
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
