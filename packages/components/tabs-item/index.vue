<template>
	<div v-show="name === Tabs.activeName" class="de-tabs-item">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'de-tabs-item',
	inject: {
		Tabs: {
			default: null
		}
	},
	props: {
		label: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		icon: {
			type: String
		}
	},
	mounted() {
		// 通过事件派发将子组件的label数据传递到上级或者更上一级的组件
		this.Tabs.$emit('add', {
			label: this.label,
			name: this.name,
			icon: this.icon,
			self: this
		})
	}
}
</script>

<style scoped>
@import './style.css'
</style>
