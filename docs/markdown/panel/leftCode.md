```
<template>
  <ou-button @click='openLeftPanel'>Open Panel</ou-button>
  <ou-panel title='Panel' left v-model='leftPanelVisiblity'>
    <span class='ms-font-m'>Content goes here</span>
  </ou-panel>
</template>
<script>
  export default {
    data() {
      return {
        leftPanelVisiblity: false
      };
    },

    methods: {
      openLeftPanel() {
        this.leftPanelVisiblity = true;
      }
    }
  };
</script>
```
