<template>
	<m-tabs v-model="activeName" type="card" @tab-click="handleClick">
		<m-tabs-item label="满江红·写怀" name="1">
			<p class="example-content">怒发冲冠，凭栏处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。莫等闲，白了少年头，空悲切！<br>靖康耻，犹未雪。臣子恨，何时灭！驾长车，踏破贺兰山缺。壮志饥餐胡虏肉，笑谈渴饮匈奴血。待从头、收拾旧山河，朝天阙。</p>
		</m-tabs-item>
		<m-tabs-item label="青玉案·元夕" name="2">
			<p class="example-content">东风夜放花千树，更吹落，星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。<br>蛾儿雪柳黄金缕，笑语盈盈暗香去。众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。</p>
		</m-tabs-item>
		<m-tabs-item label="桂枝香·金陵怀古" name="3">
			<p class="example-content">登临送目，正故国晚秋，天气初肃。千里澄江似练，翠峰如簇。归帆去棹残阳里，背西风，酒旗斜矗。彩舟云淡，星河鹭起，画图难足。<br>念往昔，繁华竞逐，叹门外楼头，悲恨相续。千古凭高对此，谩嗟荣辱。六朝旧事随流水，但寒烟衰草凝绿。至今商女，时时犹唱，后庭遗曲。</p>
		</m-tabs-item>
		<m-tabs-item label="苏幕遮·燎沉香" name="4">
			<p class="example-content">燎沉香，消溽暑。鸟雀呼晴，侵晓窥檐语。叶上初阳干宿雨，水面清圆，一一风荷举。<br>故乡遥，何日去？家住吴门，久作长安旅。五月渔郎相忆否？小楫轻舟，梦入芙蓉浦。</p>
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
			activeName: '3'
		}
	},
	created() {
		this.$on('tabclick', (instance) => {
			console.log(instance)
		})
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
	margin: 0;
	line-height: 200%;
	font-size: 14px;
}
</style>
