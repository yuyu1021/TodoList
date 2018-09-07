import api from '@api'

export default{
  state: {
    todoItems: '',
    newTodoId: ''
  },
  getters: {
    sortTodos (state) {
      var sortArr = []
      var doneArr = state.todoItems.filter(function (todo) { return todo.done })
      var undoneArr = state.todoItems.filter(function (todo) { return !todo.done })

      sortArr = [...undoneArr, ...doneArr]
      return sortArr
    },
    getDoneLeng (state) {
      return state.todoItems.filter(function (item) { return item.done }).length
    }
  },
  mutations: {
    setTodos (state, todos) {
      state.todoItems = todos
    },
    pushTodo (state, [ text, project ]) {
      state.todoItems.push({
        id: state.newTodoId, text: text, project: project, done: false
      })
      state.newTodoId++
    },
    toggleTodo (state, todo) {
      todo.done = !todo.done
    },
    deleteTodo (state, projectName) {
      state.todoItems.map(function (todo, index) {
        if (todo.project === projectName) {
          state.todoItems.splice(index, 1)
        }
      })
    },
    deleteTodoItem (state, todo) {
      var delItem = state.todoItems.indexOf(todo)
      state.todoItems.splice(delItem, 1)
    },
    setNewTodoId (state, todos) {
      const maxId = Math.max(...todos.map(todo => todo.id))
      state.newTodoId = maxId + 1
    }
  },
  actions: {
    fetchTodos ({commit}) {
      api.getTodos(todos => {
        commit('setTodos', todos)
        commit('setNewTodoId', todos)
      })
    },
    addTodoItem ({commit, rootState}, [ newText, oldProject, newProject ]) {
      return new Promise((resolve, reject) => {
        if (oldProject !== '') {
          const getProject = rootState.projects.projectItems.find(project => project.id === oldProject)
          if (getProject) {
            commit('pushTodo', [ newText, getProject.name ])
          }
        } else if (newProject !== '') {
          commit('pushTodo', [ newText, newProject ])
          commit('pushProject', newProject)
        }
        resolve()
      })
    }
  }
}
