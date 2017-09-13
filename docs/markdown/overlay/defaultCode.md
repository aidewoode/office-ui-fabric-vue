```
<template>
  <ou-overlay v-model='overlayVisibility' />
  <ou-button @click='showOverlay'>Show the overlay</ou-button>
</template>
<script>
  export default {
    data() {
      return {
        overlayVisibility: false
      };
    },

    methods: {
      showOverlay() {
        this.overlayVisibility = true;
      }
    }
  };
</script>
```
