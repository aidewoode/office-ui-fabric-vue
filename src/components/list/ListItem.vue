<template>
  <li class='ms-ListItem' ref='listItem'><slot /></li>
</template>
<script>
  import disabled from '../../mixins/props/disabled';

  export default {
    name: 'ou-listitem',

    mixins: [disabled],

    props: {
      required: {
        type: Boolean,
        default: false
      }
    },

    // computed: {
      // labelClass() {
      //   return {
      //     'is-disabled': this.disabled,
      //     'is-required': this.required
      //   };
      // }
    // },

    mounted() {
      new this.$fabric.ListItem(this.$refs.listItem);
    }
  };
</script>
