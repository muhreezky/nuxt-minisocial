<template>
	<v-container fluid>
		<div class="text-h6">
			Postingan oleh @{{ username }}
		</div>
		<v-divider />
		<v-skeleton-loader class="mb-5" type="article" :loading="isLoading && posts.length === 0">
			<template #default>
				<v-row v-if="!isLoading && posts.length > 0" justify="center" no-gutters>
					<post-card v-for="post in posts" :key="post.id" :post="post" />
				</v-row>
				<div v-else-if="!isLoading && !posts.length" class="text-h5 d-flex justify-center align-center">
					<div class="ma-auto pa-5">
						Belum ada postingan
					</div>
				</div>
			</template>
		</v-skeleton-loader>
		<v-divider />
		<v-btn :disabled="isLoading || fetchedPostsLength === 0" :loading="isLoading" color="primary darken-1" block>
			{{ loadButtonText }}
		</v-btn>
	</v-container>
</template>

<script>
	export default {
		name: 'UserPosts',
		props: {
			username: {
				type: String,
				default: '',
				required: true
			}
		},
		data() {
			return {
				isLoading: true,
				after: '',
				posts: [],
				innerWidth: 0,
				fetchedPostsLength: 0,
			}
		},
		async fetch() {
			this.isLoading = true;
			const { data } = await this.$axios.$get(`/u/${this.username}/posts${this.after && ('?before=' + this.after)}`);
			this.after = data.after;
			this.posts = [...this.posts, ...data.posts];
			this.fetchedPostsLength = data.posts.length;
			this.isLoading = false;
		},
		fetchDelay: 300,
		computed: {
			loadButtonText() {
				return this.isLoading ? 'Loading...' : (this.fetchedPostsLength === 0 ? 'Selesai' : 'Buka Lebih Banyak');
			}
		},
	}
</script>