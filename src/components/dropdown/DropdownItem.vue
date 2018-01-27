<template>
  <option><slot /></option>
</template>
<script>
  export default {
    name: 'ou-dropdown-item',

    props: {
      value: [String, Number]
    }
  };
</script>
