<template>
	<div class="p-5">
		<div class="flex justify-center align-center" style="width: 100%">
			<v-img 
				class="mx-auto"
				max-width="600" 
				max-height="800" 
				contain
				:src="imageUrl"
				v-bind="{...$props, ...$attrs}"
				@click="$refs.imgPrev.$refs.input.click()"
			/>
		</div>
		<v-file-input 
			ref="imgPrev"
			accept="image/jpeg, image/jpg, image/png"
			prepend-icon="mdi-image"
			:label="label"
			:name="name"
			:placeholder="placeholder"
			@change="updateImage"
		/>
	</div>
</template>

<script>
	const defaultImage = require('~/assets/default.jpg');
	export default {
		name: 'ImagePreview',
		props: {
			maxSize: {
				type: Number,
				default: 0
			},
			label: {
				type: String,
				default: 'Gambar'
			},
			name: {
				type: String,
				default: 'image'
			},
			placeholder: {
				type: String,
				default: 'Upload gambar anda di sini'
			}
		},
		data() {
			return {
				files: [],
				url: '',
				defaultImage
			}
		},
		computed: {
			mbSize() {
				return this.maxSize * 1000000;
			},
			imageUrl() {
				return this.url || this.defaultImage
			}
		},
		methods: {
			updateImage(e) {
				this.url = !e ? '' : URL.createObjectURL(e);
			}
		}
	}
</script>