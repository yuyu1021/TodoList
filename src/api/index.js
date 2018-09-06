const _projectItems = [
  {id: 1, 'name': 'Food'},
  {id: 2, 'name': 'Game'},
  {id: 3, 'name': 'Shopping'},
  {id: 4, 'name': 'Sport'}
]

const _todoItems = [
  {id: 1, 'text': 'Eat something', 'project': 'Food', 'done': false},
  {id: 2, 'text': 'Play something', 'project': 'Game', 'done': false},
  {id: 3, 'text': 'Buy something', 'project': 'Shopping', 'done': true},
  {id: 4, 'text': 'Buy something2', 'project': 'Shopping', 'done': false}
]

export default {
  getProjects (cb) {
    setTimeout(() => cb(_projectItems), 100)
  },
  getTodos (cb) {
    setTimeout(() => cb(_todoItems), 100)
  }
}