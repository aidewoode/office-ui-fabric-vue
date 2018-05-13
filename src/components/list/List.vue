<template>
  <ul class='ms-List' ref='list'><slot /></ul>
</template>
<script>
  export default {
    name: 'ou-list',

    mounted() {
      new this.$fabric.List(this.$refs.list);
    }
  };
</script>
