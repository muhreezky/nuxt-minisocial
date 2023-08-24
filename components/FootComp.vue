<script>
export default {
  name: 'FootComp',
  data() {
    return {
      icons: [
        "mdi"
      ]
    }
  }
}
</script>

<template>
  <v-footer absolute elevation="3">
    <v-row>
      <v-col class="d-flex flex-column align-center justify-center">
        &copy; 2023 Muhammad Rizkiansyah <br />
        All Rights Reserved
      </v-col>
      <v-col>
        <b style="margin: auto; text-align: center;">Links</b>
        <div class="d-flex flex-column">
          <a href="https://github.com/muhreezky">Github</a>
          <a href="https://instagram.com/muh.reezky">Instagram</a>
          <a href="https;//linkedin.com/in/muhreezky">Linkedin</a>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>
