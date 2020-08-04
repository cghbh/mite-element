<template>
	<div class="de-collapse" :class="{'no-border-bottom': border}">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'de-collapse',
	provide() {
		return {
			Collapse: this
		}
	},
	props: {
		value: {
			type: [String, Array, Number],
			default: () => []
		},
		accordion: {
			type: Boolean,
			default: false
		},
		// 是否有边框线
		border: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			activeNames: [].concat(this.value)
		}
	},
	methods: {
		// 设置当前点击的name
		setActiveNames(activeNames) {
		    activeNames = [].concat(activeNames);
		    let value = this.accordion ? activeNames[0] : activeNames;
		    this.activeNames = activeNames;
		    this.$emit('input', value);
		    this.$emit('change', value);
		},
		// 点击折叠板表头的时候
		handleItemClick(item) {
			// 手风琴需求
			if(this.accordion) {
				this.setActiveNames(
					(this.activeNames[0] || this.activeNames[0] === 0) &&
					this.activeNames[0] === item.name? '' : item.name
				)
			} else {
				let activeNames = this.activeNames.slice(0)
				let index = activeNames.indexOf(item.name)
				// 如果存在就删除，避免重复添加
				if (index > -1) {
					activeNames.splice(index, 1)
				} else {
					// 如果没有就push进去
					activeNames.push(item.name)
				}
				this.setActiveNames(activeNames)
			}
		}
	},
	created() {
	      this.$on('item-click', this.handleItemClick);
	    },
	watch: {
		value(value) {
			this.activeNames = [].concat(value)
		}
	},
	
}
</script>

<style scoped>
@import './style.css';
</style>
