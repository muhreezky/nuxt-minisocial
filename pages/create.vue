<template>
	<create-post />
</template>

<script>
	export default {
		name: 'CreatePage',
		middleware: 'auth'
	}
</script>