```
<template>
  <ou-button @click='openMediumPanel'>Open Panel</ou-button>
  <ou-panel title='Panel' size='medium' v-model='mediumPanelVisiblity'>
    <span class='ms-font-m'>Content goes here</span>
  </ou-panel>
</template>
<script>
  export default {
    data() {
      return {
        mediumPanelVisiblity: false
      };
    },

    methods: {
      openMediumPanel() {
        this.defaultPanelVisiblity = true;
      }
    }
  };
</script>
```
