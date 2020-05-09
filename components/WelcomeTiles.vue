<template>
  <section class="welcome">
    <div class="welcome__container">
      <div v-for="item in pageBlocks" :key="item.navigation" class="welcome__tile">
        <nuxt-link
          :key="item.navigation"
          class="welcome__link"
          :to="'/page/' + item.navigationtitle.toLowerCase()"
        >
          <div class="welcome__tile--inner">
            <h3 class="welcome__callout">
              {{ item.navigationtitle }}
            </h3>
            <h2 class="welcome__title">
              {{ item.title }}
            </h2>
            <img v-if="item.colour.hex" class="welcome__image" :src="item.image.url" :style="{ backgroundColor: item.colour.hex }">
            <img v-else class="welcome__image" :src="item.image.url" :style="{ backgroundColor: '#fddddf' }">
          </div>
          <div class="welcome__button shadow">
            <img src="@/assets/img/next.svg">
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    pageBlocks () {
      const pageData = this.$store.state.pages.pageblocks.allPageblocks.filter((item) => {
        return item.blockincarousel === true
      })

      return pageData
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.welcome {
  &__container {
    @include container;
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }

  &__link {
    display: flex;
    text-decoration: none;
  }

  &__tile {
    background-color: $color-tertiary;
    border-radius: 3px;
    color: $color-white;
    display: flex;
    margin: 0 1.1rem;
    position: relative;
    text-align: center;
    width: 25%;

    &--inner {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      padding: 1.1rem;
    }
  }

  &__callout {
    color: $color-primary;
    font-size: 12px;
    font-family: $font-secondary;
    letter-spacing: 1px;
    margin: 0;
  }

  &__title {
    color: $color-white;
    font-family: $font-tertiary;
    font-size: 19px;
    letter-spacing: 1.5px;
    line-height: 21px;
    margin: 1.8rem 0;
  }

  &__image {
    height: 220px;
    object-fit: cover;
    width: 100%;
  }

  &__button {
    align-items: center;
    background-color: $color-primary;
    bottom: -20px;
    border-radius: 100%;
    display: flex;
    width: 35px;
    justify-content: center;
    height: 35px;
    position: absolute;
    right: 50%;
    transform: translateX(50%);

    img {
      width: 14px;
    }
  }

  &__selfie {
    background: url('~@/assets/img/selfie.png');
    background-color: $color-tertiary;
    background-size: cover;
    border-radius: 3px;
    color: $color-white;
    margin: 0 1.1rem;
    width: 25%;
  }
}
</style>
