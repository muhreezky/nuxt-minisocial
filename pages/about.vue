<template>
  <v-card>
    <v-card-title> Tentang Aplikasi </v-card-title>
    <v-card-text>
      MiniSocial merupakan sebuah aplikasi social media sederhana yang dibuat
      oleh Muhammad Rizkiansyah. Pengguna terdaftar dapat membuat dan membagikan
      postingan dengan pengguna lain di aplikasi ini. Aplikasi ini akan terus
      dikembangkan lebih lanjut demi performa yang lebih baik. <br />
      Terima kasih untuk mencoba {{ ':)' }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        href="https://trakteer.id/muh_reezky"
        target="_blank"
        type="button"
        block
        color="primary darken-2"
      >
        Support Me
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>
