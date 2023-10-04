<template>
	<v-card class="ma-auto" max-width="1000px">
		<v-card-title class="text-h5">
			Account Settings
		</v-card-title>
		<v-card-body class="d-flex flex-column pa-3" style="gap: 10px;">
			<v-btn v-for="(attr, key) in buttons" :key="key" block @click="attr[1]">
				<v-icon>
					{{ attr[2] }}
				</v-icon>
				{{ attr[0] }}
			</v-btn>
		</v-card-body>
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
					['Hapus Akun Saya', () => this.deleteAccount(), 'mdi-trash']
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