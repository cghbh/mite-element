<template>
	<div>
		<m-switch v-model="value"></m-switch>
		<m-switch v-model="value" small></m-switch>
		<m-switch v-model="value" disabled></m-switch>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: true
		}
	}
}
</script>

<style>
</style>
