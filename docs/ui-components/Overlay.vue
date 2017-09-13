<template>
  <docs-content title='Overlay'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default Overlay' :code='defaultCode'>
        <ou-overlay v-model='overlayVisibility' />
        <ou-button @click='showOverlay'>Show the overlay</ou-button>
      </docs-code-block>
      <docs-code-block title='Dark overlay' :code='darkCode'>
        <ou-overlay type='dark' v-model='darkOverlayVisibility' />
        <ou-button @click='showDarkOverlay'>Show the overlay</ou-button>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='overlayProps' name='Overlay' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/overlay/overview.md';
  import defaultCode from '../markdown/overlay/defaultCode.md';
  import darkCode from '../markdown/overlay/darkCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        darkCode,
        overlayVisibility: false,
        darkOverlayVisibility: false,
        overlayProps: [
          { name: 'v-model', type: 'Boolean', required: 'false', description: "bind boolean value to the overlay to control it's visibility" },
          { name: 'type', type: 'String', required: 'false', acceptedValue: 'dark', description: 'the type of the overlay' }
        ]
      };
    },

    methods: {
      showOverlay() {
        this.overlayVisibility = true;
      },

      showDarkOverlay() {
        this.darkOverlayVisibility = true;
      }
    }
  };
</script>
