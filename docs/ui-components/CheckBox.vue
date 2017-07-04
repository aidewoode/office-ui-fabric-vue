<template>
<docs-content title='Checkbox'>
  <div slot='Overview'>
    <p>
      A Checkbox is a UI element that allows users to switch between two mutually exclusive options (checked or unchecked, on or off) through a single click or tap. It can also be used to indicate a subordinate setting or preference when paired with another control.
    </p>
    <p>
      A Checkbox is used to select or deselect action items. It can be used for a single item or for a list of multiple items that a user can choose from. The control has two selection states: unselected and selected.
    </p>
    <p>
      Use a single Checkbox for a subordinate setting, such as with a "Remember me?" login scenario or with a terms of service agreement.
    </p>
    <p>
      For a binary choice, the main difference between a Checkbox and a toggle switch is that the Checkbox is for status and the toggle switch is for action. You can delay committing a Checkbox interaction (as part of a form submit, for example), while you should immediately commit a toggle switch interaction. Also, only Checkboxes allow for multi-selection.
    </p>
    <p>
      Use multiple Checkboxes for multi-select scenarios in which a user chooses one or more items from a group of choices that are not mutually exclusive.
    </p>
  </div>
  <div slot='Variants'>
    <docs-code-block title='Default Checkbox' :code='defaultCheckboxCode'>
      <ou-checkbox v-model='checked'>Checkbox</ou-checkbox>
    </docs-code-block>
    <docs-code-block title='Disabled Checkbox' :code='disabledCheckboxCode'>
      <ou-checkbox v-model='checked' disabled>Checkbox Disabled</ou-checkbox>
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-props-table :data='checkboxProps' name='Checkbox' />
  </div>
</docs-content>
</template>
<script>
export default {
  data() {
    return {
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
        { name: 'v-model', type: 'Boolean', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'bind boolean value to the checkbox' },
        { name: 'disabled', type: 'Boolean', required: 'false', acceptedValue: '--', defaultValue: 'false', description: 'if the checkbox is disabled' }
      ]
    };
  }
};
</script>
