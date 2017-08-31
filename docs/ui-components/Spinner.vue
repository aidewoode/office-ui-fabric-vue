<template>
<docs-content title='Spinner'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default Spinner' :code='defaultCode'>
      <ou-spinner />
    </docs-code-block>
    <docs-code-block title='Large Spinner' :code='largeCode'>
      <ou-spinner type='large' />
    </docs-code-block>
    <docs-code-block title='Spinner with Label' :code='labelCode'>
      <ou-spinner label='Loading...' />
    </docs-code-block>
    <docs-code-block title='Large Spinner with Label' :code='largeLabelCode'>
      <ou-spinner label='Loading...' type='large' />
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-table type='props' :data='spinnerProps' name='Spinner' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/spinner/overview.md';
import defaultCode from '../markdown/spinner/defaultCode.md';
import largeCode from '../markdown/spinner/largeCode.md';
import labelCode from '../markdown/spinner/labelCode.md';
import largeLabelCode from '../markdown/spinner/largeLabelCode.md';

export default {
  data() {
    return {
      overviewContent,
      defaultCode,
      largeCode,
      labelCode,
      largeLabelCode,
      spinnerProps: [
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'large', description: 'the type for the spinner' },
        { name: 'label', type: 'String', required: 'false', description: 'the label content for the spinner' }
      ]
    };
  }
};
</script>
