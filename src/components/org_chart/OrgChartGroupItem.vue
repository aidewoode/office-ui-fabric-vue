<template>
  <li class='ms-OrgChart-listItem'>
    <button class='ms-OrgChart-listItemBtn' @click='clickEvent'><slot /></button>
  </li>
</template>
<script>
  export default {
    name: 'ou-org-chart-group-item',

    methods: {
      clickEvent() {
        this.$emit('click');
      }
    }
  };
</script>
