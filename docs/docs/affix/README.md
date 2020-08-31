## Affix 图钉

#### 基础用法
用于窗口滚动时固定某元素的组件。

<base-code>

 <template slot="display">

 <affix-exam1></affix-exam1>

 </template>

 <template>

 ```vue
 <m-affix :distance="50"></m-affix>
 ```

 </template>

 </base-code>


#### Tabs Attributes

|   参数   |            说明            |  类型  | 可选值 | 默认值 |
| :------: | :------------------------: | :----: | :----: | :----: |
| distance | 固定位置距离窗口顶部的距离 | number |   —    |   0    |