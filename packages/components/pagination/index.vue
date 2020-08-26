<template>
	<div class="m-pagination" @click="clickPager">
		<!-- 左箭头 -->
		<span class="m-pagination-item pagination-arrow-left" :class="startClass" @click="jumpOneStep(-1)">
			<m-icon icon="left"></m-icon>
		</span>
		
		
		
		<!-- 内容区域 -->
		<template>
			<span class="m-pagination-item" :class="{ 'm-pagination-item-active': currentPage === 1 }">{{ pages[0] }}</span>
		</template>
		
		<!-- 加速左箭头 -->
		<span class="m-pagination-item pagination-arrow-double-left" v-if="currentPage >= 5">
			<m-icon  @click="jumpDouble(-1)" v-if="showDoubleArrawLeft" icon="doubleleft"></m-icon>
			<m-icon v-else icon="ellipsis1"></m-icon>
		</span>
		
		<template>
			<span class="m-pagination-item" :class="{ 'm-pagination-item-active': value === page }" v-for="page in pages.splice(1, pages.length -2)" :key="page + Math.random()">{{ page }}</span>
		</template>
		
		<!-- 加速右箭头 -->
		<span class="m-pagination-item  pagination-arrow-double-right" v-if="currentPage <= total -4" >
			<m-icon @click="jumpDouble(1)" v-if="showDoubleArrawLeft" icon="doubleright"></m-icon>
			<m-icon v-else icon="ellipsis1"></m-icon>
		</span>
		
		
		<template>
			<span class="m-pagination-item" :class="{ 'm-pagination-item-active': currentPage === total }" >{{ pages[pages.length - 1] }}</span>
		</template>
		
		
		
		<!-- 右箭头 -->
		<span class="m-pagination-item pagination-arrow-right" :class="endClass" @click="jumpOneStep(1)">
			<m-icon icon="right"></m-icon>
		</span>
		
		<!-- 跳转到指定页面 -->
		<input @keyup.enter="getJumpPage" v-model="jumpToSetPage" class="m-pagination-input-jump-set-number"/>
		{{ currentPage }}
	</div>
</template>

<script>
import MIcon from '../icon/index.vue'
export default {
	name: 'm-pagination',
	props: {
		// 是否使用小型分页器
		small: {
			type: Boolean,
			default: false
		},
		// 分页的总数量
		total: {
			type: Number
		},
		// 是否为分页器的按钮添加active背景颜色
		background: {
			type: Boolean,
			default: false
		},
		// 当前页码,父组件双向数据绑定实现
		value: {
			type: Number,
			default: 1
		},
		// 只有一页的时候是否隐藏分页器
		hideIfOnePage: {
			type: Boolean,
			default: false
		},
		jumpPageNumber: {
			type: Number,
			default: 5
		}
	},
	components: {
		MIcon
	},
	data() {
		return {
			// 记录当前的数据
			currentPage: 0,
			// 是否显示加倍翻页的箭头
			showDoubleArrawLeft: false,
			showDoubleArrawRight: false,
			// 跳转到指定的页码
			jumpToSetPage: ''
		}
	},
	created() {
		this.currentPage = this.value
	},
	computed: {
		pages() {
			let pages = [1, this.currentPage - 2 <= 1 ? this.currentPage : this.currentPage - 2, this.currentPage - 1 <= 1 ? this.currentPage : this.currentPage - 1, this.currentPage, this.currentPage + 1 >= this.total ? this.total : this.currentPage + 1, this.currentPage + 2 >= this.total ? this.total : this.currentPage + 2, this.total]
			pages = unique(pages)
			return pages
		},
		// 当前页码是1的时候，禁止继续向左跳转的操作
		startClass() {
			return { 'forbid': this.currentPage === 1 }
		},
		// 当前页码是最后一页的时候，禁止继续向左跳转的操作
		endClass() {
			return { 'forbid': this.currentPage === this.total }
		}
	},
	methods: {
		clickPager(e) {
			if(e.target.className === 'm-pagination-item') {
				this.currentPage = parseInt(e.target.innerText)
				this.$emit('input', parseInt(e.target.innerText))
			}
		},
		jumpOneStep(value) {
			this.currentPage += value
			this.getRange()
			this.$emit('input', this.currentPage)
		},
		jumpDouble(value) {
			// value大于0向右加倍跳转，小于0向左加倍跳转
			if(value > 0) {
				this.currentPage += this.jumpPageNumber
			} else {
				this.currentPage -= this.jumpPageNumber
			}
			this.getRange()
			this.$emit('input', this.currentPage)
		},
		// 专门用来控制跳转页码的范围
		getRange() {
			if(this.currentPage >= this.total) {
				this.currentPage = this.total
			}
			if(this.currentPage <= 1) {
				this.currentPage = 1
			}
		},
		getJumpPage() {
			console.log(this.jumpToSetPage, 'jump')
			this.currentPage = parseInt(this.jumpToSetPage)
			this.getRange()
			this.jumpToSetPage = ''
			this.$emit('input', this.currentPage)
		}
	}
}

// 去重函数
function unique(array) {
	let obj = {}
	array.map(item => {
		obj[item] = true
	})
	return Object.keys(obj).map(item => parseInt(item))
}
</script>

<style scoped lang="scss">
@import './style.scss'
</style>
