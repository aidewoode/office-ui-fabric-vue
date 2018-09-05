```
<template>
  <ou-button @click='openBlockingPanel'>Open Panel</ou-button>
  <ou-panel title='Panel' block v-model='blockingPanelVisiblity'>
    <ou-button @click='closeBlockingPanel'>Close Panel</ou-button>
  </ou-panel>
</template>
<script>
  export default {
    data() {
      return {
        blockingPanelVisiblity: false
      };
    },

    methods: {
      openBlockingPanel() {
        this.blockingPanelVisiblity = true;
      },

      closeBlockingPanel() {
        this.blockingPanelVisiblity = false;
      }
    }
  };
</script>
```
