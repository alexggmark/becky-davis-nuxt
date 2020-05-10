export const state = () => ({
  navigationlist: [],
  navigationsocial: [],
  navigationcontact: []
})

export const mutations = {
  set (state, [apiData, navigationContainer]) {
    state[navigationContainer] = apiData
  }
}

export const actions = {
  async fetchAndSet ({ commit }) {
    try {
      const apiDataMain = await this.$apiRequest({
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

      const apiDataSocial = await this.$apiRequest({
        query: `
          query {
            allNavigationsocials {
              navigation,
              url
            }
          }
        `
      })

      const apiDataContact = await this.$apiRequest({
        query: `
          query {
            allContactinfos {
              contactinfo
            }
          }
        `
      })

      commit('set', [apiDataMain, 'navigationlist'])
      commit('set', [apiDataSocial, 'navigationsocial'])
      commit('set', [apiDataContact, 'navigationcontact'])
    } catch (err) {
      console.error(err)
    }
  }
}
