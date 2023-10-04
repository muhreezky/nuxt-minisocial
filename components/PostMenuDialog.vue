<template>
	<v-dialog v-model="dialog" max-width="400px">
		<template #activator="{ on, attrs }">
			<v-btn icon v-bind="attrs" v-on="on">
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</template>
		<v-card>
			<v-card-title>
				Post Menu
			</v-card-title>
			<v-divider/>
			<v-card-text>
				Menu
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		name: 'PostMenuDialog',
	}
</script>