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
          label="Email atau Username"
          placeholder="Masukkan alamat e-mail atau username anda"
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
  import { emailRegex, passwordRegex } from '~/utils/regex';

  export default {
    name: 'LoginPage',
    data() {
      return {
        form: {
          email: {
            value: '',
            rules: [
              v => !!v || 'E-mail wajib diisi',
              v => emailRegex.test(v) || 'Alamat e-mail harus valid'
            ]
          },
          password: {
            value: '',
            rules: [
              v => !!v || 'Password wajib diisi',
              v => passwordRegex.test(v)
                || 'Password harus ada angka, huruf, dan simbol'
            ]
          }
        }
      }
    },
    methods: {
      async login () {
        await this.$auth.loginWith('local')
      }
    }
  }
</script>
