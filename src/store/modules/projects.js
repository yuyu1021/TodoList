import api from '@api'

export default{
  state: {
    projectItems: '',
    newProjectId: ''
  },
  getters: {
  },
  mutations: {
    setProjects (state, project) {
      state.projectItems = project
    },
    pushProject (state, project) {
      state.projectItems.push({
        id: state.newProjectId, name: project
      })
      state.newProjectId++
    },
    deleteProject (state, project) {
      const projectLocate = state.projectItems.indexOf(project)
      state.projectItems.splice(projectLocate, 1)
    },
    setNewProjectId (state, projects) {
      const maxId = Math.max(...projects.map(project => project.id))
      state.newProjectId = maxId + 1
    }
  },
  actions: {
    fetchProjects ({commit}) {
      api.getProjects(projects => {
        commit('setProjects', projects)
        commit('setNewProjectId', projects)
      })
    },
    deleteProject: function ({commit}, project) {
      commit('deleteProject', project)
      commit('deleteTodo', project.name)
    }
  }
}
