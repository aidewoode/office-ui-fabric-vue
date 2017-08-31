```
<template>
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
</template>
<script>
  export default {
    data() {
      return {
        defaultDialogVisible: false
      };
    }
  };
</script>
```
