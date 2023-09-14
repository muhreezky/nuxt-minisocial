<template>
	<v-container fluid>
		<v-row justify="center" no-gutters>
			<post-card v-for="post in posts" :key="post.id" :post="post" />
		</v-row>
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
				loading: true,
				before: '',
				posts: [],
				innerWidth: 0,
			}
		},
		async fetch() {
			this.loading = true;
			const { data } = await this.$axios.$get(`/u/${this.username}/posts?before=${this.before}`);
			this.before = data.before;
			this.posts = [...this.posts, ...data.posts];
			this.loading = false;
		},
		fetchDelay: 300,
	}
</script>