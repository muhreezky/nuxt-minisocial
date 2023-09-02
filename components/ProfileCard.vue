<template>
	<v-container>
		<v-card class="mx-auto">
			<v-card-title class="text-center">
				<div class="mx-auto">
					@{{ username }}
				</div>
			</v-card-title>
			<v-card-text>
				<v-row align="center">
					<v-col>
						<div class="text-center">
							<v-img
								lazy-src="https://ui-avatars.com/api/?name&?size=128"
								:src="`https://ui-avatars.com/api/?name=${username}&?size=128`"
								:alt="`Foto Profil ${username}`"
								max-width="128"
								class="mx-auto mb-5"
								style="border-radius: 100%;"
							/>
						</div>
					</v-col>
					<v-col>
						<v-row justify="center" align="center" class="mx-auto" no-gutters>
							<v-col v-for="p in profs" :key="`${username}-${p[0]}`">
								<v-btn small text>
									<u>{{ p[1] }}</u>
									{{ p[0] }}
								</v-btn>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-card-text>
			<v-divider />
			<v-card-text>
				<strong>{{ username }}</strong>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
	export default {
		name: 'ProfileCard',
		props: {
			followers: String(""),
			following: String(""),
			posts: String(""),
			username: String("")
		},
		data() {
			return {
				profs: [
					["Followers", this.followers],
					["Following", this.following],
					["Posts", this.posts]
				]
			}
		}
	}
</script>