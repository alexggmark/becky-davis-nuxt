export const state = () => ({
  pageblocks: []
})

export const mutations = {
  set (state, apiData) {
    state.pageblocks = apiData
  }
}

export const actions = {
  async fetchAndSet ({ commit }) {
    const apiData = await this.$apiRequest({
      query: `
        query {
          allPageblocks {
            navigationtitle,
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
