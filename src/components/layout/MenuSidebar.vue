<template>
  <div id="menusidebar">
    <div class="profile">
      <figure class="profile-img">
        <router-link to="/profile">
          <img src="@img/profile.jpg" alt="profile" class="img">
        </router-link>
      </figure>
      <div class="profile-name">Suzy Wu</div>
    </div>
    <ul class="menu-wrap">
      <li class="menu-list" v-for="menu in allmenu" :key="menu.id">
        <router-link :to="menu.link" class="link" :exact="menu.link === '/' ? true : false">
          <i class="material-icons">{{ menu.icon }}</i>
          <span class="menu-name">{{ menu.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuSidebar',
  data () {
    return {
      allmenu: [
        {id: 1, name: 'Home', icon: 'home', link: '/'},
        {id: 2, name: 'Projects', icon: 'folder', link: '/projects'},
        {id: 3, name: 'Members', icon: 'group', link: '/members'},
        {id: 4, name: 'Settings', icon: 'settings', link: '/settings'}
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
  @import "@sass/layout/_menu.sass"
</style>
