<template>
  <v-card>
    <v-card-title>
      Sosialisasikan diri anda di internet
    </v-card-title>
    <v-card-subtitle>
      Mulailah mengenal satu sama lain, dari berbagai penjuru dunia
    </v-card-subtitle>
    <v-card-actions>
      <nuxt-link style="width: 100%;" to="/login">
        <v-btn block color="primary" accent="3">
          Mulai
        </v-btn>
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
