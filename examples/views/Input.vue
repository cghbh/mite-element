<template>
	<div class="input-display">
		我是用来展示Input组件的
		<m-input placeholder="请输入内容"  v-model="value">
			<template slot="prepend">Http://</template>
			<template slot="append">.com</template>
		</m-input>
		<div>{{ value }}</div>
	</div>
</template>

<script>
export default {
	 data () {
		 return {
			 value: ''
		 }
	 }
}
</script>

<style scoped>
.input-display {
	width: 240px;
}
</style>
