<template>
<docs-content title='Spinner'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default Spinner' :code='defaultSpinnerCode'>
      <ou-spinner />
    </docs-code-block>
    <docs-code-block title='Large Spinner' :code='largeSpinnerCode'>
      <ou-spinner type='large' />
    </docs-code-block>
    <docs-code-block title='Spinner with Label' :code='labelSpinnerCode'>
      <ou-spinner label='Loading...' />
    </docs-code-block>
    <docs-code-block title='Large Spinner with Label' :code='largeLabelSpinnerCode'>
      <ou-spinner label='Loading...' type='large' />
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-props-table :data='spinnerProps' name='Spinner' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/spinner/overview.md';

export default {
  data() {
    return {
      overviewContent,
      defaultSpinnerCode: '<ou-spinner />',
      largeSpinnerCode: "<ou-spinner type='large' />",
      labelSpinnerCode: "<ou-spinner label='Loading...' />",
      largeLabelSpinnerCode: "<ou-spinner label='Loading...' type='large' />",
      spinnerProps: [
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'large', defaultValue: '--', description: 'the type for the spinner' },
        { name: 'label', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the label content for the spinner' }
      ]
    };
  }
};
</script>
