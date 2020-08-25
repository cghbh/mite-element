## Checkbox 复选框

 一组备选项中进行多选 



#### 基础用法

 单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。 
 
 <base-code>
 
 <template slot="display">
 
 <checkbox-exam1></checkbox-exam1>
 
 </template>
 
 <template>
 
 ```vue
 <m-checkbox label="选项一" v-model="checked">选项一</m-checkbox>
 
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
 
 </template>
 
 </base-code>





#### 未分组的复选框



<base-code>

<template slot="display">

<checkbox-exam2></checkbox-exam2>

</template>

<template>

```vue
<m-checkbox label="选项A" v-model="checkedList">选项A</m-checkbox>
<m-checkbox label="选项B" v-model="checkedList">选项B</m-checkbox>
<m-checkbox label="选项C" v-model="checkedList">选项C</m-checkbox>
<m-checkbox label="选项D" v-model="checkedList">选项D</m-checkbox>

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

</template>

</base-code>



#### 复选框组

 适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。 
 
 <base-code>
 
 <template slot="display">
 
 <checkbox-exam3></checkbox-exam3>
 
 </template>
 
 <template>
 
 ```vue
 <m-checkbox-group v-model="checkedList">
 	<m-checkbox label="选项A">选项A</m-checkbox>
 	<m-checkbox label="选项B">选项B</m-checkbox>
 	<m-checkbox label="选项C">选项C</m-checkbox>
 	<m-checkbox label="选项D">选项D</m-checkbox>
 </m-checkbox-group>
 
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
 
 </template>
 
 </base-code>





#### 禁用状态

 多选框不可用状态。 
 
 <base-code>
 
 <template slot="display">
 
 <checkbox-exam4></checkbox-exam4>
 
 </template>
 
 <template>
 
 ```vue
 <m-checkbox-group v-model="checkedList">
 	<m-checkbox label="选项A">选项A</m-checkbox>
 	<m-checkbox disabled label="选项B">选项B</m-checkbox>
 	<m-checkbox label="选项C">选项C</m-checkbox>
 	<m-checkbox disabled label="选项D">选项D</m-checkbox>
 	<m-checkbox label="选项E">选项E</m-checkbox>
 </m-checkbox-group>
 
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
 
 </template>
 
 </base-code>





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