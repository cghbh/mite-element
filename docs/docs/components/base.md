# 基础组件
## Icon 图标
#### 使用方法
在下面的图标集合里面直接使用最后面的图标名称即可，传递到icon参数上
<lay-icon-based></lay-icon-based>

```js
<lay-icon icon="loading2"></lay-icon>
<lay-icon icon="info"></lay-icon>
<lay-icon icon="s-tools"></lay-icon>
<lay-icon icon="delete"></lay-icon>
```

#### 所有的图标集合

<layicon-list></layicon-list>

#### 参数说明

| 参数 | 说明     | 类型   | 可选值   | 默认值 |
| ---- | -------- | ------ | -------- | :----: |
| icon | 图标类型 | string | 均在上表 |   —    |





## Button 按钮
#### 基础用法
<button-exam1></button-exam1>

```javascript
<lay-button>默认按钮</lay-button>
<lay-button type="warning">warning按钮</lay-button>
<lay-button type="danger">danger按钮</lay-button>
<lay-button type="primary">primary按钮</lay-button>
<lay-button type="success">success按钮</lay-button>
```
#### 禁用状态

>  按钮不可用状态。

<button-exam2></button-exam2>

```js
<lay-button disabled>默认按钮</lay-button>
<lay-button disabled type="warning">warning按钮</lay-button>
<lay-button disabled type="danger">danger按钮</lay-button>
<lay-button disabled type="primary">primary按钮</lay-button>
<lay-button disabled type="success">success按钮</lay-button>
```

#### 图标按钮
<button-exam3></button-exam3>

```js
<lay-button icon="loading">默认</lay-button>
<lay-button type="primary" icon="info"></lay-button>
<lay-button type="warning" icon="star">警告</lay-button>
<lay-button type="danger" icon="bell">危险</lay-button>
<lay-button type="success" icon="success">成功</lay-button>
```



#### 圆角按钮

<button-exam4></button-exam4>

```js
<lay-button round>默认圆角</lay-button>
<lay-button type="warning" round>警告圆角</lay-button>
<lay-button type="danger" round>危险圆角</lay-button>
<lay-button type="primary" round>默认圆角</lay-button>
<lay-button type="success" round>成功圆角</lay-button>
```



#### 不同尺寸

<button-exam5></button-exam5>

```js
<lay-button type="primary" round>默认按钮</lay-button>
<lay-button type="primary" size="medium" round>中型按钮</lay-button>
<lay-button type="primary" size="small" round>小型按钮</lay-button>
<lay-button type="primary" size="mini" round>超小按钮</lay-button>
```

#### 点击事件

<button-exam6></button-exam6>

```js
<lay-button type="primary" @click="handleClick">默认按钮</lay-button>
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

