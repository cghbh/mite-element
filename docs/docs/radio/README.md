# 表单组件
## Radio 单选框

#### 基本用法

 在一组备选项中进行单选 。

<radio></radio>

```vue
<de-radio v-model="selectItem" label="选项一">选项一</de-radio>
<de-radio v-model="selectItem" label="选项二">选项二</de-radio>
<de-radio v-model="selectItem" label="选项三">选项三</de-radio>

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
<de-radio-group v-model="radio1">
  <de-radio label="选项1">选项1</de-radio>
  <de-radio label="选项2">选项2</de-radio>
  <de-radio label="选项3">选项3</de-radio>
</de-radio-group>
<de-radio-group v-model="radio2">
  <de-radio label="选项A">选项A</de-radio>
  <de-radio label="选项B">选项B</de-radio>
  <de-radio label="选项C">选项C</de-radio>
</de-radio-group>

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

### Attributes

|      参数       |  说明  |           类型            | 可选值 | 默认值 |
| :-------------: | :----: | :-----------------------: | :----: | :----: |
| value / v-model | 绑定值 | string / number / boolean |   —    |   —    |