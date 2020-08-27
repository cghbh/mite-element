<template>
	<div class="pagination-one">
		<m-pagination :current-page.sync="currentPage" :total="4"></m-pagination>
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
			currentPage: 1
		}
	}
}
</script>

<style scoped>
.pagination-one {
	margin-bottom: 20px;
}
</style>
