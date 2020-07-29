<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'lay-form',
	provide() {
		return {
			LayForm: this
		}
	},
	props: {
		modal: {
			type: Object,
			required: true
		},
		rules: {
			type: Object
		}
	},
	created() {
		// 一定要注意的是，我们由于要获取的是子孙组件，因此不要再mounted里面获取，因为已经挂载了，也就没办法获取
		this.fileds = []
		this.$on('add.Fileds', item => {
			this.fileds.push(item)
		})
	},
	methods: {
		// 实现一个点击校验全部的操作
		validate(cb) {
			// 循环执行所有的表单校验
			// 同时返回来的是一个Promise对象
			const tasks = this.fileds.map(item => item.validate())
			Promise.all(tasks).then(() => {
				cb(true)
			})
			.catch(() => {
				cb(false)
			})
		}
	}
}
</script>

<style>
</style>
