<template>
	<div class="modal-test">
		<p class="content">壮志名中华，旌旗卫汉勋。</p>
		<p class="content">国风扬异域，锐骑卷胡尘！</p>
		<p class="content-params">{{ (params ? params.content: '' ) ? params.content : '' }}</p>
	</div>
</template>

<script>
export default {
	props: {
		params: {
			type: Object
		}
	}
}
</script>
<style scoped>
.modal-test .content {
	margin: 0;
	padding: 0;
	font-size: 14px;
	color: #555;
	line-height: 35px;
	font-weight: 650;
}

.modal-test .content-params {
	margin: 0;
	padding: 0;
	line-height: 35px;
	font-weight: 600;
}
</style>