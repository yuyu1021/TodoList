<template>
  <div>
    <transition-group class="todolist" name="todolist" tag="ul">
      <li v-for="todo in todosArr" :key="todo.id" v-if="todo.project === item.name" class="todoitem" :class="todo.done ? 'done': ''">
        <span class="tododate">2018/09/03</span>
        <span class="todotext">{{ todo.text }}</span>
        <div class="tool-box" v-if="$route.name">
          <div class="ck" @click="toggleStatus(todo)">
            <i class="material-icons">{{ todo.done ? 'check_box' : 'check_box_outline_blank' }}</i>
          </div>
          <i class="material-icons" @click="deleteItem(todo)">delete</i>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: ['productItem'],
  data () {
    return {
      todos: [
        {id: 1, 'text': 'Eat something', 'project': 'Food', 'done': false},
        {id: 2, 'text': 'Play something', 'project': 'Game', 'done': false},
        {id: 3, 'text': 'Buy something', 'project': 'Shopping', 'done': true},
        {id: 4, 'text': 'Buy something2', 'project': 'Shopping', 'done': false}
      ],
      item: this.product,
      filterStatus: false
    }
  },
  computed: {
    todosArr: function () {
      if (!this.filterStatus) {
        return this.todos
      } else {
        var sortArr = []
        var doneArr = this.todos.filter(function (todo) { return todo.done })
        var undoneArr = this.todos.filter(function (todo) { return !todo.done })

        sortArr = [...undoneArr, ...doneArr]
        return sortArr
      }
    }
  },
  methods: {
    deleteItem: function (todo) {
      var delItem = this.todos.indexOf(todo)
      this.todos.splice(delItem, 1)
    },
    toggleStatus: function (todo) {
      todo.done = !todo.done
      this.filterStatus = true
    }
  }
}
</script>

<style lang="sass">
  @import "@sass/base/_variable.sass"
  @import "@sass/base/_extend.sass"
  @import "@sass/layout/_content.sass"
</style>
