<template>
<docs-content title='Link'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default Link' :code='defaultLinkCode'>
      <ou-link href='#' title='More info about Example Link'>Example Link</ou-link>
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-props-table :data='linkProps' name='Link' />
    <docs-events-table :data='linkEvents' name='Link' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/link/overview.md';

export default {
  data() {
    return {
      overviewContent,
      defaultLinkCode: "<ou-link href='#' title='More info about Example Link'>Example Link</ou-link>",
      linkProps: [
        { name: 'href', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the url of the link' },
        { name: 'title', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the title of the link' }
      ],
      linkEvents: [
        { name: 'click', params: '--', description: 'the callback function when clicked' }
      ]
    };
  }
};
</script>
