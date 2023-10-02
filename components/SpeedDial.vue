<template>
	<v-footer v-if="isHydrated" class="mt-auto pa-0" app>
		<nav-list />
	</v-footer>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: 'SpeedDial',
		data() {
			return {
				isHydrated: false
			}
		},
		computed: mapGetters(['isAuthenticated']),
		mounted() {
			this.isHydrated = true;
		}
	}
</script>