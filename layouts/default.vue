<template>
  <v-app>
    <my-app-bar />
    <!-- <nav-drawer /> -->
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <foot-comp /> -->
    <speed-dial />
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
    }
  },
}
</script>

<style scoped>
  .v-application--wrap {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
