<template>
<docs-content title='Label'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default Label' :code='defaultLabelCode'>
      <ou-label>Name</ou-label>
    </docs-code-block>
    <docs-code-block title='Disabled Label' :code='disabledLabelCode'>
      <ou-label disabled>Name</ou-label>
    </docs-code-block>
    <docs-code-block title='Required Label' :code='requiredLabelCode'>
      <ou-label required>Name</ou-label>
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-table type='props' :data='labelProps' name='Label' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/label/overview.md';

export default {
  data() {
    return {
      overviewContent,
      defaultLabelCode: '<ou-label>Name</ou-label>',
      disabledLabelCode: '<ou-label disabled>Name</ou-label>',
      requiredLabelCode: '<ou-label required>Name</ou-label>',
      labelProps: [
        { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the label is disabled' },
        { name: 'required', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the label is required' }
      ]
    };
  }
};
</script>
