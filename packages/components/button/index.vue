<template>
	<button @click="handleClick" class="m-button" :class="styleClass">
		<svg v-if="showIconLeft" class="icon" :class="{ 'loading': loading }" aria-hidden="true">
			<use :xlink:href="iconName"></use>
		</svg>
		<slot></slot>
		<svg v-if="showIconRight" class="icon" :class="{ 'loading': loading }" aria-hidden="true">
			<use :xlink:href="iconName"></use>
		</svg>
	</button>
</template>

<script>
export default {
	name: 'm-button',
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
		iconLeft: {
			type: String,
			default: ''
		},
		iconRight: {
			type: String,
			default: ''
		},
		// 圆角按钮
		round: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		styleClass () {
			return {
				[`m-button--${this.type}`]: true,
				[`is-disabled`]: this.disabled,
				[`m-button-${this.size}`]: true,
				'is-round': this.round,
				'loading': this.loading
			}
		},
		// 默认情况下图标在左边，即使传递的是icon。其次传icon-left则在左边，传icon-right在右边
		iconName () {
			return `#icon-${ this.icon || this.iconLeft || this.iconRight }`
		},
		showIconLeft () {
			return this.iconLeft || this.icon
		},
		showIconRight() {
			return this.iconRight
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
	},
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
