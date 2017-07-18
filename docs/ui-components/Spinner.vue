<template>
<docs-content title='Spinner'>
  <div slot='Overview'>
    <p>
      A Spinner is an outline of a circle which animates around itself indicating to the user that things are processing. A Spinner is shown when it's unsure how long a task will take making it the indeterminate version of a ProgressIndicator. They can be various sizes, located inline with content or centered. They generally appear after an action is being processed or committed. They are subtle and generally do not take up much space, but are transitions from the completed task.
    </p>
  </div>
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
export default {
  data() {
    return {
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
