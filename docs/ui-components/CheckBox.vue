<template>
  <docs-content title='Checkbox'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default Checkbox' :code='defaultCode'>
        <ou-checkbox v-model='checked'>Checkbox</ou-checkbox>
      </docs-code-block>
      <docs-code-block title='Disabled Checkbox' :code='disabledCode'>
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
  import defaultCode from '../markdown/checkbox/defaultCode.md';
  import disabledCode from '../markdown/checkbox/disabledCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        disabledCode,
        checked: false,
        checkboxProps: [
          { name: 'v-model', type: 'Boolean', required: 'false', description: 'bind boolean value to the checkbox' },
          { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the checkbox is disabled' }
        ]
      };
    }
  };
</script>
