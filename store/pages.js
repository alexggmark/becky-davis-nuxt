export const state = () => ({
  pageblocks: []
})

export const mutations = {
  set (state, apiData) {
    console.log(apiData)
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
            introtext,
            content,
            colour {
              hex
            },
            image {
              id,
              url
            },
            blockincarousel
          }
        }
      `
    })

    commit('set', apiData)
  }
}
