<template>
  <div>
    <h1>Doccy</h1>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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

<style>

</style>
