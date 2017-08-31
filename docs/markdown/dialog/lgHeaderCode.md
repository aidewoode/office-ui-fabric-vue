```
<template>
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
</template>
<script>
  export default {
    data() {
      return {
        lgHeaderDialogVisible: false
      };
    }
  };
</script>
```
