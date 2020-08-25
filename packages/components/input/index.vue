<template>
	<div class="inline-container" :class="appendClass" ref="container">
		<template v-if="type==='text' || type === 'password'">
			<!-- 前缀 -->
			<div class="m-input-prepend" v-if="$slots.prepend">
				<slot name="prepend"></slot>
			</div>
			
			<!-- 输入框 -->
			<input
				class="m-input" 
				autoComplete="new-password"
				:type="type === 'password' ? passwordType : type"
				v-bind="$attrs"
				v-model="inputValue"
				:disabled="disabled"
				v-on="myListeners"
				:class="styleClass"
				:maxlength="maxlength"
				@blur="validateData"
				ref="input"
			>
			
			<!-- 隐藏按钮 -->
			<span class="hide-password" @click="showOrHidePassword" v-if="type === 'password'">
				<!-- 控制显示密码与隐藏密码 -->
				<m-icon :icon="passwordTag % 2 === 0 ? 'eye' : 'eye-close'"></m-icon>
			</span>
			
			<!-- 清除按钮 -->
			<span class="m-input-clear">
				<m-icon v-if="showClearable" @click.native="clearInputValue" class="btn-close-icon" icon="close"></m-icon>
			</span>
			
			<!-- 后缀 -->
			<div class="m-input-append" v-if="$slots.append">
				<slot name="append"></slot>
			</div>
		</template>
		
		<!-- 文本域 -->
		<template v-else>
			<textarea
				class="m-textarea" 
				v-bind="$attrs"
				v-model="inputValue"
				v-on="myListeners"
				@blur="validateData"
			>
			</textarea>
		</template>
	</div>
</template>

<script>
import MIcon from '../icon/index.vue'
export default {
	name: 'm-input',
	inject: {
		Form: {
			default: null
		},
		FormItem: {
			default: null
		}
	},
	props: {
		value: {
			type: [String, Number],
			default: ''
		},
		// 判断input的类型，是text还是textarea属性
		type: {
			type: String,
			default: 'text',
			validator: (value) => {
				return ['textarea', 'text', 'password'].includes(value)
			}
		},
		// 输入框的大小控制
		size: {
			type: String,
			default: '',
			validator: (value) => {
				return ['', 'medium', 'small'].includes(value)
			}
		},
		// 是否可以清除内容
		clearable: {
			type: Boolean,
			default: false
		},
		// 输入框文字居中控制
		center: {
			type: Boolean,
			default: false
		},
		// 禁用
		disabled: {
			type: Boolean,
			default: false
		},
		// 最大长度
		maxlength: {
			type: Number,
			default: 100
		}
	},
	components: {
		MIcon
	},
	data() {
		return {
			passwordType: 'password',
			// 控制显示隐藏按钮的数字
			passwordTag: 0,
			// 获取input框的长度
			inputWidth: 0
		} 
	},
	mounted() {
		if(this.FormItem) {
			this.FormItem.$on('reset', () => {
				this.inputValue = ''
			})
		}
		
		// 获取input的长度
		if(this.type === 'password' || this.clearable) {
			// 设置父级元素的长度
			this.$refs.container.style.width = this.$refs.input.offsetWidth + 'px'
			// 重新设置图标距离文字的paddingRight值
			this.$refs.input.style.paddingRight = '32px'
		}
		
	},
	methods: {
		clearInputValue() {
			this.inputValue = ''
		},
		// 当失去焦点的时候，开始校验表单传递过来的数据
		validateData() {
			// 向他的上级组件派发事件，本质上派发者和监听者是一个人
			// 如果有formitem的话，才执行校验，否则单独一个人不需要校验的操作
			if(this.FormItem) {
				this.FormItem.$emit('validate')
			}
		},
		showOrHidePassword() {
			this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
			this.passwordTag++
		}
	},
	computed: {
		inputValue: {
			set(value){
				this.$emit('input', value)
			},
			get() {
				return this.value
			}
		},
		myListeners() {
			return Object.assign(this.$listeners, {
				input: event => this.$emit('input', event.target.value)
			})
		},
		styleClass() {
			return {
				[`m-input-${this.size}`]: this.size,
				[`is-center`]: this.center,
				[`is-disabled`]: this.disabled
			}
		},
		// 当前的内容为空的时候，隐藏可清除按钮
		showClearable() {
			return this.clearable && this.inputValue !== ''
		},
		// 计算前缀和后缀的样式
		appendClass() {
			return {
				'has-prepend': this.$slots.prepend,
				'has-append': this.$slots.append
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
