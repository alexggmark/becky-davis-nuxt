<template>
  <section class="page-section">
    <div class="page-section__content">
      <div class="page-section__container">
        <div class="page-section__container-inner">
          <h1 class="page-section__title">
            {{ apiData.title }}
          </h1>

          <p v-html="render(apiData.content)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  props: {
    apiData: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageData () {
      if (!this.apiData.pageimage) { return this.apiData.image }

      return this.apiData.pageimage
    }
  },
  methods: {
    render (text) {
      const md = new MarkdownIt()
      return md.render(text)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.page-section {
  background-color: $color-white;

  &__container {
    @include container;
  }

  &__container-inner {
    padding: 3rem 2rem;
  }

  &__banner {
    background-position: center;
    background-size: cover;
    padding-top: 35%;
    position: relative;
  }

  &__banner-overlay {
    align-items: flex-end;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &__content {
    padding-bottom: 2rem;

    img {
      display: block;
      margin: 1rem 0;
      margin: 0 auto;
      max-width: 100%;
    }
  }

  &__title {
    color: $color-black;
    font-family: $font-secondary;
    font-size: 36px;
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 51px;
    margin: 1rem 0 3rem;
  }

  @media screen and (min-width: $breakpoint-md) {
    &__banner {
      padding-top: 20%;
    }

      &__content {
        padding-bottom: 2rem;

        img {
          max-width: 50%;
        }
      }

    &__container-inner {
      padding: 5rem 5rem;
    }

      &__title {
      font-size: 45px;
    }
  }
}
</style>
