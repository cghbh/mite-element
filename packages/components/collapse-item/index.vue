<template>
	<div class="de-collapse-item">
		<!-- 折叠面板的头部信息展示 -->
		<div class="de-collapse-item-head" @click="handleClick">
			<span class="de-collapse-item-head-text">{{ title }}</span>
			<span class="de-collapse-item-head-icon icon-style" :class="{'is-active': isActive, 'icon-back': isActive}">
				<svg t="1596521428307" class="icon-left" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3834" width="200" height="200"><path d="M377.018182 802.909091c-6.981818 0-11.636364-2.327273-16.290909-6.981818-9.309091-9.309091-9.309091-23.272727 0-32.581818L612.072727 512 360.727273 260.654545c-9.309091-9.309091-9.309091-23.272727 0-32.581818s23.272727-9.309091 32.581818 0l267.636364 267.636364c9.309091 9.309091 9.309091 23.272727 0 32.581818L395.636364 795.927273c-4.654545 4.654545-11.636364 6.981818-18.618182 6.981818z" p-id="3835" fill="#2c2c2c"></path></svg>
			</span>
		</div>
		<!-- 折叠面板的主体信息展示 -->
		<collapse-transition>
			<div class="de-collapse-item-content" v-if="isActive">
				<slot></slot>
			</div>
		</collapse-transition>
	</div>
</template>

<script>
import { CollapseTransition } from '../../utils/collapseTransition.js'
export default {
	name: 'de-collapse-item',
	inject: {
		Collapse: {
			default:null
		}
	},
	props: {
		title: {
			type: String,
			required: true
		},
		name: {
			type: String
		}
	},
	data() {
		return {
			contentVisible: false
		}
	},
	 computed: {
		 // 判断当前是否需要展开
	    isActive() {
	        return this.Collapse.activeNames.indexOf(this.name) > -1;
	    }
	 },
	methods: {
		handleClick() {
			// 点击的时候，将当前组件传递到上一级的组件
			this.Collapse.$emit('item-click', this)
		}
	},
	components: {
		CollapseTransition
	}
}
</script>

<style scoped>
@import './style.css';
</style>
