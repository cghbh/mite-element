import 'animate.css'
import './assets/style/common/reset.scss'
import Button from 'UI/button'
import Icon from 'UI/icon'
import Radio from 'UI/radio'
import RadioGroup from 'UI/radio-group'
import CheckBox from 'UI/checkbox'
import CheckBoxGroup from 'UI/checkbox-group'
import Input from 'UI/input'
import InputNumber from 'UI/input-number'
import Form from 'UI/form'
import FormItem from 'UI/form-item'
import Message from 'UI/message'
import Modal from 'UI/modal'
import MessageBox from 'UI/message-box'
import Tabs from 'UI/tabs'
import TabsItem from 'UI/tabs-item'

// 定义组件列表
const componentsList = [
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
  Modal,
  MessageBox,
  Tabs,
  TabsItem
]

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
//if (typeof window !== 'undefined' && window.Vue) {
//  install(window.Vue);
//}

const install = function(Vue) {
  // 判断是否安装过
  if (install.installed) return

  // 注册所有组件
  componentsList.map((component) => {
    Vue.use(component)
  })
}

export default {
  install,
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
  Modal,
  MessageBox,
  Tabs,
  TabsItem
}
