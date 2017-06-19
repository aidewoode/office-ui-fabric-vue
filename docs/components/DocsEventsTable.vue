<template>
<ou-table :data='data' class='container'>
  <ou-table-column prop='name'>Name</ou-table-column>
  <ou-table-column prop='params'>Params</ou-table-column>
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
