<template>
	<div class="display-exam">
		<lay-input-number v-model="value" :step="0.5" :precision="3" :max="20" :min="10"></lay-input-number>
		<button @click="updateObject">更新对象</button>
		<button @click="updateValue">强制更新</button>
		<div>{{ value }}</div>
		<div v-for="(item, key) in object" :key="item">值：{{item}}----键：{{key}}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: 12,
			object: {
				name: '张三'
			}
		}
	},
	methods: {
		updateValue() {
			this.$forceUpdate()
		},
		updateObject() {
			this.object.age = 100
			this.$set(this.object, 'age', 1000)
		}
	}
}
</script>

<style scoped>
.display-exam {
	width: 200px;
	margin: 20px;
}
</style>
