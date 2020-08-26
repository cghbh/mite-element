<template>
	<div class="input7">
		<div class="input-container">
			<m-input v-model="value" center placeholder="请输入内容">
				<template slot="prepend">Http://</template>
			</m-input>
		</div>
		<div class="input-container">
			<m-input v-model="value" center placeholder="请输入内容">
				<template slot="append">.com</template>
			</m-input>
		</div>
		<div class="input-container">
			<m-input v-model="value" center placeholder="请输入内容">
				<template slot="prepend">Http://</template>
				<template slot="append">.com</template>
			</m-input>
		</div>
	</div>
</template>

<script>
import MInput from '../../../../../packages/components/input/index.js'
export default {
	components: {
		MInput
	},
	data() {
		return {
			value: ''
		}
	}
}
</script>

<style scoped>
.input7 {
  width: 100%;
}
.input-container {
	margin: 10px 0;
	width: 100%;
}
</style>
