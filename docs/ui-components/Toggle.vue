<template>
<docs-content title='Toggle'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default Toggle' :code='defaultCode'>
      <ou-toggle
        v-model='toggle1'
        on-label='On'
        off-label='Off'
        description='Let apps use my location' />
    </docs-code-block>
    <docs-code-block title='Disabled Toggle' :code='disabledCode'>
      <ou-toggle
        disabled
        v-model='toggle2'
        on-label='On'
        off-label='Off'
        description='Let apps use my location' />
    </docs-code-block>
    <docs-code-block title='Text Left Toggle' :code='textLeftCode'>
      <ou-toggle
        type='textLeft'
        v-model='toggle3'
        on-label='On'
        off-label='Off'
        description='Let apps use my location' />
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-table type='props' :data='toggleProps' name='Toggle' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/toggle/overview.md';
import defaultCode from '../markdown/toggle/defaultCode.md';
import disabledCode from '../markdown/toggle/disabledCode.md';
import textLeftCode from '../markdown/toggle/textLeftCode.md';

export default {
  data() {
    return {
      overviewContent,
      defaultCode,
      disabledCode,
      textLeftCode,
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggleProps: [
        { name: 'v-model', type: 'Boolean', required: 'false', description: 'bind boolean value to the toggle' },
        { name: 'on-label', type: 'String', required: 'false', description: 'the text for the toggle when the status is on' },
        { name: 'off-label', type: 'String', required: 'false', description: 'the text for the toggle when the status is off' },
        { name: 'description', type: 'String', required: 'false', description: 'the description for the toggle' },
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'textLeft', description: 'the type for the toggle' },
        { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the toggle is disabled' }
      ]
    };
  }
};
</script>
