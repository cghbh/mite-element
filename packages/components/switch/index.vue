<template>
	<div class="m-switch">
		<button @click="touchSwitch" :class="{ 'active-switch-button': value, 'small-switch': small, 'switch-disabled': disabled }" class="m-switch-button">
			<span :class="{ 'active-switch': value, 'small-switch': small }" class="m-switch-inner"></span>
		</button>
	</div>
</template>

<script>
export default {
	name: 'm-switch',
	props: {
		// 双向绑定的值
		value: {
			type: Boolean,
			default: false
		},
		// 小型Switch组件
		small: {
			type: Boolean,
			default: false
		},
		// 禁止点击
		disabled: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		// 点击Switch组件，单项数据流传值
		touchSwitch() {
			// 禁止点击
			if(!this.disabled) {
				this.$emit('input', !this.value)
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import  './style.scss';
</style>
