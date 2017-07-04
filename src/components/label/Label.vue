<template>
<label class='ms-Label' :class='labelClass'><slot /></label>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    required: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    labelClass() {
      return {
        'is-disabled': this.disabled,
        'is-required': this.required
      };
    }
  }
};
</script>
