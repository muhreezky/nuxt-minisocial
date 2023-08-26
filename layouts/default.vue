<template>
  <v-app dark>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawerOpen = !drawerOpen" />
      <v-app-bar-title>
        <nuxt-link style="color: #efefef; text-decoration: none" to="/">
          {{ title }}
        </nuxt-link>
      </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawerOpen" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5">
            MiniSocial
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list dense nav>
        <v-list-item v-for="link in links" :key="link[0]" :to="link[0]" nuxt>
          <v-list-item-content>
            <v-list-item-title>{{ link[1] }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <foot-comp />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      menuOpen: false,
      title: 'MiniSocial',
      drawerOpen: false,
      links: [
        ["/", "Home"],
        ["/login", "Login"],
        ["/register", "Register"]
      ]
    }
  }
}
</script>

<style>
  .v-application--wrap {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  
</style>
