<template>
	<div>
		<de-button @click="handleClick1">点我出现弹出框</de-button>
		<de-button @click="handleClick2">点我出现弹出框</de-button>
	</div>
</template>

<script>
export default {
	methods: {
		handleClick1() {
			this.$confirm({
				title: '我是标题',
				content: '我是内容区域',
				onOk: () => {
					this.$message({
						message: '确定',
						duration: 1000
					})
				},
				onCancel: () => {
					this.$message({
						message: '取消',
						duration: 1000
					})
				}
			})
		},
		handleClick2 () {
			this.$alert({
				title: '我是alert',
				content: '我是alert的消息弹框',
				onOk: () => {
					this.$message({
						message: '我是alert消息的提示框'
					})
				}
			})
		}
	}
}
</script>

<style>
</style>
