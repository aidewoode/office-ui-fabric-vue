<template>
<docs-content title='Toggle'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default Toggle' :code='defaultToggleCode'>
      <ou-toggle
        v-model='toggle1'
        on-label='On'
        off-label='Off'
        description='Let apps use my location' />
    </docs-code-block>
    <docs-code-block title='Disabled Toggle' :code='disabledToggleCode'>
      <ou-toggle
        disabled
        v-model='toggle2'
        on-label='On'
        off-label='Off'
        description='Let apps use my location' />
    </docs-code-block>
    <docs-code-block title='Text Left Toggle' :code='textLeftToggleCode'>
      <ou-toggle
        type='textLeft'
        v-model='toggle3'
        on-label='On'
        off-label='Off'
        description='Let apps use my location' />
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-props-table :data='toggleProps' name='Toggle' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/toggle/overview.md';

export default {
  data() {
    return {
      overviewContent,
      toggle1: false,
      toggle2: false,
      toggle3: false,

      defaultToggleCode: `
        <template>
          <ou-toggle
            v-model='toggle'
            on-label='On'
            off-label='Off'
            description='Let apps use my location' />
        </template>
        <script>
          export default {
            data() {
              return {
                toggle: false
              };
            }
          };
        <\/script>
      `,

      disabledToggleCode: `
        <template>
          <ou-toggle
            disabled
            v-model='toggle'
            on-label='On'
            off-label='Off'
            description='Let apps use my location' />
        </template>
        <script>
          export default {
            data() {
              return {
                toggle: false
              };
            }
          };
        <\/script>
      `,

      textLeftToggleCode: `
        <template>
          <ou-toggle
            type='textLeft'
            v-model='toggle'
            on-label='On'
            off-label='Off'
            description='Let apps use my location' />
        </template>
        <script>
          export default {
            data() {
              return {
                toggle: false
              };
            }
          };
        <\/script>
      `,

      toggleProps: [
        { name: 'v-model', type: 'Boolean', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'bind boolean value to the toggle' },
        { name: 'on-label', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the text for the toggle when the status is on' },
        { name: 'off-label', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the text for the toggle when the status is off' },
        { name: 'description', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the description for the toggle' },
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'textLeft', defaultValue: '--', description: 'the type for the toggle' },
        { name: 'disabled', type: 'Boolean', required: 'false', acceptedValue: '--', defaultValue: 'false', description: 'if the toggle is disabled' }
      ]
    };
  }
};
</script>
