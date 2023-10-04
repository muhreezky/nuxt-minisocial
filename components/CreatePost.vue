<template>
	<v-card>
		<v-form enctype="multipart/form-data" @submit.prevent="submitImage">
			<v-toolbar color="primary">
				<v-toolbar-title>Buat Postingan Baru</v-toolbar-title>
				<v-spacer />
				<v-toolbar-items>
					<v-btn text type="submit" :loading="loading" :disabled="loading">
						Kirim
					</v-btn>
				</v-toolbar-items>
			</v-toolbar>
			<div class="d-flex flex-column" style="min-height: 100vh">
				<v-card-text class="pa-4">
					<image-input name="file" />
					<v-textarea v-model="caption" outlined label="Caption Postingan" />
				</v-card-text>
			</div>
		</v-form>
		<loading-dialog :open="loading" />
	</v-card>
</template>

<script>
export default {
	name: 'CreatePost',
	props: {
		onSuccess: {
			type: Function,
			default: () => null,
		},
	},
	data() {
		return {
			resultUpload: {},
			caption: '',
			loading: false,
		}
	},
	methods: {
		async submitImage(e) {
			const formData = new FormData(e.target);
			const file = formData.get('file');
			if (!file.size) return;
			this.loading = true;
			const res = await this.$uploadFile(file);
			e.target.reset();
			const { Key } = res;
			if (!res.statusCode) {
				await this.$axios.$post('/posts', { url: `${this.$config.bucketBase}/public/${Key}`, caption: this.caption });
			} 
			this.$router.push('/');
			this.openDialog = false;
			this.loading = false;
		},
	},
}
</script>
