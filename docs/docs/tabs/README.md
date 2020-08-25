## Tabs 标签页

#### 基本用法

 基础的、简洁的标签页。 



<base-code>

<template slot="display">

<tabs-exam1></tabs-exam1>

</template>

<template>

```vue
<m-tabs v-model="activeName">
	<m-tabs-item label="用户管理" name="first">用户管理</m-tabs-item>
	<m-tabs-item label="配置管理" name="second">配置管理</m-tabs-item>
	<m-tabs-item label="角色管理" name="third">角色管理</m-tabs-item>
	<m-tabs-item label="定时任务补偿" name="fourth">定时任务补偿</m-tabs-item>
</m-tabs>

<script>
export default {
	data() {
		return {
			activeName: 'second'
		}
	}
}
</script>
```

</template>

</base-code>







#### 选项卡模式

 选项卡样式的标签页，内容区域卡片化。
 
 <base-code>
 
 <template slot="display">
 
 <tabs-exam2></tabs-exam2>
 
 </template>
 
 <template>
 
 ```vue
 <m-tabs v-model="activeName" type="card">
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
 
 <script>
 export default {
 	data() {
 		return {
 			activeName: '3'
 		}
 	}
 }
 </script>
 ```
 
 </template>
 
 </base-code>









#### 自定义图标

可以使用上面Icon组件里面的自定义图标。

<base-code>

<template slot="display">

<tabs-exam3></tabs-exam3>

</template>

<template>

```vue
<m-tabs v-model="activeName" type="card">
	<m-tabs-item label="正在加载中" name="one" icon="loading">
		<h3>正在加载中......</h3>
	</m-tabs-item>
	<m-tabs-item label="菜单选项" name="two" icon="caidan">
		<h3>菜单选项</h3>
	</m-tabs-item>
	<m-tabs-item label="提示信息" name="three" icon="info">
		<h3>提示信息</h3>
	</m-tabs-item>
	<m-tabs-item label="建议收藏" name="four" icon="star">
		<h3>建议收藏</h3>
	</m-tabs-item>
</m-tabs>

<script>
export default {
	data() {
		return {
			activeName: '3'
		}
	}
}
</script>
```

</template>

</base-code>









#### Tabs Attributes

|      参数       |           说明            |  类型  | 可选值 |  默认值  |
| :-------------: | :-----------------------: | :----: | :----: | :------: |
| value / v-model | 绑定值，选中选项卡的 name | string |   —    |    —     |
|      type       |         风格类型          | string |  card  | 默认为空 |





#### Tabs-Item Attributes

| 参数  |                       说明                        |  类型  |    可选值    | 默认值 |
| :---: | :-----------------------------------------------: | :----: | :----------: | :----: |
| label |                    选项卡标题                     | string |      —       |   —    |
| name  | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | string |      —       |   —    |
| icon  |      针对TabsItem标签页需要自定义icon的情况       | string | 参考Icon组件 |   —    |





#### Tabs Events

|   参数    |       说明       |       回调参数        |
| :-------: | :--------------: | :-------------------: |
| tab-click | tab 被选中时触发 | 被选中的标签 tab 实例 |