<template>
	<div class="tabs-exam3">
		<de-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<de-tabs-item label="正在加载中" name="one" icon="loading">
				<h3>正在加载中......</h3>
			</de-tabs-item>
			<de-tabs-item label="菜单选项" name="two" icon="caidan">
				<h3>菜单选项</h3>
			</de-tabs-item>
			<de-tabs-item label="提示信息" name="three" icon="info">
				<h3>提示信息</h3>
			</de-tabs-item>
			<de-tabs-item label="建议收藏" name="four" icon="star">
				<h3>建议收藏</h3>
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
			activeName: 'four'
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
.tabs-exam3 {
	margin: 20px 0;
}
.example-content {
	line-height: 200%;
	font-size: 14px;
}
h3 {
	margin: 0;
}
</style>
