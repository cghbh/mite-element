<template>
	<div class="button-exam5">
		<de-button type="primary" round>默认按钮</de-button>
		<de-button type="primary" size="medium" round>中型按钮</de-button>
		<de-button type="primary" size="small">小型按钮</de-button>
		<de-button type="primary" size="mini">超小按钮</de-button>
	</div>
</template>

<script>
import DeButton from '../../../../packages/components/button/index.js'
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
</style>