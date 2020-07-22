<template>
	<div>
		<lay-button type="success" @click="handleClick">123</lay-button>
	</div>
</template>

<script>
export default {
	methods: {
		handleClick () {
			this.$message({
				message: '哈哈哈哈，我来了！',
				// 文字是否居中，默认是不居中的
				center: false,
				// 自动关闭，默认是true，也就是自动关闭
				autoClose: false,
				// 方位，有center，left，right可选择
				position: 'right'
			})
		}
	}
}
</script>

<style>
</style>
