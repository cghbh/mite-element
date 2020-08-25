<template>
	<div class="button-exam6">
		<m-button type="success" @click="handleClick">点我有惊喜</m-button>
		<m-button type="info" disabled @click="handleClickDisabled">点坏鼠标也没有</m-button>
	</div>
</template>

<script>
import Vue from 'vue'
import MButton from '../../../../../packages/components/button/index.js'
import MMessage from '../../../../../packages/components/message/index.js'
Vue.use(MMessage)
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
		MButton
	}
}
</script>

<style scoped>
td {
	text-align: center;
}
</style>