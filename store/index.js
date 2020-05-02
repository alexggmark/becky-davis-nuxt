export const state = () => ({
  data: []
})

export const mutations = {
  updateData (state, newValue) {
    console.log('Mutating')
    state.data = newValue.allContentblocks
  }
}

export const actions = {
  getData ({ commit }) {
    this.$apiRequest({
      query: `
        query MyQuery {
          allContentblocks {
            title
            content
          }
        }
      `
    })
      .then((res) => {
        commit('updateData', res)
      })
  }
}
