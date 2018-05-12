<template>
  <ul class='ms-List' :class='labelClass'><slot /></ul>
</template>
<script>
  import disabled from '../../mixins/props/disabled';

  export default {
    name: 'ou-list',

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
