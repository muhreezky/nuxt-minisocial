<template>
  <v-text-field
    :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
    :type="show ? 'text' : 'password'"
    v-bind="{...$props, ...$attrs}"
    @click:append="show = !show"
  />
</template>

<script>
export default {
  name: 'PassInput',
  props: {
    name: String(''),
    label: String(''),
    placeholder: String('')
  },
  data () {
    return {
      show: false
    }
  }
}
</script>