<template>
  <div>
    <page-section :api-data="pageBlock" />
    <welcome-tiles />
  </div>
</template>

<script>
import WelcomeTiles from '@/components/WelcomeTiles'
import PageSection from '@/components/PageSection'

export default {
  layout: 'default',
  components: {
    WelcomeTiles,
    PageSection
  },
  computed: {
    pageBlocks () {
      return this.$store.state.pages.pageblocks.allPageblocks
    },
    pageBlock () {
      return this.$store.state.pages.pageblocks.allPageblocks[0]
    }
  }
}
</script>

<style>

</style>
