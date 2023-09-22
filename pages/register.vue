<template>
  <auth-form register />
</template>

<script>
export default {
  name: 'RegisterPage',
  middleware: 'authenticated',
}
</script>
