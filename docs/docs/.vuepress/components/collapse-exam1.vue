<template>
	<div class="collapse-exam1">
		<de-collapse v-model="activeNames">
			<de-collapse-item name="1" title="第一段文字  First paragraph">
				<p class="display-p">生命从一开始就在倒计时，不要让无谓的琐事耗费有限的生命燃料。不值得做的事情，最好不做或尽量少做。因为那样不仅浪费时间和精力，还会给自己释放“忙碌”的错误信号，让你得到表面的自我慰藉和虚幻的满足。等你清醒过来，就会发现该做的事情都还没有做，而岁月的沧桑早已爬满脸颊。</p>
			</de-collapse-item>
			<de-collapse-item name="2" title="第二段文字  Second paragraph">
				<p class="display-p">站在历史的海岸漫溯那一道道历史沟渠：楚大夫沉吟泽畔，九死不悔；魏武帝扬鞭东指，壮心不已；陶渊明悠然南山，饮酒采菊……他们选择了永恒，纵然谄媚诬蔑视听，也不随其流扬其波，这是执著的选择；纵然马革裹尸，魂归狼烟，只是豪壮的选择；纵然一身清苦，终日难饱，也愿怡然自乐，躬耕陇亩，这是高雅的选择。在一番选择中，帝王将相成其盖世伟业，贤士迁客成其千古文章。</p>
			</de-collapse-item>
			<de-collapse-item name="3" title="第三段文字  Third paragraph">
				<p class="display-p">
					守候着自己的世界，或忙或累，或喜或悲，都是一种充实。闲时，静坐一隅，执盏遐思，过去的、现在的、未来的，喜的、悲的...什么都可以去想。或许，美好的东西，本就不该遗忘，怀念也好，思念也罢，用心感受，何尝不是一种幸福？每个人，肩上的背囊，都装满了自己的故事，或伤或痛，不懂卸载，当压的自己，连呼吸都是一种痛的时候，才学会拐弯。有些人，一转身，便走成了背影，有些事，一轮回，便旧成了曾经；学会宽恕自己，原谅错误，想要的，努力去争取；想忘的，时间会帮你。
				</p>
			</de-collapse-item>
			<de-collapse-item name="4" title="第四段文字  Fourth paragraph">
				<p class="display-p">
					微笑着，去唱生活的歌谣，不要埋怨生活给予了太多的磨难，不必抱怨生命中有太多的曲折。大海如果失去了巨浪的翻滚，就会失去雄浑；沙漠如果失去了飞沙的狂舞，就会失去壮观。人生如果仅去求得两点一线的一帆风顺，生命也就失去了存在的意义。
				</p>
			</de-collapse-item>
		</de-collapse>
	</div>
</template>

<script>
import DeCollapse from '../../../../packages/components/collapse/index.js'
import DeCollapseItem from '../../../../packages/components/collapse-item/index.js'
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
.collapse-exam1 {
  margin-top: 25px;
  margin-bottom: 25px;
}

.display-p {
	margin: 0;
	padding: 0;
	line-height: 30px;
	padding-left: 10px;
}
</style>
