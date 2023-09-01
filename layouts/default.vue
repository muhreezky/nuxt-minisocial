<template>
  <v-app>
    <nav-comp />
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <foot-comp />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DefaultLayout',
  data() {
    return {
      menuOpen: false,
      title: 'MiniSocial',
      drawerOpen: false,
      links: [
        ["/", "Home"],
        ["/about", "Tentang"]
      ],
      authedLinks: [
        ["/me", "Dashboard"]  
      ],
      guestLinks: [
        ["/login", "Login"],
        ["/register", "Register"], 
      ]
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
    listLinks () {
      return this.$auth.loggedIn ? this.authedLinks : this.guestLinks;
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    }
  }
}
</script>

<style scoped>
  .v-application--wrap {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
