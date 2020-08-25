<template>
  <div class="button-exam4">
  	<m-button round>默认圆角</m-button>
  	<m-button type="warning" round>警告圆角</m-button>
  	<m-button type="danger" round>危险圆角</m-button>
  	<m-button type="primary" round>默认圆角</m-button>
  	<m-button type="success" round>成功圆角</m-button>
  </div>
</template>

<script>
import MButton from '../../../../../packages/components/button/index.js'
export default {
	components: {
		MButton
	}
}
</script>

<style scoped>
</style>