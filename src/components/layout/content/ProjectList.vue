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
import Alert from '@module/Alert'

export default {
  name: 'ProjectList',
  components: {
    Alert
  },
  data () {
    return {
      projects: [
        {id: 1, 'name': 'Food'},
        {id: 2, 'name': 'Game'},
        {id: 3, 'name': 'Shopping'},
        {id: 4, 'name': 'Sport'}
      ],
      projectAlert: false,
      deleteProject: ''
    }
  },
  computed: {
  },
  methods: {
    showAlert (project) {
      this.projectAlert = true
      this.deleteProject = project
    }
  }
}
</script>

<style lang="sass">
  @import "@sass/base/_variable.sass"
  @import "@sass/base/_extend.sass"
  @import "@sass/layout/_content.sass"
</style>
