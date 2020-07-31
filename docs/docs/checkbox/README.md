## Checkbox 复选框

 一组备选项中进行多选 



#### 基础用法

 单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。 

<checkbox1></checkbox1>

```vue
<de-checkbox label="选项一" v-model="checked">选项一</de-checkbox>

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
<de-checkbox label="选项A" v-model="checkedList">选项A</de-checkbox>
<de-checkbox label="选项B" v-model="checkedList">选项B</de-checkbox>
<de-checkbox label="选项C" v-model="checkedList">选项C</de-checkbox>
<de-checkbox label="选项D" v-model="checkedList">选项D</de-checkbox>

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
<de-checkbox-group v-model="checkedList">
	<de-checkbox label="选项A">选项A</de-checkbox>
	<de-checkbox label="选项B">选项B</de-checkbox>
	<de-checkbox label="选项C">选项C</de-checkbox>
	<de-checkbox label="选项D">选项D</de-checkbox>
</de-checkbox-group>

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
<de-checkbox-group v-model="checkedList">
	<de-checkbox label="选项A">选项A</de-checkbox>
	<de-checkbox disabled label="选项B">选项B</de-checkbox>
	<de-checkbox label="选项C">选项C</de-checkbox>
	<de-checkbox disabled label="选项D">选项D</de-checkbox>
	<de-checkbox label="选项E">选项E</de-checkbox>
</de-checkbox-group>

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

### Checkbox Attributes

|      参数       |     说明     |           类型            | 可选值 | 默认值  |
| :-------------: | :----------: | :-----------------------: | :----: | :-----: |
| value / v-model | 选中状态的值 | array / boolean / string  |   —    |    —    |
|      label      | 选中状态的值 | number / boolean / string |   —    | default |
|    disabled     |   是否禁用   |          boolean          |   —    |  false  |



### Checkbox-group Attributes

|      参数       |  说明  | 类型  | 可选值 | 默认值 |
| :-------------: | :----: | :---: | :----: | :----: |
| value / v-model | 绑定值 | array |   —    |   —    |