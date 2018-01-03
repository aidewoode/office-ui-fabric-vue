<template>
  <div class='container'>
    <i class='ms-Icon ms-Icon--GlobalNavButton ms-fontColor-white' @click='openPanel' aria-hidden="true"></i>
    <ou-panel left v-model='panelVisiblity'>
      <docs-nav />
    </ou-panel>
  </div>
</template>
<style scoped>
  .container {
    display: none;
    margin-right: 20px;
  }

  @media (max-width: 479px) {
    .container {
      display: block;
    }
  }
</style>
<script>
  import DocsNav from './DocsNav.vue';

  export default {
    data() {
      return {
        panelVisiblity: false
      };
    },

    watch: {
      $route: 'closePanel'
    },

    components: {
      DocsNav
    },

    methods: {
      openPanel() {
        this.panelVisiblity = true;
      },

      closePanel() {
        this.panelVisiblity = false;
      }
    }
  };
</script>
