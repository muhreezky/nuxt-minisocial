<template>
  <v-card>
    <v-card-title>
      Login
    </v-card-title>
    <form @submit.prevent="false">
      <v-card-text>
        <v-text-field 
          name="email" 
          type="email" 
          label="Email"
          placeholder="Masukkan alamat e-mail terdaftar"
          required 
        />
        <pass-input 
          name="password"
          label="Password"
          placeholder="Masukkan password akun anda"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn block color="primary">
          Login
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
  export default {
    name: 'LoginPage'
  }
</script>
