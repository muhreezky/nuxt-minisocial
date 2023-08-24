<template>
  <v-app dark>
    <v-app-bar app>
      <v-app-bar-title>
        <nuxt-link style="color: #efefef; text-decoration: none" to="/">
          {{ title }}
        </nuxt-link>
      </v-app-bar-title>
    </v-app-bar>
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
    }
  }
}
</script>
