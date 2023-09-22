<template>
	<v-container>
		<v-skeleton-loader type="card" :loading="isLoading">
			<template #default>
				<div v-if="!isLoading">
					<v-card class="mx-auto">
						<v-card-title class="text-center">
							<div class="mx-auto">
								@{{ username }}
							</div>
						</v-card-title>
						<v-card-text>
							<v-row align="center" justify="center">
								<v-col>
									<div class="text-center">
										<profile-pic :name="user.username" :url="user.imageUrl" />
									</div>
								</v-col>
								<v-col>
									<v-row justify="center" align="center" class="mx-auto" no-gutters>
										<v-col>
											<v-btn text block>
												<u class="text-h6">{{ user.postCount }}</u>
												<div class="text-body-2">
													Posts
												</div>
											</v-btn>
										</v-col>
									</v-row>
								</v-col>
								<v-col v-if="user.id === $auth.user.id" cols="12">
									<create-post :on-success="() => $router.go()" />
								</v-col>
							</v-row>
						</v-card-text>
					</v-card>
				</div>
			</template>
		</v-skeleton-loader>
		<user-posts :username="username" />
	</v-container>
</template>

<script>
	export default {
		name: 'ProfileCard',
		props: {
			username: String(""),
		},
		data() {
			return {
				user: {},
				followers: 0,
				following: 0,
				posts: 0,
				isLoading: true
			}
		},
		async fetch() {
			try {
				this.isLoading = true;
				const { data } = await this.$axios.$get(`/u/${this.username}`);
				this.user = data.user;
				this.isLoading = false;
			} catch (e) {
				this.$nuxt.error({ statusCode: 404, message: e.message });
			}
		},
		fetchDelay: 300,
		fetchKey(getCounter) {
			return `${this.username}-${getCounter('username')}`
		}
	}
</script>