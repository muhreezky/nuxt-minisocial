<template>
	<v-footer v-if="isAuthenticated" app class="mt-auto pa-0">
		<nav-list />
	</v-footer>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: 'SpeedDial',
		computed: mapGetters(['isAuthenticated'])
	}
</script>