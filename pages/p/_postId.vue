<template>
	<post-view :post="data.post" />
</template>

<script>
	export default {
		name: 'ViewPostPage',
		async asyncData({ $axios, params, error }) {
			try {
				const { data } = await $axios.$get(`/posts/${params.postId}`);
				return { data }
			} catch (e) {
				error(e);
			}
		},
	}
</script>