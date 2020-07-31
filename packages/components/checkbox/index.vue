<template>
	<label class="de-checkbox">
		<span class="de-checkbox-outer" :class="{ 'is-checked': isChecked, 'is-disabled': disabled }">
			<span class="de-checkbox-inner" :class="{ 'is-checked': isChecked, 'is-disabled': disabled }"></span>
			<input type="checkbox" :disabled="disabled" :value="label" v-model="checkValue" class="de-checkbox-native" :class="{'is-disabled': disabled}">
		</span>
		<span class="checkbox__label" :class="{'is-disabled': disabled}">{{ label }}</span>
	</label>
</template>

<script>
export default {
  name: 'de-checkbox',
  // 如果存在复选框组的话，就将祖级组件整个传递过来调用
  inject: {
	  checkedGroup: {
		  type: Array,
		  default: ''
	  }
  },
  props: {
	  label: {
		  type: String
	  },
	  value: {
		  type: [Boolean, Array]
	  },
	  disabled: {
		  type: Boolean,
		  default: false
	  }
  },
  computed: {
	  checkValue: {
		  set(value) {
			  if (this.isGroup) {
				this.checkedGroup.$emit('input', value)  
			  } else {
				  this.$emit('input', value)
			  }
		  },
		  get() {
			return this.isGroup ? this.checkedGroup.value : this.value
		  }
	  },
	  // 判断当前是否是复选框组
	  isGroup () {
		  return this.checkedGroup !== ''
	  },
	  // 判断当前是否选中
	  isChecked () {
		  if (this.isGroup) {
			  return this.checkedGroup.value.includes(this.label)
		  } else {
			  if (typeof this.value === 'boolean') {
				  return this.value
			  }
			  return this.value.includes(this.label)
		  }
	  }
  }
}
</script>

<style scoped>
@import './style.scss'
</style>
