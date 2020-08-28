<template>
	<div>
		<!-- <m-switch v-model="value"></m-switch> -->
		<m-button :type="visible1 ? 'primary': 'success'" @click="visible1 = !visible1">{{ visible1 ? '纵向收起': '纵向展开'}}</m-button>
		<div class="spread-example-divide"></div>
		<m-spread :visible="visible1">
			<div style="width: 500px; height: 240px;background-color: skyblue;"></div>
		</m-spread>
		
		<!-- 横向	 -->
		<div class="spread-example-divide"></div>
		<m-button :type="visible2 ? 'primary': 'success'" @click="visible2 = !visible2">{{ visible2 ? '横向收起': '横向展开'}}</m-button>
		<div class="spread-example-divide"></div>
		<m-spread horizontal :visible="visible2">
			<div style="width: 500px; height: 240px;background-color: skyblue;"></div>
		</m-spread>
		
	</div>
</template>

<script>
import MSpread from '../../../../../packages/components/spread/index.js'
import MButton from '../../../../../packages/components/button/index.js'
export default {
	data() {
		return {
			visible1: true,
			visible2: true
		}
	},
	components: {
		MSpread,
		MButton
	}
}
</script>

<style scoped>
.spread-example-divide {
	margin: 25px 0;
}
</style>
