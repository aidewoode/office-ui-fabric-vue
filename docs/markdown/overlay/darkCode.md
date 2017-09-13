```
<template>
  <ou-overlay type='dark' v-model='darkOverlayVisibility' />
  <ou-button @click='showDarkOverlay'>Show the overlay</ou-button>
</template>
<script>
  export default {
    data() {
      return {
        darkOverlayVisibility: false
      };
    },

    methods: {
      showDarkOverlay() {
        this.darkOverlayVisibility = true;
      }
    }
  };
</script>
```
