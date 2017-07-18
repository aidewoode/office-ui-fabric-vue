<template>
<div class='ms-Spinner' ref='spinner' :class='spinnerClass'>
  <div class='ms-Spinner-label' v-if='label'>{{ label }}</div>
</div>
</template>
<script>
export default {
  props: {
    label: String,

    type: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'large'].includes(value);
      }
    }
  },

  computed: {
    spinnerClass() {
      return {
        [`ms-Spinner--${this.type}`]: !!this.type
      };
    }
  },

  mounted() {
    new fabric.Spinner(this.$refs.spinner);
  }
};
</script>
