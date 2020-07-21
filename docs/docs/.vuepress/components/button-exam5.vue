<template>
	<div class="button-exam5">
		<lay-button type="primary" round>默认按钮</lay-button>
		<lay-button type="primary" size="medium" round>中型按钮</lay-button>
		<lay-button type="primary" size="small">小型按钮</lay-button>
		<lay-button type="primary" size="mini">超小按钮</lay-button>
	</div>
</template>

<script>
import LayButton from '../../../../packages/components/button/index.js'
export default {
  name:'my-button',
	methods: {
		handleClick (e) {
			console.log(e.target)
		}
	},
	components: {
		LayButton
	}
}
</script>

<style scoped>
.button-exam5 {
	margin-top: 25px;
	margin-bottom: 25px;
}
</style>