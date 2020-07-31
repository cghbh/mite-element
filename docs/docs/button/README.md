## Button 按钮
#### 基础用法
<button-exam1></button-exam1>

```vue
<de-button>默认按钮</de-button>
<de-button type="warning">warning按钮</de-button>
<de-button type="danger">danger按钮</de-button>
<de-button type="primary">primary按钮</de-button>
<de-button type="success">success按钮</de-button>
```
#### 禁用状态

按钮不可用状态。

<button-exam2></button-exam2>

```vue
<de-button disabled>默认按钮</de-button>
<de-button disabled type="warning">warning按钮</de-button>
<de-button disabled type="danger">danger按钮</de-button>
<de-button disabled type="primary">primary按钮</de-button>
<de-button disabled type="success">success按钮</de-button>
```

#### 图标按钮

 带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。 

<button-exam3></button-exam3>

```vue
<de-button icon="loading">默认</de-button>
<de-button type="primary" icon="info"></de-button>
<de-button type="warning" icon="star">警告</de-button>
<de-button type="danger" icon="bell">危险</de-button>
<de-button type="success" icon="success">成功</de-button>
```



#### 圆角按钮

圆润化的圆角按钮。

<button-exam4></button-exam4>

```vue
<de-button round>默认圆角</de-button>
<de-button type="warning" round>警告圆角</de-button>
<de-button type="danger" round>危险圆角</de-button>
<de-button type="primary" round>默认圆角</de-button>
<de-button type="success" round>成功圆角</de-button>
```



#### 不同尺寸

 Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。 

<button-exam5></button-exam5>

```vue
<de-button type="primary" round>默认按钮</de-button>
<de-button type="primary" size="medium" round>中型按钮</de-button>
<de-button type="primary" size="small" round>小型按钮</de-button>
<de-button type="primary" size="mini" round>超小按钮</de-button>
```

#### 点击事件

点击按钮之后的事件，避免在组件上面直接使用原生的click事件。

<button-exam6></button-exam6>

```vue
<de-button type="primary" @click="handleClick">默认按钮</de-button>
```
### Attributes

| 参数                         | 说明 | 类型   | 可选值                                         | 默认值  |
| :--------------------------: | :--: | :----: | :--------------------------------------------: | ------- |
|type | 类型 | string | primary / success / warning / danger / default | default |
| size | 尺寸 | string | default / medium / small / mini | default |
| icon | 图标 | string | 参考Icon组件部分所有列表 | — |
| round | 是否圆角 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |

### Events

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;事件名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| -------- | -------------- | -------- |
| &nbsp;&nbsp;&nbsp;&nbsp;click&nbsp;&nbsp;&nbsp;&nbsp;    | &nbsp;&nbsp;&nbsp;&nbsp;按钮组件的点击事件&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;无&nbsp;&nbsp;&nbsp;&nbsp;       |
