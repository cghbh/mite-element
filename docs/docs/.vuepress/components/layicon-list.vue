<template>
	<div>
		<ul class="list-con">
			<li class="list" :class="{'no-border-left': index % 5 !== 0, 'no-border-bottom': Math.floor(index / 5) >= 1}" v-for="(item, index) in iconlist" :key="item">
				<lay-icon :icon="item"></lay-icon>
				<span>{{ item }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import LayIcon from '../../../../packages/components/icon/index.js'
export default {
	data () {
		return {
			iconlist: ['bell', 'loading2', 'star1', 'user', 'Zoomin', 'caidan', 'success', 'bell1', 'info', 'close', 'delete', 'warning', 'error', 'plus', 'home', 'loading', 'zoomout', 'star', 'loading1', 's-tools', 'delete-solid']
		}
	},
	components: {
		LayIcon
	}
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.list-con, .list {
	list-style: none;
}
.list-con {
	display: flex;
	flex-wrap: wrap;
	margin-top: 15px;
}
.list {
	width: 145px;
	height: 120px;
	border: 1px solid #ddd;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
.list:hover {
	color: #409fea;
}
.list /deep/ .icon {
	width: 30px;
	height: 30px;
}
.list span {
	margin-top: 10px;
}
.no-border-left {
	border-left: none;
}
.no-border-bottom {
	border-top: none;
}
</style>