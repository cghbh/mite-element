<template>
	<div>
		<m-button>111</m-button>
		<m-button>111</m-button>
		<m-button>111</m-button>
		<m-button>111</m-button>
		<m-button>111</m-button>

		<m-button type="success" @click="handleClick1">成功</m-button>
		<!-- <m-button type="warning" @click="handleClick2">警告</m-button>
		<m-button type="info" @click="handleClick3">消息</m-button>
		<m-button type="danger" @click="handleClick4">错误</m-button>
		<m-button type="success" @click="handleClickStraight">直接调用</m-button> -->
	</div>
</template>

<script>
export default {
	methods: {
		handleClick1 () {
			this.$message({ message: '我是消息弹框组件', autoClose: false })
		}
	}
}
</script>

<style>
</style>
