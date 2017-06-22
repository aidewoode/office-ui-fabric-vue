<template>
<div class='container'>
  <h3 class='ms-font-l'>{{ title }}</h3>
  <ou-table :data='data'>
    <ou-table-column prop='name'>Name</ou-table-column>
    <ou-table-column prop='description'>Description</ou-table-column>
  </ou-table>
</div>
</template>
<style scoped>
.container {
  margin-bottom: 25px;
}
</style>
<script>
export default {
  props: ['data', 'name'],

  computed: {
    title() {
      return `${this.name} Slot`;
    }
  }
};
</script>
