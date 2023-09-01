<template>
	<v-container>
		<v-card class="mx-auto">
			<v-card-text>
				<v-row justify="space-between" align="center">
					<v-img
						lazy-src="https://ui-avatars.com/api/?name&?size=128"
						:src="`https://ui-avatars.com/api/?name=${$auth.user.username}&?size=128`"
						:alt="`Foto Profil ${$auth.user?.username}`"
						max-width="128"
						class="mx-auto mb-5"
					/>
					<v-row justify="center" align="center" class="mx-auto">
						<v-btn v-for="p in profs" :key="`${$auth.user.username}-${p[0]}`" class="mx-auto" text>
							{{ p[1] }} <br />
							{{ p[0] }}
						</v-btn>
					</v-row>
				</v-row>
			</v-card-text>
			<v-divider />
			<v-card-text>
				<strong>{{ $auth.user.username }}</strong>
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
			posts: String("")
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