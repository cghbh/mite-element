<template>
	<div class="display-containe">
		<h3>Tabs组件展示页面</h3>
		<lay-tabs v-model="activeName" @tab-click="tabHandleClick">
			<lay-tabs-item label="配置管理" item="item1">我是配置管理的内容</lay-tabs-item>
			<lay-tabs-item label="角色管理" item="item2">我是角色管理的内容</lay-tabs-item>
			<lay-tabs-item label="用户管理" item="item3">我是用户管理的内容</lay-tabs-item>
			<lay-tabs-item label="定时任务补偿" item="item4">我是定时任务补偿的内容</lay-tabs-item>
			<lay-tabs-item label="哈哈哈" item="item5">
				哈哈哈
			</lay-tabs-item>
		</lay-tabs>
	</div>
</template>

<script>
export default {
	data () {
		return {
			activeName: 'item1'
		}
	},
	methods: {
		tabHandleClick(e) {
			console.log(e, 'e.target')
		}
	}
}
</script>

<style scoped>
.display-containe {
	width: 560px;
}
</style>
