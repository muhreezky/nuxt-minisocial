<template>
  <v-btn small fab @click="toggleDark">
    <v-icon>
      {{ !$vuetify.theme.dark ? "mdi-weather-sunny" : "mdi-weather-night" }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'DarkToggler',
  mounted () {
    this.$vuetify.theme.dark = !!localStorage.darkmode
  },
  methods: {
    toggleDark () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.darkmode = this.$vuetify.theme.dark || '';
    }
  }
}
</script>
