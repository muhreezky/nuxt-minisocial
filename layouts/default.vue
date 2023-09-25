<template>
  <v-app>
    <my-app-bar />
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <speed-dial />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped>
  .v-application--wrap {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
