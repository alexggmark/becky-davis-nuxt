export const actions = {
  nuxtServerInit ({ dispatch }) {
    // This broke because of regular arrow function
    // const promisedItem = store => dispatch(`${store}/fetchAndSet`)

    return Promise.all([
      dispatch('navigation/fetchAndSet'),
      dispatch('pages/fetchAndSet'),
      dispatch('contentblocks/fetchAndSet')
    ])
  }
}
