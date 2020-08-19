## MessageBox 弹框

#### 消息提示

 当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。 
 
 <base-code>
 
 <template slot="display">
 
 <message-box-one></message-box-one>
 
 </template>
 
 <template>
 
 ```vue
 <lay-button @click="showMessageBox" type="primary">点击打开MessageBox</lay-button>
 
 <script>
 export default {
 	methods: {
 		showMessageBox() {
 			this.$alert({
 				title: '标题名称',
 				content: '这是一段内容',
 				onOk: () => {
 					this.$message({
 						message: '这个实现的是Alert的功能！',
 						type: 'success',
 						duration: 1500
 					})
 				}
 			})
 		}
 	}
 }
 </script>
 ```
 
 </template>
 
 </base-code>





#### 确认消息

 提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。 
 
 <base-code>
 
 <template slot="display">
 
 <message-box-two></message-box-two>
 
 </template>
 
 <template>
 
 ```vue
 <lay-button @click="showMessageBox" type="primary">确认消息框</lay-button>
 
 <script>
 export default {
 	methods: {
 		showMessageBox() {
 			this.$confirm({
 				title: '标题名称',
 				content: '这是一段内容',
 				onOk: () => {
 					this.$message({
 						message: '用户已选择确定操作！',
 						type: 'success',
 						duration: 1500
 					})
 				},
 				onCancel: () => {
 					this.$message({
 						message: '用户已选择取消操作！',
 						type: 'error',
 						duration: 1500
 					})
 				}
 			})
 		}
 	}
 }
 </script>
 ```
 
 </template>
 
 </base-code>







### Attributes

|   参数   |        说明        |   类型   |     可选值      |  默认值  |
| :------: | :----------------: | :------: | :-------------: | :------: |
|  title   |        标题        |  string  |        —        | 温馨提示 |
| content  |      正文内容      |  string  |        —        |    —     |
|   onOk   | 确认按钮的回调函数 | function |        —        |    —     |
| onCancel | 取消按钮的回调函数 | function |        —        |    —     |