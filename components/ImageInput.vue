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
			:rules="rules"
			accept="image/jpeg, image/jpg, image/png, image/webp"
			prepend-icon="mdi-image"
			:label="label"
			:name="name"
			:placeholder="placeholder"
			@change="updateImage"
		/>
	</div>
</template>

<script>
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
				rules: [v => !!v || (this.maxSize && v.size < this.mbSize) || `Ukuran tidak boleh lebih dari ${this.maxSize} MB`],
				files: [],
				url: '',
				defaultImage: require('~/assets/default.jpg')
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