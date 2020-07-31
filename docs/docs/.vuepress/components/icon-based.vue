<template>
	<div>
	  <ul class="list-container">
	  	<li class="list">
	  		 <de-icon icon="loading2"></de-icon>
	  	</li>
	  	<li class="list">
	  		<de-icon icon="info"></de-icon>
	  	</li>
	  	<li class="list">
	  		<de-icon icon="s-tools"></de-icon>
	  	</li>
	  	<li class="list">
	  		<de-icon icon="delete"></de-icon>
	  	</li>
	  </ul>
	</div>
</template>

<script>
import DeIcon from '../../../../packages/components/icon/index.js'
export default {
	components: {
		DeIcon
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
.list /deep/ .icon-self {
	width: 25px;
	height: 25px;
}
</style>
