<template>
  <docs-content title='Dialog'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default Dialog' :code='defaultCode'>
        <ou-button @click='defaultDialogVisible=true'>Open Dialog</ou-button>
        <ou-dialog
          title='All emails together'
          v-model='defaultDialogVisible'
          subText='Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'>
          <ou-checkbox>Option 1</ou-checkbox>
          <ou-checkbox>Option 2</ou-checkbox>
          <div slot='actions'>
            <ou-button type='primary' @click='defaultDialogVisible=false'>Save</ou-button>
            <ou-button @click='defaultDialogVisible=false'>Cancel</ou-button>
          </div>
        </ou-dialog>
      </docs-code-block>
      <docs-code-block title='Multiline Dialog' :code='multilineCode'>
        <ou-button @click='multilineDialogVisible=true'>Open Dialog</ou-button>
        <ou-dialog
          type='multiline'
          title='All emails together'
          v-model='multilineDialogVisible'>
          <ou-button type='compound' @click='multilineDialogVisible=false' description='Description of this action this button takes'>Create Account</ou-button>
          <ou-button type='compound' @click='multilineDialogVisible=false' description='Description of this action this button takes'>Sign in</ou-button>
          <ou-button type='compound' @click='multilineDialogVisible=false' description='Description of this action this button takes'>Settings</ou-button>
        </ou-dialog>
      </docs-code-block>
      <docs-code-block title='Large Header Dialog' :code='lgHeaderCode'>
        <ou-button @click='lgHeaderDialogVisible=true'>Open Dialog</ou-button>
        <ou-dialog
          type='lgHeader'
          title='All emails together'
          v-model='lgHeaderDialogVisible'
          subText='Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'>
          <div slot='actions'>
            <ou-button type='primary' @click='lgHeaderDialogVisible=false'>Save</ou-button>
            <ou-button @click='lgHeaderDialogVisible=false'>Cancel</ou-button>
          </div>
        </ou-dialog>
      </docs-code-block>
      <docs-code-block title='Blocking Dialog' :code='blockingCode'>
        <ou-button @click='blockingDialogVisible=true'>Open Dialog</ou-button>
        <ou-dialog
          type='blocking'
          title='Unsaved changes'
          v-model='blockingDialogVisible'
          subText='Are you sure you want to discard these changes?'>
          <ou-checkbox>Option 1</ou-checkbox>
          <ou-checkbox>Option 2</ou-checkbox>
          <div slot='actions'>
            <ou-button type='primary' @click='blockingDialogVisible=false'>Save</ou-button>
            <ou-button @click='blockingDialogVisible=false'>Cancel</ou-button>
          </div>
        </ou-dialog>
      </docs-code-block>
      <docs-code-block title='Close Dialog' :code='closeCode'>
        <ou-button @click='closeDialogVisible=true'>Open Dialog</ou-button>
        <ou-dialog
          type='close'
          title='All emails together'
          v-model='closeDialogVisible'>
          <ou-checkbox>Option 1</ou-checkbox>
          <ou-checkbox>Option 2</ou-checkbox>
          <div slot='actions'>
            <ou-button type='primary' @click='closeDialogVisible=false'>Save</ou-button>
            <ou-button @click='closeDialogVisible=false'>Cancel</ou-button>
          </div>
        </ou-dialog>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='dialogProps' name='Dialog' />
      <docs-table type='slot' :data='dialogSlot' name='Dialog' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/dialog/overview.md';
  import defaultCode from '../markdown/dialog/defaultCode.md';
  import multilineCode from '../markdown/dialog/multilineCode.md';
  import lgHeaderCode from '../markdown/dialog/lgHeaderCode.md';
  import blockingCode from '../markdown/dialog/blockingCode.md';
  import closeCode from '../markdown/dialog/closeCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultDialogVisible: false,
        multilineDialogVisible: false,
        lgHeaderDialogVisible: false,
        blockingDialogVisible: false,
        closeDialogVisible: false,
        defaultCode,
        multilineCode,
        lgHeaderCode,
        blockingCode,
        closeCode,
        dialogProps: [
          { name: 'v-model', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'bind the visibility to the dialog' },
          { name: 'type', type: 'String', required: 'false', acceptedValue: 'multiline, lgHeader, blocking, close', description: 'the type for the dialog' },
          { name: 'title', type: 'String', required: 'false', description: 'the title for the dialog' },
          { name: 'subText', type: 'String', required: 'false', description: 'the description for the dialog' }
        ],

        dialogSlot: [
          { name: 'actions', description: 'the content for the area of actions' }
        ]
      };
    }
  };
</script>
