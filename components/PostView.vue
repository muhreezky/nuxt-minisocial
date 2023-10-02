<template>
	<v-container>
		<v-card>
			<v-card-title class="d-flex justify-between" style="gap: 10px;">
				<div class="d-flex flex-row justify-start align-center">
					<v-avatar size="28">
						<v-img :lazy-src="post.user.imageUrl" :src="post.user.imageUrl" max-width="30" max-height="30" :alt="post.user.username + ' avatar'" />
					</v-avatar>
					{{ post.user.username }}
				</div>
				<div>
					<v-btn color="error">Delete</v-btn>
				</div>
			</v-card-title>
			<v-divider />
			<v-card-text class="d-flex flex-column" style="gap: 7px;">
				<div class="d-flex justify-center align-center">
					<v-img max-width="80%" :lazy-src="post.mediaUrl" :src="post.mediaUrl" :alt="post.caption" />
				</div>
				<v-divider />
				<div class="text-h6">
					{{ post.caption }}
				</div>
			</v-card-text>
			<v-divider />
			<v-card-actions>
				<v-row justify="center" no-gutters>
					<v-col v-for="(a, i) in actions" :key="i">
						<v-btn block>
							<v-icon>{{ a[1] }}</v-icon>
							{{ a[0] }}
						</v-btn>
					</v-col>
				</v-row>
			</v-card-actions>
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
					["Like", "mdi-heart-outline"],
					["Comment", "mdi-comment-outline"],
					["Share", "mdi-share"]
				]
			}
		}
	}
</script>