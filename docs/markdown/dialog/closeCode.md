```
<template>
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
</template>
<script>
  export default {
    data() {
      return {
        closeDialogVisible: false
      };
    }
  };
</script>
```
