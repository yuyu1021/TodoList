<template>
  <div id="datesidebar">
    <section class="dateboard-wrap">
      <router-link to="/todaylist" class="dateboard" exact>
        <div class="week-row">
          <span class="week">{{ getWeek() }}</span>
        </div>
        <div class="date-row">
          <span class="month">{{ getMonth() }}</span>
          <span class="day">{{ getDate() }}</span>
          <span class="year">{{ getYear() }}</span>
        </div>
        <div class="todoinfo-row">
        {{ getTotal() }} TASKS TODAY - <span>{{ getDone() }} DONE</span>
        </div>
      </router-link>
    </section>
    <section class="datepicker-wrap"></section>
  </div>
</template>

<script>
export default {
  name: 'DateSidebar',
  data () {
    return {
      newDate: new Date()
    }
  },
  computed: {
    todos: function () {
      return this.$store.state.todos.todoItems
    }
  },
  methods: {
    fetchTodos: function () {
      this.$store.dispatch('fetchTodos')
    },
    getYear: function () {
      return this.newDate.getFullYear()
    },
    getMonth: function () {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return months[ this.newDate.getMonth() ]
    },
    getDate: function () {
      return this.newDate.getDate()
    },
    getWeek: function () {
      var weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      return weeks[ this.newDate.getDay() ]
    },
    getTotal: function () {
      return this.todos.length
    },
    getDone: function () {
      return this.$store.getters.getDoneLeng
    }
  },
  created () {
    this.fetchTodos()
  }
}
</script>

<style lang="sass">
  @import "@sass/base/_variable.sass"
  @import "@sass/base/_extend.sass"
  @import "@sass/layout/_date.sass"
</style>
