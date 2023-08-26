<script>
export default {
  name: 'FootComp',
  data() {
    return {
      icons: [
        "mdi"
      ],
      links: [
        ["https://github.com/muhreezky", "Github"],
        ["https://instagram.com/muh.reezky", "Instagram"],
        ["https://linkedin.com/in/muhreezky", "Linkedin"]
      ]
    }
  }
}
</script>

<template>
  <v-footer class="mt-auto" elevation="0">
    <div class="d-flex flex-column" style="gap: 17px">
      <div class="d-flex flex-column">
        <b class="ms-4">Links</b>
        <div v-for="link in links" :key="link[0]" class="d-flex flex-column justify-center items-center">
          <a target="_blank" :href="link[0]">{{ link[1] }}</a>
        </div>
      </div>
      <div class="d-flex align-center caption">
        &copy; 2023 Muhammad Rizkiansyah. All Rights Reserved <br />
        Muhammad Rizkiansyah atau MuhReezky adalah seorang web developer yang sedang
        banyak mempelajari ilmu-ilmu praktikal terutama dalam bidang aplikasi web.
        Aplikasi ini adalah contoh dari bahan belajarnya.
      </div>
    </div>
  </v-footer>
</template>

<style>
  a {
    text-decoration: none;
    color: #efefef !important;
  }
</style>
