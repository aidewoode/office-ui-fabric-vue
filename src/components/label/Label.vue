<template>
  <label class='ms-Label' :class='labelClass'><slot /></label>
</template>
<script>
  import disabled from '../../mixins/props/disabled';

  export default {
    name: 'ou-label',

    mixins: [disabled],

    props: {
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
