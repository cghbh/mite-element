<template>
	<div class="input7">
		<div class="input-container">
			<lay-input v-model="value" center placeholder="请输入内容">
				<template slot="prepend">Http://</template>
			</lay-input>
		</div>
		<div class="input-container">
			<lay-input v-model="value" center placeholder="请输入内容">
				<template slot="append">.com</template>
			</lay-input>
		</div>
		<div class="input-container">
			<lay-input v-model="value" center placeholder="请输入内容">
				<template slot="prepend">Http://</template>
				<template slot="append">.com</template>
			</lay-input>
		</div>
	</div>
</template>

<script>
import LayInput from '../../../../packages/components/input/index.js'
export default {
	components: {
		LayInput
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
