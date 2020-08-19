## Swiper 轮播图

 在有限空间内，循环播放同一类型的图片、文字等内容 。

>注意：设置轮播图的图片内容的时候，只需要设置外部的宽度以及设置图片的宽度为100%即可实现自适应。
>
>如果是非图片的轮播图展示内容，则只需要设置宽高即可。

#### 基础用法

<base-code>

<template slot="display">

<swiper-exam1></swiper-exam1>

</template>

<template>

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

</template>

</base-code>




#### 指示器

显示在轮播图底部的小圆点，你也可以自定义小圆点的active状态颜色。

<base-code>

<template slot="display">

<swiper-exam2></swiper-exam2>

</template>

<template>

```vue
<template>
	<de-swiper :interval="interval" arrow :initindex="0" dot dotcolor="#409eff">
		<de-swiper-item name="1"><img src="../img/01.png"></de-swiper-item>
		<de-swiper-item name="2"><img src="../img/02.png"></de-swiper-item>
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

</template>

</base-code>





### Swiper Attributes

|   参数    |                  说明                   |  类型   |    可选值    | 默认值  |
| :-------: | :-------------------------------------: | :-----: | :----------: | :-----: |
| interval  |      轮播图的间隔时间，单位是毫秒       | number  |      —       |  3000   |
|    dot    |          是否显示切换的小圆点           | boolean | true / false |  false  |
| dotcolor  |              小圆点的颜色               | string  |      —       | #409eff |
| initindex | 初始化状态下显示第几张图片，所以从0开始 | number  |      —       |    0    |
|   arrow   |          是否显示左右切换箭头           | boolean | true / false |  false  |
|  radius   |            轮播图圆角化展示             | string  |      —       |  '0px'  |





### SwiperItem  Attributes

| 参数 |        说明        |      类型       | 可选值 | 默认值 |
| :--: | :----------------: | :-------------: | :----: | :----: |
| name | 轮播图的唯一标识符 | string / number |   —    |   —    |

