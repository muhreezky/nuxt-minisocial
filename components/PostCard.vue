<template>
	<v-card max-width="300">
		<v-img max-width="300" max-height="200" :lazy-src="post.mediaUrl" :src="post.mediaUrl" />
		<v-card-actions>
			<v-btn block text color="primary darken-1">
				Lihat Postingan
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		name: 'PostCard',
		props: {
			post: Object({})
		}
	}
</script>