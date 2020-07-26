<template>
	<div class="button-exam1">
		<lay-button>默认按钮</lay-button>
		<lay-button type="warning">warning按钮</lay-button>
		<lay-button type="danger">danger按钮</lay-button>
		<lay-button type="primary">primary按钮</lay-button>
		<lay-button type="success">success按钮</lay-button>
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
.button-exam1 {
	margin-top: 25px;
  margin-bottom: 25px;
}
</style>
