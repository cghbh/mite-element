<template>
	<div class="form-container">
		<de-form :modal="users" :rules="rules" ref="ruleForm">
			<de-form-item label="活动名称" prop="name">
				<de-input v-model="users.name" placeholder="请输入活动名称"></de-input>
			</de-form-item>
			<de-form-item label="活动形式" prop="desc">
				<de-input v-model="users.desc" placeholder="请输入活动形式"></de-input>
			</de-form-item>
			<de-form-item label="活动人数">
				<de-input-number :step="1" :max="20" :min="1" v-model="users.number"></de-input-number>
			</de-form-item>
			<de-form-item label="个人爱好">
				<de-checkbox-group v-model="users.hobby">
					<de-checkbox label="羽毛球">羽毛球</de-checkbox>
					<de-checkbox label="游泳">游泳</de-checkbox>
					<de-checkbox label="篮球">篮球</de-checkbox>
					<de-checkbox label="足球">足球</de-checkbox>
				</de-checkbox-group>
			</de-form-item>
			<de-form-item label="你的选择">
				<de-radio-group v-model="users.selectOnly">
				  <de-radio label="选项一">选项一</de-radio>
				  <de-radio label="选项二">选项二</de-radio>
				  <de-radio label="选项三">选项三</de-radio>
				</de-radio-group>
			</de-form-item>
			<de-form-item>
				<de-button type="primary" @click="submit">立即创建</de-button>
				<de-button @click="reset">取消</de-button>
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
.form-container {
	padding: 20px 0 10px 15px;
	margin-top: 30px;
	box-shadow: 0 0 3px #ccc;
	margin-bottom: 30px;
}
</style>
