import api from "@api"

export default{
  namespaced: true,
  state: {
    projectItems: ''
  },
  getters: {
  },
  mutations: {
    setProjects(state, project) {
      state.projectItems = project
    },
  },
  actions: {
    fetchProjects({commit}) {
      api.getProjects(projects => {
        commit('setProjects', projects)
      })
    }
  }
}