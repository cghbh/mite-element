<template>
	<div class="m-affix-wrapper" :style="{ 'height': height }"  ref="wrapper">
		<div class="m-affix-wrapper-container" :class="{ 'affix': affix }" :style="{ 'left': left, 'width': width, 'height': height, 'top': top }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
/* 
  bug记录
   1.滚到fixed的时候频繁闪动，因为affix距离顶部的距离实际上是应该在mounted就应该固定，而不是随着scroll而计算得到
   2.当高度勉强可以到滚到的时候，就会陷入鬼畜状态，因为原先有n个元素，当滚到到可以固定的时候，就会出现一个元素是fixed状态失去文档流高度，那么还要n-1个元素需要计算高度，这个时候屏幕就会认为已有的内容不足以填充屏幕，滚动条消失，既然滚动条消失，那么scrollY的值为0，因此fixed状态也就会不存在，从而陷入死循环。解决方案是在slot外面再嵌套一层div，让最外层不用脱离文档流，依旧保持之前的高度即可
   3.当affix组件里面有异步的数据比如像图片这样的内容的时候，加载速度慢，那么高度会采用加载完成之前的高度，会导致在图片返回之后高度获取不一致的问题。解决办法：在用户滚动之后再获取高度，也就是不滚动高度不设置。
   4.当页面由操作的时候，由于webpack打包过程会针对组件进行更新，删除之前的组件，更新新的组件，在这个过程中会存在报undefined错误的情况，只需要针对各种副作用比如事件监听等的卸载即可。
 */
export default {
	name: 'm-affix',
	props: {
		distance: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			// 是否开启fixed属性
			affix: false,
			height: undefined,
			left: undefined,
			top: undefined,
			width: undefined
		}
	},
	mounted() {
		// 获取距离顶部的高度，在初始化情况下就
		const { top } = this.getPositionData()
		this.scrollHandler = () => {
			if(top < window.scrollY + this.distance) {
				const { left, height, width } = this.getPositionData()
				this.affix = true
				this.height = height + 'px'
				this.left = left + 'px'
				this.width = width + 'px'
				this.top = this.distance + 'px'
			} else {
				this.affix = false
				this.top = undefined
			}
		}
		window.addEventListener('scroll', this.scrollHandler)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.scrollHandler)
	},
	methods: {
		getPositionData() {
			const { left, height, width, top } = this.$refs.wrapper.getBoundingClientRect()
			return { left, width, height, top: top + window.scrollY }
		}
	}
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>