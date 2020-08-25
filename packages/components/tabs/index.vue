<template>
	<div class="de-tabs":class="{ 'is-card-container': type }">
		<div class="de-tabs-heading" :class="{ 'is-card': type }">
			<div ref="tabbar" :class="{ 'active-class': item.name === activeName, 'is-card-active':  item.name === activeName && type }" :s-id="item.name" :style="{'padding-left': type? '20px' : index === 0 ? '0' : '20px', 'padding-right': type? '20px' : nameAndLabelList.length - 1 === 0 ? '0' : '20px', 'border-left': index === 0 && type ? 'none': '' }" @click="tabsClick(item, $event)" v-for="(item, index) in nameAndLabelList" :key="index" class="de-tabs-heading-item">
			<de-icon v-if="item.icon" :icon="item.icon"></de-icon>
			{{ item.label }}
		</div>
			<div v-show="!type" ref="activeBar" class="de-tabs-heading-active_bar"></div>
		</div>
		<div class="de-tabs-content" :style="{'padding-left': type? '10px' : '0'}">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import DeIcon from '../icon/index.vue'
export default {
	name:'de-tabs',
	// 由于使用$children和$parent存在耦合性，因此使用provide向子孙组件注入数据
	provide() {
		return {
			Tabs: this
		}
	},
	props: {
		// 决定当前显示的是哪一个TabsItem
		value: {
			type: String,
			required: true
		},
		// 选项卡的模式，默认无
		type: {
			type: String,
			default: '',
			validator: (value) => {
				return ['', 'card'].includes(value)
			}
		}
	},
	data() {
		return {
			nameAndLabelList: []
		}
	},
	components: {
		DeIcon
	},
	methods: {
		// 点击Tabbar的时候触发的事情
		tabsClick(item,e) {
			// 获取当前是哪一个元素，根据传递过来的name属性决定
			this.$emit('input', item.name)
			this.calculateDistance(e)
			// 点击事件
			// 获取当前点击的实例
			let instance
			this.nameAndLabelList.forEach(item => {
				if(this.activeName === item.name) {
					instance = item.self
				}
			})
			this.$emit('tab-click', instance)
		},
		// 计算active-bar的初始距离和点击时候需要偏离的距离
		calculateDistance(e) {
			const hasPaddingLeft = (+e.target.style.paddingLeft.indexOf(0)) === 0
			const hasPaddingRight = (+e.target.style.paddingRight.indexOf(0)) === 0
			// 计算当前元素的宽度
			let offsetWidth = e.target.offsetWidth
			let offsetLeft = e.target.offsetLeft
			// 除去最边上的两个元素只有一个一侧padding值的情况
			if (hasPaddingLeft || hasPaddingRight) {
				offsetWidth = offsetWidth - 20
			} else {
				offsetWidth = offsetWidth - 40
			}
			if (!hasPaddingLeft) {
				offsetLeft = offsetLeft + 20
			}
			// 设置当前activebar的宽度
			this.$refs.activeBar.style.width = offsetWidth + 'px'
			this.$refs.activeBar.style.left = offsetLeft + 'px'
		},
		// 初始化状态下设置
	},
	created() {
		// 接受子孙组件传递过来的label和name属性值
		this.$on('add', (data) => {
			this.nameAndLabelList.push(data)
		})
	},
	mounted() {
		this.$nextTick(() => {
			// 遍历当前所有的元素
			[...this.$refs.tabbar].forEach(item => {
				if (item.getAttribute('s-id') === this.activeName) {
					this.calculateDistance({ target: item })
					this.$forceUpdate()
				}
			})
		})
		
	},
	computed: {
		// 计算当前正在显示的是哪一个Tabs
		activeName() {
			return this.value
		}
	}
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
