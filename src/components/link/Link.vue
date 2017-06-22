<template>
<a class='ms-Link' :href='href' :title='title' @click='clickEvent'>
  <slot />
</a>
</template>
<script>
export default {
  props: {
    href: {
      type: String
    },

    title: {
      type: String
    }
  },

  methods: {
    clickEvent() {
      this.$emit('click');
    }
  }
};
</script>
