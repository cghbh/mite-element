<template>
  <div class="button-exam4">
  	<de-button round>默认圆角</de-button>
  	<de-button type="warning" round>警告圆角</de-button>
  	<de-button type="danger" round>危险圆角</de-button>
  	<de-button type="primary" round>默认圆角</de-button>
  	<de-button type="success" round>成功圆角</de-button>
  </div>
</template>

<script>
import DeButton from '../../../../packages/components/button/index.js'
export default {
	components: {
		DeButton
	}
}
</script>

<style scoped>
</style>