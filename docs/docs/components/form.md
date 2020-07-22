# 表单组件
## Radio 单选框

#### 基本用法

 在一组备选项中进行单选 。

<radio></radio>

```vue
<template>
 <div>
	<lay-radio v-model="selectItem" label="选项一">选项一</lay-radio>
	<lay-radio v-model="selectItem" label="选项二">选项二</lay-radio>
	<lay-radio v-model="selectItem" label="选项三">选项三</lay-radio>
 </div>
</template>

<script>
export default {
 data () {
	return {
	  selectItem: '选项一'
	}
 }
}
</script>
```

#### 单选框组

 适用于在多个互斥的选项中选择的场景 。

<radio-group></radio-group>

```vue
<template>
 <lay-radio-group v-model="radio1">
	<lay-radio label="选项1">选项1</lay-radio>
	<lay-radio label="选项2">选项2</lay-radio>
	<lay-radio label="选项3">选项3</lay-radio>
 </lay-radio-group>
 <lay-radio-group v-model="radio2">
	<lay-radio label="选项A">选项A</lay-radio>
	<lay-radio label="选项B">选项B</lay-radio>
	<lay-radio label="选项C">选项C</lay-radio>
 </lay-radio-group>
</template>

<script>
 data () {
	return {
		radio1: '选项1',
		radio2: '选项A'
	 }
  }
}
</script>
```



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

## Form 表单
## Input 输入框
## InputNumber 计数器
## Table 表格
