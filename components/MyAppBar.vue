<template>
	<v-app-bar app>
		<v-app-bar-title>
			{{ title }}
		</v-app-bar-title>
		<v-spacer />
		<dark-toggler />
	</v-app-bar>
</template>

<script>
	export default {
		name: 'MyAppBar',
		data: () => ({
			title: 'MiniSocial'
		})
	}
</script>
