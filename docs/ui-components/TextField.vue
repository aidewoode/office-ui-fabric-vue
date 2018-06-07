<template>
  <docs-content title='TextField'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default TextField' :code='defaultCode'>
        <ou-text-field label='Name' />
      </docs-code-block>
      <docs-code-block title='Multiline TextField' :code='multipleCode'>
        <ou-text-field type='multiline' label='Name' />
      </docs-code-block>
      <docs-code-block title='Placeholder TextField' :code='placeholderCode'>
        <ou-text-field placeholder='Given name' />
      </docs-code-block>
      <docs-code-block title='Underlined TextField' :code='underlinedCode'>
        <ou-text-field type='underlined' label='Name' />
      </docs-code-block>
      <docs-code-block title='Disabled TextField' :code='disabledCode'>
        <ou-text-field label='Name' disabled />
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='textFieldProps' name='TextField' />
      <docs-table type='events' :data='textFieldEvents' name='TextField' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/text_field/overview.md';
  import defaultCode from '../markdown/text_field/defaultCode.md';
  import multipleCode from '../markdown/text_field/multipleCode.md';
  import placeholderCode from '../markdown/text_field/placeholderCode.md';
  import underlinedCode from '../markdown/text_field/underlinedCode.md';
  import disabledCode from '../markdown/text_field/disabledCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        multipleCode,
        placeholderCode,
        underlinedCode,
        disabledCode,
        textFieldProps: [
          { name: 'v-model', type: 'String', required: 'false', description: 'bind value to the textField' },
          { name: 'type', type: 'String', required: 'false', acceptedValue: 'multiline, placeholder, underlined', description: 'the type of the textField' },
          { name: 'input-type', type: 'String', defaultValue: 'text', required: 'false', acceptedValue: 'text, password, file', description: 'the input type of the textField' },
          { name: 'label', type: 'String', required: 'false', description: 'the label of the textField' },
          { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the textField is disabled' }
        ],
        textFieldEvents: [
          { name: 'change', description: 'the callback function when value changed' }
        ]
      };
    }
  };
</script>
