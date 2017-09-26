```
<template>
  <ou-button @click='openLargePanel'>Open Panel</ou-button>
  <ou-panel title='Panel' size='lg' v-model='largePanelVisiblity'>
    <span class='ms-font-m'>Content goes here</span>
  </ou-panel>
</template>
<script>
  export default {
    data() {
      return {
        largePanelVisiblity: false
      };
    },

    methods: {
      openLargePanel() {
        this.largePanelVisiblity = true;
      }
    }
  };
</script>
```
