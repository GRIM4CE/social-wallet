<template>
<div class="container">
  <appHeader/>
  <nuxt/>
  <appFooter/>
</div>
</template>

<script>
import appHeader from '~/components/app-header.vue'
import appFooter from '~/components/app-footer.vue'

export default {
  components: {
    appHeader,
    appFooter
  }
}
</script>

<style lang="scss">
@import 'assets/base.scss';
</style>
