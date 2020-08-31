<template>
	<div class="affix-one">
		<div class="affix-one-container">
			<p class="affix-one-params">1.今天做不成的，明天也不会做好。一天也不能虚度，要下决心把可能的事情，一把抓住而紧紧抱住，有决心就不会任其逃去，而且必然要贯彻实行。</p>
			<p class="affix-one-params">2.意志如同一团火，燃烧着怒放的生命。它帮助每一个平凡的人，不畏前方模糊不清，不顾道路荆棘满地，跨越出生、基因和环境的局限，向着看似遥不可及的梦想奔跑，创造属于自己的精彩。</p>
			<p class="affix-one-params">3.我看到那些岁月如何奔驰，挨过了冬天，便迎来了春天。</p>
			<p class="affix-one-params">4.最富有的时候，你的生活也是最贫穷的。吹毛求疵的人即便在天堂也能挑出瑕疵。一个安心的人在哪都可以过自得其乐的生活，抱着振奋乐观的思想，如同居住在皇宫一般。犯不着千辛万苦求新，无论衣服还是朋友。把旧的翻新，回到它们中去。万事万物没有变，是我们在变。</p>
			<m-affix :distance="60">
				<div class="affix-div">固定在此处</div>
			</m-affix>
			<p class="affix-one-params">5.为什么一桶水放时间长了会变臭，而水冻成冰以后就能永远保持甘美呢？哲人说，这就如同情感和理智的区别。</p>
			<p class="affix-one-params">6.至简及朴素的生活，取暖的方式其实简单不过。然而，生活中一切极简主义多少都沾染了奢靡的气息。关于简与奢，有时候是一场悖论。可能，我只是入世太深，尚未足够平静而已。</p>
			<p class="affix-one-params">7.一个人怎样看待自己，决定了此人的命运，指向了他的归宿。</p>
			<p class="affix-one-params">8.大地以叶子的形式向外界表达其自身并不奇怪，它的内部就有叶子的思想。</p>
			<p class="affix-one-params">9.人们每晚温顺地从就近的田地或街上回到家中，那里回响着苦恼，他们的生命逐渐憔悴，因为他一再呼吸的都是自己的气息。</p>
			<p class="affix-one-params">10.一切改变都是值得深思的奇迹，但它又是一种随时会发生的奇迹。</p>
			
			<p class="affix-one-params">11.知道自己知道什么，也知道自己不知道什么，这就是真正的知识。</p>
			<p class="affix-one-params">12.如果一个人充满自信地在他的梦想的方向上前进，并努力过着他所想象到的那种生活，那么他就会遇见在普通时刻里意料不到的成功。他将把某些事情置于身后，将跨越一个看不见的边界。</p>
			<p class="affix-one-params">13.我愿意深深地扎入生活，吮尽生活的骨髓，过得扎实，简单，把一切不属于生活的内容剔除得干净利落，把生活逼到绝处，用最基本的形式，简单，简单，再简单。</p>
			<p class="affix-one-params">14.只有你学会把自己已有的成绩都归零，才能腾出空间去接纳更多的新东西，如此才能使自己不断的超越自己。</p>
		</div>
	</div>
</template>

<script>
import MAffix from '../../../../../packages/components/affix/index.js'
export default {
	components: {
		MAffix
	},
	data() {
		return {
			value: true
		}
	}
}
</script>

<style scoped>
.affix-one {
	padding: 10px 10px 0 10px;
	width: 100%;
}

.affix-div {
	width: 100%;
	height: 48px;
	background-color: #409EFF;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: 500;
	font-family: Arial, Helvetica, sans-serif;
	border-radius: 5px;
	letter-spacing: .1em;
	
}

.affix-one-params {
	font-size: 14px;
	font-family: Arial, Helvetica, sans-serif;
	margin: 10px 0;
	line-height: 28px;
}
</style>
