<template>
	<v-container fluid>
		<v-skeleton-loader
			class="mb-5"
			type="article"
			:loading="isLoading && posts.length === 0"
		>
			<template #default>
				<div class="d-flex flex-column" style="gap: 10px;">
					<post-view v-for="(p, key) in posts" :key="key" :post="p" />
				</div>
			</template>
		</v-skeleton-loader>
	</v-container>
</template>

<script>
	export default {
		name: 'PostsFeed',
		data() {
			return {
				posts: [],
				isLoading: false,
				isError: false
			}
		},
		async fetch() {
			try {
				this.isLoading = true;
				const { data } = await this.$axios.$get(`/posts`);
				this.posts = data.posts;
			} catch (e) {
				this.isError = true;
			}
			this.isLoading = false;
		}
	}
</script>