<template>
	<div>
		<ul class="list-con">
			<li class="list" :class="{'no-border-left': index % 5 !== 0, 'no-border-bottom': Math.floor(index / 5) >= 1}" v-for="(item, index) in iconlist" :key="item">
				<m-icon :icon="item"></m-icon>
				<span>{{ item }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import MIcon from '../../../../../packages/components/icon/index.js'
export default {
	data () {
		return {
			iconlist: ['error1', 'success', 'success1',  'caret-down', 'backward', 'caret-up', 'caret-right', 'caret-left', 'fast-backward', 'forward', 'fast-forward', 'search', 'retweet', 'login', 'step-backward', 'step-forward', 'swap-right', 'swap-left','woman', 'plus', 'eye', 'eyeclose-fill', 'eye-close', 'check-circle', 'Dollar', 'compass', 'close-circle', 'frown', 'info-circle', 'left-circle', 'down-circle', 'EURO', 'copyright', 'minus-circle', 'meh', 'plus-circle', 'play-circle', 'question-circle', 'Pound', 'right-circle', 'smile', 'trademark', 'time-circle', 'timeout', 'earth', 'YUAN', 'up-circle', 'warning-circle', 'sync', 'reload', 'poweroff', 'logout', 'piechart', 'setting', 'location', 'edit-square', 'export', 'save', 'Import', 'appstore', 'adduser', 'deleteteam', 'deleteuser', 'addteam', 'user', 'team', 'home', 'like', 'unlike', 'unlock', 'lock', 'shopping', 'scan', 'barcode', 'camera', 'car', 'read', 'cloud-server', 'cloud-upload', 'cloud', 'cloud-download', 'cloud-sync', 'video', 'notification', 'sound', 'heart', 'error', 'star', 'wifi', 'man', 'share', 'verticalright', 'verticalleft', 'right', 'left', 'up', 'down', 'fullscreen', 'fullscreen-exit', 'doubleleft', 'double right', 'arrowright', 'arrowup', 'arrowleft', 'arrowdown', 'upload', 'colum-height', 'vertical-align-botto', 'vertical-align-middl', 'totop', 'vertical-align-top', 'download', 'font-size', 'check', 'ellipsis', 'dash', 'close', 'desktop', 'stop', 'fire', 'check-circle-fill', 'left-circle-fill', 'down-circle-fill', 'minus-circle-fill', 'close-circle-fill', 'info-circle-fill', 'up-circle-fill', 'right-circle-fill', 'plus-circle-fill', 'question-circle-fill', 'EURO-circle-fill', 'frown-fill', 'copyright-circle-fil', 'CI-circle-fill', 'compass-fill', 'poweroff-circle-fill', 'meh-fill', 'play-circle-fill', 'Pound-circle-fill', 'smile-fill', 'stop-fill', 'warning-circle-fill', 'time-circle-fill', 'YUAN-circle-fill', 'heart-fill', 'piechart-circle-fil', 'check-square-fill', 'safetycertificate-f', 'propertysafety-fill', 'insurance-fill', 'image-fill', 'idcard-fill', 'creditcard-fill', 'fund-fill', 'shopping-fill', 'skin-fill', 'video-fill', 'sound-fill', 'bulb-fill', 'bell-fill', 'trophy-fill', 'location-fill', 'cloud-fill', 'customerservice-fill', 'eye-fill', 'like-fill', 'lock-fill', 'unlike-fill', 'star-fill', 'rocket-fill', 'thunderbolt-fill', 'camera-fill', 'setting-fill', 'alibaba', 'alibabacloud', 'antdesign', 'ant-cloud', 'google', 'IE', 'amazon', 'slack', 'alipay', 'taobao', 'codepen', 'aliwangwang', 'apple', 'android', 'windows', 'dingtalk', 'android-fill', 'apple-fill', 'HTML-fill', 'windows-fill', 'QQ', 'twitter','weibo', 'wechat-fill', 'alipay-circle-fill', 'aliwangwang-fill', 'amazon-circle-fill', 'github-fill', 'QQ-circle-fill', 'IE-circle-fill', 'google-circle-fill','dingtalk-circle-fill', 'taobao-circle-fill', 'weibo-circle-fill', 'alipay-square-fill', 'zoomout', 'zoomin']
		}
	},
	components: {
		MIcon
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
.list /deep/ .icon-self {
	width: 28px;
	height: 28px;
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