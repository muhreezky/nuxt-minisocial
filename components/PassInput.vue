<template>
  <v-text-field
    v-bind="{...$props, ...$attrs}"
    :value="value"
    :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
    :type="show ? 'text' : 'password'"
    @input="updateVal($event)"
    @click:append="show = !show"
  />
</template>

<script>
export default {
  name: 'PassInput',
  props: {
    name: String(''),
    label: String(''),
    placeholder: String(''),
    value: String('')
  },
  data () {
    return {
      show: false,
      content: this.value
    }
  },
  methods: {
    updateVal(e) {
      this.$emit('input', e);
    }
  }
}
</script>