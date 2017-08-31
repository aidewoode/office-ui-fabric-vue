```
<template>
  <ou-toggle
    v-model='toggle'
    on-label='On'
    off-label='Off'
    description='Let apps use my location' />
</template>
<script>
  export default {
    data() {
      return {
        toggle: false
      };
    }
  };
</script>
```
