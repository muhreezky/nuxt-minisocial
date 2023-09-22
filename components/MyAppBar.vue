<template>
	<v-app-bar app>
		<v-btn variant="text" @click="() => $router.push('/')">
			<v-app-bar-title>
				{{ title }}
			</v-app-bar-title>
		</v-btn>
		<v-spacer />
		<dark-toggler />
	</v-app-bar>
</template>

<script>
	export default {
		name: 'MyAppBar',
		data() {
			return {
				title: 'MiniSocial'
			}
		}
	}
</script>
