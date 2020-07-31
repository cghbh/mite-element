## InputNumber计数器

#### 基础用法

<input-number1></input-number1>

```vue
<de-input-number v-model="value"></de-input-number>

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

#### 禁用状态

<input-number2></input-number2>

```vue
<de-input-number v-model="value" disabled></de-input-number>

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

#### 步进

 允许定义递增递减的步数控制。

<input-number3></input-number3>

```vue
<de-input-number v-model="value" :step="5"></de-input-number>

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



#### 限定计数范围

<input-number4></input-number4>

```vue
<de-input-number v-model="value" :max="30" :min="10"></de-input-number>

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

#### 精度控制

<input-number5></input-number5>

```vue
<de-input-number v-model="value" :precision="2" :step="0.1"></de-input-number>

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

#### Attributes

|      参数       |          说明          |  类型   |    可选值    |  默认值   |
| :-------------: | :--------------------: | :-----: | :----------: | :-------: |
| value / v-model |         绑定值         | number  |      —       |   必填    |
|    disabled     |      是否禁止操作      | boolean | true / false |   false   |
|       max       | 设置计数器允许的最大值 | number  |      —       | +Infinity |
|       min       | 设置计数器允许的最小值 | number  |      —       | -Infinity |
|      step       |      计数器的步长      | number  |      —       |     1     |
|    precision    |        数值精度        | number  |      —       |     0     |