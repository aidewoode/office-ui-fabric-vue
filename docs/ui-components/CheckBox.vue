<template>
<docs-content title='Checkbox'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default Checkbox' :code='defaultCheckboxCode'>
      <ou-checkbox v-model='checked'>Checkbox</ou-checkbox>
    </docs-code-block>
    <docs-code-block title='Disabled Checkbox' :code='disabledCheckboxCode'>
      <ou-checkbox v-model='checked' disabled>Checkbox Disabled</ou-checkbox>
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-table type='props' :data='checkboxProps' name='Checkbox' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/checkbox/overview.md';

export default {
  data() {
    return {
      overviewContent,
      checked: false,
      defaultCheckboxCode: `
        <template>
          <ou-checkbox v-model='checked'>Checkbox</ou-checkbox>
        </template>
        <script>
          export default {
            data() {
              return {
                checked: false
              };
            }
          };
        <\/script>
      `,

      disabledCheckboxCode: `
        <template>
          <ou-checkbox v-model='checked' disabled>Checkbox Disabled</ou-checkbox>
        </template>
        <script>
          export default {
            data() {
              return {
                checked: false
              };
            }
          };
        <\/script>
      `,

      checkboxProps: [
        { name: 'v-model', type: 'Boolean', required: 'false', description: 'bind boolean value to the checkbox' },
        { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the checkbox is disabled' }
      ]
    };
  }
};
</script>
