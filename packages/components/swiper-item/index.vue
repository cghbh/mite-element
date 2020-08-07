<template>
	<transition name="left" :name="direction === 'right' ? 'right' : 'left'">
		<div class="de-swiper-item" v-if="Swiper.active === name">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'de-swiper-item',
	inject: {
		Swiper: {
			default: null
		}
	},
	props: {
		name: {
			type: [String, Number]
		}
	},
	data() {
		return {
			// 默认方法是left
			direction: 'left'
		}
	},
	created() {
		// 获取上一级组件的direction属性，从而决定使用不同方向的动画
		// 默认情况下使用左侧动画
		this.Swiper.$emit('give.item', this)
		this.Swiper.$on('direction', (data) => {
			this.direction = data
		})
	}
}
</script>

<style scoped>
@import './style.css';
.de-swiper-item {
	width: 100%;
}

/* 动画 */
.left-enter-active,
.left-leave-active {
    transition:all .5s;
}

.left-leave-to {
    transform: translateX(-100%)
}

.left-enter{
    transform: translateX(100%);
}

.left-leave-to{
    transform: translateX(100%)
}

.left-enter{
    transform: translateX(-100%);
}

.left-enter-active{
   position:absolute;
    width:100%;
    top:0;
    left:0;
}

.right-enter-active,
.right-leave-active {
    transition:all .5s;
}

.right-leave-to {
    transform: translateX(100%)
}

.right-enter{
    transform: translateX(-100%);
}

.right-leave-to{
    transform: translateX(-100%)
}
.right-enter{
    transform: translateX(100%);
}

.right-enter-active{
    position:absolute;
    width:100%;
    top:0;
    left:0;
}
</style>
