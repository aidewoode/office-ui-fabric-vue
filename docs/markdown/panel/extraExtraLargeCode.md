```
<template>
  <ou-button @click='openExtraExtraLargePanel'>Open Panel</ou-button>
  <ou-panel title='Panel' size='xxl' v-model='extraExtraLargePanelVisiblity'>
    <span class='ms-font-m'>Content goes here</span>
  </ou-panel>
</template>
<script>
  export default {
    data() {
      return {
        extraExtraLargePanelVisiblity: false
      };
    },

    methods: {
      openExtraExtraLargePanel() {
        this.extraExtraLargePanelVisiblity = true;
      }
    }
  };
</script>
```
