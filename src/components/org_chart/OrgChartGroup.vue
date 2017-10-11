<template>
  <div class='ms-OrgChart-group'>
    <div class='ms-OrgChart-groupTitle'>{{ title }}</div>
    <ul class='ms-OrgChart-list'><slot /></ul>
  </div>
</template>
<script>
  export default {
    props: {
      title: String
    }
  };
</script>
