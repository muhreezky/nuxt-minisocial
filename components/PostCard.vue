<template>
	<v-col class="my-2">
		<v-card
			height="100%"
			class="d-flex flex-column justify-center align-center ma-3"
			@click="$router.push(`/p/${post.id}`)"
		>
			<v-img
				max-width="200"
				max-height="200"
				:lazy-src="post.mediaUrl"
				:src="post.mediaUrl"
			/>
		</v-card>
	</v-col>
</template>

<script>
export default {
	name: 'PostCard',
	props: {
		post: Object({}),
	},
}
</script>
