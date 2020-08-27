## Pagination 分页

#### 基本用法


<base-code>

 <template slot="display">

 <pagination-exam1></pagination-exam1>

 </template>

 <template>

 ```vue
 <template>
 	<m-pagination :current-page.sync="currentPage" :total="4"></m-pagination>
 </template>
 
 <script>
 export default {
 	data() {
 		return {
 			currentPage: 1
 		}
 	}
 }
 </script>
 
 ```

 </template>

 </base-code>



#### 更多分页

当页数非常多的时候，可以加速跳转页码，一次可以加速跳转5页。

<base-code>

 <template slot="display">

 <pagination-exam2></pagination-exam2>

 </template>

 <template>

 ```vue
 <template>
 	<m-pagination :current-page.sync="currentPage" :total="100"></m-pagination>
 </template>
 
 <script>
 export default {
 	data() {
 		return {
 			currentPage: 10
 		}
 	}
 }
 </script>
 
 ```

 </template>

 </base-code>



#### 跳转到指定的页码

通过输入框可以跳转到指定的页码。

<base-code>

 <template slot="display">

 <pagination-exam3></pagination-exam3>

 </template>

 <template>

 ```vue
 <template>
 	<m-pagination :current-page.sync="currentPage" :show-quick-jump="true" :total="100"></m-pagination>
 </template>
 
 <script>
 export default {
 	data() {
 		return {
 			currentPage: 10
 		}
 	}
 }
 </script>
 
 ```

 </template>

 </base-code>


#### 背景色

为当前点击的页码添加背景色，增加突出的视觉效应。

<base-code>

 <template slot="display">

 <pagination-exam4></pagination-exam4>

 </template>

 <template>

 ```vue
 <template>
 	<m-pagination :current-page.sync="currentPage" background :total="25"></m-pagination>
 </template>
 
 <script>
 export default {
 	data() {
 		return {
 			currentPage: 5
 		}
 	}
 }
 </script>
 
 ```

 </template>

 </base-code>




#### 仅有一页的时候关闭分页-待Switch组件完成更新



### Attributes

|       参数       |            说明            |  类型   |    可选值    |     默认值     |
| :--------------: | :------------------------: | :-----: | :----------: | :------------: |
|      total       |  分页总数，有用户计算得出  | number  |      —       | 无默认值，必传 |
|   current-page   |          当前页码          | number  |      —       |       1        |
|    background    |      分页器按钮背景色      | boolean | true / false |     false      |
| show-quick-jump  |     显示快速跳转输入框     | boolean | true / false |     false      |
| hide-if-one-page | 只有一页的时候是否隐藏分页 | boolean | true / false |     false      |
