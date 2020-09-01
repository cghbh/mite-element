## 基于Vue的UI组件库----Mite-Element

### 文档说明链接

[Mite-Element组件库文档说明地址]( https://cghbh.github.io/ad-vue/)

[Github地址]( https://github.com/cghbh/ad-vue )

### 安装

npm installmite-element -S

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
	Button,
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
  TabsItem
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
这是个人项目，目前代码还没有经过测试，建议慎重使用到生产环境。





#### 6.进度表

以当前组件各个设计方案不再变动为完成标准。

- [x] 1.Affix固钉
- [ ] 2.BackTop返回顶部
- [ ] 3.Badge徽标
- [x] 4.Button 按钮
- [ ] 5.Calendar日历
- [ ] 6.Card卡片
- [ ] 7.Cascader 级联选择器
- [ ] 8.Checkbox 复选框
- [ ] 9.Collapse 折叠面板
- [ ] 10.Container 布局容器
- [ ] 11.DatePicker 日期选择器
- [ ] 12.DateTimePicker 日期时间选择器
- [ ] 13.Dialog 对话框
- [ ] 14.Form 表单
- [ ] 15.Grid 网格
- [x] 16.Icon 图标
- [ ] 17.InfiniteScroller 无限滚动
- [ ] 18.Input 输入框
- [ ] 19.InputNumber 计数器
- [ ] 20.Layout 布局
- [ ] 21.Message 消息提示
- [ ] 22.MessageBox 消息盒子
- [ ] 23.NavMenu 导航菜单
- [x] 24.Pagination 分页器
- [ ] 25.Popover 弹出框
- [ ] 26.Progress 进度条
- [ ] 27.Radio 单选框
- [ ] 28.Rate 评分
- [ ] 29.Select 选择器
- [ ] 30.Skeleton 骨架屏
- [ ] 31.Spread 卷轴
- [ ] 32.Swiper 轮播图
- [ ] 33.Switch 切换
- [ ] 34.Table 表格
- [ ] 35.Tabs切换栏
- [ ] 36.Tag 标签
- [ ] 37.TimePIcker时间选择器
- [ ] 38.Tooltip 文字提示
- [ ] 39。Tree 树形控件
- [ ] 40.Upload 文件上传
- [ ] 41.Waterfall 瀑布流



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



#### 8.任务划分

- 首批完成下面的这些组件：

  Icon、Button、Radio、Checkbox、Input、InputNumber、Form、Table、Pagination、Message、MessageBox、Modal、Swiper、Tabs、Collapse、Tag、Toast、Badge、Affix、Switch

- 第二批完成：

  Table、Cascader、Tree、DatePicker、Popover、Select、Step、Tooltip、NavMenu、Uploader、TimePicker、DateTimePicker

  

  

  

  

  

  

  

  

  

### LICENSE

[MIT](https://github.com/cghbh/lay-ui/blob/master/LICENSE)