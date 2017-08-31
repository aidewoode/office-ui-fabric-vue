```
<template>
  <ou-button @click='multilineDialogVisible=true'>Open Dialog</ou-button>
  <ou-dialog
    type='multiline'
    title='All emails together'
    v-model='multilineDialogVisible'>
    <ou-button type='compound' @click='multilineDialogVisible=false' description='Description of this action this button takes'>Create Account</ou-button>
    <ou-button type='compound' @click='multilineDialogVisible=false' description='Description of this action this button takes'>Sign in</ou-button>
    <ou-button type='compound' @click='multilineDialogVisible=false' description='Description of this action this button takes'>Settings</ou-button>
  </ou-dialog>
</template>
<script>
  export default {
    data() {
      return {
        multilineDialogVisible: false
      };
    }
  };
</script>
```
