<template>
	<v-footer class="mt-auto pa-0" app>
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