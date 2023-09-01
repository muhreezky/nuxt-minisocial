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
          :rules="form.email.rules"
          placeholder="Masukkan alamat e-mail atau username anda"
          required 
        />
        <pass-input 
          v-model="form.password.value"
          name="password"
          label="Password"
          :rules="form.password.rules"
          placeholder="Masukkan password akun anda"
          required
        />
        <v-alert v-if="!!error" type="error" dismissible>
          {{ error }}
        </v-alert>
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
    middleware: 'authenticated',
    data() {
      return {
        form: {
          email: {
            value: '',
            rules: [v => !!v || 'Isi dengan E-mail atau Username']
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
          this.error = 'Login gagal, mungkin data anda salah';
        }
      }
    },
  }
</script>
