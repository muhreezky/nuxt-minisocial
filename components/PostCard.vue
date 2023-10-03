<template>
	<v-col class="my-2" style="flex-grow: 0;">
		<v-card
			class="postcard"
			@click="$router.push(`/p/${post.id}`)"
		>
			<v-img
				width="100%"
				height="100%"
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

<style scoped>
	.postcard {
		margin-left: 5px;
		margin-right: 5px;
	}
	@media (max-width: 640px) {
		.postcard {
			width: calc(100vh / 5);
			height: calc(100vh / 5);
		}
	}
	@media (min-width: 641px) {
		.postcard {
			width: calc(100vw / 5);
			height: calc(100vw / 5);
		}
	}
</style>