<template>
	<div id="views">
		<div>
			<router-link to="/icon">Icon图标组件</router-link>
		</div>
		<div>
			<router-link to="/button">Button按钮组件</router-link>
		</div>
		<div>
			<router-link to="/radio">Radio单选框组件</router-link>
		</div>
		<div>
			<router-link to="/radio-group">RadioGroup单选框组件</router-link>
		</div>
		<div>
			<router-link to="/checkbox">Checkbox复选框组件</router-link>
		</div>
		<div>
			<router-link to="/checkbox-group">CheckboxGroup复选框组件</router-link>
		</div>
		<div>
			<router-link to="/message">点我弹出Message</router-link>
		</div>
		<div>
			<router-link to="/message-box">点我弹出MessageBox</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	mounted () {
		console.log(this)
		console.log(this.$el)
	}
}
</script>

<style scoped>
</style>
