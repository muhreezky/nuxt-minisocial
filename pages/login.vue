<template>
  <v-card>
    <v-card-title>
      Login
    </v-card-title>
    <auth-form />
  </v-card>
</template>

<script>
  export default {
    name: 'LoginPage',
    middleware: 'authenticated'
  }
</script>
