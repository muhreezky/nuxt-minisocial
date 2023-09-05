<template>
	<v-img
		:lazy-src="srcUrl"
		:src="srcUrl"
		:alt="`Foto Profil ${name}`"
		max-width="128"
		max-height="128"
		class="mx-auto mb-5"
		style="border-radius: 100%"
	/>
</template>

<script>
	export default {
		name: 'ProfilePic',
		props: {
			name: {
				type: String,
				default: 'John Doe'
			},
			url: {
				type: String,
				default: ''
			}
		},
		computed: {
			srcUrl() {
				return this.url || `https://ui-avatars.com/api/?name=${this.name}&?size=128`;
			}
		}
	}
</script>