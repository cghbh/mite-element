<template>
	<div>
	  <ul class="list-container">
	  	<li class="list">
	  		 <lay-icon icon="loading2"></lay-icon>
	  	</li>
	  	<li class="list">
	  		<lay-icon icon="info"></lay-icon>
	  	</li>
	  	<li class="list">
	  		<lay-icon icon="s-tools"></lay-icon>
	  	</li>
	  	<li class="list">
	  		<lay-icon icon="delete"></lay-icon>
	  	</li>
	  </ul>
	</div>
</template>

<script>
import LayIcon from '../../../../packages/components/icon/index.js'
export default {
	components: {
		LayIcon
	}
}
</script>

<style scoped>
.list-container, .list {
	list-style: none;
}
.list-container {
	width: 100%;
	display: flex;
	flex: 1
}
.list {
	width: 70px;
}
.list /deep/ .icon {
	width: 30px;
	height: 30px;
}
</style>
