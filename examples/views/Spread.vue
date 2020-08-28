<template>
	<div>
		<m-switch v-model="value"></m-switch>
		<m-spread :visible="value">
			<div style="width: 500px; height: 300px;background-color: skyblue;"></div>
		</m-spread>
		
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
