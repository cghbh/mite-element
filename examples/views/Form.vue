<template>
	<div class="form-container">
		<lay-form :modal="users" :rules="rules" ref="ruleForm">
			<lay-form-item label="活动名称" prop="name">
				<lay-input v-model="users.name" placeholder="请输入活动名称"></lay-input>
			</lay-form-item>
			<lay-form-item label="活动形式" prop="desc">
				<lay-input v-model="users.desc" placeholder="请输入活动形式"></lay-input>
			</lay-form-item>
			<lay-form-item label="活动人数">
				<lay-input-number :step="1" :max="20" :min="1" v-model="users.number"></lay-input-number>
			</lay-form-item>
			<lay-form-item label="个人爱好">
				<lay-checkbox-group v-model="users.hobby">
					<lay-checkbox label="羽毛球">羽毛球</lay-checkbox>
					<lay-checkbox label="游泳">游泳</lay-checkbox>
					<lay-checkbox label="篮球">篮球</lay-checkbox>
					<lay-checkbox label="足球">足球</lay-checkbox>
				</lay-checkbox-group>
			</lay-form-item>
			<lay-form-item label="你的选择">
				<lay-radio-group v-model="users.selectOnly">
				  <lay-radio label="选项一">选项一</lay-radio>
				  <lay-radio label="选项二">选项二</lay-radio>
				  <lay-radio label="选项三">选项三</lay-radio>
				</lay-radio-group>
			</lay-form-item>
			<lay-form-item label="活动评价" prop="score">
				<lay-input type="textarea" placeholder="请输入对活动的评价" v-model="users.score"></lay-input>
			</lay-form-item>
			<lay-form-item>
				<lay-button type="primary" @click="submit">立即创建</lay-button>
				<lay-button>取消</lay-button>
			</lay-form-item>
		</lay-form>
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
