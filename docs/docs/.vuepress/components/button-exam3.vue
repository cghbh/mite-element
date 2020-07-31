<template>
	<div class="button-exam3">
		<de-button icon="loading">默认</de-button>
		<de-button type="primary" icon="info"></de-button>
		<de-button type="warning" icon="star">警告</de-button>
		<de-button type="danger" icon="bell">危险</de-button>
		<de-button type="success" icon="success">成功</de-button>
	</div>
</template>

<script>
import DeButton from '../../../../packages/components/button/index.js'
export default {
	components: {
		DeButton
	}
}
</script>

<style scoped>
.button-exam3 {
	margin-top: 25px;
  margin-bottom: 25px;
}
</style>

