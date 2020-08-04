<template>
	<div class="button-exam1">
		<de-button>默认按钮</de-button>
		<de-button type="warning">warning按钮</de-button>
		<de-button type="danger">danger按钮</de-button>
		<de-button type="primary">primary按钮</de-button>
		<de-button type="success">success按钮</de-button>
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

<style>
.button-exam1 {
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
