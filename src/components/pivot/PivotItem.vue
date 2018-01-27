<template>
  <div class='ms-Pivot-content' :data-content='label'><slot /></div>
</template>
<script>
  export default {
    name: 'ou-pivot-item',

    props: {
      label: {
        type: String,
        required: true
      }
    }
  };
</script>
