```
<template>
  <ou-table :data='tableData' type='fixed'>
    <ou-table-column prop='name'>Name</ou-table-column>
    <ou-table-column prop='age'>Age</ou-table-column>
    <ou-table-column prop='date'>Date</ou-table-column>
  </ou-table>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
          { name: 'Ed', age: '24', date: '1993-11-12' },
          { name: 'Jack', age: '30', date: '1987-12-10' },
          { name: 'Blues', age: '51', date: '1966-06-15' },
          { name: 'Kurt', age: '23', date: '1994-04-05' }
        ]
      }
    }
  };
</script>
```
