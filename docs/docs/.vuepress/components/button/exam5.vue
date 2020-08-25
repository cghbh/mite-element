<template>
	<div class="button-exam5">
		<div class="primary">
			<de-button type="primary">默认按钮</de-button>
			<de-button type="primary" round>默认按钮</de-button>
			<de-button type="primary" size="medium">中型按钮</de-button>
			<de-button type="primary" size="medium" round>中型按钮</de-button>
		</div>
		
		<div class="small">
			<de-button type="primary" size="small" round>小型按钮</de-button>
			<de-button type="primary" size="small">小型按钮</de-button>
			<de-button type="primary" size="mini" round>超小</de-button>
			<de-button type="primary" size="mini">超小</de-button>
		</div>
	</div>
</template>

<script>
import DeButton from '../../../../../packages/components/button/index.js'
export default {
	methods: {
		handleClick (e) {
			console.log(e.target)
		}
	},
	components: {
		DeButton
	}
}
</script>

<style scoped>
.primary {
	margin-bottom: 15px;
}
</style>