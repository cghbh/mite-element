## Swiper 轮播图

 在有限空间内，循环播放同一类型的图片、文字等内容 。

>注意：设置轮播图的图片内容的时候，只需要设置外部的宽度以及设置图片的宽度为100%即可实现自适应。
>
>如果是非图片的轮播图展示内容，则需要设置宽高即可。

#### 基础用法

<swiper-exam1></swiper-exam1>

```vue
<template>
	<de-swiper :interval="interval" arrow>
		<de-swiper-item name="1"><h1>1</h1></de-swiper-item>
		<de-swiper-item name="2"><h1>2</h1></de-swiper-item>
		<de-swiper-item name="3"><h1>3</h1></de-swiper-item>
		<de-swiper-item name="4"><h1>4</h1></de-swiper-item>
	</de-swiper>
</template>

<script>
export default {
	data() {
		return {
			interval: 1500
		}
	}
}
</script>
```

#### 指示器

显示在轮播图底部的小圆点，你也可以自定义小圆点的active状态颜色。

<swiper-exam2></swiper-exam2>

```vue
<template>
	<de-swiper :interval="interval" arrow :initindex="0" dot dotcolor="#409eff">
		<de-swiper-item name="1"><img src="../img/01.png"></de-swiper-item>
		<de-swiper-item name="2"><img src="../img/02.png"></de-swiper-item>
    	<de-swiper-item name="3"><img src="../img/03.jpg"></de-swiper-item>
		<de-swiper-item name="4"><img src="../img/04.png"></de-swiper-item>
		<de-swiper-item name="5"><img src="../img/05.jpg"></de-swiper-item>
		</de-swiper>
	</div>
</template>

<script>
export default {
	data() {
		return {
			interval: 1200
		}
	}
}
</script>
```

