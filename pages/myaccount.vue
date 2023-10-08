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
					['Edit Profil', () => this.changeUser(), 'mdi-pencil-circle'],
					['Logout', () => this.$auth.logout(), 'mdi-logout'],
					['Hapus Akun Saya', () => this.deleteAccount(), 'mdi-delete']
				]
			}
		},
		methods: {
			deleteAccount() {
				return null;
			},
			changeUser() {
				return null;
			}
		}
	}
</script>