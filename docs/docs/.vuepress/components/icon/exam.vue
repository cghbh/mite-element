<template>
	<div>
	  <ul class="list-container">
	  	<li class="list">
	  		 <m-icon icon="heart"></m-icon>
	  	</li>
	  	<li class="list">
	  		<m-icon icon="wechat-fill"></m-icon>
	  	</li>
	  	<li class="list">
	  		<m-icon icon="github-fill"></m-icon>
	  	</li>
	  	<li class="list">
	  		<m-icon icon="setting"></m-icon>
	  	</li>
		<li class="list">
			<m-icon icon="info-circle"></m-icon>
		</li>
		<li class="list">
			<m-icon icon="search"></m-icon>
		</li>
	  </ul>
	</div>
</template>

<script>
import MIcon from '../../../../../packages/components/icon/index.js'
export default {
	components: {
		MIcon
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
