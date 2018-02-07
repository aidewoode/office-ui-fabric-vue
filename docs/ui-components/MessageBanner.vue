<template>
  <docs-content title='MessageBanner'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default MessageBanner' :code='defaultCode'>
        <ou-message-banner>
          You have reached your total storage on OneDrive. Please upgrade your storage plan if you need more storage.
          <ou-button type='primary' slot='actions'>Get More Storage</ou-button>
        </ou-message-banner>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='slots' :data='messageBannerSlots' name='MessageBanner' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/message_banner/overview.md';
  import defaultCode from '../markdown/message_banner/defaultCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        messageBannerSlots: [
          { name: 'actions', description: 'the content for the area of actions' }
        ]
      };
    }
  };
</script>
