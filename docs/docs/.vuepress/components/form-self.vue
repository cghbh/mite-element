<template>
	<div class="form-container-self">
		<de-form :modal="users" :rules="rules" ref="ruleForm">
			<de-form-item label="用户名" prop="username">
				<de-input v-model="users.username" placeholder="请输入用户名"></de-input>
			</de-form-item>
			<de-form-item label="邮箱" prop="email">
				<de-input v-model="users.email" placeholder="请输入邮箱"></de-input>
			</de-form-item>
			<de-form-item label="密码" prop="password">
				<de-input v-model="users.password" type="password" placeholder="请输入密码"></de-input>
			</de-form-item>
			<de-form-item label="确认密码" prop="againPassword">
				<de-input type="password" v-model="users.againPassword" placeholder="请再次确认密码"></de-input>
			</de-form-item>
			<de-form-item>
				<de-button type="primary" @click="submit">提交</de-button>
				<de-button @click="reset">重置</de-button>
			</de-form-item>
		</de-form>
	</div>
</template>

<script>
import DeForm from '../../../../packages/components/form/index.js'
import DeFormItem from '../../../../packages/components/form-item/index.js'
import DeInput from '../../../../packages/components/input/index.js'
import DeInputNumber from '../../../../packages/components/input-number/index.js'
import DeRadio from '../../../../packages/components/radio/index.js'
import DeRadioGroup from '../../../../packages/components/radio-group/index.js'
import DeCheckbox from '../../../../packages/components/checkbox/index.js'
import DeCheckboxGroup from '../../../../packages/components/checkbox-group/index.js'
import DeButton from '../../../../packages/components/button/index.js'
import Vue from 'vue'
import DeMessage from '../../../../packages/components/message/index.js'
Vue.use(DeMessage)
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
	},
	components: {
		DeForm,
		DeFormItem,
		DeInput,
		DeRadio,
		DeRadioGroup,
		DeCheckbox,
		DeCheckboxGroup,
		DeButton,
		DeInputNumber
	}
}
</script>

<style scoped>
.form-container-self {
	padding: 30px 20px 10px 15px;
	margin-top: 30px;
	box-shadow: 0 0 3px #ccc;
	margin-bottom: 30px;
}
</style>
