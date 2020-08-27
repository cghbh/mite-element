<template>
	<div class="pagination-two">
		<m-pagination :current-page.sync="currentPage" :total="100"></m-pagination>
	</div>
</template>

<script>
import MPagination from '../../../../../packages/components/pagination/index.js'
export default {
	components: {
		MPagination
	},
	data() {
		return {
			currentPage: 10
		}
	}
}
</script>

<style scoped>
.pagination-two {
	margin-bottom: 20px;
}
</style>
