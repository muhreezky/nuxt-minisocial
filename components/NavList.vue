<template>
	<v-list class="d-flex justify-center align-center" style="width:100%;" rounded>
		<v-list-item
			v-for="link in links"
			:key="link[0]"
			:to="link[0]"
			nuxt
			exact
		>
			<v-list-item-icon class="mx-auto">
				<v-icon>{{ link[2] }}</v-icon>
			</v-list-item-icon>
			<v-list-item-title :class="display">
				{{ link[1] }}
			</v-list-item-title>
		</v-list-item>
		<v-list-item v-if="$auth.loggedIn" @click.prevent="logout">
			<v-list-item-icon class="mx-auto">
				<v-icon>mdi-logout</v-icon>
			</v-list-item-icon>
			<v-list-item-title :class="display">
				Logout
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
				['/', 'Home', 'mdi-home'],
				['/about', 'Tentang', 'mdi-information'],
				['/me', 'My Account', 'mdi-account-box'],
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
