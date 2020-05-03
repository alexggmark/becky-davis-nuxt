<template>
  <div>
    <welcome-tiles :api-data="pageBlocks" />
    <template v-for="(item, index) in contentBlocks">
      <content-section v-if="index % 2 === 0" :key="index" :api-data="item" />
      <content-section v-else :key="index" :api-data="item" reversed="true" />
    </template>
    <!-- <content-section reversed="true" />
    <content-section />
    <content-section reversed="true" /> -->
  </div>
</template>

<script>
import WelcomeTiles from '@/components/WelcomeTiles'
import ContentSection from '@/components/ContentSection'

export default {
  layout: 'default',
  components: {
    WelcomeTiles,
    ContentSection
  },
  computed: {
    contentBlocks () {
      return this.$store.state.contentblocks.contentblocks.allContentblocks
    },
    pageBlocks () {
      return this.$store.state.pages.pageblocks.allPageblocks
    }
  }
}
</script>
