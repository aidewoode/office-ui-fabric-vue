<template>
  <docs-content title='MessageBar'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default MessageBar' :code='defaultCode'>
        <ou-message-bar icon='Info'>
          Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
          <br />
          <ou-link>Hyperlink string</ou-link>
        </ou-message-bar>
      </docs-code-block>
      <docs-code-block title='Success MessageBar' :code='successCode'>
        <ou-message-bar icon='Completed' type='success'>
          Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
          <br />
          <ou-link>Hyperlink string</ou-link>
        </ou-message-bar>
      </docs-code-block>
      <docs-code-block title='Error MessageBar' :code='errorCode'>
        <ou-message-bar icon='ErrorBadge' type='error'>
          Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
          <br />
          <ou-link>Hyperlink string</ou-link>
        </ou-message-bar>
      </docs-code-block>
      <docs-code-block title='Blocked MessageBar' :code='blockedCode'>
        <ou-message-bar icon='Blocked' type='blocked'>
          Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
          <br />
          <ou-link>Hyperlink string</ou-link>
        </ou-message-bar>
      </docs-code-block>
      <docs-code-block title='Warning MessageBar' :code='warningCode'>
        <ou-message-bar icon='Info' type='warning'>
          Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
          <br />
          <ou-link>Hyperlink string</ou-link>
        </ou-message-bar>
      </docs-code-block>
      <docs-code-block title='Severe Warning MessageBar' :code='severeWarningCode'>
        <ou-message-bar icon='Warning' type='severeWarning'>
          Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
          <br />
          <ou-link>Hyperlink string</ou-link>
        </ou-message-bar>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='MessageBarProps' name='MessageBar' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/message_bar/overview.md';
  import defaultCode from '../markdown/message_bar/defaultCode.md';
  import successCode from '../markdown/message_bar/successCode.md';
  import errorCode from '../markdown/message_bar/errorCode.md';
  import blockedCode from '../markdown/message_bar/blockedCode.md';
  import warningCode from '../markdown/message_bar/warningCode.md';
  import severeWarningCode from '../markdown/message_bar/severeWarningCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        successCode,
        errorCode,
        blockedCode,
        warningCode,
        severeWarningCode,
        MessageBarProps: [
          { name: 'type', type: 'String', required: 'false', acceptedValue: 'success, error, blocked, warning, severeWarning', description: 'the type of the MessageBar' },
          { name: 'icon', type: 'String', required: 'false', description: 'the icon for the MessageBar' },
        ]
      };
    }
  };
</script>
