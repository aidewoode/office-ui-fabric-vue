<template>
  <div class='ms-Breadcrumb' ref='breadcrumb'>
    <div class='ms-Breadcrumb-overflow'>
      <div class='ms-Breadcrumb-overflowButton ms-Icon ms-Icon--More'></div>
      <div class='ms-Breadcrumb-overflowMenu'>
        <ul class='ms-ContextualMenu'>
        </ul>
      </div>
    </div>
    <ul class="ms-Breadcrumb-list">
      <slot />
    </ul>
  </div>
</template>
<script>
  export default {
    mounted() {
      new fabric.Breadcrumb(this.$refs.breadcrumb);
    }
  };
</script>
