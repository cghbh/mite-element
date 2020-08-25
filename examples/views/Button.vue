<template>
	<div>
		<div>
			<h2>基本语法</h2>
			<m-button>默认按钮</m-button>
			<m-button type="warning">默认按钮</m-button>
			<m-button type="danger">危险按钮</m-button>
			<m-button type="primary">默认按钮</m-button>
			<m-button type="success">成功按钮</m-button>
		</div>
		
		<div>
			<h2>禁用状态</h2>
			<m-button disabled>默认按钮</m-button>
			<m-button disabled type="warning">警告按钮</m-button>
			<m-button disabled type="danger">危险按钮</m-button>
			<m-button disabled type="primary">默认按钮</m-button>
			<m-button disabled type="success">成功按钮</m-button>
		</div>
		
		<div>
			<h2>图标按钮</h2>
			<m-button icon="loading">默认按钮</m-button>
			<m-button type="warning" icon="star">警告按钮</m-button>
			<m-button type="danger" icon="success">危险按钮</m-button>
			<m-button type="primary" icon="info">默认按钮</m-button>
			<m-button type="success" icon="bell">成功按钮</m-button>
		</div>
		
		<div>
			<h2>圆角图标</h2>
			<m-button round>默认按钮</m-button>
			<m-button type="warning" round>警告按钮</m-button>
			<m-button type="danger" round>危险按钮</m-button>
			<m-button type="primary" round>默认按钮</m-button>
			<m-button type="success" round>成功按钮</m-button>
		</div>
		
		<div>
			<h2>不同尺寸</h2>
			<m-button type="primary" round>默认按钮</m-button>
			<m-button type="primary" size="medium" round>中型按钮</m-button>
			<m-button type="primary" size="small" round>小型按钮</m-button>
			<m-button type="primary" size="mini" round>超小按钮</m-button>
		</div>
		
		<div>
			<h2>点击事件</h2>
			<m-button type="primary" @click="handleClick">默认按钮</m-button>
		</div>
	</div>
</template>

<script>
export default {
  name:'my-button',
	methods: {
		handleClick (e) {
			console.log(e.target)
			console.log(this.$el, '$el')
		}
	}
}
</script>

<style>
</style>
