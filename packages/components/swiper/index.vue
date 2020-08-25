<template>
	<div :style="{ 'border-radius': radius }" @mouseenter.stop="mouseEnter" @mouseleave.stop="mouseLeave" class="de-swiper">
		<!-- 视口承载 -->
		<div class="de-swiper-viewport">
			<slot></slot>
		</div>
		<!-- 小圆点 -->
		<div class="de-swiper-dots" v-if="dot">
			<span :style="{'background-color': index === activeIndex ? dotcolor : '#fff'}" @click="dotClick(index)" class="de-swiper-dots-item" :class="{'active': index === activeIndex}" v-for="(item, index) in swiperItems" :key="item.name"></span>
		</div>
		<!-- 箭头的显示与隐藏 -->
		<div class="de-swiper-arrow" >
			<transition name="left">
				<div @click="clickArrowLeft('left')" class="de-swiper-arrow-left" v-if="showArrow && arrow">
					<svg t="1596778985112" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9962" width="200" height="200"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8c-16.4 12.8-16.4 37.5 0 50.3l450.8 352.1c5.3 4.1 12.9 0.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" p-id="9963" fill="#ffffff"></path></svg>
				</div>
			</transition>
			<transition name="right">
				<div class="de-swiper-arrow-right" @click="clickArrowRight('right')" v-if="showArrow && arrow">
					<svg t="1596778948045" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9687" width="200" height="200"><path d="M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z" p-id="9688" fill="#ffffff"></path></svg>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: 'de-swiper',
	// 构建子孙组件的通信
	provide() {
		return {
			Swiper: this
		}
	},
	props: {
		// 轮播图的间隔时间，默认是3000毫秒
		interval: {
			type: Number,
			default: 3000
		},
		// 是否显示小圆点
		dot: {
			type: Boolean,
			default: false
		},
		// 小圆点的颜色自定义
		dotcolor: {
			type: String,
			default: '#409eff'
		},
		// 初始化状态下显示哪一张轮播图
		initindex: {
			type: Number,
			default: 0
		},
		// 是否显示左右的切换箭头
		arrow: {
			type: Boolean,
			default: false
		},
		// 是否需要圆角化
		radius: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			swiperItems: [],
			active: '',
			activeIndex: 0,
			showArrow: false,
			timerId: null,
			// 对左右两侧进行一定时间的限制
			leftTimerId: null,
			rightTimerId: null
		}
	},
	created() {
		this.$on('give.item', (item) => {
			this.swiperItems.push(item)
		})
		this.activeIndex = this.initindex
	},
	mounted() {
		this.initSwiper()
		this.startSwiper()
	},
	// 清除相关定时器
	beforeDestroy() {
		clearTimeout(this.rightTimerId)
		clearTimeout(this.leftTimerId)
		clearInterval(this.timerId)
	},
	methods: {
		// 初始化显示
		initSwiper() {
			this.active = this.swiperItems[this.activeIndex].name
		},
		// 开始轮播
		startSwiper() {
			this.timerId = setInterval(() => {
				// 越界情况判断
				this.activeIndex++
				if(this.activeIndex > this.swiperItems.length - 1) {
					this.activeIndex = 0
				}
				if(this.activeIndex < 0) {
					this.activeIndex = this.swiperItems.length - 1
				}
				this.active = this.swiperItems[this.activeIndex].name
			}, this.interval)
		},
		mouseEnter() {
			if(this.arrow) {
				this.showArrow = true
				// 鼠标进来，停止
				clearInterval(this.timerId)
			}
		},
		mouseLeave() {
			if(this.arrow) {
				this.showArrow = false
				this.startSwiper()
			}
		},
		clickArrowLeft(value) {
			// 点击左侧或者点击右侧的时候，将当前的direction传递到下一级组件
			if(!this.leftTimerId) {
				this.leftTimerId = setTimeout(() => {
					this.$emit('direction', value)
					this.activeIndex--
					// 如果左滑到第一张就跑到最后一张
					if(this.activeIndex < 0) {
						this.activeIndex = this.swiperItems.length - 1
					}
					this.active = this.swiperItems[this.activeIndex].name
				}, 150)
			} else {
				clearTimeout(this.leftTimerId)
				this.leftTimerId = null
			}
		},
		clickArrowRight(value) {
			if(!this.rightTimerId) {
				this.rightTimerId = setTimeout(() => {
					this.$emit('direction', value)
					this.activeIndex++
					// 如果右滑到最后一张就返回到第一张来
					if(this.activeIndex > this.swiperItems.length - 1) {
						this.activeIndex = 0
					}
					this.active = this.swiperItems[this.activeIndex].name
				}, 150)
			} else {
				clearTimeout(this.rightTimerId)
				this.rightTimerId = null
			}
		},
		// 点击小圆点的操作
		dotClick(index) {
			this.update(index)
		},
		update(index) {
			this.activeIndex = index
			this.active = this.swiperItems[this.activeIndex].name
		}
	}
}
</script>

<style scoped lang="scss">
@import './style.scss';
.de-swiper {
	/* width: 100%; */
	position: relative;
	overflow: hidden;
	z-index: 999;
}

.de-swiper-viewport {
	/* width: 100%; */
	height: 100%;
	position: relative;
	overflow: hidden;
	z-index: 9999;
	display: flex;
	flex-shrink: 0;
}

.de-swiper-dots {
	position: absolute;
	display: flex;
	left: 50%;
	bottom: 10px;
	transform: translate(-50%);
	z-index: 99999;
}

.de-swiper-dots .de-swiper-dots-item {
	width: 8px;
	height: 8px;
	background-color: #fff;
	border-radius: 50%;
	margin: 0 5px;
	cursor: pointer;
}
.de-swiper-dots .de-swiper-dots-item.active {
	background-color: #409EFF;
}

.de-swiper-arrow {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	z-index: 10000;
}

.de-swiper-arrow .de-swiper-arrow-left,
.de-swiper-arrow .de-swiper-arrow-right {
	width: 30px;
	height: 30px;
	background-color: rgba(0, 0, 0, .2);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.de-swiper-arrow .de-swiper-arrow-left:hover,
.de-swiper-arrow .de-swiper-arrow-right:hover {
	background-color: rgba(0, 0, 0, .4);
}

.de-swiper-arrow .de-swiper-arrow-left .icon,
.de-swiper-arrow .de-swiper-arrow-right .icon {
	width: 15px;
	height: 15px;
}

/* 箭头左侧进入和右侧进入的动画效果实现 */

.left-enter{
	opacity: 0;
	transform: translate(-15px);
}

.left-enter-active,
.left-leave-active {
	transition: all .15s linear;	
}

.left-leave-to {
	transform: translate(-100%);
}

.right-enter{
	opacity: 0;
	transform: translate(15px);
}

.right-enter-active,
.right-leave-active {
	transition: all .15s linear;	
}

.right-leave-to {
	transform: translate(15px);
}
</style>
