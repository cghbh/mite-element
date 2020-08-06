<template>
	<div class="inline-container" :class="appendClass">
		<template v-if="type==='text' || type === 'password'">
			<div class="de-input-prepend" v-if="$slots.prepend">
				<slot name="prepend"></slot>
			</div>
			<input
				class="de-input" 
				autoComplete="new-password"
				:type="type === 'password' ? passwordType : type"
				v-bind="$attrs"
				v-model="inputValue"
				:disabled="disabled"
				v-on="myListeners"
				:class="styleClass"
				:maxlength="maxlength"
				@blur="validateData"
			>
			<!-- 此处所有涉及图标的问题后期单独解决，暂时不予处理 -->
			<span class="hide-password" @click="showOrHidePassword" v-if="type === 'password'">
				<svg t="1596695492861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4539" width="200" height="200"><path d="M511.466 269.569c169.452 0 315.308 99.39 383.565 242.84h66.514c-72.09-177.91-246.293-303.527-450.08-303.527-203.754 0-377.957 125.617-450.046 303.526h66.515c68.255-143.449 214.111-242.84 383.532-242.84z" p-id="4540"></path><path d="M511.466 755.248c-169.42 0-315.277-99.39-383.532-242.84H61.419C133.507 690.35 307.71 815.966 511.466 815.966c203.786 0 377.99-125.617 450.079-303.558H895.03c-68.257 143.45-214.112 242.84-383.565 242.84z" p-id="4541"></path><path d="M349.594 512.424c0 89.412 72.474 161.886 161.885 161.886 89.414 0 161.886-72.474 161.886-161.886 0-89.414-72.472-161.886-161.886-161.886-89.412 0-161.885 72.472-161.885 161.886z m263.084 0c0 55.88-45.32 101.197-101.199 101.197s-101.166-45.318-101.166-101.197c0-55.88 45.287-101.2 101.166-101.2s101.199 45.32 101.199 101.2z" p-id="4542"></path></svg>
			</span>
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
	data() {
		return {
			passwordType: 'password'
		} 
	},
	mounted() {
		if(this.FormItem) {
			this.FormItem.$on('reset', () => {
				this.inputValue = ''
			})
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
@import './style.css';
.hide-password {
	position: absolute;
	width: 20px;
	height: 20px;
	top: 50%;
	transform: translateY(-50%);
	right: 12px;
	cursor: pointer;
}
.hide-password .icon {
	width: 100%;
	height: 100%;
}
</style>
