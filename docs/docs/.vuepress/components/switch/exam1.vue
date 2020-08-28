<template>
	<div class="switch-one">
		<m-switch v-model="value"></m-switch>
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
.switch-one {
	margin-bottom: 20px;
}
</style>
