<template>
  <div>
    <!-- <exit-icon v-if="iconName === 'exit'" />
    <contact-icon v-if="iconName === 'contact'" />
    <burger-icon v-if="iconName === 'burger'" /> -->
  </div>
</template>

<script>
// import ExitIcon from '@/assets/img/exit.svg'
// import BurgerIcon from '@/assets/img/burger.svg'
// import ContactIcon from '@/assets/img/contact.svg'

export default {
  components: {
    // ExitIcon,
    // ContactIcon,
    // BurgerIcon
  },
  props: {
    iconName: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
