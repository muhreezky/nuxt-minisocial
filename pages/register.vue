<template>
  <v-card>
    <v-card-title>
      Buat Akun
    </v-card-title>
    <auth-form register />
  </v-card>
</template>

<script>
export default {
  name: 'RegisterPage',
  middleware: 'authenticated',
}
</script>
