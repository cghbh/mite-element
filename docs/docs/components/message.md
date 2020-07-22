# 消息组件
## Message 消息提示

 常用于主动操作后的反馈提示。 

#### 不可自动关闭

<message-one></message-one>

```vue
<template>
	<lay-button @click="showMessage" type="primary">不可自动关闭</lay-button>
</template>

<script>
export default {
	methods: {
		showMessage() {
			this.$message({
				position: 'right',
				message: `我是消息提示组件，但是我不能自动关闭！`
			})
		}
	}
}
</script>
```



#### 不同方位

<message4></message4>

## MessageBox 弹框
## Toast 提示
## Modal 复杂弹框