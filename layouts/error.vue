<template>
  <v-card dark>
    <v-card-title class="d-flex justify-center align-center">
      <h1>
        {{ error.statusCode === 404 ? pageNotFound : otherError }}
      </h1>
    </v-card-title>
    <v-card-actions>
      <NuxtLink to="/" style="width: 100%">
        <v-btn color="primary" block>
          Kembali
        </v-btn>
      </NuxtLink>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'EmptyLayout',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Halaman tidak ada',
      otherError: 'Ada sesuatu yang tak beres',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
