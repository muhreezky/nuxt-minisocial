<template>
	<v-list class="d-flex flex-row justify-center align-center" style="width:100%;" rounded>
		<v-list-item
			v-for="link in links"
			:key="link[1]"
			class="mb-0"
			@click.prevent="link[0]"
		>
			<v-list-item-icon class="mx-auto">
				<v-icon>{{ link[2] }}</v-icon>
			</v-list-item-icon>
			<v-list-item-title :class="display">
				{{ link[1] }}
			</v-list-item-title>
		</v-list-item>
	</v-list>
</template>

<script>
export default {
	name: 'NavList',
	data() {
		return {
			links: [
				[() => this.$router.push('/'), 'Home', 'mdi-home'],
				[() => this.$router.push('/about'), 'Tentang', 'mdi-information'],
				[() => null, 'Baru', 'mdi-plus-box'],
				[() => this.$router.push(`/u/${this.$auth.user.username}`), 'Akun Saya', 'mdi-account-box'],
				[() => this.logout(), 'Logout', 'mdi-logout']
			],
			display: 'd-none d-lg-flex'
		}
	},
	methods: {
		async logout() {
			await this.$auth.logout()
		},
	},
}
</script>
