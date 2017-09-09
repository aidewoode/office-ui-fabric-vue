<template>
  <docs-content title='Callout'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default Callout' :code='defaultCode'>
        <ou-callout
          title='All of your favorite people'
          content='Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.'>
          <ou-link slot='actions'>Learn more</ou-link>
          <ou-button>Open Callout</ou-button>
        </ou-callout>
      </docs-code-block>
      <docs-code-block title='Close Callout' :code='closeCode'>
        <ou-callout
          :showClose='true'
          title='All of your favorite people'
          content='Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.'>
          <ou-link slot='actions'>Learn more</ou-link>
          <ou-button>Open Callout</ou-button>
        </ou-callout>
      </docs-code-block>
      <docs-code-block title='Action Callout' :code='actionCode'>
        <ou-callout
          type='actionText'
          title='All of your favorite people'
          content='Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.'>
          <ou-button slot='actions'>Command</ou-button>
          <ou-button>Open Callout Action Text</ou-button>
        </ou-callout>
      </docs-code-block>
      <docs-code-block title='OOBE (Out of the Box Experience)' :code='OOBECode'>
        <ou-callout
          type='OOBE'
          title='All of your favorite people'
          content='Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.'>
          <div slot='actions'>
            <ou-button type='primary'>More</ou-button>
            <ou-button>Got it</ou-button>
          </div>
          <ou-button>Open Callout OOBE</ou-button>
        </ou-callout>
      </docs-code-block>
      <docs-code-block title='Peek Callout' :code='peekCode'>
        <ou-callout
          type='peek'
          title='All of your favorite people'>
          <ou-button slot='actions'>Got it</ou-button>
          <ou-button>Open Callout Peek</ou-button>
        </ou-callout>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='calloutProps' name='Callout'/>
      <docs-table type='slot' :data='calloutSlot' name='Callout' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/callout/overview.md';
  import defaultCode from '../markdown/callout/defaultCode.md';
  import closeCode from '../markdown/callout/closeCode.md';
  import actionCode from '../markdown/callout/actionCode.md';
  import OOBECode from '../markdown/callout/OOBECode.md';
  import peekCode from '../markdown/callout/peekCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        closeCode,
        actionCode,
        OOBECode,
        peekCode,
        calloutProps: [
          { name: 'type', type: 'String', required: 'false', acceptedValue: 'actionText, OOBE, peek', description: 'the type of the callout.' },
          { name: 'position', type: 'String', required: 'false', acceptedValue: 'right, left, top, bottom', defaultValue: 'right', description: 'the position of the callout' },
          { name: 'showClose', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the close button was shown' },
          { name: 'title', type: 'String', required: 'false', description: 'the title of the callout' },
          { name: 'content', type: 'String', required: 'false', description: 'the content of the callout' }
        ],

        calloutSlot: [
          { name: 'actions', description: 'the content for the area of actions' },
          { name: 'content', description: 'the content for the area of content, if you have been set the content props, this slot will not be render' }
        ]
      };
    }
  };
</script>
