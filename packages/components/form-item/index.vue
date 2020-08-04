<template>
	<div class="de-form-item">
		<label class="de-form-item-label">
			{{ label }}
		</label>
		<div class="de-form-item-container">
			<slot></slot>
			<p v-if="error" class="de-form-item-container-warning">{{ error }}</p>
		</div>
	</div>
</template>

<script>
import Schema from '../../assets/js/validate.js'
// import Schema from 'async-validator'
export default {
	name: 'de-form-item',
	inject: ['Form'],
	provide() {
		return {
			FormItem: this
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
			this.Form.$emit('add.Fileds', this)
			this.Form.$emit('reset.fileds', this)
		}
	},
	methods: {
		// 执行表单校验的操作
		validate() {
			// 获取当前的数据
			const value = this.Form.modal[this.prop]
			// 获取当前的校验规则
			const rule = this.Form.rules[this.prop]
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
		},
		resetFileds() {
			this.error = ''
			// 向下级input派发清除内容事件
			this.$emit('reset')
		}
	}
}
</script>

<style scoped>
.de-form-item {
	display: flex;
	align-items: center;
	margin-bottom: 24px;
}

.de-form-item >>> .de-input {
	max-width: 400px;
}
.de-form-item >>>  .de-textarea {
	max-width: 400px;
}
.de-form-item .de-form-item-label {
	width: 60px;
	margin: 0!important;
	line-height: 40px;
	text-align: right;
	font-size: 14px;
	text-align: right;
	margin-right: 15px!important;
}
.de-form-item .de-form-item-container {
	position: relative;
	flex: 1;
}
.de-form-item .de-form-item-container-warning {
	position: absolute;
	font-size: 12px;
	top: 42px;
	left: 5px;
	color: #E92322;
	margin: 0;
}
</style>
