<template>
	<Fragment>
		<v-app-bar app>
			<!-- <v-app-bar-nav-icon @click="drawerOpen = !drawerOpen" /> -->
			<v-app-bar-title>
				{{ title }}
			</v-app-bar-title>
			<v-spacer />
			<dark-toggler />
		</v-app-bar>
		<v-navigation-drawer v-model="drawerOpen" app permanent mini-variant expand-on-hover>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h5">
						{{ title }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-divider />
			<v-list dense nav>
				<v-list-item v-for="l in links" :key="l[0]" :to="l[0]" exact nuxt>
					<v-list-item-icon>
						<v-icon>{{ l[2] }}</v-icon>
					</v-list-item-icon>
					<v-list-item-title>{{ l[1] }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-for="link in listLinks"
					:key="link[0]"
					:to="link[0]"
					nuxt
					exact
				>
					<v-list-item-icon>
						<v-icon>{{ link[2] }}</v-icon>
					</v-list-item-icon>
					<v-list-item-title>{{ link[1] }}</v-list-item-title>
				</v-list-item>
				<v-list-item v-if="$auth.loggedIn" href="#" @click.prevent="logout">
					<v-list-item-icon>
						<v-icon>mdi-logout</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Logout</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
	name: 'NavComp',
	components: {
		Fragment
	},
	data() {
		return {
			menuOpen: false,
			title: 'MiniSocial',
			drawerOpen: false,
			links: [
				['/', 'Home', 'mdi-home'],
				['/about', 'Tentang', 'mdi-information'],
			],
			authedLinks: [['/me', 'Dashboard', 'mdi-account-box']],
			guestLinks: [
				['/login', 'Login', 'mdi-login'],
				['/register', 'Register', 'mdi-account-plus'],
			],
		}
	},
	computed: {
		listLinks() {
			return this.$auth.loggedIn ? this.authedLinks : this.guestLinks
		},
	},
	methods: {
		async logout() {
			await this.$auth.logout()
		},
	},
}
</script>
