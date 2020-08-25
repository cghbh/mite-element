<template>
	<div class="button-exam6">
		<de-button type="success" @click="handleClick">点我有惊喜</de-button>
		<de-button type="info" disabled @click="handleClickDisabled">点坏鼠标也没有</de-button>
	</div>
</template>

<script>
import Vue from 'vue'
import DeButton from '../../../../../packages/components/button/index.js'
import DeMessage from '../../../../../packages/components/message/index.js'
Vue.use(DeMessage)
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
		DeButton
	}
}
</script>

<style scoped>
td {
	text-align: center;
}
</style>