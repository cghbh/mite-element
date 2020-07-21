<template>
	<button @click="handleClick" class="lay-button" :class="styleClass">
		<svg v-if="showIcon" class="icon" aria-hidden="true">
			<use :xlink:href="iconName"></use>
		</svg>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'lay-button',
	props: {
		type: {
			type: String,
			default: 'default'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'default'
		},
		icon: {
			type: String,
			default: ''
		},
		round: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		styleClass () {
			return {
				[`lay-button--${this.type}`]: true,
				[`is-disabled`]: this.disabled,
				[`lay-button-${this.size}`]: true,
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
			// 派发点击事件
			this.$emit('click', e)
		}
	}
}
</script>

<style scoped>
@import './index.scss';
.icon {
	width: 18px;
	height: 18px;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>
