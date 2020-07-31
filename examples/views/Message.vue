<template>
	<div>
		<de-button type="success" @click="handleClick1">成功</de-button>
		<de-button type="warning" @click="handleClick2">警告</de-button>
		<de-button type="info" @click="handleClick3">消息</de-button>
		<de-button type="danger" @click="handleClick4">错误</de-button>
	</div>
</template>

<script>
export default {
	methods: {
		handleClick1 () {
			this.$message({
				message: '我是成功的消息！',
				// 文字是否居中，默认是不居中的
				center: false,
				autoClose: false,
				// 方位，有center，left，right可选择
				position: 'right',
				duration: 3000,
				type: 'success'
			})
		},
		handleClick2 () {
			this.$message({
				message: '我是警告的消息！',
				// 文字是否居中，默认是不居中的
				center: true,
				autoClose: false,
				// 方位，有center，left，right可选择
				position: 'right',
				duration: 3000,
				type: 'warning'
			})
		},
		handleClick3 () {
			this.$message({
				message: '我是普通的消息！',
				// 文字是否居中，默认是不居中的
				center: false,
				autoClose: false,
				// 方位，有center，left，right可选择
				position: 'right',
				duration: 3000,
			})
		},
		handleClick4 () {
			this.$message({
				message: '我是错误的消息！',
				// 文字是否居中，默认是不居中的
				center: false,
				autoClose: false,
				// 方位，有center，left，right可选择
				position: 'right',
				duration: 3000,
				type: 'error'
			})
		}
	}
}
</script>

<style>
</style>
