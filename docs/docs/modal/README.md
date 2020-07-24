## Modal 复杂弹框

#### 重要提示

由于Modal的动画是由animate.css实现的，因此在使用本组件的时候，请使用npm i animate.css --save来安装animate.css，同时在项目的main.js中引入。

#### 基础用法

默认的复杂弹框方式，底部没有按钮，由右上角的关闭按钮来关闭。

<modal-base></modal-base>

```vue
<template>
	<lay-button @click="showModal" type="primary">打开复杂弹框</lay-button>
</template>

<script>
export default {
	methods: {
		showModal() {
			this.$modal({
				title: '温馨提示',
				message: '我来了，Modal弹框！我只是单行文字哟。。。。',
				showButton: false,
         		// 关闭复杂弹框的回调函数
				onClose: () => {
					this.$message({
						message: '您已经关闭了复杂弹框Modal！',
						type: 'warning'
					})
				},
			})
		}
	}
}
</script>
```

#### 自定义动画

使用animate.css的动画结合实现的效果，请将参数分别传递到entername入场动画和leavename出场动画中，默认的值分别是fadeInDown和fadeInUp。具体的效果请参考animate.css的官网。[animate.css官网]( https://animate.style/ )

<modal-animate></modal-animate>

```vue
<template>
	<lay-button @click="showModal" type="primary">动画出场</lay-button>
</template>

<script>
Vue.use(LayMessage).use(LayModal)
export default {
	methods: {
		showModal() {
			this.$modal({
				title: '温馨提示',
				message: '嗨，我就是酷炫的动画效果实现！',
				showButton: false,
				// 入场动画和出场动画名称
				entername: 'bounceIn',
				leavename: 'bounceOut',
				onClose: () => {
					this.$message({
						message: '您已经关闭了复杂弹框Modal！',
						type: 'warning',
						duration: 1500
					})
				},
			})
		}
	}
}
</script>
```

#### 组件传递

可以将书写好的组件传递到Modal弹框中。

<modal-template></modal-template>

```vue
<template>
	<lay-button @click="showModal" type="primary">将组件作为参数传递</lay-button>
</template>

<script>
import ModalTest from './modaltest.vue'
export default {
	methods: {
		showModal() {
			this.$modal({
				title: '提示',
				template: ModalTest,
				entername: 'bounceIn',
				leavename: 'bounceOut'
			})
		}
	}
}
</script>

<style scoped>
.modal-animate {
	margin: 20px 0;
}
</style>

```



#### 有按钮的复杂弹框

在复杂弹框Modal的底部显示取消和确定两个按钮，点击两个按钮分别执行不同的回调函数。

<modal-button></modal-button>

```vue
<template>
	<lay-button @click="showModal" type="success">有按钮的Modal弹框</lay-button>
</template>

<script>
export default {
	methods: {
		showModal() {
			this.$modal({
				title: '温馨提示',
				showButton: true,
				entername: 'bounceInDown',
				leavename: 'bounceOutDown',
				// 在有button的情况下，取消和确定的回调函数
				onCancel: () => {
					this.$message({
						message: '您点击的是取消！',
						type: 'warning',
						duration: 1500
					})
				},
				onConfirm: () => {
					this.$message({
						message: '您点击的是确定！',
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



#### 给template组件传递参数

我们如果通过template属性传递的是一个组件的话，那么在有些场景下是需要对这个组件传递一些参数的。如果要传递的话必须以对象的形式传递下去。

<modal-template-params></modal-template-params>

```vue
<template>
	<lay-button @click="showModal" type="primary">传递参数到template组件</lay-button>
</template>

<script>
export default {
	components: {
		LayButton
	},
	methods: {
		showModal() {
			this.$modal({
				title: '温馨提示',
				template: ModalTest,
				entername: 'bounceInDown',
				leavename: 'bounceOutDown',
        		// 给template中的组件传递的参数
				params: {
					content: '这句话是我传递给组件的，和其他人没关系的。'
				}
			})
		}
	}
}
</script>
```



### Attributes

|    参数    |        说明        |  类型   |              可选值               |   默认值   |
| :--------: | :----------------: | :-----: | :-------------------------------: | :--------: |
|   title    |     顶部的标题     | string  |                 —                 |  温馨提示  |
|  template  |    自定义的组件    | 组件名  | info / success / danger / warning |     —      |
| entername  |     入场动画名     | string  |                 —                 | fadeInDown |
| leavename  |     出场动画名     | string  |                 —                 | fadeOutUp  |
|   params   |  给组件传递的参数  | object  |                 —                 |    null    |
|  message   |   默认的提示内容   | string  |                 —                 |     —      |
| showButton | 是否显示底部的按钮 | boolean |           true / false            |   false    |



### Events

|   参数    |                说明                | 其他说明 |
| :-------: | :--------------------------------: | :------: |
|  onClose  |   点击右上角的关闭按钮的点击事件   |    无    |
| onConfirm | 显示底部按钮之后的按钮点击确认事件 |    无    |
| onCancel  | 显示底部按钮之后的按钮点击取消事件 |    无    |