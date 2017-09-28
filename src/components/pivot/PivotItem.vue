<template>
  <div class='ms-Pivot-content' :data-content='label'><slot /></div>
</template>
<script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      }
    }
  };
</script>
