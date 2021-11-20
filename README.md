## 基于Vue的UI组件库----Mite-Element

### 文档说明链接

[文档说明在这里]( http://139.198.177.30)

[源码地址在这里]( https://github.com/cghbh/mite-element )

### 安装

npm install mite-element -S

### 快速上手

#### 1.导入全部的组件

```js
import Vue from 'vue'
import App from './App.vue'
import MiteElement from 'MiteElement'
// 需要导入css文件
import 'mite-element/lib/main.css'
Vue.use(MiteElement)
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
			libraryName: 'mite-element',
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

import { Button } from 'mite-element'
Vue.use(Button)
// 使用均以m-开头，使用如下
<m-button></m-button>

new Vue({
	el: '#app',
	render: h => h(App)
})
```



#### 3.所有组件全部导入

```js
import Vue from 'vue'
import {
  Icon,
  Radio,
  RadioGroup,
  CheckBox,
  CheckBoxGroup,
  Input,
  InputNumber,
  Form,
  FormItem,
  Message,
  MessageBox,
  Modal,
  Tabs,
  TabsItem,
  Button
}

Vue.use(Button)
Vue.use(Icon)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(CheckBox)
Vue.use(CheckBoxGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Message)
Vue.use(MessageBox)
Vue.use(Modal)
Vue.use(Tabs)
Vue.use(TabsItem)
```





#### 4.关于Animate.css动画的单独说明（重要）

```js
// 如果需要使用复杂弹框Modal的动画，请npm install animate.css -S
// 在main.js导入animated.css
import 'animate.css'
```
#### 5.单独说明（重要）
个人PC端组件库项目项目，建议慎重使用到生产环境。



#### 6.进度表

- [x] 1.Affix固钉
- [x] 2.Button 按钮
- [x] 3.Cascader 级联选择器
- [x] 4.Checkbox 复选框
- [x] 5.Collapse 折叠面板
- [x] 6.Dialog 对话框
- [x] 7.Form 表单
- [x] 8.InfiniteScroller 无限滚动
- [x] 9.Input 输入框
- [x] 10.InputNumber 计数器
- [x] 11.Message 消息提示
- [x] 12.MessageBox 消息盒子
- [x] 13.Pagination 分页器
- [x] 14.Popover 弹出框
- [x] 15.Radio 单选框
- [x] 16.Spread 卷轴
- [x] 17.Swiper 轮播图
- [x] 18.Switch 切换
- [x] 19.Table 表格
- [x] 20.Tabs切换栏
- [x] 21.TimePIcker时间选择器
- [x] 22.Tree 树形控件
- [x] 23.Upload 文件上传



#### 7.开发问题记录

- 在组件中使用的scss文件在vuepress中无法解析，解决办法如下：

```js
// 在vuepress的config.js配置文件中加入如下内容进行scss的解析，前提是要按照sass-loader各node-sass
const path = require('path')
chainWebpack: (config, isServer) => {
	 config.resolveLoader
	 .modules
   // 路径视具体的安装路径决定
	 .add(path.resolve(__dirname, '../../../node_modules'))
}
```



### LICENSE

[MIT](https://github.com/cghbh/lay-ui/blob/master/LICENSE)