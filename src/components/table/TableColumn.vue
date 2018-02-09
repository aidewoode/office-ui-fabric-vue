<template>
  <th>
    <slot></slot>
  </th>
</template>
<script>
  export default {
    name: 'ou-table-column',

    inject: ['eventHub'],

    props: {
      prop: {
        type: String,
        required: true
      }
    },

    beforeMount() {
      this.eventHub.$emit('addTableColumnItems', this.prop);
    }
  };
</script>
