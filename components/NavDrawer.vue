<template>
	<v-navigation-drawer
		v-model="drawerOpen"
		app
		permanent
		mini-variant
	>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title class="text-h5">
					{{ title }}
				</v-list-item-title>
			</v-list-item-content>
		</v-list-item>
		<v-divider />
		<nav-list />
	</v-navigation-drawer>
</template>

<script>
	export default {
		name: 'NavDrawer',
		data() {
			return {
				drawerOpen: false,
				title: 'MiniSocial'
			}
		}
	}
</script>