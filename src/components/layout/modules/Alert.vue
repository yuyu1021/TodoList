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
      project: this.projectItem
    }
  },
  computed: {
  },
  methods: {
    deleteProject: function (project) {
      this.$store.dispatch('deleteProject', project)
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
