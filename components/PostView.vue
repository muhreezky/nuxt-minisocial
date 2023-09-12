<template>
	<v-card>
		<v-card-title>
			{{ post.user.username }}
		</v-card-title>
	</v-card>
</template>

<script>
	export default {
		name: 'PostView',
		props: {
			post: Object({})
		}
	}
</script>