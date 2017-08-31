```
<template>
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
</template>
<script>
  export default {
    data() {
      return {
        blockingDialogVisible: false
      };
    }
  };
</script>
```
