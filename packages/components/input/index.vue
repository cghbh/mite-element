<template>
	<div class="inline-container" :class="appendClass">
		<template v-if="type==='text' || type === 'password'">
			<div class="de-input-prepend" v-if="$slots.prepend">
				<slot name="prepend"></slot>
			</div>
			<input
				class="de-input" 
				autoComplete="new-password"
				:type="type"
				v-bind="$attrs"
				v-model="inputValue"
				:disabled="disabled"
				v-on="myListeners"
				:class="styleClass"
				:maxlength="maxlength"
				@blur="validateData"
			>
			<div class="de-input-append" v-if="$slots.append">
				<slot name="append"></slot>
			</div>
			<de-icon v-if="showClearable" @click.native="clearInputValue" class="btn-close-icon" icon="close"></de-icon>
		</template>
		<template v-else>
			<textarea
				class="de-textarea" 
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
import DeIcon from '../icon/index.vue'
export default {
	name: 'de-input',
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
		maxlength: {
			type: Number,
			default: 100
		}
	},
	components: {
		DeIcon
	},
	mounted() {
		this.FormItem.$on('reset', () => {
			this.inputValue = ''
		})
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
				[`de-input-${this.size}`]: this.size,
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

<style scoped>
@import './style.scss';
</style>
