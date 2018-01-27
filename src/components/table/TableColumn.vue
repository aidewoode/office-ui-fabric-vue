<template>
  <th>
    <slot></slot>
  </th>
</template>
<script>
  export default {
    name: 'ou-table-column',

    props: {
      prop: {
        type: String,
        required: true
      }
    },

    beforeMount() {
      this.$parent.tableColumnItems.push(this.prop);
    }
  };
</script>
