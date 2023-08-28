<template>
  <v-btn small fab @click="$vuetify.theme.dark = !$vuetify.theme.dark">
    <v-icon>
      {{ !$vuetify.theme.dark ? "mdi-weather-sunny" : "mdi-weather-night" }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'DarkToggler'
}
</script>
