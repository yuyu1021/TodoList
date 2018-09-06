<template>
  <div>
    <MenuSidebar/>
    <div id="maincontent">
      <router-view/>
    </div>
    <DateSidebar/>
  </div>
</template>

<script>
import MenuSidebar from '@components/MenuSidebar'
import DateSidebar from '@components/DateSidebar'

export default {
  name: 'MainContent',
  components: {
    MenuSidebar,
    DateSidebar
  },
  data () {
    return {
      todos: [
        {id: 1, 'text': 'Eat something', 'done': false},
        {id: 2, 'text': 'Play something', 'done': false},
        {id: 3, 'text': 'Buy something', 'done': true}
      ]
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="sass">
  @import "@sass/base/_variable.sass"
  @import "@sass/base/_extend.sass"
  @import "@sass/layout/_content.sass"
</style>
