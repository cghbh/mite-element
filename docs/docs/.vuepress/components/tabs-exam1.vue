<template>
	<div class="tabs-exam1">
		<de-tabs v-model="activeName" @tab-click="handleClick">
			<de-tabs-item label="用户管理" name="first">
				用户管理
			</de-tabs-item>
			<de-tabs-item label="配置管理" name="second">
				配置管理
			</de-tabs-item>
			<de-tabs-item label="角色管理" name="third">
				角色管理
			</de-tabs-item>
			<de-tabs-item label="定时任务补偿" name="fourth">
				定时任务补偿
			</de-tabs-item>
		</de-tabs>
	</div>
</template>

<script>
import DeTabs from '../../../../packages/components/tabs/index.js'
import DeTabsItem from '../../../../packages/components/tabs-item/index.js'
export default {
	components: {
		DeTabs,
		DeTabsItem
	},
	data() {
		return {
			activeName: 'second'
		}
	},
	methods: {
		handleClick(value) {
			console.log(value)
		}
	}
}
</script>

<style scoped>
.tabs-exam1 {
	width: 100%;
	padding: 20px;
	border: 1px solid #DCDFE6;
	box-sizing: border-box;
}
.example-content {
	line-height: 200%;
	font-size: 14px;
}
</style>
