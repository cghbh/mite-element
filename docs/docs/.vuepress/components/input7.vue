<template>
	<div class="input7">
		<div class="input-container">
			<de-input v-model="value" center placeholder="请输入内容">
				<template slot="prepend">Http://</template>
			</de-input>
		</div>
		<div class="input-container">
			<de-input v-model="value" center placeholder="请输入内容">
				<template slot="append">.com</template>
			</de-input>
		</div>
		<div class="input-container">
			<de-input v-model="value" center placeholder="请输入内容">
				<template slot="prepend">Http://</template>
				<template slot="append">.com</template>
			</de-input>
		</div>
	</div>
</template>

<script>
import DeInput from '../../../../packages/components/input/index.js'
export default {
	components: {
		DeInput
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
  margin-top: 25px;
  margin-bottom: 25px;
}
.input-container {
	margin: 10px 0;
}
</style>
