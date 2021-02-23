<template>
	<transition name="message-fade">
		<div class="m-message" v-if="visible" :class="{'is-content-center': center, 'is-message-center': isCenter, 'is-message-right': isRight, 'is-message-left': isLeft }" :style="computedStyle">
			<div class="m-message-content" :class="{'is-success-message': isSuccessMessage, 'is-error-message': isErrorMessage, 'is-warning-message': isWarningMessage }">
				<span class="m-info-icon" :class="{'is-success-message': isSuccessMessage, 'is-error-message': isErrorMessage, 'is-warning-message': isWarningMessage }">
					<m-icon icon="error1" v-if="isErrorMessage"></m-icon>
					<m-icon icon="success1" v-else-if="isSuccessMessage"></m-icon>
					<m-icon icon="error1" v-else-if="isWarningMessage"></m-icon>
					<m-icon icon="error1" v-else></m-icon>
				</span>
				{{ message }}
				<!-- 如果自动关闭功能关闭的话，那么showClose就该开启 -->
				<span @click="closeMessage" class="close-btn" v-if="!autoClose || showClose">
					
					<svg class="m-message-svg icon" t="1595411366477" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2772" width="200" height="200"><path d="M503.466667 467.285333l319.829333-319.829333a25.6 25.6 0 1 1 36.181333 36.181333l-319.829333 319.829334 319.829333 319.829333a25.6 25.6 0 1 1-36.181333 36.181333l-319.829333-319.829333-319.829334 319.829333a25.6 25.6 0 1 1-36.181333-36.181333l319.829333-319.829333-319.829333-319.829334a25.6 25.6 0 1 1 36.181333-36.181333l319.829334 319.829333z" p-id="2773"></path></svg>
				</span>
			</div>
		</div>
	</transition>
</template>

<script>
import MIcon from '../icon/index.vue'
export default {
	props: {
		message: {
			default: '这是一条消息提示'
		},
		center: {
			type: Boolean,
			default: false
		},
		position: {
			type: String,
			default: 'center'
		},
		duration: {
			type: Number,
			default: 3000
		},
		autoClose: {
			type: Boolean,
			default: true
		},
		type: {
			type: String,
			default: ''
		},
		showClose: {
			type: Boolean,
			default: false
		}
	},
	data () {
		return {
			visible: false,
			verticalTop: 0
		}
	},
	components: {
		MIcon
	},
	mounted () {
		// 注意：$el指向的是当前组件的DOM元素
		this.createElement()
		// 如果要求自动关闭的话，就执行这个函数
		if (this.autoClose) {
			this.startTimer()
		}
	},
	beforeDestroy() {
		this.$el.parentNode.removeChild(this.$el)
	},
	methods: {
		createElement() {
			this.visible = true
			// 把当前的DOM元素追加到body里面去
			document.body.appendChild(this.$el)
		},
		closeMessage () {
			this.visible = false
		},
		startTimer () {
			let timer = setTimeout(() => {
				this.visible = false
			}, this.duration)
			this.$once('hook: beforeDestroy', () => {
				clearTimeout(timer)
				timer = null
			})
		}
	},
	computed: {
		computedStyle() {
			return {
				top: this.verticalTop + 'px'
			}
		},
		// 判断消息是否在正中
		isCenter () {
			return this.position === 'center'
		},
		isLeft() {
			return this.position === 'left'
		},
		isRight () {
			return this.position === 'right'
		},
		isSuccessMessage () {
			return this.type === 'success'
		},
		isWarningMessage () {
			return this.type === 'warning'
		},
		isErrorMessage () {
			return this.type === 'error'
		}
	},
	watch: {
		visible(newValue) {
			// 说明需要被关闭
			if (!newValue) {
				// 监听动画的结束，动画结束，销毁当前的消息
				this.$el.addEventListener('transitionend', () => {
					this.$destroy()
				})
				this.$emit('close')
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>