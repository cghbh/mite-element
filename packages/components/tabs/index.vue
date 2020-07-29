<template>
	<div>
		<div class="lay-tabs-nav">
			<!-- this.$slots.default[0].text -->
			<div class="lay-tabs-nav-contain" @click="tabClick">
				<div class="lay-tabs-nav-border" ref="border"></div>
				<template @listens="getListen">
					<slot datavalue="123"></slot>
				</template>
			</div>
		</div>
		<div class="lay-tabs-content" v-html="displayValue"></div>
	</div>
</template>

<script>
import Vue from 'vue'
const bus = new Vue()
Vue.prototype.$bus = bus
export default {
	name: 'lay-tabs',
	provide () {
		return {
			tabs: this
		}
	},
	props: {
		value: {
			type: String
		}
	},
	computed: {
		activeKey: {
			get(){
				return this.value
			},
			set(value){
				console.log(value, '---comp vau')
			}
		}
	},
	data () {
		return {
			displayValue: ''
		}
	},
	methods: {
		tabClick(e) {
			if(e.target.className.includes( 'lay-tabs-nav-item')){
				if (e.target.className.includes('no-paddingleft')) {
					this.$refs.border.style.left = e.target.offsetLeft + 'px'
					this.$refs.border.style.width = e.target.offsetWidth - 20 + 'px'
				}else if (e.target.className.includes('no-paddingright')) {
					this.$refs.border.style.left = e.target.offsetLeft + 20 + 'px'
					this.$refs.border.style.width = e.target.offsetWidth - 20 + 'px'
				} else {
					this.$refs.border.style.left = e.target.offsetLeft + 20 + 'px'
					this.$refs.border.style.width = e.target.offsetWidth - 40 + 'px'
				}
				
			}
			
			// 事件的逻辑判断
			// this.tabs.$data.displayValue = this.$slots.default[0].text
			// this.tabs.activeKey = this.item
			// console.log(this.item, 'item')
			// console.log(this.tabs.activeKey, 'activeKey')
			// this.$emit('tab-click', '哈哈哈哈')
		},
		getListen(e) {
			console.log(e)
		}
	},
	mounted() {
		this.$on('testemit', (data) => {
			console.log(data, '哈哈哈哈，我接受到了')
		})
	}
}
</script>

<style>
@import './style.scss';
</style>
