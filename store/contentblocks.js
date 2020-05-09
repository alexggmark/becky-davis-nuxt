export const state = () => ({
  contentblocks: []
})

export const mutations = {
  set (state, apiData) {
    state.contentblocks = apiData
  }
}

export const actions = {
  async fetchAndSet ({ commit }) {
    const apiData = await this.$apiRequest({
      query: `
        query {
          allContentblocks {
            title,
            content,
            image {
              id,
              url
            }
          }
        }
      `
    })

    commit('set', apiData)
  }
}
