<template>
	<div class="button-exam5">
		<div class="primary">
			<m-button type="primary">默认按钮</m-button>
			<m-button type="primary" round>默认按钮</m-button>
			<m-button type="primary" size="medium">中型按钮</m-button>
			<m-button type="primary" size="medium" round>中型按钮</m-button>
		</div>
		
		<div class="small">
			<m-button type="primary" size="small" round>小型按钮</m-button>
			<m-button type="primary" size="small">小型按钮</m-button>
			<m-button type="primary" size="mini" round>超小</m-button>
			<m-button type="primary" size="mini">超小</m-button>
		</div>
	</div>
</template>

<script>
import MButton from '../../../../../packages/components/button/index.js'
export default {
	methods: {
		handleClick (e) {
			console.log(e.target)
		}
	},
	components: {
		MButton
	}
}
</script>

<style scoped>
.primary {
	margin-bottom: 15px;
}
</style>