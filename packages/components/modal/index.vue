<template>
	<div class="de-modal-mask">
		 <transition
		 duration="2000"
		    :enter-active-class="enterClass" 
			:leave-active-class="leaveClass">
			<div class="de-modal" v-if="visible">
				<!-- 我是Modal复杂组件，我将进一步增强弹框组件的功能 -->
				<div class="de-modal-title">
					<span class="de-modal-title-text">{{ title }}</span>
					<span class="de-modal-title-svg" @click="closeModal">
						<svg class="de-message-svg icon" t="1595411366477" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2772" width="200" height="200"><path d="M503.466667 467.285333l319.829333-319.829333a25.6 25.6 0 1 1 36.181333 36.181333l-319.829333 319.829334 319.829333 319.829333a25.6 25.6 0 1 1-36.181333 36.181333l-319.829333-319.829333-319.829334 319.829333a25.6 25.6 0 1 1-36.181333-36.181333l319.829333-319.829333-319.829333-319.829334a25.6 25.6 0 1 1 36.181333-36.181333l319.829334 319.829333z" p-id="2773"></path></svg>
					</span>
				</div>
				<div class="de-modal-content">
					<template-com :params="params" v-if="template"></template-com>
					<template v-if="message">
						{{ message }}
					</template>
				</div>
				<div v-if="showButton" class="de-modal-button">
					<de-button @click="handleCancel">取消</de-button>
					<de-button @click="handleConfirm" type="primary">确定</de-button>
				</div>
			</div>
		</transition>
		<!-- 可供参考的动画组如下 -->
		<!-- fadeIn/fadeOut  fadeInDown/fadeOutDown -->
	</div>
</template>

<script>
import DeButton from '../button/index.vue'
export default {
	data () {
		return {
			visible: false
		}
	},
	props: {
		template: {
			default: null
		},
		message: {
			type: String,
			default: ''
		},
		// 入场动画
		entername: {
			type: String,
			default: 'fadeInDown'
		},
		// 出场动画
		leavename: {
			type: String,
			default: 'fadeOutUp'
		},
		params: {
			type: Object,
			default: null
		},
		showButton: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: '温馨提示'
		},
		onClose: {
			type: Function,
			default: null
		},
		onConfirm:{
			type: Function,
			default: null
		},
		onCancel: {
			type: Function,
			default: null
		},
	},
	mounted() {
		this.createElement()
	},
	computed: {
		enterClass() {
			return 'animated '+this.entername
		},
		leaveClass() {
			return 'animated '+this.leavename
		}
	},
	methods: {
		createElement() {
			this.visible = true
			document.body.appendChild(this.$el)
		},
		// 关闭Modal的函数
		closeModal() {
			if (this.onClose) {
				this.onClose()
			}
			this.visible = false
		},
		handleCancel() {
			if(this.onCancel) {
				this.onCancel()
			}
			this.visible = false
		},
		handleConfirm() {
			if(this.onConfirm) {
				this.onConfirm()
			}
			this.visible = false
		}
	},
	beforeDestroy() {
		// 将当前的元素在页面移除
		this.$el.parentNode.removeChild(this.$el)
	},
	watch: {
		visible(newVal) {
			if(!newVal) {
				this.$el.addEventListener('animationend', () => {
					this.$destroy()
				})
			}
		}
	},
	components: {
		TemplateCom: null,
		DeButton
	}
}
</script>

<style scoped>
@import './style.css';
</style>
