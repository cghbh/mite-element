<template>
	<div class="button-exam6">
		<lay-button type="primary" @click="handleClick">默认按钮</lay-button>
	</div>
</template>

<script>
import LayButton from '../../../../packages/components/button/index.js'
export default {
  name:'my-button',
	methods: {
		handleClick () {
			alert('我是点击事件！')
		}
	},
	components: {
		LayButton
	}
}
</script>

<style>
.button-exam6 {
	margin-top: 25px;
	margin-bottom: 25px;
}
/*table {
	width: 100%;
}
td {
	min-width: 200px;
}*/
td {
	text-align: center;
}
</style>