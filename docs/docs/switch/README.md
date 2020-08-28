## Switch 开关
需要表示开关状态/两种状态之间的切换时；

#### 基础用法

<base-code>

 <template slot="display">

 <switch-exam1></switch-exam1>

 </template>

 <template>

 ```vue
 
 <m-switch v-model="value"></m-switch>
 
 <script>
 export default {
 	data() {
 		return {
 			value: true
 		}
 	}
 }
 </script>
 
 
 ```

 </template>

 </base-code>


#### 禁用状态

<base-code>

 <template slot="display">

 <switch-exam2></switch-exam2>

 </template>

 <template>

 ```vue
 
 <m-switch v-model="value" disabled></m-switch>
 
 <script>
 export default {
 	data() {
 		return {
 			value: true
 		}
 	}
 }
 </script>
 
 
 ```

 </template>

 </base-code>
 
 
 #### 尺寸大小

<base-code>

 <template slot="display">

 <switch-exam3 small></switch-exam3>

 </template>

 <template>

 ```vue
 
 <m-switch v-model="value"></m-switch>
 
 <script>
 export default {
 	data() {
 		return {
 			value: false
 		}
 	}
 }
 </script>
 
 
 ```

 </template>

 </base-code>