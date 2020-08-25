<template>
	<div class="collapse-exam2">
		<de-collapse v-model="activeNames" border>
			<de-collapse-item name="1" title="礼记·大学">
				<p class="display-p">物格而后知至，知至而后意诚，意诚而后心正，心正而后身修，身修而后家齐，家齐而后国治，国治而后天下平。</p>
			</de-collapse-item>
			<de-collapse-item name="2" title="孟子·离娄章句上">
				<p class="display-p">行有不得者，皆反求诸己，其身正而天下归之。</p>
			</de-collapse-item>
			<de-collapse-item name="3" title="庄子·内篇·大宗师">
				<p class="display-p">泉涸，鱼相与处于陆，相呴以湿，相濡以沫，不如相忘于江湖。</p>
			</de-collapse-item>
			<de-collapse-item name="4" title="论语·子罕篇">
				<p class="display-p">逝者如斯夫！不舍昼夜。</p>
			</de-collapse-item>
			<de-collapse-item name="5" title="晋书·宣帝纪">
				<p class="display-p">积善三年，知之者少，为恶一日，闻于天下</p>
			</de-collapse-item>
		</de-collapse>
	</div>
</template>

<script>
import DeCollapse from '../../../../../packages/components/collapse/index.js'
import DeCollapseItem from '../../../../../packages/components/collapse-item/index.js'
export default {
	data() {
		return {
			// 默认展开栏，数组的值为name值
			activeNames: []
		}
	},
	components: {
		DeCollapse,
		DeCollapseItem
	}
}
</script>

<style scoped>
.collapse-exam2 {
    width: 100%;
}

.display-p {
	margin: 0;
	padding: 0;
	line-height: 30px;
	padding-left: 10px;
}
</style>
