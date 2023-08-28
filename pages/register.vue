<template>
  <v-card>
    <v-card-title>
      Buat Akun
    </v-card-title>
    <v-form @submit.prevent="false">
      <v-card-text>
        <v-text-field
          label="Email"
          placeholder="Alamat E-mail yang valid"
          type="email"
          required
        />
        <v-text-field 
          label="Username"
          placeholder="Ketik Username (hanya boleh angka, huruf, serta simbol titik dan underscore)"
          required
        />
        <pass-input
          label="Password"
          placeholder="Masukkan Password (mengandung huruf, angka, dan simbol)"
          name="password"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn type="submit" color="primary" block>Buat Akun</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'RegisterPage'
}
</script>