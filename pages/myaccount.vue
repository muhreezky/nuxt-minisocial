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
					[`Ubah Username (@${this.$auth.user.username})`, this.changeUsername, 'mdi-account-circle'],
					['Edit Bio', this.changeBio, 'mdi-pencil-circle'],
					['Logout', this.logout, 'mdi-logout'],
					['Hapus Akun Saya', this.deleteAccount, 'mdi-delete']
				]
			}
		},
		methods: {
			async deleteAccount() {
				try {
					const { isConfirmed } = await this.$swal.fire({
						title: 'Konfirmasi',
						text: 'Anda yakin ingin menghapus akun anda? Akun yang dihapus tidak bisa dikembalikan lagi',
						showDenyButton: true,
						denyButtonText: 'Tidak',
						confirmButtonText: 'Ya',
						icon: 'question'
					});
					if (!isConfirmed) return null;
					await this.$axios.$delete('/auth/me');
					this.$auth.logout();
				} catch (e) {
					this.$swal.fire({
						title: 'Gagal Menghapus',
						text: 'Tidak dapat menghapus akun, coba lagi beberapa saat atau login kembali',
						icon: 'error'
					});
				}
			},
			async changeUsername() {
				try {
					const { value: username, isConfirmed } = await this.$swal.fire({
						title: 'Ganti username',
						input: 'text',
						inputLabel: 'Username : ',
						inputPlaceholder: 'Masukkan username di sini'
					})
					if (!username) return null;
					await this.$axios.$put('/auth/me/username', { username });
					if (isConfirmed) {
						await this.$auth.fetchUser();
						this.$swal.fire({ 
							title: 'Berhasil', 
							icon: 'success',
							text: 'Username berhasil diganti'
						})
							.then(() => this.$router.go(0));
					}
				} catch (e) {
					this.$swal.fire({
						text: 'Tidak dapat mengganti username, gunakan username lain atau coba beberapa saat lagi',
						title: 'Gagal Mengganti Username',
						icon: 'error',
					})
				}
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
				if(isConfirmed){
					await this.$auth.fetchUser();
					this.$router.push(`/u/${this.$auth.user.username}`);
				}
			},
			logout() {
				this.$swal.fire({
					text: 'Apakah Anda ingin logout dari sini?',
					title: 'Konfirmasi',
					icon: 'question',
					showDenyButton: true,
					denyButtonText: 'Tidak',
					confirmButtonText: 'Ya'
				}).then(res => {
					if (res.isConfirmed) {
						this.$auth.logout();
					}
				})
			}
		}
	}
</script>