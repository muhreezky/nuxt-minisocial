<template>
  <v-card>
    <v-card-title>
      Login
    </v-card-title>
    <v-card-text>
      <form @submit.prevent="false">
        <v-input />
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'LoginPage'
  }
</script>
