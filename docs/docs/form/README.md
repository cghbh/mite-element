## Form表单

#### 默认表单验证

 在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。 
 
 <base-code>
 
 <template slot="display">
 
 <form-exam1></form-exam1>
 
 </template>
 
 <template>
 
 ```vue
 <template>
 	<div class="form-container">
 		<m-form :modal="users" :rules="rules" ref="ruleForm">
 			<m-form-item label="活动名称" prop="name">
 				<m-input v-model="users.name" placeholder="请输入活动名称"></m-input>
 			</m-form-item>
 			<m-form-item label="活动形式" prop="desc">
 				<m-input v-model="users.desc" placeholder="请输入活动形式"></m-input>
 			</m-form-item>
 			<m-form-item label="活动人数">
 				<m-input-number :step="1" :max="20" :min="1" v-model="users.number"></m-input-number>
 			</m-form-item>
 			<m-form-item label="个人爱好">
 				<m-checkbox-group v-model="users.hobby">
 					<m-checkbox label="羽毛球">羽毛球</m-checkbox>
 					<m-checkbox label="游泳">游泳</m-checkbox>
 					<m-checkbox label="篮球">篮球</m-checkbox>
 					<m-checkbox label="足球">足球</m-checkbox>
 				</m-checkbox-group>
 			</m-form-item>
 			<m-form-item label="你的选择">
 				<m-radio-group v-model="users.selectOnly">
 				  <m-radio label="选项一">选项一</m-radio>
 				  <m-radio label="选项二">选项二</m-radio>
 				  <m-radio label="选项三">选项三</m-radio>
 				</m-radio-group>
 			</m-form-item>
 			<m-form-item>
 				<m-button type="primary" @click="submit">立即创建</m-button>
 				<m-button @click="reset">取消</m-button>
 			</m-form-item>
 		</m-form>
 	</div>
 </template>
 
 <script>
 export default {
 	data() {
 		return {
 			users: {
 				name: '',
 				desc: '',
 				number: 1,
 				hobby: [],
 				selectOnly: '选项一'
 			},
 			rules: {
 				name: [
 					   { required: true, message: '请输入活动名称', trigger: 'blur' }
 				],
 				desc: [
 					   { required: true, message: '请输入活动形式', trigger: 'blur' }
 				],
 				score: [
 					   { required: true, message: '请输入活动评价', trigger: 'blur' }
 				]
 			}
 		}
 	},
 	methods: {
 		submit() {
 			this.$refs.ruleForm.validate(validate => {
 				if(validate) {
 					console.log(this.users)
 					this.$message({
 						message: '恭喜你，这是符合要求的表单，请继续！',
 						type: 'success'
 					})
 				} else {
 					this.$message({
 						message: '校验没有通过，请检查之后重试！',
 						type: 'warning'
 					})
 					return
 				}
 			})
 		},
 		// 重置表单内容
 		reset() {
 			this.$refs.ruleForm.resetFileds()
 		}
 	}
 }
 </script>
 ```
 
 </template>
 
 </base-code>









#### 自定义表单校验



<base-code>

<template slot="display">

<form-exam2></form-exam2>

</template>

<template>

```vue
<template>
	<div class="form-container-self">
		<m-form :modal="users" :rules="rules" ref="ruleForm">
			<m-form-item label="用户名" prop="username">
				<m-input v-model="users.username" placeholder="请输入用户名"></m-input>
			</m-form-item>
			<m-form-item label="邮箱" prop="email">
				<m-input v-model="users.email" placeholder="请输入邮箱"></m-input>
			</m-form-item>
			<m-form-item label="密码" prop="password">
				<m-input v-model="users.password" type="password" placeholder="请输入密码"></m-input>
			</m-form-item>
			<m-form-item label="确认密码" prop="againPassword">
				<m-input type="password" v-model="users.againPassword" placeholder="请再次确认密码"></m-input>
			</m-form-item>
			<m-form-item>
				<m-button type="primary" @click="submit">提交</m-button>
				<m-button @click="reset">重置</m-button>
			</m-form-item>
		</m-form>
	</div>
</template>

<script>
export default {
	data() {
		// 自定义校验规则
		const checkUsername = (rule, value, cb) => {
			if(value.length > 10 || value.length < 2) {
				return cb(new Error('用户名长度必须在2-10之间！'))
			} else {
				cb()
			}
		}
		const checkEmail = (rule, value, cb) => {
			const reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
			const validateValue = reg.test(value)
			console.log(validateValue, 'validateValue')
			if(!value) {
				return cb(new Error('邮箱不可用为空！'))
			} else if (!validateValue) {
				return cb(new Error('邮箱不符合规范，请检查后重试！！'))
			} else {
				cb()
			}
		}
		const checkPassword = (rule, value, cb) => {
			if(value.length > 16 || value.length < 10) {
				return cb(new Error('密码长度只能在10-16位之间！'))
			} else {
				cb()
			}
		}
		const checkAgainPassword = (rule, value, cb) => {
			if (!value) {
				return cb(new Error('请再次输入密码'))
			} else if(value !== this.users.password) {
				return cb(new Error('两次密码输入不一致！'))
			} else {
				cb()
			}
		}
		return {
			users: {
				username: '',
				password: '',
				againPassword: '',
				email: ''
			},
			rules: {
				username: [
					{ validator: checkUsername, trigger: 'blur' }
				],
				password: [
					{ validator: checkPassword, trigger: 'blur' }
				],
				againPassword: [
					{ validator: checkAgainPassword, trigger: 'blur' }
				],
				email: [
					{ validator: checkEmail, trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		submit() {
			this.$refs.ruleForm.validate(validate => {
				if(validate) {
					console.log(this.users)
					this.$message({
						message: '恭喜你，这是符合要求的表单，请继续！',
						type: 'success'
					})
				} else {
					this.$message({
						message: '校验没有通过，请检查之后重试！',
						type: 'warning'
					})
					return
				}
			})
		},
		// 重置表单内容
		reset() {
			this.$refs.ruleForm.resetFileds()
		}
	}
</script>
```

</template>

</base-code>



