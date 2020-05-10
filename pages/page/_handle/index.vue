<template>
  <div>
    <page-intro :api-data="pageBlock" />
    <page-section :api-data="pageBlock" />
    <!-- <welcome-tiles /> -->
  </div>
</template>

<script>
// import WelcomeTiles from '@/components/WelcomeTiles'
import PageSection from '@/components/PageSection'
import PageIntro from '@/components/PageIntro'

export default {
  layout: 'default',
  components: {
    // WelcomeTiles,
    PageIntro,
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
  }
  // transition: 'tran'
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
