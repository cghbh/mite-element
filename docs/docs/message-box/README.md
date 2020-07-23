## MessageBox 弹框

#### 消息提示

 当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。 

<message-box-one></message-box-one>

```vue
<template>
	<lay-button @click="showMessageBox" type="primary">点击打开MessageBox</lay-button>
</template>

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

#### 确认消息

 提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。 

<message-box-two></message-box-two>

```vue
<template>
	<lay-button @click="showMessageBox" type="primary">确认消息框</lay-button>
</template>

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



## Toast 提示
## Modal 复杂弹框