<template>
  <section class="page-intro" :style="{ background: 'linear-gradient(90deg, ' + hex + ' 50%, #F6F6F6 50%)' }">
    <div class="page-intro__container">
      <div class="page-intro__image-block" :style="{ backgroundColor: hex }">
        <img :src="apiData.image.url" class="page-intro__image">
      </div>
      <div class="page-intro__content-block">
        <p class="page-intro__content-text">
          {{ apiData.introtext }}
          {{ introText }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    apiData: {
      type: Object,
      required: true
    }
  },
  computed: {
    hex () {
      if (!this.apiData.colour) {
        return '#fddddf'
      }
      return this.apiData.colour.hex
    },
    introText () {
      if (!this.apiData.introtext) {
        return this.apiData.title
      }
      return this.apiData.introtext
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.page-intro {
  &__container {
    @include container;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  &__image {
    max-width: 200px;
  }

  &__image-block {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 2rem;
    width: 100%;
  }

  &__content-block {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    padding: 2rem;
    width: 100%;
  }

  @media screen and (max-width: $breakpoint-md) {
    background: none!important;
  }

  @media screen and (min-width: $breakpoint-md) {
    &__container {
      flex-wrap: nowrap;
    }

    &__image-block {
      width: 50%;
    }

    &__content-block {
      width: 50%;
    }

    &__content-text {
      padding: 1rem 4rem;
    }
  }
}
</style>
