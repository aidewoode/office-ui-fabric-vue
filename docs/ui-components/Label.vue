<template>
<docs-content title='Label'>
  <div slot='Overview'>
    <p>
      Labels give a name or title to a component or group of components. Labels should be in close proximity to the component or group they are paired with. Some components, such as TextField, Dropdown, or Toggle, already have Labels incorporated, but other components may optionally add a Label if it helps inform the user of the component’s purpose.
    </p>
  </div>
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
    <docs-props-table :data='labelProps' name='Label' />
  </div>
</docs-content>
</template>
<script>
export default {
  data() {
    return {
      defaultLabelCode: '<ou-label>Name</ou-label>',
      disabledLabelCode: '<ou-label disabled>Name</ou-label>',
      requiredLabelCode: '<ou-label required>Name</ou-label>',
      labelProps: [
        { name: 'disabled', type: 'Boolean', required: 'false', acceptedValue: '--', defaultValue: 'false', description: 'if the label is disabled' },
        { name: 'required', type: 'Boolean', required: 'false', acceptedValue: '--', defaultValue: 'false', description: 'if the label is required' }
      ]
    };
  }
};
</script>
