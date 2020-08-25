<template>
	 <!-- v-if="visible" -->
	<div class="mask">
		<transition name="message-fade">
			<div class="de-message-box" v-if="visible">
				<div class="de-message-box-title">{{ title }}</div>
				<div class="de-message-box-content">{{ content }}</div>
				<div class="de-message-box-footer">
					<!-- <template v-if="isConfirm"> -->
						<de-button v-if="isConfirm" @click="clickHandle('cancel')">取消</de-button>
					<!-- </template> -->
					<de-button type="primary" @click="clickHandle('confirm')">确定</de-button>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import DeButton from '../button/index.vue'
export default {
	props: {
		title: {
			type: String,
			default: '温馨提示'
		},
		content: {
			type: String,
			default: ''
		},
		// 判断是alert还是confirm的效果
		type: {
			type: String,
			default: 'confirm'
		},
		// 传过来两个事件，一个是点击取消，一个是点击继续的操作
		onOk: {
			type: Function
		},
		onCancel: {
			type: Function
		}
	},
	data () {
		return {
			visible: false
		}
	},
	computed: {
		isConfirm () {
			return this.type !== 'alert'
		}
	},
	components: {
		DeButton
	},
	mounted() {
		this.visible = true
		// 挂载
		document.body.appendChild(this.$el)
	},
	methods: {
		clickHandle(value) {
			if (value === 'cancel') {
				this.onCancel()
			} else if(value === 'confirm') {
				this.onOk()
			}
			this.close()
			
		},
		close() {
			this.visible = false
		}
	},
	beforeDestroy () {
		const value = this.$el.parentNode.removeChild(this.$el)
	},
	watch: {
		visible(newVal) {
			if(!newVal) {
				this.$destroy()
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import './style.scss'
</style>