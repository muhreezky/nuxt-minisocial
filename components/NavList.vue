<template>
	<v-list class="d-flex justify-center align-center" style="width:100%;" rounded>
		<v-list-item v-for="l in links" :key="l[0]" :to="l[0]" exact nuxt>
			<v-list-item-icon class="mx-auto">
				<v-icon>{{ l[2] }}</v-icon>
			</v-list-item-icon>
			<v-list-item-title :class="display">
				{{ l[1] }}
			</v-list-item-title>
		</v-list-item>
		<v-list-item
			v-for="link in listLinks"
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
import { mapGetters } from 'vuex'

export default {
	name: 'NavList',
	data() {
		return {
			links: [
				['/', 'Home', 'mdi-home'],
				['/about', 'Tentang', 'mdi-information'],
			],
			authedLinks: [['/me', 'My Account', 'mdi-account-box']],
			guestLinks: [
				['/login', 'Login', 'mdi-login'],
				['/register', 'Register', 'mdi-account-plus'],
			],
			display: 'd-none d-lg-flex'
		}
	},
	computed: {
		...mapGetters(['isAuthenticated']),
		listLinks() {
			return this.isAuthenticated ? this.authedLinks : this.guestLinks
		},
	},
	methods: {
		async logout() {
			await this.$auth.logout()
		},
	},
}
</script>
