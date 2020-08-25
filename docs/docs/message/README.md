## Message 消息提示

 常用于主动操作后的反馈提示。 

#### 基础用法

 从顶部出现，默认3 秒后自动消失。 
 
 <base-code>
 
 <template slot="display">
 
 <message-exam1></message-exam1>
 
 </template>
 
 <template>
 
 ```vue
 <m-button @click="showMessage" type="primary">打开消息提示</m-button>
 
 <script>
 export default {
 	methods: {
 		showMessage() {
 			this.$message({
 				position: 'center',
 				message: `我是消息提示组件！`
 			})
 		}
 	}
 }
 </script>
 ```
 
 </template>
 
 
 </base-code>







#### 不同状态

 用来显示「消息、成功、警告、错误」类的操作反馈。 
 
 <base-code>
 
 <template slot="display">
 
 <message-exam2></message-exam2>
 
 </template>
 
 <template>
 
 ```vue
 <m-button @click="showDefaultMessage" icon="info">消息</m-button>
 <m-button @click="showSuccessMessage" type="success" icon="success">成功</m-button>
 <m-button @click="showWarningMessage" type="warning" icon="warning">警告</m-button>
 <m-button @click="showErrorMessage" type="danger" icon="error">错误</m-button>
 
 <script>
 export default {
 	methods: {
 		showDefaultMessage() {
 			this.$message({
 				position: 'right',
 				message: '这是一条消息提示！'
 			})
 		},
 		showSuccessMessage() {
 			this.$message({
 				position: 'right',
 				message: `恭喜你，这是一条成功的消息！`,
 				type: 'success'
 			})
 		},
 		showWarningMessage() {
 			this.$message({
 				position: 'right',
 				message: `警告呀，这是一条警告的消息！`,
 				type: 'warning'
 			})
 		},
 		showErrorMessage() {
 			this.$message({
 				position: 'right',
 				message: `错了唉，这是一条错误的消息！`,
 				type: 'error'
 			})
 		}
 	}
 }
 </script>
 ```
 
 </template>
 
 </base-code>





#### 可关闭

既可以手动关闭也可以自动关闭，默认是自动关闭消息弹框的，除非你觉得自动关闭实在是太慢了。

<base-code>

<template slot="display">

<message-exam3></message-exam3>

</template>

<template>

```vue
<m-button @click="showMessage" type="primary">可关闭</m-button>

<script>

export default {
	methods: {
		showMessage() {
			this.$message({
				position: 'right',
				message: '我是既可以手动关闭，也可以自动关闭！',
				center: false,
				showClose: true
			})
		}
	}
}
</script>
```

</template>

</base-code>







#### 不可自动关闭

<base-code>

<template slot="display">

<message-exam4></message-exam4>

</template>

<template>

```vue
<m-button @click="showMessage" type="primary">不可自动关闭</m-button>

<script>
export default {
	methods: {
		showMessage() {
			this.$message({
				position: 'right',
                autoClose: false
				message: `我是消息提示组件，但是我不能自动关闭！`,
			})
		}
	}
}
</script>
```

</template>

</base-code>







#### 不同方位


<base-code>

<template slot="display">

<message-exam5></message-exam5>

</template>

<template>

```vue
<m-button @click="showMessagePosition('left')">左边</m-button>
<m-button @click="showMessagePosition('center')">中间</m-button>
<m-button @click="showMessagePosition('right')">右边</m-button>

<script>
export default {
	methods: {
		showMessagePosition(position) {
			this.$message({
				position: position,
				message: '我是消息提示组件!',
				type: '随机生成的类型，使用的时候自己决定即可'
			})
		}
	}
}
</script>
```

</template>

</base-code>






#### 文字居中

<base-code>

<template slot="display">

<message-exam6></message-exam6>
	
</template>

<template>

```vue
<m-button @click="showMessage" type="primary">文字居中消息</m-button>

<script>
export default {
	methods: {
		showMessage() {
			this.$message({
				position: 'right',
				message: `我是消息提示组件，但是我的文字在中间！`,
				center: true
			})
		}
	}
}
</script>
```

</template>

</base-code>







### Attributes

|   参数    |         说明         |  类型   |              可选值               | 默认值 |
| :-------: | :------------------: | :-----: | :-------------------------------: | :----: |
|  message  |       消息文字       | string  |                 —                 |   —    |
|   type    |         主题         | string  | info / success / danger / warning |  info  |
| duration  |    显示时间，毫秒    | number  |                 —                 |  3000  |
| showClose |     显示关闭按钮     | boolean |                 —                 | false  |
|  center   |     文字是否居中     | boolean |                 —                 | false  |
| position  | 消息提示框出现的位置 | string  |       center / right / left       | center |