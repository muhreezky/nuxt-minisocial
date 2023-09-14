<template>
	<v-col cols="12" md="6" lg="4" class="my-2">
		<v-card height="100%" class="d-flex flex-column justify-center align-center ma-3">
			<v-img max-width="300" max-height="200" :lazy-src="post.mediaUrl" :src="post.mediaUrl" />
			<v-card-actions style="width: 100%;">
				<v-btn block text color="primary lighten-1">
					Lihat Postingan
				</v-btn>
			</v-card-actions>
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