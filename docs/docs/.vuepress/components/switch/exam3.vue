<template>
	<div class="switch-three">
		<m-switch v-model="value" small></m-switch>
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
			value: false
		}
	}
}
</script>

<style scoped>
.switch-three {
	margin-bottom: 20px;
}
</style>
