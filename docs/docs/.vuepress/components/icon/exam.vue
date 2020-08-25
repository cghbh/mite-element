<template>
	<div>
	  <ul class="list-container">
	  	<li class="list">
	  		 <de-icon icon="heart"></de-icon>
	  	</li>
	  	<li class="list">
	  		<de-icon icon="wechat-fill"></de-icon>
	  	</li>
	  	<li class="list">
	  		<de-icon icon="github-fill"></de-icon>
	  	</li>
	  	<li class="list">
	  		<de-icon icon="setting"></de-icon>
	  	</li>
		<li class="list">
			<de-icon icon="info-circle"></de-icon>
		</li>
		<li class="list">
			<de-icon icon="search"></de-icon>
		</li>
	  </ul>
	</div>
</template>

<script>
import DeIcon from '../../../../../packages/components/icon/index.js'
export default {
	components: {
		DeIcon
	}
}
</script>

<style scoped>
ul {
	margin: 0;
	padding: 0;
}
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
