<template>
  <div>
    <div class="btn-bar add">
      <i class="material-icons" :class="{ active: isActive }" @click="showAddForm()">add</i>
      <div class="add-alert" :class="{ active: isActive }">
        <form @submit.prevent="(newProject !== '' || projectSelected !== '') && newText !== '' ? addItem() : ''">
          <div class="add-row" v-if="!$route.params.projectname">
            <span class="title">New Project</span>
            <input type="text" class="input" v-model="newProject" :disabled="projectSelected !== ''">
          </div>
          <div class="add-row">
            <span class="title">Exist Project</span>
            <select v-model="projectSelected" :disabled="newProject !== ''" class="select">
              <option value="" disabled>Please select one</option>
              <option v-for="project in projects" :key="project.id" :value="project.id">{{ project.name }}</option>
            </select>
          </div>
          <div class="add-row">
            <span class="title">Date</span>
            <input type="text" class="input" value="2018/9/4">
          </div>
          <div class="add-row">
            <span class="title">Todo Title</span>
            <input type="text" class="input" v-model="newText" @keyup.enter="submit">
          </div>
          <button type="submit" class="btn blue-border">Add</button>
        </form>
      </div>
    </div>
    <div class="search-bar" v-if="$route.path.length <= 1">
      <span class="search-box">
        <form @submit.prevent="search()">
          <input type="text" ref="searchInput" class="search-input" @keyup.enter="search()">
          <i class="material-icons">search</i>
        </form>
      </span>
    </div>
    <div class="todo-wrap">
      <h1 class="title">Todo List</h1>
      <div v-for="project in projects" :key="project.id" v-if="findProjects(project)">
        <router-link :to="{ name: 'project', params: { projectname: project.name }}" class="project-label" v-if="!$route.params.projectname">{{ project.name }}</router-link>
        <label class="project-label" v-else>{{ $route.params.projectname }}</label>
        <transition-group class="todolist" name="todolist" tag="ul">
          <li v-for="todo in todosArr" :key="todo.id" v-if="todo.project === project.name" class="todoitem" :class="todo.done ? 'done': ''">
            <span class="tododate">2018/09/03</span>
            <span class="todotext">{{ todo.text }}</span>
            <div class="tool-box" v-if="$route.path.length > 1">
              <div class="ck" @click="toggleStatus(todo)">
                <i class="material-icons">{{ todo.done ? 'check_box' : 'check_box_outline_blank' }}</i>
              </div>
              <i class="material-icons" @click="deleteItem(todo)">delete</i>
            </div>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      newText: '',
      newProject: '',
      projectSelected: '',
      isActive: false,
      filterStatus: false
    }
  },
  computed: {
    todos: function () {
      return this.$store.state.todos.todoItems
    },
    projects: function () {
      return this.$store.state.projects.projectItems
    },
    todosArr: function () {
      if (!this.filterStatus) {
        return this.todos
      } else {
        return this.$store.getters.sortTodos
      }
    }
  },
  methods: {
    fetchProjects: function () {
      this.$store.dispatch('fetchProjects')
    },
    findProjects: function (project) {
      if (this.$route.params.projectname) {
        return this.$route.params.projectname === project.name
      } else {
        return this.todos.find(todo => todo.project === project.name)
      }
    },
    showAddForm: function () {
      this.isActive = !this.isActive
      if (this.isActive) {
        var _this = this
        document.body.addEventListener('click', function (e) {
          if (e.target.className !== 'add' && !e.target.closest('.add')) {
            _this.isActive = false
          }
        })
      }
    },
    addItem: function () {
      this.$store.dispatch('addTodoItem', [ this.newText, this.projectSelected, this.newProject ]).then(() => {
        this.newProject = ''
        this.newText = ''
        this.projectSelected = ''
      })
    },
    deleteItem: function (todo) {
      this.$store.commit('deleteTodoItem', todo)
    },
    toggleStatus: function (todo) {
      this.$store.commit('toggleTodo', todo)
      this.filterStatus = true
    },
    search: function () {
    }
  },
  created () {
    this.fetchProjects()
  }
}
</script>

<style lang="sass">
  @import "@sass/base/_variable.sass"
  @import "@sass/base/_extend.sass"
  @import "@sass/layout/_content.sass"
  @import "@sass/module/_button.sass"
</style>
