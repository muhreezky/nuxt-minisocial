<template>
	<v-alert :type="tipe">
		<slot />
	</v-alert>
</template>

<script>
	export default {
		name: 'CusAlert',
		props: {
			tipe: String(''),
		}
	}
</script>