<template>
	<div class="pagination-four">
		<m-pagination :current-page.sync="currentPage" :hide-if-one-page="show" background :total="1" ></m-pagination>
		<br>
		<m-switch v-model="show"></m-switch>
	</div>
</template>

<script>
import MPagination from '../../../../../packages/components/pagination/index.js'
import MSwitch from '../../../../../packages/components/switch/index.js'
export default {
	components: {
		MPagination,
		MSwitch
	},
	data() {
		return {
			currentPage: 1,
			show: false
		}
	}
}
</script>

<style scoped>
.pagination-four {
	margin-bottom: 20px;
}
</style>
