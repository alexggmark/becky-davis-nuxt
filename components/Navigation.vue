<template>
  <ul>
    <li v-for="item in navigation" :key="item.navigation">
      <nuxt-link
        v-if="item.link && item.link.navigationtitle"
        :to="'/page/' + item.link.navigationtitle.toLowerCase()"
      >
        {{ item.navigation }}
      </nuxt-link>
      <nuxt-link
        v-else
        :to="'/'+ item.navigation.toLowerCase()"
      >
        {{ item.navigation }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    navigation () {
      return this.$store.state.navigation.navigationlist.allNavigations
    }
  }
}
</script>
