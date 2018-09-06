<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import MainContent from '@components/MainContent'

export default {
  name: 'App',
  components: {
    MainContent
  }
}
</script>

<style lang="sass">
  @import "@sass/base/_variable.sass"
  @import "@sass/base/_preset.sass"
  @import "@sass/base/_config.sass"
</style>
