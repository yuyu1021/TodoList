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

const _menu = [
  {id: 1, name: 'Home', icon: 'home', link: '/'},
  {id: 2, name: 'Projects', icon: 'folder', link: '/projects'},
  {id: 3, name: 'Members', icon: 'group', link: '/members'},
  {id: 4, name: 'Settings', icon: 'settings', link: '/settings'}
]

export default {
  getProjects (cb) {
    setTimeout(() => cb(_projectItems), 100)
  },
  getTodos (cb) {
    setTimeout(() => cb(_todoItems), 100)
  },
  getMenu (cb) {
    setTimeout(() => cb(_menu), 100)
  }
}
