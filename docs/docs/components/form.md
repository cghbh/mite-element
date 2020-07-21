# 表单组件
## Radio 单选框

#### 基本用法

<radio></radio>

```js
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

<radio-group></radio-group>

```js
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
## Form 表单

