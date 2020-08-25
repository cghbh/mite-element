<template>
	<div class="button-exam3">
		<m-button icon="info-circle">默认</m-button>
		<m-button type="primary" icon="heart"></m-button>
		<m-button type="warning" icon="star">警告</m-button>
		<m-button type="danger" icon="close">危险</m-button>
		<m-button type="success" icon="check">成功</m-button>
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

