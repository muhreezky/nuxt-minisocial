<template>
	<v-row justify="center">
		<v-dialog 
			v-model="openDialog"
			transition="dialog-bottom-transition"
			fullscreen
			hide-overlay
			class="pa-3"
		>
			<template #activator="{ on, attrs }">
				<v-btn
					color="primary darken-1"
					v-bind="attrs"
					block
					v-on="on"
				>
					<v-icon>mdi-plus</v-icon>
					Buat Postingan
				</v-btn>
			</template>
			<v-card>
				<v-form enctype="multipart/form-data" @submit.prevent="submitImage">
					<v-toolbar color="primary">
						<v-btn icon dark @click="openDialog = false">
							<v-icon>mdi-close</v-icon>
						</v-btn>
						<v-toolbar-title>Buat Postingan Baru</v-toolbar-title>
						<v-spacer />
						<v-toolbar-items>
							<v-btn
								text
								type="submit"
								@click="openDialog = false"
							>
								Kirim
							</v-btn>
						</v-toolbar-items>
					</v-toolbar>
					<div class="d-flex flex-column" style="min-height: 100vh">
						<v-card-text class="pa-4">
							<image-input name="file" />
						</v-card-text>
					</div>
				</v-form>
				{{ resultUpload }}
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
	export default {
		name: 'CreatePost',
		data() {
			return {
				openDialog: false,
				resultUpload: ''
			}
		},
		methods: {
			async submitImage(e) {
				const formData = new FormData(e.target);
				formData.append('key', this.$config.imgBBKey);
				// formData.append('upload_session', this.$config.uploadSess);
				const data = await this.$axios.$post('https://api.imgbb.com/1/upload', formData, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				});
				this.resultUpload = data;
			}
		}
	}
</script>