## Input输入框组件

#### 基础用法
<input1></input1>

```vue
<lay-input v-model="value" placeholder="请输入内容"></lay-input>

<script>
export default {
	data() {
		return {
			value: ''
		}
	}
}
</script>
```





#### 最大输入长度

<input8></input8>

```vue
<lay-input v-model="value" maxlength="10" placeholder="最多只能输入10个字符"></lay-input>

<script>
export default {
	data() {
		return {
			value: ''
		}
	}
}
</script>
```





#### 输入框大小

 可通过 size属性指定输入框的尺寸，除了默认的大小外，还提供了medium和small两种尺寸。 

<input2></input2>

```vue
<lay-input v-model="value" placeholder="请输入内容"></lay-input>
<lay-input v-model="value" placeholder="请输入内容" size="medium"></lay-input>
<lay-input v-model="value" placeholder="请输入内容" size="small"></lay-input>

<script>
export default {
	data() {
		return {
			value: ''
		}
	}
}
</script>
```






#### 文本域

 用于输入多行文本信息，通过将 type属性的值指定为 textarea。 

<input3></input3>

```vue
<lay-input v-model="value" placeholder="请输入一长段内容" type="textarea"></lay-input>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: ''
		}
	}
}
</script>
```

#### 可清空

<input4></input4>

```vue
<lay-input v-model="value" clearable placeholder="请输入内容"></lay-input>

<script>
export default {
	data() {
		return {
			value: ''
		}
	}
}
</script>
```

#### 禁用状态

<input5></input5>

```vue
<lay-input v-model="value" disabled placeholder="请输入内容"></lay-input>

<script>
export default {
	data() {
		return {
			value: ''
		}
	}
}
</script>
```

#### 文字居中

<input6></input6>

```vue
<lay-input v-model="value" center placeholder="请输入内容"></lay-input>

<script>
export default {
	data() {
		return {
			value: ''
		}
	}
}
</script>
```

#### 复合型输入框

 可前置或后置元素，一般为标签或按钮。

<input7></input7>

```vue
<template>
	<div class="input-complex">
		<div class="input-container">
			<lay-input v-model="value" center placeholder="请输入内容">
				<template slot="prepend">Http://</template>
			</lay-input>
		</div>
		<div class="input-container">
			<lay-input v-model="value" center placeholder="请输入内容">
				<template slot="append">.com</template>
			</lay-input>
		</div>
		<div class="input-container">
			<lay-input v-model="value" center placeholder="请输入内容">
				<template slot="prepend">Http://</template>
				<template slot="append">.com</template>
			</lay-input>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: ''
		}
	}
}
</script>
```

