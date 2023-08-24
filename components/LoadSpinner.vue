<template>
  <div class="container">
    <div>
      <v-progress-circular indeterminate color="primary" />
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadSpinner'
}
</script>

<style scoped>
.container > div {
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
}
.container {
  min-height: 100vh;
}
</style>