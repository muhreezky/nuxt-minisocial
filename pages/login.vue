<template>
  <auth-form />
</template>

<script>
  export default {
    name: 'LoginPage',
    middleware: 'authenticated'
  }
</script>
