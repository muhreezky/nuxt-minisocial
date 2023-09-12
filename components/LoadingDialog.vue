<template>
	<v-dialog :value="open" persistent>
		<v-card>
			<v-container>
				<v-card-text class="d-flex justify-center align-center pa-5">
					<div class="text-h5">
						<v-progress-circular indeterminate />{{ "  Loading..." }}
					</div>
				</v-card-text>
			</v-container>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		name: 'LoadingDialog',
		props: {
			open: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				dialog: this.open
			}
		}
	}
</script>