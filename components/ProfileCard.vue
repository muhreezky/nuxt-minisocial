<template>
	<v-container>
		<v-card class="mx-auto">
			<v-card-title class="text-center">
				<div class="mx-auto">
					@{{ username }}
				</div>
			</v-card-title>
			<v-card-text>
				<v-alert v-if="$fetchState.pending" type="info">
					<v-progress-circular indeterminate />
					Loading...
				</v-alert>
				<v-alert v-else-if="$fetchState.error" type="error">
					Kesalahan pada data, klik Refresh untuk mengulang
					<v-btn @click="$fetch">
						Refresh
					</v-btn>
				</v-alert>
				<v-row v-else align="center">
					<v-col>
						<div class="text-center">
							<profile-pic :name="user.username" :url="user.imageUrl" />
						</div>
					</v-col>
					<v-col>
						<v-row justify="center" align="center" class="mx-auto" no-gutters>
							<v-col>
								<v-btn text>
									<u class="text-h6">{{ user.postCount }}</u>
									<div class="text-body-2">
										Posts
									</div>
								</v-btn>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
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
			}
		},
		async fetch() {
			const { data } = await this.$axios.$get(`/u/${this.username}`);
			this.user = data.user;
		}
	}
</script>