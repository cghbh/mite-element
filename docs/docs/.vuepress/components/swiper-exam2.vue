<template>
	<div class="swiper-exam2">
		<de-swiper height="200px" :interval="interval" arrow :initindex="0" dot dotcolor="#409eff" radius="5px">
			<de-swiper-item name="1">
				<img class="swiper-img" src="../img/012.png">
			</de-swiper-item>
			<de-swiper-item name="2">
				<img class="swiper-img" src="../img/df.png">
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
			interval: 1200
		}
	}
}
</script>

<style>
.swiper-exam2 {
	width: 100%;
	max-width: 600px;
}
.swiper-img {
	width: 100%;
	height: auto;
}
.navbar {
	z-index: 9999999;
}
</style>
