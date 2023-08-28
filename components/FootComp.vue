<script>
export default {
  name: 'FootComp',
  data() {
    return {
      links: [
        ['https://github.com/muhreezky', 'Github'],
        ['https://instagram.com/muh.reezky', 'Instagram'],
        ['https://linkedin.com/in/muhreezky', 'Linkedin'],
        ['https://trakteer.id/muh_reezky', 'Trakteer'],
        ['https://ko-fi.com/muh_reezky', 'Support Me']
      ],
    }
  },
}
</script>

<template>
  <v-footer class="mt-auto" elevation="0">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link[0]"
        target="_blank"
        :href="link[0]"
        class="my-3"
        text
      >
        {{ link[1] }}
      </v-btn>
      <v-col cols="12">
        <div class="small">
          &copy; 2023 Muhammad Rizkiansyah. All Rights Reserved <br />
          Muhammad Rizkiansyah atau MuhReezky adalah seorang web developer yang
          sedang banyak mempelajari ilmu-ilmu praktikal terutama dalam bidang
          aplikasi web. Aplikasi ini adalah contoh dari bahan belajarnya.
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style>
a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #efefef !important;
}
</style>
