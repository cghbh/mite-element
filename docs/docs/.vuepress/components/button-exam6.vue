<template>
	<div class="button-exam6">
		<lay-button type="success" @click="handleClick">点我有惊喜</lay-button>
		<lay-button type="info" disabled @click="handleClickDisabled">点坏鼠标也没有</lay-button>
	</div>
</template>

<script>
import Vue from 'vue'
import LayButton from '../../../../packages/components/button/index.js'
import LayMessage from '../../../../packages/components/message/index.js'
Vue.use(LayMessage)
export default {
	methods: {
		handleClick () {
			this.$message({
				message: '你要的惊喜在这里哟！',
				type: 'success',
				duration: 2000,
				position: 'right'
			})
		},
		handleClickDisabled() {
			this.$message({
				message: '你要的惊喜在这里哟！',
				type: 'success',
				duration: 2000,
				position: 'right'
			})
		}
	},
	components: {
		LayButton
	}
}
</script>

<style scoped>
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