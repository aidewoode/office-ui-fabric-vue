<template>
  <div class='ms-Pivot-content' :data-content='label'><slot /></div>
</template>
<script>
  export default {
    name: 'ou-pivot-item',

    inject: ['eventHub'],

    props: {
      label: {
        type: String,
        required: true
      }
    },

    beforeMount() {
      this.eventHub.$emit('addPivotItem', this.label);
    }
  };
</script>
