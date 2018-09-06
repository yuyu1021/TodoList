<template>
  <transition>
    <div>
      <div class="alert-bg"></div>
      <div class="alert-wrap">
        <i class="material-icons" @click="$emit('alertStatus')">clear</i>
        <p class="alert-word">確定刪除{{ project.name }}專案?</p>
        <div class="btn-bar">
          <div class="btn blue" @click="deleteProject(project)">Confirm</div>
          <div class="btn blue-border" @click="$emit('alertStatus')">Cancel</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Alert',
  props: ['projectItem'],
  data () {
    return {
      projects: [
        {id: 1, 'name': 'Food'},
        {id: 2, 'name': 'Game'},
        {id: 3, 'name': 'Shopping'},
        {id: 4, 'name': 'Sport'}
      ],
      todos: [
        {id: 1, 'text': 'Eat something', 'project': 'Food', 'done': false},
        {id: 2, 'text': 'Play something', 'project': 'Game', 'done': false},
        {id: 3, 'text': 'Buy something', 'project': 'Shopping', 'done': true},
        {id: 4, 'text': 'Buy something2', 'project': 'Shopping', 'done': false}
      ],
      project: this.projectItem
    }
  },
  computed: {
  },
  methods: {
    deleteProject: function (project) {
      const projectLocate = this.projects.indexOf(project)
      this.projects.splice(projectLocate, 1)
      const _this = this
      this.todos.map(function (todo, index) {
        if (todo.project === project.name) {
          _this.todos.splice(index, 1)
        }
      })
      this.$emit('alertStatus')
    }
  }
}
</script>

<style lang="sass">
  @import "@sass/base/_variable.sass"
  @import "@sass/module/_alert.sass"
  @import "@sass/module/_button.sass"
</style>
