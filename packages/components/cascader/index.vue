<template>
	<div class="de-cascader" v-click-outside="close">
		<div class="de-cascader-head" @click="toggle">
			<input class="de-cascader-head-input" type="text" readonly>
		</div>
		<div class="de-cascader-content" v-if="contentVisible">
			<div class="de-cascader-content-item">
				<div v-for="item in options">{{ item.label }}</div>
			</div>
			<div class="de-cascader-content-item">
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'de-cascader',
	props: {
		options: {
			type: Array,
			default: () => []
		}
	},
	// 创建一个点击非cascader区域的指令
	directives: {
		clickOutside: {
			inserted(el, bindings) {
				document.addEventListener('click', (e) => {
					if(e.target === el || el.contains(e.target)) {
						return
					}
					bindings.value()
				})
			},
			// 解绑的时候卸载监听事件
			unbind() {
				document.removeEventListener('click', (e) => {
					if(e.target === el || el.contains(e.target)) {
						return
					}
					bindings.value()
				})
			}
		}
	},
	data() {
		return {
			contentVisible: false // 是否显示内容区域
		}
	},
	methods: {
		// 点击input框的切换效果
		toggle() {
			this.contentVisible = !this.contentVisible
		},
		close() {
			this.contentVisible = false
		}
	}
}
</script>

<style scoped>
.de-cascader {
	display: inline-block;
}
.de-cascader-head {
	width: 222px;
	height: 40px;
	border: none;
	/* cursor: pointer; */
	border-radius: 4px;
}
.de-cascader-head .de-cascader-head-input {
	width: 100%;
	height: 100%;
	border: 1px solid #ccc;
	border-radius: 5px;
	outline: none;
	box-sizing: border-box;
	cursor: pointer;
}

.de-cascader-head .de-cascader-head-input:hover {
	outline: none;
	border: 1px solid #409EFF;
}

.de-cascader-head .de-cascader-head-input:focus {
	outline: none;
	border: 1px solid #409EFF;
}
.de-cascader-content {
	display: inline-flex;
}
</style>
