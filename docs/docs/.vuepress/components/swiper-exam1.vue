<template>
	<div class="swiper-exam1">
		<de-swiper :interval="interval" arrow :initindex="0">
			<de-swiper-item name="1">
				<h1 class="item1">1</h1>
			</de-swiper-item>
			<de-swiper-item name="2">
				<h1 class="item2">2</h1>
			</de-swiper-item>
			<de-swiper-item name="3">
				<h1 class="item3">3</h1>
			</de-swiper-item>
			<de-swiper-item name="4">
				<h1 class="item4">4</h1>
			</de-swiper-item>
		</de-swiper>
	</div>
</template>

<script>
import DeSwiper from '../../../../packages/components/swiper/index.js'
import DeSwiperItem from '../../../../packages/components/swiper-item/index.js'
export default {
	components: {
		DeSwiper,
		DeSwiperItem
	},
	data() {
		return {
			interval: 1500
		}
	}
}
</script>

<style>
.swiper-exam1 {
	width: 500px;
	height: 200px;
}
h1 {
	margin: 0;
	width: 100%;
	height: 100%;
	line-height: 200px;
	text-align: center;
	color: #fff;
	user-select: none;
}
.item1 {
	background-color: pink;
}
.item2 {
	background-color: deeppink;
}
.item3 {
	background-color: skyblue;
}
.item4 {
	background-color: deepskyblue;
}
</style>
