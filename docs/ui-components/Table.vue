<template>
<docs-content title='Table'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default Table' :code='defaultTableCode'>
      <ou-table :data='tableData'>
        <ou-table-column prop='name'>Name</ou-table-column>
        <ou-table-column prop='age'>Age</ou-table-column>
        <ou-table-column prop='date'>Date</ou-table-column>
      </ou-table>
    </docs-code-block>
    <docs-code-block title='Fixed Table' :code='fixedTableCode'>
      <ou-table :data='tableData' type='fixed'>
        <ou-table-column prop='name'>Name</ou-table-column>
        <ou-table-column prop='age'>Age</ou-table-column>
        <ou-table-column prop='date'>Date</ou-table-column>
      </ou-table>
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-table type='props' :data='tableProps' name='Table'/>
    <docs-table type='props' :data='tableColumnProps' name='Table Column' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/table/overview.md';

export default {
  data() {
    return {
      overviewContent,
      tableData: [
        { name: 'Ed', age: '24', date: '1993-11-12' },
        { name: 'Jack', age: '30', date: '1987-12-10' },
        { name: 'Blues', age: '51', date: '1966-06-15' },
        { name: 'Kurt', age: '23', date: '1994-04-05' }
      ],

      defaultTableCode: `
        <template>
          <ou-table :data='tableData'>
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
        <\/script>
      `,

      fixedTableCode: `
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
        <\/script>
      `,

      tableProps: [
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'fixed', description: 'type of the table' },
        { name: 'data', type: 'Array', required: 'true', description: 'data of the table' },
        { name: 'defaultValue', type: 'String, Number', required: 'false', description: 'the default value when data of table item is empty' },
      ],

      tableColumnProps: [
        { name: 'prop', type: 'String', required: 'true', description: 'the field name of the data for table' },
      ]
    };
  }
};
</script>
