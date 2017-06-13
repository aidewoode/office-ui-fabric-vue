<template>
<ou-table :data='data' class='container'>
  <ou-table-column prop='name'>Name</ou-table-column>
  <ou-table-column prop='type'>Type</ou-table-column>
  <ou-table-column prop='required'>Required</ou-table-column>
  <ou-table-column prop='acceptedValue'>Accepted Value</ou-table-column>
  <ou-table-column prop='defaultValue'>Default Value</ou-table-column>
  <ou-table-column prop='description'>Description</ou-table-column>
</ou-table>
</template>
<style scoped>
.container {
  margin-bottom: 25px;
}
</style>
<script>
export default {
  props: ['data']
};
</script>
