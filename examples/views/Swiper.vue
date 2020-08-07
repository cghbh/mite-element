<template>
	<div class="swiper-exam">
		<!-- <de-swiper :interval="interval" :initindex="5" v-model="value" dot>
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
			<de-swiper-item name="5">
				<h1 class="item5">5</h1>
			</de-swiper-item>
			<de-swiper-item name="6">
				<h1 class="item6">6</h1>
			</de-swiper-item>
		</de-swiper> -->
		<de-swiper :interval="interval" arrow :initindex="0" dot dotcolor="#409eff">
			<de-swiper-item name="1">
				<img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/125751/18/7808/132242/5f1babc5E104fc168/64651e4ba5a4e889.jpg!cr_1125x445_0_171!q70.jpg.dpg">
			</de-swiper-item>
			<de-swiper-item name="2">
				<img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/119639/22/11617/134582/5f1649aeEce0cf061/2749ef06e6274b27.jpg!cr_1125x445_0_171!q70.jpg.dpg">
			</de-swiper-item>
			<de-swiper-item name="3">
				<img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/118719/36/13828/96226/5f28d958E20766e37/c4ff8e032a12fca2.jpg!cr_1125x445_0_171!q70.jpg.dpg">
			</de-swiper-item>
			<!-- <de-swiper-item name="4">
				<img src="../img/p02.png">
			</de-swiper-item>
			<de-swiper-item name="4">
				<img src="../img/q70.jpg">
			</de-swiper-item> -->
		</de-swiper>
	</div>
</template>

<script>
export default {
	data() {
		return {
			interval: 1500000,
			value: '1'
		}
	}
}
</script>

<style scoped>
.swiper-exam {
	/* width: 500px;
	height: 200px;
	margin: 100px auto; */
}
img {
	width: 100%;
	/* height: 100%; */
}
</style>
