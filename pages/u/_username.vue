<template>
	<v-container fluid>
		<profile-card :username="$route.params.username" />
	</v-container>
</template>

<script>
	export default {
		name: 'VisitUser',
	}
</script>