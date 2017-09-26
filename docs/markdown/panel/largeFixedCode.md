```
<template>
  <ou-button @click='openLargeFixedPanel'>Open Panel</ou-button>
  <ou-panel title='Panel' size='lg' fixed v-model='largeFixedPanelVisiblity'>
    <span class='ms-font-m'>Content goes here</span>
  </ou-panel>
</template>
<script>
  export default {
    data() {
      return {
        largeFixedPanelVisiblity: false
      };
    },

    methods: {
      openLargeFixedPanel() {
        this.largeFixedPanelVisiblity = true;
      }
    }
  };
</script>
```
