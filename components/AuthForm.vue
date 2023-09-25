<template>
	<v-form @submit.prevent="submitForm">
		<v-card-title>
			<div>
				{{ register ? "Buat Akun" : "Login" }}
			</div>
			<v-spacer />
			<div>
				<v-btn nuxt text :to="register ? '/login' : '/register'">
					{{ register ? "Sudah punya akun? Login" : "Belum punya akun? Buat sekarang" }}
				</v-btn>
			</div>
		</v-card-title>
		<v-card-text>
			<v-text-field
				v-model="email"
				:rules="rules.email"
				label="Email"
				placeholder="Alamat E-mail yang valid"
				:type="register ? 'email' : 'text'"
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
				required
			/>
			<pass-input
				v-if="register"
				:rules="rules.confPass"
				label="Confirm Password"
				placeholder="Ketik ulang password anda di sini"
				required
			/>
			<v-alert v-if="!!error" type="error" dismissible>
				{{ error }}
			</v-alert>
		</v-card-text>
		<v-card-actions>
			<v-btn :disabled="isLoading" :loading="isLoading" type="submit" color="primary" block>
				{{ register ? "Buat Akun" : "Login" }}
			</v-btn>
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
			isLoading: false,
			email: '',
			username: '',
			password: '',
			error: '',
			rules: {
				email: [
					(v) => !!v || 'Ini harus diisi',
					(v) => this.register ? validateEmail(v) : true,
				],
				password: [
					(v) => !!v || 'Password harus diisi',
					(v) => validateMinLength(v, 6),
					(v) => validateMaxLength(v, 15),
					(v) => this.register ? validatePassword(v) : true
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
					email: this.email,
					password: this.password,
					username: this.username,
				})

				await this.login();
			} catch (e) {
				this.error = 'Gagal membuat akun, cek internet anda atau gunakan e-mail/username lain';
			}
		},
		async login() {
			try {
				await this.$auth.loginWith('local', {
					data: {
						email: this.email,
						password: this.password,
					},
				});

				this.$router.push('/me');
			} catch (e) {
				this.error = 'Login gagal, mungkin data anda salah';
			}
		},
		async submitForm() {
			this.isLoading = true;
			await (this.register ? this.registerForm : this.login)();
			this.isLoading = false;
		},
	},
}
</script>
