## Button 按钮
#### 基础用法

<base-code>

<template slot="display">

<button-exam1></button-exam1>

</template>

<template>

```vue
<m-button>默认</m-button>
<m-button type="info">信息</m-button>
<m-button type="warning">警告</m-button>
<m-button type="danger">危险</m-button>
<m-button type="primary">主要</m-button>
<m-button type="success">成功</m-button>
```

</template>

</base-code>




#### 禁用状态

按钮不可用状态。

<base-code>

<template slot="display">

<button-exam2></button-exam2>

</template>

<template>

```vue
<m-button disabled>默认</m-button>
<m-button disabled type="info">信息</m-button>
<m-button disabled type="warning">警告</m-button>
<m-button disabled type="danger">危险</m-button>
<m-button disabled type="primary">默认</m-button>
<m-button disabled type="success">成功</m-button>
```

</template>

</base-code>




#### 图标按钮

 带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。 <br/>
 图标在按钮的左侧或者右侧是可以控制的。

 <base-code>

 <template slot="display">

 <button-exam3></button-exam3>

 </template>

 <template>

 ```vue
 <m-button icon="info-circle">默认</m-button>
 <m-button type="primary" icon="info-circle">默认</m-button>
 <m-button type="primary" icon="heart"></m-button>
 <m-button type="warning" icon-left="star">警告</m-button>
 <m-button type="danger" icon-right="close">危险</m-button>
 <m-button type="success" icon-left="check">成功</m-button>
 ```

 </template>

 </base-code>







#### 圆角按钮

圆润化的圆角按钮。

<base-code>

<template slot="display">

<button-exam4></button-exam4>

</template>

<template>

```vue
<m-button round>默认圆角</m-button>
<m-button type="info" round>信息圆角</m-button>
<m-button type="warning" round>警告圆角</m-button>
<m-button type="danger" round>危险圆角</m-button>
<m-button type="primary" round>默认圆角</m-button>
<m-button type="success" round>成功圆角</m-button>
```

</template>

</base-code>







#### 不同尺寸

 Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<base-code>
  <template slot="display">

  <button-exam5></button-exam5>

  </template>

  <template>
  

  ```vue
 <m-button type="primary">默认按钮</m-button>
 <m-button type="primary" round>默认按钮</m-button>
 <m-button type="primary" size="medium">中型按钮</m-button>
 <m-button type="primary" size="medium" round>中型按钮</m-button>
 <m-button type="primary" size="small" round>小型按钮</m-button>
 <m-button type="primary" size="small">小型按钮</m-button>
 <m-button type="primary" size="mini" round>超小</m-button>
 <m-button type="primary" size="mini">超小</m-button>
  ```

  </template>
</base-code>


#### 加载中
点击按钮后进行数据加载的操作，在按钮上显示加载状态。

<base-code>
  <template slot="display">

  <button-exam7></button-exam7>

  </template>

  <template>
  

  ```vue
 <m-button type="primary" icon="sync" loading>默认按钮</m-button>
  ```

  </template>
</base-code>



#### 点击事件

点击按钮之后的事件，避免在组件上面直接使用原生的click事件。

<base-code>

<template slot="display">

<button-exam6></button-exam6>

</template>

<template>

```vue
<m-button type="primary" @click="handleClick">默认按钮</m-button>
```

</template>


</base-code>




### Attributes

| 参数                         | 说明 | 类型   | 可选值                                         | 默认值  |
| :--------------------------: | :--: | :----: | :--------------------------------------------: | :-----: |
|type | 类型 | string | primary / success / warning / danger / default | default |
| size | 尺寸 | string | default / medium / small / mini | default |
| icon | 图标 | string | 参考Icon组件部分所有列表，默认在按钮的左侧 | — |
| icon-left | 图标方向 | string | 图标在左边，传入需要指定的icon值即可 | — |
| icon-right | 图标方向 | string | 图标在右边，传入需要指定的icon值即可 | — |
| round | 是否圆角 | boolean | true / false | false |
| disabled | 是否禁用 | boolean | true / false | false |
| loading | 是否加载状态 | boolean | true / false | false |

### Events

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;事件名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| -------- | -------------- | -------- |
| &nbsp;&nbsp;&nbsp;&nbsp;click&nbsp;&nbsp;&nbsp;&nbsp;    | &nbsp;&nbsp;&nbsp;&nbsp;按钮组件的点击事件&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;无&nbsp;&nbsp;&nbsp;&nbsp;       |
