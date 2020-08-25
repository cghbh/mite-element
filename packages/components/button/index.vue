<template>
	<button @click="handleClick" class="de-button" :class="styleClass">
		<svg v-if="showIcon" class="icon" aria-hidden="true">
			<use :xlink:href="iconName"></use>
		</svg>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'de-button',
	props: {
		// 类型
		type: {
			type: String,
			default: 'default'
		},
		// 禁用
		disabled: {
			type: Boolean,
			default: false
		},
		// 尺寸大小
		size: {
			type: String,
			default: 'default'
		},
		// 图标按钮
		icon: {
			type: String,
			default: ''
		},
		// 圆角按钮
		round: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		styleClass () {
			return {
				[`de-button--${this.type}`]: true,
				[`is-disabled`]: this.disabled,
				[`de-button-${this.size}`]: true,
				'is-round': this.round
			}
		},
		iconName () {
			return `#icon-${this.icon}`
		},
		showIcon () {
			return this.icon
		}
	},
	methods: {
		handleClick (e) {
			// 派发点击事件,如果是禁止点击的事件那么就不允许派发事件
			if(this.disabled) {
				return false
			}
			this.$emit('click', e)
		}
	}
}
</script>

<style scoped>
@import './index.css';
</style>
