```
<template>
  <ou-button @click='openDefaultPanel'>Open Panel</ou-button>
  <ou-panel title='Panel' v-model='defaultPanelVisiblity'>
    <span class='ms-font-m'>Content goes here</span>
  </ou-panel>
</template>
<script>
  export default {
    data() {
      return {
        defaultPanelVisiblity: false
      };
    },

    methods: {
      openDefaultPanel() {
        this.defaultPanelVisiblity = true;
      }
    }
  };
</script>
```
