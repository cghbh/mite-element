## Input输入框组件

#### 基础用法
<base-code>

<template slot="display">

<input1></input1>

</template>

<template>

```vue
<de-input v-model="value" placeholder="请输入内容"></de-input>

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

</template>

</base-code>








#### 最大输入长度

<base-code>

<template slot="display">

<input8></input8>

</template>

<template>

```vue
<de-input v-model="value" maxlength="10" placeholder="最多只能输入10个字符"></de-input>

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

</template>

</base-code>









#### 输入框大小

 可通过 size属性指定输入框的尺寸，除了默认的大小外，还提供了medium和small两种尺寸。 



<base-code>

<template slot="display">

<input2></input2>

</template>

<template>

```vue
<de-input v-model="value" placeholder="请输入内容"></de-input>
<de-input v-model="value" placeholder="请输入内容" size="medium"></de-input>
<de-input v-model="value" placeholder="请输入内容" size="small"></de-input>

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

</template>

</base-code>








#### 文本域

 用于输入多行文本信息，通过将 type属性的值指定为 textarea。 
 
 <base-code>
 
 <template slot="display">
 
 <input3></input3>
 
 </template>
 
 <template>
 
 ```vue
 <de-input v-model="value" placeholder="请输入一长段内容" type="textarea"></de-input>
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
 
 </template>
 
 </base-code>





#### 可清空


<base-code>

<template slot="display">

<input4></input4>

</template>

<template>

```vue
<de-input v-model="value" clearable placeholder="请输入内容"></de-input>

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

</template>

</base-code>



#### 禁用状态


<base-code>

<template slot="display">

<input5></input5>

</template>

<template>

```vue
<de-input v-model="value" disabled placeholder="请输入内容"></de-input>

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

</template>

</base-code>





#### 密码框

可以实现密码的显示或者隐藏效果。

<base-code>

<template slot="display">

<input9></input9>

</template>

<template>

```vue
<de-input v-model="value" type="password" placeholder="最多只能输入10个字符"></de-input>

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

</template>

</base-code>









#### 文字居中

<base-code>

<template slot="display">

<input6></input6>

</template>

<template>

```vue
<de-input v-model="value" center placeholder="请输入内容"></de-input>

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

</template>

</base-code>


#### 复合型输入框

 可前置或后置元素，一般为标签或按钮。
 
 <base-code>
 
 <template slot="display">
 
 <input7></input7>
 
 </template>
 
 <template>
 
 ```vue
 <de-input v-model="value" center placeholder="请输入内容">
 	<template slot="prepend">Http://</template>
 </de-input>
 	<de-input v-model="value" center placeholder="请输入内容">
 	<template slot="append">.com</template>
 </de-input>
 <de-input v-model="value" center placeholder="请输入内容">
 	<template slot="prepend">Http://</template>
 	<template slot="append">.com</template>
 </de-input>
 
 
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
 
 </template>
 
 </base-code>





#### Attributes

|      参数       |      说明      |  类型   |           可选值           |   默认值   |
| :-------------: | :------------: | :-----: | :------------------------: | :--------: |
| value / v-model |     绑定值     | string  |             —              |     —      |
|   placeholder   | 输入框占位文本 | string  |             —              | 请输入内容 |
|    maxlength    |  最大输入长度  | number  |             —              |     —      |
|    disabled     |      禁用      | boolean |        true / false        |   false    |
|    clearable    |   文字可清空   | boolean |        true / false        |   false    |
|     center      |    文字居中    | boolean |        true / false        |   false    |
|      type       |   输入框类型   | string  | text / textarea / password |    text    |
|      size       |   输入框尺寸   | string  |       medium / small       |     —      |
