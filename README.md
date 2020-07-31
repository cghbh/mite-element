## 基于Vue的UI组件库----V-Design

### 文档说明链接

[V-Design组件库文档说明地址]( https://cghbh.github.io/v-design/)

[V-Design的github地址，欢迎Star]( https://github.com/cghbh/v-design )

### 安装

npm install v-design-cg -S

### 快速上手

#### 1.导入全部的组件

```js
import Vue from 'vue'
import App from './App.vue'
import VDesign from 'v-design-cg'
// 需要导入css文件
import 'v-design-cg/lib/main.css'
Vue.use(VDesign)
new Vue({
	el: '#app',
	render: h => h(App)
})
```

#### 2.按需导入组件

> 安装babel-plugin-component：npm i babel-plugin-component -D
>
> 在项目根目录下创建babel.config.js，使用如下内容

```js
module.exports = {
	plugins: [
		[
			// 配置按需加载
			'component',
			{
				// 库名
				libraryName: 'v-design-cg',
				libDir: 'lib/packages',
				camel2Dash: true // 驼峰转小横线
			}
		]
	]
}
```

> 然后按需加载使用如下

```js
import Vue from 'vue'
import App from './App.vue'

import { Button } from 'v-design-cg'
Vue.use(Button)
// 使用均以de-开头，使用如下
<de-button></de-button>

new Vue({
	el: '#app',
	render: h => h(App)
})
```



#### 3.关于Animate.css动画的单独说明（重要）

```js
// 如果需要使用复杂弹框Modal的动画，请npm install animate.css -S
// 在main.js导入animated.css
import 'animate.css'
```

### LICENSE

[MIT](https://github.com/cghbh/lay-ui/blob/master/LICENSE)