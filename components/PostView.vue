<template>
	<v-container>
		<v-card class="ma-auto" max-width="800px">
			<v-card-title class="d-flex" style="justify-content: space-between">
				<nuxt-link
					class="d-flex flex-row justify-start align-center"
					:to="`/u/${post.user.username}`"
					style="gap: 10px;"
				>
					<v-avatar size="28">
						<v-img
							:lazy-src="post.user.imageUrl"
							loading="lazy"
							:src="post.user.imageUrl"
							max-width="30"
							max-height="30"
							:alt="post.user.username + ' avatar'"
						/>
					</v-avatar>
					{{ post.user.username }}
				</nuxt-link>
				<div>
					<post-menu-dialog :user-id="post.userId" :post-id="post.id" />
				</div>
			</v-card-title>
			<v-divider />
			<v-card-text class="d-flex flex-column" style="gap: 7px">
				<div class="d-flex justify-center align-center">
					<v-img
						max-width="100%"
						:lazy-src="post.mediaUrl"
						:src="post.mediaUrl"
						:alt="post.caption"
					/>
				</div>
				<v-divider />
				<div class="text-subtitle-1">
					{{ post.caption }}
				</div>
			</v-card-text>
			<!-- <v-divider />
			<v-card-actions>
				<v-row justify="center" no-gutters>
					<v-col v-for="(a, i) in actions" :key="i">
						<v-btn block>
							<v-icon>{{ a[1] }}</v-icon>
							{{ a[0] }}
						</v-btn>
					</v-col>
				</v-row>
			</v-card-actions> -->
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'PostView',
	props: {
		post: Object({}),
	},
	data() {
		return {
			actions: [
				['Like', 'mdi-heart-outline'],
				['Comment', 'mdi-comment-outline'],
				['Share', 'mdi-share'],
			],
		}
	},
}
</script>

<style scoped>
	a {
		color: inherit;
	}
</style>