<template>
<docs-content title='DatePicker'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default DatePicker' :code='defaultDatePickerCode'>
      <ou-date-picker label='Start date' placeholder='Select a date...' v-model='date'/>
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-props-table :data='datePickerProps' name='DatePicker' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/date_picker/overview.md';

export default {
  data() {
    return {
      overviewContent,
      date: '',
      defaultDatePickerCode: `
        <template>
          <ou-date-picker label='Start date' placeholder='Select a date...' v-model='date'/>
        </template>
        <script>
          export default {
            data() {
              return {
                date: ''
              };
            }
          };
        <\/script>
      `,

      datePickerProps: [
        { name: 'label', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the label for the DatePicker' },
        { name: 'placeholder', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the placeholder for the DatePicker' },
        { name: 'format', type: 'String', required: 'false', acceptedValue: "the 'yyyy' is year, the 'mm' is month, the 'dd' is day", defaultValue: 'yyyy-mm-dd', description: 'the format for the value of DatePicker' }
      ]
    };
  }
};
</script>
