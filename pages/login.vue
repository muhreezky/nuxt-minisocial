<template>
  <v-card>
    <v-card-title>
      Login
    </v-card-title>
    <form @submit.prevent="false">
      <v-card-text>
        <v-text-field 
          v-model="form.email.value"
          name="email" 
          type="email" 
          label="Email"
          placeholder="Masukkan alamat e-mail terdaftar"
          required 
        />
        <pass-input 
          v-model="form.password.value"
          name="password"
          label="Password"
          placeholder="Masukkan password akun anda"
          required
        />
      </v-card-text>
      <v-card-actions>
        <v-btn type="submit" block color="primary">
          Login
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        form: {
          email: {
            value: '',
            rules: [
              v => !!v || 'E-mail wajib diisi',
              v => (/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm).test(v) || 'Alamat e-mail harus valid'
            ]
          },
          password: {
            value: '',
            rules: [
              v => !!v || 'Password wajib diisi',
            ]
          }
        }
      }
    },
    methods: {
      async login () {

      }
    }
  }
</script>
