<template>
  <div>
    {{ data }}
    <welcome-tiles />
    <content-section />
    <content-section reversed="true" />
    <content-section />
    <content-section reversed="true" />
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
    data () {
      return this.$store.state.data
    }
  },
  created () {
    this.$store.dispatch('getData')
  }
}
</script>
