<template>
	<div class="button-exam2">
		<de-button disabled>默认按钮</de-button>
		<de-button disabled type="warning">warning按钮</de-button>
		<de-button disabled type="danger">danger按钮</de-button>
		<de-button disabled type="primary">primary按钮</de-button>
		<de-button disabled type="success">success按钮</de-button>
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
.button-exam2 {
	margin-top: 25px;
  margin-bottom: 25px;
}
</style>
