export const state = () => ({
  navigationlist: []
})

export const mutations = {
  set (state, apiData) {
    state.navigationlist = apiData
  }
}

export const actions = {
  async fetchAndSet ({ commit }) {
    const apiData = await this.$apiRequest({
      query: `
        query {
          allNavigations {
            navigation,
            link {
              navigationtitle
            }
          }
        }
      `
    })

    commit('set', apiData)
  }
}
