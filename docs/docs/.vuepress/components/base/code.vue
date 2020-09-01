<template>
	<div class="base-code">
		<link rel="stylesheet" type="text/css" href="https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css"/>
		<div class="base-code-display">
			<slot name="display">123</slot>
		</div>
		
		<div class="base-code-code" ref="code">
			<m-spread :visible="showCodeText">
				<!-- <div v-if="showCodeText"> -->
					<slot name="default" ></slot>
				<!-- </div> -->
			</m-spread>
		</div>
		
		<div 
			class="base-show-hide"
			:style="{ 'border-top': showCodeText ? '1px solid #ddd' : 'none'}">
			<transition v-if="showCodeText">
				<span @click="add" v-if="visible">隐藏代码</span>
			</transition>
			<transition v-else>
				<span @click="add" v-if="visible">显示代码</span>
			</transition>
		</div>
	</div>
</template>

<script>
import DeIcon from '../../../../../packages/components/icon/index.js'
// 代码的折叠与收起的功能实现
import { CollapseTransition } from '../../../../../packages/utils/collapseTransition.js'
import MSpread from '../../../../../packages/components/spread/index.js'
export default {
	data() {
		return {
			visible: true,
			// 奇数显示隐藏代码，偶数显示展开代码
			tag: 0
		}
	},
	components: {
		DeIcon,
		CollapseTransition,
		MSpread
	},
	methods: {
		add() {
			this.tag++
			if(this.showCodeText) {
				this.$nextTick(() => {
					this.$refs.code.style.height = 'auto'
					// this.$refs.code.style.padding = '10px'
					this.$refs.code.style.transition = 'all .2s'
				})
			} else {
				this.$nextTick(() => {
					// this.$refs.code.style.height = 0
					// this.$refs.code.style.padding = '0'
				})
			}
			
			
		}
	},
	// 计算当前是显示代码的文字还是隐藏代码的文字
	// 奇数表示隐藏代码 偶数表示显示代码
	computed: {
		showCodeText() {
			return this.tag % 2 === 1
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.$refs.code.style.height = 0
			// this.$refs.code.style.padding = '0px'
		})
		
	}
}
</script>

<style>
h4 {
	padding: 0!important;
	margin: 20px 0!important;
}

p {
	width: 100%;
}

p,
code,
pre,
.language-vue{
	margin: 20px 0;
	padding: 0;
	border-radius: 0;
}
.base-code {
	width: 100%;
	border: 1px solid rgba(0, 0, 0, .1);
	margin-bottom: 80px;
	overflow: hidden;
}

.base-code-display {
	padding: 25px;
	border-bottom: 1px solid #ddd;
	display: flex;
	align-items: center;
}

.base-show-hide {
	height: 45px;
	padding: 4px;
	background-color: #fff;
	color: #0376FF;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	user-select: none;
	position: relative;
	z-index: 9;
	border-left: .3px solid rgba(0, 0, 0, .1);
	border-right: .3px solid rgba(0, 0, 0, .1);
	border-bottom: .3px solid rgba(0, 0, 0, .1);
}

.base-show-icon {
	width: 24px;
	height: 24px;
	margin-right: 10px;
}

.base-show-icon .icon {
	width: 100%;
	height: 100%;
}

.v-enter-active,
.v-leave-active {
	transition: all 1.2s;
}
/* 代码块 */
.fade-enter {
	opacity: 0;
}

.fade-enter-to {
	opacity: 1;
}

.fade-enter-active {
	transition: all 1s;
}

.fade-leave {
	opacity: 1;
}

.fade-leave-to {
	opacity: 0;
}

.fade-leave-active {
	transition: all .5s;
}


.base-code >>> .language-js {
	margin: 0;
	padding: 20px;
	border-radius: 0;
	background-color: #222;
}

.language-vue.extra-class {
	border-radius: 0!important;
	padding: 0!important;
	margin: 0!important;
	padding: 20px!important;
}

.base-code code,
.base-code > span,
.base-code   pre {
	border-radius: 0!important;
	padding: 0!important;
	margin: 0!important;
	font-size: 14px!important;
	
}

.base-code-display > p {
	margin: 0;
}
</style>
