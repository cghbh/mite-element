<template>
	<label class="m-radio">
		<span class="m-radio-outer" >
			<span class="m-radio-inner" :class="{ 'is-checked': isChecked }"></span>
			<input 
			  type="radio" 
			  class="m-radio-native" 
			  :value="label"
			  v-model="radioValue">
		</span>
		<span class="m-radio-label">{{ label }}</span>
	</label>
</template>

<script>
export default {
	name: 'm-radio',
	inject: {
		radioGroup: {
			default: ''
		}
	},
	props: {
		value: {
			type: [String, Number]
		},
		label: {
			type: [String, Number]
		}
	},
	computed: {
		// 因为子组件也使用了v-model，但是子组件不能直接修改父组件传递过来的参数，因此采用计算属性的getters和setter特性来进行取值和值的设置
		radioValue: {
			set (value) {
				// 当需要设置值的时候，通过监听父组件v-model的input事件的语法糖，将值传递过去
				// :value="selectItem" @input="handleInput"
				this.$emit('input', value)
				this.isGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
			},
			get () {
				return this.isGroup ? this.radioGroup.value : this.value
			}
		},
		isChecked () {
			// 如果当前的值和label的值是一样的，说明当前被选中了
			return this.radioValue === this.label
		},
		// 判断当前是否与radioGroup传递过来，也就是判断是否有单选框组存在
		isGroup () {
			return this.radioGroup !== ''
		}
	}
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>