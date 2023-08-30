<template>
  <v-card>
    <v-card-title>
      Buat Akun
    </v-card-title>
    <v-form @submit.prevent="register" ref="frm">
      <v-card-text>
        <v-text-field
          v-model="form.email.value"
          :rules="form.email.rules"
          label="Email"
          placeholder="Alamat E-mail yang valid"
          type="email"
          required
        />
        <v-text-field 
          v-model="form.username.value"
          :rules="form.username.rules"
          label="Username"
          placeholder="Ketik Username hanya boleh angka dan huruf"
          required
        />
        <pass-input
          v-model="form.password.value"
          :rules="form.password.rules"
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
import { emailRegex, passwordRegex } from '~/utils/regex';

export default {
  name: 'RegisterPage',
  data: () => ({
    form: {
      email: {
        value: '',
        rules: [
          v => !!v || 'E-mail harus diisi',
          v => emailRegex.test(v) || 'Ini bukan alamat e-mail'
        ]
      },
      username: {
        value: '',
        rules: [
          v => !!v || 'Username harus diisi',
          v => v.length >= 3 || 'Username min. 3 karakter',
          v => v.length <= 15 || 'Username maks. 15 karakter',
          v => !(/[^a-z0-9]/i).test(v) || 'Username hanya boleh ada huruf dan angka',
        ]
      },
      password: {
        value: '',
        rules: [
          v => !!v || 'Password harus diisi',
          v => passwordRegex.test(v) || 'Password harus ada huruf, angka, dan simbol'
        ]
      }
    }
  }),
  methods: {
    async register () {
      this.$refs.form.validate();
      console.log(this.form);
      await this.$axios.post('/auth/register', {
        email: this.email.value,
        password: this.password.value,
        username: this.username.value
      });

      this.$router.push('/');
    }
  }
}
</script>
