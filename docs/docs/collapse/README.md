## Collapse 折叠面板

#### 基础用法

用来展示数据， 可同时展开多个面板，面板之间不影响 。

<collapse-exam1></collapse-exam1>

```vue
<template>
	<de-collapse v-model="activeNames">
		<de-collapse-item name="1" title="第一段文字  First">
			第一段文字  First paragraph
		</de-collapse-item>
		<de-collapse-item name="2" title="第二段文字  Second">
			第二段文字  Second paragraph
		</de-collapse-item>
		<de-collapse-item name="3" title="第三段文字  Third">
			第三段文字  Third paragraph
		</de-collapse-item>
		<de-collapse-item name="4" title="第四段文字  Fourth">
			第四段文字  Fourth paragraph
		</de-collapse-item>
	</de-collapse>
</template>

<script>
export default {
	data() {
		return {
			/* 默认展开栏，数组的值为name值 */ 
			activeNames: []
		}
	}
}
</script>
```



#### 带边框的折叠面板

具备边框属性。

<collapse-exam2></collapse-exam2>

```vue
<template>
	<de-collapse v-model="activeNames" border>
		<de-collapse-item name="1" title="礼记·大学">
			<p>物格而后知至，知至而后意诚，意诚而后心正，心正而后身修，身修而后家齐，家齐而后国治，国治而后天下平。</p>
		</de-collapse-item>
		<de-collapse-item name="2" title="孟子·离娄章句上">
			<p>行有不得者，皆反求诸己，其身正而天下归之。</p>
		</de-collapse-item>
		<de-collapse-item name="3" title="庄子·内篇·大宗师">
			<p>泉涸，鱼相与处于陆，相呴以湿，相濡以沫，不如相忘于江湖。</p>
		</de-collapse-item>
		<de-collapse-item name="4" title="论语·子罕篇">
			<p>逝者如斯夫！不舍昼夜。</p>
		</de-collapse-item>
		<de-collapse-item name="5" title="晋书·宣帝纪">
			<p>积善三年，知之者少，为恶一日，闻于天下</p>
		</de-collapse-item>
	</de-collapse>
</template>

<script>
export default {
	data() {
		return {
			// 默认展开栏，数组的值为name值
			activeNames: ['4']
		}
	}
}
</script>
```



#### 手风琴效果

只能展示一个栏目，其他的会被自动收起来。注意：如果是手风琴的效果，那么activeNames的类型不能是数组。

<collapse-exam3></collapse-exam3>

```vue
<template>
	<de-collapse v-model="activeNames" border accordion>
		<de-collapse-item name="1" title="第一句话">
			<p>可以选择不说真话，但一定不能说假话。</p>
		</de-collapse-item>
		<de-collapse-item name="2" title="第二句话">
			<p> 命运决定谁会进入我们的生活，内心决定我们与谁并肩。</p>
		</de-collapse-item>
		<de-collapse-item name="3" title="第三句话">
			<p>当斧头来到树林里的时候，好多树都说，至少它的把手是我们自己人。</p>
		</de-collapse-item>
		<de-collapse-item name="4" title="第四句话">
			<p>下面我简单说两句。</p>
		</de-collapse-item>
	</de-collapse>
</template>

<script>
export default {
	data() {
		return {
			// 默认展开栏，数组的值为name值
			activeNames: []
		}
	}
}
</script>
```



### Collapse  Attributes

|      参数       |          说明          |          类型           |    可选值    | 默认值 |
| :-------------: | :--------------------: | :---------------------: | :----------: | :----: |
| v-model / value | 折叠面板的双向绑定的值 | string / array / number |      —       |   —    |
|    accordion    |     开启手风琴模式     |         boolean         | true / false | false  |
|     border      |      是否有边框线      |         boolean         | true / false | false  |


### CollapseItem  Attributes

| 参数  |            说明            |  类型  | 可选值 | 默认值 |
| :---: | :------------------------: | :----: | :----: | :----: |
| title | 折叠面板每一项的标题，必传 | string |   —    |   —    |
| name  |    折叠面板的唯一标志符    | string |   —    |   —    |