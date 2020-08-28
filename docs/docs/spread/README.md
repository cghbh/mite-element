## Spread卷轴组件

#### 基础用法
用于提供水平和垂直方向展开收起动画功能的小组件。

<base-code>

 <template slot="display">

 <spread-exam></spread-exam>

 </template>

 <template>

 ```vue
 <m-spread :visible="visible1">
 	<div style="width: 500px; height: 240px;background-color: skyblue;"></div>
 </m-spread>

 <m-spread horizontal :visible="visible2">
 	<div style="width: 500px; height: 240px;background-color: skyblue;"></div>
 </m-spread>
 
 <script>
 export default {
 	data() {
 		return {
 			visible1: true,
 			visible2: true
 		}
 	}
 }
 </script>
 
 
 
 ```

 </template>

 </base-code>


