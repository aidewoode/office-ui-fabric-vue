<template>
<div class='ms-font-m'>
  <header class='header'>
    <div class='ms-fontColor-white ms-fontSize-xl'>Office UI Fabric Vue</div>
  </header>
  <div class='wrapper'>
    <div class='nav'>
      <docs-nav />
    </div>
    <div class='content'></div>
  </div>
</div>
</template>
<style scoped>
.header {
  display: flex;
  align-items: center;
  height: 50px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #000;
  padding: 0 8px;
}

.wrapper {
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  padding-top: 50px;
}

.nav {
  width: 208px;
}

.content {
  width: calc(100% - 208px);
  padding: 0 40px 0 40px;
}
</style>
<script>
import DocsNav from './components/DocsNav.vue';

export default {
  components: {
    DocsNav
  }
};
</script>
