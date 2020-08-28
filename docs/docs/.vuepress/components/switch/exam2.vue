<template>
	<div class="switch-two">
		<m-switch v-model="value" disabled></m-switch>
	</div>
</template>

<script>
import MSwitch from '../../../../../packages/components/switch/index.js'
export default {
	components: {
		MSwitch
	},
	data() {
		return {
			value: true
		}
	}
}
</script>

<style scoped>
.switch-two {
	margin-bottom: 20px;
}
</style>
