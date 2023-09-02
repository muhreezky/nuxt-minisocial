<template>
	<v-container fluid>
		<profile-card :username="$auth.user.username" followers="0" following="0" posts="0" />
	</v-container>
</template>

<script>
	export default {
		name: 'DashboardPage',
		middleware: 'auth'
	}
</script>