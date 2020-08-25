<template>
	<div class="button-exam3">
		<de-button icon="info-circle">默认</de-button>
		<de-button type="primary" icon="heart"></de-button>
		<de-button type="warning" icon="star">警告</de-button>
		<de-button type="danger" icon="close">危险</de-button>
		<de-button type="success" icon="check">成功</de-button>
	</div>
</template>

<script>
import DeButton from '../../../../../packages/components/button/index.js'
export default {
	components: {
		DeButton
	}
}
</script>

<style scoped>
</style>

