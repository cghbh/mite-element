<template>
	<div class="input-display">
		我是用来展示Input组件的
		<lay-input placeholder="请输入内容" v-model="value"></lay-input>
		<lay-input placeholder="请输入内容" type="textarea" v-model="value"></lay-input>
		<lay-input placeholder="请输入内容" size="medium" v-model="value"></lay-input>
		<lay-input placeholder="请输入内容" clearable size="small" v-model="value"></lay-input>
		<!-- <input type="textarea"> -->
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
