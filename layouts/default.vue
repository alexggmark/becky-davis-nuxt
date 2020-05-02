<template>
  <div>
    <layout-header />
    <nuxt />
    <layout-footer />
  </div>
</template>

<script>
import LayoutHeader from '~/components/Header'
import LayoutFooter from '~/components/Footer'

export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

<style lang="scss">
.default-layout {
  color: red;
}
</style>
