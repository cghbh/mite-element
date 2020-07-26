<template>
	<div class="button-exam2">
		<lay-button disabled>默认按钮</lay-button>
		<lay-button disabled type="warning">warning按钮</lay-button>
		<lay-button disabled type="danger">danger按钮</lay-button>
		<lay-button disabled type="primary">primary按钮</lay-button>
		<lay-button disabled type="success">success按钮</lay-button>
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
.button-exam2 {
	margin-top: 25px;
  margin-bottom: 25px;
}
</style>
