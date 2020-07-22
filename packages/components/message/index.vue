<template>
	<transition name="message-fade">
		<div class="lay-message" v-if="visible" :class="{'is-content-center': center, 'is-message-center': isCenter, 'is-message-right': isRight, 'is-message-left': isLeft }" :style="computedStyle">
			<div class="lay-message-content">
				{{ message }}
				<span @click="closeMessage" class="close-btn">
					<!-- <lay-icon icon="close"></lay-icon> -->
					<svg t="1595411366477" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2772" width="200" height="200"><path d="M503.466667 467.285333l319.829333-319.829333a25.6 25.6 0 1 1 36.181333 36.181333l-319.829333 319.829334 319.829333 319.829333a25.6 25.6 0 1 1-36.181333 36.181333l-319.829333-319.829333-319.829334 319.829333a25.6 25.6 0 1 1-36.181333-36.181333l319.829333-319.829333-319.829333-319.829334a25.6 25.6 0 1 1 36.181333-36.181333l319.829334 319.829333z" p-id="2773"></path></svg>
				</span>
			</div>
		</div>
	</transition>
</template>

<script>
// import LayIcon from '../icon/index.vue'
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
		}
	},
	data () {
		return {
			visible: false,
			verticalTop: 0
		}
	},
	components: {
		// LayIcon
	},
	mounted () {
		// 注意：$el指向的是当前组件的DOM元素
		this.createElement()
	},
	beforeDestroy() {
		console.log('test---001destroy')
		this.$el.parentNode.removeChild(this.$el)
	},
	methods: {
		createElement() {
			this.visible = true
			// 把当前的DOM元素追加到body里面去
			document.body.appendChild(this.$el)
			this.$nextTick(() => {
				console.log(this.verticalTop)
			})
		},
		closeMessage () {
			this.visible = false
		}
	},
	computed: {
		computedStyle() {
			console.log(this.verticalTop)
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

<style scoped>
@import './style.scss';
.close-btn /deep/ .icon {
	width: 16px;
	height: 16px;
}
</style>
