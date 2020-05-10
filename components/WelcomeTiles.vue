<template>
  <section class="welcome">
    <swiper :options="swiperOption" class="welcome__container">
      <swiper-slide v-for="item in pageBlocks" :key="item.navigation" class="welcome__tile">
        <nuxt-link
          :key="item.navigation"
          class="welcome__link"
          :to="'/page/' + item.navigationtitle.toLowerCase()"
        >
          <div class="welcome__tile--inner">
            <h3 class="welcome__callout-container">
              <span class="welcome__callout">
                {{ item.navigationtitle }}
              </span>
            </h3>
            <h2 class="welcome__title">
              {{ item.title }}
            </h2>
            <div v-if="item.colour.hex" class="welcome__image-container" :style="{ backgroundColor: item.colour.hex }">
              <img class="welcome__image" :src="item.image.url">
            </div>
            <div v-else class="welcome__image-container" :style="{ backgroundColor: '#fddddf' }">
              <img class="welcome__image" :src="item.image.url">
            </div>
          </div>
          <div class="welcome__button shadow">
            <img src="@/assets/img/next.svg">
          </div>
        </nuxt-link>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 25,
        breakpoints: {
          950: {
            slidesPerView: 3
          },
          560: {
            slidesPerView: 2
          }
        }
      }
    }
  },
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
  $parent: &;

  &__container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: calc(100% - 4rem);
  }

  .swiper-container {
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
    min-height: 420px;
    position: relative;
    text-align: center;
    width: 25%;

    &--inner {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      padding: 1.1rem;
      transition: 0.5s ease;
    }
  }

  &__callout-container {
    margin: 0;
  }

  &__callout {
    color: $color-primary;
    display: inline-block;
    font-size: 12px;
    font-family: $font-secondary;
    letter-spacing: 1px;
    position: relative;

    &::after {
      background-color: $color-primary;
      content: '';
      display: block;
      height: 2px;
      width: 0;
      transition: 0.2s ease;
    }
  }

  &__title {
    color: $color-white;
    font-family: $font-tertiary;
    font-size: 24px;
    letter-spacing: 1.5px;
    line-height: 27px;
    margin: 1.8rem 0;
  }

  &__image {
    object-fit: cover;
    max-width:100%;
    max-height:100%;
    transition: 0.2s ease;
    width: 100%;
  }

  &__image-container {
    overflow: hidden;
    margin: 0;
    padding: 0;
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
    transition: 0.2s ease;

    img {
      width: 14px;
    }
  }

  @media screen and (min-width: $breakpoint-sm) {
    &__tile {
      min-height: 380px;
    }

    &__title {
      font-size: 19px;
      letter-spacing: 1.5px;
      line-height: 21px;
    }
  }

  @media screen and (min-width: $breakpoint-lg) {
    &__container {
      width: calc(#{$width-md} + 5rem);
    }

    &__button {
      bottom: -50px;
      opacity: 0;
    }

    &__link {
      &:hover {
        #{$parent}__button {
          opacity: 1;
          bottom: -20px;
        }

        #{$parent}__callout {
          &::after {
            width: 100%;
          }
        }

        #{$parent}__tile--inner {
          box-shadow: 0 10px 32px -9px rgba(0,0,0,.5);
        }

        #{$parent}__image {
          transform: scale(1.5);
        }
      }
    }
  }
}
</style>
