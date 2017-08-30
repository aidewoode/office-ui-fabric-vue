<template>
<docs-content title='TextField'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default TextField' :code='defaultTextFieldCode'>
      <ou-text-field label='Name' />
    </docs-code-block>
    <docs-code-block title='Multiline TextField' :code='multipleTextFieldCode'>
      <ou-text-field type='multiline' label='Name' />
    </docs-code-block>
    <docs-code-block title='Placeholder TextField' :code='placeholderTextFieldCode'>
      <ou-text-field type='placeholder' label='Given name' />
    </docs-code-block>
    <docs-code-block title='Underlined TextField' :code='underlinedTextFieldCode'>
      <ou-text-field type='underlined' label='Name' />
    </docs-code-block>
    <docs-code-block title='Disabled TextField' :code='disabledTextFieldCode'>
      <ou-text-field label='Name' disabled />
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-table type='props' :data='textFieldProps' name='TextField' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/text_field/overview.md';

export default {
  data() {
    return {
      overviewContent,
      defaultTextFieldCode: `
        <template>
          <ou-text-field v-model='text' label='Name' />
        </template>
        <script>
          export default {
            date() {
              return {
                text: ''
              };
            }
          };
        <\/script>
      `,

      multipleTextFieldCode: `
        <template>
          <ou-text-field type='multiline' v-model='text' label='Name' />
        </template>
        <script>
          export default {
            date() {
              return {
                text: ''
              };
            }
          };
        <\/script>
      `,

      placeholderTextFieldCode: `
        <template>
          <ou-text-field type='placeholder' v-model='text' label='Given name' />
        </template>
        <script>
          export default {
            date() {
              return {
                text: ''
              };
            }
          };
        <\/script>
      `,

      underlinedTextFieldCode: `
        <template>
          <ou-text-field type='underlined' v-model='text' label='Name' />
        </template>
        <script>
          export default {
            date() {
              return {
                text: ''
              };
            }
          };
        <\/script>
      `,

      disabledTextFieldCode: `
        <template>
          <ou-text-field v-model='text' label='Name' disabled />
        </template>
        <script>
          export default {
            date() {
              return {
                text: ''
              };
            }
          };
        <\/script>
      `,

      textFieldProps: [
        { name: 'v-model', type: 'String', required: 'false', description: 'bind value to the textField' },
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'multiline, placeholder, underlined', description: 'the type of the textField, when the type is placeholder, the label will be the content of placeholder' },
        { name: 'label', type: 'String', required: 'false', description: 'the label of the textField' },
        { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the textField is disabled' }
      ]
    };
  }
};
</script>
