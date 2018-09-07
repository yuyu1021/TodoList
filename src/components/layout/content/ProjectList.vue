<template>
  <div>
    <Alert v-if="projectAlert" :projectItem="deleteProject" @alertStatus="projectAlert = false"/>
    <div class="todo-wrap">
      <h1 class="title">Project List</h1>
      <div class="project-wrap">
          <div class="project-box" v-for="project in projects" :key="project.id">
            <router-link :to="{ name: 'project', params: { projectname: project.name }}">
              <i class="material-icons" @click.prevent="showAlert(project);">clear</i>
              <div class="project-name">{{ project.name }}</div>
              <div class="project-date">2018/09/04</div>
            </router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@modules/Alert'

export default {
  name: 'ProjectList',
  components: {
    Alert
  },
  data () {
    return {
      projectAlert: false,
      deleteProject: ''
    }
  },
  computed: {
    projects: function () {
      return this.$store.state.projects.projectItems
    }
  },
  methods: {
    fetchProjects: function () {
      this.$store.dispatch('fetchProjects')
    },
    showAlert: function (project) {
      this.projectAlert = true
      this.deleteProject = project
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
</style>
