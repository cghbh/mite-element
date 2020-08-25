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

- [x] Icon图标组件
- [x] Button按钮组件
- [x] Radio单选框组件
- [x] Checkbox复选框组件
- [x] Input输入框组件
- [x] InputNumber计数器组件
- [x] Form表单组件
- [ ] Table表格组件
- [ ] Pagination分页器组件
- [ ] Cascader组件
- [x] MessageBox消息提示组件
- [x] Message消息弹框组件
- [x] Modal消息组件
- [x] Swiper轮播图组件
- [x] Tabs切换组件
- [x] Collapse折叠面板组件
- [ ] Badge徽标组件
- [ ] Affix固定组件
- [ ] Tree树形控件组件
- [ ] DatePicker日期选择组件
- [ ] Switch开关组件
- [ ] Popover气泡组件
- [ ] Select选择器组件
- [ ] Step步骤条组件
- [ ] Card卡片视图组件
- [ ] Tooltip文字提示组件
- [ ] NavMenu导航菜单组件
- [ ] Tag标签组件
- [ ] Uploader上传组件
- [ ] TimePicker时间选择组件
- [ ] DateTimePicker日期时间选择器
- [ ] Toast轻提示组件

### LICENSE

[MIT](https://github.com/cghbh/lay-ui/blob/master/LICENSE)