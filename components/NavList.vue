<template>
	<v-list class="d-flex flex-row justify-center align-center ma-0" style="width:100%;" rounded>
		<v-list-item
			v-for="link in links"
			:key="link[1]"
			:to="link[0]"
			nuxt
			exact
			class="mb-0"
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
				['/', 'Home', 'mdi-home'],
				['/about', 'Tentang', 'mdi-information'],
				['/create', 'Baru', 'mdi-plus-box'],
				[`/u/${this.$auth.user.username}`, 'Akun Saya', 'mdi-account-circle'],
				['/myaccount', 'Akun', 'mdi-cog']
			],
			display: 'd-none d-lg-flex'
		}
	},
}
</script>
