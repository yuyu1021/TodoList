import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@components/MainContent'
import TodoList from '@content/TodoList'
import ProjectList from '@content/ProjectList'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainContent,
      children: [
        {
          path: '',
          component: TodoList
        }
      ]
    },
    {
      path: '/projects',
      name: 'projects',
      component: MainContent,
      children: [
        {
          path: '',
          component: ProjectList
        },
        {
          path: ':projectname',
          name: 'project',
          component: TodoList
        }
      ]
    },
    {
      path: '/members',
      name: 'Members',
      component: MainContent
    },
    {
      path: '/settings',
      name: 'settings',
      component: MainContent
    },
    {
      path: '/todaylist',
      name: 'todaylist',
      component: MainContent,
      children: [
        {
          path: '',
          component: TodoList
        }
      ]
    }
  ],
  mode: 'history'
})
