<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawerOpen = !drawerOpen" />
      <v-app-bar-title>
        {{ title }}
      </v-app-bar-title>
      <v-spacer />
      <dark-toggler />
    </v-app-bar>
    <v-navigation-drawer v-model="drawerOpen" app elevation="0">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5">
            {{ title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list dense nav>
        <v-list-item v-for="l in links" :key="l[0]" :to="l[0]" exact nuxt>
          <v-list-item-title>{{ l[1] }}</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="link in listLinks" :key="link[0]" :to="link[0]" nuxt exact>
          <v-list-item-content>
            <v-list-item-title>{{ link[1] }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="$auth.loggedIn" href="#" @click.prevent="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
