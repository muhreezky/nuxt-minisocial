<template>
	<v-container fluid>
		<div class="text-h6">Postingan oleh @{{ username }}</div>
		<v-divider />
		<v-skeleton-loader
			class="mb-5"
			type="article"
			:loading="isLoading && posts.length === 0"
		>
			<template #default>
				<div class="ma-auto">		
					<v-row
						v-if="$fetchState.pending || posts.length > 0"
						justify="start"
						class="mx-auto"
						align="center"
						no-gutters
					>
						<post-card v-for="post in posts" :key="post.id" :post="post" />
					</v-row>
					<div
						v-else
						class="text-h5 d-flex justify-center align-center"
					>
						<div v-if="!isLoading" class="ma-auto pa-5">Belum ada postingan</div>
					</div>
				</div>
			</template>
		</v-skeleton-loader>
		<v-divider />
		<v-btn
			ref="loadBtn"
			:disabled="isLoading || fetchedPostsLength === 0"
			:loading="isLoading"
			color="primary darken-1"
			block
			@click="$fetch"
		>
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
			required: true,
		},
	},
	data() {
		return {
			isLoading: true,
			after: '',
			posts: [],
			innerWidth: 0,
			isError: false,
			fetchedPostsLength: 0
		}
	},
	async fetch() {
		await this.getPosts();
	},
	computed: {
		loadButtonText() {
			return this.isLoading
				? 'Loading...'
				: this.fetchedPostsLength === 0
				? 'Selesai'
				: 'Buka Lebih Banyak'
		},
	},
	methods: {
		async getPosts() {
			try {
				this.isLoading = true;
				const { data } = await this.$axios.$get(
					`/u/${this.username}/posts${this.after ? '?before=' + this.after : ''}`
				)
				if (this.after !== data.after) {
					this.posts.push(...data.posts);
					this.after = data.after
				}
				this.fetchedPostsLength = data.posts.length;
			} catch (e) {
				this.isError = true
			}
			this.isLoading = false;
		}
	}
}
</script>
