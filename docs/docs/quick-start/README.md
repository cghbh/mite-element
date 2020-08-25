## 快速上手

### 引入MiteElement

 你可以引入整个MiteElement，或是根据需要仅引入部分组件。

#### 完整引入

 在 main.js 中写入以下内容： 

```js
import Vue from 'vue'
import MiteElement from 'mite-element'
// 完整导入需要引入css文件
import 'mite-element/lib/main.css'
import App from './App.vue'

Vue.use(MiteElement)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

#### 按需导入

 如果你只希望引入部分组件，比如 Button 和 Radio，那么需要在 main.js 中写入以下内容 ，同时使用 npm i babel-plugin-component -D ，在项目的根目录配置babel.config.js文件，使用参考如下：

```js
import Vue from 'vue'
import { Button, Radio } from 'mite-element'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Radio.name, Radio)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Radio)
*/

new Vue({
  el: '#app',
  render: h => h(App)
});
```

> babel.config.js配置文件

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

> 另外需要单独注意：在Modal复杂组件中采用了animate.css动画，因此使用Modal组件需要npm i animate.css -S，同时在main.js中引入，如下：

```js
// main.js文件
import 'animate.css'
```



#### 按需导入所有的组件

```js
import Vue from 'vue'
import {
  Button,
  Icon,
  Radio,
  Checkbox,
  Input,
  InputNumber,
  Form,
  FormItem,
  Message,
  MessageBox,
  Modal,
  Swiper,
  SwiperItem,
  Tabs,
  TabsItem,
  Collapse,
  CollapseItem
} from 'mite-element'

Vue.use(Button)
Vue.use(Icon)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Message)
Vue.use(MessageBox)
Vue.use(Modal)
Vue.use(Swiper)
Vue.use(SwiperItem)
Vue.use(Tabs)
Vue.use(TabsItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
```



#### 开始使用

至此，一个基于Vue 安装了mite-element插件的开发环境已经搭建完毕，各个组件的使用方法请参阅它们各自的文档。