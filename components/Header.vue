<template>
  <header class="header">
    <div class="header__container">
      <div class="header__burger-menu">
        <img src="@/assets/img/burger.svg" @click="openMobileMenu">
      </div>
      <div class="header__logo">
        <nuxt-link to="/">
          becky<span class="header__logo--highlight">davis</span>
        </nuxt-link>
      </div>
      <div class="header__navigation">
        <navigation-block />
        <button class="header__contact">
          Contact me
        </button>
      </div>
      <div class="header__burger-contact">
        <img src="@/assets/img/contact.svg">
      </div>
    </div>
    <div ref="mobilemenu" class="header__mobile-menu">
      <div class="header__mobile-close" @click="openMobileMenu">
        X
      </div>
      <navigation-block />
    </div>
  </header>
</template>

<script>
import NavigationBlock from '@/components/Navigation'

export default {
  components: {
    NavigationBlock
  },
  methods: {
    openMobileMenu () {
      if (this.$refs.mobilemenu.classList.contains('is-active')) {
        this.$refs.mobilemenu.classList.remove('is-active')
        return
      }
      this.$refs.mobilemenu.classList.add('is-active')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.header {
  background-color: $color-white;
  width: 100%;

  &__container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: calc(100% - 3rem);
    padding: 1rem 0;
  }

  &__logo {
    font-family: $font-secondary;
    font-size: 21px;
    letter-spacing: 1.5px;

    a {
      color: inherit;
      text-decoration: none;
    }

    &--highlight {
      color: $color-primary;
    }
  }

  &__navigation {
    align-items: center;
    display: none;
    font-family: $font-secondary;
    text-transform: lowercase;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      float: left;
      font-size: 14px;
      margin: 0 1.5rem;
    }

    a {
      color: $color-black;
      text-decoration: none;

      &:hover {
        color: $color-primary;
      }
    }
  }

  &__contact {
    background-color: $color-primary;
    border: 0;
    border-radius: 3px;
    color: $color-white;
    font-family: $font-secondary;
    font-size: 14px;
    margin-left: 1.5rem;
    padding: 0.75rem 1.5rem;
  }

  &__burger-menu {
    display: block;
    width: 25px;
  }

  &__burger-contact {
    display: block;
    width: 20px;
  }

  &__mobile-menu {
    background-color: rgba(255, 255, 255, 0.95);
    left: -2000px;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    transition: left 0.5s ease;
    z-index: 9999;

    &.is-active {
      left: 0;
    }

    ul {
      list-style-type: none;
      padding-left: 0;
    }

    a {
      color: $color-black;
      text-decoration: none;
    }

    li {
      font-size: 1.5rem;
      padding: 1rem 2rem;

      &:not(:last-child) {
        border-bottom: 1px solid #aaaaaa;
      }
    }
  }

  &__mobile-close {
    position: absolute;
    right: 15px;
    top: 15px;
  }

  @media screen and (min-width: $breakpoint-md) {
    &__navigation {
      display: flex;
    }

    &__burger-menu {
      display: none;
    }

    &__burger-contact {
      display: none;
    }

    &__mobile-menu {
      display: none;
    }
  }
}
</style>
