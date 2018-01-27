<template>
  <div class='ms-Spinner' ref='spinner' :class='spinnerClass'>
    <div class='ms-Spinner-label' v-if='label'>{{ label }}</div>
  </div>
</template>
<script>
  import type from '../../mixins/props/type';

  export default {
    name: 'ou-spinner',

    mixins: [type('large')],

    props: {
      label: String
    },

    computed: {
      spinnerClass() {
        return {
          [`ms-Spinner--${this.type}`]: !!this.type
        };
      }
    },

    mounted() {
      new this.$fabric.Spinner(this.$refs.spinner);
    }
  };
</script>
