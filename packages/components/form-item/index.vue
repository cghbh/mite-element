<template>
	<div class="lay-form-item">
		<label class="lay-form-item-label">
			{{ label }}
		</label>
		<div class="lay-form-item-container">
			<slot></slot>
			<p v-if="error" class="lay-form-item-container-warning">{{ error }}</p>
		</div>
	</div>
</template>

<script>
import Schema from 'async-validator'
export default {
	name: 'lay-form-item',
	inject: ['LayForm'],
	provide() {
		return {
			LayFormItem: this
		}
	},
	props: {
		prop: {
			type: String
		},
		label: {
			type: String
		}
	},
	data() {
		return {
			error: ''
		}
	},
	mounted() {
		// 监听input失去焦点的事件
		this.$on('validate', () => {
			this.validate()
		})
		// 将当前的对象传递给他的上一级元素，由于考虑到$children和$parent的高度耦合，所有采用provide和inject向上派发传递
		// 过滤掉不需要校验的
		if(this.prop) {
			this.LayForm.$emit('add.Fileds', this)
		}
	},
	methods: {
		// 执行表单校验的操作
		validate() {
			// 获取当前的数据
			const value = this.LayForm.modal[this.prop]
			// 获取当前的校验规则
			const rule = this.LayForm.rules[this.prop]
			// 创建校验规则对象
			const descriptor = {
				[`${this.prop}`]: rule
			}
			// 创建校验对象
			const validator = new Schema(descriptor)
			// 执行校验的操作
			// 这里会返回一个Promise对象
			return validator.validate({
				[`${this.prop}`]: value
			}, (error) => {
				if(error) {
					this.error = error[0].message
				} else {
					// 如果校验成功就将当前的警告信息清除
					this.error = ''
				}
			})
		}
	}
}
</script>

<style scoped>
.lay-form-item {
	display: flex;
	align-items: center;
	margin-bottom: 24px;
}

.lay-form-item /deep/ .lay-input {
	max-width: 400px;
}
.lay-form-item /deep/  .lay-textarea {
	max-width: 400px;
}
.lay-form-item .lay-form-item-label {
	width: 60px;
	margin: 0!important;
	line-height: 40px;
	text-align: right;
	font-size: 14px;
	text-align: right;
	margin-right: 15px!important;
}
.lay-form-item .lay-form-item-container {
	position: relative;
	flex: 1;
}
.lay-form-item .lay-form-item-container-warning {
	position: absolute;
	font-size: 12px;
	top: 80%;
	left: 5px;
	color: #E92322;
}
</style>
