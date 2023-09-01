<template>
	<div>
		<v-card>
			<v-card-title>
				@{{ $auth.user?.username }}
			</v-card-title>
			<v-card-text>
				
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
	export default {
		name: 'DashboardPage',
		middleware: 'auth'
	}
</script>