<template>
  <v-card>
    <v-card-title>
      Login
    </v-card-title>
    <form @submit.prevent="login">
      <v-card-text>
        <v-text-field 
          v-model="form.email.value"
          name="email" 
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
  import { emailRegex } from '~/utils/regex';

  export default {
    name: 'LoginPage',
    middleware: 'authenticated',
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
            rules: [v => !!v || 'Password wajib diisi']
          }
        },
        error: ''
      };
    },
    methods: {
      async login () {
        try {
          await this.$auth.loginWith('local', {
            data: {
              email: this.form.email.value,
              password: this.form.password.value
            }
          });

          this.$router.push('/me');
        } catch (e) {
          this.error = e.data.response.message;
        }
      }
    }
  }
</script>
