<template>
<docs-content title='ProgressIndicator'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default ProgressIndicator' :code='defaultProgressIndicatorCode'>
      <ou-progress-indicator :percent='0.9' name='Example.jpg' description='Example.jpg' />
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-table type='props' :data='progressIndicatorProps' name='ProgressIndicator' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/progress_indicator/overview.md';

export default {
  data() {
    return {
      overviewContent,
      defaultProgressIndicatorCode: "<ou-progress-indicator :percent='0.9' name='Example.jpg' description='Example.jpg' />",
      progressIndicatorProps: [
        { name: 'name', type: 'String', required: 'false', description: 'the name for the progress indicator' },
        { name: 'description', type: 'String', required: 'false', description: 'the description for the progress indicator' },
        { name: 'percent', type: 'Number', required: 'false', acceptedValue: '0 ~ 1', description: 'the percent for the progress indicator' }
      ]
    };
  }
};
</script>
