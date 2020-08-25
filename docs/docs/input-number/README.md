## InputNumber计数器

#### 基础用法
<base-code>

<template slot="display">
<inputnumber-exam1></inputnumber-exam1>

</template>

<template>

```vue
<m-input-number v-model="value"></m-input-number>

<script>
export default {
	data() {
		return {
			value: 1
		}
	}
}
</script>
```

</template>

</base-code>





#### 禁用状态
<base-code>

<template slot="display">
<inputnumber-exam2></inputnumber-exam2>

</template>

<template>

```vue
<m-input-number v-model="value" disabled></m-input-number>

<script>
export default {
	data() {
		return {
			value: 1
		}
	}
}
</script>
```

</template>

</base-code>





#### 步进

 允许定义递增递减的步数控制。

 <base-code>

 <template slot="display">

 <inputnumber-exam3></inputnumber-exam3>

 </template>

 <template>

 ```vue
 <m-input-number v-model="value" :step="5"></m-input-number>
 
 <script>
 export default {
 	data() {
 		return {
 			value: 1
 		}
 	}
 }
 </script>
 ```

 </template>

 </base-code>







#### 限定计数范围
控制步进组件数值的范围，只能在指定的范围内操作。

<base-code>

<template slot="display">
<inputnumber-exam4></inputnumber-exam4>

</template>

<template>

```vue
<m-input-number v-model="value" :max="30" :min="10"></m-input-number>

<script>
export default {
	data() {
		return {
			value: 15
		}
	}
}
</script>
```

</template>

</base-code>





#### 精度控制

控制步进组件的精度，精度由传入的参数决定。

<base-code>

<template slot="display">

<inputnumber-exam5></inputnumber-exam5>

</template>

<template>

```vue
<m-input-number v-model="value" :precision="2" :step="0.1"></m-input-number>

<script>
export default {
	data() {
		return {
			value: 5
		}
	}
}
</script>
```

</template>

</base-code>




#### Attributes

|      参数       |          说明          |  类型   |    可选值    |  默认值   |
| :-------------: | :--------------------: | :-----: | :----------: | :-------: |
| value / v-model |         绑定值         | number  |      —       |   必填    |
|    disabled     |      是否禁止操作      | boolean | true / false |   false   |
|       max       | 设置计数器允许的最大值 | number  |      —       | +Infinity |
|       min       | 设置计数器允许的最小值 | number  |      —       | -Infinity |
|      step       |      计数器的步长      | number  |      —       |     1     |
|    precision    |        数值精度        | number  |      —       |     0     |