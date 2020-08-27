<template>
	<div class="pagination-three">
		<m-pagination :current-page.sync="currentPage" :show-quick-jump="true" :total="50" ></m-pagination>
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
			currentPage: 2
		}
	}
}
</script>

<style>
.pagination-three {
	margin-bottom: 20px;
}
td {
	padding: 12px 15px;
}
</style>
