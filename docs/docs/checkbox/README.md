## Checkbox 复选框

 一组备选项中进行多选 



#### 基础用法

 单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。 

<checkbox1></checkbox1>

```vue
<template>
	<lay-checkbox label="选项一" v-model="checked">选项一</lay-checkbox>
</template>
<script>
export default {
	data () {
		return {
			checked: true
		}
	}
}
</script>
```

#### 未分组的复选框

<checkbox2></checkbox2>

```vue
<template>
	<div class="checkbox">
	  <lay-checkbox label="选项A" v-model="checkedList">选项A</lay-checkbox>
	  <lay-checkbox label="选项B" v-model="checkedList">选项B</lay-checkbox>
	  <lay-checkbox label="选项C" v-model="checkedList">选项C</lay-checkbox>
	  <lay-checkbox label="选项D" v-model="checkedList">选项D</lay-checkbox>
	</div>
</template>

<script>
export default {
	data () {
		return {
			checkedList: ['选项A']
		}
	}
}
</script>

<style scoped>
.radio {
	margin: 20px 0;
}
</style>

```

#### 复选框组

 适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。 

<checkbox-group></checkbox-group>

```vue
<template>
	<lay-checkbox-group v-model="checkedList">
		<lay-checkbox label="选项A">选项A</lay-checkbox>
		<lay-checkbox label="选项B">选项B</lay-checkbox>
		<lay-checkbox label="选项C">选项C</lay-checkbox>
		<lay-checkbox label="选项D">选项D</lay-checkbox>
	</lay-checkbox-group>
</template>

<script>
export default {
	data () {
		return {
			checkedList: ['选项A']
		}
	}
}
</script>
```

#### 禁用状态

 多选框不可用状态。 

<checkbox-disabled></checkbox-disabled>

```vue
<template>
	<lay-checkbox-group v-model="checkedList">
		<lay-checkbox label="选项A">选项A</lay-checkbox>
		<lay-checkbox disabled label="选项B">选项B</lay-checkbox>
		<lay-checkbox label="选项C">选项C</lay-checkbox>
		<lay-checkbox disabled label="选项D">选项D</lay-checkbox>
		<lay-checkbox label="选项E">选项E</lay-checkbox>
	</lay-checkbox-group>
</template>

<script>
export default {
	data () {
		return {
			checkedList: ['选项B']
		}
	}
}
</script>
```

#### Attributes

|   参数   |     说明     |           类型            | 可选值 | 默认值  |
| :------: | :----------: | :-----------------------: | :----: | :-----: |
|  label   | 选中状态的值 | string / number / boolean |   —    |    —    |
| disabled |   是否禁用   |          boolean          |   —    | default |