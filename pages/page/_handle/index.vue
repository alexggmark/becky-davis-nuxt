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
  data () {
    return {
      handle: this.$route.params.handle
    }
  },
  computed: {
    pageBlocks () {
      return this.$store.state.pages.pageblocks.allPageblocks
    },
    pageBlock () {
      return this.$store.state.pages.pageblocks.allPageblocks.find((item) => {
        return item.navigationtitle.toLowerCase() === this.handle.toLowerCase()
      })
    }
  },
  mounted () {
    console.log(this.handle)
  }
}
</script>

<style>

</style>
