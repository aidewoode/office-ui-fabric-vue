```
<template>
  <ou-button @click='openExtraLargePanel'>Open Panel</ou-button>
  <ou-panel title='Panel' size='xl' v-model='extraLargePanelVisiblity'>
    <span class='ms-font-m'>Content goes here</span>
  </ou-panel>
</template>
<script>
  export default {
    data() {
      return {
        extraLargePanelVisiblity: false
      };
    },

    methods: {
      openExtraLargePanel() {
        this.extraLargePanelVisiblity = true;
      }
    }
  };
</script>
```
