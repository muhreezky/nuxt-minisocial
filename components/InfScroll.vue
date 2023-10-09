<template>
	<v-container fluid>
		<v-skeleton-loader
			class="mb-5"
			type="article"
			:loading="isLoading && posts.length === 0"
		>
			<template #default>
				<div
					v-if="$fetchState.pending || posts.length > 0"
					class="d-flex flex-column"
					style="gap: 10px"
				>
					<post-view v-for="(p, key) in posts" :key="key" :post="p" />
				</div>
				<div v-else class="text-h5 d-flex justify-center align-center">
					<div v-if="!isLoading" class="ma-auto pa-5">Belum ada postingan</div>
				</div>
			</template>
		</v-skeleton-loader>
		<v-divider />
		<v-btn
			ref="loadBtn"
			:disabled="isLoading || fetchedLength === 0"
			:loading="isLoading"
			color="primary"
			block
			@click="$fetch"
		>
			{{ loadButtonText }}
		</v-btn>
	</v-container>
</template>

<script>
export default {
	name: 'InfScroll',
	props: {
		url: String(''),
	},
	data() {
		return {
			posts: [],
			isLoading: true,
			isError: false,
			after: '',
			fetchedLength: 0,
		}
	},
	async fetch() {
		try {
			this.isLoading = true
			const { data } = await this.$axios.$get(`${this.url}${this.after ? ('?before=' + this.after) : ''}`);
			if (this.after !== data.after) {
				this.posts.push(...data.posts)
				this.after = data.after
			}
			this.fetchedLength = data.posts.length
		} catch (e) {
			this.isError = true
		}
		this.isLoading = false
	},
	computed: {
		loadButtonText() {
			return this.isLoading
				? 'Loading...'
				: this.fetchedLength === 0
				? 'Selesai'
				: 'Buka Lebih Banyak'
		},
	},
}
</script>
