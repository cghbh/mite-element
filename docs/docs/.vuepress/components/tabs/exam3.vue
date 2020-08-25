<template>
	<m-tabs v-model="activeName" type="card" @tab-click="handleClick">
		<m-tabs-item label="正在加载中" name="one" icon="loading">
			<h3>正在加载中......</h3>
		</m-tabs-item>
		<m-tabs-item label="菜单选项" name="two" icon="caidan">
			<h3>菜单选项</h3>
		</m-tabs-item>
		<m-tabs-item label="提示信息" name="three" icon="info">
			<h3>提示信息</h3>
		</m-tabs-item>
		<m-tabs-item label="建议收藏" name="four" icon="star">
			<h3>建议收藏</h3>
		</m-tabs-item>
	</m-tabs>
</template>

<script>
import MTabs from '../../../../../packages/components/tabs/index.js'
import MTabsItem from '../../../../../packages/components/tabs-item/index.js'
export default {
	components: {
		MTabs,
		MTabsItem
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
.example-content {
	line-height: 200%;
	font-size: 14px;
}
h3 {
	margin: 0;
}
</style>
