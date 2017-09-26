<template>
  <docs-content title='Panel'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default Panel' :code='defaultCode'>
        <ou-button @click='openDefaultPanel'>Open Panel</ou-button>
        <ou-panel title='Panel' v-model='defaultPanelVisiblity'>
          <span class='ms-font-m'>Content goes here</span>
        </ou-panel>
      </docs-code-block>
      <docs-code-block title='Medium Panel' :code='mediumCode'>
        <ou-button @click='openMediumPanel'>Open Panel</ou-button>
        <ou-panel title='Panel' size='md' v-model='mediumPanelVisiblity'>
          <span class='ms-font-m'>Content goes here</span>
        </ou-panel>
      </docs-code-block>
      <docs-code-block title='Large Panel' :code='largeCode'>
        <ou-button @click='openLargePanel'>Open Panel</ou-button>
        <ou-panel title='Panel' size='lg' v-model='largePanelVisiblity'>
          <span class='ms-font-m'>Content goes here</span>
        </ou-panel>
      </docs-code-block>
      <docs-code-block title='Large Fixed Panel' :code='largeFixedCode'>
        <ou-button @click='openLargeFixedPanel'>Open Panel</ou-button>
        <ou-panel title='Panel' size='lg' fixed v-model='largeFixedPanelVisiblity'>
          <span class='ms-font-m'>Content goes here</span>
        </ou-panel>
      </docs-code-block>
      <docs-code-block title='Extra Large Panel' :code='extraLargeCode'>
        <ou-button @click='openExtraLargePanel'>Open Panel</ou-button>
        <ou-panel title='Panel' size='xl' v-model='extraLargePanelVisiblity'>
          <span class='ms-font-m'>Content goes here</span>
        </ou-panel>
      </docs-code-block>
      <docs-code-block title='Extra Extra Large Panel' :code='extraExtraLargeCode'>
        <ou-button @click='openExtraExtraLargePanel'>Open Panel</ou-button>
        <ou-panel title='Panel' size='xxl' v-model='extraExtraLargePanelVisiblity'>
          <span class='ms-font-m'>Content goes here</span>
        </ou-panel>
      </docs-code-block>
      <docs-code-block title='Left Panel' :code='leftCode'>
        <ou-button @click='openLeftPanel'>Open Panel</ou-button>
        <ou-panel title='Panel' left v-model='leftPanelVisiblity'>
          <span class='ms-font-m'>Content goes here</span>
        </ou-panel>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='panelProps' name='Panel' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/panel/overview.md';
  import defaultCode from '../markdown/panel/defaultCode.md';
  import mediumCode from '../markdown/panel/mediumCode.md';
  import largeCode from '../markdown/panel/largeCode.md';
  import largeFixedCode from '../markdown/panel/largeFixedCode.md';
  import extraLargeCode from '../markdown/panel/extraLargeCode.md';
  import extraExtraLargeCode from '../markdown/panel/extraExtraLargeCode.md';
  import leftCode from '../markdown/panel/leftCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        mediumCode,
        largeCode,
        largeFixedCode,
        extraLargeCode,
        extraExtraLargeCode,
        leftCode,
        defaultPanelVisiblity: false,
        mediumPanelVisiblity: false,
        largePanelVisiblity: false,
        largeFixedPanelVisiblity: false,
        extraLargePanelVisiblity: false,
        extraExtraLargePanelVisiblity: false,
        leftPanelVisiblity: false,
        panelProps: [
          { name: 'v-model', type: 'Boolean', required: 'false', description: "bind boolean value to the panel to control it's visibility" },
          { name: 'size', type: 'String', required: 'false', acceptedValue: 'md, lg, xl, xxl', description: 'the size of the panel' },
          { name: 'title', type: 'String', required: 'false', description: 'the title of the panel' },
          { name: 'fixed', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the panel is fixed' },
          { name: 'left', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the panel position is left' }
        ]
      };
    },

    methods: {
      openDefaultPanel() {
        this.defaultPanelVisiblity = true;
      },

      openMediumPanel() {
        this.mediumPanelVisiblity = true;
      },

      openLargePanel() {
        this.largePanelVisiblity = true;
      },

      openLargeFixedPanel() {
        this.largeFixedPanelVisiblity = true;
      },

      openExtraLargePanel() {
        this.extraLargePanelVisiblity = true;
      },

      openExtraExtraLargePanel() {
        this.extraExtraLargePanelVisiblity = true;
      },

      openLeftPanel() {
        this.leftPanelVisiblity = true;
      }
    }
  };
</script>
