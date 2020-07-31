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
			<de-form-item label="活动评价" prop="score">
				<de-input type="textarea" placeholder="请输入对活动的评价" v-model="users.score"></de-input>
			</de-form-item>
			<de-form-item>
				<de-button type="primary" @click="submit">立即创建</de-button>
				<de-button>取消</de-button>
			</de-form-item>
		</de-form>
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
				score: '',
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
		}
	}
}
</script>

<style scoped>
.form-container {
	padding: 30px;
}
</style>
