<template>
  <div>
    Test
    {{ $store.state.contentblocks.contentblocks.allContentblocks }}
    <welcome-tiles />
    <template v-for="(item, index) in contentBlocks">
      <content-section v-if="index % 2 === 0" :key="index" :api-data="item" />
      <content-section v-else :key="index" :api-data="item" reversed="true" />
    </template>
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
    }
  }
}
</script>
