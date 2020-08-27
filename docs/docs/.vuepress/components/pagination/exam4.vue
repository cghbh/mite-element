<template>
	<div class="pagination-four">
		<m-pagination :current-page.sync="currentPage" background :total="25" ></m-pagination>
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
			currentPage: 3
		}
	}
}
</script>

<style scoped>
.pagination-four {
	margin-bottom: 20px;
}
</style>
