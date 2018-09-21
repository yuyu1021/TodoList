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
    }
  },
  computed: {
    allmenu: function () {
      return this.$store.state.sidebar.allmenu
    }
  },
  methods: {
    fetchMenu: function () {
      this.$store.dispatch('fetchMenu')
    }
  },
  created () {
    this.fetchMenu()
  }
}
</script>

<style lang="sass">
  @import "@sass/base/_variable.sass"
  @import "@sass/layout/_menu.sass"
</style>
