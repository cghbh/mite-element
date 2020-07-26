<template>
	<div class="inline-container">
		<template v-if="type==='text'">
			<input
				class="lay-input" 
				type="text"
				v-bind="$attrs"
				v-model="inputValue"
				v-on="myListeners"
				:class="sizeClass"
			>
			<!-- <div> -->
			<lay-icon v-if="showClearable" @click.native="clearInputValue" class="btn-close-icon" icon="close"></lay-icon>
			<!-- </div> -->
		</template>
		<template v-else>
			<textarea
				class="lay-textarea" 
				v-bind="$attrs"
				v-model="inputValue"
				v-on="myListeners"
			>
			</textarea>
		</template>
	</div>
</template>

<script>
import LayIcon from '../icon/index.vue'
export default {
	name: 'lay-input',
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
				return ['textarea', 'text'].includes(value)
			}
		},
		size: {
			type: String,
			default: '',
			validator: (value) => {
				return ['', 'medium', 'small'].includes(value)
			}
		},
		clearable: {
			type: Boolean,
			default: false
		}
	},
	components: {
		LayIcon
	},
	methods: {
		clearInputValue() {
			this.inputValue = ''
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
		sizeClass() {
			return {
				[`lay-input-${this.size}`]: this.size
			}
		},
		// 当前的内容为空的时候，隐藏可清除按钮
		showClearable() {
			return this.clearable && this.inputValue !== ''
		}
	},
	mounted() {
		console.log(this.$listeners, 'lisnters')
	}
}
</script>

<style scoped>
@import './style.scss';
</style>
