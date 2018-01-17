<template>
  <div class='ms-MessageBanner' ref='messageBanner'>
    <div class='ms-MessageBanner-content'>
      <div class='ms-MessageBanner-text'>
        <div class='ms-MessageBanner-clipper'>{{ content }}</div>
      </div>
      <button class='ms-MessageBanner-expand'>
        <i class='ms-Icon ms-Icon--ChevronDown'></i>
      </button>
      <div class='ms-MessageBanner-action'>
        <slot name='actions' />
      </div>
    </div>
    <button class='ms-MessageBanner-close'>
      <i class='ms-Icon ms-Icon--Clear'></i>
    </button>
  </div>
</template>
<script>
  export default {
    props: {
      content: String
    },

    mounted() {
      new this.$fabric.MessageBanner(this.$refs.messageBanner);
    }
  };
</script>
