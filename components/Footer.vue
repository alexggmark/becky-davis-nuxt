<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__column">
        <div class="footer__title">
          Main Menu
        </div>
        <navigation-block />
      </div>
      <div class="footer__column">
        <div class="footer__title">
          Social
        </div>
        <ul>
          <li v-for="(item, index) in footerSocialMenu" :key="'social' + index">
            <a :href="item.url" target="_blank">
              {{ item.navigation }}
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__column">
        <div class="footer__title">
          Contact
        </div>
        <ul>
          <li v-for="(item, index) in footerContactMenu" :key="'contact' + index">
            {{ item.contactinfo }}
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import NavigationBlock from '@/components/Navigation'

export default {
  components: {
    NavigationBlock
  },
  computed: {
    footerSocialMenu () {
      return this.$store.state.navigation.navigationsocial.allNavigationsocials
    },
    footerContactMenu () {
      return this.$store.state.navigation.navigationcontact.allContactinfos
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.footer {
  background-color: $color-white;
  padding: 4rem 0;
  width: 100%;

  &__container {
    @include container;
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  &__column {
    padding: 0 1rem;
    width: calc(100% - 2rem);
  }

  &__title {
    border-bottom: 2px solid $color-black;
    font-family: 'Font2';
    font-size: 20px;
    padding: 0.75rem 0;
  }

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      padding: 0.35rem 0;
    }

    a {
      color: $color-black;
      text-decoration: none;

      &:hover {
        color: $color-primary;
      }
    }
  }

  @media screen and (min-width: $breakpoint-md) {
    &__container {
      align-items: flex-start;
      flex-flow: row;
    }

    &__column {
      width: 33%;
    }
  }
}
</style>
