## Radio 单选框

#### 基本用法

 在一组备选项中进行单选 。
 
 <base-code>
 
 <template slot="display">
 
 <radio-single></radio-single>
 
 </template>
 
 <template>
 
 ```vue
 <m-radio v-model="selectItem" label="选项一">选项一</m-radio>
 <m-radio v-model="selectItem" label="选项二">选项二</m-radio>
 <m-radio v-model="selectItem" label="选项三">选项三</m-radio>
 
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
 
 </template>
 
 </base-code>





#### 单选框组

 适用于在多个互斥的选项中选择的场景 。
 
 
 <base-code>
 
 <template slot="display">
 
 <radio-group></radio-group>
 
 </template>
 
 <template>
 
 ```vue
 <m-radio-group v-model="radio1">
   <m-radio label="选项1">选项1</m-radio>
   <m-radio label="选项2">选项2</m-radio>
   <m-radio label="选项3">选项3</m-radio>
 </m-radio-group>
 
 <m-radio-group v-model="radio2">
   <m-radio label="选项A">选项A</m-radio>
   <m-radio label="选项B">选项B</m-radio>
   <m-radio label="选项C">选项C</m-radio>
 </m-radio-group>
 
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
 
 </template>
 
 </base-code>





### Attributes

|      参数       |  说明  |           类型            | 可选值 | 默认值 |
| :-------------: | :----: | :-----------------------: | :----: | :----: |
| value / v-model | 绑定值 | string / number / boolean |   —    |   —    |