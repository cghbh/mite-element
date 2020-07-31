## 基于Vue的UI组件库----V-Design

### 文档说明链接

[V-Design组件库文档说明地址]( https://cghbh.github.io/v-design/)

### 安装

npm install lay-ui -S

### 快速上手

```js
import Vue from 'vue'
import VDesign from 'v-design-cg'
// 如果需要使用Modal的动画，请npm install animate.css -S
// 在main.js导入animated.css
import 'animate.css'

// 全部注册安装
Vue.use(VDesign)
// 或者是按需加载
// 按需加载需要单独在根目录下配置babel.config.js，安装babel-plugin-component
npm i babel-plugin-component -D
// babel.config.js配置
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
import { Button, Icon } from 'v-design-cg'
Vue.use(Button).use(Icon)
// 或者是下面的这样的
Vue.use(Button)
Vue.use(Icon)
```

### LICENSE

[MIT](https://github.com/cghbh/lay-ui/blob/master/LICENSE)