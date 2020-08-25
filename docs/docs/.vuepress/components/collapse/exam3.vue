<template>
	<div class="collapse-exam3">
		<m-collapse v-model="activeNames" border accordion>
			<m-collapse-item name="1" title="第一句话">
				<p class="display-p">可以选择不说真话，但一定不能说假话。</p>
			</m-collapse-item>
			<m-collapse-item name="2" title="第二句话">
				<p class="display-p"> 命运决定谁会进入我们的生活，内心决定我们与谁并肩。</p>
			</m-collapse-item>
			<m-collapse-item name="3" title="第三句话">
				<p class="display-p">当斧头来到树林里的时候，好多树都说，至少它的把手是我们自己人。</p>
			</m-collapse-item>
			<m-collapse-item name="4" title="第四句话">
				<p class="display-p">下面我简单说两句。</p>
			</m-collapse-item>
		</m-collapse>
	</div>
</template>

<script>
import MCollapse from '../../../../../packages/components/collapse/index.js'
import MCollapseItem from '../../../../../packages/components/collapse-item/index.js'
export default {
	data() {
		return {
			// 默认展开栏，数组的值为name值
			activeNames: ''
		}
	},
	components: {
		MCollapse,
		MCollapseItem
	}
}
</script>

<style scoped>
.collapse-exam3 {
    width: 100%;
}

.display-p {
	margin: 0;
	padding: 0;
	line-height: 30px;
	padding-left: 10px;
}
</style>
