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
import MForm from '../../../../../packages/components/form/index.js'
import MFormItem from '../../../../../packages/components/form-item/index.js'
import MInput from '../../../../../packages/components/input/index.js'
import MInputNumber from '../../../../../packages/components/input-number/index.js'
import MRadio from '../../../../../packages/components/radio/index.js'
import MRadioGroup from '../../../../../packages/components/radio-group/index.js'
import MCheckbox from '../../../../../packages/components/checkbox/index.js'
import MCheckboxGroup from '../../../../../packages/components/checkbox-group/index.js'
import MButton from '../../../../../packages/components/button/index.js'
import Vue from 'vue'
import MMessage from '../../../../../packages/components/message/index.js'
Vue.use(MMessage)
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
	},
	components: {
		MForm,
		MFormItem,
		MInput,
		MRadio,
		MRadioGroup,
		MCheckbox,
		MCheckboxGroup,
		MButton,
		MInputNumber
	}
}
</script>

<style scoped>
.form-container {
	width: 100%;
	padding: 20px 20px 10px 15px;
	box-shadow: 0 0 3px #ccc;
}
</style>
