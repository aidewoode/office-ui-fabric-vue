<template>
  <a class='ms-Link' :href='href' :title='title' @click='clickEvent'>
    <slot />
  </a>
</template>
<script>
  export default {
    name: 'ou-link',

    props: {
      href: String,
      title: String,
    },

    methods: {
      clickEvent() {
        this.$emit('click');
      }
    }
  };
</script>
