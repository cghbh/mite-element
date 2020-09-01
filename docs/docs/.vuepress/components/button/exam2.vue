<template>
	<div class="button-exam2">
		<m-button disabled>默认</m-button>
		<m-button disabled type="info">信息</m-button>
		<m-button disabled type="warning">警告</m-button>
		<m-button disabled type="danger">危险</m-button>
		<m-button disabled type="primary">默认</m-button>
		<m-button disabled type="success">成功</m-button>
	</div>
</template>

<script>
import MButton from '../../../../../packages/components/button/index.js'
export default {
	components: {
		MButton
	}
}
</script>

<style scoped>
</style>
