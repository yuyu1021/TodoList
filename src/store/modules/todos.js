import api from "@api"

export default{
  namespaced: true,
  state: {
    todoItems: ''
  },
  getters: {
  },
  mutations: {
    setTodos(state, todos) {
      state.todoItems = todos
    },
  },
  actions: {
    fetchTodos({commit}) {
      api.getTodos(todos => {
        commit('setTodos', todos)
      })
    }
  }
}