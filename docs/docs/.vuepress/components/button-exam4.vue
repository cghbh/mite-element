<template>
  <div class="button-exam4">
  	<lay-button round>默认圆角</lay-button>
  	<lay-button type="warning" round>警告圆角</lay-button>
  	<lay-button type="danger" round>危险圆角</lay-button>
  	<lay-button type="primary" round>默认圆角</lay-button>
  	<lay-button type="success" round>成功圆角</lay-button>
  </div>
</template>

<script>
import LayButton from '../../../../packages/components/button/index.js'
export default {
	components: {
		LayButton
	}
}
</script>

<style scoped>
.button-exam4 {
	margin-top: 25px;
  margin-bottom: 25px;
}
</style>