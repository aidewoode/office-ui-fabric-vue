<template>
<docs-content title='MessageBar'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default MessageBar' :code='defaultMessageBarCode'>
      <ou-message-bar icon='Info'>
        Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
        <br />
        <ou-link>Hyperlink string</ou-link>
      </ou-message-bar>
    </docs-code-block>
    <docs-code-block title='Success MessageBar' :code='successMessageBarCode'>
      <ou-message-bar icon='Completed' type='success'>
        Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
        <br />
        <ou-link>Hyperlink string</ou-link>
      </ou-message-bar>
    </docs-code-block>
    <docs-code-block title='Error MessageBar' :code='errorMessageBarCode'>
      <ou-message-bar icon='ErrorBadge' type='error'>
        Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
        <br />
        <ou-link>Hyperlink string</ou-link>
      </ou-message-bar>
    </docs-code-block>
    <docs-code-block title='Blocked MessageBar' :code='blockedMessageBarCode'>
      <ou-message-bar icon='Blocked' type='blocked'>
        Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
        <br />
        <ou-link>Hyperlink string</ou-link>
      </ou-message-bar>
    </docs-code-block>
    <docs-code-block title='Warning MessageBar' :code='warningMessageBarCode'>
      <ou-message-bar icon='Info' type='warning'>
        Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
        <br />
        <ou-link>Hyperlink string</ou-link>
      </ou-message-bar>
    </docs-code-block>
    <docs-code-block title='Severe Warning MessageBar' :code='severeWarningMessageBarCode'>
      <ou-message-bar icon='Warning' type='severeWarning'>
        Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
        <br />
        <ou-link>Hyperlink string</ou-link>
      </ou-message-bar>
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-props-table :data='MessageBarProps' name='MessageBar' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/message_bar/overview.md';

export default {
  data() {
    return {
      overviewContent,
      defaultMessageBarCode: `
        <ou-message-bar icon='Info'>
          Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
          <br />
          <ou-link>Hyperlink string</ou-link>
        </ou-message-bar>
      `,

      successMessageBarCode: `
        <ou-message-bar icon='Completed' type='success'>
          Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
          <br />
          <ou-link>Hyperlink string</ou-link>
        </ou-message-bar>
      `,

      errorMessageBarCode: `
        <ou-message-bar icon='ErrorBadge' type='error'>
          Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
          <br />
          <ou-link>Hyperlink string</ou-link>
        </ou-message-bar>
      `,

      blockedMessageBarCode: `
        <ou-message-bar icon='Blocked' type='blocked'>
          Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
          <br />
          <ou-link>Hyperlink string</ou-link>
        </ou-message-bar>
      `,

      warningMessageBarCode: `
        <ou-message-bar icon='Blocked' type='blocked'>
          Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
          <br />
          <ou-link>Hyperlink string</ou-link>
        </ou-message-bar>
      `,

      severeWarningMessageBarCode: `
        <ou-message-bar icon='Warning' type='severeWarning'>
          Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
          <br />
          <ou-link>Hyperlink string</ou-link>
        </ou-message-bar>
      `,

      MessageBarProps: [
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'success, error, blocked, warning, severeWarning', defaultValue: '--', description: 'the type of the MessageBar' },
        { name: 'icon', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the icon for the MessageBar' },
      ]
    };
  }
};
</script>
