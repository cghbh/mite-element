<template>
	<div class="m-pagination" v-if="!hideIfOnePage || total > 1">
		<!-- 左箭头 -->
		<!-- 在这里直接对currentPage加减并没有更改数据流，隔离操作 -->
		<span @click="clickPageItem(currentPage - 1)" :class="{ 'forbid': currentPage === 1 }" class="m-pagination-item">
			<m-icon icon="left"></m-icon>
		</span>
		
		<template v-for="page in pages">
			<!-- 加速左箭头 -->
			<span @mouseenter="showDoubleArrawLeft = true" @mouseleave="showDoubleArrawLeft = false" v-if="page === 'prev'" class="m-pagination-item pagination-arrow-double-left">
				<m-icon @click.native="doubleJumpPage(currentPage - 5)" v-if="showDoubleArrawLeft" icon="doubleleft"></m-icon>
				<m-icon v-else icon="ellipsis"></m-icon>
			</span>
			
			<!-- 分页列表项 -->
			<span @click="clickPageItem(page)" class="m-pagination-item" v-if="page !== 'prev' && page !== 'next'" :class="{'m-pagination-item-active': page === currentPage, 'm-pagination-item-active-background': page === currentPage && background }">{{ page }}</span>
			
			<!-- 加速右箭头 -->
			<span v-if="page === 'next'" @mouseenter="showDoubleArrawRight = true" @mouseleave="showDoubleArrawRight = false" class="m-pagination-item pagination-arrow-double-right">
				<m-icon @click.native="doubleJumpPage(currentPage + 5)" v-if="showDoubleArrawRight" icon="doubleright"></m-icon>
				<m-icon v-else icon="ellipsis"></m-icon>
			</span>
		</template>
		
		
		<!-- 右箭头 -->
		<span @click="clickPageItem(currentPage + 1)" class="m-pagination-item" :class="{ 'forbid': currentPage === total }">
			<m-icon icon="right"></m-icon>
		</span>
		
		<span class="m-pagination-item jump-container" v-if="showQuickJump">
			跳至
			<input @keyup.enter="jumpToSetPage" v-model="quickJumpPage" class="input-set-jump" type="text">
			页
		</span>
	</div>
</template>

<script>
import MIcon from '../icon/index.vue'
export default {
	name: 'm-pagination',
	props: {
		// 分页的总数量
		total: {
			type: Number,
			required: true
		},
		// 是否为分页器的按钮添加active背景颜色
		background: {
			type: Boolean,
			default: false
		},
		// 当前页码,父组件双向数据绑定实现
		currentPage: {
			type: Number,
			default: 1
		},
		// 只有一页的时候是否隐藏分页器
		hideIfOnePage: {
			type: Boolean,
			default: false
		},
		// 快速跳转到指定页面
		showQuickJump: {
			type: Boolean,
			default: false
		}
	},
	components: {
		MIcon
	},
	data() {
		return {
			// 快速跳转到指定页面
			quickJumpPage: '',
			// 加速左箭头的显示
			showDoubleArrawLeft: false,
			showDoubleArrawRight: false
		}
	},
	computed: {
		/* 步骤分析:
			1.先将当前页面的前后两页,第一页以及最后一页及当前页添加到数组,至于有重复的除去就可以
			2.将值小于1的过滤掉,大于最大页码的值页过滤，得到符合要求的分页数组
			3.如果两页之间的空隙值大于1,说明中间需要有省略号代替
		*/
		pages() {
			let pages = [1, this.currentPage + 1, this.currentPage - 1, this.currentPage + 2, this.currentPage - 2, this.currentPage, this.total]
			pages = this.unique(pages.filter(item => item >= 1 && item <= this.total))
			pages.map((item, index) => {
				if(pages[index+1]-pages[index] > 1) {
					if(index < pages.length / 2) {
						pages.splice(index+1, 0, 'prev')
					} else {
						pages.splice(index+1, 0, 'next')
					}
					
				}
			})
			return pages
		}
	},
	methods: {
		// 点击分页器按钮跳转到指定页码
		clickPageItem(page) {
			// 控制页码跳转的范围
			if(page < 1 || page > this.total) {
				return false
			}
			this.$emit('update:currentPage', page)
		},
		// 去重函数
		unique(array) {
			let obj = {}
			array.map(item => {
				obj[item] = true
			})
			return Object.keys(obj).map(item => parseInt(item))
		},
		// 左右跳转切换
		jumpToSetPage() {
			// 跳转到指定的页面
			// 对用户传入的数据进行校验
			let quickJumpPage = parseInt(Number(this.quickJumpPage))
			if(isNaN(quickJumpPage)) {
				this.quickJumpPage = ''
			}
			if(quickJumpPage >= this.total) {
				quickJumpPage = this.total
			}
			if(this.quickJumpPage <= 1) {
				quickJumpPage = 1
			}
			this.$emit('update:currentPage', quickJumpPage)
			this.quickJumpPage = ''
		},
		// 加速跳转页码
		doubleJumpPage(value) {
			if(value >= this.total) {
				value = this.total
			}
			if(value <= 1) {
				value = 1
			}
			this.$emit('update:currentPage', value)
		}
	}
}
</script>

<style scoped lang="scss">
@import './style.scss'
</style>
