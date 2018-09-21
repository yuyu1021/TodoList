import api from '@api'

export default{
  state: {
    allmenu: ''
  },
  getters: {

  },
  mutations: {
    setMenu (state, menu) {
      state.allmenu = menu
    }
  },
  actions: {
    fetchMenu ({commit}) {
      api.getMenu(menu => {
        commit('setMenu', menu)
      })
    }
  }
}
