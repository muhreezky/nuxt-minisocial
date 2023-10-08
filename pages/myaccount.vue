<template>
	<v-card class="ma-auto" max-width="1000px">
		<v-card-title class="text-h5">
			Akun Saya
		</v-card-title>
		<v-card-text class="d-flex flex-column pa-3" style="gap: 10px;">
			<v-list>
				<v-list-item v-for="(attr, key) in buttons" :key="key" @click="attr[1]">
					<v-list-item-icon>
						<v-icon>
							{{ attr[2] }}
						</v-icon>
					</v-list-item-icon>
					<v-list-item-title>
						{{ attr[0] }}
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-card-text>
	</v-card>
</template>

<script>
	export default {
		name: 'MyAccountPage',
		middleware: 'auth',
		data() {
			return {
				buttons: [
					['Ubah Username', this.changeUsername, 'mdi-account-circle'],
					['Edit Bio', this.changeBio, 'mdi-pencil-circle'],
					['Logout', () => this.$auth.logout(), 'mdi-logout'],
					['Hapus Akun Saya', this.deleteAccount, 'mdi-delete']
				]
			}
		},
		methods: {
			deleteAccount() {
				return null;
			},
			async changeUsername() {
				const { value: username, isConfirmed } = await this.$swal.fire({
					title: 'Ganti username',
					input: 'text',
					inputLabel: 'Username : ',
					inputPlaceholder: 'Masukkan username di sini'
				})
				if (!username) return null;
				const { data } = await this.$axios.$put('/auth/me/username', { username });
				if (!data) return null;
				if (isConfirmed)
					this.$auth.logout();
			},
			async changeBio() {
				const { value: biotext, isConfirmed } = await this.$swal.fire({
					title: 'Edit Bio Anda',
					input: 'textarea',
					inputLabel: 'Bio : ',
					inputPlaceholder: 'Ketikkan sesuatu di sini'
				});
				const { data } = await this.$axios.$put('/auth/me/bio', { biotext });
				if (!data) return null;
				if(isConfirmed)
					this.$auth.logout();
			}
		}
	}
</script>