<template>
	<div>
		<!-- 下面是参数说明 -->
		<!-- jump-page-number:单次跳转多少个页面 -->
		<!-- current 当前页码 -->
		<!-- total 总页码 -->
		<!-- hide-if-one-page 只有一页的时候是否关闭分页器 -->
		<m-pagination :show-quick-jump="true" :current-page.sync="current" :total="100" hide-if-one-page background :jump-step="10"></m-pagination>
		<!-- 逻辑分析： -->
		<!-- 当前的currentPage是5的时候，显示前面的两条，后面的两条，第一条以及最后一条，当前的这一条数据，一共是七条，一直到currentPage为46的时候停止 -->
		<!-- 47以后的数据，只显示当前的这一条，后面的所有 -->
		<!--1 显示后面的三条，以及最后一条 -->
		<!-- 2显示前面一条，后面两条 -->
		<!-- 3显示前面2条，后面一条 -->
		<!-- 4显示前面三条。后面一条 -->
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			current: 7
		}
	},
	watch: {
		current(newVal) {
			console.log(newVal, '----')
		}
	}
}
</script>

<style>
</style>
