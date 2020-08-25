<template>
	<div class="button-exam2">
		<m-button disabled>默认按钮</m-button>
		<m-button disabled type="warning">warning按钮</m-button>
		<m-button disabled type="danger">danger按钮</m-button>
		<m-button disabled type="primary">primary按钮</m-button>
		<m-button disabled type="success">success按钮</m-button>
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
