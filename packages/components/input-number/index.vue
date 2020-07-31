<template>
	<div class="de-input-number">
		<de-input @change="handleChange" center v-model.number="inputNumber" :disabled="disabled">
			<div class="icon-containe" :class="{ 'is-disabled': disabled || forbidSub }" slot="prepend" @click="changeInputValue('sub')">
				<svg t="1595815656422" class="icon-sub" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16001" width="200" height="200"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" p-id="16002" fill="#515151"></path></svg>
			</div>
			<div class="icon-containe" :class="{ 'is-disabled': disabled || forbidPlus }" slot="append" @click="changeInputValue('plus')">
				<svg t="1595815679864" class="icon-plus" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16232" width="200" height="200"><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" p-id="16233" fill="#515151"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" p-id="16234" fill="#515151"></path></svg>
			</div>
		</de-input>
	</div>
</template>

<script>
import DeInput from '../input/index.vue'
export default {
	name: 'de-input-number',
	props: {
		// 默认的初始化值
		value: {
			type: [Number, String],
			default: 0
		},
		// 步进值
		step: {
			type: Number,
			// 必传
			required: true,
			default: 1
		},
		disabled: {
			type: Boolean,
			default: false
		},
		// 限定最大值和最小值的情况
		max: {
			type: Number,
			default: +Infinity
		},
		min: {
			type: Number,
			default: -Infinity
		},
		// 精度的控制
		precision: {
			type: Number,
			default: 0
		}
	},
	methods: {
		changeInputValue(type) {
			if (!this.disabled) {
				// 根据点击的不同类型来确定值
				if(type === 'sub') {
					this.inputNumber = (this.inputNumber * 1 - this.step).toFixed(this.precision)
				} else {
					this.inputNumber = (this.inputNumber * 1 + this.step).toFixed(this.precision)
				}
			}
		},
		handleChange() {
			// 当数据发生变化的时候，强行更新数据
			this.$forceUpdate()
		}
	},
	computed: {
		inputNumber: {
			set(value) {
				// 对临界值进行限定
				if (value >= this.max) {
					value = this.max
				} else if (value <= this.min) {
					value = this.min
				}
				this.$emit('input', value)
			},
			get() {
				return Number(this.value).toFixed(this.precision)
			}
		},
		forbidPlus() {
			return this.inputNumber >= this.max
		},
		forbidSub() {
			return this.inputNumber <= this.min
		}
	},
	components: {
		DeInput
	}
}
</script>

<style scoped>
@import './style.css';
.icon-containe {
	height: 16px;
	width: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
.icon-sub,
.icon-plus {
	width: 100%;
	height: 100%;
}
.de-input-number >>> .de-input {
	width: 50px!important;
}
</style>
