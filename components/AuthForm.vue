<template>
	<v-form @submit.prevent="submitForm">
		<v-card-text>
			<v-text-field
				v-model="email"
				:rules="rules.email"
				label="Email"
				placeholder="Alamat E-mail yang valid"
				type="email"
				required
			/>
			<v-text-field
				v-if="register"
				v-model="username"
				:rules="rules.username"
				label="Username"
				placeholder="Username hanya boleh angka dan huruf"
				required
			/>
			<pass-input
				v-model="password"
				:rules="rules.password"
				label="Password"
				placeholder="Masukkan Password (mengandung huruf, angka, dan simbol)"
				name="password"
			/>
			<pass-input
				v-if="register"
				:rules="rules.confPass"
				label="Confirm Password"
				placeholder="Ketik ulang password anda di sini"
			/>
			<v-alert v-if="!!error" type="error" dismissible>
				{{ error }}
			</v-alert>
		</v-card-text>
		<v-card-actions>
			<v-btn type="submit" color="primary" block>{{ register ? "Buat Akun" : "Login" }}</v-btn>
		</v-card-actions>
	</v-form>
</template>

<script>
import { validateEmail, validatePassword, validateMinLength, validateMaxLength, validateUsername } from '~/utils/regex';

export default {
	name: 'AuthForm',
	props: {
		register: Boolean,
	},
	data() {
		return {
			email: '',
			username: '',
			password: '',
			error: '',
			rules: {
				email: [
					(v) => !!v || 'E-mail harus diisi',
					(v) => validateEmail(v),
				],
				password: [
					(v) => !!v || 'Password harus diisi',
					(v) => validateMinLength(v, 6),
					(v) => validateMaxLength(v, 15),
					(v) => validatePassword(v)
				],
				username: [
					(v) => !!v || 'Username harus diisi',
					(v) => validateMinLength(v, 4),
					(v) => validateMaxLength(v, 20),
					(v) => validateUsername(v)
				],
				confPass: [
					(v) => v === this.password || 'Harus sama dengan password anda',
				],
			},
		}
	},
	methods: {
		async registerForm() {
			try {
				await this.$axios.post('/auth/register', {
					email: this.form.email.value,
					password: this.form.password.value,
					username: this.form.username.value,
				})

				await this.$auth.loginWith('local', {
					data: {
						email: this.form.email.value,
						password: this.form.password.value,
					},
				})

				this.$router.push('/me')
			} catch (e) {
				this.error = 'Gagal membuat akun, cek internet anda atau gunakan e-mail atau username lain';
			}
		},
		async login() {
			try {
				await this.$auth.loginWith('local', {
					data: {
						email: this.form.email.value,
						password: this.form.password.value,
					},
				});

				this.$router.push('/me');
			} catch (e) {
				this.error = 'Login gagal, mungkin data anda salah';
			}
		},
		async submitForm() {
			await (this.register ? this.registerForm : this.login)();
		},
	},
}
</script>
