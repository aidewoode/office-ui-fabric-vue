<template>
  <div class='ms-ListItem-action' @click.stop='clickEvent'>
    <i class='ms-Icon' :class='iconClass'></i>
  </div>
</template>
<script>
  import icon from '../../mixins/props/icon';

  export default {
    name: 'ou-list-action-item',
    mixins: [icon],

    methods: {
      clickEvent() {
        this.$emit('click');
      }
    }
  };
</script>
