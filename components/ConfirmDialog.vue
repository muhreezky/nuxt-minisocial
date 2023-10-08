<template>
	<v-dialog v-model="isOpen" persistent>
		<v-card>
			<v-card-title>
				Confirm
			</v-card-title>
			<v-card-text>
				<slot />
			</v-card-text>
			<v-card-actions>
				<v-row no-gutters>
					<v-btn @click="confirmed">
						{{ confirmText }}
					</v-btn>
					<v-btn @click="isOpen = false">
						{{ declineText }}
					</v-btn>
				</v-row>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		name: 'ConfirmDialog',
		props: {
			onConfirmed: {
				type: Function,
				default: () => null
			},
			confirmText: String('Ya'),
			declineText: String('Tidak'),
			defaultOpen: Boolean(false),
			post: Object({})
		},
		data() {
			return {
				isOpen: !!this.defaultOpen
			}
		},
		methods: {
			confirmed() {
				this.onConfirmed();
				this.isOpen = false;
			}
		}
	}
</script>