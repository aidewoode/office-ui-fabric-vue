<template>
<docs-content title='Link'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default Link' :code='defaultCode'>
      <ou-link href='#' title='More info about Example Link'>Example Link</ou-link>
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-table type='props' :data='linkProps' name='Link' />
    <docs-table type='events' :data='linkEvents' name='Link' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/link/overview.md';
import defaultCode from '../markdown/link/defaultCode.md';

export default {
  data() {
    return {
      overviewContent,
      defaultCode,
      linkProps: [
        { name: 'href', type: 'String', required: 'false', description: 'the url of the link' },
        { name: 'title', type: 'String', required: 'false', description: 'the title of the link' }
      ],
      linkEvents: [
        { name: 'click', description: 'the callback function when clicked' }
      ]
    };
  }
};
</script>
