```
<template>
  <ou-dropdown v-model='select' label='Dropdown label' disabled>
    <ou-dropdown-item value='dog'>Dog barking</ou-dropdown-item>
    <ou-dropdown-item value='wind'>Wind blowing</ou-dropdown-item>
    <ou-dropdown-item value='duck'>Duck quacking</ou-dropdown-item>
    <ou-dropdown-item value='cow'>Cow mooing</ou-dropdown-item>
  </ou-dropdown>
</template>
<script>
  export default {
    data() {
      return {
        select: 'dog'
      };
    }
  };
</script>
```
