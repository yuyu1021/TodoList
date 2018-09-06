import Vue from 'vue'
import Vuex from 'vuex'
import projects from '@storeModules/projects'
import todos from '@storeModules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects,
    todos
  }
})
