<template>
	<div class="button-exam3">
		<lay-button icon="loading">默认</lay-button>
		<lay-button type="primary" icon="info"></lay-button>
		<lay-button type="warning" icon="star">警告</lay-button>
		<lay-button type="danger" icon="bell">危险</lay-button>
		<lay-button type="success" icon="success">成功</lay-button>
	</div>
</template>

<script>
import LayButton from '../../../../packages/components/button/index.js'
export default {
	components: {
		LayButton
	}
}
</script>

<style scoped>
.button-exam3 {
	margin-top: 25px;
  margin-bottom: 25px;
}
</style>

