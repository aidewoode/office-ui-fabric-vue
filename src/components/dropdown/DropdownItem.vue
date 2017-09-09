<template>
  <option><slot /></option>
</template>
<script>
  export default {
    props: {
      value: [String, Number]
    }
  };
</script>
